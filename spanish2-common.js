/* ══════════════════════════════════════════════
   Spanish2 共通スクリプト
   スペイン語二列 — 会話・読解解説シリーズ
   ══════════════════════════════════════════════ */

// タブ切り替え
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('active-kaiwa', 'active-dokkai', 'active-renshu');
  });
  btn.classList.add('active-' + tabId);
}

// 目次トグル
document.getElementById('top-toc-toggle').addEventListener('click', function(e) {
  e.preventDefault(); e.stopPropagation();
  const menu = document.getElementById('top-toc-menu');
  const isOpen = menu.classList.toggle('open');
  this.textContent = isOpen ? '✕ 閉じる' : '☰ 目次';
});

// 目次リンクをクリックしたときタブを開く
document.querySelectorAll('.fn-item').forEach(function(a) {
  a.addEventListener('click', function() {
    const targetTab = this.dataset.tab;
    if (targetTab) {
      const allTabs = document.querySelectorAll('.tab-btn');
      allTabs.forEach(function(btn) {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + targetTab + "'")) {
          if (!document.getElementById('tab-' + targetTab).classList.contains('active')) {
            btn.click();
          }
        }
      });
    }
    document.getElementById('top-toc-menu').classList.remove('open');
    document.getElementById('top-toc-toggle').textContent = '☰ 目次';
  });
});

// 目次以外をクリックで閉じる
document.addEventListener('click', function(e) {
  if (!e.target.closest('#top-nav'))
    document.getElementById('top-toc-menu').classList.remove('open');
});

// 解答トグル
document.querySelectorAll('.q-item').forEach(function(item) {
  const answerRow = item.querySelector('.q-answer-row');
  const exp = item.querySelector('.ans-exp');
  const btn = item.querySelector('.ans-toggle-btn');
  if (!answerRow || !btn) return;
  btn.addEventListener('click', function() {
    const revealed = answerRow.classList.toggle('visible');
    if (exp) exp.classList.toggle('visible', revealed);
    btn.classList.toggle('revealed', revealed);
    btn.textContent = revealed ? '答えを隠す' : '答えを確認';
  });
});

// 印刷ボタン
document.getElementById('pdf-print-btn').addEventListener('click', function() {
  document.body.classList.add('is-printing');
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      window.print();
    });
  });
});

// 印刷後に元に戻す
window.addEventListener('afterprint', function() {
  document.body.classList.remove('is-printing');
});

/* ══════════════════════════════════════════════
   検索機能
   ══════════════════════════════════════════════ */
