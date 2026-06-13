'use strict';
/* ═══════════════════════════════════════════════
   共通 JS — スペイン語一列・二列 共通
   ═══════════════════════════════════════════════ */

/* ── タブ切り替え ── */
var tabScrollPos = {};

function switchTab(tabId, btnEl) {
  var activeTabs = document.getElementsByClassName('tab-content');
  for (var k = 0; k < activeTabs.length; k++) {
    if (activeTabs[k].classList.contains('active')) {
      var curId = activeTabs[k].id.replace('tab-', '');
      tabScrollPos[curId] = window.scrollY;
      break;
    }
  }
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    tabs[i].classList.remove('active');
  }
  var target = document.getElementById('tab-' + tabId);
  if (target) { target.style.display = 'block'; target.classList.add('active'); }
  var btns = document.getElementsByClassName('tab-btn');
  for (var j = 0; j < btns.length; j++) {
    var newClasses = btns[j].className.split(' ').filter(function(c) {
      return c.indexOf('active-') !== 0;
    });
    btns[j].className = newClasses.join(' ');
  }
  if (btnEl) btnEl.classList.add('active-' + tabId);
  window.scrollTo(0, tabScrollPos[tabId] || 0);
}

function activateTabContaining(anchor) {
  var el = document.getElementById(anchor);
  if (!el) return;
  var node = el.parentElement;
  while (node && node.className.indexOf('tab-content') < 0) { node = node.parentElement; }
  if (node && node.className.indexOf('active') < 0) {
    var tabId = node.id.replace('tab-', '');
    var btns = document.getElementsByClassName('tab-btn');
    var targetBtn = null;
    for (var i = 0; i < btns.length; i++) {
      var oc = btns[i].getAttribute('onclick') || '';
      if (oc.indexOf("'" + tabId + "'") >= 0) { targetBtn = btns[i]; break; }
    }
    switchTab(tabId, targetBtn);
  }
}

