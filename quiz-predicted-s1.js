'use strict';
/* ═══════════════════════════════════════════════
   小テスト 予想問題 ── 一列（Spanish1）専用
   ───────────────────────────────────────────────
   ・quiz-data.js の後に読み込むこと（QUIZ_DATA が先に定義されている必要あり）。
   ・quiz-predicted-s2.js と合わせて 2 ファイルを読み込む。
   ・adminOnly: true のページは管理者のみ表示。
   ═══════════════════════════════════════════════ */
(function () {
  if (typeof QUIZ_DATA === 'undefined') { return; }

  /* ── 一列 Lección 4 予想問題（直説法現在不規則・関係詞・比較・無主語文）──
     接地：Spanish1_lesson4.html の例文・活用表（語根母音変化 e→ie/o→ue/e→i/u→ue・
     -zco型・-go型・tener/venir/decir・完全不規則・que / lo que / donde /
     más…que / tan…como / 最上級 el más…de / 天候の無主語文 / hay que） */
  if (!QUIZ_DATA['Spanish1_lesson4.html'] || QUIZ_DATA['Spanish1_lesson4.html'].adminOnly) {
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
            exp: 'querer は <b>e→ie</b> 型（語根母音変化）。変化するのは1単・2単・3単・3複の「ブーツ型」。<br>1複 nosotros はアクセントが語根に当たらず<b>変化しない</b> → <b>queremos</b>（×quieremos）。3複は <b>quieren</b>。<br>⚠️ 1複・2複を変化させないことが最大のポイント。<br>💡 querer＋不定詞「〜したい」、querer a＋人「〜を愛している」。<br>🔤 <b>querer</b>（望む、愛する）：quiero / quieres / quiere / queremos / queréis / quieren'
          },
          {
            t: 'Tú (<span class="qz-b" data-a="puedes"></span>) hacerlo, pero nosotros no (<span class="qz-b" data-a="podemos"></span>). <span class="qz-hint">(poder)</span>',
            ja: '君はそれができるが、私たちにはできない。',
            exp: 'poder は <b>o→ue</b> 型。2単 <b>puedes</b> は変化、1複 <b>podemos</b> は<b>変化しない</b>（×puedemos）。<br>⚠️ ブーツ型：1複・2複だけ規則どおりの活用。<br>💡 poder＋不定詞「〜できる」。No puedo ir.「行けない」のように否定でも頻出。<br>🔤 <b>poder</b>（できる、〜し得る）：puedo / puedes / puede / podemos / podéis / pueden'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="tengo"></span>) dos hermanos y mi prima (<span class="qz-b" data-a="tiene"></span>) tres. <span class="qz-hint">(tener)</span>',
            ja: '私には兄弟が2人、いとこには3人いる。',
            exp: 'tener は <b>-go ＋ 語根母音変化</b>型。1単は <b>tengo</b>（-go のみで e→ie 変化は<b>起きない</b>）。3単は e→ie 変化で <b>tiene</b>（-go はつかない）。<br>⚠️ 1単で「tiengo」のように -go と語根変化を混ぜない。<br>💡 tener que＋不定詞「〜しなければならない」。Tengo que estudiar.（勉強しなければ）。<br>🔤 <b>tener</b>（持つ、ある、いる）：tengo / tienes / tiene / tenemos / tenéis / tienen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="conozco"></span>) a María, pero no (<span class="qz-b" data-a="sé"></span>) dónde vive. <span class="qz-hint">(conocer / saber)</span>',
            ja: '私はマリアを知っているが、彼女がどこに住んでいるかは知らない。',
            exp: '母音+cer の <b>conocer</b> は1単で c→zc となり <b>conozco</b>。<b>saber</b> は完全不規則で1単 <b>sé</b>（アクセント記号必須）。<br>⚠️ 意味の使い分けも：人・場所を体験的に「知っている」は conocer、事実・情報を「知っている」は saber。<br>💡 例：Conozco a María.「マリアと面識がある」/ Sé que María vive aquí.「マリアがここに住んでいると知っている」。<br>🔤 <b>conocer</b>（知っている＝体験・面識）：conozco / conoces / conoce / conocemos / conocéis / conocen<br>🔤 <b>saber</b>（知っている＝知識・技能）：sé / sabes / sabe / sabemos / sabéis / saben'
          },
          {
            t: 'En el restaurante yo (<span class="qz-b" data-a="pido"></span>) paella y mis amigos (<span class="qz-b" data-a="piden"></span>) tapas. <span class="qz-hint">(pedir)</span>',
            ja: 'レストランで私はパエリアを、友人たちはタパスを注文する。',
            exp: 'pedir は <b>e→i</b> 型（このタイプは ir 動詞のみ）。1単 <b>pido</b>・3複 <b>piden</b> と変化する。<br>⚠️ e→<u>ie</u> ではなく e→<u>i</u>（×piedo）。<br>💡 同じ e→i 型の仲間：servir（提供する）、repetir（繰り返す）、seguir（続ける）、vestir（着る）など、すべて -ir 動詞。<br>🔤 <b>pedir</b>（頼む、注文する）：pido / pides / pide / pedimos / pedís / piden'
          },
          {
            t: 'Yo siempre (<span class="qz-b" data-a="digo"></span>) la verdad, pero tú no (<span class="qz-b" data-a="dices"></span>) nada. <span class="qz-hint">(decir)</span>',
            ja: '私はいつも本当のことを言うが、君は何も言わない。',
            exp: 'decir は <b>-go ＋ e→i</b> 型。<b>例外的に1単でも e→i 変化</b>が起こり <b>digo</b>（×deco・×digo は誤り）。2単は <b>dices</b>。<br>⚠️ tener / venir（1単 tengo / vengo は語根変化<b>なし</b>）とは対照的なので要注意。<br>💡 decir que＋直説法「〜と言う」。Se dice que…「〜と言われている」もよく使う。<br>🔤 <b>decir</b>（言う、話す）：digo / dices / dice / decimos / decís / dicen'
          },
          {
            t: 'Mi hijo (<span class="qz-b" data-a="juega"></span>) al fútbol y nosotros (<span class="qz-b" data-a="jugamos"></span>) al tenis. <span class="qz-hint">(jugar)</span>',
            ja: '息子はサッカーを、私たちはテニスをする。',
            exp: 'jugar は <b>u→ue</b> 型（この型をとるのは jugar だけ）。3単 <b>juega</b> は変化、1複 <b>jugamos</b> は<b>変化しない</b>（×juegamos）。<br>💡 jugar a＋スポーツ名「〜をする」。jugar al fútbol / al tenis / al ajedrez（チェス）。<br>🔤 <b>jugar</b>（遊ぶ、スポーツをする）：juego / juegas / juega / jugamos / jugáis / juegan'
          },
          {
            t: 'Los domingos yo (<span class="qz-b" data-a="voy"></span>) al parque y mis padres (<span class="qz-b" data-a="van"></span>) a la iglesia. <span class="qz-hint">(ir)</span>',
            ja: '日曜日、私は公園へ、両親は教会へ行く。',
            exp: 'ir は<b>完全不規則</b>。1単 <b>voy</b>、3複 <b>van</b>。語幹が v- になり、不定詞 ir からは形を推測できない。<br>⚠️ パターンに頼らずそのまま暗記する動詞。<br>💡 ir a＋不定詞で「〜するつもり・〜しようとしている」（近接未来）。Voy a comer.「食べるつもりだ」。<br>🔤 <b>ir</b>（行く）：voy / vas / va / vamos / vais / van'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="entiendo"></span>) español, pero mis amigos no (<span class="qz-b" data-a="entienden"></span>) nada. <span class="qz-hint">(entender)</span>',
            ja: '私はスペイン語が分かるが、友人たちは全く分からない。',
            exp: 'entender は <b>e→ie</b> 型（語根母音変化）。1単 <b>entiendo</b>、3複 <b>entienden</b> と変化。<br>⚠️ ブーツ型：1複・2複はアクセントが語根に当たらないので<b>変化しない</b>（nosotros entendemos）。<br>💡 entender de「〜に詳しい」。Ella entiende de música.「彼女は音楽に詳しい」。<br>🔤 <b>entender</b>（理解する、わかる）：entiendo / entiendes / entiende / entendemos / entendéis / entienden'
          },
          {
            t: 'Vosotros (<span class="qz-b" data-a="entendéis"></span>) el problema, pero yo no (<span class="qz-b" data-a="entiendo"></span>) nada. <span class="qz-hint">(entender)</span>',
            ja: '君たちは問題が分かっているが、私には全く分からない。',
            exp: 'entender（e→ie型）の2複は <b>entendéis</b>（アクセントが語根に当たらず<b>変化しない</b>）。1単は <b>entiendo</b>（e→ie 変化）。<br>⚠️ 「entendéis」のアクセント記号（é）を忘れない。<br>💡 同じ e→ie 型の仲間：querer / pensar / volver（o→ue）/ poder（o→ue）。「ブーツ型」は1・2複だけが規則のまま、という共通ルール。<br>🔤 <b>entender</b>（理解する、わかる）：entiendo / entiendes / entiende / entendemos / entendéis / entienden'
          },
          {
            t: '¿Cuándo (<span class="qz-b" data-a="vuelves"></span>) a casa? — Nosotros (<span class="qz-b" data-a="volvemos"></span>) a las seis. <span class="qz-hint">(volver)</span>',
            ja: 'いつ家に帰るの？ — 私たちは6時に戻ります。',
            exp: 'volver は <b>o→ue</b> 型。2単 tú <b>vuelves</b>（変化）、1複 nosotros <b>volvemos</b>（<b>変化しない</b>、×vuelvemos）。<br>⚠️ 1複・2複はブーツ型の外なので語根変化なし。<br>💡 volver a＋不定詞「再び〜する」。Vuelvo a intentarlo.「もう一度やってみる」。<br>🔤 <b>volver</b>（戻る、帰る）：vuelvo / vuelves / vuelve / volvemos / volvéis / vuelven'
          },
          {
            t: 'Hoy ella (<span class="qz-b" data-a="vuelve"></span>) tarde del trabajo y sus hijos (<span class="qz-b" data-a="vuelven"></span>) del colegio. <span class="qz-hint">(volver)</span>',
            ja: '今日、彼女は仕事から遅く帰り、子供たちは学校から帰ってくる。',
            exp: 'volver（o→ue型）の3単 <b>vuelve</b>、3複 <b>vuelven</b>（ともにブーツ型内で変化）。<br>💡 3単・3複はブーツ型の内側なので語根変化あり。同じ o→ue 型：poder / recordar / dormir（-ir動詞）など。<br>📖 語句：trabajo「仕事」／colegio「学校・小中学校」<br>🔤 <b>volver</b>（戻る、帰る）：vuelvo / vuelves / vuelve / volvemos / volvéis / vuelven'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="pienso"></span>) que tienes razón, pero ellos (<span class="qz-b" data-a="piensan"></span>) lo contrario. <span class="qz-hint">(pensar)</span>',
            ja: '私は君が正しいと思うが、彼らは逆のことを思っている。',
            exp: 'pensar は <b>e→ie</b> 型。1単 <b>pienso</b>（×penseo）、3複 <b>piensan</b>。<br>⚠️ e→ie であって e→eo ではない（×penseo）。<br>💡 pensar＋不定詞「〜するつもり」、pensar en「〜について考える」、pensar que「〜と思う」。<br>📖 語句：tener razón「正しい・道理をわきまえている」／lo contrario「正反対のこと」<br>🔤 <b>pensar</b>（思う、考える）：pienso / piensas / piensa / pensamos / pensáis / piensan'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="pensamos"></span>) ir a la playa este fin de semana. <span class="qz-hint">(pensar)</span>',
            ja: '私たちは今週末ビーチに行くつもりだ。',
            exp: 'pensar（e→ie型）の1複は <b>pensamos</b>（語根変化<b>なし</b>）。pensar＋不定詞で「〜するつもり」。<br>⚠️ 「×piensamos」は誤り。ブーツ型の外は規則どおり。<br>💡 pensar＋不定詞は「意図・計画」を示す。Pensamos ir a la playa.「ビーチに行くつもりだ」のように1複が主語になる場面が多い。<br>📖 語句：playa「ビーチ」／fin de semana「週末」<br>🔤 <b>pensar</b>（思う、考える）：pienso / piensas / piensa / pensamos / pensáis / piensan'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="repito"></span>) la pregunta porque ellos no (<span class="qz-b" data-a="entienden"></span>). <span class="qz-hint">(repetir / entender)</span>',
            ja: '彼らが分からないので、私は質問を繰り返す。',
            exp: 'repetir は <b>e→i</b> 型（ir動詞のみ）。1単 <b>repito</b>（×repeto は誤り）。entender は e→ie型 → 3複 <b>entienden</b>。<br>⚠️ e→i（repetir）と e→ie（entender）を混同しない。<br>💡 見分け方：e→i は -ir 動詞のみ。entender は -er 動詞なので e→ie。動詞の語尾で区別できる。<br>📖 語句：pregunta「質問」／porque「なぜなら」<br>🔤 <b>repetir</b>（繰り返す、復唱する）：repito / repites / repite / repetimos / repetís / repiten<br>🔤 <b>entender</b>（理解する、わかる）：entiendo / entiendes / entiende / entendemos / entendéis / entienden'
          },
          {
            t: 'El camarero nos (<span class="qz-b" data-a="sirve"></span>) el café y nosotros (<span class="qz-b" data-a="pedimos"></span>) la cuenta. <span class="qz-hint">(servir / pedir)</span>',
            ja: 'ウェイターがコーヒーを持ってきて、私たちは会計を頼む。',
            exp: 'servir（e→i型、ir動詞）の3単 <b>sirve</b>。pedir（e→i型）の1複 <b>pedimos</b>（変化<b>なし</b>）。<br>⚠️ 1複はブーツ型の外なので pedimos（×pideimos は誤り）。<br>💡 servir de「〜として役立つ」、servir para「〜の目的に使える」。¿En qué le sirvo?「何かお役に立てますか？」は接客表現。<br>📖 語句：camarero「ウェイター」／café「コーヒー」／cuenta「勘定・会計」<br>🔤 <b>servir</b>（提供する、役立つ）：sirvo / sirves / sirve / servimos / servís / sirven<br>🔤 <b>pedir</b>（頼む、注文する）：pido / pides / pide / pedimos / pedís / piden'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="juego"></span>) al baloncesto y tú (<span class="qz-b" data-a="juegas"></span>) al béisbol. <span class="qz-hint">(jugar)</span>',
            ja: '私はバスケットボールをして、君は野球をする。',
            exp: 'jugar は <b>u→ue</b> 型（この型をとるのはjugarだけ）。1単 <b>juego</b>、2単 <b>juegas</b>（ともに変化）。<br>⚠️ u→ue 型は jugar のみ。他の動詞にこの変化はない。<br>💡 jugar a＋スポーツ名「〜をする」。juego al baloncesto / juegas al béisbol のように a＋定冠詞が必要。<br>📖 語句：baloncesto「バスケットボール」／béisbol「野球」<br>🔤 <b>jugar</b>（遊ぶ、スポーツをする）：juego / juegas / juega / jugamos / jugáis / juegan'
          },
          {
            t: 'Vosotros (<span class="qz-b" data-a="jugáis"></span>) al tenis todos los días, ¿verdad? <span class="qz-hint">(jugar)</span>',
            ja: '君たちは毎日テニスをするよね？',
            exp: 'jugar（u→ue型）の2複は <b>jugáis</b>（語根変化<b>なし</b>。×juegáis は誤り）。アクセント記号（á）に注意。<br>⚠️ 2複はブーツ型の外。jugáis が正解。<br>💡 -áis / -éis / -ís のアクセント記号は、アクセント規則上必要な場合がある。jugáis は規則上アクセント記号が必要（×jugais は誤り）。<br>🔤 <b>jugar</b>（遊ぶ、スポーツをする）：juego / juegas / juega / jugamos / jugáis / juegan'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="vengo"></span>) de la biblioteca y mi hermana (<span class="qz-b" data-a="viene"></span>) del supermercado. <span class="qz-hint">(venir)</span>',
            ja: '私は図書館から来て、姉はスーパーから来る。',
            exp: 'venir は <b>-go ＋ e→ie</b> 型。1単は -go のみで語根変化は起きず <b>vengo</b>（×viengo）。3単は e→ie 変化で <b>viene</b>（-go なし）。<br>⚠️ 1単で tener と同様「-go だけ」。語根変化との混合はしない。<br>💡 venir de「〜から来る・〜出身」。Vengo de Japón.「日本から来ました」。<br>📖 語句：biblioteca「図書館」／supermercado「スーパーマーケット」<br>🔤 <b>venir</b>（来る）：vengo / vienes / viene / venimos / venís / vienen'
          },
          {
            t: '¿De dónde (<span class="qz-b" data-a="vienen"></span>) ustedes? — (<span class="qz-b" data-a="Venimos"></span>) de Osaka. <span class="qz-hint">(venir)</span>',
            ja: 'あなた方はどちらから来たのですか？ — 大阪から来ました。',
            exp: 'venir の3複 <b>vienen</b>（e→ie 変化）、1複 <b>venimos</b>（変化<b>なし</b>）。<br>⚠️ ×vienimos は誤り。1複はブーツ型の外なので語根変化しない。<br>💡 ¿De dónde vienen ustedes?「どちらのご出身ですか？」は会話の定番。3複 vienen でポイントを押さえよう。<br>🔤 <b>venir</b>（来る）：vengo / vienes / viene / venimos / venís / vienen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="pongo"></span>) los libros en la mesa y tú (<span class="qz-b" data-a="pones"></span>) las sillas en orden. <span class="qz-hint">(poner)</span>',
            ja: '私は本を机に置き、君は椅子を整頓する。',
            exp: 'poner は純粋 <b>-go</b> 型（語根変化なし）。1単 <b>pongo</b>、2単 <b>pones</b>（2単以降は規則活用）。<br>💡 poner＋形容詞「（人を）〜な状態にする」。ponerse（再帰）「〜になる」。Esto me pone nervioso.「これで緊張する」。<br>📖 語句：mesa「机・テーブル」／silla「椅子」／en orden「整頓された・順に」<br>🔤 <b>poner</b>（置く、つける）：pongo / pones / pone / ponemos / ponéis / ponen'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="sale"></span>) de casa a las ocho y nosotros (<span class="qz-b" data-a="salimos"></span>) a las nueve. <span class="qz-hint">(salir)</span>',
            ja: '彼女は8時に家を出て、私たちは9時に出る。',
            exp: 'salir は純粋 <b>-go</b> 型。1単は salgo、3単は <b>sale</b>（規則）、1複 <b>salimos</b>（規則）。<br>⚠️ -go 型は1単のみ不規則。salgo 以外は通常の活用。<br>💡 salir de「〜を出る」、salir con「〜と出かける・付き合う」。<br>📖 語句：casa「家」<br>🔤 <b>salir</b>（出る、出発する）：salgo / sales / sale / salimos / salís / salen'
          },
          {
            t: 'Yo siempre (<span class="qz-b" data-a="hago"></span>) la cama por la mañana. ¿Y tú, qué (<span class="qz-b" data-a="haces"></span>)? <span class="qz-hint">(hacer)</span>',
            ja: '私はいつも朝ベッドメイキングをする。君は何をする？',
            exp: 'hacer は純粋 <b>-go</b> 型。1単 <b>hago</b>、2単 <b>haces</b>（規則）。<br>⚠️ hacer の2単は haces（×hages は誤り）。<br>💡 天気表現にも頻出：Hace frío/calor/sol/viento.「寒い／暑い／晴れ／風が強い」。hacer daño「傷つける」も重要。<br>📖 語句：hacer la cama「ベッドメイキングをする」／por la mañana「朝に」<br>🔤 <b>hacer</b>（する、作る）：hago / haces / hace / hacemos / hacéis / hacen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="traigo"></span>) el vino y Ana (<span class="qz-b" data-a="trae"></span>) el postre. <span class="qz-hint">(traer)</span>',
            ja: '私がワインを持ってきて、アナがデザートを持ってくる。',
            exp: 'traer は <b>-igo</b> 型。1単 <b>traigo</b>（caer → caigo と同じパターン）。3単 <b>trae</b>（規則）。<br>⚠️ traer の1単は traigo（-igo）。trago とは別語なので混同しない。<br>💡 traer（持ってくる＝話者のいる場所へ）⇔ llevar（持っていく＝話者のいない場所へ）。方向の対比に注意。<br>📖 語句：vino「ワイン」／postre「デザート」<br>🔤 <b>traer</b>（持ってくる、連れてくる）：traigo / traes / trae / traemos / traéis / traen'
          },
          {
            t: '¿(<span class="qz-b" data-a="Oyes"></span>) la música? — Sí, yo (<span class="qz-b" data-a="oigo"></span>) perfectamente. <span class="qz-hint">(oír)</span>',
            ja: '音楽が聴こえる？ — うん、完璧に聞こえるよ。',
            exp: 'oír は特殊な -go 型。2単 <b>oyes</b>（e の前に y が入る）、1単 <b>oigo</b>（-go 型）。<br>⚠️ oír の2単・3単・3複は e の前に y が挿入（oyes / oye / oyen）。<br>💡 oír（聞こえる＝自然に耳に入る）⇔ escuchar（聴く＝意識的に注意を向ける）。¿Oyes eso?「あれ聞こえる？」/ Escucha bien.「よく聴いて」。<br>📖 語句：música「音楽」／perfectamente「完璧に」<br>🔤 <b>oír</b>（聞こえる、聴く）：oigo / oyes / oye / oímos / oís / oyen'
          },
          {
            t: 'Todos (<span class="qz-b" data-a="oyen"></span>) la conferencia con atención. <span class="qz-hint">(oír)</span>',
            ja: 'みんなが講義を注意深く聴いている。',
            exp: 'oír の3複 <b>oyen</b>（o→y 挿入パターン。ブーツ型内で変化）。<br>⚠️ oyen のスペルに注意（×oíen は誤り）。<br>💡 oír の変化まとめ：語幹の oi- の後に e/a が続くとき y が挿入される（oyes / oye / oyen）。1複・2複は oi＋mos/s で y 不要（oímos / oís）。<br>📖 語句：conferencia「講演・講義」／con atención「注意深く」<br>🔤 <b>oír</b>（聞こえる、聴く）：oigo / oyes / oye / oímos / oís / oyen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="conozco"></span>) la ciudad de Sevilla, pero no (<span class="qz-b" data-a="sé"></span>) hablar andaluz. <span class="qz-hint">(conocer / saber)</span>',
            ja: '私はセビリアという町を知っているが、アンダルシア方言は話せない。',
            exp: '<b>conocer</b>（母音+cer型）の1単 <b>conozco</b>（c→zc）。<b>saber</b>（完全不規則）の1単 <b>sé</b>。saber＋不定詞で「〜できる」。<br>⚠️ sé のアクセント記号は必須（se「〜自身」との区別）。<br>💡 「スペイン語を知っている」の言い分け：Conozco España.「スペインに行ったことがある（体験）」/ Sé español.「スペイン語ができる（習得）」。<br>📖 語句：andaluz「アンダルシア（方言）の」<br>🔤 <b>conocer</b>（知っている＝体験・面識）：conozco / conoces / conoce / conocemos / conocéis / conocen<br>🔤 <b>saber</b>（知っている＝知識・技能）：sé / sabes / sabe / sabemos / sabéis / saben'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="parece"></span>) simpática, pero yo no la (<span class="qz-b" data-a="conozco"></span>) bien. <span class="qz-hint">(parecer / conocer)</span>',
            ja: '彼女は感じがよさそうだが、私は彼女をよく知らない。',
            exp: 'parecer（母音+cer型）の3単 <b>parece</b>（1単のみ parezco、他は規則活用）。conocer の1単 <b>conozco</b>（ここは否定なので no … conozco）。<br>⚠️ -zco 型は1単のみ不規則。3単は規則活用の parece。<br>💡 parecer＋形容詞「〜のようだ」。parecerse a「〜に似ている」。Me parece bien.「いいと思います」も頻出。<br>📖 語句：simpático「感じのいい・好感のもてる」<br>🔤 <b>parecer</b>（〜に見える、思われる）：parezco / pareces / parece / parecemos / parecéis / parecen<br>🔤 <b>conocer</b>（知っている＝体験・面識）：conozco / conoces / conoce / conocemos / conocéis / conocen'
          },
          {
            t: 'Mi empresa (<span class="qz-b" data-a="produce"></span>) coches eléctricos. <span class="qz-hint">(producir)</span>',
            ja: '私の会社は電気自動車を生産している。',
            exp: 'producir（母音+cir型）も -zco 型。1単は produzco だが、3単は <b>produce</b>（規則活用）。<br>⚠️ -zco 型の変化は1単のみ。他の人称は規則活用。<br>💡 同じ -ducir 型の仲間：conducir（運転する→conduzco）、traducir（翻訳する→traduzco）、reducir（減らす→reduzco）。すべて1単 -zco。<br>📖 語句：empresa「会社・企業」／eléctrico「電気の・電動の」<br>🔤 <b>producir</b>（生産する、製造する）：produzco / produces / produce / producimos / producís / producen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="doy"></span>) las gracias a mis profesores y les (<span class="qz-b" data-a="doy"></span>) un regalo. <span class="qz-hint">(dar)</span>',
            ja: '私は先生方にお礼を言い、プレゼントを渡す。',
            exp: 'dar は完全不規則。1単 <b>doy</b>（-oy で終わる）。2単以降は das / da / damos / dais / dan（アクセント記号なし）。<br>⚠️ dar の1単は doy（×dao・×do は誤り）。<br>💡 dar＋名詞の重要熟語：dar las gracias「礼を言う」、dar un paseo「散歩する」、dar miedo「怖がらせる」、darse cuenta「気づく」。<br>📖 語句：dar las gracias「お礼を言う」／regalo「プレゼント・贈り物」<br>🔤 <b>dar</b>（与える、あげる）：doy / das / da / damos / dais / dan'
          },
          {
            t: '¿(<span class="qz-b" data-a="Ves"></span>) aquel edificio? Yo (<span class="qz-b" data-a="veo"></span>) la montaña detrás de él. <span class="qz-hint">(ver)</span>',
            ja: 'あの建物が見えますか？私はその後ろに山が見えます。',
            exp: 'ver は完全不規則。2単 <b>ves</b>（アクセント記号なし）、1単 <b>veo</b>。<br>⚠️ ver の活用は veo / ves / ve / vemos / veis / ven（アクセント記号不要）。<br>💡 ver（見える＝自然に目に入る）⇔ mirar（見る＝意識的に目を向ける）。¿Ves eso?「あれ見える？」/ Mira esto.「これを見て」。<br>📖 語句：edificio「建物」／montaña「山」／detrás de「〜の後ろに」<br>🔤 <b>ver</b>（見る、見える）：veo / ves / ve / vemos / veis / ven'
          },
          {
            t: 'Los estudiantes (<span class="qz-b" data-a="construyen"></span>) maquetas en clase y yo (<span class="qz-b" data-a="construyo"></span>) la mía en casa. <span class="qz-hint">(construir)</span>',
            ja: '学生たちは授業で模型を作り、私は家で自分のものを作る。',
            exp: 'construir は <b>-uir</b> 型（y 挿入）。3複 <b>construyen</b>、1単 <b>construyo</b>（ともに y 挿入）。1複・2複は y 挿入なし（construimos / construís）。<br>⚠️ 1複・2複に y は入らない。<br>💡 同じ -uir 型の仲間：incluir（含む→incluyo）、distribuir（配布する→distribuyo）、destruir（破壊する→destruyo）、huir（逃げる→huyo）。<br>📖 語句：maqueta「模型・マケット」<br>🔤 <b>construir</b>（建てる、建設する）：construyo / construyes / construye / construimos / construís / construyen'
          },
          {
            t: 'El río (<span class="qz-b" data-a="huye"></span>) hacia el mar y el tiempo (<span class="qz-b" data-a="huye"></span>) sin parar. <span class="qz-hint">(huir)</span>',
            ja: '川は海へと流れ、時間は止まらずに過ぎていく。',
            exp: 'huir は -uir 型（construir と同様）。3単 <b>huye</b>（y 挿入）。<br>💡 huir de「〜から逃げる」。El ladrón huye de la policía.「泥棒が警察から逃げる」のように前置詞 de と共に使うことが多い。<br>📖 語句：río「川」／hacia「〜に向かって」／sin parar「止まらずに」<br>🔤 <b>huir</b>（逃げる、逃亡する）：huyo / huyes / huye / huimos / huís / huyen'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="sé"></span>) nadar, pero no (<span class="qz-b" data-a="sé"></span>) esquiar. <span class="qz-hint">(saber)</span>',
            ja: '私は泳げるが、スキーはできない。',
            exp: 'saber（完全不規則）の1単 <b>sé</b>（アクセント記号必須）。saber＋不定詞で「〜できる」（学習によって得た技能）。<br>⚠️ sé のアクセントを忘れずに。se（再帰代名詞）との区別のためにも必要。<br>💡 saber（学習・習得した能力）⇔ poder（身体的・状況的に可能）。Sé nadar.「泳げる（習得済み）」/ No puedo nadar hoy porque estoy cansado.「今日は疲れていて泳げない（状況）」。<br>📖 語句：nadar「泳ぐ」／esquiar「スキーをする」<br>🔤 <b>saber</b>（知っている＝知識・技能）：sé / sabes / sabe / sabemos / sabéis / saben'
          },
          {
            t: '¿Cuánto (<span class="qz-b" data-a="valen"></span>) estas entradas? — No (<span class="qz-b" data-a="sé"></span>). <span class="qz-hint">(valer / saber)</span>',
            ja: 'これらのチケットはいくらしますか？ — 知りません。',
            exp: 'valer（純粋-go型）の3複 <b>valen</b>（1単は valgo のみ不規則）。saber の1単 <b>sé</b>。<br>⚠️ valer の3複は規則活用 valen（-go は1単のみ）。<br>💡 ¿Cuánto vale(n)?「いくらですか？」は値段を聞く定番表現。Vale.（スペインのくだけた口語）「OK・了解」の意味でも使う。<br>📖 語句：entrada「チケット・入場券」／cuánto「いくら・どのくらい」<br>🔤 <b>valer</b>（〜の価値がある、値する）：valgo / vales / vale / valemos / valéis / valen<br>🔤 <b>saber</b>（知っている＝知識・技能）：sé / sabes / sabe / sabemos / sabéis / saben'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="hacemos"></span>) la tarea juntos y luego (<span class="qz-b" data-a="salimos"></span>) a cenar. <span class="qz-hint">(hacer / salir)</span>',
            ja: '私たちは一緒に宿題をして、それから夕食に出かける。',
            exp: 'hacer（-go型）の1複 <b>hacemos</b>（規則）、salir（-go型）の1複 <b>salimos</b>（規則）。<br>⚠️ -go 型は1単のみ不規則。1複は通常の活用（hacemos / salimos）。<br>💡 -go 型の共通ルール：1単だけ -go（hago / salgo / pongo / tengo / vengo / traigo）、それ以外は規則活用。まず1単の形を覚えてしまえば他の人称は迷わない。<br>📖 語句：tarea「宿題・課題」／juntos「一緒に」／luego「それから・後で」／cenar「夕食を食べる」<br>🔤 <b>hacer</b>（する、作る）：hago / haces / hace / hacemos / hacéis / hacen<br>🔤 <b>salir</b>（出る、出発する）：salgo / sales / sale / salimos / salís / salen'
          },
          {
            t: '¿A qué hora (<span class="qz-b" data-a="vais"></span>) vosotros al gimnasio? — (<span class="qz-b" data-a="Vamos"></span>) a las cinco de la tarde. <span class="qz-hint">(ir)</span>',
            ja: '君たちは何時にジムに行くの？ — 午後5時に行くよ。',
            exp: 'ir（完全不規則）の2複 <b>vais</b>、1複 <b>vamos</b>。<br>⚠️ vamos は「行こう（勧誘）」にも使われる。<br>💡 ir の全活用（voy/vas/va/vamos/vais/van）は暗記必須。ir a＋不定詞（近接未来）でも毎回使うので最優先で定着させたい動詞。<br>📖 語句：gimnasio「ジム・体育館」／tarde「午後」<br>🔤 <b>ir</b>（行く）：voy / vas / va / vamos / vais / van'
          },
          {
            t: 'Mi abuela (<span class="qz-b" data-a="recuerda"></span>) todo y nunca (<span class="qz-b" data-a="olvida"></span>) nada. <span class="qz-hint">(recordar / olvidar)</span>',
            ja: '祖母は何でも覚えていて、何も忘れない。',
            exp: 'recordar は <b>o→ue</b> 型（volver と同類）。3単 <b>recuerda</b>（変化）。olvidar は規則動詞 → <b>olvida</b>（規則）。<br>⚠️ recordar を記憶して。語根母音変化（o→ue）。<br>💡 recordar＋不定詞「〜することを覚えている」、recordar que「〜ということを覚えている」。olvidar は規則活用なので語根変化なし。<br>📖 語句：abuela「祖母」／nunca「決して〜ない」／olvidar「忘れる」<br>🔤 <b>recordar</b>（覚えている、思い出す）：recuerdo / recuerdas / recuerda / recordamos / recordáis / recuerdan<br>🔤 <b>olvidar</b>（忘れる・規則活用）：olvido / olvidas / olvida / olvidamos / olvidáis / olvidan'
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
  } // end if


  /* ── 一列 Lección 5 予想問題（不定詞・現在分詞・過去分詞・現在完了・再帰動詞）──
     接地：Spanish1_lesson5.html の例文・活用表・語彙リスト
     （不定詞の4用法・現在分詞の規則形/不規則形/4用法・過去分詞の規則形/不規則形/4用法・
      現在完了（haber 活用・4用法）・再帰動詞（再帰代名詞・8用法）） */
  QUIZ_DATA['Spanish1_lesson5.html'] = {
    adminOnly: true,
    title: 'Lección 5 小テスト（予想問題）',
    intro: 'この課の文法事項（不定詞・現在分詞・過去分詞・現在完了・再帰動詞）からの予想問題です。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '1. 不定詞',
        instruction: '（&nbsp;）内の動詞を不定詞のまま使うか、文脈に合う形に変えて空所を埋めなさい。',
        items: [
          {
            t: '<b>Vivir</b> es (<span class="qz-b" data-a="comer"></span>). <span class="qz-hint">(comer)</span>',
            ja: '生きることとは食べることである。',
            exp: '解説ページの例文そのまま。不定詞は<b>名詞として主語・述語</b>になれる。<b>comer</b>（食べること）が述語名詞として機能している。<br>⚠️ 不定詞は活用させない。come / comemos などとしない。<br>📖 語句：vivir「生きる・住む」／comer「食べる」'
          },
          {
            t: 'Mi abuelo siempre reza antes de (<span class="qz-b" data-a="comer"></span>). <span class="qz-hint">(comer)</span>',
            ja: '私の祖父は食べる前にいつもお祈りをする。',
            exp: '前置詞 <b>de</b> の後には<b>不定詞</b>が来る。antes de comer「食べる前に」。<br>⚠️ 前置詞の後には不定詞（原形）を置く。comiendo（現在分詞）とは違う。<br>📖 語句：abuelo「祖父」／siempre「いつも」／rezar「祈る」／antes de「〜の前に」'
          },
          {
            t: 'Nos gusta (<span class="qz-b" data-a="escuchar"></span>) programas de música en la radio. <span class="qz-hint">(escuchar)</span>',
            ja: '私たちはラジオで音楽番組を聴くのが好きだ。',
            exp: 'gustar 型動詞の主語が不定詞の場合、動詞は<b>3人称単数形</b>になる。gusta の主語は escuchar（不定詞）。不定詞は活用しない。<br>⚠️ 「私たちが好きな行為（聴くこと）」が主語なので gustan ではなく <b>gusta</b>。<br>📖 語句：escuchar「聴く」／programa「番組」／radio「ラジオ」'
          },
          {
            t: 'No sabemos (<span class="qz-b" data-a="cómo economizar"></span>) en los gastos. <span class="qz-hint">(cómo, economizar)</span>',
            ja: '私たちはコストをどのように節約すべきか分かりません。',
            exp: '解説ページの例文そのまま。<b>疑問詞 + 不定詞</b>で「〜すべきか・〜できるか」の意味になる（義務・可能性）。cómo economizar「どのように節約すべきか」。<br>⚠️ sabemos の後に疑問詞 cómo を入れてから不定詞。cómo は方法を問う疑問詞。<br>📖 語句：saber「知っている・〜できる」／economizar「節約する」／gastos「費用・出費」'
          },
          {
            t: 'Veo a Francisco (<span class="qz-b" data-a="bailar"></span>) con Ángela. <span class="qz-hint">(bailar)</span>',
            ja: '私はフランシスコがアンヘラと踊るのを見る。',
            exp: '知覚動詞 <b>ver + 不定詞</b>で「A が B するのを見る」（目的格補語）。bailar は<b>一回限りの動作</b>（不定詞）として見る。<br>⚠️ bailando（現在分詞）なら「踊っているところを見る（進行中を強調）」。bailar なら動作そのものを見る。<br>📖 語句：ver「見る」／bailar「踊る」'
          },
          {
            t: 'Mis padres siempre me (<span class="qz-b" data-a="hacen limpiar"></span>) el baño. <span class="qz-hint">(hacer, limpiar)</span>',
            ja: '私の両親はいつも私に浴室を掃除させる。',
            exp: '解説ページの例文そのまま。<b>hacer + 不定詞</b>で強制使役「（人に）〜させる」。me は間接目的格（limpiar が他動詞なので A は間接目的語）。<br>⚠️ dejar ではなく hacer（強制）。limpiar を活用させない。<br>📖 語句：padres「両親」／limpiar「掃除する」／baño「浴室」'
          },
          {
            t: 'Mis padres no me (<span class="qz-b" data-a="dejan salir"></span>) por la noche. <span class="qz-hint">(dejar, salir)</span>',
            ja: '私の両親は夜間私を外出させてくれない。',
            exp: '解説ページの例文そのまま。<b>dejar + 不定詞</b>で放任使役「〜することを許す（許さない）」。me は直接目的格（salir が自動詞なので A は直接目的語）。<br>⚠️ hacer ではなく dejar（放任・許可）。hacer limpiar と dejar salir の使い分けに注意。<br>📖 語句：dejar「許す・放置する」／salir「出かける」／por la noche「夜間・夜に」'
          },
          {
            t: '<b>Hay que</b> trabajar para (<span class="qz-b" data-a="vivir"></span>). <span class="qz-hint">(vivir)</span>',
            ja: '生きるためには働かなくてはならない。',
            exp: '解説ページの例文そのまま。<b>para + 不定詞</b>で「〜するために」（目的）。前置詞 para の後は不定詞。<br>⚠️ para は目的を表す前置詞。その後には必ず不定詞（原形）。vivimos などと活用しない。<br>📖 語句：trabajar「働く」／para「〜のために」／vivir「生きる」'
          }
        ]
      },
      {
        heading: '2. 現在分詞：形と用法',
        instruction: '（&nbsp;）内の動詞を現在分詞にして空所を埋めなさい。',
        items: [
          {
            t: 'Mi padre siempre desayuna (<span class="qz-b" data-a="leyendo"></span>) el periódico. <span class="qz-hint">(leer)</span>',
            ja: '私の父はいつも新聞を読みながら朝食をとる。',
            exp: '解説ページの例文そのまま。<b>副詞的用法（同時並行：〜しながら）</b>。leer は語根が母音（e）で終わる -er 動詞なので <b>-yendo</b> → <b>leyendo</b>（不規則形）。<br>⚠️ leiendo とはならない（i → y に変化）。<br>📖 語句：desayunar「朝食をとる」／periódico「新聞」'
          },
          {
            t: 'Nosotros aprendemos otras culturas (<span class="qz-b" data-a="viajando"></span>) por los países extranjeros. <span class="qz-hint">(viajar)</span>',
            ja: '私たちは外国を旅することで異文化を学ぶ。',
            exp: '解説ページの例文そのまま。<b>副詞的用法（手段・理由）</b>。viajar は規則 -ar 動詞 → -ando → <b>viajando</b>。<br>⚠️ viajando の スペルに注意（viajiendo などとしない）。<br>📖 語句：aprender「学ぶ」／cultura「文化」／viajar「旅行する」／extranjero「外国の」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Sigues"></span>) (<span class="qz-b" data-a="trabajando"></span>) en la misma empresa? <span class="qz-hint">(seguir / trabajar)</span>',
            ja: '君は同じ企業で働き続けているの？',
            exp: '解説ページの例文そのまま。<b>seguir + 現在分詞</b>で「〜し続ける」。seguir は e→i 型の活用（2単 <b>sigues</b>）。trabajar の現在分詞は規則形 <b>trabajando</b>。<br>⚠️ seguir は e→i 型（×siegues は誤り）。sigues が正解。<br>📖 語句：seguir「続ける」／trabajar「働く」／empresa「会社・企業」'
          },
          {
            t: 'Llevamos tres años (<span class="qz-b" data-a="viviendo"></span>) en esta ciudad. <span class="qz-hint">(vivir)</span>',
            ja: '私たちはこの街に住み続けて3年になる。',
            exp: '解説ページの例文そのまま。<b>llevar + 時間 + 現在分詞</b>で「〜し続けて○○の期間になる」。vivir は規則 -ir 動詞 → -iendo → <b>viviendo</b>。<br>⚠️ 「tres años」が期間。現在分詞に性数変化はない。<br>📖 語句：llevar「かかる・経過する」／vivir「住む」／ciudad「街・都市」'
          },
          {
            t: 'El precio (<span class="qz-b" data-a="va subiendo"></span>) poco a poco. <span class="qz-hint">(ir / subir)</span>',
            ja: '価格が少しずつ上がっていく。',
            exp: '解説ページの例文そのまま。<b>ir + 現在分詞</b>で「（だんだん）〜していく」。ir の3単 <b>va</b>、subir の現在分詞は規則形 <b>subiendo</b>。<br>⚠️ ir を活用すること（主語 el precio → 3単 va）。subiendo は形が変わらない。<br>📖 語句：precio「価格」／subir「上がる・登る」／poco a poco「少しずつ」'
          },
          {
            t: 'Lo (<span class="qz-b" data-a="estoy leyendo"></span>). <span class="qz-hint">(estar / leer)</span>',
            ja: '私がそれを読んでいるところだよ。',
            exp: '解説ページの例文そのまま。<b>estar + 現在分詞</b>（現在進行形）。estar の1単 <b>estoy</b>、leer の現在分詞は不規則形 <b>leyendo</b>。直接目的格代名詞 lo は estar の前に置く（または leyéndolo と結合も可）。<br>⚠️ leer → leyendo（語根母音が母音で終わる -er 動詞は -yendo）。leiendo は誤り。<br>📖 語句：estar「〜している（進行）」／leer「読む」'
          },
          {
            t: 'Veo a Francisco (<span class="qz-b" data-a="bailando"></span>) con Ángela. <span class="qz-hint">(bailar)</span>',
            ja: '私はフランシスコがアンヘラと踊っているところを見る。',
            exp: '<b>知覚動詞 ver + 現在分詞</b>で「踊っているところ（進行中）を見る」。bailar は規則 -ar 動詞 → <b>bailando</b>。<br>⚠️ 不定詞 bailar と現在分詞 bailando の意味の差：不定詞「踊る（動作）を見る」、現在分詞「踊っている（進行中）を見る」。<br>📖 語句：ver「見る」／bailar「踊る」'
          }
        ]
      },
      {
        heading: '3. 現在分詞の不規則形',
        instruction: '（&nbsp;）内の動詞を現在分詞にして空所を埋めなさい。',
        items: [
          {
            t: 'El ladrón está (<span class="qz-b" data-a="huyendo"></span>) de la policía. <span class="qz-hint">(huir)</span>',
            ja: '泥棒は警察から逃げているところだ。',
            exp: 'huir は語根が母音（u）で終わる -ir 動詞 → <b>-yendo</b> → <b>huyendo</b>（不規則形①）。<br>⚠️ huiendo とはならない（-i が -y に変化）。<br>📖 語句：ladrón「泥棒」／huir「逃げる」／policía「警察」'
          },
          {
            t: 'La niña está (<span class="qz-b" data-a="pidiendo"></span>) un helado. <span class="qz-hint">(pedir)</span>',
            ja: '女の子はアイスクリームをねだっている。',
            exp: 'pedir は語根母音変化 -ir 動詞（e→i）。現在分詞でも同様に e→i 変化 → <b>pidiendo</b>（不規則形②）。<br>⚠️ pediendo とはならない（e→i 変化が起きる）。<br>📖 語句：niña「女の子」／pedir「頼む・ねだる」／helado「アイスクリーム」'
          },
          {
            t: 'El bebé lleva dos horas (<span class="qz-b" data-a="durmiendo"></span>). <span class="qz-hint">(dormir)</span>',
            ja: '赤ちゃんはもう2時間眠り続けている。',
            exp: 'dormir は o→u 型の -ir 動詞。現在分詞でも o→u 変化 → <b>durmiendo</b>（不規則形②）。<br>⚠️ dormiendo とはならない（o→u 変化が起きる）。<br>📖 語句：bebé「赤ちゃん」／dormir「眠る」'
          },
          {
            t: 'María está (<span class="qz-b" data-a="diciendo"></span>) la verdad. <span class="qz-hint">(decir)</span>',
            ja: 'マリアは本当のことを言っているところだ。',
            exp: 'decir は現在分詞でも e→i 変化 → <b>diciendo</b>（不規則形②。decir は語根母音変化動詞ではないが同様の変化）。<br>⚠️ deciendo とはならない（e→i 変化が起きる）。<br>📖 語句：decir「言う」／verdad「真実・本当のこと」'
          },
          {
            t: '¿Oyes a Juan (<span class="qz-b" data-a="cantando"></span>) en el baño? <span class="qz-hint">(cantar)</span>',
            ja: 'フアンが浴室で歌っているのが聞こえる？',
            exp: '<b>知覚動詞 oír + 現在分詞</b>（進行中を強調）。cantar は規則 -ar 動詞 → <b>cantando</b>。<br>⚠️ 規則 -ar 動詞の現在分詞は -ando。cantando は規則形なので変化はない。<br>📖 語句：oír「聞こえる」／cantar「歌う」／baño「浴室」'
          },
          {
            t: 'Mi hermano sigue (<span class="qz-b" data-a="viniendo"></span>) a casa todos los fines de semana. <span class="qz-hint">(venir)</span>',
            ja: '私の兄は毎週末ずっと家に来続けている。',
            exp: 'venir は e→i 型の不規則現在分詞 → <b>viniendo</b>（不規則形②）。seguir + 現在分詞「〜し続ける」。<br>⚠️ veniendo とはならない（e→i 変化）。<br>📖 語句：hermano「兄弟」／venir「来る」／fin de semana「週末」'
          },
          {
            t: 'Elena está (<span class="qz-b" data-a="oyendo"></span>) música clásica. <span class="qz-hint">(oír)</span>',
            ja: 'エレナはクラシック音楽を聴いているところだ。',
            exp: 'oír は語根が母音（o）で終わる -ir 動詞 → <b>-yendo</b> → <b>oyendo</b>（不規則形①）。<br>⚠️ oiendo とはならない（-i が -y に変化）。caer→cayendo と同じパターン。<br>📖 語句：oír「聞こえる・聴く」／música clásica「クラシック音楽」'
          }
        ]
      },
      {
        heading: '4. 過去分詞：形と用法',
        instruction: '（&nbsp;）内の動詞を過去分詞の適切な形にして空所を埋めなさい（形容詞として使う場合は修飾対象に性数一致させること）。',
        items: [
          {
            t: 'Ese profesor (<span class="qz-b" data-a="es admirado"></span>) por sus alumnos. <span class="qz-hint">(ser / admirar)</span>',
            ja: 'その先生は教え子たちに尊敬される。',
            exp: '解説ページの例文そのまま。<b>ser + 過去分詞</b>（受身の動作）。admirar の規則過去分詞は <b>admirado</b>。主語 ese profesor（男性単数）に一致。<br>⚠️ estar + 過去分詞（結果の状態）との違いに注意。ser = 受身の出来事。<br>📖 語句：profesor「先生（男性）」／admirar「尊敬する」／alumno「生徒」'
          },
          {
            t: 'Esas ruinas (<span class="qz-b" data-a="están destruidas"></span>) por los terroristas. <span class="qz-hint">(estar / destruir)</span>',
            ja: 'その遺跡はテロリストたちによって破壊されてしまっている。',
            exp: '解説ページの例文そのまま。<b>estar + 過去分詞</b>（結果の現状）。destruir の過去分詞は <b>destruido</b> → 主語 esas ruinas（女性複数）に一致して <b>destruidas</b>。<br>⚠️ ser + 過去分詞（受身の動作）との違い。estar = 破壊されてしまった状態が現在も続いている。<br>📖 語句：ruinas「遺跡」／destruir「破壊する」／terrorista「テロリスト」'
          },
          {
            t: 'Veo a Teresa muy (<span class="qz-b" data-a="cansada"></span>). <span class="qz-hint">(cansar)</span>',
            ja: '私はテレサがとても疲れているように見える。',
            exp: '解説ページの例文そのまま。<b>知覚動詞 ver + 過去分詞</b>（目的格補語）。cansar の規則過去分詞 cansado → Teresa（女性単数）に一致して <b>cansada</b>。<br>⚠️ 知覚動詞 + 過去分詞では過去分詞が形容詞として目的語に一致する。<br>📖 語句：ver「見る」／cansar「疲れさせる」／cansado「疲れた」'
          },
          {
            t: 'Es un profesor (<span class="qz-b" data-a="admirado"></span>). <span class="qz-hint">(admirar)</span>',
            ja: 'ある尊敬された（男性の）先生だ。',
            exp: '過去分詞が<b>名詞を修飾する形容詞</b>として使われている。admirar → <b>admirado</b>。主語 profesor（男性単数）に一致して -o のまま。<br>⚠️ 過去分詞を形容詞として使う場合は性数一致が必要（ここは男性単数 → -ado）。<br>📖 語句：admirar「尊敬する」'
          },
          {
            t: 'La ventana (<span class="qz-b" data-a="está abierta"></span>). <span class="qz-hint">(estar / abrir)</span>',
            ja: 'その窓は開いている（開いた状態だ）。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。abrir の不規則過去分詞は <b>abierto</b>。主語 la ventana（女性単数）に一致して <b>abierta</b>。<br>⚠️ abrir の過去分詞は不規則形 abierto（×abrido は誤り）。estar を使うのは「開いている状態」（結果）だから。<br>📖 語句：ventana「窓」／abrir「開ける」'
          },
          {
            t: 'Los libros de la biblioteca (<span class="qz-b" data-a="están escritos"></span>) en varios idiomas. <span class="qz-hint">(estar / escribir)</span>',
            ja: '図書館の本たちは様々な言語で書かれている。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。escribir の不規則過去分詞は <b>escrito</b>。主語 los libros（男性複数）に一致して <b>escritos</b>。<br>⚠️ escribir の過去分詞は不規則形 escrito（×escribido は誤り）。複数形 escritos を忘れずに。<br>📖 語句：biblioteca「図書館」／escribir「書く」／idioma「言語」／varios「様々な」'
          },
          {
            t: 'El problema (<span class="qz-b" data-a="está resuelto"></span>). <span class="qz-hint">(estar / resolver)</span>',
            ja: 'その問題は解決されている（解決済みだ）。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。resolver の不規則過去分詞は <b>resuelto</b>。主語 el problema（男性単数）に一致して -o のまま。<br>⚠️ resolver → resuelto（不規則形。×resolvido・×resolvido は誤り）。<br>📖 語句：problema「問題」／resolver「解決する」'
          },
          {
            t: 'Ellos comen el arroz al curry (<span class="qz-b" data-a="sudados"></span>) los sábados. <span class="qz-hint">(sudar)</span>',
            ja: '彼らは毎週土曜日に汗をかいてカレーライスを食べる。',
            exp: '解説ページの例文そのまま。過去分詞が<b>主格補語</b>として主語の状態を表す。sudar の規則過去分詞 sudado → 主語 ellos（男性複数）に一致して <b>sudados</b>。<br>⚠️ 主格補語として使う場合も性数一致が必要。<br>📖 語句：sudar「汗をかく」／arroz al curry「カレーライス」／los sábados「毎週土曜日」'
          }
        ]
      },
      {
        heading: '5. 現在完了',
        instruction: '（&nbsp;）内の動詞を現在完了形にして空所を埋めなさい。haber の活用形と過去分詞の両方が必要な場合は2語で答えること。',
        items: [
          {
            t: '¿Dónde está mi flan? — Lo siento. Yo lo (<span class="qz-b" data-a="he comido"></span>). <span class="qz-hint">(comer)</span>',
            ja: '私のプリンはどこ？ — ごめんね。僕がそれを食べちゃったんだ。',
            exp: '解説ページの例文そのまま。<b>現在完了（完了）</b>。haber の1単 <b>he</b> + comer の過去分詞 <b>comido</b>。<br>⚠️ 現在完了の過去分詞は性数変化しない（常に -o 形）。<br>📖 語句：flan「プリン」／lo siento「ごめんなさい」／comer「食べる」'
          },
          {
            t: '¿Ya (<span class="qz-b" data-a="habéis hecho"></span>) la tarea? <span class="qz-hint">(hacer)</span>',
            ja: '君たちもう宿題はしたの？',
            exp: '解説ページの例文そのまま。<b>現在完了（完了）</b>。haber の2複 <b>habéis</b> + hacer の不規則過去分詞 <b>hecho</b>。<br>⚠️ hacer の過去分詞は不規則形 hecho（×hacido は誤り）。habéis のアクセント記号も必須。<br>📖 語句：ya「もう・すでに」／hacer「する」／tarea「宿題・課題」'
          },
          {
            t: 'David (<span class="qz-b" data-a="ha jugado"></span>) en un equipo profesional. <span class="qz-hint">(jugar)</span>',
            ja: 'ダビドはプロチームでプレーしたことがある。',
            exp: '解説ページの例文そのまま。<b>現在完了（経験）</b>。haber の3単 <b>ha</b> + jugar の規則過去分詞 <b>jugado</b>。<br>⚠️ jugar は -ar 動詞なので過去分詞は -ado（規則形）。ha jugado で「プレーしたことがある」。<br>📖 語句：jugar「プレーする」／equipo「チーム」／profesional「プロの」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Ha estado"></span>) usted en Perú alguna vez? <span class="qz-hint">(estar)</span>',
            ja: 'あなたは今までにペルーに行ったことがありますか？',
            exp: '解説ページの例文そのまま。<b>現在完了（経験）</b>。usted の haber は3単 <b>ha</b> + estar の規則過去分詞 <b>estado</b>。<br>⚠️ alguna vez「今までに・かつて」は経験用法の典型的な副詞。<br>📖 語句：estar「いる・〜の状態だ」／alguna vez「かつて・今までに」'
          },
          {
            t: 'Ella no (<span class="qz-b" data-a="ha llegado"></span>) tarde a clase ninguna vez. <span class="qz-hint">(llegar)</span>',
            ja: '彼女は一度も授業に遅刻したことがない。',
            exp: '解説ページの例文そのまま。<b>現在完了（経験の否定）</b>。haber の3単 <b>ha</b> + llegar の規則過去分詞 <b>llegado</b>。ninguna vez「一度も〜ない」。<br>⚠️ no … ninguna vez は二重否定ではなく強調の否定。llegar は -ar 動詞 → -ado（規則形）。<br>📖 語句：llegar「到着する」／tarde「遅く」／ninguna vez「一度も〜ない」'
          },
          {
            t: 'La robótica de este país (<span class="qz-b" data-a="ha avanzado"></span>) constantemente hasta ahora. <span class="qz-hint">(avanzar)</span>',
            ja: 'この国のロボット工学は現在まで順調に発展してきた。',
            exp: '解説ページの例文そのまま。<b>現在完了（継続）</b>。haber の3単 <b>ha</b> + avanzar の規則過去分詞 <b>avanzado</b>。hasta ahora「現在まで」が継続用法の指標。<br>⚠️ avanzar は -ar 動詞 → -ado（規則形）。<br>📖 語句：robótica「ロボット工学」／avanzar「発展する」／constantemente「順調に・継続的に」／hasta ahora「現在まで」'
          },
          {
            t: 'Esta mañana no (<span class="qz-b" data-a="he desayunado"></span>). <span class="qz-hint">(desayunar)</span>',
            ja: '今朝私は朝食を取らなかった。',
            exp: '解説ページの例文そのまま。<b>現在完了（現在と関わりの深い時を表す語句との共起）</b>。esta mañana（今朝）があるので現在完了を使う。haber の1単 <b>he</b> + desayunar の規則過去分詞 <b>desayunado</b>。<br>⚠️ esta mañana / hoy / este año などがあるときはスペインのスペイン語では現在完了を使う。<br>📖 語句：esta mañana「今朝」／desayunar「朝食をとる」'
          },
          {
            t: '(<span class="qz-b" data-a="Ha habido"></span>) muchas guerras en este siglo. <span class="qz-hint">(haber)</span>',
            ja: '今世紀はたくさんの戦争があった。',
            exp: '解説ページの例文そのまま。<b>hay の現在完了形は ha habido</b>（非人称用法）。este siglo（今世紀）が現在と関わりの深い時を表す語句。<br>⚠️ hay の現在完了は han habido ではなく <b>ha habido</b>（非人称は常に3人称単数）。<br>📖 語句：guerra「戦争」／este siglo「今世紀」'
          },
          {
            t: 'No (<span class="qz-b" data-a="hemos hecho"></span>) la tarea todavía. <span class="qz-hint">(hacer)</span>',
            ja: 'まだ宿題をやっていないよ。',
            exp: '解説ページの例文そのまま。<b>現在完了（完了の否定）</b>。haber の1複 <b>hemos</b> + hacer の不規則過去分詞 <b>hecho</b>。todavía no「まだ〜ない」。<br>⚠️ haber の1複は hemos（habemos とは言わない）。<br>📖 語句：hacer「する」／tarea「宿題」／todavía「まだ（否定文で「まだ〜ない」）」'
          }
        ]
      },
      {
        heading: '6. 再帰動詞',
        instruction: '適切な再帰代名詞（me/te/se/nos/os）または再帰動詞の活用形を空所に入れなさい。',
        items: [
          {
            t: '¿Cómo (<span class="qz-b" data-a="os llamáis"></span>)? — (<span class="qz-b" data-a="Me llamo"></span>) Roberto y ella (<span class="qz-b" data-a="se llama"></span>) Micaela. <span class="qz-hint">(llamarse)</span>',
            ja: '君たちは何て名前？ — 僕はロベルト、彼女はミカエラだよ。',
            exp: '解説ページの例文そのまま。<b>llamarse（直接再帰）</b>。2複 <b>os llamáis</b>、1単 <b>me llamo</b>、3単 <b>se llama</b>。<br>⚠️ 再帰代名詞は主語に応じて変える（me/te/se/nos/os/se）。<br>📖 語句：llamarse「〜という名前である」'
          },
          {
            t: '¿Por qué no (<span class="qz-b" data-a="te quitas"></span>) la chaqueta? <span class="qz-hint">(quitarse)</span>',
            ja: '君はなぜ上着を脱がないの？',
            exp: '解説ページの例文そのまま。<b>quitarse（間接再帰）</b>で「〜を脱ぐ・外す」。主語 tú → 再帰代名詞 <b>te</b>、動詞 <b>quitas</b>。<br>⚠️ 再帰代名詞 te は動詞 quitas の前に置く。tú quitas を tú te quitas と再帰にする。<br>📖 語句：quitarse「脱ぐ・外す」／chaqueta「上着・ジャケット」'
          },
          {
            t: 'Los domingos (<span class="qz-b" data-a="me despierto"></span>) a las siete pero no (<span class="qz-b" data-a="me levanto"></span>) hasta las ocho. <span class="qz-hint">(despertarse / levantarse)</span>',
            ja: '毎週日曜は7時に目覚めるが、8時まで起床しない。',
            exp: '解説ページの例文そのまま。<b>despertarse（自動詞化）</b>：目覚める（e→ie 型。1単 <b>me despierto</b>）。<b>levantarse（自動詞化）</b>：起床する（規則。1単 <b>me levanto</b>）。<br>⚠️ despertarse は e→ie 変化（despierto）。levantarse は規則動詞（levanto）。<br>📖 語句：despertarse「目覚める」／levantarse「起床する」'
          },
          {
            t: 'Mi hija ya (<span class="qz-b" data-a="se ha acostado"></span>). <span class="qz-hint">(acostarse)</span>',
            ja: '私の娘はもう就寝してしまった。',
            exp: '解説ページの例文そのまま。<b>再帰動詞の現在完了</b>は「再帰代名詞 + haber の活用 + 過去分詞」の語順。se を haber の前に置く → <b>se ha acostado</b>。<br>⚠️ acostarse の過去分詞は規則形 acostado（acostarse なので -ar → -ado）。se は haber の前。<br>📖 語句：acostarse「就寝する」／ya「もう・すでに」'
          },
          {
            t: 'Mi madre (<span class="qz-b" data-a="se pone"></span>) enfadada fácilmente. <span class="qz-hint">(ponerse)</span>',
            ja: '私の母はすぐ腹を立てる。',
            exp: '解説ページの例文そのまま。<b>ponerse + 形容詞（自動詞化用法）</b>で「〜という状態になる」。主語 mi madre（3単）→ 再帰代名詞 <b>se</b>、動詞 <b>pone</b>（poner の3単）。<br>⚠️ poner は -go 型（1単 pongo）。3単は規則活用で pone。se pone で「〜の状態になる」。<br>📖 語句：ponerse「〜の状態になる」／enfadado「怒った」／fácilmente「簡単に・すぐに」'
          },
          {
            t: 'Mi hermano (<span class="qz-b" data-a="se come"></span>) una olla de estofado. <span class="qz-hint">(comerse)</span>',
            ja: '私の兄はシチューをひと鍋全部食べてしまう。',
            exp: '解説ページの例文そのまま。<b>comerse（強意・転意用法）</b>「食べてしまう」。主語 mi hermano（3単）→ 再帰代名詞 <b>se</b>、動詞 <b>come</b>。<br>⚠️ 強意用法の se は省略すると意味が変わる。comer（食べる）に se を付けて「食べてしまう（完食）」という強意になる。<br>📖 語句：comerse「食べてしまう」／olla「鍋」／estofado「シチュー・煮込み料理」'
          },
          {
            t: 'Mi vecino siempre (<span class="qz-b" data-a="se queja"></span>) de la bulla de la calle. <span class="qz-hint">(quejarse)</span>',
            ja: '私の隣人は、いつも通りの騒音について文句を言っている。',
            exp: '解説ページの例文そのまま。<b>quejarse de（本来的再帰）</b>「〜のことで文句を言う」。主語 mi vecino（3単）→ 再帰代名詞 <b>se</b>、動詞 <b>queja</b>。<br>⚠️ quejarse は常に再帰代名詞を伴う（本来的再帰）。queja のみでは使えない。<br>📖 語句：quejarse de「〜のことで文句を言う」／vecino「隣人」／bulla「騒音・騒ぎ」'
          },
          {
            t: 'En Canadá (<span class="qz-b" data-a="se hablan"></span>) inglés y francés. <span class="qz-hint">(hablar)</span>',
            ja: 'カナダでは英語とフランス語が話される。',
            exp: '解説ページの例文そのまま。<b>受身再帰用法</b>「〜される」。主語は inglés y francés（複数）→ 動詞は3複 <b>se hablan</b>。<br>⚠️ 受身再帰は「por 行為主体」を付けられない。主語（話される言語）は動詞の後に置くことが多い。inglés y francés が複数なので hablan（3複）。<br>📖 語句：hablarse「話される」／inglés「英語」／francés「フランス語」'
          },
          {
            t: '¿Cómo (<span class="qz-b" data-a="se dice"></span>) 水 en español? — (<span class="qz-b" data-a="Se dice"></span>) "agua". <span class="qz-hint">(decirse)</span>',
            ja: 'スペイン語で「水」は何と言いますか？ — agua と言います。',
            exp: '解説ページの例文そのまま。<b>不定主語用法（無人称用法）</b>「（一般に）〜する・言う」。動詞は必ず3人称単数形 <b>se dice</b>（主語なし）。<br>⚠️ 不定主語用法は常に3単（se dicen などとしない）。「一般的に水と言う」という一般論。<br>📖 語句：decirse「（一般的に）言う」／español「スペイン語」／agua「水」'
          },
          {
            t: 'Cuando trabajamos en equipo, (<span class="qz-b" data-a="se nos ocurren"></span>) buenas ideas. <span class="qz-hint">(ocurrirse)</span>',
            ja: '私たちはチームで仕事をすると、良いアイディアが浮かんでくる。',
            exp: '解説ページの例文そのまま。<b>ocurrirse（本来的再帰、gustar型）</b>「（考えが）浮かぶ」。主語は buenas ideas（複数）→ 動詞は3複 <b>ocurren</b>。「私たちに」= 間接目的格 nos。語順は se → nos → ocurren（再帰 → 間接 → 直接の優先順位）。<br>⚠️ ocurrirse は gustar型と同じ構造：「ものが主語、人は間接目的語」。se nos ocurren（主語 ideas が複数なので3複）。<br>📖 語句：ocurrirse「（考えが）浮かぶ」／equipo「チーム」／idea「アイディア」'
          },
          {
            t: '¿Ya (<span class="qz-b" data-a="te vas"></span>) a Osaka? <span class="qz-hint">(irse)</span>',
            ja: '君はもう大阪に行ってしまうの？',
            exp: '解説ページの例文そのまま。<b>irse（強意・転意用法）</b>「立ち去る・行ってしまう」。主語 tú → 再帰代名詞 <b>te</b>、動詞 <b>vas</b>（ir の2単）。<br>⚠️ ir（行く）に te を付けると irse「その場から立ち去る・行ってしまう」という強意になる。te vas が正解（vas te とはならない）。<br>📖 語句：irse「立ち去る・行ってしまう」'
          }
        ]
      }
    ,
      {
        heading: '7. 不定詞（応用）',
        instruction: '（&nbsp;）内の動詞を不定詞のまま使うか、文脈に合う形に変えて空所を埋めなさい。',
        items: [
          {
            t: 'No sé (<span class="qz-b" data-a="qué regalarle"></span>) a ella para su cumpleaños. <span class="qz-hint">(qué, regalar)</span>',
            ja: '彼女の誕生日に何を贈るべきか私には分からない。',
            exp: '解説ページの例文そのまま。<b>疑問詞 + 不定詞</b>で「〜すべきか・〜できるか」の意味。qué regalarle「何を贈るべきか」。le は間接目的格代名詞（彼女に）が不定詞に結合した形。<br>⚠️ regalarle の le は前置きできない（不定詞にくっつける）。疑問詞のあとは不定詞そのまま。<br>📖 語句：saber「知っている・〜できる」／regalar「贈る」／cumpleaños「誕生日」'
          },
          {
            t: '(<span class="qz-b" data-a="Oír"></span>) es (<span class="qz-b" data-a="creer"></span>). <span class="qz-hint">(oír, creer)</span>',
            ja: '百聞は一見に如かず（聞くことは信じることだ）。',
            exp: '<b>不定詞が名詞として主語・述語</b>になる用法。oír「聞くこと」が主語、creer「信じること」が述語名詞。どちらも不定詞のまま。<br>⚠️ 不定詞を活用させない（oyes / crees などとしない）。<br>📖 語句：oír「聞く」／creer「信じる」'
          },
          {
            t: 'Oigo a María (<span class="qz-b" data-a="cantar"></span>) muy bien. <span class="qz-hint">(cantar)</span>',
            ja: '（私は）マリアがとても上手に歌うのが聞こえる。',
            exp: '解説ページの例文そのまま。<b>知覚動詞 oír + 不定詞</b>「マリアが歌うのが聞こえる」（一回限りの動作）。cantar は不定詞のまま。<br>⚠️ cantando（現在分詞）なら「歌っているところが聞こえる（進行中）」という違いがある。<br>📖 語句：oír「聞こえる」／cantar「歌う」'
          },
          {
            t: 'Mi abuelo siempre reza antes de (<span class="qz-b" data-a="acostarse"></span>). <span class="qz-hint">(acostarse)</span>',
            ja: '私の祖父は就寝前にいつもお祈りをする。',
            exp: '前置詞 <b>de</b> の後には不定詞を置く。再帰動詞 acostarse を不定詞として使うとき、-se はそのまま（主語が定まっていないため se のまま）。antes de acostarse「就寝する前に」。<br>⚠️ 前置詞の後は不定詞（acuesta などと活用しない）。再帰代名詞 se は不定詞の末尾についたまま。<br>📖 語句：rezar「祈る」／antes de「〜の前に」／acostarse「就寝する」'
          },
          {
            t: 'Mi madre me (<span class="qz-b" data-a="hace estudiar"></span>) tres horas al día. <span class="qz-hint">(hacer, estudiar)</span>',
            ja: '私の母は私に1日3時間勉強させる。',
            exp: '<b>hacer + 不定詞</b>（強制使役）「〜させる」。me は間接目的格（estudiar は他動詞なので A は間接目的語）。母（3単）→ hace。<br>⚠️ hacer limpiar と同じ使役パターン。dejar（許可）ではなく hacer（強制）。<br>📖 語句：madre「母」／hacer「させる」／estudiar「勉強する」／al día「1日あたり」'
          },
          {
            t: 'Los niños no (<span class="qz-b" data-a="dejan dormir"></span>) a sus padres. <span class="qz-hint">(dejar, dormir)</span>',
            ja: '子どもたちは親を眠らせてくれない。',
            exp: '<b>dejar + 不定詞</b>（放任使役の否定）「〜させない・〜することを許さない」。主語 los niños（3複）→ dejan。dormir は不定詞のまま。<br>⚠️ dejar は「許可する（放任）」なので no dejan で「許さない」。hacer（強制）と区別すること。<br>📖 語句：niño「子ども」／dejar「〜させる・許す」／dormir「眠る」'
          }
        ]
      },
      {
        heading: '8. 現在分詞（応用）',
        instruction: '（&nbsp;）内の動詞を現在分詞にして空所を埋めなさい。',
        items: [
          {
            t: 'Mi novio me maltrata (<span class="qz-b" data-a="sabiendo"></span>) mi amor. <span class="qz-hint">(saber)</span>',
            ja: '私の彼氏は私の愛を知っているにもかかわらずひどい仕打ちをする。',
            exp: '解説ページの例文そのまま。<b>現在分詞の副詞的用法（譲歩：〜にもかかわらず）</b>。saber は規則 -er 動詞 → <b>sabiendo</b>（sab + iendo）。<br>⚠️ -er 動詞の現在分詞語尾は -iendo（sabando などとしない）。<br>📖 語句：novio「彼氏」／maltratar「ひどい扱いをする」／saber「知っている」'
          },
          {
            t: '(<span class="qz-b" data-a="Siendo"></span>) difícil, quiero resolver este problema. <span class="qz-hint">(ser)</span>',
            ja: '難しいけれど、この問題を解決したい。',
            exp: '解説ページの例文そのまま。<b>現在分詞の副詞的用法（譲歩：〜けれど）</b>。ser の現在分詞は <b>siendo</b>（規則 -er 動詞 → sie + ndo → siendo）。<br>⚠️ ser は -er 動詞なので -iendo 語尾 → siendo。esiendo などとしない。<br>📖 語句：ser「〜である」／difícil「難しい」／resolver「解決する」'
          },
          {
            t: 'Siempre desayuno (<span class="qz-b" data-a="leyéndola"></span>). <span class="qz-hint">(leer + la)</span>',
            ja: 'いつもそれを読みながら朝食をとる。',
            exp: '解説ページの例文そのまま。<b>現在分詞に直接目的格代名詞 la を結合</b>。leer の現在分詞 leyendo に la をくっつけると <b>leyéndola</b>。アクセント記号が -e- に移動。<br>⚠️ 代名詞結合によりアクセント位置が変わるため leyéndola（3音節目にアクセント記号）。leiendo は誤り。<br>📖 語句：desayunar「朝食をとる」／leer「読む」／-la「それを（女性単数直接目的格）」'
          },
          {
            t: '(<span class="qz-b" data-a="Continúa trabajando"></span>) en el banco desde hace diez años. <span class="qz-hint">(continuar / trabajar)</span>',
            ja: '彼女は10年前からずっと銀行で働き続けている。',
            exp: '<b>continuar + 現在分詞</b>で「〜し続ける」（seguir と同じ意味）。continuar の3単は <b>continúa</b>（アクセント記号に注意）。trabajar の現在分詞は規則形 <b>trabajando</b>。<br>⚠️ continúa のアクセント記号を忘れないこと（continuа ではない）。<br>📖 語句：continuar「続ける」／trabajar「働く」／banco「銀行」／desde hace「〜前から」'
          },
          {
            t: 'Llevamos medio año (<span class="qz-b" data-a="aprendiendo"></span>) español. <span class="qz-hint">(aprender)</span>',
            ja: '私たちはスペイン語を学び始めて半年になる。',
            exp: '練習問題の例文に接地。<b>llevar + 時間 + 現在分詞</b>「〜し続けて○○になる」。aprender は規則 -er 動詞 → <b>aprendiendo</b>（aprend + iendo）。<br>⚠️ aprendando（-ar 動詞の語尾）とならないこと（aprender は -er 動詞 → -iendo）。<br>📖 語句：aprender「学ぶ」／medio año「半年」'
          },
          {
            t: 'Cada día va (<span class="qz-b" data-a="haciendo"></span>) más calor. <span class="qz-hint">(hacer)</span>',
            ja: '日を追うごとにどんどん暑くなっていく。',
            exp: '練習問題の例文に接地。<b>ir + 現在分詞</b>「（だんだん）〜していく」。hacer の現在分詞は規則形 <b>haciendo</b>（hac + iendo）。ir の3単 va。<br>⚠️ hacer は -er 動詞なので -iendo。haciendo は規則形。<br>📖 語句：ir「〜していく」／hacer calor「暑い（天気）」／cada día「日を追って」'
          }
        ]
      },
      {
        heading: '9. 現在分詞・不規則形（応用）',
        instruction: '（&nbsp;）内の動詞を現在分詞にして空所を埋めなさい。',
        items: [
          {
            t: 'Una hoja está (<span class="qz-b" data-a="cayendo"></span>) del árbol. <span class="qz-hint">(caer)</span>',
            ja: '木から葉っぱが一枚落ちている。',
            exp: 'caer は語根が母音（a）で終わる -er 動詞 → -yendo → <b>cayendo</b>（不規則形①）。estar + 現在分詞（現在進行形）。<br>⚠️ cayendo ← caiendo とはならない（語根末の a に続く -iendo の i → y）。<br>📖 語句：caer「落ちる」／hoja「葉」／árbol「木」'
          },
          {
            t: 'Están (<span class="qz-b" data-a="construyendo"></span>) un nuevo estadio en las afueras de la ciudad. <span class="qz-hint">(construir)</span>',
            ja: '市郊外に新しいスタジアムを建設しているところだ。',
            exp: 'construir は語根が母音（u）で終わる -ir 動詞 → -yendo → <b>construyendo</b>（不規則形①）。<br>⚠️ construiendo とはならない（語根末の u に続く -iendo の i → y）。huir→huyendo と同じパターン。<br>📖 語句：construir「建設する」／estadio「スタジアム」／afueras「郊外」'
          },
          {
            t: 'El soldado sigue (<span class="qz-b" data-a="sintiendo"></span>) dolor en la rodilla. <span class="qz-hint">(sentir)</span>',
            ja: 'その兵士はひざに痛みを感じ続けている。',
            exp: 'sentir は語根母音変化 -ir 動詞（e→i）。現在分詞でも e→i → <b>sintiendo</b>（不規則形②）。seguir + 現在分詞「〜し続ける」。<br>⚠️ sentiendo とはならない（e→i 変化）。pedir→pidiendo と同じパターン。<br>📖 語句：sentir「感じる」／soldado「兵士」／dolor「痛み」／rodilla「ひざ」'
          },
          {
            t: 'El bebé está (<span class="qz-b" data-a="durmiendo"></span>) en su cuna. <span class="qz-hint">(dormir)</span>',
            ja: '赤ちゃんはゆりかごで眠っているところだ。',
            exp: 'dormir は語根母音変化 -ir 動詞（o→u）。現在分詞でも o→u → <b>durmiendo</span>（不規則形②）。<br>⚠️ dormiendo とはならない（o→u 変化）。<br>📖 語句：dormir「眠る」／cuna「ゆりかご」'
          },
          {
            t: '¿No estás (<span class="qz-b" data-a="pudiendo"></span>) terminar el trabajo? <span class="qz-hint">(poder)</span>',
            ja: '仕事を終わらせることができていないの？',
            exp: 'poder は o→u 型の不規則現在分詞 → <b>pudiendo</b>（不規則形②。poder は語根母音変化動詞ではないが同様の変化）。<br>⚠️ podriendo（pudrir と混同しない）。poder は puedo 型（o→ue）だが現在分詞は o→u → pudiendo。<br>📖 語句：poder「〜できる」／terminar「終える」／trabajo「仕事」'
          },
          {
            t: 'Lleva un mes (<span class="qz-b" data-a="pidiendo"></span>) trabajo a todas las empresas de la ciudad. <span class="qz-hint">(pedir)</span>',
            ja: '彼は1か月間ずっと街の全企業に仕事を求め続けている。',
            exp: '<b>llevar + 時間 + 現在分詞</b>「〜し続けて○○になる」。pedir は e→i 型の -ir 動詞 → <b>pidiendo</b>（不規則形②）。<br>⚠️ pediendo とはならない（e→i 変化）。<br>📖 語句：pedir「求める・頼む」／empresa「会社」'
          },
          {
            t: 'Mi hermana va (<span class="qz-b" data-a="viniendo"></span>) a casa cada vez con más frecuencia. <span class="qz-hint">(venir)</span>',
            ja: '私の姉はだんだん頻繁に家に来るようになっている。',
            exp: '<b>ir + 現在分詞</b>「（だんだん）〜していく」。venir の不規則現在分詞は e→i → <b>viniendo</b>（不規則形②）。ir の3単は va。<br>⚠️ veniendo とはならない（e→i 変化）。<br>📖 語句：venir「来る」／cada vez con más frecuencia「だんだん頻繁に」'
          }
        ]
      },
      {
        heading: '10. 過去分詞（応用）',
        instruction: '（&nbsp;）内の動詞を過去分詞の適切な形にして空所を埋めなさい。',
        items: [
          {
            t: 'La ventana (<span class="qz-b" data-a="está rota"></span>). <span class="qz-hint">(estar / romper)</span>',
            ja: 'その窓は壊れている（壊れた状態だ）。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。romper の不規則過去分詞は <b>roto</b>。主語 la ventana（女性単数）に一致して <b>rota</b>。<br>⚠️ romper の過去分詞は不規則形 roto（×rompido は誤り）。estar = 壊れてしまっている状態。<br>📖 語句：ventana「窓」／romper「壊す」'
          },
          {
            t: '¿Ya (<span class="qz-b" data-a="está puesto"></span>) el abrigo? <span class="qz-hint">(estar / poner)</span>',
            ja: 'コートはもう（テーブルに）準備されている？',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。poner の不規則過去分詞は <b>puesto</b>。主語 el abrigo（男性単数）に一致して -o のまま → <b>puesto</b>。<br>⚠️ poner → puesto（不規則形。×ponido は誤り）。estar = 置かれた状態。<br>📖 語句：abrigo「コート」／poner「置く・準備する」'
          },
          {
            t: 'Un millón de personas (<span class="qz-b" data-a="han muerto"></span>) en esta guerra. <span class="qz-hint">(morir)</span>',
            ja: 'この戦争で100万人が死んだ。',
            exp: '<b>現在完了</b>。morir の不規則過去分詞は <b>muerto</b>。主語 un millón de personas（3複扱い）→ haber は <b>han</b>。現在完了の過去分詞は性数変化しない（常に -o 形）。<br>⚠️ 現在完了の過去分詞は形容詞用法と違って性数変化しない（muertas などとしない）。<br>📖 語句：morir「死ぬ」／millón「100万」／guerra「戦争」'
          },
          {
            t: 'Las flores (<span class="qz-b" data-a="son admiradas"></span>) por todos los visitantes. <span class="qz-hint">(ser / admirar)</span>',
            ja: 'その花たちは訪れる人すべてに賞賛される。',
            exp: '<b>ser + 過去分詞</b>（受身の動作）。admirar の規則過去分詞 admirado → 主語 las flores（女性複数）に一致して <b>admiradas</b>。<br>⚠️ estar + 過去分詞（結果の状態）との違いに注意。ser = 受身の出来事。<br>📖 語句：admirar「賞賛する」／flor「花」／visitante「訪問者」'
          },
          {
            t: 'El libro (<span class="qz-b" data-a="está escrito"></span>) en inglés. <span class="qz-hint">(estar / escribir)</span>',
            ja: 'その本は英語で書かれている。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。escribir の不規則過去分詞は <b>escrito</b>。主語 el libro（男性単数）に一致して -o のまま → <b>escrito</b>。<br>⚠️ escribir → escrito（不規則形。×escribido は誤り）。estar = 書かれた状態。<br>📖 語句：libro「本」／escribir「書く」／inglés「英語」'
          },
          {
            t: 'El continente americano fue (<span class="qz-b" data-a="descubierto"></span>) por Colón. <span class="qz-hint">(descubrir)</span>',
            ja: 'アメリカ大陸はコロンブスによって発見された。',
            exp: '<b>ser（fue）+ 過去分詞</b>（受身の動作）。descubrir の不規則過去分詞は <b>descubierto</b>（cubrir→cubierto と同じ -to 型。接頭辞 des- がついても同じ変化）。主語 el continente americano（男性単数）に一致して -o のまま。<br>⚠️ descubrir → descubierto（×descubrido は誤り）。<br>📖 語句：continente americano「アメリカ大陸」／descubrir「発見する」／Colón「コロンブス」'
          },
          {
            t: 'Veo a Teresa (<span class="qz-b" data-a="muy cansada"></span>). ¿Se ha (<span class="qz-b" data-a="puesto"></span>) enferma? <span class="qz-hint">(cansado / poner)</span>',
            ja: 'テレサがとても疲れているように見える。体調を崩したのだろうか？',
            exp: '前半：<b>知覚動詞 ver + 過去分詞</b>（目的格補語）。cansar の規則過去分詞 cansado → Teresa（女性単数）に一致して <b>cansada</b>。<br>後半：<b>現在完了</b>。poner の不規則過去分詞は <b>puesto</b>（性数変化なし）。se ha puesto enferma「体調を崩した（状態になった）」。<br>⚠️ 知覚動詞用法は形容詞的に性数一致。現在完了の過去分詞は性数変化なし（puesta などとしない）。<br>📖 語句：cansar「疲れさせる」／ponerse enferma「体調を崩す」'
          },
          {
            t: 'Las patatas (<span class="qz-b" data-a="están fritas"></span>). <span class="qz-hint">(estar / freír)</span>',
            ja: 'ポテトは揚がっている（揚がった状態だ）。',
            exp: '<b>estar + 過去分詞</b>（結果の状態）。freír の不規則過去分詞は <b>frito</b>。主語 las patatas（女性複数）に一致して <b>fritas</b>。<br>⚠️ freír → frito（不規則形 -to 型。×freído は誤り）。女性複数 → fritas。<br>📖 語句：patata「ジャガイモ・ポテト」／freír「揚げる」'
          }
        ]
      },
      {
        heading: '11. 現在完了（応用）',
        instruction: '（&nbsp;）内の動詞を現在完了形にして空所を埋めなさい。',
        items: [
          {
            t: 'Mi hija ya (<span class="qz-b" data-a="ha vuelto"></span>) a casa. <span class="qz-hint">(volver)</span>',
            ja: '私の娘はもう家に帰ってきた。',
            exp: '<b>現在完了（完了）</b>。haber の3単 <b>ha</b> + volver の不規則過去分詞 <b>vuelto</b>。ya「もう・すでに」は完了用法の指標。<br>⚠️ volver の過去分詞は不規則形 vuelto（×volvido は誤り）。<br>📖 語句：volver「戻る・帰る」／ya「もう・すでに」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Has visto"></span>) esta película alguna vez? <span class="qz-hint">(ver)</span>',
            ja: '君はこの映画を今までに観たことがある？',
            exp: '<b>現在完了（経験）</b>。haber の2単 <b>has</b> + ver の不規則過去分詞 <b>visto</b>。alguna vez「今までに」は経験用法の指標。<br>⚠️ ver の過去分詞は不規則形 visto（×vero・×veido は誤り）。<br>📖 語句：ver「見る・観る」／película「映画」／alguna vez「今までに・かつて」'
          },
          {
            t: 'Este año (<span class="qz-b" data-a="hemos viajado"></span>) mucho. <span class="qz-hint">(viajar)</span>',
            ja: '今年私たちはたくさん旅行した。',
            exp: '<b>現在完了（現在と関わりの深い時を表す語句との共起）</b>。este año「今年」があるのでスペインのスペイン語では現在完了を使う。haber の1複 <b>hemos</b> + viajar の規則過去分詞 <b>viajado</b>。<br>⚠️ este año は「現在と関わりの深い時を表す語句」→ 現在完了を使う。<br>📖 語句：viajar「旅行する」／este año「今年」'
          },
          {
            t: 'Nunca (<span class="qz-b" data-a="he dicho"></span>) una mentira en mi vida. <span class="qz-hint">(decir)</span>',
            ja: '私は生まれてこのかた一度も嘘をついたことがない。',
            exp: '<b>現在完了（経験の否定）</b>。haber の1単 <b>he</b> + decir の不規則過去分詞 <b>dicho</b>。nunca は「一度も〜ない」（否定表現）。<br>⚠️ decir の過去分詞は不規則形 dicho（×decido は誤り）。nunca を文頭に置く場合は no が不要。<br>📖 語句：decir「言う」／nunca「一度も〜ない」／mentira「嘘」'
          },
          {
            t: '(<span class="qz-b" data-a="Han roto"></span>) la ventana del aula. <span class="qz-hint">(romper)</span>',
            ja: '（彼らは）教室の窓を割ってしまった。',
            exp: '<b>現在完了（完了）</b>。主語は不明（3複）→ haber の3複 <b>han</b> + romper の不規則過去分詞 <b>roto</b>。<br>⚠️ romper の過去分詞は不規則形 roto（×rompido は誤り）。現在完了の過去分詞は性数変化しない（rota にしない）。<br>📖 語句：romper「割る・壊す」／ventana「窓」／aula「教室」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Habéis puesto"></span>) la mesa para la cena? <span class="qz-hint">(poner)</span>',
            ja: '君たちは夕食のためにテーブルをセットしましたか？',
            exp: '<b>現在完了（完了）</b>。haber の2複 <b>habéis</b> + poner の不規則過去分詞 <b>puesto</b>。poner la mesa「テーブルをセットする」。<br>⚠️ poner の過去分詞は不規則形 puesto（×ponido は誤り）。habéis のアクセント記号も必須。<br>📖 語句：poner la mesa「食卓を整える」／cena「夕食」'
          },
          {
            t: 'Los científicos (<span class="qz-b" data-a="han descubierto"></span>) una nueva especie de pez. <span class="qz-hint">(descubrir)</span>',
            ja: '科学者たちは新種の魚を発見した。',
            exp: '<b>現在完了（完了）</b>。haber の3複 <b>han</b> + descubrir の不規則過去分詞 <b>descubierto</b>。<br>⚠️ descubrir → descubierto（cubrir→cubierto と同じ -to 型。×descubrido は誤り）。<br>📖 語句：descubrir「発見する」／científico「科学者」／especie「種」／pez「魚」'
          },
          {
            t: 'Esta semana (<span class="qz-b" data-a="he leído"></span>) tres libros. <span class="qz-hint">(leer)</span>',
            ja: '今週私は3冊の本を読んだ。',
            exp: '<b>現在完了（現在と関わりの深い時を表す語句との共起）</b>。esta semana「今週」があるのでスペインのスペイン語では現在完了を使う。haber の1単 <b>he</b> + leer の過去分詞 <b>leído</b>（語根が母音 e で終わるため -ído にアクセント記号が必要）。<br>⚠️ leer の過去分詞は leído（アクセント記号必須。×leido は誤り）。esta semana は「現在と関わりの深い時を表す語句」。<br>📖 語句：leer「読む」／esta semana「今週」'
          },
          {
            t: 'Mi hijo todavía no (<span class="qz-b" data-a="ha vuelto"></span>) del colegio. <span class="qz-hint">(volver)</span>',
            ja: '私の息子はまだ学校から帰っていない。',
            exp: '<b>現在完了（完了の否定）</b>。todavía no「まだ〜ない」は現在完了の完了用法でよく用いる。haber の3単 <b>ha</b> + volver の不規則過去分詞 <b>vuelto</b>。<br>⚠️ volver → vuelto（devolver→devuelto と同じパターン。×volvido は誤り）。<br>📖 語句：volver「帰る」／todavía no「まだ〜ない」／colegio「学校」'
          },
          {
            t: '¿(<span class="qz-b" data-a="Has hecho"></span>) los deberes hoy? <span class="qz-hint">(hacer)</span>',
            ja: '今日宿題はやった？',
            exp: '<b>現在完了（現在と関わりの深い時を表す語句との共起）</b>。hoy「今日」があるのでスペインのスペイン語では現在完了を使う。haber の2単 <b>has</b> + hacer の不規則過去分詞 <b>hecho</b>。<br>⚠️ hacer の過去分詞は不規則形 hecho（×hacido は誤り）。hoy は「現在と関わりの深い時を表す語句」。<br>📖 語句：hacer「する」／los deberes「宿題（複数形で使うことが多い）」／hoy「今日」'
          },
          {
            t: '(<span class="qz-b" data-a="Hemos reservado"></span>) habitaciones en el hotel. <span class="qz-hint">(reservar)</span>',
            ja: '私たちはそのホテルの部屋を予約しました。',
            exp: '練習問題の例文に接地。<b>現在完了（完了）</b>。haber の1複 <b>hemos</b> + reservar の規則過去分詞 <b>reservado</b>。<br>⚠️ reservar は -ar 動詞なので過去分詞は -ado（規則形）。haber の1複は hemos。<br>📖 語句：reservar「予約する」／habitación「部屋」／hotel「ホテル」'
          }
        ]
      },
      {
        heading: '12. 再帰動詞（応用）',
        instruction: '適切な再帰代名詞（me/te/se/nos/os）または再帰動詞の活用形を空所に入れなさい。',
        items: [
          {
            t: '¿Siempre (<span class="qz-b" data-a="te miras"></span>) en el espejo antes de salir de casa? <span class="qz-hint">(mirarse)</span>',
            ja: '家を出る前に、君はいつも鏡（で自分自身）を見るの？',
            exp: '解説ページの例文そのまま。<b>mirarse（直接再帰）</b>「自分自身を見る」。主語 tú → 再帰代名詞 <b>te</b>、動詞 <b>miras</b>。<br>⚠️ 再帰代名詞 te は動詞 miras の前に置く。<br>📖 語句：mirarse「（鏡で）自分を見る」／espejo「鏡」／antes de「〜の前に」'
          },
          {
            t: 'Mis hermanas menores casi no (<span class="qz-b" data-a="se peinan"></span>). <span class="qz-hint">(peinarse)</span>',
            ja: '私の妹たちはほとんど髪をとかない。',
            exp: '解説ページの例文そのまま。<b>peinarse（直接再帰）</b>「自分の髪を櫛でとく」。主語 mis hermanas menores（3複）→ 再帰代名詞 <b>se</b>、動詞 <b>peinan</b>。<br>⚠️ peinarse は -ar 規則動詞。3複 → peinan（peinen などとしない）。<br>📖 語句：peinarse「髪を櫛でとく」／hermana menor「妹」／casi「ほとんど」'
          },
          {
            t: '(<span class="qz-b" data-a="Me pongo"></span>) el sombrero porque hoy hace mucho sol. <span class="qz-hint">(ponerse)</span>',
            ja: '今日は日差しが強いので、私は帽子をかぶる。',
            exp: '解説ページの例文そのまま。<b>ponerse（間接再帰）</b>「〜を身につける」。主語 yo → 再帰代名詞 <b>me</b>、動詞 poner の1単 <b>pongo</b>（-go 型）。<br>⚠️ poner は1単で -go → pongo。me pongo の語順（me が前）。<br>📖 語句：ponerse「〜を身につける」／sombrero「帽子」／hacer sol「日差しがある」'
          },
          {
            t: 'Mis hijos siempre (<span class="qz-b" data-a="se lavan"></span>) los dientes después de comer. <span class="qz-hint">(lavarse)</span>',
            ja: '私の子供たちは食後はいつも歯を磨く。',
            exp: '解説ページの例文そのまま。<b>lavarse（間接再帰）</b>「（体の一部を）洗う」。主語 mis hijos（3複）→ 再帰代名詞 <b>se</b>、動詞 <b>lavan</b>。los dientes「歯」が直接目的語。<br>⚠️ lavarse は -ar 規則動詞。los dientes は直接目的語（所有格ではなく定冠詞 los を使う）。<br>📖 語句：lavarse「洗う」／dientes「歯」／después de「〜の後に」'
          },
          {
            t: 'Mis abuelos (<span class="qz-b" data-a="se aman"></span>) mucho todavía. <span class="qz-hint">(amarse)</span>',
            ja: '私の祖父母はいまだにとても愛し合っている。',
            exp: '解説ページの例文そのまま。<b>amarse（相互再帰）</b>「愛し合う」。主語 mis abuelos（3複）→ 再帰代名詞 <b>se</b>、動詞 <b>aman</b>。<br>⚠️ 相互再帰は主語が必ず複数。amar は規則 -ar 動詞（3複 aman）。<br>📖 語句：amarse「愛し合う」／todavía「いまだに・まだ」'
          },
          {
            t: 'Mi tío (<span class="qz-b" data-a="se bebe"></span>) una botella de whisky cada noche. <span class="qz-hint">(beberse)</span>',
            ja: '私のおじは毎晩ウイスキーをボトル1本飲み干す。',
            exp: '解説ページの例文そのまま。<b>beberse（強意・転意用法）</b>「飲み干す」。主語 mi tío（3単）→ 再帰代名詞 <b>se</b>、動詞 <b>bebe</b>。<br>⚠️ beber（飲む）に se を付けると「飲み干す（完飲）」という強意になる。<br>📖 語句：beberse「飲み干す」／botella「ボトル」／whisky「ウイスキー」'
          },
          {
            t: '(<span class="qz-b" data-a="Me muero"></span>) de hambre. <span class="qz-hint">(morirse)</span>',
            ja: '私は空腹で死にそうだ。',
            exp: '解説ページの例文そのまま。<b>morirse（強意・転意用法）</b>「死にそうだ（誇張）」。morir は o→ue 型 → 1単 <b>muero</b>。再帰代名詞 <b>me</b>。<br>⚠️ morir は o→ue 型（muero）。1単の -go 型ではない。morirse は誇張表現に使われる。<br>📖 語句：morirse「死にそうだ（誇張）」／hambre「空腹」'
          },
          {
            t: 'Por el momento, no (<span class="qz-b" data-a="nos atrevemos"></span>) a decirle la verdad. <span class="qz-hint">(atreverse)</span>',
            ja: '今のところ我々は彼女に本当のことを言うのはやめておこう。',
            exp: '解説ページの例文そのまま。<b>atreverse a 不定詞（本来的再帰）</b>「あえて〜する」。主語 nosotros → 再帰代名詞 <b>nos</b>、動詞 <b>atrevemos</b>。<br>⚠️ atreverse は常に再帰代名詞を伴う（本来的再帰）。atreverse a「あえて〜する」の a を忘れない。<br>📖 語句：atreverse a「あえて〜する」／verdad「真実」／por el momento「今のところ」'
          },
          {
            t: '(<span class="qz-b" data-a="Me arrepiento"></span>) mucho de mi actitud de anoche. <span class="qz-hint">(arrepentirse)</span>',
            ja: '私は昨夜の自分の態度についてとても後悔している。',
            exp: '解説ページの例文そのまま。<b>arrepentirse de（本来的再帰）</b>「〜を後悔する」。主語 yo → 再帰代名詞 <b>me</b>、動詞 arrepentir は e→ie 型 → 1単 <b>arrepiento</b>。<br>⚠️ arrepentirse は常に再帰代名詞を伴う（本来的再帰）。e→ie 変化（arrepiento）。arrepentirse de「〜を後悔する」の de を忘れない。<br>📖 語句：arrepentirse de「〜を後悔する」／actitud「態度」／anoche「昨夜」'
          },
          {
            t: 'Hoy me tengo que acostar a las diez para (<span class="qz-b" data-a="levantarme"></span>) a las cuatro mañana. <span class="qz-hint">(levantarse → yo)</span>',
            ja: '明日4時に起きるために今日は10時に就寝しなければならない。',
            exp: '解説ページのボックス内の例文に接地。不定詞として用いる場合は<b>-se を主語に応じた再帰代名詞に変える</b>。para + 不定詞「〜するために」。主語 yo なので -se → <b>me</b> → <b>levantarme</b>。<br>⚠️ levantarse をそのまま不定詞にしない（-se を yo の再帰代名詞 me に変えて levantarme）。<br>📖 語句：levantarse「起床する」／para「〜するために」／mañana「明日」'
          },
          {
            t: 'En Nagoya no (<span class="qz-b" data-a="se respetan"></span>) mucho las reglas de tránsito. <span class="qz-hint">(respetar)</span>',
            ja: '名古屋では交通ルールがあまり守られない。',
            exp: '解説ページの例文そのまま。<b>受身再帰用法</b>「〜される」。主語は las reglas de tránsito（複数）→ 動詞は3複 <b>se respetan</b>。<br>⚠️ 受身再帰は「por 行為主体」を付けられない。主語（守られるもの）は複数なので respetan（3複）。<br>📖 語句：respetar「尊重する・守る」／reglas de tránsito「交通ルール」'
          },
          {
            t: '(<span class="qz-b" data-a="Se tarda"></span>) diez minutos de la universidad a la estación. <span class="qz-hint">(tardarse)</span>',
            ja: '大学から駅までは10分の道のりです。',
            exp: '解説ページの例文そのまま。<b>不定主語用法（無人称用法）</b>「（一般的に）〜かかる」。動詞は必ず3人称単数形 <b>se tarda</b>（主語なし）。<br>⚠️ 不定主語用法は常に3単（se tardan などとしない。主語は「時間」ではなく無主語）。<br>📖 語句：tardarse「（時間が）かかる」／minuto「分」'
          }
        ]
      }
    ]
  };


  /* ── 一列 Lección 6 予想問題（点過去形）──
     接地：Spanish1_lesson6.html の例文・活用表・語彙リスト
     （規則活用 -ar/-er/-ir・語根母音変化 -ir・3人称語尾変化 i→y・
      強変化動詞・j語根・hubo・1人称綴り変化・dar/ser/ir/ver・
      再帰受身・不定主語） */
  QUIZ_DATA['Spanish1_lesson6.html'] = {
    adminOnly: true,
    title: 'Lección 6 小テスト（予想問題）',
    intro: 'この課の文法事項（点過去形・規則活用・各種不規則活用・再帰動詞の3人称用法）からの予想問題です。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '1. 規則活用（-ar 動詞）',
        instruction: '（&nbsp;）内の不定詞を主語に合わせて点過去形に活用させなさい。',
        items: [
          {
            t: 'Ayer yo (<span class="qz-b" data-a="hablé"></span>) con mi profesora sobre el examen. <span class="qz-hint">(hablar)</span>',
            ja: '昨日私は試験について先生と話した。',
            exp: 'hablar（-ar動詞）の点過去1人称単数：<b>hablé</b>（語尾 -é、アクセント記号あり）。<br>⚠️ アクセント記号を忘れない（habló と区別するためにも重要）。<br>🔤 hablar：hablé / hablaste / habló / hablamos / hablasteis / hablaron'
          },
          {
            t: 'El sábado pasado nosotros (<span class="qz-b" data-a="cenamos"></span>) en un restaurante italiano. <span class="qz-hint">(cenar)</span>',
            ja: '先週の土曜日、私たちはイタリアンレストランで夕食をとった。',
            exp: 'cenar（-ar動詞）の点過去1人称複数：<b>cenamos</b>（語尾 -amos）。<br>⚠️ -ar/-ir 動詞の nosotros 形は現在形と同形（cen<b>amos</b>）。文脈で点過去か現在かを判断する。'
          },
          {
            t: 'Anoche ella (<span class="qz-b" data-a="bailó"></span>) toda la noche en la discoteca. <span class="qz-hint">(bailar)</span>',
            ja: '昨夜彼女はナイトクラブで一晩中踊った。',
            exp: 'bailar（-ar動詞）の点過去3人称単数：<b>bailó</b>（語尾 -ó、アクセント記号あり）。<br>💡 anoche「昨夜」は点過去の典型的な時間表現。'
          },
          {
            t: '¿Cuánto (<span class="qz-b" data-a="tardaste"></span>) en llegar a la estación? <span class="qz-hint">(tardar / tú)</span>',
            ja: '駅に着くのにどのくらいかかりましたか？',
            exp: 'tardar（-ar動詞）の点過去2人称単数：<b>tardaste</b>（語尾 -aste、アクセント記号なし）。<br>💡 tardar en + 不定詞「〜するのに（時間が）かかる」。'
          },
          {
            t: 'Los estudiantes (<span class="qz-b" data-a="escucharon"></span>) la conferencia con mucha atención. <span class="qz-hint">(escuchar)</span>',
            ja: '学生たちは講義をとても注意深く聴いた。',
            exp: 'escuchar（-ar動詞）の点過去3人称複数：<b>escucharon</b>（語尾 -aron、アクセント記号なし）。'
          },
          {
            t: 'Vosotros (<span class="qz-b" data-a="comprasteis"></span>) las entradas con antelación. <span class="qz-hint">(comprar)</span>',
            ja: '君たちはチケットを前もって購入した。',
            exp: 'comprar（-ar動詞）の点過去2人称複数：<b>comprasteis</b>（語尾 -asteis）。<br>⚠️ vosotros 形にアクセント記号はつかない。'
          },
          {
            t: 'Ayer yo (<span class="qz-b" data-a="saludé"></span>) al señor López en la calle. <span class="qz-hint">(saludar)</span>',
            ja: '昨日私は街でロペス氏に挨拶した。',
            exp: 'saludar（-ar動詞）の点過去1人称単数：<b>saludé</b>（語尾 -é、アクセント記号あり）。'
          },
          {
            t: 'Al verme, el señor se (<span class="qz-b" data-a="quitó"></span>) el sombrero. <span class="qz-hint">(quitarse)</span>',
            ja: '私に会うと、その紳士は帽子を脱いだ。',
            exp: 'quitarse（再帰動詞、-ar）の点過去3人称単数：se <b>quitó</b>（アクセント記号あり）。<br>💡 al + 不定詞「〜すると・〜した時」。解説ページの例文に接地。'
          },
          {
            t: 'Unos amigos me (<span class="qz-b" data-a="invitaron"></span>) a comer ceviche. <span class="qz-hint">(invitar)</span>',
            ja: '何人かの友人がセビチェを食べようと誘ってくれた。',
            exp: 'invitar（-ar動詞）の点過去3人称複数：<b>invitaron</b>（語尾 -aron）。<br>💡 invitar a + 不定詞「〜するように誘う」。解説ページの例文に接地。'
          },
          {
            t: 'Ayer nosotros (<span class="qz-b" data-a="reservamos"></span>) las entradas para el concierto. <span class="qz-hint">(reservar)</span>',
            ja: '昨日私たちはコンサートのチケットを予約した。',
            exp: 'reservar（-ar動詞）の点過去1人称複数：<b>reservamos</b>（現在形と同形）。文脈「ayer（昨日）」で点過去と判断。'
          },
          {
            t: 'El año pasado ellos (<span class="qz-b" data-a="viajaron"></span>) por toda América del Sur. <span class="qz-hint">(viajar)</span>',
            ja: '昨年彼らは南米全土を旅した。',
            exp: 'viajar（-ar動詞）の点過去3人称複数：<b>viajaron</b>（語尾 -aron）。<br>💡 el año pasado「昨年」は点過去の典型的な時間表現。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="quedé"></span>) con mis amigos en la plaza mayor. <span class="qz-hint">(quedar)</span>',
            ja: '私は友人たちと市の広場で待ち合わせた。',
            exp: 'quedar（-ar動詞）の点過去1人称単数：<b>quedé</b>（語尾 -é、アクセント記号あり）。<br>💡 quedar con + 人「（約束して）〜と会う・待ち合わせる」。'
          }
        ]
      },
      {
        heading: '2. 規則活用（-er / -ir 動詞）',
        instruction: '（&nbsp;）内の不定詞を主語に合わせて点過去形に活用させなさい。',
        items: [
          {
            t: 'Ayer yo (<span class="qz-b" data-a="comí"></span>) paella en un restaurante valenciano. <span class="qz-hint">(comer)</span>',
            ja: '昨日私はバレンシアのレストランでパエリアを食べた。',
            exp: 'comer（-er動詞）の点過去1人称単数：<b>comí</b>（語尾 -í、アクセント記号あり）。<br>🔤 comer：comí / comiste / comió / comimos / comisteis / comieron'
          },
          {
            t: 'El escritor (<span class="qz-b" data-a="nació"></span>) en Madrid en el siglo XVI. <span class="qz-hint">(nacer)</span>',
            ja: 'その作家は16世紀にマドリードで生まれた。',
            exp: 'nacer（-er動詞）の点過去3人称単数：<b>nació</b>（語尾 -ió、アクセント記号あり）。<br>⚠️ 現在形yo形はnazco（不規則）だが、点過去は規則活用。'
          },
          {
            t: 'Ellos (<span class="qz-b" data-a="comieron"></span>) demasiado en la fiesta. <span class="qz-hint">(comer)</span>',
            ja: '彼らはパーティーで食べ過ぎた。',
            exp: 'comer（-er動詞）の点過去3人称複数：<b>comieron</b>（語尾 -ieron、アクセント記号なし）。'
          },
          {
            t: '(<span class="qz-b" data-a="Viví"></span>) varios años en el extranjero. <span class="qz-hint">(vivir / yo)</span>',
            ja: '私は何年も外国に住んだ。',
            exp: 'vivir（-ir動詞）の点過去1人称単数：<b>viví</b>（語尾 -í、アクセント記号あり）。解説ページの例文そのまま。<br>🔤 vivir：viví / viviste / vivió / vivimos / vivisteis / vivieron'
          },
          {
            t: 'Los niños (<span class="qz-b" data-a="crecieron"></span>) mucho ese verano. <span class="qz-hint">(crecer)</span>',
            ja: 'その夏、子供たちはとても速く成長した。',
            exp: 'crecer（-er動詞）の点過去3人称複数：<b>crecieron</b>（語尾 -ieron）。<br>⚠️ 現在形yo形はcrezco（不規則）だが、点過去は規則活用。'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="vivimos"></span>) en Barcelona durante tres años. <span class="qz-hint">(vivir)</span>',
            ja: '私たちは3年間バルセロナに住んだ。',
            exp: 'vivir（-ir動詞）の点過去1人称複数：<b>vivimos</b>（語尾 -imos）。<br>⚠️ -ar/-ir 動詞のnosotros形は現在形と同形。durante「〜の間」などの文脈で判断。'
          },
          {
            t: '¿Cuándo (<span class="qz-b" data-a="saliste"></span>) de casa esta mañana? <span class="qz-hint">(salir / tú)</span>',
            ja: '今朝あなたは何時に家を出ましたか？',
            exp: 'salir（-ir動詞）の点過去2人称単数：<b>saliste</b>（語尾 -iste、規則活用）。<br>⚠️ 現在形yo形はsalgo（不規則）だが、点過去は全て規則活用。'
          },
          {
            t: 'El tren (<span class="qz-b" data-a="salió"></span>) puntual a las ocho. <span class="qz-hint">(salir)</span>',
            ja: '電車は8時に定刻通りに出発した。',
            exp: 'salir（-ir動詞）の点過去3人称単数：<b>salió</b>（語尾 -ió、アクセント記号あり）。'
          }
        ]
      },
      {
        heading: '3. 不規則①　語根母音変化動詞（-ir 動詞）',
        instruction: '（&nbsp;）内の不定詞を主語に合わせて点過去形に活用させなさい。3人称（3単・3複）のみ語根母音が変化する（e→i、o→u）ことに注意。',
        items: [
          {
            t: 'El bebé (<span class="qz-b" data-a="durmió"></span>) toda la noche sin despertarse. <span class="qz-hint">(dormir)</span>',
            ja: '赤ちゃんは夜通し目を覚まさずに眠った。',
            exp: 'dormir（o→u 型語根母音変化、-ir動詞）の点過去3人称単数：<b>durmió</b>（語根 dorm- → durm-）。<br>⚠️ 語根母音変化は3人称（3単・3複）のみ。1・2人称は変化しない。'
          },
          {
            t: 'Los pacientes (<span class="qz-b" data-a="durmieron"></span>) mal en el hospital. <span class="qz-hint">(dormir)</span>',
            ja: '患者たちは病院でよく眠れなかった。',
            exp: 'dormir の点過去3人称複数：<b>durmieron</b>（o→u 語根変化、語尾 -ieron）。アクセント記号なし。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="dormí"></span>) diez horas ayer por el cansancio. <span class="qz-hint">(dormir)</span>',
            ja: '疲れのせいで昨日私は10時間眠った。',
            exp: 'dormir の点過去1人称単数：<b>dormí</b>（1人称は語根変化なし、語尾 -í）。<br>⚠️ 1・2人称には語根母音変化が起きない。dormí（○）、durmí（×）。'
          },
          {
            t: 'El niño (<span class="qz-b" data-a="pidió"></span>) un helado de chocolate. <span class="qz-hint">(pedir)</span>',
            ja: '男の子はチョコレートアイスクリームを頼んだ。',
            exp: 'pedir（e→i 型語根母音変化、-ir動詞）の点過去3人称単数：<b>pidió</b>（語根 ped- → pid-）。'
          },
          {
            t: 'Los comensales (<span class="qz-b" data-a="pidieron"></span>) la cuenta al mismo tiempo. <span class="qz-hint">(pedir)</span>',
            ja: '食事客たちは一斉に会計を頼んだ。',
            exp: 'pedir の点過去3人称複数：<b>pidieron</b>（e→i 語根変化）。'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="sintió"></span>) mucho frío al salir del edificio. <span class="qz-hint">(sentir)</span>',
            ja: '彼女はビルを出たとき非常に寒さを感じた。',
            exp: 'sentir（e→i 型語根母音変化）の点過去3人称単数：<b>sintió</b>（語根 sent- → sint-）。'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="sentimos"></span>) mucha pena por la noticia. <span class="qz-hint">(sentir)</span>',
            ja: '私たちはその知らせにとても悲しんだ。',
            exp: 'sentir の点過去1人称複数：<b>sentimos</b>（語根変化なし）。<br>⚠️ 語根母音変化は3人称のみ。nosotros は sentimos（○）、sintimos（×）。'
          },
          {
            t: 'El camarero nos (<span class="qz-b" data-a="sirvió"></span>) la paella enseguida. <span class="qz-hint">(servir)</span>',
            ja: 'ウェイターがすぐにパエリアを持ってきた。',
            exp: 'servir（e→i 型語根母音変化）の点過去3人称単数：<b>sirvió</b>（語根 serv- → sirv-）。'
          },
          {
            t: 'Los soldados (<span class="qz-b" data-a="siguieron"></span>) al general sin dudar. <span class="qz-hint">(seguir)</span>',
            ja: '兵士たちは迷わず将軍に従った。',
            exp: 'seguir（e→i 型語根母音変化）の点過去3人称複数：<b>siguieron</b>（語根 segu- → sigu-）。'
          },
          {
            t: 'La madre (<span class="qz-b" data-a="vistió"></span>) al niño con ropa abrigada. <span class="qz-hint">(vestir)</span>',
            ja: '母は子供に暖かい服を着せた。',
            exp: 'vestir（e→i 型語根母音変化）の点過去3人称単数：<b>vistió</b>（語根 vest- → vist-）。'
          },
          {
            t: 'El jurado (<span class="qz-b" data-a="eligió"></span>) a la candidata más preparada. <span class="qz-hint">(elegir)</span>',
            ja: '審査員は最も準備の整った候補者を選んだ。',
            exp: 'elegir（e→i 型語根母音変化）の点過去3人称単数：<b>eligió</b>（語根 eleg- → elig-）。'
          },
          {
            t: 'Dos personas (<span class="qz-b" data-a="murieron"></span>) en el accidente de tráfico. <span class="qz-hint">(morir)</span>',
            ja: 'その交通事故で2人が亡くなった。',
            exp: 'morir（o→u 型語根母音変化）の点過去3人称複数：<b>murieron</b>（語根 mor- → mur-）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="repetí"></span>) la pregunta pero nadie contestó. <span class="qz-hint">(repetir)</span>',
            ja: '私は質問を繰り返したが、誰も答えなかった。',
            exp: 'repetir の点過去1人称単数：<b>repetí</b>（1人称は語根変化なし、語尾 -í）。<br>⚠️ repití（×）。1人称は変化しない。'
          },
          {
            t: 'El profesor (<span class="qz-b" data-a="repitió"></span>) la explicación tres veces. <span class="qz-hint">(repetir)</span>',
            ja: '先生は説明を3回繰り返した。',
            exp: 'repetir（e→i 型語根母音変化）の点過去3人称単数：<b>repitió</b>（語根 repet- → repit-）。'
          },
          {
            t: 'El futbolista (<span class="qz-b" data-a="hirió"></span>) accidentalmente a su compañero. <span class="qz-hint">(herir)</span>',
            ja: 'そのサッカー選手は誤ってチームメイトを怪我させた。',
            exp: 'herir（e→i 型語根母音変化）の点過去3人称単数：<b>hirió</b>（語根 her- → hir-）。'
          }
        ]
      },
      {
        heading: '4. 不規則①（続き）　reír / sonreír / freír',
        instruction: '（&nbsp;）内の不定詞を主語に合わせて点過去形に活用させなさい。',
        items: [
          {
            t: 'Cuando los vio, ella (<span class="qz-b" data-a="sonrió"></span>) amablemente. <span class="qz-hint">(sonreír)</span>',
            ja: '彼らを見ると彼女は愛想よく微笑んだ。',
            exp: 'sonreír の点過去3人称単数：<b>sonrió</b>（語根 re- → r-、e→i 変化で sonri- + ó = sonrió）。アクセント記号なし（1音節の ó）。'
          },
          {
            t: 'Los niños (<span class="qz-b" data-a="rieron"></span>) a carcajadas al ver el payaso. <span class="qz-hint">(reír)</span>',
            ja: '子供たちはピエロを見てげらげらと笑った。',
            exp: 'reír の点過去3人称複数：<b>rieron</b>（語根 re- → r-、語尾 -ieron の i は脱落せず: ri+eron = rieron）。アクセント記号なし。<br>⚠️ j語根とは異なり -ieron の形。ri- で始まるため i の重複なし。'
          },
          {
            t: 'Mi abuela (<span class="qz-b" data-a="frió"></span>) los huevos en aceite de oliva. <span class="qz-hint">(freír)</span>',
            ja: '祖母はオリーブオイルで卵を炒めた。',
            exp: 'freír の点過去3人称単数：<b>frió</b>（e→i 変化で fri- + ó = frió）。アクセント記号なし（単音節）。'
          }
        ]
      },
      {
        heading: '5. 不規則②　3人称語尾変化（-ió→-yó、-ieron→-yeron）',
        instruction: '語根が母音で終わる -er/-ir 動詞は、3人称で i が y に変化します。（&nbsp;）を正しい形に活用させなさい。',
        items: [
          {
            t: 'Él (<span class="qz-b" data-a="leyó"></span>) la novela en una sola semana. <span class="qz-hint">(leer)</span>',
            ja: '彼は1週間でその小説を読んだ。',
            exp: 'leer（語根が e- の -er動詞）の点過去3人称単数：<b>leyó</b>（-ió → -yó）。<br>⚠️ leó（×）。語根末の母音 + 語尾の母音の衝突を避けるため y が挿入される。'
          },
          {
            t: 'Ellos (<span class="qz-b" data-a="leyeron"></span>) el mismo artículo para el debate. <span class="qz-hint">(leer)</span>',
            ja: '彼らはディベートのために同じ記事を読んだ。',
            exp: 'leer の点過去3人称複数：<b>leyeron</b>（-ieron → -yeron）。'
          },
          {
            t: 'Nadie (<span class="qz-b" data-a="creyó"></span>) su versión de los hechos. <span class="qz-hint">(creer)</span>',
            ja: '誰も彼の話を信じなかった。',
            exp: 'creer（語根が e- の -er動詞）の点過去3人称単数：<b>creyó</b>（-ió → -yó）。'
          },
          {
            t: 'Todos (<span class="qz-b" data-a="creyeron"></span>) que sería fácil. <span class="qz-hint">(creer)</span>',
            ja: '誰もがそれは簡単だと思った。',
            exp: 'creer の点過去3人称複数：<b>creyeron</b>（-ieron → -yeron）。'
          },
          {
            t: 'El vaso (<span class="qz-b" data-a="cayó"></span>) de la mesa y se rompió. <span class="qz-hint">(caer)</span>',
            ja: 'コップが机から落ちて割れた。',
            exp: 'caer（語根が a- の -er動詞）の点過去3人称単数：<b>cayó</b>（-ió → -yó）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="leí"></span>) el periódico esta mañana. <span class="qz-hint">(leer)</span>',
            ja: '今朝私は新聞を読んだ。',
            exp: 'leer の点過去1人称単数：<b>leí</b>（語根末の e と語尾の i が隣接するため、二重母音を防ぐアクセント記号必須 → leí）。<br>⚠️ 1人称（lei、×）とは書かない。アクセント記号が必須。'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="oímos"></span>) la noticia por la radio. <span class="qz-hint">(oír)</span>',
            ja: '私たちはラジオでそのニュースを聞いた。',
            exp: 'oír の点過去1人称複数：<b>oímos</b>（oi + mos で二重母音を防ぐためアクセント記号が必須）。3人称は oyó / oyeron（y 挿入）。'
          },
          {
            t: 'El ladrón (<span class="qz-b" data-a="huyó"></span>) cuando vio a la policía. <span class="qz-hint">(huir)</span>',
            ja: '泥棒は警察を見ると逃げた。',
            exp: 'huir（語根が u- の -ir動詞）の点過去3人称単数：<b>huyó</b>（-ió → -yó）。'
          },
          {
            t: 'Los obreros (<span class="qz-b" data-a="construyeron"></span>) el puente en tiempo récord. <span class="qz-hint">(construir)</span>',
            ja: '労働者たちは記録的な速さで橋を建設した。',
            exp: 'construir の点過去3人称複数：<b>construyeron</b>（-ieron → -yeron）。'
          },
          {
            t: 'El precio (<span class="qz-b" data-a="incluyó"></span>) el desayuno y la cena. <span class="qz-hint">(incluir)</span>',
            ja: '料金には朝食と夕食が含まれていた。',
            exp: 'incluir の点過去3人称単数：<b>incluyó</b>（-ió → -yó）。'
          }
        ]
      },
      {
        heading: '6. 不規則③　強変化動詞',
        instruction: 'yo 形の語根を覚えれば他の人称は語尾 -e/-iste/-o/-imos/-isteis/-ieron をつけるだけ。アクセント記号はつかない。（&nbsp;）を正しい形に活用させなさい。',
        items: [
          {
            t: 'Yo no (<span class="qz-b" data-a="supe"></span>) la respuesta hasta el final. <span class="qz-hint">(saber)</span>',
            ja: '私は最後まで答えが分からなかった。',
            exp: 'saber（強変化動詞）の点過去1人称単数：<b>supe</b>（語根 sup-、アクセント記号なし）。<br>⚠️ 強変化動詞のyo形・él形にはアクセント記号がつかない（語根にアクセントがあるため）。'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="supo"></span>) la verdad recién ayer. <span class="qz-hint">(saber)</span>',
            ja: '彼女はほんの昨日真実を知った。',
            exp: 'saber の点過去3人称単数：<b>supo</b>（語根 sup-、アクセント記号なし）。解説ページの例文に接地。'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="estuvimos"></span>) en el museo toda la tarde. <span class="qz-hint">(estar)</span>',
            ja: '私たちは午後中ずっと美術館にいた。',
            exp: 'estar（強変化動詞）の点過去1人称複数：<b>estuvimos</b>（語根 estuv-）。'
          },
          {
            t: '¿Dónde (<span class="qz-b" data-a="estuviste"></span>) anoche? — (<span class="qz-b" data-a="Estuve"></span>) en el cine. <span class="qz-hint">(estar)</span>',
            ja: '昨夜どこにいましたか？ — 映画館にいました。',
            exp: 'estar の点過去2人称単数：<b>estuviste</b>、1人称単数：<b>estuve</b>（ともに語根 estuv-）。解説ページの練習問題に接地。'
          },
          {
            t: 'Ellas (<span class="qz-b" data-a="tuvieron"></span>) problemas con la reserva del hotel. <span class="qz-hint">(tener)</span>',
            ja: '彼女たちはホテルの予約に問題が生じた。',
            exp: 'tener（強変化動詞）の点過去3人称複数：<b>tuvieron</b>（語根 tuv-）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="tuve"></span>) que esperar una hora en la consulta. <span class="qz-hint">(tener)</span>',
            ja: '私は診察室で1時間待たなければならなかった。',
            exp: 'tener の点過去1人称単数：<b>tuve</b>（語根 tuv-、アクセント記号なし）。<br>💡 tuve que + 不定詞「〜しなければならなかった」。'
          },
          {
            t: 'Él (<span class="qz-b" data-a="pudo"></span>) terminar el informe a tiempo. <span class="qz-hint">(poder)</span>',
            ja: '彼は時間内にレポートを終えることができた。',
            exp: 'poder（強変化動詞）の点過去3人称単数：<b>pudo</b>（語根 pud-、アクセント記号なし）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="puse"></span>) las llaves sobre la mesa al llegar. <span class="qz-hint">(poner)</span>',
            ja: '到着すると私は鍵をテーブルの上に置いた。',
            exp: 'poner（強変化動詞）の点過去1人称単数：<b>puse</b>（語根 pus-、アクセント記号なし）。'
          },
          {
            t: 'Pilar se (<span class="qz-b" data-a="puso"></span>) pálida cuando oyó la noticia. <span class="qz-hint">(ponerse)</span>',
            ja: 'ピラルはその知らせを聞くと青ざめた。',
            exp: 'ponerse の点過去3人称単数：se <b>puso</b>（語根 pus-、アクセント記号なし）。解説ページの例文そのまま。<br>💡 ponerse + 形容詞「〜になる（状態変化）」。'
          },
          {
            t: '¿Quién (<span class="qz-b" data-a="hizo"></span>) esta tarta tan deliciosa? <span class="qz-hint">(hacer)</span>',
            ja: 'こんなにおいしいタルトを誰が作ったの？',
            exp: 'hacer（強変化動詞）の点過去3人称単数：<b>hizo</b>（語根 hic- だが3単のみ z に変化：hizo）。<br>⚠️ hico（×）。c → z の変化は音の保持のため。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="hice"></span>) la tarea antes de cenar. <span class="qz-hint">(hacer)</span>',
            ja: '私は夕食前に宿題をした。',
            exp: 'hacer の点過去1人称単数：<b>hice</b>（語根 hic-、アクセント記号なし）。'
          },
          {
            t: 'Tú (<span class="qz-b" data-a="quisiste"></span>) salir pero no pudiste por la lluvia. <span class="qz-hint">(querer)</span>',
            ja: '君は出かけようとしたが、雨でできなかった。',
            exp: 'querer（強変化動詞）の点過去2人称単数：<b>quisiste</b>（語根 quis-）。'
          },
          {
            t: 'Ella (<span class="qz-b" data-a="vino"></span>) desde Osaka solo para verme. <span class="qz-hint">(venir)</span>',
            ja: '彼女は私に会うためだけに大阪からやってきた。',
            exp: 'venir（強変化動詞）の点過去3人称単数：<b>vino</b>（語根 vin-、アクセント記号なし）。'
          },
          {
            t: 'Nosotros (<span class="qz-b" data-a="anduvimos"></span>) por el parque durante horas. <span class="qz-hint">(andar)</span>',
            ja: '私たちは何時間も公園を歩き回った。',
            exp: 'andar（強変化動詞）の点過去1人称複数：<b>anduvimos</b>（語根 anduv-）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="vine"></span>) a la fiesta porque me lo pediste. <span class="qz-hint">(venir)</span>',
            ja: '頼まれたのでパーティーに来たんだ。',
            exp: 'venir の点過去1人称単数：<b>vine</b>（語根 vin-、アクセント記号なし）。'
          }
        ]
      },
      {
        heading: '7. 不規則③（続き）　j 語根の強変化動詞',
        instruction: 'decir・conducir・traer はyo形が j で終わる。3人称複数の語尾は -ieron ではなく <b>-eron</b>（i が脱落）になることに注意。',
        items: [
          {
            t: 'Ella me (<span class="qz-b" data-a="dijo"></span>) que vendría a la reunión. <span class="qz-hint">(decir)</span>',
            ja: '彼女は会議に来ると言っていた。',
            exp: 'decir（j語根強変化動詞）の点過去3人称単数：<b>dijo</b>（語根 dij-、アクセント記号なし）。'
          },
          {
            t: '¿Qué te (<span class="qz-b" data-a="dijeron"></span>) ellos de mí? <span class="qz-hint">(decir)</span>',
            ja: '彼らは私についてあなたに何を言ったの？',
            exp: 'decir の点過去3人称複数：<b>dijeron</b>（語根 dij-、語尾 <b>-eron</b>）。<br>⚠️ j語根は3複が -ieron ではなく -eron（i が脱落）。dijieron（×）。解説ページの練習問題に接地。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="dije"></span>) la verdad desde el principio. <span class="qz-hint">(decir)</span>',
            ja: '私は最初から真実を言った。',
            exp: 'decir の点過去1人称単数：<b>dije</b>（語根 dij-、アクセント記号なし）。'
          },
          {
            t: 'El conductor (<span class="qz-b" data-a="condujo"></span>) el autobús durante diez horas sin parar. <span class="qz-hint">(conducir)</span>',
            ja: '運転手は10時間ぶっ通しでバスを運転した。',
            exp: 'conducir（j語根強変化動詞）の点過去3人称単数：<b>condujo</b>（語根 conduj-）。'
          },
          {
            t: 'Ellos (<span class="qz-b" data-a="trajeron"></span>) flores y vino para la fiesta. <span class="qz-hint">(traer)</span>',
            ja: '彼らはパーティーに花とワインを持ってきた。',
            exp: 'traer（j語根強変化動詞）の点過去3人称複数：<b>trajeron</b>（語根 traj-、語尾 -eron）。<br>⚠️ trajieron（×）。j語根は -eron。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="traje"></span>) un pastel de cumpleaños para ti. <span class="qz-hint">(traer)</span>',
            ja: '私は君のために誕生日ケーキを持ってきた。',
            exp: 'traer の点過去1人称単数：<b>traje</b>（語根 traj-、アクセント記号なし）。'
          }
        ]
      },
      {
        heading: '8. 不規則③（続き）　haber の点過去（hubo）',
        instruction: 'haber の点過去は現代では3人称単数形 hubo のみ使われる。（&nbsp;）に hubo を入れなさい。',
        items: [
          {
            t: 'Anoche (<span class="qz-b" data-a="hubo"></span>) un apagón en el barrio durante dos horas. <span class="qz-hint">(haber)</span>',
            ja: '昨夜その地区では2時間の停電があった。',
            exp: 'haber の点過去：<b>hubo</b>（3人称単数のみ使用）。「（不特定の）〜があった・いた」を表す。解説ページの例文に接地。<br>💡 hay（現在）→ hubo（点過去）。'
          },
          {
            t: 'Ayer (<span class="qz-b" data-a="hubo"></span>) un gran terremoto en el norte del país. <span class="qz-hint">(haber)</span>',
            ja: '昨日その国の北部で大地震があった。',
            exp: 'haber の点過去：<b>hubo</b>。<br>⚠️ hubieron（×）。現代語では主語の数にかかわらず常に単数形 hubo のみ。'
          }
        ]
      },
      {
        heading: '9. 不規則④　1人称単数のみ綴りが変わる動詞',
        instruction: '活用語尾は規則通りだが、yo 形の綴りだけが変化する。（&nbsp;）を正しい形に活用させなさい。',
        items: [
          {
            t: 'Ayer yo (<span class="qz-b" data-a="jugué"></span>) al fútbol con mis amigos del colegio. <span class="qz-hint">(jugar / yo)</span>',
            ja: '昨日私は学校の友人たちとサッカーをした。',
            exp: 'jugar（-ar動詞）の点過去1人称単数：<b>jugué</b>（g→gu 変化）。<br>⚠️ jugé（×）。e の前では g の硬音 /g/ を保つために gu が必要（そのままだと /x/ に読まれる）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="llegué"></span>) tarde a la reunión por el tráfico. <span class="qz-hint">(llegar / yo)</span>',
            ja: '私は渋滞のせいで会議に遅れて到着した。',
            exp: 'llegar の点過去1人称単数：<b>llegué</b>（g→gu 変化）。<br>⚠️ llegé（×）。同様の理由：e の前で g の硬音を保つ。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="pagué"></span>) la cuenta con tarjeta de crédito. <span class="qz-hint">(pagar / yo)</span>',
            ja: '私はクレジットカードで会計を支払った。',
            exp: 'pagar の点過去1人称単数：<b>pagué</b>（g→gu 変化）。解説ページの練習問題に接地。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="busqué"></span>) las llaves por toda la casa pero no las encontré. <span class="qz-hint">(buscar / yo)</span>',
            ja: '私は家中で鍵を探したが、見つからなかった。',
            exp: 'buscar の点過去1人称単数：<b>busqué</b>（c→qu 変化）。<br>⚠️ buscé（×）。e の前では /k/ の音を qu で表す（ce だと /θe/ になる）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="crucé"></span>) la calle con mucho cuidado. <span class="qz-hint">(cruzar / yo)</span>',
            ja: '私は注意して道路を横断した。',
            exp: 'cruzar の点過去1人称単数：<b>crucé</b>（z→c 変化）。<br>⚠️ cruzé（×）。現代スペイン語正書法では ze/zi の綴りはほぼ使われない（e の前では c）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="cargué"></span>) todas las bolsas de la compra yo solo. <span class="qz-hint">(cargar / yo)</span>',
            ja: '私は一人で買い物袋を全部運んだ。',
            exp: 'cargar の点過去1人称単数：<b>cargué</b>（g→gu 変化）。'
          },
          {
            t: 'Yo (<span class="qz-b" data-a="averigüé"></span>) la dirección del hotel en internet. <span class="qz-hint">(averiguar / yo)</span>',
            ja: '私はインターネットでホテルの住所を調べた。',
            exp: 'averiguar の点過去1人称単数：<b>averigüé</b>（gu→gü 変化）。<br>⚠️ averigué（×）。averiguar の u は /w/ として発音される。e の前でこの u の発音を保つには分音符（¨）が必要。最も注意が必要な綴り変化。'
          },
          {
            t: 'Él (<span class="qz-b" data-a="llegó"></span>) al aeropuerto con tiempo suficiente. <span class="qz-hint">(llegar / él)</span>',
            ja: '彼は空港に十分な時間的余裕をもって到着した。',
            exp: 'llegar の点過去3人称単数：<b>llegó</b>（綴り変化なし）。<br>⚠️ 綴り変化はyo形のみ。3人称は規則通り llegó（g のまま、アクセント記号あり）。'
          }
        ]
      },
      {
        heading: '10. 不規則⑤　dar / ser / ir / ver',
        instruction: '特殊な活用をする動詞を正しい点過去形に活用させなさい。',
        items: [
          {
            t: 'Anoche me (<span class="qz-b" data-a="dio"></span>) un fuerte dolor de cabeza. <span class="qz-hint">(dar)</span>',
            ja: '昨夜、私はひどい頭痛になった。',
            exp: 'dar（-ar動詞だが -er/-ir 型語尾）の点過去3人称単数：<b>dio</b>（アクセント記号なし：単音節語）。解説ページの例文そのまま。<br>💡 dar（与える）は「（人に）起こる・感じられる」の意味でも使われる。me dio un dolor「頭痛が生じた」。'
          },
          {
            t: 'Yo le (<span class="qz-b" data-a="di"></span>) las gracias por su generosa ayuda. <span class="qz-hint">(dar)</span>',
            ja: '私は彼の寛大な助けに感謝した。',
            exp: 'dar の点過去1人称単数：<b>di</b>（単音節のためアクセント記号なし）。<br>🔤 dar：di / diste / dio / dimos / disteis / dieron'
          },
          {
            t: 'El año pasado yo (<span class="qz-b" data-a="fui"></span>) a México de vacaciones. <span class="qz-hint">(ir)</span>',
            ja: '昨年私はメキシコに休暇で行った。',
            exp: 'ir の点過去1人称単数：<b>fui</b>（ser と同形。文脈「a México」で ir と判断）。<br>🔤 ir/ser：fui / fuiste / fue / fuimos / fuisteis / fueron'
          },
          {
            t: 'Ayer ella (<span class="qz-b" data-a="fue"></span>) al médico por primera vez. <span class="qz-hint">(ir)</span>',
            ja: '昨日彼女は初めて医者に行った。',
            exp: 'ir の点過去3人称単数：<b>fue</b>（ser と同形。文脈「al médico」で ir と判断）。アクセント記号なし（単音節）。'
          },
          {
            t: 'El señor García (<span class="qz-b" data-a="fue"></span>) mi profesor de español durante dos años. <span class="qz-hint">(ser)</span>',
            ja: 'ガルシア先生は2年間私のスペイン語の先生だった。',
            exp: 'ser の点過去3人称単数：<b>fue</b>（ir と同形。文脈「mi profesor」で ser と判断）。<br>💡 ser と ir の点過去は全ての人称で同形。文脈だけで区別する。'
          },
          {
            t: 'Ayer yo (<span class="qz-b" data-a="vi"></span>) una película muy emocionante en el cine. <span class="qz-hint">(ver)</span>',
            ja: '昨日私は映画館でとても感動的な映画を見た。',
            exp: 'ver の点過去1人称単数：<b>vi</b>（単音節のためアクセント記号なし）。<br>🔤 ver：vi / viste / vio / vimos / visteis / vieron'
          },
          {
            t: '¿(<span class="qz-b" data-a="Fuiste"></span>) al concierto el viernes pasado? <span class="qz-hint">(ir / tú)</span>',
            ja: '先週金曜日のコンサートに行きましたか？',
            exp: 'ir の点過去2人称単数：<b>fuiste</b>。'
          },
          {
            t: 'Ellos (<span class="qz-b" data-a="vieron"></span>) el partido de fútbol juntos en casa. <span class="qz-hint">(ver)</span>',
            ja: '彼らは一緒に家でサッカーの試合を見た。',
            exp: 'ver の点過去3人称複数：<b>vieron</b>（アクセント記号なし）。'
          }
        ]
      },
      {
        heading: '11. 再帰動詞の3人称用法①　再帰受身',
        instruction: 'se + 他動詞（3人称）+ 物の主語。主語の数に動詞の数を一致させること。（&nbsp;）を正しい形にしなさい。',
        items: [
          {
            t: 'En esta feria (<span class="qz-b" data-a="se vende"></span>) artesanía indígena de toda clase. <span class="qz-hint">(vender)</span>',
            ja: 'この市では、あらゆる種類の先住民の手工芸品が売られている。',
            exp: '再帰受身：se + 動詞（主語に一致）。主語 artesanía（単数）→ <b>se vende</b>（3単）。解説ページの例文そのまま。<br>⚠️ 主語（物）の数に動詞を合わせる。artesanía は単数なので se venden（×）。'
          },
          {
            t: 'En esa tienda (<span class="qz-b" data-a="se venden"></span>) productos artesanales muy bonitos. <span class="qz-hint">(vender)</span>',
            ja: 'その店ではとても美しい手工芸品が売られている。',
            exp: '再帰受身：主語 productos artesanales（複数）→ <b>se venden</b>（3複）。<br>⚠️ se vende（×）。複数の主語には複数形の動詞。'
          },
          {
            t: 'Aquí no (<span class="qz-b" data-a="se respetan"></span>) las reglas de tránsito. <span class="qz-hint">(respetar)</span>',
            ja: 'ここでは交通ルールが尊重されない。',
            exp: '再帰受身：主語 las reglas（複数）→ <b>se respetan</b>（3複）。解説ページの例文そのまま。'
          },
          {
            t: 'En esta ciudad (<span class="qz-b" data-a="se habla"></span>) catalán además del español. <span class="qz-hint">(hablar)</span>',
            ja: 'この街ではスペイン語のほかにカタルーニャ語も話されている。',
            exp: '再帰受身：主語 catalán（単数）→ <b>se habla</b>（3単）。'
          },
          {
            t: 'En muchos países (<span class="qz-b" data-a="se hablan"></span>) lenguas indígenas además del español. <span class="qz-hint">(hablar)</span>',
            ja: '多くの国ではスペイン語のほかに先住民の言語も話されている。',
            exp: '再帰受身：主語 lenguas indígenas（複数）→ <b>se hablan</b>（3複）。'
          },
          {
            t: 'En esa empresa (<span class="qz-b" data-a="se busca"></span>) un programador con experiencia. <span class="qz-hint">(buscar)</span>',
            ja: 'その会社では経験豊富なプログラマーを探している。',
            exp: '再帰受身：主語 un programador（単数）→ <b>se busca</b>（3単）。'
          },
          {
            t: 'En esa librería (<span class="qz-b" data-a="se venden"></span>) libros de segunda mano a buen precio. <span class="qz-hint">(vender)</span>',
            ja: 'その本屋では古本が安く売られている。',
            exp: '再帰受身：主語 libros（複数）→ <b>se venden</b>（3複）。'
          }
        ]
      },
      {
        heading: '12. 再帰動詞の3人称用法②　不定主語（無人称用法）',
        instruction: 'se + 動詞（常に3人称単数）で「（一般的に）人は〜する」を表す。主語は常に単数固定。（&nbsp;）を正しい形にしなさい。',
        items: [
          {
            t: '¿Cuánto tiempo (<span class="qz-b" data-a="se tarda"></span>) de Madrid a Barcelona en AVE? <span class="qz-hint">(tardar)</span>',
            ja: 'マドリードからバルセロナまで新幹線でどのくらいかかりますか？',
            exp: '不定主語：se + 動詞（常に3単）= <b>se tarda</b>。「（人は一般に）〜かかる」。解説ページの例文を応用。<br>⚠️ 不定主語は主語の「もの」がなく、常に3単固定。'
          },
          {
            t: 'En esta ciudad (<span class="qz-b" data-a="se vive"></span>) muy bien. <span class="qz-hint">(vivir)</span>',
            ja: 'この街は暮らし向きが良い。',
            exp: '不定主語：se + 動詞（常に3単）= <b>se vive</b>。解説ページの例文そのまま。<br>💡「この街では（人は）良く暮らしている」という一般的な「人」を表す。'
          },
          {
            t: 'Aquí (<span class="qz-b" data-a="se come"></span>) muy bien y a buen precio. <span class="qz-hint">(comer)</span>',
            ja: 'ここではとても美味しく、しかも安く食べられる。',
            exp: '不定主語：se + 動詞（常に3単）= <b>se come</b>。「人は〜する」という一般的な人を表す。'
          },
          {
            t: 'En España (<span class="qz-b" data-a="se cena"></span>) tarde, generalmente a las diez. <span class="qz-hint">(cenar)</span>',
            ja: 'スペインでは一般に夜10時頃と遅く夕食をとる。',
            exp: '不定主語：se + 動詞（常に3単）= <b>se cena</b>。「スペインでは（人は一般に）〜する」。'
          },
          {
            t: 'En este museo (<span class="qz-b" data-a="se puede"></span>) fotografiar las obras. <span class="qz-hint">(poder)</span>',
            ja: 'この美術館では作品を撮影できる。',
            exp: '不定主語：se + 動詞（常に3単）= <b>se puede</b>。<br>⚠️ obras が複数でも動詞は3単固定（se pueden と間違えやすい）。不定主語は常に単数。'
          },
          {
            t: 'Cuando (<span class="qz-b" data-a="se trabaja"></span>) mucho, es importante descansar bien. <span class="qz-hint">(trabajar)</span>',
            ja: 'たくさん働くときは、よく休むことが大切だ。',
            exp: '不定主語：se + 動詞（常に3単）= <b>se trabaja</b>。「（一般に）人は〜するとき」。<br>💡 再帰受身との区別：不定主語は「人が主体」、再帰受身は「物が主語（主語の数に一致）」。'
          }
        ]
      }
    ]
  };

})();
