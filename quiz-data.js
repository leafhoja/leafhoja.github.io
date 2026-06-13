'use strict';
/* ═══════════════════════════════════════════════
   小テストデータ — ページ名ごとに小テストを定義
   ───────────────────────────────────────────────
   ・ここにデータを追加したページだけ「小テスト」タブが表示されます。
   ・データのないページにはタブ枠そのものが出ません。
   ・表示対象（誰に見せるか）は index.html の QUIZ_BULK_* / QUIZ_ACCESS で制御します。
   ・"adminOnly": true を付けたページは、管理者（全ページ閲覧許可）にだけタブが出ます
     （＝予想問題など、まだ一般公開しないもの）。

   【書き方 — 穴埋め形式（一列・文法）】
   各問題文中の空所は次のタグで表します（タップで答えが赤字表示）:
       (<span class="qz-b" data-a="答え"></span>)
   斜字体ヒント付きの空所は <i>原形</i> を添えます:
       [<i>pequeño</i>: <span class="qz-b" data-a="pequeña"></span>]
   item: { t:'問題文HTML', ja:'和訳', exp:'解説HTML（間違いやすい点も）' }

   【書き方 — 作文形式（二列・和文西訳）】
   item: { ja:'日本語の問題', a:'解答例（スペイン語）', exp:'解説HTML' }
   ═══════════════════════════════════════════════ */

