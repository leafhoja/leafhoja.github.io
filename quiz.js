'use strict';
/* ═══════════════════════════════════════════════
   小テストタブ — 共通スクリプト（一列・二列）
   ───────────────────────────────────────────────
   ・quiz-data.js にデータがあるページだけ「小テスト」タブを生成。
   ・index.html の QUIZ_ACCESS（localStorage: quizAccess）でアクセス判定。
     アクセス権がない／ロック対象には、タブ自体を描画しない。
   ・初期値（quizAccess 未設定）は「全員非表示」。
   ═══════════════════════════════════════════════ */
(function () {

  function currentPage() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  function isAdmin() {
    return localStorage.getItem('adminViewAll') === 'true';
  }

  /* ── アクセス判定 ──
     一括スイッチ（数値）: 2=一括表示 / 1=個別設定に従う / 0=一括非表示 */
  function hasQuizAccess() {
    // すべてのページの閲覧を許可された人（管理者モード）はロックに関わらず常に表示
    if (isAdmin()) return true;

    var isS1G11 = (localStorage.getItem('affiliationType') === 's1g11');

    // 一括スイッチ（所属グループ別）
    var bulkRaw = localStorage.getItem(isS1G11 ? 'quizBulkS1G11' : 'quizBulkOther');
    var bulk = (bulkRaw === null || bulkRaw === '') ? 1 : parseInt(bulkRaw, 10);
    if (bulk === 2) return true;   // グループ一括表示
    if (bulk === 0) return false;  // グループ一括非表示

    // 1 → 個別設定 QUIZ_ACCESS に従う
    var raw = localStorage.getItem('quizAccess');
    if (!raw) return false; // 初期値：全員非表示
    try {
      var cfg = JSON.parse(raw)[currentPage()];
      if (!cfg) return false;
      return (isS1G11 ? cfg.s1g11 : cfg.other) === 1;
    } catch (e) {
      return false;
    }
  }

  /* ── CSS を一度だけ注入 ── */
  function injectStyle() {
    if (document.getElementById('quiz-style')) return;
    var css =
      '.tab-btn.active-quiz{color:#7a5b1b;border-bottom-color:#7a5b1b;background:#f7f1e3;}' +
      '#tab-quiz .qz-title{font-size:20px;margin:0 0 8px;color:var(--ink,#1c1c1e);}' +
      '#tab-quiz .qz-intro{font-size:14px;color:var(--mid,#48484a);line-height:1.8;margin:4px 0 18px;}' +
      '#tab-quiz .qz-admin-badge{display:inline-block;font-size:12px;font-weight:700;color:#7a5b1b;background:#f7f1e3;border:1px solid #e0d2a8;border-radius:6px;padding:4px 10px;margin:0 0 12px;}' +
      '#tab-quiz .qz-controls{margin:0 0 18px;display:flex;gap:10px;flex-wrap:wrap;}' +
      '#tab-quiz .qz-allbtn,#tab-quiz .qz-shufbtn,#tab-quiz .qz-hintbtn{font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;border:1.5px solid var(--accent,#2a5298);color:var(--accent,#2a5298);background:#fff;border-radius:999px;padding:7px 16px;transition:.15s;}' +
      '#tab-quiz .qz-allbtn:hover,#tab-quiz .qz-shufbtn:hover,#tab-quiz .qz-hintbtn:hover{background:var(--accent,#2a5298);color:#fff;}' +
      '#tab-quiz .qz-shufbtn.active,#tab-quiz .qz-hintbtn.active{background:var(--accent,#2a5298);color:#fff;}' +
      '#tab-quiz .qz-sec-head{font-weight:700;font-size:15px;margin:24px 0 6px;color:var(--ink,#1c1c1e);}' +
      '#tab-quiz .qz-sec-inst{font-size:13px;color:var(--mid,#48484a);line-height:1.7;margin:0 0 12px;}' +
      '#tab-quiz .qz-item{margin:12px 0;padding:14px 16px;border:1px solid var(--rule,#d6d6ce);border-radius:10px;background:var(--surface,#fff);}' +
      '#tab-quiz .qz-q{font-size:16px;line-height:2.0;}' +
      '#tab-quiz .qz-num{font-weight:700;color:var(--accent,#2a5298);margin-right:8px;}' +
      '#tab-quiz .qz-b{display:inline-block;min-width:3.4em;padding:0 .35em;margin:0 .1em;border-bottom:1.6px solid #b8b8b0;text-align:center;line-height:1.6;}' +
      '#tab-quiz .qz-b::after{content:"\\00a0";}' +
      '#tab-quiz .qz-item.show .qz-b{border-bottom-color:transparent;}' +
      '#tab-quiz .qz-item.show .qz-b::after{content:attr(data-a);color:var(--warn,#a8281a);font-weight:700;}' +
      '#tab-quiz .qz-ja{font-size:13.5px;color:var(--mid,#48484a);margin-top:8px;line-height:1.7;}' +
      '#tab-quiz .qz-ans{display:none;margin-top:10px;padding-top:10px;border-top:1px dashed var(--rule,#d6d6ce);font-size:16px;line-height:1.8;color:var(--warn,#a8281a);font-weight:700;}' +
      '#tab-quiz .qz-item.show .qz-ans{display:block;}' +
      '#tab-quiz .qz-exp{display:none;margin-top:10px;padding:10px 12px;background:#eef3fb;border-left:3px solid var(--accent,#2a5298);border-radius:0 6px 6px 0;font-size:13px;line-height:1.85;color:var(--mid,#48484a);}' +
      '#tab-quiz .qz-item.show .qz-exp{display:block;}' +
      '#tab-quiz .qz-exp .qz-exp-label{display:block;font-weight:700;color:var(--accent,#2a5298);font-size:12px;margin-bottom:3px;}' +
      '#tab-quiz .qz-toggle{margin-top:10px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid var(--rule,#d6d6ce);background:#f5f5f0;color:var(--mid,#48484a);border-radius:6px;padding:5px 12px;transition:.15s;}' +
      '#tab-quiz .qz-toggle:hover{background:#ebe5d8;}' +
      '#tab-quiz .qz-item.show .qz-toggle{background:#fdecea;border-color:#e8b4ad;color:var(--warn,#a8281a);}' +
      '#tab-quiz .qz-theme{display:none;margin-top:10px;font-size:12.5px;font-weight:700;color:var(--accent,#2a5298);}' +
      // シャッフル中のみ：見出し・指示文を隠し、解答確認時に各問のテーマを表示
      '#tab-quiz.shuffled .qz-sec-head,#tab-quiz.shuffled .qz-sec-inst{display:none;}' +
      '#tab-quiz.shuffled .qz-item.show .qz-theme{display:block;}' +
      // 不定詞ヒント（デフォルト非表示、.hint-show クラスで表示）
      '#tab-quiz .qz-hint{display:none;font-size:.88em;color:#999;margin-left:.25em;}' +
      '#tab-quiz.hint-show .qz-hint{display:inline;}';
    var style = document.createElement('style');
    style.id = 'quiz-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── タブ生成 ── */
  function buildTab(data) {
    var tabNav = document.querySelector('.tab-nav');
    if (!tabNav) return;
    if (document.getElementById('tab-quiz')) return; // 二重生成防止

    injectStyle();

    // タブボタン（末尾に追加）
    var btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.id = 'quiz-tab-btn';
    btn.textContent = data.adminOnly ? '🔮　予想問題' : '📝　小テスト';
    btn.setAttribute('onclick', "switchTab('quiz', this)");
    tabNav.appendChild(btn);

    // タブコンテンツ
    var div = document.createElement('div');
    div.id = 'tab-quiz';
    div.className = 'tab-content';

    var html = '';
    if (data.title) html += '<h2 class="qz-title">' + esc(data.title) + '</h2>';
    if (data.adminOnly) html += '<div class="qz-admin-badge">🔒 予想問題（管理者のみ表示）</div>';
    if (data.intro) html += '<p class="qz-intro">' + data.intro + '</p>';
    html += '<div class="qz-controls">' +
            '<button type="button" class="qz-allbtn">すべての答えを表示</button>' +
            '<button type="button" class="qz-shufbtn">🔀 シャッフル</button>' +
            '<button type="button" class="qz-hintbtn" style="display:none">💡 不定詞ヒントを見る</button>' +
            '</div>';

    var globalIdx = 0;
    (data.sections || []).forEach(function (sec, secIdx) {
      if (sec.heading) html += '<div class="qz-sec-head">' + esc(sec.heading) + '</div>';
      if (sec.instruction) html += '<div class="qz-sec-inst">' + sec.instruction + '</div>';
      html += '<div class="qz-sec-items" data-sec="' + secIdx + '">';
      (sec.items || []).forEach(function (item, i) {
        html += renderItem(item, i + 1, globalIdx, secIdx, sec.heading || '');
        globalIdx++;
      });
      html += '</div>';
    });

    div.innerHTML = html;

    // 最後の .tab-content の直後に挿入
    var contents = document.querySelectorAll('.tab-content');
    var last = contents[contents.length - 1];
    if (last && last.parentNode) last.parentNode.insertBefore(div, last.nextSibling);
    else document.body.appendChild(div);

    wireToggles(div);
  }

  function renderItem(item, num, globalIdx, secIdx, theme) {
    var inner = '';
    if (item.t) {
      // 空所穴埋め形式：問題文（タップで答え表示）＋ 和訳ヒント
      inner = '<div class="qz-q"><span class="qz-num">' + num + ')</span>' + item.t + '</div>';
      if (item.ja) inner += '<div class="qz-ja">' + esc(item.ja) + '</div>';
    } else {
      // 作文（和文西訳）形式：日本語の問題＋「答えを見る」で解答例
      inner = '<div class="qz-q"><span class="qz-num">' + num + ')</span>' + esc(item.ja || '') + '</div>';
      if (item.a) inner += '<div class="qz-ans">' + esc(item.a) + '</div>';
    }
    // テーマ（セクション見出し）— シャッフル中に解答確認したときだけ表示。
    // 先頭の番号（例「1. 」）は除いてテーマ名だけを示す。
    if (theme) {
      inner += '<div class="qz-theme">テーマ：' + esc(theme.replace(/^\s*\d+[.\．]\s*/, '')) + '</div>';
    }
    if (item.exp) {
      inner += '<div class="qz-exp"><span class="qz-exp-label">解説</span>' + item.exp + '</div>';
    }
    inner += '<button type="button" class="qz-toggle">答えを確認 ▾</button>';
    return '<div class="qz-item" data-orig="' + globalIdx + '" data-sec="' + secIdx + '">' + inner + '</div>';
  }

  function wireToggles(root) {
    root.querySelectorAll('.qz-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.qz-item');
        if (!item) return;
        var shown = item.classList.toggle('show');
        btn.textContent = shown ? '答えを隠す ▴' : '答えを見る ▾';
      });
    });

    var allBtn = root.querySelector('.qz-allbtn');
    if (allBtn) {
      allBtn.addEventListener('click', function () {
        var items = root.querySelectorAll('.qz-item');
        var anyHidden = false;
        items.forEach(function (it) { if (!it.classList.contains('show')) anyHidden = true; });
        items.forEach(function (it) {
          it.classList.toggle('show', anyHidden);
          var t = it.querySelector('.qz-toggle');
          if (t) t.textContent = anyHidden ? '答えを隠す ▴' : '答えを見る ▾';
        });
        allBtn.textContent = anyHidden ? 'すべての答えを隠す' : 'すべての答えを表示';
      });
    }

    // 不定詞ヒントトグル（ヒントが存在する場合のみボタン表示）
    var hintBtn = root.querySelector('.qz-hintbtn');
    if (hintBtn && root.querySelectorAll('.qz-hint').length > 0) {
      hintBtn.style.display = '';
      var hintShown = false;
      hintBtn.addEventListener('click', function () {
        hintShown = !hintShown;
        root.classList.toggle('hint-show', hintShown);
        hintBtn.textContent = hintShown ? '💡 不定詞ヒントを隠す' : '💡 不定詞ヒントを見る';
        hintBtn.classList.toggle('active', hintShown);
      });
    }

    // シャッフルモード（真剣な得点練習用に出題順をランダム化）
    // テーマ（セクション）をまたいで、その課の全問題をまとめてシャッフルする。
    var shufBtn = root.querySelector('.qz-shufbtn');
    if (shufBtn) {
      var shuffled = false;
      var firstBox = root.querySelector('.qz-sec-items');
      shufBtn.addEventListener('click', function () {
        shuffled = !shuffled;
        var items = Array.prototype.slice.call(root.querySelectorAll('.qz-item'));
        if (shuffled) {
          // Fisher–Yates で課全体をシャッフルし、先頭の箱にまとめる（見出しはCSSで非表示）
          for (var i = items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = items[i]; items[i] = items[j]; items[j] = tmp;
          }
          items.forEach(function (it, idx) {
            if (firstBox) firstBox.appendChild(it);
            var numEl = it.querySelector('.qz-num');
            if (numEl) numEl.textContent = (idx + 1) + ')';
          });
        } else {
          // 元の課内順序＆各テーマの箱へ戻し、セクションごとに番号を振り直す
          items.sort(function (a, b) {
            return (+a.getAttribute('data-orig')) - (+b.getAttribute('data-orig'));
          });
          var counters = {};
          items.forEach(function (it) {
            var sec = it.getAttribute('data-sec');
            var box = root.querySelector('.qz-sec-items[data-sec="' + sec + '"]');
            if (box) box.appendChild(it);
            counters[sec] = (counters[sec] || 0) + 1;
            var numEl = it.querySelector('.qz-num');
            if (numEl) numEl.textContent = counters[sec] + ')';
          });
        }
        root.classList.toggle('shuffled', shuffled);
        shufBtn.textContent = shuffled ? '↩️ 元の順序' : '🔀 シャッフル';
        shufBtn.classList.toggle('active', shuffled);
      });
    }
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ── 初期化 ── */
  document.addEventListener('DOMContentLoaded', function () {
    var data = (typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : {})[currentPage()];
    if (!data) return;                          // データなし → タブを出さない
    if (data.adminOnly && !isAdmin()) return;   // 予想問題など：管理者のみ表示
    if (!hasQuizAccess()) return;               // アクセス権なし → タブを出さない
    // 他の動的タブ（二列の語彙タブ等）の生成後に末尾へ追加するため遅延
    setTimeout(function () { buildTab(data); }, 0);
  });

})();
