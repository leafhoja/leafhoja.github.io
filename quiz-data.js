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

  /* ── 一列 Lección 4 小テスト（不規則活用・比較・関係詞）──────── */
  'Spanish1_lesson4.html': {
    title: 'Lección 4 小テスト',
    intro: '【共通の注意】文字は丁寧に、かつアクセント記号は明確に書くこと！不明瞭な場合は不正解とします。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '1. 動詞の活用',
        instruction: '囲みから適切な動詞を選び、会話が成立するよう、正しい形に活用させ（&nbsp;）を埋めなさい。各動詞は１度ずつ用いること。（1点×7）<br><span style="font-size:13px;background:#f5f5f0;padding:4px 10px;border-radius:6px;display:inline-block;margin-top:4px;">tener &nbsp;&nbsp; salir &nbsp;&nbsp; ir &nbsp;&nbsp; poner &nbsp;&nbsp; saber &nbsp;&nbsp; conocer &nbsp;&nbsp; ver</span>',
        items: [
          {
            t: '¿(<span class="qz-b" data-a="Ven"></span>) ustedes la televisión por la mañana? — No, leemos el periódico.',
            ja: '午前中テレビをご覧になりますか？ — いいえ、新聞を読んでいます。',
            exp: '<b>ver</b>（見る・見える）は完全不規則。ustedes は3複なので <b>ven</b>。<br>⚠️ ver の活用：veo / ves / ve / vemos / veis / ven（アクセント記号不要）。<br>📖 <b>語句</b>：televisión「テレビ」／por la mañana「午前中に」／leer「読む」／periódico「新聞」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Conocéis"></span>) (vosotros) a Emilia? — Sí, es nuestra profesora de español.',
            ja: 'あなたたちはエミリアを知っていますか？ — はい、スペイン語の先生です。',
            exp: '<b>conocer</b>（知っている・面識がある）は母音+cer型。1単のみ conozco、2複 <b>conocéis</b>（他は規則活用。アクセント記号 é に注意）。<br>⚠️ 人を目的語にとるとき前置詞 a が必要（a Emilia）。<br>📖 <b>語句</b>：profesora「（女性の）先生」／español「スペイン語」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Vamos"></span>) (nosotros) al cine? — Sí, yo quiero ver la nueva película de Tim Burton.',
            ja: '映画を見に行きましょうか？ — はい、ティム・バートンの新作が見たいです。',
            exp: '<b>ir</b>（行く）は完全不規則。1複 <b>vamos</b>。疑問文で「〜しましょうか（提案）」のニュアンスになる。<br>⚠️ ir a + 不定詞で近接未来にも使う（Vamos a ver... など）。<br>📖 <b>語句</b>：cine「映画館」／querer + 不定詞「〜したい」／nueva「新しい」／película「映画」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Tienes"></span>) (tú) hermanos? — Sí, un hermano y una hermana.',
            ja: '兄弟はいますか？ — はい、兄一人と姉一人います。',
            exp: '<b>tener</b>（持つ・いる）は -go + e→ie 型。2単 <b>tienes</b>（e→ie 変化あり）。<br>⚠️ 1単は tengo（-go のみ、×tiengo）。2単 tienes は語根変化する点に注意。<br>📖 <b>語句</b>：hermano「兄・弟」／hermana「姉・妹」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Sabe"></span>) usted dónde está el restaurante? — Sí, está cerca de la estación de Ginza.',
            ja: 'レストランがどこにあるかご存知ですか？ — はい、銀座の駅の近くにあります。',
            exp: '<b>saber</b>（知っている＝知識・情報）は完全不規則。1単 sé、3単 <b>sabe</b>（規則）。saber + dónde で「どこにあるか知っている」。<br>⚠️ conocer（体験・面識）と saber（知識・情報）の使い分けに注意。<br>📖 <b>語句</b>：restaurante「レストラン」／cerca de「〜の近くに」／estación「駅」'
          },
          {
            t: '¿A qué hora (<span class="qz-b" data-a="sale"></span>) este tren? — A las seis en punto.',
            ja: 'この電車は何時に出発しますか？ — 6時ちょうどです。',
            exp: '<b>salir</b>（出る・出発する）は -go 型。1単のみ salgo、3単 <b>sale</b>（規則活用）。<br>⚠️ -go 型は1単のみ不規則。3単は通常の活用 sale（×salgo）。<br>📖 <b>語句</b>：a qué hora「何時に」／tren「電車・列車」／en punto「ちょうど・きっかり」'
          },
          {
            t: '¿Dónde (<span class="qz-b" data-a="pongo"></span>) (yo) tu café? — Aquí, por favor.',
            ja: 'あなたのコーヒーをどこに置きましょうか？ — ここに、お願いします。',
            exp: '<b>poner</b>（置く・つける）は -go 型。1単 <b>pongo</b>、2単以降は規則活用（pones / pone…）。<br>⚠️ -go 型の共通パターン：hago / salgo / pongo / tengo / vengo など、1単だけ -go。<br>📖 <b>語句</b>：dónde「どこに」／café「コーヒー」／aquí「ここに」'
          }
        ]
      },
      {
        heading: '2. 比較表現',
        instruction: '下線部に適切な語句を補い、和訳に合うような比較表現を完成させなさい。（1点×6）',
        items: [
          {
            t: 'María es (<span class="qz-b" data-a="más"></span>) (<span class="qz-b" data-a="alta"></span>) (<span class="qz-b" data-a="que"></span>) su prima.',
            ja: 'マリアは従姉妹よりも背が高い。',
            exp: '優等比較：<b>más</b> + 形容詞 + <b>que</b>。形容詞 alto は主語 María（女性単数）に一致して <b>alta</b>（×alto）。<br>⚠️ 比較の相手は que（de ではない）。形容詞の性数一致を忘れずに。<br>📖 <b>語句</b>：prima「いとこ（女性）」／alto「背の高い」'
          },
          {
            t: 'Este hotel es (<span class="qz-b" data-a="el"></span>) (<span class="qz-b" data-a="mejor"></span>) (<span class="qz-b" data-a="de"></span>) la ciudad.',
            ja: 'このホテルは街で一番良い。',
            exp: 'bueno の不規則最上級 <b>mejor</b>。定冠詞は hotel（男性単数）に合わせて <b>el</b>。範囲は <b>de</b>（de la ciudad）。<br>⚠️ 最上級の範囲は que ではなく de。mejor は性変化なし（男女同形）。<br>📖 <b>語句</b>：hotel「ホテル」／ciudad「街・都市」'
          },
          {
            t: 'Estas corbatas son (<span class="qz-b" data-a="tan"></span>) (<span class="qz-b" data-a="caras"></span>) (<span class="qz-b" data-a="como"></span>) esas.',
            ja: 'これらのネクタイはそれらと同じくらい高い（caro）。',
            exp: '同等比較（形容詞）：<b>tan</b> + 形容詞 + <b>como</b>。形容詞 cara は corbatas（女性複数）に一致して <b>caras</b>。<br>⚠️ 名詞の量を比べる tanto/tanta/tantos/tantas と混同しない。形容詞・副詞には tan を使う。<br>📖 <b>語句</b>：corbata「ネクタイ」／caro「高い・高価な」／estas「これらの」／esas「それらの」'
          },
          {
            t: 'Mis padres comen (<span class="qz-b" data-a="menos"></span>) (<span class="qz-b" data-a="que"></span>) yo.',
            ja: '両親は私より食が細い（食べる量が少ない）。',
            exp: '劣等比較：<b>menos</b> + que。ここでは comer（食べる量）を比べているので動詞の後に menos que を置く。<br>⚠️ menos que の que を de にしない（名詞・代名詞との比較は que）。<br>📖 <b>語句</b>：padres「両親」／comer「食べる」'
          },
          {
            t: 'Trabajamos (<span class="qz-b" data-a="tanto"></span>) (<span class="qz-b" data-a="como"></span>) ellos.',
            ja: '私たちは彼らと同じくらいよく働く。',
            exp: '動詞（働く量）の同等比較：<b>tanto</b> + <b>como</b>。動詞を修飾するときは tanto（性数変化なし）。<br>⚠️ 形容詞・副詞は tan、名詞の量は tanto/tanta/tantos/tantas、動詞の量は tanto（変化なし）の3種を区別する。<br>📖 <b>語句</b>：trabajar「働く」'
          },
          {
            t: 'Los candidatos de estas elecciones son (<span class="qz-b" data-a="los"></span>) (<span class="qz-b" data-a="peores"></span>) (<span class="qz-b" data-a="de"></span>) esta década.',
            ja: '今回の選挙の候補者たちはこの10年で最悪だ。',
            exp: 'malo の不規則最上級 <b>peor</b>（複数 <b>peores</b>）。定冠詞は candidatos（男性複数）に合わせて <b>los</b>。範囲は <b>de</b>（de esta década）。<br>⚠️ peores は性変化なし（男女同形）、数変化のみ。más malo は誤り（peor を使う）。<br>📖 <b>語句</b>：candidato「候補者」／elección「選挙」（複数 elecciones）／década「10年・年代」'
          }
        ]
      },
      {
        heading: '3. 関係詞',
        instruction: '下線部に、関係詞を含む適切な語句を入れて、和訳に合うような文を完成させなさい。（1点×3）',
        items: [
          {
            t: 'Los niños (<span class="qz-b" data-a="a los que"></span>) enseño japonés son muy bonitos.',
            ja: '私が日本語を教えてあげている子供たちはとても可愛い。',
            exp: 'enseñar a（〜に教える）の前置詞 a + 先行詞 los niños（男性複数）→ <b>a los que</b>。<br>⚠️ 前置詞 a を落とさない。「人に教える」enseñar a の a は関係詞の前にも必要。<br>📖 <b>語句</b>：niño「子供」／enseñar「教える」／japonés「日本語」／bonito「可愛い・きれいな」'
          },
          {
            t: '(<span class="qz-b" data-a="Los que"></span>) están al lado de Micaela son Mario y Elena.',
            ja: 'ミカエラの横にいるのはマリオとエレーナだ。',
            exp: '先行詞なしの独立用法。「横にいる人たち（男性・混性複数）」＝ <b>Los que</b>（定冠詞 los + que）。<br>⚠️ lo que（中性：抽象的なこと）ではなく Los que（具体的な人：男性・混性複数）。<br>📖 <b>語句</b>：al lado de「〜の横に・隣に」'
          },
          {
            t: 'En Buenos Aires vive una mujer (<span class="qz-b" data-a="para la que"></span>) puedo morir.',
            ja: 'ブエノスアイレスに、私がそのためなら死んでもいいと思っている1人の女性が住んでいる。',
            exp: 'morir para（〜のために死ぬ）の前置詞 para + 先行詞 una mujer（女性単数）→ <b>para la que</b>。<br>⚠️ 前置詞 para をつける。mujer が女性単数なので la que（×para que・×para el que）。<br>📖 <b>語句</b>：Buenos Aires「ブエノスアイレス」／mujer「女性」／morir「死ぬ」'
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
  },

  /* ── 二列 Lección 4 小テスト ──────────────── */
  'Spanish2_lesson4.html': {
    title: 'Lección 4 小テスト',
    intro: '「あなたたち」は usted / ustedes を指すものとする。「答えを確認」で解答例と解説が表示されます。',
    sections: [
      {
        heading: '動詞活用（直説法現在）',
        items: [
          {
            ja: '君たちは始める',
            hint: 'empezar',
            a: 'empezáis',
            exp: 'empezar は <b>e→ie 語根母音変化動詞</b>。ただし nosotros・vosotros 形には語根変化が起きない（靴型変化）。<br>vosotros: <b>empezáis</b>（変化なし）。empiezáis とはならない点に注意。<br>📖 <b>活用</b>：empiezo / empiezas / empieza / empezamos / <b>empezáis</b> / empiezan'
          },
          {
            ja: '彼は建てる',
            hint: 'construir',
            a: 'construye',
            exp: 'construir は <b>母音間の i → y 変化</b>動詞。語根が母音で終わるため、語尾の i が y に変化する。<br>él: <b>construye</b>。<br>📖 <b>活用</b>：construyo / construyes / <b>construye</b> / construimos / construís / construyen<br>💡 huir・incluir・distribuir なども同じパターン。'
          },
          {
            ja: '彼女たちはおく',
            hint: 'poner',
            a: 'ponen',
            exp: 'poner は yo 形のみ不規則（<b>go動詞</b>：pongo）。それ以外は規則変化。<br>ellas: <b>ponen</b>（規則的な -en 語尾）。<br>📖 <b>活用</b>：pongo / pones / pone / ponemos / ponéis / <b>ponen</b><br>💡 同じ go動詞：tener（tengo）・venir（vengo）・salir（salgo）・hacer（hago）。'
          },
          {
            ja: '私は聞こえる',
            hint: 'oír',
            a: 'oigo',
            exp: 'oír は <b>完全不規則動詞</b>。yo 形は <b>oigo</b>（go動詞 + y 挿入）。tú 以下では y が挿入される。<br>yo: <b>oigo</b>。<br>📖 <b>活用</b>：<b>oigo</b> / oyes / oye / oímos / oís / oyen<br>⚠️ oigo は「聞こえる・聞く」の両方に使える。意図的に「聞く」は escuchar を使うことが多い。'
          },
          {
            ja: '君は続く',
            hint: 'seguir',
            a: 'sigues',
            exp: 'seguir は <b>e→i 語根母音変化動詞</b>。また yo 形は gu→g 変化（sigo）。<br>tú: <b>sigues</b>（e→i 変化）。<br>📖 <b>活用</b>：sigo / <b>sigues</b> / sigue / seguimos / seguís / siguen<br>💡 pedir・servir・vestir なども e→i 変化。yo 形の gu→g は seguir 特有。'
          },
          {
            ja: 'あなたは見つける',
            hint: 'encontrar',
            a: 'encuentra',
            exp: 'encontrar は <b>o→ue 語根母音変化動詞</b>。usted は 3人称単数扱い。<br>usted: <b>encuentra</b>（o→ue 変化）。<br>📖 <b>活用</b>：encuentro / encuentras / <b>encuentra</b> / encontramos / encontráis / encuentran<br>💡 contar・volver・poder なども同じ o→ue 変化パターン。'
          }
        ]
      },
      {
        heading: '和文西訳',
        items: [
          {
            ja: 'メキシコで一番の観光都市はどこですか？',
            a: '¿Cuál es la ciudad más turística de México?',
            exp: '「どれ・どこ」の選択には <b>cuál</b>（限定選択）を使う。「最も〜な」= <b>la + más + 形容詞</b>（最上級）。<br>最上級の範囲は <b>de</b> で表す（de México「メキシコで」）。<br>⚠️ ¿Dónde está...?（場所を問う）と ¿Cuál es...?（どれかを問う）の使い分けに注意。<br>📖 turístico「観光の」／la ciudad más turística「最も観光都市化した都市」'
          },
          {
            ja: '君が買いたい本はこれですか？',
            a: '¿El libro que quieres comprar es este?',
            exp: '「君が買いたい本」= el libro <b>que</b> quieres comprar（関係代名詞 que で名詞を修飾）。<br><b>quieres</b>（querer の tú 形、e→ie 語根変化）「〜したい」。<br>「これ」= <b>este</b>（男性単数の指示代名詞）。<br>📖 querer「欲しい・〜したい」（quiero / quieres / quiere）／comprar「買う」／este「これ（男性）」'
          },
          {
            ja: '明日の9時に来てもいいですか？',
            a: '¿Puedo venir mañana a las nueve?',
            exp: '<b>poder + 原形</b>で許可・可能を表す（「〜してもよいですか」「〜できますか」）。<br>Puedo（poder の yo 形、o→ue 変化）+ venir（来る）。<br>時刻は <b>a las + 時刻</b>（a las nueve「9時に」）。<br>📖 poder「できる・してもよい」（puedo / puedes / puede）／mañana「明日」／a las nueve「9時に」'
          },
          {
            ja: 'あなた方のうちのどなたかこの歌をご存知ですか？',
            a: '¿Alguno de ustedes conoce esta canción?',
            exp: '<b>alguno de + 複数名詞</b>「〜のうちの誰か」。alguno が主語なので動詞は <b>3人称単数</b>。<br><b>conocer</b>「（人・場所・物を）知っている」。saber との使い分け：saber は事実・方法を知る。<br>esta canción = 指示形容詞 esta（女性）+ canción「歌」。<br>📖 alguno「誰か（不定）」／conocer「知っている」（conozco / conoces / <b>conoce</b>）／canción「歌」（女性名詞）'
          },
          {
            ja: 'マチュピチュは山の高いところにある要塞だ。',
            a: 'Machu Picchu es una ciudadela que está en lo alto de una montaña.',
            exp: '「要塞」= <b>ciudadela</b>（女性名詞 → una ciudadela）。「〜にある」= <b>estar</b>（所在）→ que está（関係代名詞 que + estar）。<br><b>en lo alto de</b>「〜の高いところに」。lo alto = 中性冠詞 lo + 形容詞 alto で「高いところ」を名詞化。<br>⚠️ 「要塞だ」（定義・特徴）= <b>ser</b> / 「高いところにある」（所在）= <b>estar</b>（同一文内での ser/estar 使い分け）。<br>📖 ciudadela「要塞・城塞」／en lo alto de「〜の高いところに」／montaña「山」'
          },
          {
            ja: 'ペドロは私がイグアスの滝に行ったことがないということを知っている。',
            a: 'Pedro sabe que no conozco las Cataratas del Iguazú.',
            exp: '<b>saber que + 節</b>「〜ということを知っている」（saber は事実・内容を知る）。<br>「行ったことがない」→ <b>conocer の否定</b>（no conozco）で「知らない・訪れたことがない」を表現。<br>las Cataratas del Iguazú = cataratas「滝」（複数・女性）+ del Iguazú（固有名詞の属格）。<br>📖 saber que「〜ということを知っている」／conocer「（場所を）知っている・訪れたことがある」／las cataratas「滝」'
          }
        ]
      }
    ]
  }

};
