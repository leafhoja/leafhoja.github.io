'use strict';
/* ═══════════════════════════════════════════════
   過去問タブ — quiz-kakomon.js のデータを読み込み
   「📜 過去問」タブをページに追加する共通スクリプト。
   ・quiz-kakomon.js が先に読み込まれている必要あり。
   ・switchTab（common.js）に依存。
   ═══════════════════════════════════════════════ */
(function () {

  function currentPage() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ── CSS 注入（一度だけ）── */
  function injectStyle() {
    if (document.getElementById('kakomon-style')) return;
    var css =
      '.tab-btn.active-kakomon{color:#1a5c3a;border-bottom-color:#1a5c3a;background:#e8f5ee;}' +
      '#tab-kakomon .kk-title{font-size:20px;margin:0 0 8px;color:var(--ink,#1c1c1e);}' +
      '#tab-kakomon .kk-intro{font-size:14px;color:var(--mid,#48484a);line-height:1.8;margin:4px 0 18px;}' +
      '#tab-kakomon .kk-controls{margin:0 0 18px;}' +
      '#tab-kakomon .kk-allbtn{font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;' +
        'border:1.5px solid #1a5c3a;color:#1a5c3a;background:#fff;border-radius:999px;padding:7px 16px;transition:.15s;}' +
      '#tab-kakomon .kk-allbtn:hover{background:#1a5c3a;color:#fff;}' +
      '#tab-kakomon .kk-sec-head{font-weight:700;font-size:15px;margin:24px 0 4px;color:var(--ink,#1c1c1e);' +
        'padding-bottom:4px;border-bottom:2px solid #1a5c3a;}' +
      '#tab-kakomon .kk-sec-inst{font-size:13px;color:var(--mid,#48484a);line-height:1.7;margin:6px 0 12px;}' +
      '#tab-kakomon .kk-item{margin:10px 0;padding:13px 15px;border:1px solid var(--rule,#d6d6ce);' +
        'border-radius:10px;background:var(--surface,#fff);}' +
      '#tab-kakomon .kk-q{font-size:15.5px;line-height:1.9;color:var(--ink,#1c1c1e);}' +
      '#tab-kakomon .kk-ans{display:none;margin-top:10px;padding-top:10px;' +
        'border-top:1px dashed var(--rule,#d6d6ce);font-size:16px;line-height:1.8;' +
        'color:var(--warn,#a8281a);font-weight:700;}' +
      '#tab-kakomon .kk-item.show .kk-ans{display:block;}' +
      '#tab-kakomon .kk-exp{display:none;margin-top:10px;padding:10px 12px;' +
        'background:#e8f5ee;border-left:3px solid #1a5c3a;border-radius:0 6px 6px 0;' +
        'font-size:13px;line-height:1.85;color:var(--mid,#48484a);}' +
      '#tab-kakomon .kk-item.show .kk-exp{display:block;}' +
      '#tab-kakomon .kk-exp .kk-exp-label{display:block;font-weight:700;color:#1a5c3a;' +
        'font-size:12px;margin-bottom:3px;}' +
      '#tab-kakomon .kk-toggle{margin-top:10px;font-family:inherit;font-size:12.5px;font-weight:700;' +
        'cursor:pointer;border:1px solid var(--rule,#d6d6ce);background:#f5f5f0;' +
        'color:var(--mid,#48484a);border-radius:6px;padding:5px 12px;transition:.15s;}' +
      '#tab-kakomon .kk-toggle:hover{background:#d1e8d9;}' +
      '#tab-kakomon .kk-item.show .kk-toggle{background:#d1e8d9;border-color:#a8d4b3;color:#1a5c3a;}';
    var style = document.createElement('style');
    style.id = 'kakomon-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── タブ生成 ── */
  function buildTab(data) {
    var tabNav = document.querySelector('.tab-nav');
    if (!tabNav) return;
    if (document.getElementById('tab-kakomon')) return;

    injectStyle();

    /* タブボタン */
    var btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.id = 'kakomon-tab-btn';
    btn.textContent = '📜　過去問';
    btn.setAttribute('onclick', "switchTab('kakomon', this)");
    tabNav.appendChild(btn);

    /* タブコンテンツ */
    var div = document.createElement('div');
    div.id = 'tab-kakomon';
    div.className = 'tab-content';

    var html = '';
    if (data.title) html += '<h2 class="kk-title">' + esc(data.title) + '</h2>';
    if (data.intro) html += '<p class="kk-intro">' + esc(data.intro) + '</p>';
    html += '<div class="kk-controls">' +
            '<button type="button" class="kk-allbtn">すべての答えを表示</button>' +
            '</div>';

    (data.sections || []).forEach(function (sec, secIdx) {
      if (sec.heading)     html += '<div class="kk-sec-head">' + esc(sec.heading) + '</div>';
      if (sec.instruction) html += '<div class="kk-sec-inst">' + esc(sec.instruction) + '</div>';
      html += '<div class="kk-sec-items" data-sec="' + secIdx + '">';
      (sec.items || []).forEach(function (item, i) {
        /* ja はテキスト（エスケープ）、a と exp は HTML 直接挿入（データは管理者制御） */
        var inner = '<div class="kk-q">' + esc(item.ja || '') + '</div>';
        if (item.a)   inner += '<div class="kk-ans">' + (item.a || '') + '</div>';
        if (item.exp) inner += '<div class="kk-exp"><span class="kk-exp-label">解説</span>' + item.exp + '</div>';
        inner += '<button type="button" class="kk-toggle">答えを確認 ▾</button>';
        html += '<div class="kk-item" data-sec="' + secIdx + '" data-i="' + i + '">' + inner + '</div>';
      });
      html += '</div>';
    });

    div.innerHTML = html;

    /* 最後の .tab-content の直後に挿入 */
    var contents = document.querySelectorAll('.tab-content');
    var last = contents[contents.length - 1];
    if (last && last.parentNode) last.parentNode.insertBefore(div, last.nextSibling);
    else document.body.appendChild(div);

    /* トグルボタンのイベント登録 */
    div.querySelectorAll('.kk-toggle').forEach(function (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var item = toggleBtn.closest('.kk-item');
        if (!item) return;
        var shown = item.classList.toggle('show');
        toggleBtn.textContent = shown ? '答えを隠す ▴' : '答えを確認 ▾';
      });
    });

    /* 「すべての答えを表示」ボタン */
    var allBtn = div.querySelector('.kk-allbtn');
    if (allBtn) {
      allBtn.addEventListener('click', function () {
        var items = div.querySelectorAll('.kk-item');
        var anyHidden = false;
        items.forEach(function (it) { if (!it.classList.contains('show')) anyHidden = true; });
        items.forEach(function (it) {
          it.classList.toggle('show', anyHidden);
          var t = it.querySelector('.kk-toggle');
          if (t) t.textContent = anyHidden ? '答えを隠す ▴' : '答えを確認 ▾';
        });
        allBtn.textContent = anyHidden ? 'すべての答えを隠す' : 'すべての答えを表示';
      });
    }
  }

  function isAdmin() {
    return localStorage.getItem('adminViewAll') === 'true';
  }

  function hasKakomonAccess() {
    if (isAdmin()) return true;
    var isS1G11 = (localStorage.getItem('affiliationType') === 's1g11');
    var raw = localStorage.getItem('kakomonAccess');
    if (!raw) return false;
    try {
      var cfg = JSON.parse(raw);
      return (isS1G11 ? cfg.s1g11 : cfg.other) === 1;
    } catch (e) {
      return false;
    }
  }

  /* ── 初期化 ── */
  document.addEventListener('DOMContentLoaded', function () {
    var page = currentPage();
    var data = (typeof QUIZ_KAKOMON !== 'undefined' ? QUIZ_KAKOMON : {})[page];
    if (!data) return;
    if (!hasKakomonAccess()) return;
    buildTab(data);
  });

})();
