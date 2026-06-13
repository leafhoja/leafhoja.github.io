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

  var wordEl   = document.getElementById('s2-dict-word');
  var posEl    = document.getElementById('s2-dict-pos');
  var bodyEl   = document.getElementById('s2-dict-body');
  var overlayEl = document.getElementById('s2-dict-overlay');
  if (!wordEl || !bodyEl || !overlayEl) return;

  wordEl.textContent = esText;
  posEl.textContent  = entry.pos || '';

  var body = '<div class="s2-dict-meaning">' + s2EscHtml(defText) + '</div>';

  if (entry.note) {
    body += '<div class="s2-dict-note">📝 ' + s2EscHtml(entry.note) + '</div>';
  }
  if (entry.vtype) {
    body += '<div class="s2-dict-row"><span class="s2-dict-label">動詞型</span><span class="s2-dict-val">' + s2EscHtml(entry.vtype) + '</span></div>';
  }
  if (entry.conj) {
    var cHtml = entry.conj.split(/,\s*/).map(function (f) {
      return '<span class="s2-dict-conj">' + s2EscHtml(f.trim()) + '</span>';
    }).join('');
    body += '<div class="s2-dict-row"><span class="s2-dict-label">現在活用</span><span class="s2-dict-val">' + cHtml + '</span></div>';
  }
  if (entry.adj) {
    var aHtml = entry.adj.split(/,\s*/).map(function (f) {
      return '<span class="s2-dict-adj">' + s2EscHtml(f.trim()) + '</span>';
    }).join('');
    body += '<div class="s2-dict-row"><span class="s2-dict-label">形容詞変化</span><span class="s2-dict-val">' + aHtml + '</span></div>';
  }
  if (entry.example) {
    body += '<div class="s2-dict-example">' +
      '<div class="s2-dict-ex-label">例文</div>' +
      '<div class="s2-dict-ex-es">' + s2EscHtml(entry.example.es) + '</div>' +
      '<div class="s2-dict-ex-ja">' + s2EscHtml(entry.example.ja) + '</div>' +
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
