'use strict';
// spanish1-search.js — Spanish1 共通の検索・辞書機能
// 各レッスン HTML の inline <script> で GRAMMAR_TERMS, VOCAB_BASE を定義すること。
// このファイルは defer で読み込まれるため、DOM 解析完了後（VOCAB_BASE 定義後）に実行される。

/* ── 定数・状態 ── */
var PERSONAS = [
  {label:'yo',          sfx_ar:'o',    sfx_er:'o',    sfx_ir:'o'},
  {label:'tú',          sfx_ar:'as',   sfx_er:'es',   sfx_ir:'es'},
  {label:'él/ella',     sfx_ar:'a',    sfx_er:'e',    sfx_ir:'e'},
  {label:'nosotros',    sfx_ar:'amos', sfx_er:'emos', sfx_ir:'imos'},
  {label:'vosotros',    sfx_ar:'áis',  sfx_er:'éis',  sfx_ir:'ís'},
  {label:'ellos/ellas', sfx_ar:'an',   sfx_er:'en',   sfx_ir:'en'},
];
var VOCAB_INF = [];
var CONJ_MAP  = {};
var _srItems  = [];
var _dictReturnFocus = null;

/* ── ユーティリティ ── */
function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
function editDistance(a, b) {
  var m = a.length, n = b.length;
  if (Math.abs(m - n) > 3) return 99;
  var dp = Array.from({length: m + 1}, function(_, i) { return [i]; });
  for (var j = 1; j <= n; j++) dp[0][j] = j;
  for (var i = 1; i <= m; i++)
    for (var j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}
function highlight(text, query) {
  var n = stripAccents(query).toLowerCase();
  var t = stripAccents(text).toLowerCase();
  var i = t.indexOf(n);
  if (i === -1) return text;
  return text.slice(0, i) + '<mark>' + text.slice(i, i + query.length) + '</mark>' + text.slice(i + query.length);
}
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ── 活用形展開 ── */
function getConjForms(item) {
  var t = item.type || '';
  if (!t.startsWith('verb_')) return [];
  var ending = t === 'verb_ar' ? 'ar' : t === 'verb_er' ? 'er' : 'ir';
  if (!item.es.endsWith(ending)) return [];
  if (item.irreg) {
    var ir = item.irreg;
    return [
      {label:'yo',          form: ir.yo},
      {label:'tú',          form: ir.tu},
      {label:'él/ella',     form: ir.el},
      {label:'nosotros',    form: ir.nos},
      {label:'vosotros',    form: ir.vos},
      {label:'ellos/ellas', form: ir.ellos},
    ];
  }
  var stem = item.es.slice(0, -2);
  return PERSONAS.map(function(p) {
    var sfx = ending === 'ar' ? p.sfx_ar : ending === 'er' ? p.sfx_er : p.sfx_ir;
    return {label: p.label, form: stem + sfx};
  });
}

/* ── 検索 ── */
function findGrammarMatch(q) {
  var norm = q.trim().toLowerCase();
  for (var i = 0; i < GRAMMAR_TERMS.length; i++) {
    var g = GRAMMAR_TERMS[i];
    for (var j = 0; j < g.terms.length; j++) {
      var t = g.terms[j].toLowerCase();
      if (t.includes(norm) || norm.includes(t)) return g;
    }
  }
  return null;
}

function searchVocab(q) {
  if (!q || q.trim().length < 1) return {results:[], grammar:null, conjMatch:null};
  var raw  = q.trim();
  var norm = stripAccents(raw).toLowerCase();
  var isJa = /[　-鿿゠-ヿ]/.test(raw);

  var grammar = findGrammarMatch(raw);
  var conjMatch = null;
  var conjPrefixMatches = [];

  if (!isJa) {
    var cm = CONJ_MAP[norm];
    if (cm) { conjMatch = cm; }
    if (!conjMatch && norm.length >= 2) {
      Object.keys(CONJ_MAP).forEach(function(key) {
        if (key.startsWith(norm) && key !== norm) conjPrefixMatches.push(CONJ_MAP[key]);
      });
    }
  }

  var seen = {}, results = [];

  if (conjMatch) {
    results.push(Object.assign({}, conjMatch.item, {
      form: '活用形', conjForm: conjMatch.conj, conjPersona: conjMatch.persona, score: 0
    }));
    return {results: results, grammar: grammar, conjMatch: conjMatch};
  }

  if (conjPrefixMatches.length > 0) {
    conjPrefixMatches.forEach(function(pcm) {
      var key = pcm.item.es + '_' + pcm.conj;
      if (seen[key]) return;
      results.push(Object.assign({}, pcm.item, {
        form: '活用形', conjForm: pcm.conj, conjPersona: pcm.persona, score: 0
      }));
      seen[key] = 1;
    });
    results.sort(function(a, b) {
      var an = stripAccents(a.conjForm), bn = stripAccents(b.conjForm);
      return an < bn ? -1 : an > bn ? 1 : 0;
    });
    return {results: results.slice(0, 12), grammar: grammar, conjMatch: null};
  }

  VOCAB_INF.forEach(function(item) {
    var key = item.es;
    if (seen[key]) return;
    var score = 999;
    if (isJa) {
      if (item.ja.includes(raw)) score = 0;
    } else {
      var esN = stripAccents(item.es);
      if      (esN === norm)         score = 0;
      else if (esN.startsWith(norm)) score = 1;
      else if (esN.includes(norm))   score = 2;
      else {
        var d = editDistance(norm, esN);
        if (d <= Math.max(1, Math.floor(norm.length / 4))) score = 10 + d;
      }
      if (score > 3 && item.ja.includes(raw)) score = Math.min(score, 2);
    }
    if (score < 50) { results.push(Object.assign({}, item, {score: score})); seen[key] = 1; }
  });

  results.sort(function(a, b) { return a.score - b.score; });
  return {results: results.slice(0, 12), grammar: grammar, conjMatch: conjMatch};
}

/* ── 検索結果 UI ── */
function buildResultsHTML(results, grammar, q, conjMatch) {
  _srItems = results;
  var html = '';

  if (grammar) {
    html += '<div class="sr-item" tabindex="0" role="button"'
      + ' onclick="scrollToAnchor(\'' + grammar.id + '\'); closeSearch();"'
      + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();scrollToAnchor(\'' + grammar.id + '\');closeSearch();}"'
      + ' style="border-left:3px solid var(--accent2);">'
      + '<span class="sr-es" style="color:var(--accent2)">文法</span>'
      + '<span class="sr-ja">' + esc(grammar.label) + '</span>'
      + '<span class="sr-jump">→ ジャンプ</span>'
      + '</div>';
  }

  if (!results.length && !grammar) {
    return '<div class="sr-none">「' + esc(q) + '」に一致する単語が見つかりません</div>';
  }

  if (results.length) {
    html += '<div class="sr-header">'
      + (conjMatch ? '活用形' : '単語') + ' ' + results.length + '件'
      + '<span style="font-size:10px;color:var(--muted);margin-left:8px;">タップで辞書カードを表示</span></div>';
    results.forEach(function(r, i) {
      if (r.form === '活用形' && r.conjForm) {
        html += '<div class="sr-item" tabindex="0" role="button" style="cursor:pointer" data-idx="' + i + '" data-mode="conj"'
          + ' onclick="handleSrItemClick(this)"'
          + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleSrItemClick(this);}">'
          + '<span class="sr-es"><mark>' + esc(r.conjForm) + '</mark><span class="sr-form">活用形</span></span>'
          + '<span class="sr-ja">' + esc(r.ja) + '</span>'
          + '<span class="sr-jump" style="font-size:13px">📖</span>'
          + '</div>';
      } else {
        var badge = r.pos ? '<span class="sr-pos">' + esc(r.pos) + '</span>' : '';
        html += '<div class="sr-item" tabindex="0" role="button" style="cursor:pointer" data-idx="' + i + '" data-mode="word"'
          + ' onclick="handleSrItemClick(this)"'
          + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleSrItemClick(this);}">'
          + '<span class="sr-es">' + highlight(r.es, q) + badge + '</span>'
          + '<span class="sr-ja">' + esc(r.ja) + '</span>'
          + '<span class="sr-jump" style="font-size:13px">📖</span>'
          + '</div>';
      }
    });
  }
  return html;
}

