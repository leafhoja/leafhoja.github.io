// access-control.js — 学習ページ共通のアクセスコントロール
// すべての設定は index.html の PAGE_OPEN / LOCK_S1G11 / LOCK_OTHER / CARD_ACCESS で管理します
(function () {

  // ── サイト全体のロック確認 ──────────────────────────────────────────────
  if (localStorage.getItem('siteOpen') === '0') {
    window.location.replace('blocked.html');
    return;
  }

  // ── 管理者・全ページ確認モード ──────────────────────────────────────────
  if (localStorage.getItem('adminViewAll') === 'true') {
    return;
  }

  // ── ポリシー同意確認 ────────────────────────────────────────────────────
  if (!localStorage.getItem('agreedPolicy')) {
    window.location.replace('index.html');
    return;
  }

  // ── 所属アンケート完了確認 ──────────────────────────────────────────────
  if (!localStorage.getItem('affiliationType')) {
    window.location.replace('index.html');
    return;
  }

  // ── 個別ページのアクセス制御 ────────────────────────────────────────────
  var affType = localStorage.getItem('affiliationType');
  var isS1G11 = (affType === 's1g11');

  // グループ別一括ロック確認（index.html の LOCK_S1G11 / LOCK_OTHER が書き込む）
  var lockKey = isS1G11 ? 'lockS1G11' : 'lockOther';
  if (localStorage.getItem(lockKey) === '0') {
    window.location.replace('blocked.html');
    return;
  }

  // ページ別アクセス確認（index.html の CARD_ACCESS が書き込む）
  var pageName = location.pathname.split('/').pop() || 'index.html';
  var cardAccessRaw = localStorage.getItem('cardAccess');
  if (cardAccessRaw) {
    try {
      var cardAccess = JSON.parse(cardAccessRaw);
      var cfg = cardAccess[pageName];
      if (cfg) {
        var hasAccess = isS1G11 ? cfg.s1g11 : cfg.other;
        if (hasAccess !== 1) {
          window.location.replace('blocked.html');
          return;
        }
      }
    } catch (e) {}
  }

})();
