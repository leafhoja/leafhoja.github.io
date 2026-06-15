'use strict';
/* ═══════════════════════════════════════════════
   小テスト 予想問題 ── 二列（Spanish2）専用
   ───────────────────────────────────────────────
   ・quiz-data.js の後に読み込むこと（QUIZ_DATA が先に定義されている必要あり）。
   ・quiz-predicted-s1.js と合わせて 2 ファイルを読み込む。
   ・adminOnly: true のページは管理者のみ表示。
   ═══════════════════════════════════════════════ */
(function () {
  if (typeof QUIZ_DATA === 'undefined') { return; }

  /* ── 二列 Lección 4 予想問題（ir a＋原形・pensar＋原形・querer＋原形・
     比較・最上級・hay que/deber＋原形・lo＋形容詞・quedar・感嘆文）──
     接地：Spanish2_lesson4.html の対話・読解・重要表現 */
  QUIZ_DATA['Spanish2_lesson4.html'] = {
    adminOnly: true,
    title: 'Lección 4 小テスト（予想問題）',
    intro: 'この課の重要表現（ir a＋原形・pensar/querer＋原形・比較級・最上級・感嘆文・hay que/deber＋原形・lo＋形容詞・quedar など）からの予想問題です。空所をタップすると解答が、「答えを確認」で解説が表示されます。',
    sections: [
      {
        heading: '和文西訳（１）ir a・pensar・querer＋原形',
        instruction: '次の日本語をスペイン語に訳しなさい。',
        items: [
          /* ───── ir a＋原形（既存 8 問） ───── */
          {
            ja: 'ペルーに旅行する予定なの？',
            a: '¿Vas a viajar a Perú?',
            exp: '「〜する予定だ・〜するつもりだ」= <b>ir a＋原形</b>（近未来）。主語 tú（2単）→ ir の2単 <b>vas</b>。<br>⚠️ ir の全活用：voy / vas / va / vamos / vais / van（暗記必須）。<br>💡 ir a＋原形 は「予定・意図・近い未来」を幅広く表せる。pensar＋原形（計画・構想）・querer＋原形（願望）との区別も意識すること。<br>📖 <b>語句</b>：viajar「旅行する」（-ar規則動詞）／a Perú「ペルーへ（移動先の前置詞 a）」'
          },
          {
            ja: '何日間あっちにいる予定なの？',
            a: '¿Cuántos días vas a estar allí?',
            exp: 'ir a＋原形 の疑問文。<b>cuántos</b> は días（男性複数）に一致。allí「そこに（特定の場所）」。<br>⚠️ cuánto は días（男複）なので cuántos（×cuántas は誤り）。<br>💡 ¿Cuántos días…?「何日間〜?」は旅行会話の定番。vas a estar「滞在する予定だ」の組み合わせで確認しておく。<br>📖 <b>語句</b>：cuántos「いくつの（男複）」／día「日」／allí「そこに（特定の場所）」'
          },
          {
            ja: '私は滞在を利用して近くの他の場所を訪れるつもりだ。',
            a: 'Voy a aprovechar la estancia para conocer otros lugares cercanos.',
            exp: '<b>ir a＋原形</b>（近未来）＋<b>aprovechar＋名詞＋para＋原形</b>「〜を利用して…する」の重要構文。<br>⚠️ otros は不定冠詞なしで使う（×un otro lugar）。<br>💡 aprovechar（機会・時間などを）「活かす・有効利用する」は旅行文脈で頻出。voy a＋原形 でつなぐのが自然。<br>📖 <b>語句</b>：aprovechar「活かす・利用する」／estancia「滞在」／cercano「近くの」'
          },
          {
            ja: '彼女は来月メキシコに旅行する予定だ。',
            a: 'Va a viajar a México el mes que viene.',
            exp: 'ir a＋原形 の3人称単数形。<b>va a＋原形</b>。「来月」= <b>el mes que viene</b>（または el mes próximo）。<br>⚠️ 移動先の前置詞は a（a México）。el mes próximo も正解。<br>💡 va a＋原形 は最頻出の形（3単）。天気予報などでも「Va a llover.「雨が降りそうだ」」のように使う。<br>📖 <b>語句</b>：va a＋原形「〜する予定だ（3単）」／el mes que viene「来月」'
          },
          {
            ja: '私たちは今年の夏、その世界遺産を訪れるつもりだ。',
            a: 'Vamos a conocer ese Patrimonio de la Humanidad este verano.',
            exp: 'ir a＋原形 の1人称複数形。<b>vamos a＋原形</b>。conocer「場所を訪れる・面識をもつ」。<br>⚠️ vamos a＋原形 は「〜するつもり」。¡Vamos a＋原形! は勧誘「〜しよう」にもなる。<br>💡 visitar でも可。conocer は「初めて訪れる・初めて体験する」のニュアンスがある。<br>📖 <b>語句</b>：conocer「訪れる・知る（場所・人）」／Patrimonio de la Humanidad「世界遺産」／verano「夏」'
          },
          {
            ja: 'あなたは何月に南米（América del Sur）に行く予定ですか？',
            a: '¿En qué mes va usted a ir a América del Sur?',
            exp: '「あなた」= <b>usted</b>（3人称扱い）→ ir の3単 <b>va</b>。「何月に」= <b>en qué mes</b>。<br>⚠️ usted は3人称扱いなので va（×vas）。疑問符は ¿ ? で前後を囲む。<br>💡 usted 主語のとき、ir a の ir は3単 va になることに注意。vas a は tú（2単）の形。<br>📖 <b>語句</b>：usted「あなた（丁寧）」（3人称扱い）／América del Sur「南米」／en qué mes「何月に」'
          },
          {
            ja: '彼らは8月にいくつかの都市を訪れる予定だ。',
            a: 'Van a visitar varias ciudades en agosto.',
            exp: 'ir a＋原形 の3人称複数形。<b>van a＋原形</b>。「いくつかの」= <b>varias</b>（ciudades 女性複数に一致）。<br>⚠️ van（×vanes は誤り）。varias は形容詞で名詞の性数に一致。<br>💡 van a＋原形 は3複の形。一方 ir a 全活用（voy/vas/va/vamos/vais/van）が正確に言えるように繰り返し練習しよう。<br>📖 <b>語句</b>：van a＋原形「〜する予定だ（3複）」／varias「いくつかの」／agosto「8月」'
          },
          {
            ja: '君はいつスペインに旅行するつもりなの？',
            a: '¿Cuándo vas a viajar a España?',
            exp: 'ir a＋原形 の2人称単数疑問文。疑問詞 <b>cuándo</b>「いつ」。移動先は a＋地名（a España）。<br>⚠️ cuándo にアクセント記号（cuando「〜のとき」接続詞と区別）。<br>💡 疑問詞＋ir a＋原形 の語順：¿Cuándo vas a…? / ¿Adónde vas a…? / ¿Con quién vas a…? など応用が広い。<br>📖 <b>語句</b>：cuándo「いつ（疑問詞）」／España「スペイン」'
          },
          /* ───── ir a＋原形（新規 5 問） ───── */
          {
            ja: '私は来年その世界遺産を訪れる予定だ。',
            a: 'Voy a visitar ese Patrimonio de la Humanidad el año que viene.',
            exp: 'ir a＋原形 の1人称単数形（<b>voy a</b>）。「来年」= <b>el año que viene</b>（または el año próximo）。<br>⚠️ a＋el で縮約 al になるのは直後が普通名詞のとき。Patrimonio は固有名詞的に扱うため縮約しない。<br>💡 el año que viene は「来年（来たる年）」の最も自然な表現。el próximo año も同義。<br>📖 <b>語句</b>：voy a＋原形「〜する予定だ（1単）」／el año que viene「来年」／visitar「訪れる」'
          },
          {
            ja: '彼女は旅行の写真をたくさん撮る予定だ。',
            a: 'Va a sacar muchas fotos del viaje.',
            exp: 'ir a＋原形 の3単（<b>va a</b>）。「写真を撮る」= <b>sacar fotos</b>。muchas は fotos（女複）に一致。<br>⚠️ sacar fotos が標準表現（スペイン）。中南米では tomar fotos も使われる。<br>💡 del viaje は de＋el viaje の縮約（al と del は2大縮約形）。「旅行の（思い出の）写真」の意。<br>📖 <b>語句</b>：sacar fotos「写真を撮る」／muchas「たくさんの（女複）」／viaje「旅行・旅」'
          },
          {
            ja: '私はその旅の前に、スペイン語をもっと練習する予定だ。',
            a: 'Voy a practicar más español antes del viaje.',
            exp: 'ir a＋原形 の1単（<b>voy a</b>）。「もっと」= <b>más</b>（副詞）。antes de＋el → <b>antes del</b>（縮約）。<br>⚠️ antes del（a＋el 縮約）。antes de la semana のように女性名詞には縮約なし。<br>💡 practicar は -car 動詞（点過去1単で practiqué と綴り変化するが現在は規則活用）。<br>📖 <b>語句</b>：practicar「練習する」／más「もっと（副詞）」／antes del「〜の前に（de＋el 縮約）」'
          },
          {
            ja: '君たちはいくつかの国々を旅行するつもりなの？',
            a: '¿Vais a viajar por varios países? / ¿Van a viajar por varios países?',
            exp: 'ir a＋原形。スペイン式2複 <b>vais a</b>、中南米式 <b>van a</b>（ustedes）。「〜を旅する」= <b>viajar por</b>（通り抜ける旅行の意）。<br>⚠️ viajar a は「〜へ行く（目的地）」、viajar por は「〜を旅する（通過・周遊）」。国を回るなら por が自然。<br>💡 varios は países（男複）に一致。país の複数は países（語尾 -ís はアクセント記号が残る）。<br>📖 <b>語句</b>：viajar por「〜を旅する（周遊）」／varios「いくつかの（男複）」／país「国」（複数 países）'
          },
          {
            ja: 'このバス（autobús）は来週から新しい路線を運行する予定だ。',
            a: 'Este autobús va a operar una nueva línea desde la semana que viene.',
            exp: 'ir a＋原形 の3単（<b>va a</b>）。「〜から（起点）」= <b>desde</b>。「来週」= la semana que viene。<br>⚠️ desde「〜から（時間・場所の起点）」と de「〜から（所属・原料）」を区別する。<br>💡 新しい情報を伝えるとき ir a＋原形 を使うのが自然（単純未来より口語的）。<br>📖 <b>語句</b>：operar「運行する・操作する」／línea「路線・ライン」／desde「〜から（起点）」／la semana que viene「来週」'
          },
          /* ───── pensar＋原形（既存 2 問） ───── */
          {
            ja: 'エルビラは8月にいくつかの町を訪れようと思っている。',
            a: 'Elvira piensa visitar varias ciudades en agosto.',
            exp: '<b>pensar＋原形</b>「〜するつもり（計画・意図）」。pensar は e→ie 変化（ブーツ型）：<b>piensa</b>（3単）。<br>⚠️ pienso / piensas / piensa / pensamos / pensáis / piensan。1複・2複は変化なし。<br>💡 pensar＋原形は「心の中で考えている計画」のニュアンス。ir a＋原形より主観的・意図的なニュアンスが強め。<br>📖 <b>語句</b>：pensar＋原形「〜するつもりだ」（piensa は3単）／varias ciudades「いくつかの都市」／agosto「8月」'
          },
          {
            ja: '私はあちらが冬になる8月に南米を旅行しようと思っている。',
            a: 'Pienso viajar a América del Sur en agosto, cuando allá es invierno.',
            exp: '<b>pensar＋原形</b>（1単 <b>pienso</b>）。<b>cuando allá es invierno</b>「あちらが冬（のとき）」。南半球では8月が冬になる。<br>⚠️ cuando の後は現在形（allá es invierno）。allá「あちら（漠然と遠い場所）」。<br>💡 allá（距離感の強い「あちら」）vs allí（特定の「そこ」）の区別も確認しておく。<br>📖 <b>語句</b>：pienso＋原形「〜しようと思っている（1単）」／cuando「〜のとき」／allá「あちら」／invierno「冬」'
          },
          /* ───── pensar＋原形（新規 4 問） ───── */
          {
            ja: '私は卒業後にラテンアメリカを旅行しようと思っている。',
            a: 'Pienso viajar por América Latina después de la graduación.',
            exp: '<b>pensar＋原形</b>（1単 <b>pienso</b>）。e→ie 変化（×penseo は誤り）。「〜を旅する」= viajar por。「卒業後に」= después de la graduación。<br>⚠️ viajar a「〜へ行く（目的地）」vs viajar por「〜を旅する（周遊）」の使い分けに注意。<br>💡 después de＋名詞「〜の後に」。después de la clase「授業の後に」など日常でも頻出の前置詞句。<br>📖 <b>語句</b>：pienso＋原形「〜しようと思っている（1単）」／por「〜を通って（周遊）」／graduación「卒業」'
          },
          {
            ja: '彼らは来年ペルーで2週間過ごそうと思っている。',
            a: 'Piensan pasar dos semanas en Perú el año que viene.',
            exp: '<b>pensar＋原形</b>（3複 <b>piensan</b>）。e→ie 変化（ブーツ型内）。「〜を過ごす」= pasar＋期間。<br>⚠️ piensan（3複、ブーツ型内で e→ie 変化）。1複 pensamos・2複 pensáis は変化なし。<br>💡 pasar＋期間「〜（の時間）を過ごす」は重要表現。pasar las vacaciones「休暇を過ごす」なども押さえる。<br>📖 <b>語句</b>：piensan＋原形「〜しようと思っている（3複）」／pasar「過ごす」／dos semanas「2週間」'
          },
          {
            ja: '彼はどこへ行こうと思っているの？',
            a: '¿Adónde piensa ir él?',
            exp: '<b>pensar＋原形</b>（3単 <b>piensa</b>）。「どこへ（移動先）」= <b>adónde</b>。ir（行く）は原形のまま。<br>⚠️ adónde（移動の方向を問う疑問詞）と dónde（場所・位置を問う疑問詞）を区別する。<br>💡 él は主語として文末に置くことが多い（スペイン語は主語省略可能なため、強調や区別したいときのみ明示）。<br>📖 <b>語句</b>：piensa＋原形「〜しようと思っている（3単）」／adónde「どこへ（移動先疑問詞）」'
          },
          {
            ja: '私たちはその旅行でインカの遺跡を見ようと思っている。',
            a: 'Pensamos ver las ruinas incaicas en ese viaje.',
            exp: '<b>pensar＋原形</b>（1複 <b>pensamos</b>）。1複はブーツ型の外なので <b>変化なし</b>（×piensamos は誤り）。<br>⚠️ piensamos としない。ブーツ型外（1複・2複）は語根変化なし。<br>💡 ruinas（廃墟・遺跡）は常に複数形で使うことが多い。incaico「インカの」（ruinas に合わせ女複 incaicas）。<br>📖 <b>語句</b>：pensamos＋原形「〜しようと思っている（1複）」／ruinas incaicas「インカの遺跡」'
          },
          /* ───── querer＋原形（既存 3 問） ───── */
          {
            ja: '私はクスコとマチュピチュを訪れたい。',
            a: 'Quiero conocer Cusco y Machu Picchu.',
            exp: '<b>querer＋原形</b>「〜したい（願望）」。querer は e→ie 変化：<b>quiero</b>（1単）。conocer「場所を訪れる・面識をもつ」。<br>⚠️ quiero（×quereo は誤り）。visitar でも可。<br>💡 querer＋原形 は「个人の願望・欲求」。ir a＋原形（予定）・pensar＋原形（計画）と比べ、実現の確約がなくても使える。<br>📖 <b>語句</b>：querer＋原形「〜したい」／quiero「私は〜したい（1単）」／conocer「訪れる」'
          },
          {
            ja: '彼女はどの世界遺産を訪れたいの？',
            a: '¿Qué Patrimonio de la Humanidad quiere conocer ella?',
            exp: '<b>querer＋原形</b>（3単 <b>quiere</b>）。疑問詞 <b>qué</b>「どの・何の」（名詞直前では疑問形容詞）。<br>⚠️ quiere（×quere は誤り）。qué は疑問形容詞として直後の名詞にかかる。<br>💡 ella は主語として文末に置く（区別・強調のため）。省略しても正解。<br>📖 <b>語句</b>：qué「どの・何の（疑問形容詞）」／quiere＋原形「〜したい（3単）」'
          },
          {
            ja: '私たちはその世界遺産の美しさを鑑賞したい。',
            a: 'Queremos apreciar la belleza de ese Patrimonio de la Humanidad.',
            exp: '<b>querer＋原形</b>（1複 <b>queremos</b>）。<b>apreciar</b>「鑑賞する・楽しむ」（Lectura 文3より）。belleza「美しさ」。<br>⚠️ queremos は語幹変化なし（1複はブーツ型の外）。×querimos は誤り。<br>💡 apreciar は音楽・芸術・景色など「価値を理解して楽しむ」意。disfrutar de（楽しむ）より少し高尚なニュアンス。<br>📖 <b>語句</b>：queremos「〜したい（1複）」／apreciar「鑑賞する・楽しむ」／belleza「美しさ」'
          },
          /* ───── querer＋原形（新規 4 問） ───── */
          {
            ja: '私はその国の文化を体験したい。',
            a: 'Quiero experimentar la cultura de ese país.',
            exp: '<b>querer＋原形</b>（1単 <b>quiero</b>）。e→ie 変化（×quereo は誤り）。「体験する」= <b>experimentar</b> または vivir。<br>⚠️ quiero のスペルを確認（qu- で始まる）。原形動詞 experimentar は変化しない。<br>💡 experimentar「体験する・経験する」（-ar規則動詞）。vivir la cultura「文化を生きる（体験する）」という表現もある。<br>📖 <b>語句</b>：quiero＋原形「〜したい（1単）」／experimentar「体験する・経験する」／cultura「文化」'
          },
          {
            ja: '私たちはインカの建築物を間近で見たい。',
            a: 'Queremos ver de cerca las construcciones incaicas.',
            exp: '<b>querer＋原形</b>（1複 <b>queremos</b>）。「間近で」= <b>de cerca</b>。「インカの建築物」= las construcciones incaicas（対話文より）。<br>⚠️ queremos は e→ie 変化なし（1複はブーツ型の外）。<br>💡 de cerca「近くで・間近で」⇔ de lejos「遠くから」。前置詞句として副詞的に使う。<br>📖 <b>語句</b>：queremos＋原形「〜したい（1複）」／de cerca「間近で・近くで」／construcción「建築物」（複数 construcciones）'
          },
          {
            ja: '彼女はその写真を友人たちに見せたい。',
            a: 'Ella quiere mostrar las fotos a sus amigos.',
            exp: '<b>querer＋原形</b>（3単 <b>quiere</b>）。「〜に見せる」= mostrar a（間接目的語に a）。<br>⚠️ quiere（×quere は誤り）。mostrar は o→ue 型（muestra/3単）だが、ここは原形のまま。<br>💡 mostrar a＋人「〜に見せる」。enseñar a（〜に教える）と使い分けに注意。<br>📖 <b>語句</b>：quiere＋原形「〜したい（3単）」／mostrar「見せる・示す」／fotos「写真」（foto の複数）'
          },
          {
            ja: '彼らはその旅行で新しい友人をたくさん作りたい。',
            a: 'Ellos quieren hacer muchos amigos nuevos en ese viaje.',
            exp: '<b>querer＋原形</b>（3複 <b>quieren</b>）。「友人を作る」= <b>hacer amigos</b>（重要熟語）。「新しい」= nuevo（後置：amigos nuevos）。<br>⚠️ quieren（e→ie 変化、ブーツ型内）。×querens は誤り。<br>💡 hacer amigos「友達を作る」は muy（「とても」）と組み合わせず、muchos amigos（たくさんの友達）と量で修飾する。<br>📖 <b>語句</b>：quieren＋原形「〜したい（3複）」／hacer amigos「友人を作る」／nuevo「新しい」（複数 nuevos）'
          }
        ]
      },
      {
        heading: '和文西訳（２）比較・最上級',
        instruction: '次の日本語をスペイン語に訳しなさい。',
        items: [
          /* ───── 既存 10 問 ───── */
          {
            ja: 'マチュピチュは富士山より低い（高くない）。',
            a: 'Machu Picchu es menos alta que el Monte Fuji.',
            exp: '<b>menos＋形容詞＋que</b>（劣等比較）「〜より…でない」。alta は ciudadela（女単）に合わせた女性形。<br>⚠️ menos…que の que を de にしない。baja より <b>menos alta</b> が対話の自然な表現。<br>💡 劣等比較（menos…que）と優等比較（más…que）は対になっているので両方セットで覚える。<br>📖 <b>語句</b>：menos alta「より低い（より高くない）」／que「〜より（比較の接続詞）」／el Monte Fuji「富士山」'
          },
          {
            ja: 'マチュピチュは富士山より高いの？低いの？',
            a: '¿Es Machu Picchu más alta o menos alta que el Monte Fuji?',
            exp: '優等比較 <b>más＋形容詞＋que</b> と劣等比較 <b>menos＋形容詞＋que</b> の両方を使った疑問文。alta は ciudadela（女単）に一致。<br>⚠️ 比較対象は que＋el Monte Fuji（que の後）。形容詞は主語の性に一致。<br>💡 o「〜か〜か（選択）」で2つの比較表現を並べる。対話文の構造そのまま。<br>📖 <b>語句</b>：más alta「より高い」／menos alta「より低い」／que「〜より（比較）」'
          },
          {
            ja: 'クスコはリマ（Lima）より古い。',
            a: 'Cusco es más antiguo que Lima.',
            exp: '<b>más＋形容詞＋que</b>（優等比較）。antiguo は Cusco（都市名：男性扱い）に一致して男性単数形。<br>⚠️ Cusco は都市名で男性名詞扱い → antiguo（×antigua は誤り）。<br>💡 都市名の性は基本的に男性扱い。ただし ciudad「都市」は女性名詞なので、文脈によって変わることがある点に注意。<br>📖 <b>語句</b>：antiguo「古い・古代の」（男単）／más antiguo que「〜より古い」'
          },
          {
            ja: 'この場所はあの場所より興味深い歴史を持っている。',
            a: 'Este lugar tiene una historia más interesante que aquel.',
            exp: '<b>más＋形容詞＋que</b>（優等比較）。interesante は historia（女単）を修飾するが、-e 語尾で<b>男女同形</b>（複数は interesantes）。<br>⚠️ interesante は性変化なし（×interesanta は誤り）。<br>💡 -nte・-ble・-z・-l 語尾の形容詞は男女同形のものが多い。性変化しない形容詞のリストも整理しておく。<br>📖 <b>語句</b>：interesante「興味深い」（男女同形）／historia「歴史」／aquel「あの（もの）」'
          },
          {
            ja: '大きなものもあれば古いものもある。しかし重要でないものは一つもない。',
            a: 'Algunos son más grandes, otros más antiguos, pero ninguno es menos importante.',
            exp: '<b>algunos…otros</b>「一部は〜・他は〜」（対比表現）。<b>ninguno</b>「一つも〜ない」（完全否定）。menos importante（劣等比較）。<br>⚠️ ninguno は男性単数（×ningunos は誤り）。動詞 es（単数）に注意。<br>💡 ninguno は単数で使うのが原則。×ninguno son とせず ninguno es（動詞単数）。<br>📖 <b>語句</b>：algunos「一部は」／otros「他のものは」／ninguno「一つも〜ない（男単）」'
          },
          {
            ja: 'イグアスの滝（Las Cataratas del Iguazú）はテオティワカン（Teotihuacán）よりも有名だ。',
            a: 'Las Cataratas del Iguazú son más famosas que Teotihuacán.',
            exp: '<b>más＋形容詞＋que</b>（優等比較）。Las Cataratas（女性複数）に一致して <b>famosas</b>（複数形）。<br>⚠️ 主語が複数なので形容詞も複数（famosas）・動詞は son。<br>💡 famoso（有名な）の性数変化：famoso / famosa / famosos / famosas。女複は famosas。<br>📖 <b>語句</b>：famoso「有名な」（女複 famosas）／Cataratas del Iguazú「イグアスの滝」'
          },
          {
            ja: 'クスコはペルーで最も観光地として人気の都市だ。',
            a: 'Cusco es la ciudad más turística de Perú.',
            exp: '<b>定冠詞＋más＋形容詞＋de＋範囲</b>（最上級）。la ciudad（女単）→ <b>la más turística</b>。範囲は <b>de Perú</b>。<br>⚠️ 最上級の範囲は que ではなく <b>de</b>。定冠詞は名詞の性数に合わせる。<br>💡 turístico の女単形は turística（-o/-a 型の性変化）。「観光の・観光業の」という形容詞。<br>📖 <b>語句</b>：turístico「観光の」（女単 turística）／de Perú「ペルーで（範囲）」'
          },
          {
            ja: 'マチュピチュはペルーで最も有名な場所の一つだ。',
            a: 'Machu Picchu es uno de los lugares más famosos de Perú.',
            exp: '<b>uno de los＋名詞（複数）＋más＋形容詞＋de</b>「最も〜な…の一つ」。lugares（男複）→ <b>los más famosos</b>（男複）。<br>⚠️ uno de los / una de las の定冠詞は後ろの名詞に一致。famosos は複数形。<br>💡 この構文は「〜の一つ」を表す最重要パターン。Japón es uno de los países más seguros del mundo.「日本は世界で最も安全な国の一つ」のように応用できる。<br>📖 <b>語句</b>：uno de los más…「最も〜の一つ（男性）」／famoso「有名な」（男複 famosos）'
          },
          {
            ja: 'テオティワカンはラテンアメリカで最も多く訪れられる場所の一つだ。',
            a: 'Teotihuacán es uno de los lugares más visitados en América Latina.',
            exp: '<b>uno de los más visitados</b>（最上級）。visitado「訪れられた」は過去分詞の形容詞的用法。lugares（男複）→ <b>visitados</b>（男複）。<br>⚠️ en América Latina（de でなく en でも範囲を示せる）。visitados は複数形。<br>💡 visitado は visitar の過去分詞（-ado）。形容詞として使うとき名詞の性数に一致する。<br>📖 <b>語句</b>：visitado「訪れられた・人気の」（男複 visitados）／América Latina「ラテンアメリカ」'
          },
          {
            ja: 'ラテンアメリカで最も訪れられる場所の中にグアテマラのティカル国立公園がある。',
            a: 'Entre los más visitados en América Latina está el Parque Nacional Tikal en Guatemala.',
            exp: '<b>entre los más visitados</b>（最上級）「最も訪れられるものの中に」。<b>Entre…está(n)</b>（存在の倒置構文）。<br>⚠️ está は Parque Nacional（単数）に合わせて単数。los más visitados の定冠詞 los（男複）。<br>💡 倒置構文：強調したい要素を文頭に出す。Entre los famosos músicos está…「有名な音楽家の中には〜がいる」のように応用できる。<br>📖 <b>語句</b>：entre「〜の中に」／los más visitados「最も多く訪れられるもの」／Parque Nacional「国立公園」'
          },
          /* ───── 比較・最上級（新規 10 問） ───── */
          {
            ja: 'テオティワカンはマチュピチュと同じくらい有名だ。',
            a: 'Teotihuacán es tan famoso como Machu Picchu.',
            exp: '同等比較 <b>tan＋形容詞＋como</b>「〜と同じくらい…だ」。famoso は Teotihuacán（男単扱い）に一致。<br>⚠️ tan は形容詞・副詞の前（×tanto famoso は誤り）。名詞の量を比べるときは tanto/tanta/tantos/tantas。<br>💡 tan…como の como は「〜と同様に」という比較の接続詞。否定文にすると「〜ほど…ではない」（no es tan… como）になる。<br>📖 <b>語句</b>：tan＋形容詞＋como「〜と同じくらい…」／famoso「有名な」（男単）'
          },
          {
            ja: 'このバスはあの列車ほど速くない。',
            a: 'Este autobús no es tan rápido como aquel tren.',
            exp: '否定の同等比較「〜ほど…ではない」= <b>no＋ser＋tan＋形容詞＋como</b>。rápido は autobús（男単）に一致。<br>⚠️ 否定でも tan…como の形は変わらない。no を ser の前に置くだけ。<br>💡 no es tan rápido como は「〜ほど速くない」。menos rápido que と同じ意味だが、tan…como の否定形の方が口語的。<br>📖 <b>語句</b>：no es tan rápido como「〜ほど速くない」／autobús「バス」／tren「列車」'
          },
          {
            ja: 'この遺跡はあれほど有名ではないが、もっと美しい。',
            a: 'Estas ruinas no son tan famosas como aquellas, pero son más bonitas.',
            exp: '同等比較の否定（no son tan famosas como）と優等比較（más bonitas）の組み合わせ。<br>⚠️ ruinas（女複）に一致して famosas（複数）・bonitas（複数）。主語が複数なので son。<br>💡 2つの比較表現を pero でつなぐ構文。対比を表す典型的なパターン。<br>📖 <b>語句</b>：ruinas「遺跡・廃墟」（女複）／tan famosas como「〜と同じくらい有名な」／bonito「きれいな・素敵な」（女複 bonitas）'
          },
          {
            ja: 'アルゼンチンはペルーより面積が大きい。',
            a: 'Argentina es más grande que Perú.',
            exp: '優等比較 <b>más＋形容詞＋que</b>。grande は男女同形（複数は grandes）。<br>⚠️ mayor ではなく más grande（物理的サイズ・面積は más grande/pequeño）。mayor は年齢・重要度・抽象的な大小に使う。<br>💡 grande は比較級になっても性変化なし。el más grande / la más grande（最上級でも同形）。<br>📖 <b>語句</b>：más grande que「〜より大きい」／grande「大きい」（男女同形）'
          },
          {
            ja: '私の旅行鞄（maleta）は君のより重い。',
            a: 'Mi maleta es más pesada que la tuya.',
            exp: '優等比較 <b>más＋形容詞＋que</b>。pesada は maleta（女単）に一致。「君のもの」= <b>la tuya</b>（所有代名詞・女単）。<br>⚠️ la tuya（君の maleta）の定冠詞は maleta（女単）に一致。la suya（彼女の・あなたの）と混同しない。<br>💡 所有代名詞の一覧（女単）：la mía / la tuya / la suya / la nuestra / la vuestra / la suya。<br>📖 <b>語句</b>：pesado「重い」（女単 pesada）／la tuya「君のもの（女単）」'
          },
          {
            ja: 'このホテルはあのホテルより安くて快適だ。',
            a: 'Este hotel es más barato y más cómodo que aquel.',
            exp: '優等比較 <b>más＋形容詞＋que</b> を y で並列。barato・cómodo は hotel（男単）に一致。<br>⚠️ 形容詞が複数並んでも que は最後に1つ。「más X y más Y que Z」の語順。<br>💡 短縮形も可：más barato y cómodo que aquel（más を省略して共有）。文体によって選ぶ。<br>📖 <b>語句</b>：barato「安い・値段が低い」／cómodo「快適な・使い心地のよい」'
          },
          {
            ja: 'クスコはペルーで最も重要な観光都市の一つだ。',
            a: 'Cusco es una de las ciudades turísticas más importantes de Perú.',
            exp: '<b>una de las＋名詞複数＋más＋形容詞＋de</b>「最も〜な…の一つ（女性）」。ciudades（女複）→ una de las + importantes（女複）。<br>⚠️ una de las（女性形）。uno de los（男性形）と区別（ciudad が女性名詞なので una de las）。<br>💡 importante は男女同形（複数 importantes）。形容詞を名詞の後に置く「名詞＋形容詞」の語順に注意。<br>📖 <b>語句</b>：una de las más…「最も〜の一つ（女性）」／turístico「観光の」（女複 turísticas）／importante「重要な」（男女同形、複数 importantes）'
          },
          {
            ja: 'これはラテンアメリカで最も古い都市の一つだ。',
            a: 'Esta es una de las ciudades más antiguas de América Latina.',
            exp: '<b>una de las＋名詞複数＋más＋形容詞＋de</b>（最上級）。antiguas は ciudades（女複）に一致。<br>⚠️ de América Latina（地域名 + de で範囲を示す）。en でも可だが de が一般的。<br>💡 antiguo の女複形は antiguas（-o/-a型）。最上級で「〜の中で」を表すには de＋範囲または en＋地名を使う。<br>📖 <b>語句</b>：antigua「古い」（女複 antiguas）／América Latina「ラテンアメリカ」'
          },
          {
            ja: 'なんて素敵な場所なんだ！',
            a: '¡Qué lugar tan bonito!',
            exp: '感嘆文 <b>¡Qué＋名詞＋tan＋形容詞!</b>。対話文の冒頭「¡Qué lugar tan bonito!」そのまま（または más bonito も可）。<br>⚠️ Qué にアクセント記号（感嘆詞 qué vs 接続詞 que）。感嘆符は文頭に ¡、文末に !。<br>💡 ¡Qué＋名詞＋tan/más＋形容詞! の構文は日常会話で非常に多い。¡Qué día tan bonito!（なんていい天気）のように応用できる。<br>📖 <b>語句</b>：¡Qué＋名詞＋tan/más＋形容詞!「なんて〜な…なんだ」／bonito「素敵な・きれいな」'
          },
          {
            ja: 'なんて長い旅行なんだ！',
            a: '¡Qué viaje tan largo!',
            exp: '感嘆文 <b>¡Qué＋名詞＋tan＋形容詞!</b>。viaje は男性単数（largo も男単に一致）。<br>⚠️ largo は viaje（男単）に一致して largo（×larga は誤り）。<br>💡 感嘆文では形容詞の性数一致を忘れがち。¡Qué película tan larga!（女単 larga）のように名詞が変われば形容詞も変わる。<br>📖 <b>語句</b>：¡Qué viaje tan largo!「なんて長い旅行なんだ」／viaje「旅行・旅」（男単）／largo「長い」（男単）'
          }
        ]
      },
      {
        heading: '和文西訳（３）義務・その他',
        instruction: '次の日本語をスペイン語に訳しなさい。',
        items: [
          /* ───── 既存 7 問 ───── */
          {
            ja: 'そこに着くためにはクスコから電車で出発しなければいけない。',
            a: 'Para llegar hay que salir desde Cusco en tren.',
            exp: '<b>hay que＋原形</b>（一般的義務・非人称）「〜しなければならない」。<b>para＋原形</b>「〜するために」。desde「〜から（出発点）」。<br>⚠️ hay que は主語なし・非人称（特定の人に帰さない義務）。hay que の後は原形（活用しない）。<br>💡 hay que（非人称）vs deber（特定の主語の義務）。「誰でも〜しなければ」なら hay que、「（あなたは）〜しなければ」なら deber。<br>📖 <b>語句</b>：hay que＋原形「〜しなければならない（非人称）」／desde「〜から（起点）」／en tren「電車で」'
          },
          {
            ja: '世界遺産になるためには、場所は歴史的価値か自然としての価値を持たなければならない。',
            a: 'Para ser Patrimonio de la Humanidad los lugares deben tener valor histórico o natural.',
            exp: '<b>deber＋原形</b>（義務）「〜しなければならない」。deben は3複（主語 los lugares）。para ser「〜になるためには（条件）」。<br>⚠️ hay que（非人称）ではなく <b>deben</b>（特定の主語 los lugares に帰す義務）。<br>💡 deben（3複）。deber の活用：debo / debes / debe / debemos / debéis / deben（規則-er動詞）。<br>📖 <b>語句</b>：deber＋原形「〜しなければならない（義務）」／valor histórico「歴史的価値」／valor natural「自然の価値」'
          },
          {
            ja: 'それらの場所を訪れるとき、未来の世代のためにそれらを大切にしなければならない。',
            a: 'Cuando visitamos esos lugares, debemos cuidarlos para las futuras generaciones.',
            exp: '<b>deber＋原形</b>（1複 <b>debemos</b>）。<b>cuando＋現在形</b>「〜するとき（習慣・一般条件）」。cuidarlos = cuidar＋los（直接目的語、lugares を受ける）。<br>⚠️ cuando の後は現在形（visitamos）。原形に代名詞を後置（cuidarlos）できる。<br>💡 代名詞後置：debemos cuidarlos ＝ los debemos cuidar（どちらも正解）。原形への後置は会話でよく使われる。<br>📖 <b>語句</b>：cuidar「大切にする・世話をする」／futuras generaciones「将来の世代」／cuando「〜するとき（接続詞）」'
          },
          {
            ja: '外国（el extranjero）へ旅行するためにはパスポートを取らなければならない。',
            a: 'Para viajar al extranjero hay que sacar el pasaporte.',
            exp: '<b>hay que＋原形</b>（一般的義務）。para＋原形「〜するために」。al extranjero＝a＋el extranjero（縮約）。<br>⚠️ a＋el = <b>al</b>（縮約）。hay que の後は原形（sacar）。<br>💡 al と del はスペイン語の2大縮約形（a＋el＝al、de＋el＝del）。他の定冠詞（la/los/las）とは縮約しない。<br>📖 <b>語句</b>：al extranjero「外国へ（a＋el の縮約）」／sacar「取得する」／pasaporte「パスポート」'
          },
          {
            ja: '私たちは世界遺産の注意事項（las recomendaciones）に従わなければならない。',
            a: 'Debemos atender las recomendaciones del Patrimonio de la Humanidad.',
            exp: '<b>deber＋原形</b>（1複 <b>debemos</b>）。<b>atender</b>「注意を向ける・（指示に）従う」。del＝de＋el（縮約）。<br>⚠️ atender は「待つ」ではなく「従う・気を配る」の意。las recomendaciones「注意事項」（女複）。<br>💡 atender a「〜に注意を払う・従う」。respetar las normas「規則を守る」でも言い換え可。<br>📖 <b>語句</b>：atender「従う・気を配る」／recomendaciones「注意事項」（女複）／del「〜の（de＋el 縮約）」'
          },
          {
            ja: 'マチュピチュは山の高いところにある（位置する）要塞だ。',
            a: 'Machu Picchu es una ciudadela que está en lo alto de una montaña.',
            exp: '<b>lo＋形容詞</b>「〜なところ・〜なこと」（中性定冠詞）。lo alto＝「高いところ」。<b>en lo alto de</b>「〜の高いところに」。<br>⚠️ lo は中性定冠詞で形容詞を名詞化する。es（ser で本質・分類）と está（estar で位置）の使い分けも確認。<br>💡 lo＋形容詞の例：lo importante「重要なこと」／lo difícil「難しいこと」／lo mejor「最善のこと」。性変化しない（常に lo）。<br>📖 <b>語句</b>：ciudadela「城砦・要塞」／lo＋形容詞「〜なところ・〜なこと（中性）」／en lo alto de「〜の高いところに」'
          },
          {
            ja: 'イグアスの滝はブラジルとパラグアイとアルゼンチンの間にある。',
            a: 'Las Cataratas del Iguazú quedan entre Brasil, Paraguay y Argentina.',
            exp: '<b>quedar</b>「〜に位置する・〜にある」（地理的な位置の表現。estar の代わりに使う）。entre「〜の間に」。<br>⚠️ quedan（3複：Las Cataratas は複数）。発話1の ¿Dónde queda? も同じ quedar の用法。<br>💡 quedar は地図・地理的説明で estar の代わりに使われる。¿Dónde queda…?「〜はどこにある？」は旅行会話の定番。<br>📖 <b>語句</b>：quedar「〜にある・位置する（地理的）」／entre「〜の間に」／Cataratas del Iguazú「イグアスの滝」'
          },
          /* ───── 義務・その他（新規 7 問） ───── */
          {
            ja: '旅行のチケットを事前に予約しなければならない。',
            a: 'Hay que reservar los billetes del viaje con antelación.',
            exp: '<b>hay que＋原形</b>（一般的義務・非人称）「〜しなければならない」。con antelación「事前に・前もって」。<br>⚠️ hay que の後は原形（reservar）。de antemano も同義だが con antelación がより一般的。<br>💡 billete「切符・チケット」（スペイン）。中南米では boleto も使われる。del viaje は「旅行の（切符）」。<br>📖 <b>語句</b>：hay que＋原形「〜しなければならない（非人称）」／reservar「予約する」／billete「チケット・切符」／con antelación「事前に」'
          },
          {
            ja: '旅行者はその遺跡の石に触ってはいけない。',
            a: 'Los turistas no deben tocar las piedras de las ruinas.',
            exp: '<b>no deber＋原形</b>（禁止）「〜してはいけない」。deben は3複（主語 los turistas）。<br>⚠️ no hay que＋原形は「〜しなくてよい（不必要）」。禁止には <b>no deber</b> を使う。<br>💡 no hay que（不要）vs no deben（禁止）の区別は重要。No hay que pagar.「払わなくていい」/ No deben tocar.「触ってはいけない」。<br>📖 <b>語句</b>：no deben＋原形「〜してはいけない（3複）」／tocar「触る・さわる」／piedra「石」／ruinas「遺跡」'
          },
          {
            ja: '世界遺産を守るために私たちは皆貢献しなければならない。',
            a: 'Para proteger los Patrimonios de la Humanidad, todos debemos contribuir.',
            exp: '<b>deber＋原形</b>（1複 <b>debemos</b>）。todos「皆」が主語。para＋原形「〜するために（目的）」。<br>⚠️ hay que（非人称）ではなく debemos（「私たち皆」という主語を明示できる）。<br>💡 contribuir は -uir 型（construir などと同じ）。y 挿入：contribuyo / contribuyes … / contribuyen。ここは原形のまま。<br>📖 <b>語句</b>：proteger「守る・保護する」／todos「皆・すべての人」／contribuir「貢献する」'
          },
          {
            ja: '高山病（el mal de altura）を避けるためには水をたくさん飲まなければならない。',
            a: 'Para evitar el mal de altura hay que beber mucha agua.',
            exp: '<b>hay que＋原形</b>（一般的義務）。para＋原形「〜するために」。beber mucha agua「水をたくさん飲む」。<br>⚠️ mucha は agua（女性名詞）に一致して mucha（×mucho agua は誤り）。<br>💡 agua は女性名詞だが冠頭が強勢 a- のため el agua（単数では男性定冠詞）を使う。mucha agua（×mucho）と形容詞は正しく女性形。<br>📖 <b>語句</b>：evitar「避ける」／mal de altura「高山病」／beber「飲む」／agua「水」（女性名詞、mucha agua）'
          },
          {
            ja: 'マチュピチュで最も美しいのは日の出の景色だ。',
            a: 'Lo más bello de Machu Picchu es el paisaje al amanecer.',
            exp: '<b>lo＋形容詞</b>「〜なもの・〜なこと（中性）」。lo más bello＝「最も美しいもの」。<b>al amanecer</b>「日の出のころ・夜明けに」。<br>⚠️ lo は性変化しない（常に lo。×la más bello は誤り）。<br>💡 lo＋最上級の例：lo más importante「最も重要なこと」／lo mejor「最善のこと・ベスト」。al amanecer は a＋el amanecer（縮約）。<br>📖 <b>語句</b>：lo＋形容詞「〜なもの（中性）」／bello「美しい」／paisaje「景色・風景」／amanecer「夜明け・日の出」'
          },
          {
            ja: 'その川はどこにある（位置する）の？',
            a: '¿Dónde queda ese río?',
            exp: '<b>quedar</b>「〜に位置する（地理的）」。対話文冒頭の ¿Dónde queda?「どこにある？」と同じ用法。<br>⚠️ ¿Dónde está? でも「〜はどこにあるか」と聞けるが、地理的・固定的な位置には quedar が好まれる。<br>💡 quedar は地図・旅行会話で estar の代わりに使われる。¿Dónde queda la estación?「駅はどこにあります？」のように応用できる。<br>📖 <b>語句</b>：quedar「〜に位置する（地理的）」／río「川」'
          },
          {
            ja: 'その遺跡は密林（la selva）の真ん中にある。',
            a: 'Las ruinas quedan en medio de la selva.',
            exp: '<b>quedan</b>（quedar の3複。Las ruinas は複数なので3複）。en medio de「〜の真ん中に」。<br>⚠️ quedan（ruinas が複数なので3複）。queda（単数）とどちらかを判断するには主語の数を確認。<br>💡 en medio de「〜の真ん中に」。en el centro de も同義。selva は熱帯・亜熱帯の「密林・ジャングル」を指す。<br>📖 <b>語句</b>：quedar「〜に位置する（地理的）」（3複 quedan）／selva「密林・ジャングル」／en medio de「〜の真ん中に」'
          }
        ]
      }
    ]
  };

})();