(function () {
  /* ── DOM 注入 ── */
  // 検索ボタンをナビに追加
  // 🖨PDFで保存 → ☰目次 → 🔍検索 の順になるよう末尾に追加
  var tocToggle = document.getElementById('top-toc-toggle');
  var searchBtn = document.createElement('button');
  searchBtn.id = 'search-btn';
  searchBtn.textContent = '🔍 検索';
  tocToggle.parentNode.insertBefore(searchBtn, tocToggle.nextSibling);

  // 検索バーをbodyに追加
  document.body.insertAdjacentHTML('beforeend',
    '<div id="s2-search-bar">' +
      '<label>検索</label>' +
      '<input id="s2-search-input" type="text" placeholder="スペイン語・日本語で検索…" autocomplete="off" autocorrect="off" spellcheck="false">' +
      '<button id="s2-search-close" title="閉じる">✕</button>' +
    '</div>' +
    '<div id="s2-search-results"></div>'
  );

  // 辞書モーダルをbodyに追加
  document.body.insertAdjacentHTML('beforeend',
    '<div id="s2-dict-overlay">' +
      '<div id="s2-dict-modal">' +
        '<div id="s2-dict-head">' +
          '<span id="s2-dict-word"></span>' +
          '<span id="s2-dict-pos"></span>' +
          '<button id="s2-dict-close" title="閉じる">✕</button>' +
        '</div>' +
        '<div id="s2-dict-body"></div>' +
      '</div>' +
    '</div>'
  );

  /* ── ユーティリティ ── */
  function strip(s) {
    return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function hlEs(text, q) {
    var n = strip(q), t = strip(text);
    var i = t.indexOf(n);
    if (i < 0) return esc(text);
    return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+q.length)) + '</mark>' + esc(text.slice(i+q.length));
  }
  var isJa = function(s) { return /[　-鿿゠-ヿ一-龯]/.test(s); };

  /* ── レッスン語彙インデックス ── */
  var lessonIndex = [];
  (function buildIndex() {
    document.querySelectorAll('.word-item').forEach(function(item) {
      var esEl = item.querySelector('.w-es');
      var defEl = item.querySelector('.w-def');
      if (!esEl || !defEl) return;
      var tab  = item.closest('.tab-content');
      var card = item.closest('.utterance-card, .sent-card');
      lessonIndex.push({
        es: esEl.textContent.trim(),
        def: defEl.textContent.trim(),
        tabId: tab ? tab.id : null,
        card: card
      });
    });
  })();

  /* ── 検索ロジック ── */
  function searchLesson(q) {
    var norm = strip(q), ja = isJa(q);
    var seen = {}, results = [];
    lessonIndex.forEach(function(entry) {
      if (seen[entry.es]) return;
      var score = 999;
      if (ja) {
        if (entry.def.includes(q)) score = 0;
      } else {
        var n = strip(entry.es);
        if      (n === norm)         score = 0;
        else if (n.startsWith(norm)) score = 1;
        else if (n.includes(norm))   score = 2;
        if (score > 2 && entry.def.includes(q)) score = Math.min(score, 2);
      }
      if (score < 50) { results.push({entry: entry, score: score}); seen[entry.es] = 1; }
    });
    results.sort(function(a,b){ return a.score - b.score; });
    return results.slice(0, 8);
  }

  function searchDict(q) {
    if (typeof RAW === 'undefined' || typeof F === 'undefined') return [];
    var norm = strip(q), ja = isJa(q);
    var seen = {}, results = [];
    for (var i = 0; i < RAW.length; i++) {
      var e = RAW[i];
      var word = e[F.word], meaning = e[F.meaning], conj = e[F.conj] || '';
      if (seen[word]) continue;
      var score = 999;
      if (ja) {
        if (meaning.includes(q)) score = 0;
      } else {
        var wn = strip(word);
        if      (wn === norm)         score = 0;
        else if (wn.startsWith(norm)) score = 1;
        else if (wn.includes(norm))   score = 2;
        // 活用形マッチ
        if (score > 2 && conj) {
          var forms = conj.split(/,\s*/);
          for (var f = 0; f < forms.length; f++) {
            var fn = strip(forms[f].trim());
            if (fn === norm)         { score = Math.min(score, 0.5); break; }
            if (fn.startsWith(norm)) { score = Math.min(score, 1.5); }
          }
        }
      }
      if (score < 50) { results.push({idx: i, word: word, meaning: meaning, pos: e[F.pos], score: score}); seen[word] = 1; }
    }
    results.sort(function(a,b){ return a.score - b.score; });
    return results.slice(0, 15);
  }

  /* ── 検索バーの開閉 ── */
  function openSearch() {
    document.getElementById('s2-search-bar').classList.add('open');
    document.getElementById('s2-search-input').focus();
    document.getElementById('top-toc-menu').classList.remove('open');
    document.getElementById('top-toc-toggle').textContent = '☰ 目次';
  }
  function closeSearch() {
    document.getElementById('s2-search-bar').classList.remove('open');
    document.getElementById('s2-search-results').classList.remove('open');
    document.getElementById('s2-search-results').innerHTML = '';
    document.getElementById('s2-search-input').value = '';
  }

  /* ── 結果レンダリング ── */
  var _lessonHits = [], _dictHits = [];

  function doSearch(q) {
    var res = document.getElementById('s2-search-results');
    if (!q) { res.classList.remove('open'); res.innerHTML = ''; return; }

    _lessonHits = searchLesson(q);
    _dictHits   = searchDict(q);

    if (!_lessonHits.length && !_dictHits.length) {
      res.innerHTML = '<div class="s2-sr-none">「' + esc(q) + '」は見つかりませんでした</div>';
      res.classList.add('open');
      return;
    }

    var html = '';
    if (_lessonHits.length) {
      html += '<div class="s2-sr-header">このページの語彙</div>';
      _lessonHits.forEach(function(h, i) {
        var e = h.entry;
        var hasTarget = !!(e.card || e.tabId);
        var tabLabel = e.tabId === 'tab-kaiwa' ? '会話' : e.tabId === 'tab-dokkai' ? '読解' : e.tabId === 'tab-renshu' ? '練習' : '';
        html += '<div class="s2-sr-item" data-lesson="' + i + '" style="' + (hasTarget ? '' : 'opacity:.6;cursor:default') + '">' +
          '<span class="s2-sr-es">' + hlEs(e.es, q) + '</span>' +
          '<span class="s2-sr-ja">' + esc(e.def.slice(0,50)) + '</span>' +
          (hasTarget && tabLabel ? '<span class="s2-sr-tag is-lesson">→ ' + tabLabel + '</span>' : '') +
          '</div>';
      });
    }
    if (_dictHits.length) {
      html += '<div class="s2-sr-header">辞書（クリックで詳細表示）</div>';
      _dictHits.forEach(function(h, i) {
        html += '<div class="s2-sr-item" data-dict="' + i + '">' +
          '<span class="s2-sr-es is-dict">' + hlEs(h.word, q) + '</span>' +
          '<span class="s2-sr-ja">' + esc(h.meaning.slice(0,50)) + '</span>' +
          '<span class="s2-sr-tag is-dict">' + esc(h.pos) + '</span>' +
          '</div>';
      });
    }

    res.innerHTML = html;
    res.classList.add('open');

    res.querySelectorAll('.s2-sr-item[data-lesson]').forEach(function(el) {
      var idx = parseInt(el.dataset.lesson);
      el.addEventListener('click', function() {
        closeSearch();
        jumpToEntry(_lessonHits[idx].entry);
      });
    });
    res.querySelectorAll('.s2-sr-item[data-dict]').forEach(function(el) {
      var idx = parseInt(el.dataset.dict);
      el.addEventListener('click', function() {
        closeSearch();
        openDictModal(_dictHits[idx].idx);
      });
    });
  }

  /* ── 語彙カードへジャンプ ── */
  function jumpToEntry(entry) {
    if (entry.tabId) {
      var tabName = entry.tabId.replace('tab-', '');
      var tabContent = document.getElementById(entry.tabId);
      if (tabContent && !tabContent.classList.contains('active')) {
        var btn = document.querySelector('.tab-btn[onclick*="\'' + tabName + '\'"]');
        if (btn) btn.click();
      }
    }
    if (entry.card) {
      setTimeout(function() {
        entry.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var prev = entry.card.style.outline;
        entry.card.style.outline = '2px solid var(--accent2)';
        entry.card.style.outlineOffset = '2px';
        setTimeout(function() {
          entry.card.style.outline = prev;
          entry.card.style.outlineOffset = '';
        }, 1600);
      }, 150);
    }
  }

  /* ── 辞書モーダル ── */
  function openDictModal(rawIdx) {
    if (typeof RAW === 'undefined' || !RAW[rawIdx]) return;
    var e = RAW[rawIdx];
    var word    = e[F.word]    || '';
    var pos     = e[F.pos]     || '';
    var meaning = e[F.meaning] || '';
    var gender  = e[F.gender]  || '';
    var plural  = e[F.plural]  || '';
    var conj    = e[F.conj]    || '';
    var vtype   = e[F.vtype]   || '';
    var adj     = e[F.adj]     || '';
    var note    = e[F.note]    || '';

    document.getElementById('s2-dict-word').textContent = word;
    document.getElementById('s2-dict-pos').textContent  = pos;

    var body = '<div class="s2-dict-meaning">' + esc(meaning) + '</div>';

    if (gender === 'm') body += '<div class="s2-dict-row"><span class="s2-dict-label">性</span><span class="s2-dict-val"><span class="s2-dict-gender-m">男性 (m)</span></span></div>';
    else if (gender === 'f') body += '<div class="s2-dict-row"><span class="s2-dict-label">性</span><span class="s2-dict-val"><span class="s2-dict-gender-f">女性 (f)</span></span></div>';

    if (plural) body += '<div class="s2-dict-row"><span class="s2-dict-label">複数形</span><span class="s2-dict-val" style="font-family:var(--mono);font-weight:600;color:var(--accent)">' + esc(plural) + '</span></div>';

    if (vtype) body += '<div class="s2-dict-row"><span class="s2-dict-label">動詞型</span><span class="s2-dict-val">' + esc(vtype) + '</span></div>';

    if (conj) {
      var cHtml = conj.split(/,\s*/).map(function(f) {
        return '<span class="s2-dict-conj">' + esc(f.trim()) + '</span>';
      }).join('');
      body += '<div class="s2-dict-row"><span class="s2-dict-label">現在活用</span><span class="s2-dict-val">' + cHtml + '</span></div>';
    }

    if (adj) {
      var aHtml = adj.split(/,\s*/).map(function(f) {
        return '<span class="s2-dict-adj">' + esc(f.trim()) + '</span>';
      }).join('');
      body += '<div class="s2-dict-row"><span class="s2-dict-label">形容詞変化</span><span class="s2-dict-val">' + aHtml + '</span></div>';
    }

    if (note) body += '<div class="s2-dict-note">📝 ' + esc(note) + '</div>';

    // 例文表示
    if (typeof DICT_EXAMPLES !== 'undefined') {
      var ex = DICT_EXAMPLES[word];
      if (ex) {
        body += '<div class="s2-dict-example">' +
          '<div class="s2-dict-ex-label">例文</div>' +
          '<div class="s2-dict-ex-es">' + esc(ex.es) + '</div>' +
          '<div class="s2-dict-ex-ja">' + esc(ex.ja) + '</div>' +
          '</div>';
      }
    }

    body += '<a class="s2-dict-dict-link" href="単語帳/spanish_dictionary.html" target="_blank">📖 単語帳で詳しく見る →</a>';

    document.getElementById('s2-dict-body').innerHTML = body;
    document.getElementById('s2-dict-overlay').classList.add('open');
  }

  function closeDictModal() {
    document.getElementById('s2-dict-overlay').classList.remove('open');
  }

  /* ── イベントリスナー ── */
  searchBtn.addEventListener('click', openSearch);
  document.getElementById('s2-search-close').addEventListener('click', closeSearch);
  document.getElementById('s2-search-input').addEventListener('input', function() {
    doSearch(this.value.trim());
  });
  document.getElementById('s2-dict-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeDictModal();
  });
  document.getElementById('s2-dict-close').addEventListener('click', closeDictModal);

  // 検索バー外クリックで閉じる
  document.addEventListener('click', function(e) {
    var bar = document.getElementById('s2-search-bar');
    var res = document.getElementById('s2-search-results');
    if (!e.target.closest('#s2-search-bar') && !e.target.closest('#s2-search-results') && e.target !== searchBtn) {
      if (bar.classList.contains('open')) closeSearch();
    }
  });

  // Escape キーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeSearch(); closeDictModal(); }
  });

  /* ── 他レッスンからのジャンプ対応（URL末尾 #sw=word） ── */
  (function() {
    var hash = location.hash;
    if (!hash.startsWith('#sw=')) return;
    var targetWord = decodeURIComponent(hash.slice(4));
    setTimeout(function() {
      for (var i = 0; i < lessonIndex.length; i++) {
        if (lessonIndex[i].es === targetWord) {
          jumpToEntry(lessonIndex[i]);
          history.replaceState(null, '', location.pathname);
          break;
        }
      }
    }, 400);
  })();
})();
