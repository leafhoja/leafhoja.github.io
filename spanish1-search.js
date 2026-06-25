'use strict';
// spanish1-search.js — 一列・二列 共通の検索・辞書機能
// VOCAB_BASE / GRAMMAR_TERMS が未定義の場合は DOM から自動抽出する。
// UI 要素（検索バー・辞書モーダル等）が HTML に存在しない場合は自動注入する。

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
var _dictHits = [];
var _dictReturnFocus = null;
var _GRAMMAR_TERMS_LOCAL = null;

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
function makeBadge(form, hl) {
  var cls = 'dict-conj-badge';
  if (hl && stripAccents(form.trim()) === stripAccents(hl)) cls += ' dict-conj-badge--active';
  return '<span class="' + cls + '">' + esc(form.trim()) + '</span>';
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

/* ── 語彙検索 ── */
function findGrammarMatch(q) {
  var gt = (typeof GRAMMAR_TERMS !== 'undefined') ? GRAMMAR_TERMS : _GRAMMAR_TERMS_LOCAL;
  if (!gt || !gt.length) return null;
  var norm = q.trim().toLowerCase();
  for (var i = 0; i < gt.length; i++) {
    var g = gt[i];
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

/* ── RAW 辞書検索 ── */
function _searchDictRAW(q) {
  if (typeof RAW === 'undefined' || typeof F === 'undefined') return [];
  var norm = stripAccents(q), isJa = /[　-鿿゠-ヿ一-龯]/.test(q);
  var seen = {}, results = [];
  for (var i = 0; i < RAW.length; i++) {
    var e = RAW[i];
    var word = e[F.word], meaning = e[F.meaning], conj = e[F.conj] || '';
    if (seen[word]) continue;
    var score = 999, matchedForm = null;
    if (isJa) {
      if (meaning.includes(q)) score = 0;
    } else {
      var wn = stripAccents(word);
      if      (wn === norm)         score = 0;
      else if (wn.startsWith(norm)) score = 1;
      else if (wn.includes(norm))   score = 2;
      if (score > 2 && conj) {
        var forms = conj.split(/,\s*/);
        for (var f = 0; f < forms.length; f++) {
          var fn = stripAccents(forms[f].trim());
          if (fn === norm)         { score = Math.min(score, 0.5); matchedForm = q; break; }
          if (fn.startsWith(norm)) { score = Math.min(score, 1.5); }
        }
      }
    }
    if (score < 50) { results.push({idx: i, word: word, meaning: meaning, pos: e[F.pos], score: score, matchedForm: matchedForm}); seen[word] = 1; }
  }
  results.sort(function(a, b) { return a.score - b.score; });
  return results.slice(0, 15);
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

  if (!results.length && !grammar && !_dictHits.length) {
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
        var tabLabel = r._tabId === 'tab-kaiwa'  ? '<span class="sr-tag">→ 会話</span>'
                     : r._tabId === 'tab-dokkai' ? '<span class="sr-tag">→ 読解</span>'
                     : r._tabId === 'tab-renshu' ? '<span class="sr-tag">→ 練習</span>'
                     : '<span class="sr-jump" style="font-size:13px">📖</span>';
        html += '<div class="sr-item" tabindex="0" role="button" style="cursor:pointer" data-idx="' + i + '" data-mode="word"'
          + ' onclick="handleSrItemClick(this)"'
          + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleSrItemClick(this);}">'
          + '<span class="sr-es">' + highlight(r.es, q) + badge + '</span>'
          + '<span class="sr-ja">' + esc(r.ja) + '</span>'
          + tabLabel
          + '</div>';
      }
    });
  }

  if (_dictHits.length) {
    html += '<div class="sr-header">辞書 ' + _dictHits.length + '件'
      + '<span style="font-size:10px;color:var(--muted);margin-left:8px;">クリックで詳細表示</span></div>';
    _dictHits.forEach(function(h, i) {
      html += '<div class="sr-item" tabindex="0" role="button" style="cursor:pointer" data-dict="' + i + '"'
        + ' onclick="handleSrDictClick(this)"'
        + ' onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();handleSrDictClick(this);}">'
        + '<span class="sr-es" style="color:var(--rd)">' + esc(h.word) + '<span class="sr-pos">' + esc(h.pos) + '</span></span>'
        + '<span class="sr-ja">' + esc(h.meaning.slice(0, 50)) + '</span>'
        + '<span class="sr-jump" style="font-size:13px">📖</span>'
        + '</div>';
    });
  }

  return html;
}

function handleSrItemClick(el) {
  var idx  = parseInt(el.dataset.idx, 10);
  var mode = el.dataset.mode;
  var r = _srItems[idx];
  if (!r) return;
  if (mode === 'conj') {
    openDictModal(r, {conj: r.conjForm, persona: r.conjPersona});
  } else if (r._card || r._tabId) {
    closeSearch();
    if (typeof openWordModal === 'function') openWordModal(r.es, r.ja);
    _jumpToEntry(r);
  } else {
    openDictModal(r, null);
  }
}

