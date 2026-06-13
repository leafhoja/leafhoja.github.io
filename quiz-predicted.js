'use strict';
/* ═══════════════════════════════════════════════
   小テスト 予想問題（管理者のみ表示 / adminOnly:true）
   ───────────────────────────────────────────────
   ・各ページのデータは QUIZ_DATA にマージされる（quiz-data.js の後に読み込むこと）。
   ・解説ページ（Spanish1_lessonN.html 等）の文法・例文・語彙に接地して作問する。
   ・作問/点検は .claude/agents/quiz-quality-reviewer.md のエージェントが担当。
   ═══════════════════════════════════════════════ */
(function () {
  if (typeof QUIZ_DATA === 'undefined') { return; }

  /* ── 一列 Lección 4 予想問題（直説法現在不規則・関係詞・比較・無主語文）──
     接地：Spanish1_lesson4.html の例文・活用表（語根母音変化 e→ie/o→ue/e→i/u→ue・
     -zco型・-go型・tener/venir/decir・完全不規則・que / lo que / donde /
     más…que / tan…como / 最上級 el más…de / 天候の無主語文 / hay que） */
  QUIZ_DATA['Spanish1_lesson4.html'] = {
    adminOnly: true,
    title: 'Lección 4 小テスト（予想問題）',
    intro: 'この課の文法事項（直説法現在不規則活用・関係詞・比較表現・無主語文など）からの予想問題です。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '1. 直説法現在形 不規則活用',
        instruction: '（&nbsp;）内の不定詞を、主語に合わせて直説法現在形に活用させなさい。',
        items: [
          {
            t: 'Nosotros (<span class="qz-b" data-a="queremos"></span>) descansar, pero los niños (<span class="qz-b" data-a="quieren"></span>) jugar. <span class="qz-hint">(querer)</span>',
            ja: '私たちは休みたいが、子供たちは遊びたがる。',
            exp: 'querer は <b>e→ie</b> 型（語根母音変化）。変化するのは1単・2単・3単・3複の「ブーツ型」。<br>1複 nosotros はアクセントが語根に当たらず<b>変化しない</b> → <b>queremos</b>（×quieremos）。3複は <b>quieren</b>。<br>⚠️ 1複・2複を変化させないことが最大のポイント。'
          },
          {
            t: 'Tú (<span class="qz-b" data-a="puedes"></span>) hacerlo, pero nosotros no (<span class="qz-b" data-a="podemos"></span>). <span class="qz-hint">(poder)</span>',
            ja: '君はそれができるが、私たちにはできない。',
            exp: 'poder は <b>o→ue</b> 型。2単 <b>puedes</b> は変化、1複 <b>podemos</b> は<b>変化しない</b>（×puedemos）。<br>⚠️ ブーツ型：1複・2複だけ規則どおりの活用。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="tengo"></span>) dos hermanos y mi prima (<span class="qz-b" data-a="tiene"></span>) tres. <span class="qz-hint">(tener)</span>',
            ja: '私には兄弟が2人、いとこには3人いる。',
            exp: 'tener は <b>-go ＋ 語根母音変化</b>型。1単は <b>tengo</b>（-go のみで e→ie 変化は<b>起きない</b>）。3単は e→ie 変化で <b>tiene</b>（-go はつかない）。<br>⚠️ 1単で「tiengo」のように -go と語根変化を混ぜない。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="conozco"></span>) a María, pero no (<span class="qz-b" data-a="sé"></span>) dónde vive. <span class="qz-hint">(conocer / saber)</span>',
            ja: '私はマリアを知っているが、彼女がどこに住んでいるかは知らない。',
            exp: '母音+cer の <b>conocer</b> は1単で c→zc となり <b>conozco</b>。<b>saber</b> は完全不規則で1単 <b>sé</b>（アクセント記号必須）。<br>⚠️ 意味の使い分けも：人・場所を体験的に「知っている」は conocer、事実・情報を「知っている」は saber。'
          },
          {
            t: 'En el restaurante yo (<span class="qz-b" data-a="pido"></span>) paella y mis amigos (<span class="qz-b" data-a="piden"></span>) tapas. <span class="qz-hint">(pedir)</span>',
            ja: 'レストランで私はパエリアを、友人たちはタパスを注文する。',
            exp: 'pedir は <b>e→i</b> 型（このタイプは ir 動詞のみ）。1単 <b>pido</b>・3複 <b>piden</b> と変化する。<br>⚠️ e→<u>ie</u> ではなく e→<u>i</u>（×piedo）。'
          },
          {
            t: 'Yo siempre (<span class="qz-b" data-a="digo"></span>) la verdad, pero tú no (<span class="qz-b" data-a="dices"></span>) nada. <span class="qz-hint">(decir)</span>',
            ja: '私はいつも本当のことを言うが、君は何も言わない。',
            exp: 'decir は <b>-go ＋ e→i</b> 型。<b>例外的に1単でも e→i 変化</b>が起こり <b>digo</b>。2単は <b>dices</b>。<br>⚠️ tener / venir（1単 tengo / vengo は語根変化<b>なし</b>）とは対照的なので要注意。'
          },
          {
            t: 'Mi hijo (<span class="qz-b" data-a="juega"></span>) al fútbol y nosotros (<span class="qz-b" data-a="jugamos"></span>) al tenis. <span class="qz-hint">(jugar)</span>',
            ja: '息子はサッカーを、私たちはテニスをする。',
            exp: 'jugar は <b>u→ue</b> 型（この型をとるのは jugar だけ）。3単 <b>juega</b> は変化、1複 <b>jugamos</b> は<b>変化しない</b>（×juegamos）。'
          },
          {
            t: 'Los domingos yo (<span class="qz-b" data-a="voy"></span>) al parque y mis padres (<span class="qz-b" data-a="van"></span>) a la iglesia. <span class="qz-hint">(ir)</span>',
            ja: '日曜日、私は公園へ、両親は教会へ行く。',
            exp: 'ir は<b>完全不規則</b>。1単 <b>voy</b>、3複 <b>van</b>。語幹が v- になり、不定詞 ir からは形を推測できない。<br>⚠️ パターンに頼らずそのまま暗記する動詞。'
          }
        ]
      },
      {
        heading: '2. 関係詞',
        instruction: '（&nbsp;）に適切な関係詞を入れなさい。',
        items: [
          {
            t: 'Tengo una amiga (<span class="qz-b" data-a="que"></span>) vive en México.',
            ja: '私にはメキシコに住む友人がいる。',
            exp: '先行詞 una amiga を受ける関係代名詞は <b>que</b>（人でも物でも、主格・直接目的格は que）。<br>⚠️ 人だからといって quien を必須にしない。限定用法では que が基本。'
          },
          {
            t: '(<span class="qz-b" data-a="Lo que"></span>) me preocupa es el dinero.',
            ja: '私が心配なのはお金だ。',
            exp: '特定の名詞ではなく「〜なこと・もの」を指す中性関係詞は <b>lo que</b>。<br>⚠️ el que / la que（特定の人・物）と混同しない。文頭でも lo que。'
          },
          {
            t: 'Esta es la ciudad (<span class="qz-b" data-a="donde"></span>) vivo.',
            ja: 'これは私が住んでいる街だ。',
            exp: '場所を表す先行詞を受ける関係副詞は <b>donde</b>（＝en que）。<br>⚠️ que だけでは「場所＋動詞」をつなげない。場所には donde。'
          }
        ]
      },
      {
        heading: '3. 比較・最上級',
        instruction: '（&nbsp;）に適切な語を入れなさい。形容詞は主語に一致させること。',
        items: [
          {
            t: 'Antonio es (<span class="qz-b" data-a="más"></span>) alto (<span class="qz-b" data-a="que"></span>) Juana.',
            ja: 'アントニオはフアナより背が高い。',
            exp: '優等比較は <b>más</b> + 形容詞 + <b>que</b>。形容詞 alto は主語 Antonio（男性単数）に一致。<br>⚠️ 比較の相手は que（de ではない）。'
          },
          {
            t: 'María es (<span class="qz-b" data-a="tan"></span>) alegre (<span class="qz-b" data-a="como"></span>) su madre.',
            ja: 'マリアは母と同じくらい陽気だ。',
            exp: '同等比較で形容詞・副詞を挟むのは <b>tan</b> … <b>como</b>。<br>⚠️ 名詞の量を比べるときは tanto/tanta/tantos/tantas … como。tan は形容詞・副詞専用。'
          },
          {
            t: 'Emilio es (<span class="qz-b" data-a="el"></span>) (<span class="qz-b" data-a="más"></span>) alto (<span class="qz-b" data-a="de"></span>) su familia.',
            ja: 'エミリオは家族のうちで最も背が高い。',
            exp: '最上級は「定冠詞 + más + 形容詞 + <b>de</b> + 範囲」。定冠詞は主語に一致して <b>el</b>。<br>⚠️ 範囲は que ではなく <b>de</b>（de su familia）。'
          }
        ]
      },
      {
        heading: '4. 無主語文',
        instruction: '（&nbsp;）に適切な語を入れなさい。',
        items: [
          {
            t: 'En junio (<span class="qz-b" data-a="llueve"></span>) mucho en Japón.',
            ja: '日本では6月にたくさん雨が降る。',
            exp: '天候表現は無主語・3人称単数。llover は語幹母音変化（o→ue）で <b>llueve</b>。<br>⚠️ 主語を置かない。lluevo などとしない。'
          },
          {
            t: '(<span class="qz-b" data-a="Hay"></span>) (<span class="qz-b" data-a="que"></span>) trabajar para vivir.',
            ja: '人は生きるためには働かなければならない。',
            exp: '一般的な義務「（誰でも）〜しなければならない」は <b>hay que</b> + 不定詞。<br>⚠️ 個人の義務 tener que と区別。hay que は主語を特定しない。'
          }
        ]
      }
    ]
  };

})();
