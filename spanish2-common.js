'use strict';
/* ═══════════════════════════════════════════════
   Spanish2 共通JS — 対話・読解ジャンプ機能
   スペイン語二列 — 会話・読解解説シリーズ
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  initDialogueJump();
  initLecturaJump();
  initVocabTab();
  initWordTap();
});

/* ── 対話文 → 発話カードへのジャンプ ── */
function initDialogueJump() {
  // 発話カードにIDを付与（未設定の場合のみ）
  var uttCards = document.querySelectorAll('#tab-kaiwa .utterance-card');
  uttCards.forEach(function (card, i) {
    if (!card.id) card.id = 'utt-' + (i + 1);
  });

  // 各ダイアログボックス内のdl-lineをクリック可能に
  var dialogBoxes = document.querySelectorAll('#tab-kaiwa .dialog-box');
  dialogBoxes.forEach(function (box) {
    var lines = box.querySelectorAll('.dl-line');
    lines.forEach(function (line, i) {
      var num = i + 1;
      line.classList.add('has-jump');
      line.setAttribute('data-num', num);
      var speaker = line.querySelector('.dl-speaker');
      if (speaker) speaker.setAttribute('data-num', num);
      line.title = '発話' + num + ' の解説へジャンプ';
      line.addEventListener('click', function () {
        jumpToEl('utt-' + num, '#1b7a68');
      });
    });
  });
}

/* ── 読解文 → 文カードへのジャンプ ── */
function initLecturaJump() {
  // 文カードにIDを付与（未設定の場合のみ）
  var sentCards = document.querySelectorAll('#tab-dokkai .sent-card');
  sentCards.forEach(function (card, i) {
    if (!card.id) card.id = 'sent-card-' + (i + 1);
  });

  // text-sentence に番号付与＋クリックジャンプ
  var textBodies = document.querySelectorAll('#tab-dokkai .text-card-body');
  var transBoxes = document.querySelectorAll('#tab-dokkai .trans-box');

  textBodies.forEach(function (body, bi) {
    var spans = body.querySelectorAll('.text-sentence');
    spans.forEach(function (span, i) {
      var num = i + 1;
      span.classList.add('has-jump');
      span.setAttribute('data-num', num);
      span.title = '文' + num + ' の解説へジャンプ';
      span.addEventListener('click', function () {
        jumpToEl('sent-card-' + num, '#6b4f9e');
      });
    });

    // 対応する trans-box の行を span.trans-line に変換して番号付与
    var transBox = transBoxes[bi];
    if (!transBox) return;
    var parts = transBox.innerHTML.split(/<br\s*\/?>/i);
    var frags = [];
    var lineNum = 0;
    parts.forEach(function (part) {
      var trimmed = part.trim();
      if (!trimmed) return;
      lineNum++;
      var span = document.createElement('span');
      span.className = 'trans-line';
      span.setAttribute('data-num', lineNum);
      span.innerHTML = trimmed;
      frags.push(span);
    });
    if (!frags.length) return;
    while (transBox.firstChild) transBox.removeChild(transBox.firstChild);
    frags.forEach(function (s) { transBox.appendChild(s); });
  });
}

/* ── スムーズスクロール＋一時ハイライト ── */
function jumpToEl(id, color) {
  var el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.style.outline = '2px solid ' + color;
  el.style.outlineOffset = '2px';
  setTimeout(function () {
    el.style.outline = '';
    el.style.outlineOffset = '';
  }, 1600);
}

