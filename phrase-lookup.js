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

  function buildPanel(spanEl, jaText) {
    var text = spanEl.textContent || '';
    var tokens = text.match(/[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+/g) || [];
    if (!tokens.length) return null;

    var html = '<div class="pb-wrap">';
    if (jaText) {
      html += '<div class="pb-ja-head">' + esc(jaText) + '</div>';
    }
    html += '<div class="pb-inner">';

    for (var i = 0; i < tokens.length; i++) {
      var t = tokens[i];
      var res = lookup(t);
      if (res) {
        var showBase = res.base.toLowerCase() !== t.toLowerCase();
        var posLabel = res.data[0] || '';
        var meaning  = res.data[1] || '';
        html += '<div class="pb-word pb-found"'
          + ' data-word="' + esc(res.base) + '"'
          + ' data-form="' + esc(t) + '"'
          + ' data-pos="'  + esc(posLabel)  + '"'
          + ' data-def="'  + esc(meaning)   + '">'
          + '<span class="pb-form">' + esc(t) + '</span>';
        if (showBase) {
          html += '<span class="pb-base">← ' + esc(res.base) + '</span>';
        }
        if (posLabel) {
          html += '<span class="pb-pos" data-pos="' + esc(posLabel) + '">' + esc(posLabel) + '</span>';
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

        // 日本語訳を取得（.utt-body/.sent-body の最初の子要素）
        var jaText = '';
        var sibling = anchor.nextElementSibling;
        if (sibling) {
          var jaEl = sibling.querySelector('.utt-ja, .sent-ja');
          if (jaEl) jaText = jaEl.textContent.trim();
        }

        var html = buildPanel(sp, jaText);
        if (!html) return;
        sp.classList.add('pb-active');
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var panel = tmp.firstChild;
        anchor.parentNode.insertBefore(panel, anchor.nextSibling);

        // 各単語クリックで辞書モーダルを開く
        panel.querySelectorAll('.pb-word.pb-found').forEach(function (wordEl) {
          wordEl.addEventListener('click', function (e) {
            e.stopPropagation();
            var word = wordEl.dataset.word;
            var form = wordEl.dataset.form || '';
            var hl = form.toLowerCase() !== word.toLowerCase() ? form : null;
            if (typeof window.openDictByWord === 'function') {
              window.openDictByWord(word, null, hl);
            }
          });
        });
      });
    });
  }

  function attachAll() {
    attachClickable('.ex-sp',   '.ex');
    attachClickable('.utt-es',  '.utt-header');
    attachClickable('.sent-es', '.sent-header');
  }

  // ── インデックス構築 ─────────────────────────
  // dict-data.js (RAW) と dict-conj.js (DICT_CONJ) から
  // WORD_IDX / FORM_IDX を動的に生成する

  function buildIndexes() {
    window.WORD_IDX = {};
    window.FORM_IDX = {};
    // WORD_IDX: RAW の各エントリから構築
    for (var i = 0; i < RAW.length; i++) {
      var e = RAW[i];
      var w = e[F.word];
      WORD_IDX[w] = [e[F.pos], e[F.meaning], e[F.vtype] || e[F.gender] || ''];
      FORM_IDX[w] = w;
    }
    // FORM_IDX: DICT_CONJ の活用形・複数形・形容詞変化形から構築
    var conj = DICT_CONJ;
    var tenses = ['pres', 'pret', 'imp', 'fut', 'cond', 'subj'];
    for (var key in conj) {
      if (!conj.hasOwnProperty(key)) continue;
      var entry = conj[key];
      // 動詞活用形
      for (var ti = 0; ti < tenses.length; ti++) {
        var forms = entry[tenses[ti]];
        if (forms) {
          for (var fi = 0; fi < forms.length; fi++) {
            var form = forms[fi];
            if (form && !FORM_IDX[form]) FORM_IDX[form] = key;
          }
        }
      }
      // 名詞複数形
      if (entry.plural && !FORM_IDX[entry.plural]) FORM_IDX[entry.plural] = key;
      // 形容詞変化形
      if (entry.adj) {
        for (var ai = 0; ai < entry.adj.length; ai++) {
          var af = entry.adj[ai];
          if (af && !FORM_IDX[af]) FORM_IDX[af] = key;
        }
      }
    }
  }

  // ── 遅延ロード ──────────────────────────────
  // dict-data.js / dict-conj.js は初回クリック時に動的ロードする

  function setup() {
    var candidates = document.querySelectorAll('.ex-sp, .utt-es, .sent-es');
    if (!candidates.length) return;

    // データ既ロード済み（html側で script タグ書いた場合など）
    if (typeof RAW !== 'undefined' && typeof DICT_CONJ !== 'undefined') {
      buildIndexes();
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
      if (typeof RAW !== 'undefined' && typeof DICT_CONJ !== 'undefined') {
        buildIndexes();
        attachAll();
        setTimeout(function () { originalEl.click(); }, 0);
        return;
      }
      var loaded = 0;
      var srcs = ['dict-data.js', 'dict-conj.js'];
      srcs.forEach(function (src) {
        // すでにロード済みのスクリプトはスキップ
        if (document.querySelector('script[src="' + src + '"]')) {
          loaded++;
          if (loaded === srcs.length) {
            buildIndexes();
            attachAll();
            setTimeout(function () { originalEl.click(); }, 0);
          }
          return;
        }
        var s = document.createElement('script');
        s.src = src;
        s.onload = function () {
          loaded++;
          if (loaded === srcs.length) {
            buildIndexes();
            attachAll();
            // 最初のクリックを再発火して結果を即表示
            setTimeout(function () { originalEl.click(); }, 0);
          }
        };
        document.head.appendChild(s);
      });
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
