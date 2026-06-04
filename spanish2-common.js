'use strict';
/* ═══════════════════════════════════════════════
   Spanish2 共通JS — 対話・読解ジャンプ機能
   スペイン語二列 — 会話・読解解説シリーズ
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  initDialogueJump();
  initLecturaJump();
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

  // text-sentenceをクリック可能に
  var textBodies = document.querySelectorAll('#tab-dokkai .text-card-body');
  textBodies.forEach(function (body) {
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