/* ── 語彙タブ（全Spanish2レッスン共通） ── */
function initVocabTab() {
  var tabNav = document.querySelector('.tab-nav');
  if (!tabNav || document.getElementById('tab-vocab')) return;

  var wordItems = document.querySelectorAll('.word-item');
  if (!wordItems.length) return;

  // 語彙タブボタン追加
  var vocabBtn = document.createElement('button');
  vocabBtn.id = 'vocab-tab-btn';
  vocabBtn.className = 'tab-btn';
  vocabBtn.textContent = '📖　語彙';
  tabNav.appendChild(vocabBtn);

  // タブコンテンツ生成
  var vocabDiv = document.createElement('div');
  vocabDiv.id = 'tab-vocab';
  vocabDiv.className = 'tab-content';
  vocabDiv.innerHTML =
    '<div class="sec-heading" id="vocab-sec1">' +
      '<span class="sec-num">④</span>' +
      '<span class="sec-title">語彙リスト（Vocabulario）</span>' +
    '</div>';

  var groups = [
    { id: 'tab-kaiwa',  label: '💬 会話（Diálogo）の語彙' },
    { id: 'tab-dokkai', label: '📖 読解（Lectura）の語彙' }
  ];

  groups.forEach(function (g) {
    var tabEl = document.getElementById(g.id);
    if (!tabEl) return;
    var items = tabEl.querySelectorAll('.word-item');
    if (!items.length) return;

    var seen = {};
    var pills = [];
    items.forEach(function (item) {
      var esEl = item.querySelector('.w-es');
      var defEl = item.querySelector('.w-def');
      if (!esEl || !defEl) return;
      var es = esEl.textContent.trim();
      if (seen[es.toLowerCase()]) return;
      seen[es.toLowerCase()] = true;
      var def = defEl.textContent.trim();
      var shortDef = def.length > 42 ? def.slice(0, 40) + '…' : def;
      pills.push({ es: es, def: def, shortDef: shortDef, item: item, tabId: g.id });
    });
    if (!pills.length) return;

    var groupDiv = document.createElement('div');
    groupDiv.className = 's2-vocab-group';

    var titleDiv = document.createElement('div');
    titleDiv.className = 's2-vocab-group-title';
    titleDiv.textContent = g.label;
    groupDiv.appendChild(titleDiv);

    var pillsDiv = document.createElement('div');
    pillsDiv.className = 's2-vocab-pills';

    pills.forEach(function (p) {
      var pill = document.createElement('span');
      pill.className = 's2-vp';
      pill.title = p.def;
      pill.innerHTML =
        '<span class="s2-vp-es">' + s2EscHtml(p.es) + '</span>' +
        '<span class="s2-vp-def">' + s2EscHtml(p.shortDef) + '</span>';

      pill.addEventListener('click', function () {
        // 対象タブを開いて word-item にスクロール
        var targetTab = document.getElementById(p.tabId);
        if (targetTab && !targetTab.classList.contains('active')) {
          var tabName = p.tabId.replace('tab-', '');
          var tabBtn = document.querySelector('.tab-btn[onclick*="\'' + tabName + '\'"]');
          if (tabBtn) tabBtn.click();
        }
        setTimeout(function () {
          p.item.scrollIntoView({ behavior: 'smooth', block: 'center' });
          var prev = p.item.style.outline;
          p.item.style.outline = '2px solid var(--accent2)';
          p.item.style.outlineOffset = '2px';
          setTimeout(function () {
            p.item.style.outline = prev;
            p.item.style.outlineOffset = '';
          }, 1600);
        }, 160);
      });

      pillsDiv.appendChild(pill);
    });

    groupDiv.appendChild(pillsDiv);
    vocabDiv.appendChild(groupDiv);
  });

  // 末尾段落の前に挿入
  var endP = document.querySelector('p[style*="margin-top:48px"]');
  if (endP) endP.parentNode.insertBefore(vocabDiv, endP);
  else document.body.appendChild(vocabDiv);

  // switchTab をパッチして active-vocab の除去に対応
  var _orig = window.switchTab;
  if (_orig) {
    window.switchTab = function (tabId, btn) {
      _orig(tabId, btn);
      if (tabId !== 'vocab') {
        document.querySelectorAll('.tab-btn').forEach(function (b) {
          b.classList.remove('active-vocab');
        });
      }
    };
  }

  // 語彙ボタンのクリック処理
  vocabBtn.addEventListener('click', function () {
    document.querySelectorAll('.tab-content').forEach(function (el) { el.classList.remove('active'); });
    vocabDiv.classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active-kaiwa', 'active-dokkai', 'active-renshu', 'active-vocab');
    });
    vocabBtn.classList.add('active-vocab');
    var tocMenu = document.getElementById('top-toc-menu');
    if (tocMenu) tocMenu.classList.remove('open');
    var tocToggle = document.getElementById('top-toc-toggle');
    if (tocToggle) tocToggle.textContent = '☰ 目次';
  });

  // TOC に語彙リンクを追加
  var tocMenu = document.getElementById('top-toc-menu');
  if (tocMenu) {
    var sep = document.createElement('span');
    sep.style.cssText = 'font-size:11px;color:var(--muted);padding:4px 8px;font-weight:700;width:100%';
    sep.textContent = '📖 語彙タブ';
    var lnk = document.createElement('a');
    lnk.className = 'fn-item';
    lnk.href = '#vocab-sec1';
    lnk.dataset.tab = 'vocab';
    lnk.textContent = '④ 語彙リスト';
    lnk.addEventListener('click', function (e) {
      e.preventDefault();
      vocabBtn.click();
      var sec = document.getElementById('vocab-sec1');
      if (sec) setTimeout(function () { sec.scrollIntoView({ behavior: 'smooth' }); }, 60);
    });
    tocMenu.appendChild(sep);
    tocMenu.appendChild(lnk);
  }
}