function handleSrItemClick(el) {
  var idx  = parseInt(el.dataset.idx, 10);
  var mode = el.dataset.mode;
  var r = _srItems[idx];
  if (!r) return;
  if (mode === 'conj') openDictModal(r, {conj: r.conjForm, persona: r.conjPersona});
  else openDictModal(r, null);
}

function renderTo(targetId, results, grammar, q, conjMatch) {
  var box = document.getElementById(targetId);
  box.innerHTML = buildResultsHTML(results, grammar, q, conjMatch);
  box.classList.add('has-results');
}

/* ── 辞書モーダル ── */
function openDictModal(item, conjInfo) {
  _dictReturnFocus = document.activeElement;
  var overlay = document.getElementById('dict-overlay');
  var wordEl  = document.getElementById('dict-modal-word');
  var posEl   = document.getElementById('dict-modal-pos');
  var bodyEl  = document.getElementById('dict-modal-body');

  wordEl.textContent = conjInfo ? conjInfo.conj : item.es;
  posEl.textContent  = item.pos || '';

  var body = '';
  if (conjInfo) {
    body += '<div class="dict-conj-badge">入力した形：' + esc(conjInfo.conj)
      + '　＝　' + esc(conjInfo.persona) + ' の活用形</div>';
  }
  body += '<div class="dict-ja-big">' + esc(item.ja) + '</div>';
  if (conjInfo) {
    body += '<div class="dict-row"><span class="dict-label">不定詞</span>'
      + '<span class="dict-val"><span class="mono" style="font-weight:700;color:var(--accent);font-size:14px;">'
      + esc(item.es) + '</span>　' + esc(item.ja) + '</span></div>';
  }
  body += '<div class="dict-row"><span class="dict-label">分類</span><span class="dict-val">'
    + '<span class="dict-tag">' + esc(item.tag || '') + '</span>'
    + (item.pos ? '<span class="dict-tag">' + esc(item.pos) + '</span>' : '')
    + '</span></div>';

  var t = item.type || '';
  if (t === 'verb_irreg_pret' && item.irreg_pret) {
    var forms = ['yo','tú','él/ella','nosotros','vosotros','ellos/ellas'].map(function(lbl, idx) {
      var keys = ['yo','tu','el','nos','vos','ellos'];
      return {label: lbl, form: item.irreg_pret[keys[idx]]};
    });
    body += _conjTable('点過去活用', '⚠ 不規則活用（アクセント記号なし）', forms, conjInfo);
  } else if (t === 'verb_irreg_imperf' && item.irreg_imperf) {
    var forms2 = ['yo','tú','él/ella','nosotros','vosotros','ellos/ellas'].map(function(lbl, idx) {
      var keys = ['yo','tu','el','nos','vos','ellos'];
      return {label: lbl, form: item.irreg_imperf[keys[idx]]};
    });
    body += _conjTable('線過去活用', '⚠ 不規則活用', forms2, conjInfo);
  } else if (t.startsWith('verb_')) {
    var ending = t === 'verb_ar' ? 'ar' : t === 'verb_er' ? 'er' : 'ir';
    if (item.es.endsWith(ending)) {
      var fList = getConjForms(item);
      var warn  = item.irreg ? '⚠ 不規則活用' : '';
      body += _conjTable('現在形活用', warn, fList, conjInfo);
    }
  }

  if (item.tag && item.tag.includes('再帰動詞')) {
    body += '<div class="dict-row"><span class="dict-label">用法</span><span class="dict-val">'
      + '再帰代名詞（me/te/se/nos/os/se）と共に使う。活用形の前 or 不定詞の後に置く</span></div>';
  }
  if (item.tag === '前置詞') {
    body += '<div class="dict-row"><span class="dict-label">用法</span><span class="dict-val">'
      + '名詞・代名詞・不定詞の前に置く。al（a+el）、del（de+el）に縮約。</span></div>';
  } else if (item.tag === '疑問詞') {
    body += '<div class="dict-row"><span class="dict-label">用法</span><span class="dict-val">'
      + '疑問文の文頭（¿ の直後）に置く。常にアクセント記号あり。</span></div>';
  }
  if (item.anchor && document.getElementById(item.anchor)) {
    body += '<button class="dict-jump-btn" onclick="scrollToAnchor(\'' + item.anchor + '\'); closeDictModal();">→ 解説ページへジャンプ</button>';
  }

  bodyEl.innerHTML = body;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    var closeBtn = document.getElementById('dict-modal-close');
    if (closeBtn) closeBtn.focus();
  }, 50);
}

