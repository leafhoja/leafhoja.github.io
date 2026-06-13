// phrase-lookup.js
// .ex-sp をクリックすると含まれる各単語の意味を inline 表示する
// phrase-dict.js (WORD_IDX, FORM_IDX) は初回クリック時に動的ロード

(function () {
  'use strict';

  function deaccent(s) {
    return s.replace(/[áéíóú]/g, function (c) {
      return { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }[c];
    });
  }

  // 不定詞末尾の目的語代名詞を除去（terminarlo → terminar）
  var CLITIC_PAT = /(?:me|te|se|nos|os|lo|la|los|las|le|les)$/;

  function lookupOne(t) {
    if (WORD_IDX[t]) return { base: t, data: WORD_IDX[t] };
    if (FORM_IDX[t] && WORD_IDX[FORM_IDX[t]]) return { base: FORM_IDX[t], data: WORD_IDX[FORM_IDX[t]] };
    return null;
  }

  // ── ルックアップ ──────────────────────────────
  function lookup(token) {
    var t = token.toLowerCase();

    // 1. 直接・活用形インデックス
    var r = lookupOne(t);
    if (r) return r;

    // 2. アクセント記号を外して再検索
    var plain = deaccent(t);
    if (plain !== t) {
      r = lookupOne(plain);
      if (r) return r;
    }

    // 3. 末尾の目的語代名詞を除去して再検索（terminarlo → terminar）
    var stripped = t.replace(CLITIC_PAT, '');
    if (stripped !== t && stripped.length >= 3) {
      r = lookupOne(stripped) || lookupOne(deaccent(stripped));
      if (r) return r;
    }

    // 4. 活用末尾パターンから不定詞を推測
    var guessed = guessInfinitive(t) || guessInfinitive(plain);
    if (guessed && WORD_IDX[guessed]) return { base: guessed, data: WORD_IDX[guessed] };

    return null;
  }

  // 動詞活用形 → 不定詞の推測（現在・過去未完了・点過去・接続法・分詞に対応）
  function guessInfinitive(t) {
    var pats = [
      // ── 現在分詞 ──
      [/ando$/, 'ar'], [/iendo$/, 'er'], [/iendo$/, 'ir'],
      // 現在分詞 + 目的語代名詞（例: leyéndolo → leer）
      [/ándolo$/, 'ar'], [/ándola$/, 'ar'], [/ándose$/, 'ar'],
      [/iéndolo$/, 'er'], [/iéndola$/, 'er'], [/iéndose$/, 'er'],
      [/iéndolo$/, 'ir'], [/iéndola$/, 'ir'], [/iéndose$/, 'ir'],
      // ── 過去分詞 ──
      [/ado$/, 'ar'], [/ido$/, 'er'], [/ido$/, 'ir'],
      // ── 過去未完了（不完全過去）──
      [/aba$/, 'ar'], [/abas$/, 'ar'], [/ábamos$/, 'ar'], [/aban$/, 'ar'],
      [/ía$/, 'er'],  [/ías$/, 'er'],  [/íamos$/, 'er'], [/ían$/, 'er'],
      [/ía$/, 'ir'],  [/ías$/, 'ir'],  [/íamos$/, 'ir'], [/ían$/, 'ir'],
      // ── 点過去（pretérito indefinido）──
      [/é$/, 'ar'], [/aste$/, 'ar'], [/ó$/, 'ar'], [/amos$/, 'ar'],
      [/asteis$/, 'ar'], [/aron$/, 'ar'],
      [/í$/, 'er'], [/iste$/, 'er'], [/ió$/, 'er'], [/imos$/, 'er'],
      [/isteis$/, 'er'], [/ieron$/, 'er'],
      [/í$/, 'ir'], [/iste$/, 'ir'], [/ió$/, 'ir'], [/imos$/, 'ir'],
      [/isteis$/, 'ir'], [/ieron$/, 'ir'],
      // ── 接続法現在 ──
      [/e$/, 'ar'], [/es$/, 'ar'], [/emos$/, 'ar'], [/en$/, 'ar'],
      [/a$/, 'er'], [/as$/, 'er'], [/amos$/, 'er'], [/an$/, 'er'],
      [/a$/, 'ir'], [/as$/, 'ir'], [/amos$/, 'ir'], [/an$/, 'ir'],
      // ── 直説法現在 ──
      [/áis$/, 'ar'], [/ais$/, 'ar'], [/as$/, 'ar'],
      [/éis$/, 'er'], [/eis$/, 'er'], [/es$/, 'er'],
      [/ís$/, 'ir'],  [/is$/, 'ir'],
      // 共通1単 -o
      [/o$/, 'ar'], [/o$/, 'er'], [/o$/, 'ir'],
      // 3単 -e/-a（最後に試す）
      [/e$/, 'er'], [/e$/, 'ir'], [/a$/, 'ar'],
    ];
    for (var i = 0; i < pats.length; i++) {
      var pat = pats[i][0], inf = pats[i][1];
      if (pat.test(t)) {
        var stem = t.replace(pat, '');
        if (stem.length >= 2) {
          var cand = stem + inf;
          if (WORD_IDX[cand]) return cand;
        }
      }
    }
    return null;
  }

  // ── UI 生成 ──────────────────────────────────
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function buildPanel(spanEl) {
    var text = spanEl.textContent || '';
    var tokens = text.match(/[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+/g) || [];
    if (!tokens.length) return null;

    var html = '<div class="pb-wrap">'
      + '<div class="pb-inner">';

    for (var i = 0; i < tokens.length; i++) {
      var t = tokens[i];
      var res = lookup(t);
      if (res) {
        var showBase = res.base.toLowerCase() !== t.toLowerCase();
        var posLabel = res.data[0] || '';
        var meaning  = res.data[1] || '';
        html += '<div class="pb-word pb-found">'
          + '<span class="pb-form">' + esc(t) + '</span>';
        if (showBase) {
          html += '<span class="pb-base">← ' + esc(res.base) + '</span>';
        }
        if (posLabel) {
          html += '<span class="pb-pos">' + esc(posLabel) + '</span>';
        }
        if (meaning) {
          html += '<span class="pb-ja">' + esc(meaning) + '</span>';
        }
        html += '</div>';
      } else {
        html += '<div class="pb-word pb-unknown">'
          + '<span class="pb-form">' + esc(t) + '</span>'
          + '</div>';
      }
    }

    html += '</div></div>';
    return html;
  }

  // ── セットアップ ────────────────────────────
  // Spanish1: .ex-sp  (anchor = closest .ex)
  // Spanish2: .utt-es (anchor = closest .utt-header)
  //           .sent-es (anchor = closest .sent-header)

  function attachClickable(sel, anchorSel) {
    document.querySelectorAll(sel).forEach(function (sp) {
      sp.classList.add('pb-clickable');
      sp.title = 'クリックして単語を確認';

      sp.addEventListener('click', function (e) {
        e.stopPropagation();

        var anchor = anchorSel ? sp.closest(anchorSel) : sp.closest('.ex');
        if (!anchor) return;

        var next = anchor.nextElementSibling;
        if (next && next.classList.contains('pb-wrap')) {
          next.remove();
          sp.classList.remove('pb-active');
          return;
        }

        var html = buildPanel(sp);
        if (!html) return;
        sp.classList.add('pb-active');
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        anchor.parentNode.insertBefore(tmp.firstChild, anchor.nextSibling);
      });
    });
  }

  function attachAll() {
    attachClickable('.ex-sp',   '.ex');
    attachClickable('.utt-es',  '.utt-header');
    attachClickable('.sent-es', '.sent-header');
  }

  // ── 遅延ロード ──────────────────────────────
  // phrase-dict.js は初回クリック時に動的ロードする

  function setup() {
    var candidates = document.querySelectorAll('.ex-sp, .utt-es, .sent-es');
    if (!candidates.length) return;

    // データ既ロード済み（html側で script タグ書いた場合など）
    if (typeof WORD_IDX !== 'undefined' && typeof FORM_IDX !== 'undefined') {
      attachAll();
      return;
    }

    // クリック前に視覚的フィードバックだけ設定
    candidates.forEach(function (el) {
      el.classList.add('pb-clickable');
      el.title = 'クリックして単語を確認';
    });

    var loading = false;
    function onFirstClick(e) {
      if (loading) return;
      loading = true;
      var originalEl = e.currentTarget;
      // すでにロード済みなら即セットアップ
      if (typeof WORD_IDX !== 'undefined' && typeof FORM_IDX !== 'undefined') {
        attachAll();
        setTimeout(function () { originalEl.click(); }, 0);
        return;
      }
      var s = document.createElement('script');
      s.src = 'phrase-dict.js';
      s.onload = function () {
        attachAll();
        // 最初のクリックを再発火して結果を即表示
        setTimeout(function () { originalEl.click(); }, 0);
      };
      document.head.appendChild(s);
    }

    candidates.forEach(function (el) {
      el.addEventListener('click', onFirstClick, { once: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