/* ── 単語タップ機能（全Spanish2レッスン共通） ── */
function initWordTap() {
  document.querySelectorAll('.word-item').forEach(function (item) {
    if (item.classList.contains('tappable')) return;
    item.classList.add('tappable');
    item.title = 'タップして詳細を確認';
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      var esEl = item.querySelector('.w-es');
      var defEl = item.querySelector('.w-def');
      if (!esEl || !defEl) return;
      openWordModal(esEl.textContent.trim(), defEl.textContent.trim());
    });
  });
}

/* ── 単語詳細モーダル（グローバル関数） ── */
function openWordModal(esText, defText) {
  var key = esText.trim().toLowerCase();
  var vocab = window.LESSON_VOCAB || {};
  var entry = vocab[key] || {};

  var wordEl   = document.getElementById('dict-modal-word');
  var posEl    = document.getElementById('dict-modal-pos');
  var bodyEl   = document.getElementById('dict-modal-body');
  var overlayEl = document.getElementById('dict-overlay');
  if (!wordEl || !bodyEl || !overlayEl) return;

  wordEl.textContent = esText;
  posEl.textContent  = entry.pos || '';

  var body = '<div class="dict-ja-big">' + s2EscHtml(defText) + '</div>';

  if (entry.note) {
    body += '<div class="dict-note">📝 ' + s2EscHtml(entry.note) + '</div>';
  }
  if (entry.vtype) {
    body += '<div class="dict-row"><span class="dict-label">動詞型</span><span class="dict-val">' + s2EscHtml(entry.vtype) + '</span></div>';
  }
  if (entry.conj) {
    var cHtml = entry.conj.split(/,\s*/).map(function (f) {
      return '<span class="dict-conj-badge">' + s2EscHtml(f.trim()) + '</span>';
    }).join('');
    body += '<div class="dict-row"><span class="dict-label">現在活用</span><span class="dict-val">' + cHtml + '</span></div>';
  }
  if (entry.adj) {
    var aHtml = entry.adj.split(/,\s*/).map(function (f) {
      return '<span class="dict-conj-badge">' + s2EscHtml(f.trim()) + '</span>';
    }).join('');
    body += '<div class="dict-row"><span class="dict-label">形容詞変化</span><span class="dict-val">' + aHtml + '</span></div>';
  }
  if (entry.example) {
    body += '<div class="dict-example">' +
      '<div class="dict-example-label">例文</div>' +
      '<div class="dict-example-es">' + s2EscHtml(entry.example.es) + '</div>' +
      '<div class="dict-example-ja">' + s2EscHtml(entry.example.ja) + '</div>' +
      '</div>';
  }

  bodyEl.innerHTML = body;
  overlayEl.classList.add('open');
}

function s2EscHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ══════════════════════════════════════════════
   検索・辞書モーダル機能（全Spanish2レッスン共通）
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   検索機能
   ══════════════════════════════════════════════ */
