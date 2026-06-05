// access-control.js — レッスンページ共通のアクセスコントロール
(function () {
  var s = {};
  try { s = JSON.parse(localStorage.getItem('adminSettings') || '{}'); } catch (e) { }
  var page = window.location.pathname.split('/').pop() || 'index.html';

  if (s.siteDisabled === true) {
    window.location.replace('blocked.html');
    return;
  }
  if (s.pageDisabled && s.pageDisabled[page] === true) {
    window.location.replace('blocked.html?reason=page');
    return;
  }
  if (!localStorage.getItem('agreedPolicy')) {
    window.location.replace('index.html');
    return;
  }
  if (s.viewerPasswordEnabled === true && !sessionStorage.getItem('viewerAuthenticated')) {
    window.location.replace('index.html');
    return;
  }
})();