function _conjTable(label, warnMsg, forms, conjInfo) {
  var html = '<div class="dict-row"><span class="dict-label">' + label + '</span>'
    + '<span class="dict-val" style="overflow-x:auto;display:block">';
  if (warnMsg) html += '<div style="font-size:10.5px;color:var(--warn);margin-bottom:4px;font-weight:700;">' + warnMsg + '</div>';
  html += '<table class="dict-conj-table"><thead><tr><th>人称</th><th>活用形</th></tr></thead><tbody>';
  forms.forEach(function(f) {
    var hi = conjInfo && stripAccents(conjInfo.conj) === stripAccents(f.form || '');
    html += '<tr' + (hi ? ' class="dict-conj-row-hi"' : '') + '>'
      + '<td>' + esc(f.label) + '</td>'
      + '<td>' + esc(f.form || '') + (hi ? '　◀ 入力形' : '') + '</td></tr>';
  });
  html += '</tbody></table></span></div>';
  return html;
}

function closeDictModal() {
  document.getElementById('dict-overlay').classList.remove('open');
  document.body.style.overflow = '';
  if (_dictReturnFocus && typeof _dictReturnFocus.focus === 'function') _dictReturnFocus.focus();
  _dictReturnFocus = null;
}

/* ── 検索バー UI ── */
function openSearch() {
  var bar = document.getElementById('search-bar');
  if (bar) bar.classList.add('open');
  setTimeout(function() {
    var inp = document.getElementById('search-input');
    if (inp) inp.focus();
  }, 180);
}
function closeSearch() {
  var bar = document.getElementById('search-bar');
  if (bar) bar.classList.remove('open');
  var res = document.getElementById('search-results');
  if (res) res.classList.remove('has-results');
  var inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  var cres = document.getElementById('cover-search-results');
  if (cres) cres.classList.remove('has-results');
}