var QUIZ_DATA = {

  /* ── 一列 Lección 2 小テスト 2（ser/estar・所有詞・形容詞の一致）──── */
  'Spanish1_lesson2.html': {
    title: 'Lección 2 小テスト 2',
    intro: '斜字体の形容詞が書かれているものについては、括弧（&nbsp;）または [&nbsp;] に正しい形容詞を書き入れなさい。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        items: [
          {
            t: 'Cerca del parque (<span class="qz-b" data-a="está"></span>) [<span class="qz-b" data-a="nuestra"></span>] casa. (<span class="qz-b" data-a="Es"></span>) [<i>pequeño</i>: <span class="qz-b" data-a="pequeña"></span>] pero [<i>bonito</i>: <span class="qz-b" data-a="bonita"></span>].',
            ja: '公園の近くに私たちの家がある。小さいながらも素敵な家だ。',
            exp: '所在（〜がある）は <b>estar</b> → está。casa は女性単数なので所有形容詞は <b>nuestra</b>。性質・特徴を表す「〜である」は <b>ser</b> → Es。形容詞 pequeño/bonito も casa に一致して女性単数 <b>pequeña / bonita</b>。<br>⚠️ 所在を hay や ser にしない／nuestro と性を間違えないこと。<br>📖 <b>語句</b>：cerca de「〜の近くに」／parque「公園」／casa「家」／pero「しかし・けれども」／pequeño「小さい」／bonito「きれいな・素敵な」'
          },
          {
            t: 'En el estacionamiento (<span class="qz-b" data-a="hay"></span>) dos coches. El [<span class="qz-b" data-a="vuestro"></span>] (<span class="qz-b" data-a="está"></span>) detrás del letrero.',
            ja: '駐車場には２台の車がある。君たちの（車）は看板の後ろにあるよ。',
            exp: '不特定のものの存在「（いくつか）ある」は <b>hay</b>（不定）。「君たちの車」= el coche vuestro → 名詞を省いた所有代名詞 <b>el vuestro</b>。特定のものの所在は <b>estar</b> → está。<br>⚠️ dos coches のような不特定の数量には está ではなく hay。<br>📖 <b>語句</b>：estacionamiento「駐車場」／coche「車」／dos「2（の）」／detrás de「〜の後ろに」／letrero「看板・標識」'
          },
          {
            t: '[<span class="qz-b" data-a="Nuestra"></span>] hija (<span class="qz-b" data-a="es"></span>) un poco [<i>perezoso</i>: <span class="qz-b" data-a="perezosa"></span>], pero (<span class="qz-b" data-a="es"></span>) la representante de la clase de este año.',
            ja: '私たちの娘は少し怠け者だが、今年のクラス委員だ。',
            exp: 'hija（女性単数）に一致して <b>Nuestra</b>。性格（怠け者）も身分（委員）も恒常的属性なので <b>ser</b> → es。perezoso も hija に一致して <b>perezosa</b>。<br>⚠️ 「委員である」を estar にしない（身分・職業は ser）。<br>📖 <b>語句</b>：hija「娘」／un poco「少し」／perezoso「怠け者の・なまけた」／representante「代表・委員」／clase「クラス・授業」／este año「今年」（año「年」）'
          },
          {
            t: 'Alberto y Sonia (<span class="qz-b" data-a="son"></span>) los líderes de este proyecto. (<span class="qz-b" data-a="Son"></span>) amigos [<span class="qz-b" data-a="míos"></span>].',
            ja: 'アルベルトとソニアはこのプロジェクトのリーダーだ。（彼らは）私の友人である。',
            exp: '主語が複数（Alberto y Sonia）なので ser は <b>son</b>。「私の友人たち」は名詞の後ろに置く所有形容詞 → 男性複数 <b>míos</b>（amigos に一致）。<br>⚠️ 前置形 mis amigos ではなく、ここは amigos míos（後置形）。<br>📖 <b>語句</b>：líder「リーダー・指導者」（複数 líderes）／proyecto「プロジェクト・計画」／este「この」／amigo「友人」'
          },
          {
            t: '¿Cómo (<span class="qz-b" data-a="son"></span>) [<span class="qz-b" data-a="tus"></span>] padres? — (<span class="qz-b" data-a="Son"></span>) muy [<i>trabajador</i>: <span class="qz-b" data-a="trabajadores"></span>], pero estos días (<span class="qz-b" data-a="están"></span>) un poco [<i>cansado</i>: <span class="qz-b" data-a="cansados"></span>].',
            ja: '君のご両親はどんな人たち？ — とても働き者だけど、ここ数日は疲れているんだ。',
            exp: '恒常的な性格を尋ねる・答えるので <b>ser</b> → son。padres（男性複数）に一致して <b>tus</b> / <b>trabajadores</b>。「ここ数日は疲れている」は一時的な状態なので <b>estar</b> → están、cansado も複数一致で <b>cansados</b>。<br>⚠️ 性格＝ser、一時的状態＝estar の対比が狙い。trabajador は -es を付けて複数化。<br>📖 <b>語句</b>：cómo「どんな・どのように」／padres「両親」（padre「父」の複数）／muy「とても」／trabajador「働き者の・勤勉な」／estos días「ここ数日」（día「日」）／cansado「疲れた」'
          },
          {
            t: 'Unas amigas [<span class="qz-b" data-a="mías"></span>] (<span class="qz-b" data-a="están"></span>) en la Universidad de California en Los Ángeles. Allí (<span class="qz-b" data-a="está"></span>) [<span class="qz-b" data-a="su"></span>] laboratorio.',
            ja: '私の何人かの友人たちは UCLA にいる。そこに彼女たちの研究室があるのだ。',
            exp: '「私の友人たち（の何人か）」= unas amigas mías → 後置形・女性複数 <b>mías</b>。人の所在は <b>estar</b> → están / está。「彼女たちの研究室」= <b>su</b> laboratorio（su は被所有物 laboratorio が単数なので su）。<br>⚠️ su は「所有者の数」ではなく「被所有物の数」に一致（laboratorio 単数 → su）。<br>📖 <b>語句</b>：unas「いくつかの・数人の」（女性複数の不定冠詞）／amiga「（女性の）友人」／universidad「大学」／allí「そこに・あそこに」／laboratorio「研究室・実験室」'
          },
          {
            t: '[<span class="qz-b" data-a="Mi"></span>] maleta (<span class="qz-b" data-a="está"></span>) aquí. ¿Dónde (<span class="qz-b" data-a="está"></span>) la [<span class="qz-b" data-a="suya"></span>]?',
            ja: '私のスーツケースはここにあります。あなたのはどこですか？',
            exp: 'maleta（女性単数）に <b>Mi</b>。所在は <b>estar</b> → está。「あなたのもの」は所有代名詞 <b>la suya</b>（maleta を受けて女性単数）。<br>⚠️ la tuya（君の）と la suya（あなたの）を取り違えないこと。<br>📖 <b>語句</b>：maleta「スーツケース・旅行かばん」／aquí「ここに」／dónde「どこに」'
          },
          {
            t: 'En la casa de [<span class="qz-b" data-a="sus"></span>] abuelos (<span class="qz-b" data-a="hay"></span>) [<i>innumerable</i>: <span class="qz-b" data-a="innumerables"></span>] libros.',
            ja: '彼の祖父母の家には数えきれないほどの本がある。',
            exp: '「彼の祖父母」= <b>sus</b> abuelos（被所有物 abuelos が複数なので sus）。不特定多数の存在は <b>hay</b>。innumerable は libros（複数）に一致して <b>innumerables</b>。<br>⚠️ 数えきれない＝不特定多数なので está ではなく hay。<br>📖 <b>語句</b>：casa de 〜「〜の家」／abuelos「祖父母」（abuelo「祖父」の複数）／innumerable「数えきれない・無数の」／libro「本」'
          },
          {
            t: 'El país [<span class="qz-b" data-a="nuestro"></span>] (<span class="qz-b" data-a="está"></span>) al este del Continente Asiático.',
            ja: '我々の国はアジア大陸の東にある。',
            exp: '「我々の国」= el país nuestro → 後置形・男性単数 <b>nuestro</b>。位置・所在は <b>estar</b> → está。<br>⚠️ 国の位置も estar（恒久的でも「位置」は estar を使う）。<br>📖 <b>語句</b>：país「国」／al este de「〜の東に」（este「東」）／continente「大陸」／asiático「アジアの」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Está"></span>) [<i>resfriado</i>: <span class="qz-b" data-a="resfriada"></span>] la madre [<span class="qz-b" data-a="suya"></span>]?',
            ja: 'あなた方のお母様は風邪を引いているのですか？',
            exp: '一時的な体調（風邪をひいている）は <b>estar</b> → Está。resfriado は madre（女性単数）に一致して <b>resfriada</b>。「あなた方のお母様」= la madre suya（後置形 <b>suya</b>）。<br>⚠️ 体調は ser ではなく estar。<br>📖 <b>語句</b>：resfriado「風邪をひいた」（estar resfriado で「風邪をひいている」）／madre「母」'
          }
        ]
      }
    ]
  },

  /* ── 一列 Lección 3 小テスト（目的格代名詞・指示詞 / gustar型）──── */
  'Spanish1_lesson3.html': {
    title: 'Lección 3 小テスト',
    intro: '【共通の注意】文字は丁寧に、かつアクセント記号は明確に書くこと！不明瞭な場合は不正解とします。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '1. 目的格代名詞・指示詞',
        instruction: '和訳に合うよう、（&nbsp;）には適切な目的格代名詞、または動詞と目的格代名詞を結びつけたものを書き入れなさい。また [&nbsp;] には適切な指示詞を入れなさい。（各カッコには1語のみ。アクセント記号も正誤判定対象）',
        items: [
          {
            t: '¿(<span class="qz-b" data-a="Me"></span>) prestas [<span class="qz-b" data-a="ese"></span>] bolígrafo? — Sí, (<span class="qz-b" data-a="te"></span>)(<span class="qz-b" data-a="lo"></span>) presto.',
            ja: '僕にそのボールペンを貸してくれる？ — ええ、貸してあげるわ。',
            exp: '「僕に」= 間接目的格 <b>me</b>。「その」= 中称の指示形容詞 <b>ese</b>（男性単数 bolígrafo）。答えは「君に＝te」＋「それを＝lo（el bolígrafo）」で、語順は<b>間接 te ＋ 直接 lo</b>。<br>⚠️ 語順は必ず「間接→直接」。lo te のように逆にしない。<br>📖 <b>語句</b>：prestar「貸す」／bolígrafo「ボールペン」'
          },
          {
            t: '¿Quién (<span class="qz-b" data-a="les"></span>) enseña la gramática? — (<span class="qz-b" data-a="Nos"></span>)(<span class="qz-b" data-a="la"></span>) enseña [<span class="qz-b" data-a="aquella"></span>] profesora.',
            ja: '誰があなた方に文法を教えてくれるのですか？ — あの先生が教えてくれます。',
            exp: '「あなた方に」= 間接 <b>les</b>。答えは「私たちに＝nos」＋「それを＝la（la gramática）」。「あの（遠くの）先生」= 遠称 <b>aquella</b>（女性単数）。<br>⚠️ ese（中称）と aquel（遠称）の区別。ここは「あの」＝aquella。<br>📖 <b>語句</b>：quién「誰」／enseñar「教える」／gramática「文法」／profesora「（女性の）先生」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Le"></span>) mandáis a Juana un mensaje mañana? — Sí, mañana (<span class="qz-b" data-a="se"></span>)(<span class="qz-b" data-a="lo"></span>) mandamos sin falta.',
            ja: '君たちは明日フアナにメールを送るのかい？ — うん、必ず送るよ。',
            exp: '「フアナに」= 間接 <b>le</b>（a Juana の重複）。答えで間接 le と直接 lo（un mensaje）が連続すると、<b>le → se</b> に変化して <b>se lo</b>。<br>⚠️ 「le lo」は不可。第三者の間接＋直接が並ぶと必ず le/les→se。<br>📖 <b>語句</b>：mandar「送る」／mensaje「メッセージ・メール」／mañana「明日」／sin falta「必ず・間違いなく」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Le"></span>) escribís [<span class="qz-b" data-a="estas"></span>] cartas al profesor? — No, no (<span class="qz-b" data-a="se"></span>)(<span class="qz-b" data-a="las"></span>) escribimos porque estamos ocupados.',
            ja: '君たちは先生にこれらの手紙を書くのかい？ — いいや、忙しいから書かないよ。',
            exp: '「先生に」= 間接 <b>le</b>。「これらの」= 近称 <b>estas</b>（女性複数 cartas）。答えは間接（le→<b>se</b>）＋直接 <b>las</b>（cartas）で <b>se las</b>。否定文では no を se las の前に置く。<br>⚠️ ここも le→se の変化。直接目的は cartas に合わせ las（女性複数）。<br>📖 <b>語句</b>：escribir「書く」／carta「手紙」／profesor「（男性の）先生」／porque「なぜなら・〜だから」／ocupado「忙しい」'
          },
          {
            t: '¿Qué compras a tus hijas en Navidad? — Debo (<span class="qz-b" data-a="comprarles"></span>) [<span class="qz-b" data-a="aquellos"></span>] libros.',
            ja: '君はクリスマスに、娘さんたちに何を買ってあげるの？ — 私は彼女たちにあれらの本を買ってあげなくてはならないんだ。',
            exp: '不定詞（comprar）には目的格代名詞を<b>後ろに付ける</b>：comprar＋les（彼女たちに）→ <b>comprarles</b>。「あれらの」= 遠称 <b>aquellos</b>（男性複数 libros）。<br>⚠️ deber＋不定詞のとき、代名詞は不定詞の後ろに連結（les debo comprar も可だが、ここは comprarles）。<br>📖 <b>語句</b>：qué「何」／comprar「買う」／hija「娘」／Navidad「クリスマス」／deber＋不定詞「〜しなければならない」'
          }
        ]
      },
      {
        heading: '2. gustar 型動詞',
        instruction: '和訳に合うよう、gustar, importar, interesar, apetecer, parecer, encantar から適切な動詞を選んで活用させ、（&nbsp;）を埋めなさい。また [&nbsp;] には適切な代名詞を入れなさい。（アクセント記号も正誤判定対象）',
        items: [
          {
            t: '¿[<span class="qz-b" data-a="Le"></span>] (<span class="qz-b" data-a="importa"></span>) a [<span class="qz-b" data-a="usted"></span>] venir a mi oficina mañana?',
            ja: '（あなたは）明日、私のオフィスに来ていただいて構いませんか？',
            exp: 'gustar 型は「物・事が主語、人は間接目的格」。主語は venir（不定詞＝3人称単数扱い）なので <b>importa</b>。「あなたに」= 間接 <b>le</b>、強調の a＋<b>usted</b>。<br>⚠️ 主語は「人」ではなく「来ること（venir）」。だから動詞は3単。<br>📖 <b>語句</b>：importar「気にかかる・差し支える」（¿Le importa＋不定詞? で「〜していただいて構いませんか／〜は迷惑ですか」）／venir「来る」／oficina「オフィス・事務所」'
          },
          {
            t: 'A [<span class="qz-b" data-a="mí"></span>] y a mi marido [<span class="qz-b" data-a="nos"></span>] (<span class="qz-b" data-a="encantan"></span>) los deportes de invierno.',
            ja: '私と夫はウィンタースポーツが大好きだ。',
            exp: '主語は los deportes（複数）→ <b>encantan</b>（3複）。「私と夫に」＝私たちなので間接 <b>nos</b>、強調は a <b>mí</b>（前置詞の後は mí）。<br>⚠️ 主語が複数なら動詞も複数。encanta としない。a mi（所有）ではなく a mí（アクセント付き＝私）。<br>📖 <b>語句</b>：encantar「大好きである・うっとりさせる」／marido「夫」／deporte「スポーツ」／invierno「冬」／deportes de invierno「ウィンタースポーツ」'
          },
          {
            t: 'Mi futuro [<span class="qz-b" data-a="les"></span>] (<span class="qz-b" data-a="parece"></span>) lleno de esperanzas a mis padres.',
            ja: '両親は、私の将来が前途洋々だと思っている。',
            exp: '主語は Mi futuro（単数）→ <b>parece</b>。「両親に（a mis padres）」= 間接 <b>les</b>。parecer＋形容詞で「〜のように思われる」。<br>⚠️ 「両親が思う」だが、構文上の主語は「私の将来」。動詞は3単 parece。<br>📖 <b>語句</b>：futuro「将来・未来」／parecer「〜のように思われる」／lleno de「〜で満ちた・いっぱいの」／esperanza「希望」（複数 esperanzas）'
          },
          {
            t: 'A [<span class="qz-b" data-a="nosotros"></span>] [<span class="qz-b" data-a="nos"></span>] (<span class="qz-b" data-a="interesan"></span>) mucho las novelas del Siglo de Oro.',
            ja: '私たちはスペイン黄金世紀の小説に非常に関心があります。',
            exp: '主語は las novelas（複数）→ <b>interesan</b>。「私たちに」= 間接 <b>nos</b>、強調 a <b>nosotros</b>（話し手が女性のみなら a nosotras も可）。<br>⚠️ 主語の数（複数）に動詞を一致。interesa としない。<br>📖 <b>語句</b>：interesar「興味を起こさせる」／mucho「とても・大いに」／novela「小説」／Siglo de Oro「（スペイン文学の）黄金世紀」（siglo「世紀」／oro「金」）'
          },
          {
            t: '¿A [<span class="qz-b" data-a="ti"></span>] [<span class="qz-b" data-a="te"></span>] (<span class="qz-b" data-a="gusta"></span>) nadar y pescar en río?',
            ja: '君は川で泳いだり釣りをしたりするのが好きかい？',
            exp: '主語は不定詞 nadar y pescar（動作＝3単扱い）→ <b>gusta</b>。「君に」= 間接 <b>te</b>、強調 a <b>ti</b>。<br>⚠️ 不定詞が複数並んでも動詞は単数 gusta（gustan にしない）。<br>📖 <b>語句</b>：gustar「好む・気に入る」／nadar「泳ぐ」／pescar「釣りをする」／río「川」'
          },
          {
            t: 'A [<span class="qz-b" data-a="mí"></span>] [<span class="qz-b" data-a="me"></span>] (<span class="qz-b" data-a="apetecen"></span>) un poco las comidas cubanas.',
            ja: '私はちょっとキューバ料理を食べてみたいな。',
            exp: '主語は las comidas（複数）→ <b>apetecen</b>。「私に」= 間接 <b>me</b>、強調 a <b>mí</b>。apetecer は「〜したい気がする・食べたい気分だ」。<br>⚠️ 主語複数 → apetecen。a mí のアクセントに注意。<br>📖 <b>語句</b>：apetecer「（〜が）欲しくなる・食べたい気分だ」／un poco「少し」／comida「食べ物・料理」／cubano「キューバの・キューバ料理」'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 2 小テスト（作文・和文西訳）──────────────── */
  'Spanish2_lesson2.html': {
    title: 'Lección 2 小テスト（作文）',
    intro: '「あなたたち」は usted / ustedes を指すものとする。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳',
        items: [
          {
            ja: '私は勉強するためにマドリードにいます。',
            a: 'Estoy en Madrid para estudiar.',
            exp: '所在は <b>estar</b> → estoy。「〜するために」は <b>para＋不定詞</b>。<br>⚠️ ser en としない。目的は por ではなく para。<br>📖 <b>語句</b>：estar en「〜にいる・ある」／para＋不定詞「〜するために」／estudiar「勉強する」'
          },
          {
            ja: 'ソウルは国の首都です。',
            a: 'Seúl es la capital del país.',
            exp: '「AはBである」という属性は <b>ser</b> → es。de＋el = <b>del</b>。<br>⚠️ está la capital にしない（恒常的属性は ser）。<br>📖 <b>語句</b>：capital「首都」／país「国」／del＝de＋el「〜の」'
          },
          {
            ja: 'アリカンテにはとても古い城が一つあります。',
            a: 'En Alicante hay un castillo muy antiguo.',
            exp: '不特定のものの存在「（一つ）ある」は <b>hay</b>＋不定冠詞 un。形容詞 antiguo は castillo（男性単数）に一致。<br>⚠️ 「一つある」は está ではなく hay un …。<br>📖 <b>語句</b>：castillo「城」／muy「とても」／antiguo「古い・由緒ある」'
          },
          {
            ja: 'その町は地中海に面しています。',
            a: 'La ciudad está al lado del mar Mediterráneo.',
            exp: '位置は <b>estar</b> → está。「〜のそばに／面して」は <b>al lado de</b>（a＋el=al, de＋el=del）。<br>⚠️ 特定の町（la ciudad）の位置は estar。<br>📖 <b>語句</b>：ciudad「町・都市」／al lado de「〜のそばに・隣に」（lado「側・となり」）／mar「海」／Mediterráneo「地中海（の）」'
          },
          {
            ja: 'あなたの大学は町の中心部にありますか？',
            a: '¿Su universidad está en el centro de la ciudad?',
            exp: '所在は <b>estar</b> → está。「あなたの」= usted の所有 <b>su</b>。<br>⚠️ 疑問符は前後に ¿ ?。tu（君の）ではなく su（あなたの）。<br>📖 <b>語句</b>：universidad「大学」／centro「中心・中心部」／ciudad「町・都市」'
          },
          {
            ja: '君たちの両親はどこの出身なの？',
            a: '¿De dónde son vuestros padres?',
            exp: '出身は <b>ser de</b> → son（padres は複数）。「君たちの」= <b>vuestros</b>（padres 男性複数）。疑問詞は <b>de dónde</b>。<br>⚠️ están としない（出身・所属は ser）。dónde にアクセント。<br>📖 <b>語句</b>：de dónde「どこから・どこの出身」（dónde「どこ」）／ser de「〜の出身である」／padres「両親」'
          },
          {
            ja: '私の家は駅から近いが、君のは遠い。',
            a: 'Mi casa está cerca de la estación, pero la tuya está lejos.',
            exp: '位置は <b>estar</b> → está。「君のもの」= 所有代名詞 <b>la tuya</b>（casa を受けて女性単数）。cerca de / lejos。<br>⚠️ la tuya（君の）と la suya（あなたの）を混同しない。<br>📖 <b>語句</b>：casa「家」／cerca de「〜の近くに」／estación「駅」／lejos「遠くに」（lejos de「〜から遠い」）'
          },
          {
            ja: '東京には背の高いビルがたくさんあります。',
            a: 'En Tokio hay muchos edificios altos.',
            exp: '不特定多数の存在は <b>hay</b>。mucho / alto は edificios（男性複数）に一致して <b>muchos / altos</b>。<br>⚠️ たくさんある＝hay（están にしない）。形容詞の複数一致を忘れない。<br>📖 <b>語句</b>：mucho「たくさんの・多くの」／edificio「ビル・建物」／alto「高い・背の高い」'
          }
        ]
      }
    ]
  },

  /* ── 二列 Lección 3 小テスト（作文・和文西訳）──────────────── */
  'Spanish2_lesson3.html': {
    title: 'Lección 3 小テスト（作文）',
    intro: '「あなたたち」は usted / ustedes を指すものとする。また、数字もスペイン語で書くこと。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '和文西訳',
        items: [
          {
            ja: '今日、ラウラと君は（予定が）空いてる？',
            a: '¿Laura y tú estáis / están libres hoy?',
            exp: '「ラウラと君」=「君たち」。スペインの vosotros なら <b>estáis</b>、中南米やこの問題の usted/ustedes 指定なら <b>están</b>（どちらも可）。一時的状態「空いている」は <b>estar</b>、libres は複数一致。<br>⚠️ ser libres にしない。<br>📖 <b>語句</b>：libre「自由な・（予定が）空いている」（複数 libres）／hoy「今日」'
          },
          {
            ja: '君は君の日本人の友人たちを空港で待たなければいけない。',
            a: 'Debes esperar a tus amigos japoneses en el aeropuerto.',
            exp: '義務「〜しなければ」は <b>deber＋不定詞</b>。人が直接目的語のときは前置詞 <b>a</b> が必要（a tus amigos）。japonés→男性複数 <b>japoneses</b>。<br>⚠️ 人の直接目的の「a」（前置詞的a）を落とさない。esperar a の a は「待つ対象」。<br>📖 <b>語句</b>：deber＋不定詞「〜しなければならない」／esperar「待つ」／amigo「友人」／japonés「日本人（の）」（複数 japoneses）／aeropuerto「空港」'
          },
          {
            ja: 'メキシコ人はタコスとモレが好きだ。',
            a: 'A los mexicanos les gustan los tacos y el mole.',
            exp: 'gustar 型。主語は los tacos y el mole（複数）→ <b>gustan</b>。「メキシコ人に」= 間接 <b>les</b>＋強調 a los mexicanos。<br>⚠️ 主語は「好かれる物」。複数なので gustan（gusta にしない）。冒頭の a を忘れない。<br>📖 <b>語句</b>：mexicano「メキシコ人（の）」／taco「タコス」／mole「モレ（チョコや唐辛子で作るメキシコのソース料理）」'
          },
          {
            ja: '私たちはいつも木曜日にスペイン語を勉強します。',
            a: 'Los jueves estudiamos español.',
            exp: '「毎週木曜日に」は定冠詞複数 <b>los jueves</b> で習慣を表す（前置詞 en は不要）。estudiar の1複 <b>estudiamos</b>。<br>⚠️ en jueves や el jueves（特定の1日）にしない。曜日は en を付けない。<br>📖 <b>語句</b>：jueves「木曜日」（単複同形）／siempre「いつも」／estudiar「勉強する」／español「スペイン語」'
          },
          {
            ja: 'その後で私は10曲の歌を歌います。',
            a: 'Luego canto diez canciones.',
            exp: '「その後で」= <b>luego</b>。数字もスペイン語で <b>diez</b>。cantar の1単 <b>canto</b>。canción→複数 <b>canciones</b>。<br>⚠️ 指示通り数字は語で書く（10 ではなく diez）。canciones の綴りに注意（語尾 -ión の複数は -iones でアクセント記号が消える）。<br>📖 <b>語句</b>：luego「その後で・あとで」／diez「10」／cantar「歌う」／canción「歌・曲」（複数 canciones）'
          },
          {
            ja: '彼らはあなたたちにワインを1本買います。',
            a: 'Les compran una botella de vino.',
            exp: '「あなたたちに」= 間接 <b>les</b>（ustedes）。「ワイン1本」= <b>una botella de vino</b>。comprar の3複 <b>compran</b>。<br>⚠️ 「あなたたち＝ustedes」なので間接は les（os にしない）。<br>📖 <b>語句</b>：comprar「買う」／botella「瓶・ボトル」／una botella de「1本の〜」／vino「ワイン」'
          }
        ]
      }
    ]
  }

};
