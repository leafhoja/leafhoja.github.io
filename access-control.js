// access-control.js — 学習ページ共通のアクセスコントロール
// 各ページ先頭の PAGE_OPEN 変数と index.html のサイト設定を参照します
(function () {

  // ── 個別ページのロック確認 ─────────────────────────────────────────────
  // このページ先頭の PAGE_OPEN 変数を確認します（各ページで設定）
  if (typeof PAGE_OPEN !== 'undefined' && PAGE_OPEN !== 1) {
    window.location.replace('blocked.html');
    return;
  }

  // ── サイト全体のロック確認 ──────────────────────────────────────────────
  // index.html の PAGE_OPEN = 0 設定時に 'siteOpen'='0' が localStorage に記録される
  if (localStorage.getItem('siteOpen') === '0') {
    window.location.replace('blocked.html');
    return;
  }

  // ── ポリシー同意確認 ────────────────────────────────────────────────────
  if (!localStorage.getItem('agreedPolicy')) {
    window.location.replace('index.html');
    return;
  }

})();