function jumpToSection(sectionId) {
  activateTabContaining(sectionId);
  setTimeout(function() {
    var el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function scrollToAnchor(anchor) {
  activateTabContaining(anchor);
  setTimeout(function() {
    var el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

/* ── 目次 ── */
function toggleToc() {
  var menu = document.getElementById('top-toc-menu');
  var btn  = document.getElementById('top-toc-toggle');
  if (!menu) return;
  var isOpen = menu.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '✕ 閉じる' : '☰ 目次';
}

function closeToc() {
  var menu = document.getElementById('top-toc-menu');
  if (menu) menu.classList.remove('open');
  var btn = document.getElementById('top-toc-toggle');
  if (btn) btn.textContent = '☰ 目次';
}

/* ── PDF 印刷 ── */
function savePdf() {
  document.body.classList.add('is-printing');
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { window.print(); });
  });
}

window.addEventListener('afterprint', function() {
  document.body.classList.remove('is-printing');
});

/* ── 解答トグル（lesson4 の onclick="toggleAns(this)" 互換） ── */
function toggleAns(btn) {
  var item = btn.closest('.q-content');
  if (!item) return;
  var ansRow = item.querySelector('.q-answer-row');
  var expRow = item.querySelector('.q-exp');
  if (!ansRow) return;
  var revealed = ansRow.classList.contains('visible');
  if (revealed) {
    ansRow.classList.remove('visible');
    if (expRow) expRow.classList.remove('visible');
    btn.classList.remove('revealed');
    btn.textContent = '答えを見る ▾';
  } else {
    ansRow.classList.add('visible');
    if (expRow) expRow.classList.add('visible');
    btn.classList.add('revealed');
    btn.textContent = '答えを隠す ▴';
  }
}

function toggleHint(btn) {
  var item = btn.closest('.q-content');
  if (!item) return;
  var hintRow = item.querySelector('.q-hint');
  if (!hintRow) return;
  var revealed = hintRow.classList.contains('visible');
  if (revealed) {
    hintRow.classList.remove('visible');
    btn.classList.remove('revealed');
    btn.textContent = 'ヒントを見る ▾';
  } else {
    hintRow.classList.add('visible');
    btn.classList.add('revealed');
    btn.textContent = 'ヒントを隠す ▴';
  }
}

/* ── 解答トグル初期化（両シリーズ対応） ── */
function initAnswerToggles() {
  var items = document.getElementsByClassName('q-item');
  for (var k = 0; k < items.length; k++) {
    (function(item) {
      var answerRow = item.querySelector('.q-answer-row');
      if (!answerRow) return;
      var existingBtn = item.querySelector('.ans-toggle-btn');
      if (existingBtn) {
        if (existingBtn.getAttribute('onclick')) return; // lesson4: onclick="toggleAns(this)" が担当
        // Spanish2: ボタン既存・onclick なし → イベントリスナーを追加
        existingBtn.addEventListener('click', function() {
          var exp = item.querySelector('.ans-exp') || item.querySelector('.q-exp');
          var revealed = answerRow.classList.toggle('visible');
          if (exp) exp.classList.toggle('visible', revealed);
          existingBtn.classList.toggle('revealed', revealed);
          existingBtn.textContent = revealed ? '答えを隠す' : '答えを確認';
        });
        return;
      }
      // Spanish1（lesson2,3,5,6,7）: ボタンを動的生成
      var btn = document.createElement('button');
      btn.className = 'ans-toggle-btn';
      btn.textContent = '答えを確認';
      btn.addEventListener('click', function() {
        var exp = item.querySelector('.q-exp');
        var revealed = answerRow.classList.toggle('visible');
        if (exp) exp.classList.toggle('visible', revealed);
        btn.classList.toggle('revealed', revealed);
        btn.textContent = revealed ? '答えを隠す' : '答えを確認';
      });
      answerRow.parentNode.insertBefore(btn, answerRow);
    })(items[k]);
  }
}

/* ── 初期化 ── */
document.addEventListener('DOMContentLoaded', function() {
  /* 目次トグルボタン（Spanish1 は onclick="toggleToc()" で処理するため、onclick なし = Spanish2 のみ対象） */
  var tocToggle = document.getElementById('top-toc-toggle');
  if (tocToggle && !tocToggle.getAttribute('onclick')) {
    tocToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleToc();
    });
  }

  /* PDF 印刷ボタン（Spanish1 は onclick="savePdf()" で処理するため、onclick なし = Spanish2 のみ対象） */
  var pdfBtn = document.getElementById('pdf-print-btn');
  if (pdfBtn && !pdfBtn.getAttribute('onclick')) {
    pdfBtn.addEventListener('click', function() { savePdf(); });
  }

  /* fn-item: onclick なし（Spanish2）のみリスナーを追加 */
  document.querySelectorAll('.fn-item').forEach(function(a) {
    if (a.getAttribute('onclick')) return;
    a.addEventListener('click', function() {
      var targetTab = a.getAttribute('data-tab');
      if (targetTab) {
        var tabEl = document.getElementById('tab-' + targetTab);
        if (tabEl && !tabEl.classList.contains('active')) {
          document.querySelectorAll('.tab-btn').forEach(function(btn) {
            var oc = btn.getAttribute('onclick') || '';
            if (oc.indexOf("'" + targetTab + "'") >= 0) btn.click();
          });
        }
      }
      closeToc();
    });
  });

  /* TOC 外クリックで閉じる */
  document.addEventListener('click', function(e) {
    var nav = document.getElementById('top-nav');
    if (nav && !nav.contains(e.target)) closeToc();
  });

  /* ESC キー */
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    closeToc();
    if (typeof closeSearch === 'function') closeSearch();
    if (typeof closeDictModal === 'function') closeDictModal();
    if (typeof s2CloseDictModal === 'function') s2CloseDictModal();
  });

  /* 解答トグル初期化 */
  initAnswerToggles();

  /* ページ先頭へ戻るボタン */
  var bttBtn = document.createElement('button');
  bttBtn.id = 'back-to-top';
  bttBtn.setAttribute('aria-label', 'ページ先頭へ');
  bttBtn.textContent = '↑';
  document.body.appendChild(bttBtn);
  bttBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      bttBtn.classList.add('visible');
    } else {
      bttBtn.classList.remove('visible');
    }
  }, { passive: true });
});