(function () {
  /* ── DOM 注入 ── */
  // 検索ボタンをナビに追加
  // 🖨PDFで保存 → ☰目次 → 🔍検索 の順になるよう末尾に追加
  var tocToggle = document.getElementById('top-toc-toggle');
  var searchBtn = document.createElement('button');
  searchBtn.id = 'top-search-btn';
  searchBtn.textContent = '🔍 検索';
  tocToggle.parentNode.insertBefore(searchBtn, tocToggle.nextSibling);

  // 検索バーをbodyに追加
  document.body.insertAdjacentHTML('beforeend',
    '<div id="search-bar">' +
      '<label>検索</label>' +
      '<input id="search-input" type="text" placeholder="スペイン語・日本語で検索…" autocomplete="off" autocorrect="off" spellcheck="false">' +
      '<button id="search-close" title="閉じる">✕</button>' +
    '</div>' +
    '<div id="search-results"></div>'
  );

  // 辞書モーダルをbodyに追加
  document.body.insertAdjacentHTML('beforeend',
    '<div id="dict-overlay">' +
      '<div id="dict-modal">' +
        '<div id="dict-modal-head">' +
          '<span id="dict-modal-word"></span>' +
          '<span id="dict-modal-pos"></span>' +
          '<button id="dict-modal-close" title="閉じる">✕</button>' +
        '</div>' +
        '<div id="dict-modal-body"></div>' +
      '</div>' +
    '</div>'
  );

  /* ── ユーティリティ ── */
  function strip(s) {
    return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function hlEs(text, q) {
    var n = strip(q), t = strip(text);
    var i = t.indexOf(n);
    if (i < 0) return esc(text);
    return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+q.length)) + '</mark>' + esc(text.slice(i+q.length));
  }
  var isJa = function(s) { return /[　-鿿゠-ヿ一-龯]/.test(s); };

  /* ── レッスン語彙インデックス ── */
  var lessonIndex = [];
  (function buildIndex() {
    document.querySelectorAll('.word-item').forEach(function(item) {
      var esEl = item.querySelector('.w-es');
      var defEl = item.querySelector('.w-def');
      if (!esEl || !defEl) return;
      var tab  = item.closest('.tab-content');
      var card = item.closest('.utterance-card, .sent-card');
      lessonIndex.push({
        es: esEl.textContent.trim(),
        def: defEl.textContent.trim(),
        tabId: tab ? tab.id : null,
        card: card
      });
    });
  })();

  /* ── 検索ロジック ── */
  function searchLesson(q) {
    var norm = strip(q), ja = isJa(q);
    var seen = {}, results = [];
    lessonIndex.forEach(function(entry) {
      if (seen[entry.es]) return;
      var score = 999;
      if (ja) {
        if (entry.def.includes(q)) score = 0;
      } else {
        var n = strip(entry.es);
        if      (n === norm)         score = 0;
        else if (n.startsWith(norm)) score = 1;
        else if (n.includes(norm))   score = 2;
        if (score > 2 && entry.def.includes(q)) score = Math.min(score, 2);
      }
      if (score < 50) { results.push({entry: entry, score: score}); seen[entry.es] = 1; }
    });
    results.sort(function(a,b){ return a.score - b.score; });
    return results.slice(0, 8);
  }

  function searchDict(q) {
    if (typeof RAW === 'undefined' || typeof F === 'undefined') return [];
    var norm = strip(q), ja = isJa(q);
    var seen = {}, results = [];
    for (var i = 0; i < RAW.length; i++) {
      var e = RAW[i];
      var word = e[F.word], meaning = e[F.meaning], conj = e[F.conj] || '';
      if (seen[word]) continue;
      var score = 999;
      if (ja) {
        if (meaning.includes(q)) score = 0;
      } else {
        var wn = strip(word);
        if      (wn === norm)         score = 0;
        else if (wn.startsWith(norm)) score = 1;
        else if (wn.includes(norm))   score = 2;
        // 活用形マッチ
        if (score > 2 && conj) {
          var forms = conj.split(/,\s*/);
          for (var f = 0; f < forms.length; f++) {
            var fn = strip(forms[f].trim());
            if (fn === norm)         { score = Math.min(score, 0.5); break; }
            if (fn.startsWith(norm)) { score = Math.min(score, 1.5); }
          }
        }
      }
      if (score < 50) { results.push({idx: i, word: word, meaning: meaning, pos: e[F.pos], score: score}); seen[word] = 1; }
    }
    results.sort(function(a,b){ return a.score - b.score; });
    return results.slice(0, 15);
  }

  /* ── 検索バーの開閉 ── */
  function openSearch() {
    document.getElementById('search-bar').classList.add('open');
    document.getElementById('search-input').focus();
    document.getElementById('top-toc-menu').classList.remove('open');
    document.getElementById('top-toc-toggle').textContent = '☰ 目次';
  }
  function closeSearch() {
    document.getElementById('search-bar').classList.remove('open');
    document.getElementById('search-results').classList.remove('has-results');
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-input').value = '';
  }

  /* ── 結果レンダリング ── */
  var _lessonHits = [], _dictHits = [];

  function doSearch(q) {
    var res = document.getElementById('search-results');
    if (!q) { res.classList.remove('has-results'); res.innerHTML = ''; return; }

    _lessonHits = searchLesson(q);
    _dictHits   = searchDict(q);

    if (!_lessonHits.length && !_dictHits.length) {
      res.innerHTML = '<div class="sr-none">「' + esc(q) + '」は見つかりませんでした</div>';
      res.classList.add('has-results');
      return;
    }

    var html = '';
    if (_lessonHits.length) {
      html += '<div class="sr-header">このページの語彙</div>';
      _lessonHits.forEach(function(h, i) {
        var e = h.entry;
        var hasTarget = !!(e.card || e.tabId);
        var tabLabel = e.tabId === 'tab-kaiwa' ? '会話' : e.tabId === 'tab-dokkai' ? '読解' : e.tabId === 'tab-renshu' ? '練習' : '';
        html += '<div class="sr-item" data-lesson="' + i + '" style="' + (hasTarget ? '' : 'opacity:.6;cursor:default') + '">' +
          '<span class="sr-es">' + hlEs(e.es, q) + '</span>' +
          '<span class="sr-ja">' + esc(e.def.slice(0,50)) + '</span>' +
          (hasTarget && tabLabel ? '<span class="sr-tag">→ ' + tabLabel + '</span>' : '') +
          '</div>';
      });
    }
    if (_dictHits.length) {
      html += '<div class="sr-header">辞書（クリックで詳細表示）</div>';
      _dictHits.forEach(function(h, i) {
        html += '<div class="sr-item" data-dict="' + i + '">' +
          '<span class="sr-es">' + hlEs(h.word, q) + '</span>' +
          '<span class="sr-ja">' + esc(h.meaning.slice(0,50)) + '</span>' +
          '<span class="sr-tag">' + esc(h.pos) + '</span>' +
          '</div>';
      });
    }

    res.innerHTML = html;
    res.classList.add('has-results');

    res.querySelectorAll('.sr-item[data-lesson]').forEach(function(el) {
      var idx = parseInt(el.dataset.lesson);
      el.addEventListener('click', function() {
        var entry = _lessonHits[idx].entry;
        closeSearch();
        if (typeof openWordModal === 'function') { openWordModal(entry.es, entry.def); }
        else { jumpToEntry(entry); }
      });
    });
    res.querySelectorAll('.sr-item[data-dict]').forEach(function(el) {
      var idx = parseInt(el.dataset.dict);
      el.addEventListener('click', function() {
        closeSearch();
        openDictModal(_dictHits[idx].idx);
      });
    });
  }

  /* ── 語彙カードへジャンプ ── */
  function jumpToEntry(entry) {
    if (entry.tabId) {
      var tabName = entry.tabId.replace('tab-', '');
      var tabContent = document.getElementById(entry.tabId);
      if (tabContent && !tabContent.classList.contains('active')) {
        var btn = document.querySelector('.tab-btn[onclick*="\'' + tabName + '\'"]');
        if (btn) btn.click();
      }
    }
    if (entry.card) {
      setTimeout(function() {
        entry.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var prev = entry.card.style.outline;
        entry.card.style.outline = '2px solid var(--accent2)';
        entry.card.style.outlineOffset = '2px';
        setTimeout(function() {
          entry.card.style.outline = prev;
          entry.card.style.outlineOffset = '';
        }, 1600);
      }, 150);
    }
  }

  /* ── 辞書モーダル ── */
  function openDictModal(rawIdx) {
    if (typeof RAW === 'undefined' || !RAW[rawIdx]) return;
    var e = RAW[rawIdx];
    var word    = e[F.word]    || '';
    var pos     = e[F.pos]     || '';
    var meaning = e[F.meaning] || '';
    var gender  = e[F.gender]  || '';
    var plural  = e[F.plural]  || '';
    var conj    = e[F.conj]    || '';
    var vtype   = e[F.vtype]   || '';
    var adj     = e[F.adj]     || '';
    var note    = e[F.note]    || '';

    document.getElementById('dict-modal-word').textContent = word;
    document.getElementById('dict-modal-pos').textContent  = pos;

    var body = '<div class="dict-ja-big">' + esc(meaning) + '</div>';

    if (gender === 'm') body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val"><span class="dict-tag" style="background:#dbeafe;color:#1e40af">男性 (m)</span></span></div>';
    else if (gender === 'f') body += '<div class="dict-row"><span class="dict-label">性</span><span class="dict-val"><span class="dict-tag" style="background:#fce7f3;color:#9d174d">女性 (f)</span></span></div>';

    if (plural) body += '<div class="dict-row"><span class="dict-label">複数形</span><span class="dict-val" style="font-family:var(--mono);font-weight:600;color:var(--accent)">' + esc(plural) + '</span></div>';

    if (vtype) body += '<div class="dict-row"><span class="dict-label">動詞型</span><span class="dict-val">' + esc(vtype) + '</span></div>';

    if (conj) {
      var cHtml = conj.split(/,\s*/).map(function(f) {
        return '<span class="dict-conj-badge">' + esc(f.trim()) + '</span>';
      }).join('');
      body += '<div class="dict-row"><span class="dict-label">現在活用</span><span class="dict-val">' + cHtml + '</span></div>';
    }

    if (adj) {
      var aHtml = adj.split(/,\s*/).map(function(f) {
        return '<span class="dict-conj-badge">' + esc(f.trim()) + '</span>';
      }).join('');
      body += '<div class="dict-row"><span class="dict-label">形容詞変化</span><span class="dict-val">' + aHtml + '</span></div>';
    }

    if (note) body += '<div class="dict-note">📝 ' + esc(note) + '</div>';

    // 例文表示
    if (typeof DICT_EXAMPLES !== 'undefined') {
      var ex = DICT_EXAMPLES[word];
      if (ex) {
        body += '<div class="dict-example">' +
          '<div class="dict-example-label">例文</div>' +
          '<div class="dict-example-es">' + esc(ex.es) + '</div>' +
          '<div class="dict-example-ja">' + esc(ex.ja) + '</div>' +
          '</div>';
      }
    }

    body += '<a class="dict-jump-btn" href="spanish_dictionary.html" target="_blank">📖 単語帳で詳しく見る →</a>';

    document.getElementById('dict-modal-body').innerHTML = body;
    document.getElementById('dict-overlay').classList.add('open');
  }

  function closeDictModal() {
    document.getElementById('dict-overlay').classList.remove('open');
  }

  /* ── イベントリスナー ── */
  searchBtn.addEventListener('click', openSearch);
  document.getElementById('search-close').addEventListener('click', closeSearch);
  document.getElementById('search-input').addEventListener('input', function() {
    doSearch(this.value.trim());
  });
  document.getElementById('dict-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeDictModal();
  });
  document.getElementById('dict-modal-close').addEventListener('click', closeDictModal);

  // 検索バー外クリックで閉じる
  document.addEventListener('click', function(e) {
    var bar = document.getElementById('search-bar');
    var res = document.getElementById('search-results');
    if (!e.target.closest('#search-bar') && !e.target.closest('#search-results') && e.target !== searchBtn) {
      if (bar.classList.contains('open')) closeSearch();
    }
  });

  // Escape キーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeSearch(); closeDictModal(); }
  });

  /* ── 他レッスンからのジャンプ対応（URL末尾 #sw=word） ── */
  (function() {
    var hash = location.hash;
    if (!hash.startsWith('#sw=')) return;
    var targetWord = decodeURIComponent(hash.slice(4));
    setTimeout(function() {
      for (var i = 0; i < lessonIndex.length; i++) {
        if (lessonIndex[i].es === targetWord) {
          jumpToEntry(lessonIndex[i]);
          history.replaceState(null, '', location.pathname);
          break;
        }
      }
    }, 400);
  })();
})();