/* ── RAW 辞書統合（dict-data.js がロード済みの場合のみ有効） ── */
function _initRawDictIntegration() {
  if (typeof RAW === 'undefined' || typeof F === 'undefined') return;

  var _LABELS = ['yo','tú','él/ella','nosotros','vosotros','ellos/ellas'];

  function _openModalFromRAW(idx) {
    var e = RAW[idx];
    var overlay = document.getElementById('dict-overlay');
    var wordEl  = document.getElementById('dict-modal-word');
    var posEl   = document.getElementById('dict-modal-pos');
    var bodyEl  = document.getElementById('dict-modal-body');
    wordEl.textContent = e[F.word];
    posEl.textContent  = e[F.pos];
    var body = '<div class="dict-ja-big">' + esc(e[F.meaning]) + '</div>';
    if (e[F.gender]) {
      body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val">'
        + (e[F.gender]==='m' ? '男性名詞' : e[F.gender]==='f' ? '女性名詞' : esc(e[F.gender]))
        + '</span></div>';
    }
    if (e[F.plural]) {
      body += '<div class="dict-row"><span class="dict-label">複数形</span>'
        + '<span class="dict-val" style="font-family:var(--mono);color:var(--accent)">' + esc(e[F.plural]) + '</span></div>';
    }
    if (e[F.vtype]) {
      body += '<div class="dict-row"><span class="dict-label">動詞型</span>'
        + '<span class="dict-val">' + esc(e[F.vtype]) + '</span></div>';
    }
    if (e[F.conj]) {
      var cForms = e[F.conj].split(/,\s*/);
      body += '<div class="dict-row"><span class="dict-label">現在活用</span>'
        + '<span class="dict-val" style="overflow-x:auto;display:block">'
        + '<table class="dict-conj-table"><thead><tr><th>人称</th><th>活用形</th></tr></thead><tbody>';
      cForms.forEach(function(f, i) {
        body += '<tr><td>' + (_LABELS[i] || '') + '</td><td>' + esc(f.trim()) + '</td></tr>';
      });
      body += '</tbody></table></span></div>';
    }
    if (e[F.adj]) {
      body += '<div class="dict-row"><span class="dict-label">形容詞変化</span><span class="dict-val">';
      e[F.adj].split(/,\s*/).forEach(function(f) {
        body += '<span class="dict-tag" style="font-family:var(--mono)">' + esc(f.trim()) + '</span>';
      });
      body += '</span></div>';
    }
    if (e[F.note]) {
      body += '<div class="dict-row"><span class="dict-label">備考</span>'
        + '<span class="dict-val" style="color:var(--mid);font-size:12px">' + esc(e[F.note]) + '</span></div>';
    }
    if (typeof DICT_EXAMPLES !== 'undefined' && DICT_EXAMPLES[e[F.word]]) {
      var ex = DICT_EXAMPLES[e[F.word]];
      body += '<div style="margin-top:10px;padding:8px 12px;background:#ecf3fa;border-left:3px solid #2a5298;border-radius:0 4px 4px 0">'
        + '<div style="font-size:10px;font-weight:700;color:#2a5298;letter-spacing:.05em;margin-bottom:4px">例文</div>'
        + '<div style="font-family:var(--mono);font-size:13px;font-weight:600;margin-bottom:2px">' + esc(ex.es) + '</div>'
        + '<div style="font-size:12px;color:var(--muted);font-style:italic">' + esc(ex.ja) + '</div>'
        + '</div>';
    }
    bodyEl.innerHTML = body;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function _sAcc(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  var _isJaS = function(s) { return /[　-鿿＀-￯]/.test(s); };

  function _searchDictRAW(q) {
    var norm = _sAcc(q), ja = _isJaS(q), seen = {}, results = [];
    for (var i = 0; i < RAW.length; i++) {
      var e = RAW[i];
      var word = e[F.word], meaning = e[F.meaning], conj = e[F.conj] || '';
      if (seen[word]) continue;
      var score = 999;
      if (ja) {
        if (meaning.includes(q)) score = 0;
      } else {
        var wn = _sAcc(word);
        if      (wn === norm)         score = 0;
        else if (wn.startsWith(norm)) score = 1;
        else if (wn.includes(norm))   score = 2;
        if (score > 2 && conj) {
          conj.split(/,\s*/).forEach(function(f) {
            var fn = _sAcc(f.trim());
            if (fn === norm)         score = Math.min(score, 0.5);
            if (fn.startsWith(norm)) score = Math.min(score, 1.5);
          });
        }
      }
      if (score < 50) { results.push({i: i, word: word, meaning: meaning, pos: e[F.pos], score: score}); seen[word] = 1; }
    }
    results.sort(function(a, b) { return a.score - b.score; });
    return results.slice(0, 15);
  }

  var _origRenderTo = renderTo;
  var _dictHits1 = [];
  renderTo = function(targetId, results, grammar, q, conjMatch) {
    _origRenderTo(targetId, results, grammar, q, conjMatch);
    if (!q) return;
    _dictHits1 = _searchDictRAW(q);
    if (!_dictHits1.length) return;
    var box = document.getElementById(targetId);
    box.classList.add('has-results');
    var html = '<div class="sr-header">辞書（' + _dictHits1.length + '件）— クリックで詳細表示</div>';
    _dictHits1.forEach(function(h, i) {
      html += '<div class="sr-item" style="cursor:pointer" data-rawdictidx="' + i + '">'
        + '<span class="sr-es" style="color:var(--rd)">' + esc(h.word) + '<span class="sr-pos">' + esc(h.pos) + '</span></span>'
        + '<span class="sr-ja">' + esc(h.meaning.slice(0, 50)) + '</span>'
        + '<span class="sr-jump" style="font-size:13px">📖</span>'
        + '</div>';
    });
    box.innerHTML += html;
    box.querySelectorAll('[data-rawdictidx]').forEach(function(el) {
      var idx = parseInt(el.dataset.rawdictidx);
      el.addEventListener('click', function() { _openModalFromRAW(_dictHits1[idx].i); });
    });
  };
}

/* ── 初期化（defer により DOM 解析完了後・VOCAB_BASE 定義後に実行） ── */
(function() {
  if (typeof VOCAB_BASE === 'undefined') return;

  // 派生データを構築
  VOCAB_INF = VOCAB_BASE.map(function(item) { return Object.assign({}, item, {form: '不定詞'}); });
  CONJ_MAP  = {};
  VOCAB_BASE.forEach(function(item) {
    getConjForms(item).forEach(function(f) {
      var key = stripAccents(f.form);
      if (!CONJ_MAP[key]) CONJ_MAP[key] = {item: item, persona: f.label, conj: f.form};
    });
  });

  // 検索バー
  var sinput = document.getElementById('search-input');
  if (sinput) sinput.addEventListener('input', function() {
    var q = this.value.trim(), box = document.getElementById('search-results');
    if (q.length < 1) { box.classList.remove('has-results'); return; }
    var sr = searchVocab(q);
    renderTo('search-results', sr.results, sr.grammar, q, sr.conjMatch);
  });

  var cinput = document.getElementById('cover-search-input');
  if (cinput) cinput.addEventListener('input', function() {
    var q = this.value.trim(), box = document.getElementById('cover-search-results');
    if (q.length < 1) { box.classList.remove('has-results'); return; }
    var sr = searchVocab(q);
    renderTo('cover-search-results', sr.results, sr.grammar, q, sr.conjMatch);
  });

  var sclose = document.getElementById('search-close');
  if (sclose) sclose.addEventListener('click', closeSearch);

  var fnBtn = document.getElementById('fn-search-btn');
  if (fnBtn) fnBtn.addEventListener('click', openSearch);

  // 検索結果外クリックで閉じる
  document.addEventListener('click', function(e) {
    var bar = document.getElementById('search-bar');
    var res = document.getElementById('search-results');
    var btn = document.getElementById('top-search-btn');
    if (bar && res && !bar.contains(e.target) && !res.contains(e.target) && e.target !== btn)
      res.classList.remove('has-results');
    var cs  = document.querySelector('.cover-search');
    var cr  = document.getElementById('cover-search-results');
    if (cr && cs && !cs.contains(e.target) && !cr.contains(e.target))
      cr.classList.remove('has-results');
  });

  // フローティングナビ
  var toggle = document.getElementById('float-nav-toggle');
  var menu   = document.getElementById('float-nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function(e) { e.stopPropagation(); menu.classList.toggle('open'); });
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && e.target !== toggle) menu.classList.remove('open');
    });
    menu.querySelectorAll('a.fn-item').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var sectionId = (link.getAttribute('href') || '').replace('#', '');
        if (sectionId) jumpToSection(sectionId);
        menu.classList.remove('open');
      });
    });
  }

  // 語彙ピル
  document.querySelectorAll('#tab-vocab .pill').forEach(function(pill) {
    pill.title = 'タップして詳細を確認';
    pill.addEventListener('click', function() {
      var esEl = pill.querySelector('.pill-es');
      if (!esEl) return;
      var es = esEl.textContent.trim().toLowerCase();
      for (var i = 0; i < VOCAB_BASE.length; i++) {
        if (VOCAB_BASE[i].es.toLowerCase() === es) { openDictModal(VOCAB_BASE[i], null); return; }
      }
    });
    pill.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pill.click(); }
    });
  });

  // RAW 辞書統合
  _initRawDictIntegration();
})();
