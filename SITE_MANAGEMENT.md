# スペイン語学習ポータル — サイト管理ガイド

## ファイル構成

```
スペイン語/
├── index.html                 # ホーム（入口）
├── admin.html                 # 管理者ページ
├── blocked.html               # 閲覧不可メッセージページ
├── policy.html                # サイトポリシー
├── qrcode.html                # QRコードページ
├── access-control.js          # 各レッスンページの入場制御（共通）
├── ga.js                      # Google Analytics（共通スクリプト）
├── common.js                  # タブ切替・目次・解答トグル等（共通）
├── quiz.js                    # 小テストタブの生成・アクセス判定・シャッフル（共通）
├── quiz-data.js               # 小テストの問題データ（実施済み小テスト）
├── quiz-predicted.js          # 小テストの予想問題（管理者のみ・未作成なら無し）
│
├── Spanish1_lesson2〜7.html   # 一列（文法）解説
├── Spanish2_lesson1〜6.html   # 二列（会話・読解）解説
├── spanish_dictionary.html    # 辞書・単語帳
│
├── spanish1-common.css        # 一列ページ共通スタイル
├── spanish2-common.css        # 二列ページ共通スタイル
├── spanish2-common.js         # 二列ページ共通スクリプト
│
└── SITE_MANAGEMENT.md         # このファイル
```

---

## ① 閲覧者がホームに来たときの流れ

```
アクセス
  │
  ├─ PAGE_OPEN = 0 (index.html)? ─── YES ──→ 「閲覧できません」画面
  │
  ├─ adminViewAll = true (localStorage)? ─ YES ──→ ホーム表示（制限なし）
  │
  ├─ ポリシー未同意? ──────────────── YES ──→ 同意画面
  │                                              ├─ 同意 → 所属アンケートへ
  │                                              └─ 拒否 → 広告 → 同意画面に戻る
  │
  ├─ 所属未回答? ──────────────────── YES ──→ 所属アンケート（選択→確認）
  │                                              └─ 確認「はい」→ localStorage に保存
  │                                                              + Google Forms に送信
  └─ ホーム表示（所属に応じたコンテンツ）
```

---

## ② サイト全体のロック・公開

**`index.html` の先頭にある `PAGE_OPEN` 変数を書き換えて push するだけです。**

```javascript
/* ★ サイト公開設定 ★ ここの数値を変更してください */
var PAGE_OPEN = 1; // 1 = 公開, 0 = サイト全体をロック
```

| 値 | 状態 |
|----|------|
| `1` | 公開（通常通り表示） |
| `0` | ロック（全ページ「閲覧できません」と表示） |

---

## ③ 個別ページのアクセス制御（所属別）

各学習ページの先頭に2つの変数があります：

```javascript
/* ★ ページ公開設定 ★ ここの数値を変更してください */
var accessS1G11 = 1; // 理科一類11組: 1 = 公開, 0 = ロック
var accessOther  = 1; // その他の所属: 1 = 公開, 0 = ロック
```

| 変数 | 対象 |
|------|------|
| `accessS1G11` | 理科一類11組と回答したユーザー |
| `accessOther`  | それ以外の所属（文科一類・二類・三類、理科一類11組以外・二類・三類）|

例：理科一類11組だけに公開したい場合

```javascript
var accessS1G11 = 1;
var accessOther  = 0;
```

---

## ④ 所属アンケート

初回訪問時（ポリシー同意後）に一度だけ表示されます。回答は `localStorage` に保存され、以降は表示されません。

| 選択肢 | localStorage の値 |
|--------|------------------|
| 理科一類11組 | `affiliationType = "s1g11"` |
| それ以外の6選択肢 | `affiliationType = "other"` |

回答データは Google Forms にも自動送信されます。送信先は `index.html` の以下の定数で設定します：

```javascript
var GOOGLE_FORMS_URL      = 'https://docs.google.com/forms/d/e/.../formResponse';
var GOOGLE_FORMS_ENTRY_ID = 'entry.1542429076';
```

---

## ⑤ レッスンページの access-control.js チェック順序

各レッスンページ読み込み時に以下の順で確認します：

1. `localStorage.siteOpen = '0'` → `blocked.html`（サイト全体ロック）
2. `localStorage.adminViewAll = 'true'` → そのまま表示（管理者全ページ確認モード）
3. ポリシー未同意 → `index.html`
4. 所属未回答 → `index.html`
5. `affiliationType` に応じた `accessS1G11` / `accessOther` が `0` → `blocked.html`

---

## ⑥ 管理者ページ（admin.html）

URL: `https://leafhoja.github.io/admin.html`

ホームページ最下部の「管理者ページ」リンクからパスワードを入力してアクセスします。

### 機能一覧

| 機能 | 説明 |
|------|------|
| すべてのページを確認する | `adminViewAll = true` を localStorage に保存してホームへ戻る。以降は所属制限を無視してすべてのコンテンツが表示される |
| パスワード変更 | 現在のパスワードを確認後、新しいパスワードを設定。変更時に `adminViewAll` は自動クリアされる |
| Google Analytics | 閲覧状況の確認 |
| Google AdSense | 広告の管理 |