function handleSrDictClick(el) {
  var idx = parseInt(el.dataset.dict, 10);
  var h = _dictHits[idx];
  if (!h) return;
  openDictModalByIdx(h.idx, h.matchedForm);
}

function renderTo(targetId, results, grammar, q, conjMatch) {
  var box = document.getElementById(targetId);
  box.innerHTML = buildResultsHTML(results, grammar, q, conjMatch);
  box.classList.add('has-results');
}

/* ── 語彙カードへジャンプ（二列専用） ── */
function _jumpToEntry(item) {
  if (item._tabId) {
    var tabName = item._tabId.replace('tab-', '');
    var tabContent = document.getElementById(item._tabId);
    if (tabContent && !tabContent.classList.contains('active')) {
      var btn = document.querySelector('.tab-btn[onclick*="\'' + tabName + '\'"]');
      if (btn) btn.click();
    }
  }
  if (item._card) {
    setTimeout(function() {
      item._card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var prev = item._card.style.outline;
      item._card.style.outline = '2px solid var(--accent2)';
      item._card.style.outlineOffset = '2px';
      setTimeout(function() {
        item._card.style.outline = prev;
        item._card.style.outlineOffset = '';
      }, 1600);
    }, 150);
  }
}

/* ── VOCAB_BASE アイテム用辞書モーダル ── */
function openDictModal(item, conjInfo) {
  _dictReturnFocus = document.activeElement;
  var overlay = document.getElementById('dict-overlay');
  var wordEl  = document.getElementById('dict-modal-word');
  var posEl   = document.getElementById('dict-modal-pos');
  var bodyEl  = document.getElementById('dict-modal-body');
  if (!overlay || !wordEl || !posEl || !bodyEl) return;

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

  if (item._lessonVocabData) {
    var lv = item._lessonVocabData;
    if (lv.conj) {
      body += '<div class="dict-row"><span class="dict-label">活用形</span>'
        + '<span class="dict-val" style="font-family:var(--mono);font-size:12px;color:var(--accent2)">'
        + esc(lv.conj) + '</span></div>';
    }
    if (lv.vtype) {
      body += '<div class="dict-row"><span class="dict-label">動詞型</span>'
        + '<span class="dict-val">' + esc(lv.vtype) + '</span></div>';
    }
    if (lv.note) {
      body += '<div class="dict-note">' + esc(lv.note) + '</div>';
    }
    if (lv.example) {
      body += '<div class="dict-example">'
        + '<div class="dict-example-label">例文</div>'
        + '<div class="dict-example-es">' + esc(lv.example.es) + '</div>'
        + '<div class="dict-example-ja">' + esc(lv.example.ja) + '</div>'
        + '</div>';
    }
  }

  var _es = item.es;
  var _hasEx = item._lessonVocabData && item._lessonVocabData.example;
  if (!_hasEx && typeof DICT_EXAMPLES !== 'undefined' && DICT_EXAMPLES[_es]) {
    var _ex = DICT_EXAMPLES[_es];
    body += '<div class="dict-example">'
      + '<div class="dict-example-label">例文</div>'
      + '<div class="dict-example-es">' + esc(_ex.es) + '</div>'
      + '<div class="dict-example-ja">' + esc(_ex.ja) + '</div>'
      + '</div>';
  }
  if (typeof DICT_BOOST !== 'undefined' && DICT_BOOST[_es]) {
    body += '<div class="dict-boost">🔗 ' + esc(DICT_BOOST[_es]) + '</div>';
  }
  if (typeof DICT_TRIVIA !== 'undefined' && DICT_TRIVIA[_es]) {
    body += '<div class="dict-trivia">💡 ' + esc(DICT_TRIVIA[_es]) + '</div>';
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

/* ── RAW インデックスで辞書モーダルを開く（一列・二列共通） ── */
function openDictModalByIdx(rawIdx, highlightForm) {
  if (typeof RAW === 'undefined' || !RAW[rawIdx]) return;
  _dictReturnFocus = document.activeElement;
  var e = RAW[rawIdx];
  var word    = e[F.word]    || '';
  var pos     = e[F.pos]     || '';
  var meaning = (typeof DICT_MEANINGS !== 'undefined' && DICT_MEANINGS[word] && DICT_MEANINGS[word].meaning)
    ? DICT_MEANINGS[word].meaning : (e[F.meaning] || '');
  var gender  = e[F.gender]  || '';
  var plural  = e[F.plural]  || '';
  var conj    = e[F.conj]    || '';
  var vtype   = e[F.vtype]   || '';
  var adj     = e[F.adj]     || '';
  var note    = e[F.note]    || '';

  var _dc = (typeof DICT_CONJ !== 'undefined') ? (DICT_CONJ[word] || null) : null;
  if (_dc) {
    if (_dc.gender) gender = _dc.gender;
    if (_dc.plural) plural = _dc.plural;
    if (_dc.vtype)  vtype  = _dc.vtype;
    if (_dc.adj)    adj    = _dc.adj.join(', ');
  }

  document.getElementById('dict-modal-word').textContent = word;
  document.getElementById('dict-modal-pos').textContent  = pos;

  var body = '<div class="dict-ja-big">' + esc(meaning) + '</div>';

  if (gender === 'm') {
    body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val"><span class="dict-tag" style="background:#dbeafe;color:#1e40af">男性 (m)</span></span></div>';
  } else if (gender === 'f') {
    body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val"><span class="dict-tag" style="background:#fce7f3;color:#9d174d">女性 (f)</span></span></div>';
  }
  if (plural) body += '<div class="dict-row"><span class="dict-label">複数形</span><span class="dict-val" style="font-family:var(--mono);font-weight:600;color:var(--accent)">' + esc(plural) + '</span></div>';
  if (vtype)  body += '<div class="dict-row"><span class="dict-label">動詞型</span><span class="dict-val">' + esc(vtype) + '</span></div>';

  var presConj = (_dc && _dc.pres) ? _dc.pres.join(', ') : conj;
  if (presConj) {
    var cHtml = presConj.split(/,\s*/).map(function(f) { return makeBadge(f, highlightForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">現在活用</span><div class="dict-val"><div class="conj-list">' + cHtml + '</div></div></div>';
  }
  if (_dc && _dc.pret) {
    var pretHtml = _dc.pret.map(function(f) { return makeBadge(f, highlightForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">点過去</span><div class="dict-val"><div class="conj-list">' + pretHtml + '</div></div></div>';
  }
  if (_dc && _dc.imp) {
    var impHtml = _dc.imp.map(function(f) { return makeBadge(f, highlightForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">線過去</span><div class="dict-val"><div class="conj-list">' + impHtml + '</div></div></div>';
  }
  var ger = (_dc && _dc.ger) ? _dc.ger : null;
  var pp  = (_dc && _dc.pp)  ? _dc.pp  : null;
  if (!ger && !pp && pos.indexOf('動詞') >= 0 && word.length > 2) {
    var end2 = word.slice(-2).toLowerCase(), stem = word.slice(0, -2);
    if (end2 === 'ar') { ger = stem + 'ando'; pp = stem + 'ado'; }
    else if (end2 === 'er' || end2 === 'ir') { ger = stem + 'iendo'; pp = stem + 'ido'; }
  }
  if (ger || pp) {
    var partHtml = (ger ? makeBadge(ger, highlightForm) : '') + (pp ? makeBadge(pp, highlightForm) : '');
    body += '<div class="dict-row"><span class="dict-label">分詞形</span><div class="dict-val"><div class="conj-list">' + partHtml + '</div></div></div>';
  }
  if (adj) {
    var aHtml = adj.split(/,\s*/).map(function(f) { return makeBadge(f, highlightForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">形容詞変化</span><div class="dict-val"><div class="conj-list">' + aHtml + '</div></div></div>';
  }
  if (note) body += '<div class="dict-note">📝 ' + esc(note) + '</div>';

  if (typeof DICT_EXAMPLES !== 'undefined' && DICT_EXAMPLES[word]) {
    var ex = DICT_EXAMPLES[word];
    body += '<div class="dict-example">'
      + '<div class="dict-example-label">例文</div>'
      + '<div class="dict-example-es">' + esc(ex.es) + '</div>'
      + '<div class="dict-example-ja">' + esc(ex.ja) + '</div>'
      + '</div>';
  }
  if (typeof DICT_BOOST !== 'undefined' && DICT_BOOST[word]) {
    body += '<div class="dict-boost">🔗 ' + esc(DICT_BOOST[word]) + '</div>';
  }
  if (typeof DICT_TRIVIA !== 'undefined' && DICT_TRIVIA[word]) {
    body += '<div class="dict-trivia">💡 ' + esc(DICT_TRIVIA[word]) + '</div>';
  }

  document.getElementById('dict-modal-body').innerHTML = body;
  document.getElementById('dict-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    var closeBtn = document.getElementById('dict-modal-close');
    if (closeBtn) closeBtn.focus();
  }, 50);
}

/* ── WORD_IDX でモーダルを開く ── */
function openDictModalFromWordIdx(baseWord, data, displayForm) {
  _dictReturnFocus = document.activeElement;
  var pos     = data[0] || '';
  var meaning = data[1] || '';
  var extra   = data[2] || '';

  var header = displayForm && displayForm !== baseWord
    ? displayForm + '（← ' + baseWord + '）' : baseWord;
  document.getElementById('dict-modal-word').textContent = header;
  document.getElementById('dict-modal-pos').textContent  = pos;

  var body = '<div class="dict-ja-big">' + esc(meaning) + '</div>';

  if (extra === 'm' || extra === 'f') {
    var gStyle = extra === 'm' ? 'background:#dbeafe;color:#1e40af' : 'background:#fce7f3;color:#9d174d';
    var gLabel = extra === 'm' ? '男性 (m)' : '女性 (f)';
    body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val"><span class="dict-tag" style="' + gStyle + '">' + gLabel + '</span></span></div>';
  } else if (extra) {
    body += '<div class="dict-row"><span class="dict-label">動詞型</span><span class="dict-val">' + esc(extra) + '</span></div>';
  }

  var _dc = (typeof DICT_CONJ !== 'undefined') ? (DICT_CONJ[baseWord] || null) : null;
  if (_dc && _dc.pres) {
    var cHtml = _dc.pres.map(function(f) { return makeBadge(f, displayForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">現在活用</span><div class="dict-val"><div class="conj-list">' + cHtml + '</div></div></div>';
  }
  if (_dc && _dc.pret) {
    var ptHtml = _dc.pret.map(function(f) { return makeBadge(f, displayForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">点過去</span><div class="dict-val"><div class="conj-list">' + ptHtml + '</div></div></div>';
  }
  if (_dc && _dc.imp) {
    var imHtml = _dc.imp.map(function(f) { return makeBadge(f, displayForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">線過去</span><div class="dict-val"><div class="conj-list">' + imHtml + '</div></div></div>';
  }
  if (_dc && _dc.adj) {
    var adHtml = _dc.adj.map(function(f) { return makeBadge(f, displayForm); }).join('');
    body += '<div class="dict-row"><span class="dict-label">形容詞変化</span><div class="dict-val"><div class="conj-list">' + adHtml + '</div></div></div>';
  }
  if (typeof DICT_EXAMPLES !== 'undefined' && DICT_EXAMPLES[baseWord]) {
    var ex = DICT_EXAMPLES[baseWord];
    body += '<div class="dict-example"><div class="dict-example-label">例文</div>'
      + '<div class="dict-example-es">' + esc(ex.es) + '</div>'
      + '<div class="dict-example-ja">' + esc(ex.ja) + '</div></div>';
  }
  if (typeof DICT_BOOST !== 'undefined' && DICT_BOOST[baseWord]) {
    body += '<div class="dict-boost">🔗 ' + esc(DICT_BOOST[baseWord]) + '</div>';
  }
  if (typeof DICT_TRIVIA !== 'undefined' && DICT_TRIVIA[baseWord]) {
    body += '<div class="dict-trivia">💡 ' + esc(DICT_TRIVIA[baseWord]) + '</div>';
  }

  document.getElementById('dict-modal-body').innerHTML = body;
  document.getElementById('dict-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    var closeBtn = document.getElementById('dict-modal-close');
    if (closeBtn) closeBtn.focus();
  }, 50);
}

function closeDictModal() {
  var ov = document.getElementById('dict-overlay');
  if (ov) ov.classList.remove('open');
  document.body.style.overflow = '';
  if (_dictReturnFocus && typeof _dictReturnFocus.focus === 'function') _dictReturnFocus.focus();
  _dictReturnFocus = null;
}

/* ── 単語を辞書で開く（グローバル、phrase-lookup.js からも使用） ── */
window.openDictByWord = function(word, fallback, highlightForm) {
  function doOpen() {
    // 前処理: -las→las, favorito/a→favorito, ¡Qué...!→Qué
    word = word.replace(/^-+/, '');
    if (word.indexOf('/') !== -1) word = word.replace(/\/.*/,'');
    if (word.indexOf(' ') < 0) {
      word = word.replace(/^[¡¿]+/, '').replace(/[!?]+$/, '').replace(/\.{2,}[\s\S]*$/, '').trim();
    }
    if (!word) { if (fallback) fallback(); return; }
    var norm = stripAccents(word.toLowerCase());
    var hl = highlightForm || null;

    // アクセント付き文字はまず完全一致（小文字）で試みる
    if (norm !== word.toLowerCase()) {
      var exact = word.toLowerCase();
      if (typeof RAW !== 'undefined') {
        for (var k = 0; k < RAW.length; k++) {
          if (RAW[k][F.word].toLowerCase() === exact) { openDictModalByIdx(k, hl); return; }
        }
      }
      if (typeof WORD_IDX !== 'undefined') {
        if (WORD_IDX[exact]) { openDictModalFromWordIdx(exact, WORD_IDX[exact], hl); return; }
        if (typeof FORM_IDX !== 'undefined' && FORM_IDX[exact] && WORD_IDX[FORM_IDX[exact]]) {
          var b0 = FORM_IDX[exact];
          openDictModalFromWordIdx(b0, WORD_IDX[b0], hl || exact);
          return;
        }
      }
    }

    // RAW に直接一致（exact lowercase 優先→ strip フォールバック）
    // ※ una/uña・que/qué などアクセント除去による衝突を防ぐため exact 優先
    if (typeof RAW !== 'undefined') {
      var normMatchIdx = -1;
      var wLower = word.toLowerCase();
      for (var i = 0; i < RAW.length; i++) {
        if (RAW[i][F.word].toLowerCase() === wLower) { openDictModalByIdx(i, hl); return; }
        if (stripAccents(RAW[i][F.word]) === norm && normMatchIdx < 0) normMatchIdx = i;
      }
      if (normMatchIdx >= 0) { openDictModalByIdx(normMatchIdx, hl); return; }
      // FORM_IDX 経由（exact lowercase も試す — アクセント付きキー対応）
      var wLower = word.toLowerCase();
      if (typeof FORM_IDX !== 'undefined') {
        var base1 = FORM_IDX[norm] || FORM_IDX[wLower];
        if (base1) {
          var base1n = stripAccents(base1);
          for (var j = 0; j < RAW.length; j++) {
            if (RAW[j][F.word].toLowerCase() === base1 || stripAccents(RAW[j][F.word]) === base1n) {
              openDictModalByIdx(j, hl || word); return;
            }
          }
          if (typeof WORD_IDX !== 'undefined' && WORD_IDX[base1]) {
            openDictModalFromWordIdx(base1, WORD_IDX[base1], hl || word); return;
          }
        }
      }
    }

    // WORD_IDX から（RAW にない語: hola, ser など）
    if (typeof WORD_IDX !== 'undefined') {
      var wLower2 = word.toLowerCase();
      if (WORD_IDX[norm] || WORD_IDX[wLower2]) {
        var wkey = WORD_IDX[norm] ? norm : wLower2;
        openDictModalFromWordIdx(wkey, WORD_IDX[wkey], hl); return;
      }
      if (typeof FORM_IDX !== 'undefined') {
        var base2 = FORM_IDX[norm] || FORM_IDX[wLower2];
        if (base2 && WORD_IDX[base2]) {
          openDictModalFromWordIdx(base2, WORD_IDX[base2], hl || norm); return;
        }
      }
    }

    // 冠詞を除去して再試行 ("el fútbol" → "fútbol", "las recomendaciones" → "recomendaciones")
    var stripped = word.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, '').trim();
    if (stripped !== word && stripped.length > 0) {
      var sLower = stripped.toLowerCase();
      var snorm = stripAccents(sLower);
      if (typeof RAW !== 'undefined') {
        for (var s2 = 0; s2 < RAW.length; s2++) {
          if (RAW[s2][F.word].toLowerCase() === sLower) { openDictModalByIdx(s2, null); return; }
        }
        for (var s2b = 0; s2b < RAW.length; s2b++) {
          if (stripAccents(RAW[s2b][F.word]) === snorm) { openDictModalByIdx(s2b, null); return; }
        }
        if (typeof FORM_IDX !== 'undefined') {
          var base4 = FORM_IDX[snorm] || FORM_IDX[sLower];
          if (base4) {
            var base4n = stripAccents(base4);
            for (var s3 = 0; s3 < RAW.length; s3++) {
              if (RAW[s3][F.word].toLowerCase() === base4 || stripAccents(RAW[s3][F.word]) === base4n) {
                openDictModalByIdx(s3, null); return;
              }
            }
            if (typeof WORD_IDX !== 'undefined' && WORD_IDX[base4]) {
              openDictModalFromWordIdx(base4, WORD_IDX[base4], null); return;
            }
          }
        }
      }
      if (typeof WORD_IDX !== 'undefined') {
        if (WORD_IDX[snorm] || WORD_IDX[sLower]) {
          var skey = WORD_IDX[snorm] ? snorm : sLower;
          openDictModalFromWordIdx(skey, WORD_IDX[skey], null); return;
        }
      }
    }

    // 複合フレーズ: 末尾から先頭へ全トークンを試す（ストップワードはpass2で）
    var tokens = word.trim().split(/\s+/);
    if (tokens.length >= 2) {
      var stopSet5 = {de:1,del:1,al:1,el:1,la:1,los:1,las:1,a:1,en:1,y:1,o:1,que:1,se:1,le:1,lo:1,no:1,por:1,con:1,sin:1,para:1,desde:1,hasta:1,sobre:1,entre:1,como:1,más:1,mas:1,muy:1,un:1,una:1,unos:1,unas:1};
      for (var pass5 = 0; pass5 < 2; pass5++) {
        for (var ti5 = tokens.length - 1; ti5 >= 0; ti5--) {
          var tok5 = tokens[ti5].replace(/^[¡¿«]+|[!?,;:.»]+$/g, '');
          if (!tok5 || tok5.length < 2) continue;
          var tok5L = tok5.toLowerCase();
          if (pass5 === 0 && stopSet5[tok5L]) continue;
          var tok5N = stripAccents(tok5L);
          var cm5 = tok5.match(/^(.{3,}?)(me|te|se|nos|os|lo|la|los|las|le|les)$/i);
          var tok5S = cm5 ? cm5[1] : null;
          var tok5SL = tok5S ? tok5S.toLowerCase() : null;
          var tok5SN = tok5SL ? stripAccents(tok5SL) : null;
          if (typeof RAW !== 'undefined') {
            for (var r1 = 0; r1 < RAW.length; r1++) {
              if (RAW[r1][F.word].toLowerCase() === tok5L) {
                if (pass5 > 0 || RAW[r1][F.pos] !== '形容詞') { openDictModalByIdx(r1, tok5); return; }
              }
            }
            for (var r2 = 0; r2 < RAW.length; r2++) {
              if (stripAccents(RAW[r2][F.word]) === tok5N) {
                if (pass5 > 0 || RAW[r2][F.pos] !== '形容詞') { openDictModalByIdx(r2, tok5); return; }
              }
            }
            if (typeof FORM_IDX !== 'undefined') {
              var base5 = FORM_IDX[tok5N] || FORM_IDX[tok5L];
              if (base5) {
                var base5n = stripAccents(base5);
                for (var r3 = 0; r3 < RAW.length; r3++) {
                  if (RAW[r3][F.word].toLowerCase() === base5 || stripAccents(RAW[r3][F.word]) === base5n) {
                    if (pass5 > 0 || RAW[r3][F.pos] !== '形容詞') { openDictModalByIdx(r3, tok5); return; }
                  }
                }
                if (typeof WORD_IDX !== 'undefined' && WORD_IDX[base5]) {
                  if (pass5 > 0 || WORD_IDX[base5][0] !== '形容詞') {
                    openDictModalFromWordIdx(base5, WORD_IDX[base5], tok5); return;
                  }
                }
              }
            }
            if (tok5SL) {
              for (var r4 = 0; r4 < RAW.length; r4++) {
                if (RAW[r4][F.word].toLowerCase() === tok5SL) { openDictModalByIdx(r4, tok5S); return; }
              }
              for (var r5 = 0; r5 < RAW.length; r5++) {
                if (stripAccents(RAW[r5][F.word]) === tok5SN) { openDictModalByIdx(r5, tok5S); return; }
              }
              if (typeof FORM_IDX !== 'undefined') {
                var base5c = FORM_IDX[tok5SN] || FORM_IDX[tok5SL];
                if (base5c) {
                  var base5cn = stripAccents(base5c);
                  for (var r6 = 0; r6 < RAW.length; r6++) {
                    if (RAW[r6][F.word].toLowerCase() === base5c || stripAccents(RAW[r6][F.word]) === base5cn) {
                      openDictModalByIdx(r6, tok5S); return;
                    }
                  }
                  if (typeof WORD_IDX !== 'undefined' && WORD_IDX[base5c]) {
                    openDictModalFromWordIdx(base5c, WORD_IDX[base5c], tok5S); return;
                  }
                }
              }
            }
          }
          if (typeof WORD_IDX !== 'undefined') {
            if (WORD_IDX[tok5N] || WORD_IDX[tok5L]) {
              var tk5 = WORD_IDX[tok5N] ? tok5N : tok5L;
              if (pass5 > 0 || WORD_IDX[tk5][0] !== '形容詞') {
                openDictModalFromWordIdx(tk5, WORD_IDX[tk5], tok5); return;
              }
            }
            if (tok5SL && (WORD_IDX[tok5SN] || WORD_IDX[tok5SL])) {
              var tk5c = WORD_IDX[tok5SN] ? tok5SN : tok5SL;
              openDictModalFromWordIdx(tk5c, WORD_IDX[tk5c], tok5S); return;
            }
          }
        }
      }
    }

    // 単語末尾クリティック除去（cuidarlos → cuidar）
    if (word.indexOf(' ') < 0 && word.length > 3) {
      var cm6 = word.match(/^(.{3,}?)(me|te|se|nos|os|lo|la|los|las|le|les)$/i);
      if (cm6) {
        var cs6 = cm6[1]; var cs6L = cs6.toLowerCase(); var cs6N = stripAccents(cs6L);
        if (typeof RAW !== 'undefined') {
          for (var c1 = 0; c1 < RAW.length; c1++) {
            if (RAW[c1][F.word].toLowerCase() === cs6L) { openDictModalByIdx(c1, null); return; }
          }
          for (var c2 = 0; c2 < RAW.length; c2++) {
            if (stripAccents(RAW[c2][F.word]) === cs6N) { openDictModalByIdx(c2, null); return; }
          }
          if (typeof FORM_IDX !== 'undefined') {
            var bc6 = FORM_IDX[cs6N] || FORM_IDX[cs6L];
            if (bc6 && typeof WORD_IDX !== 'undefined' && WORD_IDX[bc6]) {
              openDictModalFromWordIdx(bc6, WORD_IDX[bc6], null); return;
            }
          }
        }
        if (typeof WORD_IDX !== 'undefined' && (WORD_IDX[cs6N] || WORD_IDX[cs6L])) {
          var ck6 = WORD_IDX[cs6N] ? cs6N : cs6L;
          openDictModalFromWordIdx(ck6, WORD_IDX[ck6], null); return;
        }
      }
    }

    if (fallback) fallback();
  }

  // 必要な辞書データを遅延ロード
  var _dp = (function() {
    var ds = document.querySelector('script[src$="dict-data.js"]');
    if (!ds) return 'dict/';
    var dsrc = ds.getAttribute('src');
    return dsrc.slice(0, dsrc.length - 'dict-data.js'.length);
  })();
  var srcs = ['dict-data.js', 'dict-examples.js', 'dict-boost.js', 'dict-trivia.js', 'dict-meanings.js', 'dict-conj.js'];
  var needed = srcs.filter(function(s) { return !document.querySelector('script[src$="' + s + '"]'); });
  if (!needed.length) {
    if (typeof window.buildDictIndexes === 'function' && typeof FORM_IDX === 'undefined') window.buildDictIndexes();
    doOpen();
    return;
  }
  var done = 0;
  needed.forEach(function(src) {
    var s = document.createElement('script');
    s.src = _dp + src;
    s.onload = s.onerror = function() {
      if (++done === needed.length) {
        if (typeof window.buildDictIndexes === 'function' && typeof FORM_IDX === 'undefined') window.buildDictIndexes();
        doOpen();
      }
    };
    document.head.appendChild(s);
  });
};

/* ── 検索バー UI ── */
function openSearch() {
  var bar = document.getElementById('search-bar');
  if (bar) bar.classList.add('open');
  var tocMenu = document.getElementById('top-toc-menu');
  if (tocMenu) tocMenu.classList.remove('open');
  var tocToggle = document.getElementById('top-toc-toggle');
  if (tocToggle) tocToggle.textContent = '☰ 目次';
  setTimeout(function() {
    var inp = document.getElementById('search-input');
    if (inp) inp.focus();
  }, 180);
}
function closeSearch() {
  var bar = document.getElementById('search-bar');
  if (bar) bar.classList.remove('open');
  var res = document.getElementById('search-results');
  if (res) { res.classList.remove('has-results'); res.innerHTML = ''; }
  var inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  var cres = document.getElementById('cover-search-results');
  if (cres) cres.classList.remove('has-results');
}

/* ── UI 要素の自動注入 ── */
function _ensureSearchUI() {
  if (!document.getElementById('dict-overlay')) {
    var ov = document.createElement('div');
    ov.id = 'dict-overlay';
    ov.innerHTML = '<div id="dict-modal"><div id="dict-modal-head">'
      + '<span id="dict-modal-word"></span><span id="dict-modal-pos"></span>'
      + '<button id="dict-modal-close" title="閉じる">✕</button>'
      + '</div><div id="dict-modal-body"></div></div>';
    ov.addEventListener('click', function(e) { if (e.target === ov) closeDictModal(); });
    document.body.insertBefore(ov, document.body.firstChild);
    document.getElementById('dict-modal-close').addEventListener('click', closeDictModal);
  }
  if (!document.getElementById('search-bar')) {
    var bar = document.createElement('div');
    bar.id = 'search-bar';
    bar.innerHTML = '<label>検索</label>'
      + '<input id="search-input" type="text" placeholder="単語・文法用語…" autocomplete="off" autocorrect="off" spellcheck="false">'
      + '<button id="search-close" title="閉じる">✕</button>';
    var ref = document.getElementById('dict-overlay') || document.body.firstChild;
    ref.parentNode.insertBefore(bar, ref.nextSibling);
  }
  if (!document.getElementById('search-results')) {
    var res = document.createElement('div');
    res.id = 'search-results';
    var bar2 = document.getElementById('search-bar');
    bar2.parentNode.insertBefore(res, bar2.nextSibling);
  }
  if (!document.getElementById('top-search-btn')) {
    var nav = document.getElementById('top-nav');
    if (nav) {
      var btn = document.createElement('button');
      btn.id = 'top-search-btn';
      btn.textContent = '🔍 検索';
      btn.addEventListener('click', openSearch);
      nav.appendChild(btn);
    }
  }
}

/* ── DOM から語彙を自動抽出 ── */
function _autoExtractVocabFromDOM() {
  var items = [], seen = {};
  // .pill 要素（一列 語彙タブ）
  document.querySelectorAll('.pill').forEach(function(pill) {
    var esEl = pill.querySelector('.pill-es');
    var jaEl = pill.querySelector('.pill-ja');
    if (!esEl || !jaEl) return;
    var es = esEl.textContent.trim();
    if (seen[es]) return;
    seen[es] = 1;
    var posEl = pill.querySelector('.pill-pos');
    items.push({
      es: es,
      ja: jaEl.textContent.trim(),
      pos: posEl ? posEl.textContent.trim() : '',
      tag: '語彙'
    });
  });
  // window.LESSON_VOCAB（二列）
  if (typeof window.LESSON_VOCAB !== 'undefined') {
    Object.keys(window.LESSON_VOCAB).forEach(function(word) {
      if (seen[word]) return;
      seen[word] = 1;
      var v = window.LESSON_VOCAB[word];
      var ja = v.note || (v.example && v.example.ja) || v.pos || '';
      items.push({
        es: word,
        ja: ja,
        pos: v.pos || '',
        tag: '本文の語彙',
        _lessonVocabData: v
      });
    });
  }
  // .word-item（二列 タブ語彙）: カード/タブ情報も保持してジャンプ可能に
  document.querySelectorAll('.word-item').forEach(function(item) {
    var esEl = item.querySelector('.w-es');
    var defEl = item.querySelector('.w-def');
    if (!esEl || !defEl) return;
    var es = esEl.textContent.trim();
    if (seen[es.toLowerCase()]) return;
    seen[es.toLowerCase()] = 1;
    var tab  = item.closest('.tab-content');
    var card = item.closest('.utterance-card, .sent-card');
    items.push({
      es: es,
      ja: defEl.textContent.trim(),
      pos: '',
      tag: '本文の語彙',
      _tabId: tab ? tab.id : null,
      _card: card || null
    });
  });
  return items;
}

/* ── DOM から文法用語を自動抽出 ── */
function _autoExtractGrammarTermsFromDOM() {
  var terms = [];
  var circledNums = /[①②③④⑤⑥⑦⑧⑨⑩⑪⑫]/g;
  document.querySelectorAll('[id].sec-heading, [id].sec-heading-rd, [id].sec-heading-ex').forEach(function(el) {
    if (!el.id) return;
    var titleEl = el.querySelector('.sec-title, .rd-title, .ex-title');
    var esEl    = el.querySelector('.sec-es, .rd-es');
    var label   = titleEl ? titleEl.textContent.trim() : el.textContent.replace(circledNums, '').trim().slice(0, 40);
    if (!label) return;
    var words = label.replace(circledNums, '').split(/[・\s　\/（）()：:]+/).filter(function(t) { return t.length >= 2; });
    if (esEl) {
      esEl.textContent.trim().split(/[,\s\/・:：()\s]+/).forEach(function(t) {
        if (t.length >= 2) words.push(t);
      });
    }
    terms.push({ terms: words, id: el.id, label: label });
  });
  return terms;
}

/* ── 初期化（defer により DOM 解析完了後に実行） ── */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    _ensureSearchUI();

    // 語彙ソースを決定
    var vocabSource = (typeof VOCAB_BASE !== 'undefined' && VOCAB_BASE.length)
      ? VOCAB_BASE
      : _autoExtractVocabFromDOM();

    // 文法用語ソースを決定
    if (typeof GRAMMAR_TERMS === 'undefined' || !GRAMMAR_TERMS.length) {
      _GRAMMAR_TERMS_LOCAL = _autoExtractGrammarTermsFromDOM();
    }

    // 語彙インデックスを構築
    if (vocabSource.length) {
      VOCAB_INF = vocabSource.map(function(item) { return Object.assign({}, item, {form: '不定詞'}); });
      CONJ_MAP  = {};
      vocabSource.forEach(function(item) {
        getConjForms(item).forEach(function(f) {
          var key = stripAccents(f.form);
          if (!CONJ_MAP[key]) CONJ_MAP[key] = {item: item, persona: f.label, conj: f.form};
        });
      });
    }

    // 検索入力
    var sinput = document.getElementById('search-input');
    if (sinput && !sinput.dataset.s1Bound) {
      sinput.dataset.s1Bound = '1';
      sinput.addEventListener('input', function() {
        var q = this.value.trim(), box = document.getElementById('search-results');
        if (q.length < 1) { box.classList.remove('has-results'); box.innerHTML = ''; return; }
        _dictHits = _searchDictRAW(q);
        var sr = searchVocab(q);
        renderTo('search-results', sr.results, sr.grammar, q, sr.conjMatch);
      });
    }

    var cinput = document.getElementById('cover-search-input');
    if (cinput) cinput.addEventListener('input', function() {
      var q = this.value.trim(), box = document.getElementById('cover-search-results');
      if (q.length < 1) { box.classList.remove('has-results'); return; }
      _dictHits = [];
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

    // ESC で検索・辞書を閉じる
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closeSearch(); closeDictModal(); }
    });

    // #sw= ハッシュ: 指定単語の語彙カードへジャンプ
    (function() {
      var hash = location.hash;
      if (!hash.startsWith('#sw=')) return;
      var targetWord = decodeURIComponent(hash.slice(4));
      setTimeout(function() {
        for (var i = 0; i < vocabSource.length; i++) {
          if (vocabSource[i].es === targetWord) {
            _jumpToEntry(vocabSource[i]);
            history.replaceState(null, '', location.pathname);
            break;
          }
        }
      }, 400);
    })();

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

    // 語彙ピル（クリックで詳細表示）
    document.querySelectorAll('#tab-vocab .pill').forEach(function(pill) {
      pill.title = 'タップして詳細を確認';
      pill.addEventListener('click', function() {
        var esEl = pill.querySelector('.pill-es');
        if (!esEl) return;
        var es = esEl.textContent.trim().toLowerCase();
        for (var i = 0; i < vocabSource.length; i++) {
          if (vocabSource[i].es.toLowerCase() === es) { openDictModal(vocabSource[i], null); return; }
        }
      });
      pill.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pill.click(); }
      });
    });
  });
})();
