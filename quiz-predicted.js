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
          },
          {
            t: 'Yo (<span class="qz-b" data-a="entiendo"></span>) español, pero mis amigos no (<span class="qz-b" data-a="entienden"></span>) nada. <span class="qz-hint">(entender)</span>',
            ja: '私はスペイン語が分かるが、友人たちは全く分からない。',
            exp: 'entender は <b>e→ie</b> 型（語根母音変化）。1単 <b>entiendo</b>、3複 <b>entienden</b> と変化。<br>⚠️ ブーツ型：1複・2複はアクセントが語根に当たらないので<b>変化しない</b>（nosotros entendemos）。'
          },
          {
            t: 'Vosotros (<span class="qz-b" data-a="entendéis"></span>) el problema, pero yo no (<span class="qz-b" data-a="entiendo"></span>) nada. <span class="qz-hint">(entender)</span>',
            ja: '君たちは問題が分かっているが、私には全く分からない。',
            exp: 'entender（e→ie型）の2複は <b>entendéis</b>（アクセントが語根に当たらず<b>変化しない</b>）。1単は <b>entiendo</b>（e→ie 変化）。<br>⚠️ 「entendéis」のアクセント記号（é）を忘れない。'
          },
          {
            t: '¿Cuándo (<span class="qz-b" data-a="vuelves"></span>) a casa? — Nosotros (<span class="qz-b" data-a="volvemos"></span>) a las seis. <span class="qz-hint">(volver)</span>',
            ja: 'いつ家に帰るの？ — 私たちは6時に戻ります。',
            exp: 'volver は <b>o→ue</b> 型。2単 tú <b>vuelves</b>（変化）、1複 nosotros <b>volvemos</b>（<b>変化しない</b>、×vuelve mos）。<br>⚠️ 1複・2複はブーツ型の外なので語根変化なし。'
          },
          {
            t: 'Hoy ella (<span class="qz-b" data-a="vuelve"></span>) tarde del trabajo y sus hijos (<span class="qz-b" data-a="vuelven"></span>) del colegio. <span class="qz-hint">(volver)</span>',
            ja: '今日、彼女は仕事から遅く帰り、子供たちは学校から帰ってくる。',
            exp: 'volver（o→ue型）の3単 <b>vuelve</b>、3複 <b>vuelven</b>（ともにブーツ型内で変化）。<br>📖 語句：trabajo「仕事」／colegio「学校・小中学校」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="pienso"></span>) que tienes razón, pero ellos (<span class="qz-b" data-a="piensan"></span>) lo contrario. <span class="qz-hint">(pensar)</span>',
            ja: '私は君が正しいと思うが、彼らは逆のことを思っている。',
            exp: 'pensar は <b>e→ie</b> 型。1単 <b>pienso</b>（×penseo）、3複 <b>piensan</b>。<br>⚠️ e→ie であって e→ie「o」ではない。<br>📖 語句：tener razón「正しい・道理をわきまえている」／lo contrario「正反対のこと」'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="pensamos"></span>) ir a la playa este fin de semana. <span class="qz-hint">(pensar)</span>',
            ja: '私たちは今週末ビーチに行くつもりだ。',
            exp: 'pensar（e→ie型）の1複は <b>pensamos</b>（語根変化<b>なし</b>）。pensar＋不定詞で「〜するつもり」。<br>⚠️ 「×piensamos」は誤り。ブーツ型の外は規則どおり。<br>📖 語句：playa「ビーチ」／fin de semana「週末」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="repito"></span>) la pregunta porque ellos no (<span class="qz-b" data-a="entienden"></span>). <span class="qz-hint">(repetir / entender)</span>',
            ja: '彼らが分からないので、私は質問を繰り返す。',
            exp: 'repetir は <b>e→i</b> 型（ir動詞のみ）。1単 <b>repito</b>（×repeto は誤り）。entender は e→ie型 → 3複 <b>entienden</b>。<br>⚠️ e→i（repetir）と e→ie（entender）を混同しない。<br>📖 語句：pregunta「質問」／porque「なぜなら」'
          },
          {
            t: 'El camarero nos (<span class="qz-b" data-a="sirve"></span>) el café y nosotros (<span class="qz-b" data-a="pedimos"></span>) la cuenta. <span class="qz-hint">(servir / pedir)</span>',
            ja: 'ウェイターがコーヒーを持ってきて、私たちは会計を頼む。',
            exp: 'servir（e→i型、ir動詞）の3単 <b>sirve</b>。pedir（e→i型）の1複 <b>pedimos</b>（変化<b>なし</b>）。<br>⚠️ 1複はブーツ型の外なので pedimos（×pideimos は誤り）。<br>📖 語句：camarero「ウェイター」／café「コーヒー」／cuenta「勘定・会計」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="juego"></span>) al baloncesto y tú (<span class="qz-b" data-a="juegas"></span>) al béisbol. <span class="qz-hint">(jugar)</span>',
            ja: '私はバスケットボールをして、君は野球をする。',
            exp: 'jugar は <b>u→ue</b> 型（この型をとるのはjugarだけ）。1単 <b>juego</b>、2単 <b>juegas</b>（ともに変化）。<br>⚠️ u→ue 型は jugar のみ。他の動詞にこの変化はない。<br>📖 語句：baloncesto「バスケットボール」／béisbol「野球」'
          },
          {
            t: 'Vosotros (<span class="qz-b" data-a="jugáis"></span>) al tenis todos los días, ¿verdad? <span class="qz-hint">(jugar)</span>',
            ja: '君たちは毎日テニスをするよね？',
            exp: 'jugar（u→ue型）の2複は <b>jugáis</b>（語根変化<b>なし</b>。×juegáis は誤り）。アクセント記号（á）に注意。<br>⚠️ 2複はブーツ型の外。jugáis が正解。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="vengo"></span>) de la biblioteca y mi hermana (<span class="qz-b" data-a="viene"></span>) del supermercado. <span class="qz-hint">(venir)</span>',
            ja: '私は図書館から来て、姉はスーパーから来る。',
            exp: 'venir は <b>-go ＋ e→ie</b> 型。1単は -go のみで語根変化は起きず <b>vengo</b>（×viengo）。3単は e→ie 変化で <b>viene</b>（-go なし）。<br>⚠️ 1単で tener と同様「-go だけ」。語根変化との混合はしない。<br>📖 語句：biblioteca「図書館」／supermercado「スーパーマーケット」'
          },
          {
            t: '¿De dónde (<span class="qz-b" data-a="vienen"></span>) ustedes? — (<span class="qz-b" data-a="Venimos"></span>) de Osaka. <span class="qz-hint">(venir)</span>',
            ja: 'あなた方はどちらから来たのですか？ — 大阪から来ました。',
            exp: 'venir の3複 <b>vienen</b>（e→ie変化）、1複 <b>venimos</b>（変化<b>なし</b>）。<br>⚠️ 1複 venimos は「×venimos」で正しい（ブーツ型外）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="pongo"></span>) los libros en la mesa y tú (<span class="qz-b" data-a="pones"></span>) las sillas en orden. <span class="qz-hint">(poner)</span>',
            ja: '私は本を机に置き、君は椅子を整頓する。',
            exp: 'poner は純粋 <b>-go</b> 型（語根変化なし）。1単 <b>pongo</b>、2単 <b>pones</b>（2単以降は規則活用）。<br>📖 語句：mesa「机・テーブル」／silla「椅子」／en orden「整頓された・順に」'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="sale"></span>) de casa a las ocho y nosotros (<span class="qz-b" data-a="salimos"></span>) a las nueve. <span class="qz-hint">(salir)</span>',
            ja: '彼女は8時に家を出て、私たちは9時に出る。',
            exp: 'salir は純粋 <b>-go</b> 型。1単は salgo、3単は <b>sale</b>（規則）、1複 <b>salimos</b>（規則）。<br>⚠️ -go 型は1単のみ不規則。salgo 以外は通常の活用。<br>📖 語句：casa「家」'
          },
          {
            t: 'Yo siempre (<span class="qz-b" data-a="hago"></span>) la cama por la mañana. ¿Y tú, qué (<span class="qz-b" data-a="haces"></span>)? <span class="qz-hint">(hacer)</span>',
            ja: '私はいつも朝ベッドメイキングをする。君は何をする？',
            exp: 'hacer は純粋 <b>-go</b> 型。1単 <b>hago</b>、2単 <b>haces</b>（規則）。<br>⚠️ hacer の2単は haces（×hages は誤り）。<br>📖 語句：hacer la cama「ベッドメイキングをする」／por la mañana「朝に」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="traigo"></span>) el vino y Ana (<span class="qz-b" data-a="trae"></span>) el postre. <span class="qz-hint">(traer)</span>',
            ja: '私がワインを持ってきて、アナがデザートを持ってくる。',
            exp: 'traer は <b>-igo</b> 型。1単 <b>traigo</b>（caer → caigo と同じパターン）。3単 <b>trae</b>（規則）。<br>⚠️ traer の1単は traigo（-igo）。trago とは別語なので混同しない。<br>📖 語句：vino「ワイン」／postre「デザート」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Oyes"></span>) la música? — Sí, yo (<span class="qz-b" data-a="oigo"></span>) perfectamente. <span class="qz-hint">(oír)</span>',
            ja: '音楽が聴こえる？ — うん、完璧に聞こえるよ。',
            exp: 'oír は特殊な -go 型。2単 <b>oyes</b>（e の前に y が入る）、1単 <b>oigo</b>（-go 型）。<br>⚠️ oír の2単・3単・3複は e の前に y が挿入（oyes / oye / oyen）。<br>📖 語句：música「音楽」／perfectamente「完璧に」'
          },
          {
            t: 'Todos (<span class="qz-b" data-a="oyen"></span>) la conferencia con atención. <span class="qz-hint">(oír)</span>',
            ja: 'みんなが講義を注意深く聴いている。',
            exp: 'oír の3複 <b>oyen</b>（o→y 挿入パターン。ブーツ型内で変化）。<br>⚠️ oyen のスペルに注意（×oíen は誤り）。<br>📖 語句：conferencia「講演・講義」／con atención「注意深く」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="conozco"></span>) la ciudad de Sevilla, pero no (<span class="qz-b" data-a="sé"></span>) hablar andaluz. <span class="qz-hint">(conocer / saber)</span>',
            ja: '私はセビリアという町を知っているが、アンダルシア方言は話せない。',
            exp: '<b>conocer</b>（母音+cer型）の1単 <b>conozco</b>（c→zc）。<b>saber</b>（完全不規則）の1単 <b>sé</b>。saber＋不定詞で「〜できる」。<br>⚠️ sé のアクセント記号は必須（se「〜自身」との区別）。<br>📖 語句：andaluz「アンダルシア（方言）の」'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="parece"></span>) simpática, pero yo no la (<span class="qz-b" data-a="conozco"></span>) bien. <span class="qz-hint">(parecer / conocer)</span>',
            ja: '彼女は感じがよさそうだが、私は彼女をよく知らない。',
            exp: 'parecer（母音+cer型）の3単 <b>parece</b>（1単のみ parezco、他は規則活用）。conocer の1単 <b>conozco</b>（ここは否定なので no … conozco）。<br>⚠️ -zco 型は1単のみ不規則。3単は規則活用の parece。<br>📖 語句：simpático「感じのいい・好感のもてる」'
          },
          {
            t: 'Mi empresa (<span class="qz-b" data-a="produce"></span>) coches eléctricos. <span class="qz-hint">(producir)</span>',
            ja: '私の会社は電気自動車を生産している。',
            exp: 'producir（母音+cir型）も -zco 型。1単は produzco だが、3単は <b>produce</b>（規則活用）。<br>⚠️ -zco 型の変化は1単のみ。他の人称は規則活用。<br>📖 語句：empresa「会社・企業」／eléctrico「電気の・電動の」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="doy"></span>) las gracias a mis profesores y les (<span class="qz-b" data-a="doy"></span>) un regalo. <span class="qz-hint">(dar)</span>',
            ja: '私は先生方にお礼を言い、プレゼントを渡す。',
            exp: 'dar は完全不規則。1単 <b>doy</b>（-oy で終わる）。2単以降は das / da / damos / dais / dan（アクセント記号なし）。<br>⚠️ dar の1単は doy（×dao・×do は誤り）。<br>📖 語句：dar las gracias「お礼を言う」／regalo「プレゼント・贈り物」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Ves"></span>) aquel edificio? Yo (<span class="qz-b" data-a="veo"></span>) la montaña detrás de él. <span class="qz-hint">(ver)</span>',
            ja: 'あの建物が見えますか？私はその後ろに山が見えます。',
            exp: 'ver は完全不規則。2単 <b>ves</b>（アクセント記号なし）、1単 <b>veo</b>。<br>⚠️ ver の活用は veo / ves / ve / vemos / veis / ven（アクセント記号不要）。<br>📖 語句：edificio「建物」／montaña「山」／detrás de「〜の後ろに」'
          },
          {
            t: 'Los estudiantes (<span class="qz-b" data-a="construyen"></span>) maquetas en clase y yo (<span class="qz-b" data-a="construyo"></span>) la mía en casa. <span class="qz-hint">(construir)</span>',
            ja: '学生たちは授業で模型を作り、私は家で自分のものを作る。',
            exp: 'construir は <b>-uir</b> 型（y 挿入）。3複 <b>construyen</b>、1単 <b>construyo</b>（ともに y 挿入）。1複・2複は y 挿入なし（construimos / construís）。<br>⚠️ 1複・2複に y は入らない。<br>📖 語句：maqueta「模型・マケット」'
          },
          {
            t: 'El río (<span class="qz-b" data-a="huye"></span>) hacia el mar y el tiempo (<span class="qz-b" data-a="huye"></span>) sin parar. <span class="qz-hint">(huir)</span>',
            ja: '川は海へと流れ、時間は止まらずに過ぎていく。',
            exp: 'huir は -uir 型（construir と同様）。3単 <b>huye</b>（y 挿入）。<br>⚠️ huir の活用：huyo / huyes / huye / huimos / huís / huyen。<br>📖 語句：río「川」／hacia「〜に向かって」／sin parar「止まらずに」'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="sé"></span>) nadar, pero no (<span class="qz-b" data-a="sé"></span>) esquiar. <span class="qz-hint">(saber)</span>',
            ja: '私は泳げるが、スキーはできない。',
            exp: 'saber（完全不規則）の1単 <b>sé</b>（アクセント記号必須）。saber＋不定詞で「〜できる」（学習によって得た技能）。<br>⚠️ sé のアクセントを忘れずに。se（再帰代名詞）との区別のためにも必要。<br>📖 語句：nadar「泳ぐ」／esquiar「スキーをする」'
          },
          {
            t: '¿Cuánto (<span class="qz-b" data-a="valen"></span>) estas entradas? — No (<span class="qz-b" data-a="sé"></span>). <span class="qz-hint">(valer / saber)</span>',
            ja: 'これらのチケットはいくらしますか？ — 知りません。',
            exp: 'valer（純粋-go型）の3複 <b>valen</b>（1単は valgo のみ不規則）。saber の1単 <b>sé</b>。<br>⚠️ valer の3複は規則活用 valen（-go は1単のみ）。<br>📖 語句：entrada「チケット・入場券」／cuánto「いくら・どのくらい」'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="hacemos"></span>) la tarea juntos y luego (<span class="qz-b" data-a="salimos"></span>) a cenar. <span class="qz-hint">(hacer / salir)</span>',
            ja: '私たちは一緒に宿題をして、それから夕食に出かける。',
            exp: 'hacer（-go型）の1複 <b>hacemos</b>（規則）、salir（-go型）の1複 <b>salimos</b>（規則）。<br>⚠️ -go 型は1単のみ不規則。1複は通常の活用（hacemos / salimos）。<br>📖 語句：tarea「宿題・課題」／juntos「一緒に」／luego「それから・後で」／cenar「夕食を食べる」'
          },
          {
            t: '¿A qué hora (<span class="qz-b" data-a="vais"></span>) vosotros al gimnasio? — (<span class="qz-b" data-a="Vamos"></span>) a las cinco de la tarde. <span class="qz-hint">(ir)</span>',
            ja: '君たちは何時にジムに行くの？ — 午後5時に行くよ。',
            exp: 'ir（完全不規則）の2複 <b>vais</b>、1複 <b>vamos</b>。ir は全活用が不規則（voy / vas / va / vamos / vais / van）。<br>⚠️ vamos は「行こう（勧誘）」にも使われる。<br>📖 語句：gimnasio「ジム・体育館」／tarde「午後」'
          },
          {
            t: 'Mi abuela (<span class="qz-b" data-a="recuerda"></span>) todo y nunca (<span class="qz-b" data-a="olvida"></span>) nada. <span class="qz-hint">(recordar / olvidar)</span>',
            ja: '祖母は何でも覚えていて、何も忘れない。',
            exp: 'recordar は <b>o→ue</b> 型（volver と同類）。3単 <b>recuerda</b>（変化）。olvidar は規則動詞 → <b>olvida</b>（規則）。<br>⚠️ recordar を記憶して。語根母音変化（o→ue）。<br>📖 語句：abuela「祖母」／nunca「決して〜ない」／olvidar「忘れる」'
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
          },
          {
            t: 'Los estudiantes (<span class="qz-b" data-a="que"></span>) estudian mucho aprueban el examen.',
            ja: '一生懸命勉強する学生たちは試験に合格する。',
            exp: '先行詞 los estudiantes を受ける関係代名詞 <b>que</b>（人・物どちらでも主語・直接目的語の位置では que）。これは限定用法（カンマなし）。<br>⚠️ カンマがあると説明用法になり意味が変わる。'
          },
          {
            t: 'Aquí es (<span class="qz-b" data-a="donde"></span>) viven muchos amigos míos.',
            ja: 'ここが私の友人たちがたくさん住んでいる所だ。',
            exp: 'donde は先行詞なしの独立用法でも使える。「〜する所」を表す。<br>📖 語句：aquí「ここに」／amigos míos「私の友人たち（後置所有形容詞）」'
          },
          {
            t: 'Japón es el país (<span class="qz-b" data-a="donde"></span>) vivimos.',
            ja: '日本は私たちが暮らしている国だ。',
            exp: '先行詞 el país（場所）に対して関係副詞 <b>donde</b>。「en el que」と言い換えも可。<br>⚠️ 場所の先行詞には que ではなく donde が自然。'
          },
          {
            t: '(<span class="qz-b" data-a="La que"></span>) está bailando es mi prima.',
            ja: '踊っているのは私の従姉妹です。',
            exp: '先行詞なしの独立用法。「踊っている女性（人物）」＝女性なので <b>la que</b>（女性単数定冠詞＋que）。<br>⚠️ lo que は中性（抽象的なこと・もの）。具体的な人・物には性別の定冠詞を使う。<br>📖 語句：bailar「踊る」／prima「いとこ（女性）」'
          },
          {
            t: 'Estos cuadros no son (<span class="qz-b" data-a="los que"></span>) pintó Picasso.',
            ja: 'これらの絵はピカソが描いたものではない。',
            exp: '「〜が描いたもの（絵）」＝男性複数 cuadros → <b>los que</b>（定冠詞複数男性 los＋que）。先行詞なしの独立用法。<br>📖 語句：cuadro「絵・絵画」／pintar「描く」'
          },
          {
            t: 'Ésta es la playa (<span class="qz-b" data-a="donde"></span>) todos los años paso las vacaciones.',
            ja: 'これは私が毎年休暇を過ごすビーチです。',
            exp: '先行詞 la playa（場所）→ 関係副詞 <b>donde</b>。解説ページの例文そのまま。<br>📖 語句：playa「ビーチ」／vacaciones「休暇」／pasar「過ごす・過ぎる」'
          },
          {
            t: 'Aquélla es la chica (<span class="qz-b" data-a="de la que"></span>) te hablo siempre.',
            ja: 'あの人が、いつも君に話している女の子だよ。',
            exp: 'hablar de（〜について話す）なので前置詞 de が必要 → <b>de la que</b>（de＋la que、先行詞 la chica は女性単数）。<br>⚠️ 前置詞 de を落とさない。前置詞＋定冠詞（先行詞に一致）＋que の形。<br>📖 語句：siempre「いつも」'
          },
          {
            t: '(<span class="qz-b" data-a="Lo que"></span>) me preocupa es el tiempo.',
            ja: '私が心配なのは時間です。',
            exp: '<b>lo que</b>：中性関係詞。具体的な先行詞がなく「（私が心配な）こと・もの」を抽象的に指す。<br>⚠️ el que / la que は特定の具体的な物・人を指す。lo que は抽象的な「こと」。<br>📖 語句：preocupar「心配させる」（me preocupa＝私を心配させる＝私が心配）／tiempo「時間・天気」'
          },
          {
            t: 'No entiendo (<span class="qz-b" data-a="lo que"></span>) dices.',
            ja: '私は君が言っていることが分からない。',
            exp: '「君が言っていること」＝抽象的な内容 → <b>lo que</b>。先行詞がなく「〜すること」を指す中性関係詞。<br>⚠️ que だけでは先行詞が必要。先行詞のない「〜こと・もの」には lo que。'
          },
          {
            t: 'Carlos tiene dos hijos, (<span class="qz-b" data-a="a los que"></span>) enseña japonés todas las noches.',
            ja: 'カルロスには2人の子供がいるのだが、彼らに毎晩日本語を教えている。',
            exp: 'enseñar a（〜に教える）なので前置詞 a が必要。先行詞 dos hijos は男性複数 → <b>a los que</b>。カンマあり＝説明用法（非制限用法）。<br>⚠️ 人を直接目的語にとる動詞では前置詞 a が必要（人の a）。<br>📖 語句：hijo「子供・息子」／japonés「日本語・日本人」／todas las noches「毎晩」'
          },
          {
            t: 'Mi padre es (<span class="qz-b" data-a="el que"></span>) desayuna más temprano de la familia.',
            ja: '私の父は家族のうちで最も早く朝食をとる人物だ。',
            exp: '副詞の最上級は「定冠詞＋que＋動詞＋más…」の形。「朝食を最も早くとる人（男性）」＝ <b>el que</b>（男性単数）。<br>⚠️ 副詞の最上級は形容詞と違い、この形が普通。<br>📖 語句：desayunar「朝食をとる」／temprano「早く・早い」'
          },
          {
            t: 'Éste es el barrio (<span class="qz-b" data-a="donde"></span>) nació mi madre.',
            ja: 'これは私の母が生まれた街区です。',
            exp: '先行詞 el barrio（場所）→ 関係副詞 <b>donde</b>（「nacer en el barrio」の en が donde に吸収される）。<br>⚠️ 場所を表す名詞が先行詞のとき donde。en que とも言える。<br>📖 語句：barrio「街区・地区」／nacer「生まれる」'
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
          },
          {
            t: 'Esta corbata es (<span class="qz-b" data-a="menos"></span>) bonita que esa.',
            ja: 'このネクタイはそれよりカッコよくない。',
            exp: '劣等比較は <b>menos</b> + 形容詞 + que。解説ページ例文そのまま。<br>⚠️ menos…que の que を de にしない（比較対象が名詞・代名詞なら que）。<br>📖 語句：corbata「ネクタイ」／bonito「きれいな・かわいい」'
          },
          {
            t: 'Francisco y Teresa son (<span class="qz-b" data-a="mayores"></span>) que yo.',
            ja: 'フランシスコとテレサは私より年上だ。',
            exp: '年齢の「上」は不規則比較級 <b>mayor</b>。主語が複数（Francisco y Teresa）なので複数形 <b>mayores</b>。性変化なし（×mayoras は誤り）。<br>⚠️ mayor は性変化しない。複数のみ -es。'
          },
          {
            t: 'La casa de Natalia es (<span class="qz-b" data-a="más grande"></span>) que la mía.',
            ja: 'ナタリアの家は私のより大きい（物理的サイズ）。',
            exp: '物理的な大きさは <b>más grande</b>（mayor はサイズに使わない）。<br>⚠️ mayor は年齢・抽象的大小。物理的サイズには más grande / más pequeño を使う。<br>📖 語句：casa「家」／la mía「私のもの（女性単数代名詞）」'
          },
          {
            t: 'Esta película es (<span class="qz-b" data-a="mejor"></span>) que la otra.',
            ja: 'この映画はもう一方より良い。',
            exp: 'bueno の比較級は不規則 <b>mejor</b>（más bueno とは言わない）。性変化なし（男女同形）、複数は mejores。<br>⚠️ más bueno は誤り。mejor を使う。<br>📖 語句：película「映画」'
          },
          {
            t: 'Mis notas son (<span class="qz-b" data-a="las mejores"></span>) de la clase.',
            ja: '私の成績はクラスで最も良い。',
            exp: '不規則最上級：notas（女性複数）＋定冠詞 las → <b>las mejores</b>。「de la clase」で範囲を示す。<br>⚠️ mejor の複数 mejores を使う。las más buenas は誤り。<br>📖 語句：notas「成績・点数」'
          },
          {
            t: 'Teresa y Ángela son (<span class="qz-b" data-a="las más inteligentes"></span>) de la clase.',
            ja: 'テレサとアンヘラはクラスで最も頭が良い。',
            exp: '最上級：主語が女性複数（Teresa y Ángela）→ 定冠詞 <b>las</b>＋más＋<b>inteligentes</b>（複数形）。<br>⚠️ 定冠詞も形容詞も主語の性数に合わせる。de la clase で範囲。<br>📖 語句：inteligente「頭の良い・聡明な」'
          },
          {
            t: 'Juan corre (<span class="qz-b" data-a="más rápido"></span>) que yo.',
            ja: 'フアンは私より速く走る。',
            exp: '副詞の比較級：más + <b>rápido</b>（副詞は性数変化なし）。解説ページ例文そのまま。<br>⚠️ 副詞として使う場合は rápidamente（副詞）でも rápido（形容詞を副詞的に使う）でも可だが、性数変化はしない。'
          },
          {
            t: 'Tengo (<span class="qz-b" data-a="tantos"></span>) libros como tú.',
            ja: '私は君と同じくらいたくさんの本を持っている。',
            exp: 'mucho の同等比較：tan mucho → <b>tanto</b>。名詞（libros：男性複数）を修飾するので <b>tantos</b>（性数一致）。<br>⚠️ 名詞の量を比べるときは tanto/tanta/tantos/tantas。tan は形容詞・副詞用。<br>📖 語句：libro「本」'
          },
          {
            t: 'Esta tarea es más difícil (<span class="qz-b" data-a="de lo que"></span>) dices.',
            ja: 'この宿題は君が言うより難しい。',
            exp: '「〜が言う（こと）より」＝ <b>de lo que</b>（節で比較する場合は que → de lo que）。解説ページの「más/menos de lo que」パターン。<br>⚠️ 「de lo que 節」の前は que ではなく de。<br>📖 語句：tarea「宿題・課題」／difícil「難しい」'
          },
          {
            t: 'María y Paula son (<span class="qz-b" data-a="tan alegres"></span>) como mi madre.',
            ja: 'マリアとパウラは私の母と同じくらい陽気だ。',
            exp: '同等比較 <b>tan</b> + 形容詞 + <b>como</b>。alegre は主語（María y Paula：複数）に一致して <b>alegres</b>。<br>⚠️ tan は形容詞・副詞の前に来る（名詞の前は tanto/tanta）。形容詞は性数一致を忘れずに。<br>📖 語句：alegre「陽気な・明るい」'
          },
          {
            t: 'En la fiesta hay más (<span class="qz-b" data-a="de"></span>) cien personas.',
            ja: 'パーティーには100人以上の人がいる。',
            exp: '数量の前では más <b>de</b>（más de cien＝100以上）。名詞・代名詞と比べるときは más que。<br>⚠️ 数値の前は必ず de。que にしない。<br>📖 語句：fiesta「パーティー・祝祭」／persona「人」'
          },
          {
            t: 'Mi hermana es (<span class="qz-b" data-a="menor"></span>) que yo.',
            ja: '私の妹は私より年下だ。',
            exp: '年齢の「下」は不規則比較級 <b>menor</b>（pequeño の比較級）。性変化なし、複数は menores。<br>⚠️ más pequeño（物理的サイズ）と menor（年齢・抽象的小）の使い分け。<br>📖 語句：hermana「姉妹」'
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
          },
          {
            t: 'En invierno (<span class="qz-b" data-a="nieva"></span>) mucho en Hokkaido.',
            ja: '冬に北海道ではたくさん雪が降る。',
            exp: 'nevar は <b>e→ie</b> 型の気象動詞。3単のみ使い <b>nieva</b>（主語なし）。<br>⚠️ 気象動詞は必ず3単。主語（it）に当たる語は不要。<br>📖 語句：invierno「冬」'
          },
          {
            t: 'Hoy (<span class="qz-b" data-a="hace"></span>) frío y (<span class="qz-b" data-a="hay"></span>) mucha humedad.',
            ja: '今日は寒くて、湿気がとても多い。',
            exp: '気温・天気は <b>hace</b>＋名詞（frío）。湿気の存在は <b>hay</b>＋名詞（humedad）。<br>⚠️ hace calor / hace frío / hace sol … は hace + 名詞。hay + 名詞は存在表現（hay humedad）。<br>📖 語句：frío「寒さ・冷たさ」／humedad「湿気・湿度」'
          },
          {
            t: 'En verano (<span class="qz-b" data-a="hace"></span>) mucho calor en Tokio.',
            ja: '夏の東京はとても暑い。',
            exp: '「暑い」は <b>hace calor</b>（hace＋名詞 calor）。「とても」は calor が名詞なので <b>mucho</b>。<br>⚠️ muy calor ではなく mucho calor（名詞＋mucho）。<br>📖 語句：verano「夏」／calor「暑さ・熱」'
          },
          {
            t: 'Hoy (<span class="qz-b" data-a="hace"></span>) viento y (<span class="qz-b" data-a="hace"></span>) fresco.',
            ja: '今日は風があって涼しい。',
            exp: '「風が吹く」は <b>hace viento</b>、「涼しい」は <b>hace fresco</b>（ともに hace＋名詞）。気象は無主語・hace を使う。<br>📖 語句：viento「風」／fresco「涼しさ・涼しい」'
          },
          {
            t: '(<span class="qz-b" data-a="Es"></span>) la una de la madrugada.',
            ja: '夜中の1時です。',
            exp: '1時は <b>Es la una</b>（単数）。2時以降は Son las …。madrugada は深夜0時過ぎから夜明けまでの時間帯。<br>⚠️ 1時だけ ser が単数形 Es（Son ではない）。<br>📖 語句：madrugada「未明・深夜」'
          },
          {
            t: '(<span class="qz-b" data-a="Son"></span>) las siete menos cuarto de la mañana.',
            ja: '午前6時45分です。',
            exp: '2時以降は <b>Son las</b>（複数）。「7時15分前＝6時45分」は <b>las siete menos cuarto</b>。午前は de la mañana。<br>⚠️ 「〜時〜分前」は menos＋分数。30分超のときに使う。<br>📖 語句：cuarto「4分の1・15分」／mañana（de la mañana）「午前」'
          },
          {
            t: '(<span class="qz-b" data-a="Hay que"></span>) sacar el pasaporte para viajar al extranjero.',
            ja: '外国へ旅行するためにはパスポートを取得しなければならない。',
            exp: '解説ページの例文そのまま。一般的義務は <b>hay que</b>＋不定詞（主語なし）。<br>⚠️ Tengo que（私が〜しなければ）とは意味が異なる。hay que は誰でもに当てはまる義務。<br>📖 語句：sacar「取り出す・取得する」／pasaporte「パスポート」／extranjero「外国（の）」'
          },
          {
            t: '(<span class="qz-b" data-a="Dicen"></span>) que el queso de La Mancha es uno de los mejores de España.',
            ja: 'ラ・マンチャ産のチーズはスペインで最も質のよいチーズのひとつだと言われている。',
            exp: '「〜と言われている」は <b>dicen que</b>（decir の3複・無主語文）。誰が言うか特定しない。<br>⚠️ dicen は decir の3複（digo / dices / dice / decimos / decís / <b>dicen</b>）。<br>📖 語句：queso「チーズ」／La Mancha「ラ・マンチャ（地方）」'
          }
        ]
      }
    ]
  };

})();