### adminViewAll の挙動

- 管理者ページの「すべてのページを確認する」ボタンで有効化
- `localStorage.adminViewAll = 'true'` が存在する限り、所属アンケート・ページ制限をすべてスキップ
- **パスワード変更時に自動でクリア**される（再度管理者ページでボタンを押す必要あり）

### パスワードの仕組み

パスワードは PBKDF2 ハッシュとして管理されます。

- デフォルトのハッシュは `index.html` 内に埋め込まれています
- 管理者ページでパスワードを変更すると、新しいハッシュが `localStorage.adminHashOverride` に保存されます
- 次回ログイン時は `adminHashOverride` が優先して使われます

> **注意**: `localStorage.adminHashOverride` を削除すると元の（`index.html` 埋め込みの）パスワードに戻ります。

---

## ⑦-2 小テストタブ

各レッスンページに「📝 小テスト」タブを表示できます。仕組みはデータ駆動で、
**`quiz-data.js`（または `quiz-predicted.js`）にそのページのデータがある場合だけタブが出ます**。

### 問題データ（`quiz-data.js`）
ページ名をキーに登録します。形式は2種類：

```js
// 穴埋め（一列＝文法）
{ t: '… (<span class="qz-b" data-a="答え"></span>) …', ja: '和訳', exp: '解説HTML' }
// 作文（二列＝和文西訳）
{ ja: '日本語の問題', a: 'スペイン語の解答例', exp: '解説HTML' }
```
- 空所をタップすると解答が赤字表示、「答えを確認」で解説（`exp`）が開きます。
- `exp` には `⚠️`（間違いやすい点）や `📖 語句`（語句注）を入れられます。
- **実施済みの小テストは、解説の充実は可だが問題文・解答の内容は変更しないこと。**

### 予想問題（`quiz-predicted.js`）
- ページのデータに `adminOnly: true` を付けると、**管理者（全ページ閲覧許可）にだけ**タブが出ます。
- 予想問題は内容の刷新・改善OK。作問・点検は `.claude/agents/quiz-quality-reviewer.md` のエージェントが担当
  （**必ず該当レッスンの解説ページを読み、そこで扱う文法・例文・語彙に接地して**作る）。
- 一列＝その課の文法範囲・穴埋め形式。二列＝和文西訳・出題範囲は累積（それまでに習った全部）。

### アクセス制御（`index.html` で管理）

```javascript
/* 一括スイッチ：2=グループ全員に表示 / 1=個別設定に従う / 0=グループ全員に非表示 */
var QUIZ_BULK_S1G11 = 1;  // 理科一類11組
var QUIZ_BULK_OTHER = 1;  // それ以外

/* 個別設定（QUIZ_BULK_* が 1 のとき参照）  s1g11/other: 1=表示, 0=非表示 */
var QUIZ_ACCESS = { 'Spanish1_lesson2.html': { s1g11: 0, other: 0 }, ... };
```

| 判定順 | 内容 |
|--------|------|
| 1 | `adminViewAll=true`（全ページ閲覧許可）→ ロックに関わらず常に表示 |
| 2 | データが無い → タブを出さない |
| 3 | `adminOnly` かつ非管理者 → タブを出さない（予想問題） |
| 4 | 一括スイッチ 2/0 → グループ全員 表示/非表示 |
| 5 | 一括スイッチ 1 → `QUIZ_ACCESS` の個別設定（s1g11/other）に従う |

初期値はすべて非表示（`QUIZ_ACCESS` が全 0）。公開準備ができたページの値を 1 にして push します。

> 注意：`quiz-data.js` / `quiz-predicted.js` は公開JSのため、内容は閲覧者がソースから読めます。
> `adminOnly` は「タブを出すか」の制御であり、機密保持ではありません（既存のアクセス制御と同じ前提）。

---

## ⑦ 新しいレッスンページを追加するとき

1. 既存のレッスンファイルをコピーして作成
2. ファイル先頭の `accessS1G11` / `accessOther` 変数ブロックがあることを確認
3. `access-control.js` と `ga.js` の読み込みがあることを確認
4. `index.html` のカードリストにリンクを追加

---

## ⑧ AdSense について（要対応）

> ⚠️ **現状の実装は未完成です。広告は正しく表示されていません。**

`index.html` の以下の部分を修正する必要があります：

```html
<ins class="adsbygoogle"
     data-ad-client="ca-pub-6045613757008970"
     data-ad-slot="6045613757008970"   ← ★ここが間違い（パブリッシャーIDと同じ値）
     ...>
```

**修正手順：**
1. [AdSense管理画面](https://adsense.google.com/) にログイン
2. 「広告」→「広告ユニット」で新しい広告ユニットを作成
3. 表示される `data-ad-slot` の値（例: `1234567890`）を上記の箇所に貼り付ける
4. `git push` して反映
