'use strict';
/* ═══════════════════════════════════════════════
   過去問データ — 2025年度 二列 各課 小テスト
   ───────────────────────────────────────────────
   ・ここにデータを追加したページに「過去問」タブが表示されます。
   ・CLAUDE.md の変更可否に準じ、問題文・解答は変更不可（実施済み試験）。
     解説（exp）は充実させてよい。
   ─────────────────────────────────────────────── */

var QUIZ_KAKOMON = {

  /* ── 二列 Lección 1 ── */
  'Spanish2_lesson1.html': {
    title: '2025年度 一課 小テスト（過去問）',
    intro: '実際の小テストの問題と模範解答です。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '問1. 二重母音も三重母音も含まない語を選べ（4点）',
        instruction: '次の中から二重母音も三重母音も含まない単語を一つ選び、○で囲みなさい。',
        items: [
          {
            ja: '(1)　estudiante ／ oasis ／ juicio ／ pausa',
            a: 'oasis',
            exp: '<b>oasis</b> の母音列 o・a は共に強母音で隣接すると<b>分立（hiato）</b>し別々の音節になるため、二重母音を形成しない（o-a-sis）。<br>✗ estudiante → "ia"（弱強）が二重母音 ／ juicio → "ui"・"io" × 2 ／ pausa → "au"（強弱）。<br>📖 <b>二重母音</b>：強母音（a e o）＋弱母音（i u）、または弱母音＋弱母音の組み合わせで1音節をなす。'
          },
          {
            ja: '(2)　vuelo ／ nadie ／ máquina ／ Uruguay',
            a: 'máquina',
            exp: '<b>máquina</b> の "qu" は /k/ の綴りで u は発音されないため、実際の母音は a・i・a（各音節に1母音のみ）→ 二重母音なし。<br>✗ vuelo → "ue"（弱強）／ nadie → "ie"（弱強）／ Uruguay → "ua"・"ay" または三重母音 "uay"。<br>📖 <b>qu + e / i</b>：u は黙字（発音しない）。「クエ/クイ」音は que / qui と綴る。'
          },
          {
            ja: '(3)　baile ／ diccionario ／ bueno ／ museo',
            a: 'museo',
            exp: '<b>museo</b> の e・o は共に強母音 → <b>分立（hiato）</b>して別音節（mu-se-o）→ 二重母音なし。<br>✗ baile → "ai"（強弱）／ diccionario → "io" × 2（弱強）／ bueno → "ue"（弱強）。<br>📖 強母音が二つ並んでも分立（hiato）となり二重母音にはならない。'
          },
          {
            ja: '(4)　grúa ／ cuota ／ ausencia ／ huevo',
            a: 'grúa',
            exp: '<b>grúa</b> の ú にアクセント記号（tilde）→ 弱母音 u が強勢を持つため強母音 a との間で<b>分立（hiato）</b>が発生 → gr-ú-a は二重母音にならない。<br>✗ cuota → "uo"（弱強）／ ausencia → "au"（強弱）／ huevo → "ue"（弱強）。<br>📖 アクセント記号は規則例外（二重母音の解消、強勢の明示）に用いる。'
          }
        ]
      },
      {
        heading: '問2. 最も強く読む母音を○で囲め（13点）',
        instruction: '以下の地名の中で最も強く読む母音を○で囲みなさい。ただし、二重母音の場合はその中でより強く読む母音字１つを○で囲むこと。',
        items: [
          { ja: '(1)　Venezuela',  a: 'e（Ve-ne-zu-<b>E</b>-la）', exp: '語末 -a → 後ろから2番目の音節（第4音節）が強勢。Ve-ne-zu-<b>E</b>-la。' },
          { ja: '(2)　Caracas',    a: 'a（Ca-<b>RA</b>-cas）',       exp: '語末 -s → 後ろから2番目の音節（ra）が強勢。Ca-<b>ra</b>-cas。' },
          { ja: '(3)　Ecuador',    a: 'o（E-cua-<b>DOR</b>）',       exp: '語末 -r → 最後の音節（dor）が強勢。E-cua-<b>dor</b>。二重母音 "ua" の強勢母音は a だが、強勢音節全体は dor。' },
          { ja: '(4)　Callao',     a: 'a（Ca-<b>LLA</b>-o）',        exp: '語末 -o → 後ろから2番目の音節（lla）が強勢。Ca-<b>lla</b>-o。' },
          { ja: '(5)　Montevideo', a: 'e（Mon-te-vi-<b>DE</b>-o）',  exp: '語末 -o → 後ろから2番目の音節（de）が強勢。Mon-te-vi-<b>de</b>-o。' },
          { ja: '(6)　Potosí',     a: 'í（Po-to-<b>SÍ</b>）',        exp: 'アクセント記号（tilde）が í に付く → 規則を上書きして最後の音節 sí に強勢。Po-to-<b>sí</b>。' },
          { ja: '(7)　Gibraltar',  a: 'a（Gi-bral-<b>TAR</b>）',     exp: '語末 -r → 最後の音節（tar）が強勢。Gi-bral-<b>tar</b>。' },
          { ja: '(8)　Guatemala',  a: 'a（Gua-te-<b>MA</b>-la）',    exp: '語末 -a → 後ろから2番目の音節（ma）が強勢。Gua-te-<b>ma</b>-la。' },
          { ja: '(9)　Honduras',   a: 'u（Hon-<b>DU</b>-ras）',      exp: '語末 -s → 後ろから2番目の音節（du）が強勢。Hon-<b>du</b>-ras。' },
          { ja: '(10)　Santiago',  a: 'a（San-<b>TIA</b>-go）',      exp: '語末 -o → 後ろから2番目の音節（tia）が強勢。"ia" は二重母音（弱＋強）で強い方は a。San-<b>TIA</b>-go。' },
          { ja: '(11)　Teruel',    a: 'e（Te-ru-<b>EL</b>）',        exp: '語末 -l → 最後の音節（el）が強勢。Te-ru-<b>el</b>。' },
          { ja: '(12)　Aranjuez',  a: 'e（A-ran-ju-<b>EZ</b>）',    exp: '語末 -z → 最後の音節（juez 相当部分）が強勢。"ue" 二重母音では e が強い。A-ran-<b>juez</b>。' },
          { ja: '(13)　Chihuahua', a: 'a（Chi-<b>HUA</b>-hua）',    exp: '語末 -a → 後ろから2番目の音節（2番目の hua）が強勢。"hua" 二重母音では a が強い。Chi-<b>hua</b>-hua。' }
        ]
      },
      {
        heading: '問3. スペイン語の名前の綴りを選べ（3点）',
        instruction: '以下のスペイン語の名前の綴りとして正しいものを○で囲みなさい。',
        items: [
          {
            ja: '(1)　ホルヘ：Gorge ／ Jorge ／ Gorhe ／ Jorhe',
            a: 'Jorge',
            exp: '<b>j</b> はスペイン語で /x/（日本語「ホ」に近い音）。"rge" の部分は r + g + e → r + /xe/ = rge。Gorge は英語の「峡谷」。Gorhe / Jorhe は h が無声摩擦音を持たないため不可。'
          },
          {
            ja: '(2)　ミゲル：Migel ／ Miguel ／ Mijel ／ Migüel',
            a: 'Miguel',
            exp: 'g + i は本来 /xi/ の音。/gi/ の音を出すには <b>gu + i</b> と書く。Miguel = Mi-<b>gu</b>-el = /migel/。Migüel は ü（ウムラウト）が付いて "güe/güi" = /gwe/ /gwi/ になるため誤り。'
          },
          {
            ja: '(3)　ラケル：Raquel ／ Racuel ／ Raqel ／ Racel',
            a: 'Raquel',
            exp: '/k/ の音を e / i の前で表すには <b>qu</b> と書く。Raquel = Ra-<b>qu</b>-el。Raqel（"qe" の組み合わせはスペイン語に存在しない）/ Racuel（c は /θ/ または /s/ の音になる）は不可。'
          }
        ]
      },
      {
        heading: '問4. 挨拶表現をスペイン語で書け（8点）',
        instruction: '以下の挨拶表現をスペイン語で書きなさい。',
        items: [
          {
            ja: '(1)　こんばんは。',
            a: 'Buenas noches.',
            exp: '<b>Buenas noches.</b> ― noche（夜）の複数形。午後〜夜の別れにも使う。cf. Buenas tardes.（こんにちは・午後）／ Buenos días.（おはよう）。'
          },
          {
            ja: '(2)　どういたしまして。',
            a: 'De nada.',
            exp: '<b>De nada.</b>「何もないから（気にしなくていい）→ どういたしまして」。No hay de qué.（どういたしまして）も同義。Con mucho gusto. も一部の地域で使われる。'
          },
          {
            ja: '(3)　私の名前は Mario です。',
            a: 'Me llamo Mario.',
            exp: '<b>Me llamo</b> ― 再帰動詞 llamarse の1人称単数形。「私は〜という名前だ」。× Yo llamo Mario. は誤り（再帰代名詞 me が必須）。Soy Mario. でも可（ser を使った言い方）。'
          },
          {
            ja: '(4)　また明日。',
            a: 'Hasta mañana.',
            exp: '<b>Hasta mañana.</b> ― hasta「〜まで」＋ mañana「明日」。cf. Hasta luego.（またね）/ Hasta pronto.（またすぐ）/ Hasta la vista.（ではまた）。'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 2 ── */
  'Spanish2_lesson2.html': {
    title: '2025年度 二課 小テスト（過去問）',
    intro: '実際の小テストの問題と模範解答です。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳（各4点）',
        instruction: '以下の文をスペイン語に訳しなさい。ただし、「君」/「君たち」は tú/vosotros を、「あなた」/「あなたたち」は usted/ustedes を指すものとする。',
        items: [
          {
            ja: '(1)　マドリードには背の高い建物がたくさんある。',
            a: 'En Madrid hay muchos edificios altos.',
            exp: '不特定の事物の存在は <b>hay</b>（× están / existe）。muchos は edificios（男性複数）に性数一致。altos も同様。<br>📖 edificio「建物・ビル」／ alto「高い」／ mucho「たくさんの」'
          },
          {
            ja: '(2)　プラド美術館はとても有名な美術館です。',
            a: 'El Museo del Prado es un museo muy famoso.',
            exp: '属性・定義は <b>ser</b>（→ es）。del = de + el の縮約（義務的）。un museo（不定冠詞：種類を表す）。famoso は museo（男性単数）に一致。<br>📖 museo「美術館・博物館」／ famoso「有名な」'
          },
          {
            ja: '(3)　アリカンテは小さな都市です。',
            a: 'Alicante es una ciudad pequeña.',
            exp: '属性は <b>ser</b>（→ es）。ciudad は女性名詞 → una / pequeña（女性形）に一致。<br>📖 ciudad「都市・町」／ pequeño「小さい」（女性形 pequeña）'
          },
          {
            ja: '(4)　東京は日本の首都ですよね？',
            a: '¿Tokio es la capital de Japón?, ¿verdad?',
            exp: '属性は <b>ser</b>（→ es）。スペイン語の疑問文は ¿ ? で囲む。「〜ですよね？」は文末に <b>¿verdad?</b> または <b>¿no?</b> を付ける。<br>📖 capital「首都」／ verdad「本当・真実」'
          },
          {
            ja: '(5)　私たちの大学は駅から近いです。',
            a: 'Nuestra universidad está cerca de la estación.',
            exp: '位置・状態は <b>estar</b>（→ está）。「〜から近い」= <b>estar cerca de</b>。nuestra は universidad（女性単数）に一致。<br>📖 universidad「大学」／ cerca de「〜の近くに」／ estación「駅・停留所」'
          },
          {
            ja: '(6)　彼らの家は地中海のそばにあります。',
            a: 'Su casa está al lado del Mar Mediterráneo.',
            exp: '所在は <b>estar</b>（→ está）。「〜のそばに」= <b>al lado de</b>（al = a + el の縮約）。「彼ら/あなた方の」= <b>su</b>（3人称複数所有形容詞は su）。<br>📖 al lado de「〜のそばに・隣に」／ Mar Mediterráneo「地中海」'
          },
          {
            ja: '(7)　君の両親はどこですか？',
            a: '¿Dónde están tus padres?',
            exp: '人の所在は <b>estar</b>（→ están。padres は複数）。「君の」= <b>tus</b>（tú の所有形容詞複数形）。疑問副詞 <b>dónde</b> にアクセント記号（间接疑問でない疑問文）。<br>📖 dónde「どこ」／ padres「両親」（padre「父」の複数）'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 3 ── */
  'Spanish2_lesson3.html': {
    title: '2025年度 三課 小テスト（過去問）',
    intro: '実際の小テストの問題と模範解答です。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳（各4点）',
        instruction: '以下の文をスペイン語に訳しなさい。',
        items: [
          {
            ja: '(1)　私はメキシコのトルティーャが好きです。',
            a: 'Me gustan las tortillas mexicanas.',
            exp: 'gustar 構文：主語は「好かれる物」（las tortillas）、間接目的語代名詞は me（私に）。tortillas が複数 → <b>gustan</b>（3人称複数）。mexicanas は tortillas（女性複数）に一致。<br>📖 tortilla「トルティーャ」／ mexicano「メキシコの」（女性複数 mexicanas）'
          },
          {
            ja: '(2)　モレは少し辛いソースです。',
            a: 'El Mole es una salsa un poco picante.',
            exp: '属性・定義は <b>ser</b>（→ es）。「少し辛い」= <b>un poco picante</b>。picante は -e 語尾で男女同形。un poco は副詞句として形容詞を修飾。<br>📖 mole「モレ（メキシコのチリ系複合ソース）」／ salsa「ソース・タレ」／ picante「辛い（辛味がある）」'
          },
          {
            ja: '(3)　私たちはテレサを空港で待たなければなりません。',
            a: 'Debemos esperar a Teresa en el aeropuerto.',
            exp: '義務は <b>deber + 原形</b>（1人称複数 debemos）。人を直接目的語にとるときは<b>前置詞的 a</b>（a Teresa）が必要。<br>📖 deber + 原形「〜しなければならない」／ esperar「待つ」／ aeropuerto「空港」'
          },
          {
            ja: '(4)　私のチリ人の友達はタコスが好きではありません。',
            a: 'A mi amigo chileno no le gustan los tacos.',
            exp: 'gustar 構文の否定。主語 los tacos（複数）→ <b>gustan</b>。間接目的語代名詞 <b>le</b>（彼に）、強調の <b>a mi amigo chileno</b> が前置される。<br>📖 chileno「チリ人（の）」／ taco「タコス」'
          },
          {
            ja: '(5)　日本人の食の基礎は何ですか？',
            a: '¿Qué es la base de la alimentación de los japoneses?',
            exp: '定義・説明を尋ねるときは <b>¿Qué es…?</b>（¿Cuál es…? は具体的な選択を問う場合）。la base（女性単数）。la alimentación「食・食生活」（alimentar「食べさせる」派生）。<br>📖 base「基礎・土台」／ alimentación「食・栄養摂取」／ japonés「日本人」（複数 japoneses）'
          },
          {
            ja: '(6)　メキシコ人はジュース屋さんでジュースを飲みます。',
            a: 'Los mexicanos beben los jugos en juguerías.',
            exp: '動詞 <b>beber</b>（飲む）の3人称複数 <b>beben</b>。los jugos（複数：様々な種類のジュース）。juguerías「ジュース屋（複数）」= juguería の複数形。<br>📖 mexicano「メキシコ人」／ beber「飲む」（-er 動詞規則活用）／ jugo「ジュース（中南米）」／ juguería「ジュース屋」'
          },
          {
            ja: '(7)　テキーラとメスカルはマゲイ（竜舌蘭）でできています。',
            a: 'El tequila y el mezcal son de maguey.',
            exp: '素材・由来は <b>ser de + 材料</b>（ser の3人称複数 son）。主語が複数（el tequila y el mezcal）→ <b>son</b>。「〜でできている」の "de" は材料・素材を示す。<br>📖 tequila「テキーラ」／ mezcal「メスカル」／ maguey「マゲイ（竜舌蘭）」'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 4 ── */
  'Spanish2_lesson4.html': {
    title: '2025年度 四課 小テスト（過去問・小テスト4）',
    intro: '実際の小テスト（30/VI/2025 実施）の問題と模範解答です。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳（各4点）',
        instruction: '以下の文をスペイン語に訳しなさい。ただし、「君」/「君たち」は tú/vosotros を、「あなた」/「あなたたち」は usted/ustedes を指すものとする。また、数字はすべてスペイン語で書くこと。',
        items: [
          {
            ja: '(1)　私が買いたい本はこれです。',
            a: 'El libro que quiero comprar es este.',
            exp: '関係代名詞 <b>que</b> を使った名詞修飾。「私が買いたい本」= el libro <b>que</b> quiero comprar（先行詞 el libro + que 節）。「これです」= es este（指示代名詞 este）。<br>📖 querer「欲しい・〜したい」（quiero = 1人称単数不規則）／ comprar「買う」'
          },
          {
            ja: '(2)　良い指導者になるためには、君は寛容さと忍耐力を持たなければならない。',
            a: 'Para ser un buen líder, tienes que tener la generosidad y la paciencia.',
            exp: '「〜するためには」= <b>para + 原形</b>。義務は <b>tener que + 原形</b>（tienes que tener）。buen は男性単数名詞（líder）の前で語尾短縮（bueno → buen）。<br>📖 líder「指導者・リーダー」／ generosidad「寛容さ・気前のよさ」／ paciencia「忍耐・我慢」'
          },
          {
            ja: '(3)　マチュピチュは山の高いところにある。',
            a: 'Machu Picchu está en lo alto de una montaña.',
            exp: '所在は <b>estar</b>（→ está）。「〜の高いところに」= <b>en lo alto de</b>（lo + 形容詞の中性用法：「〜な部分・〜なところ」）。una montaña（不定冠詞：「ある山」の高いところ）。<br>📖 lo alto de「〜の高いところ（中性）」／ montaña「山」'
          },
          {
            ja: '(4)　ラテンアメリカで最も訪れられている世界遺産の場所はどこですか？',
            a: '¿Cuáles son los lugares Patrimonio de la Humanidad más visitados en América Latina?',
            exp: '複数の場所を問うので <b>¿Cuáles?</b>（複数形）。「最も訪れられている」= <b>más visitados</b>（visitados は lugares 男性複数に一致）。Patrimonio de la Humanidad「世界（人類）遺産」。<br>📖 lugar「場所」／ más visitado「最も訪れられた（最上級）」／ América Latina「ラテンアメリカ」'
          },
          {
            ja: '(5)　あなた方のうちのどなたか、フリオの番号をご存知ですか？',
            a: '¿Alguno de ustedes sabe el número de Julio?',
            exp: '<b>alguno de + 複数名詞</b>「〜のうちのどなたか（いずれか）」。主語は alguno（単数扱い）→ <b>sabe</b>（saber の3人称単数）。el número de Julio「フリオの番号」。<br>📖 alguno「いくらかの・どれか」／ saber「（事実・知識を）知っている」（1単 sé、3単 sabe）／ número「番号」'
          },
          {
            ja: '(6)　私はマラカイボ湖に行ったことはないが、それがベネズエラにあることは知っている。',
            a: 'No conozco el Lago de Maracaibo, pero sé que está en Venezuela.',
            exp: '<b>conocer</b>「（経験・親交により）知っている・訪れたことがある」の否定形 no conozco（1単 yo-go 形）。<b>saber</b>「（事実・命題を）知っている」→ sé（1単不規則）。sé <b>que</b> + 節「〜であることを知っている」。<br>📖 conocer（conozco）vs saber（sé）の用法の違いに注意。'
          },
          {
            ja: '(7)　私たちはいつも木曜日に 105 分間スペイン語を勉強します。　〔分：minuto〕',
            a: 'Los jueves estudiamos español ciento cinco minutos.',
            exp: '「毎週木曜日に」= <b>los jueves</b>（定冠詞複数で習慣を表す）。前置詞 en は不要。105 = <b>ciento cinco</b>（100台は cien → ciento + 数字）。siempre は省略可。<br>📖 los jueves「毎週木曜日」（曜日+定冠詞複数で習慣）／ ciento cinco「105」／ minuto「分」'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 5 ── */
  'Spanish2_lesson5.html': {
    title: '2025年度 五課 小テスト（過去問・小テスト4 解答例）',
    intro: '実際の小テスト（30/VI/2025 実施）の問題と公式解答です。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳（各4点）',
        instruction: '以下の文をスペイン語に訳しなさい。ただし、「君」/「君たち」は tú/vosotros を、「あなた」/「あなたたち」は usted/ustedes を指すものとする。また、数字はすべてスペイン語で書くこと。',
        items: [
          {
            ja: '(1)　私が買いたい本はこれです。',
            a: 'El libro que quiero comprar es este.',
            exp: '関係代名詞 <b>que</b> を使った名詞修飾。「私が買いたい本」= el libro <b>que</b> quiero comprar（先行詞 el libro + que 節）。「これです」= es este（指示代名詞 este）。<br>📖 querer「欲しい・〜したい」（quiero = 1人称単数不規則）／ comprar「買う」'
          },
          {
            ja: '(2)　良い指導者になるためには、君は寛容さと忍耐力を持たなければならない。',
            a: 'Para ser un buen líder, tienes que tener (la) generosidad y (la) paciencia.',
            exp: '「〜するためには」= <b>para + 原形</b>。義務は <b>tener que + 原形</b>（tienes que tener）。buen は男性単数名詞（líder）の前で語尾短縮（bueno → buen）。la は省略可（抽象名詞への冠詞）。<br>📖 líder「指導者・リーダー」／ generosidad「寛容さ」／ paciencia「忍耐」'
          },
          {
            ja: '(3)　マチュピチュは山の高いところにある。',
            a: 'Machu Picchu está en lo alto de una montaña.',
            exp: '所在は <b>estar</b>（→ está）。「〜の高いところに」= <b>en lo alto de</b>（lo + 形容詞の中性用法）。una montaña（不定冠詞：「ある山の」高いところ）。<br>📖 lo alto de「〜の高いところ（中性）」／ montaña「山」'
          },
          {
            ja: '(4)　ラテンアメリカで最も訪れられている世界遺産の場所はどこですか？',
            a: '¿Cuáles son los lugares Patrimonio de la Humanidad más visitados en América Latina?',
            exp: '複数の場所を問うので <b>¿Cuáles?</b>（複数形）。「最も訪れられている」= <b>más visitados</b>（visitados は lugares 男性複数に一致）。Patrimonio de la Humanidad「世界（人類）遺産」。<br>📖 lugar「場所」／ más visitado「最も訪れられた（最上級）」／ América Latina「ラテンアメリカ」'
          },
          {
            ja: '(5)　あなた方のうちのどなたか、フリオの番号をご存知ですか？',
            a: '¿Alguno de ustedes sabe el número de Julio?',
            exp: '<b>alguno de + 複数名詞</b>「〜のうちのどなたか（いずれか）」。主語は alguno（単数扱い）→ <b>sabe</b>（saber の3人称単数）。el número de Julio「フリオの番号」。<br>📖 alguno「いくらかの・どれか」／ saber「（事実・知識を）知っている」（1単 sé、3単 sabe）／ número「番号」'
          },
          {
            ja: '(6)　私はマラカイボ湖に行ったことはないが、それがベネズエラにあることは知っている。',
            a: 'No conozco el Lago de Maracaibo, pero sé que está en Venezuela.',
            exp: '<b>conocer</b>「（経験・親交により）知っている・訪れたことがある」の否定形 no conozco（1単 yo-go 形）。<b>saber</b>「（事実・命題を）知っている」→ sé（1単不規則）。sé <b>que</b> + 節「〜であることを知っている」。<br>📖 conocer（conozco）vs saber（sé）の用法の違いに注意。'
          },
          {
            ja: '(7)　私たちはいつも木曜日に 105 分間スペイン語を勉強します。　〔分：minuto〕',
            a: 'Los jueves estudiamos español ciento cinco minutos.',
            exp: '「毎週木曜日に」= <b>los jueves</b>（定冠詞複数で習慣を表す）。前置詞 en は不要。105 = <b>ciento cinco</b>（100台は cien → ciento + 数字）。<br>📖 los jueves「毎週木曜日」（曜日+定冠詞複数で習慣）／ ciento cinco「105」／ minuto「分」'
          }
        ]
      }
    ]
  }

};
