# スペイン語学習ポータル — サイト管理ガイド

## ファイル構成

```
スペイン語/
├── index.html                 # ホーム（入口）
├── admin.html                 # 管理者ページ（外部ツールへのリンク）
├── blocked.html               # 閲覧不可メッセージページ
├── policy.html                # サイトポリシー
├── qrcode.html                # QRコードページ
├── access-control.js          # 各レッスンページの入場制御（共通）
├── ga.js                      # Google Analytics（共通スクリプト）
├── toggle-lock.js             # ロック・公開切替スクリプト（※現在非対応、後述）
│
├── Spanish1_lesson3〜7.html   # 一列（文法）解説
├── Spanish2_lesson1〜6.html   # 二列（会話・読解）解説
├── spanish_dictionary.html    # 辞書・単語帳
│
├── spanish1-common.css        # 一列ページ共通スタイル
├── spanish2-common.css        # 二列ページ共通スタイル
├── spanish2-common.js         # 二列ページ共通スクリプト
│
├── .vscode/tasks.json         # VS Code タスク定義（toggle-lock.js を呼び出す）
└── SITE_MANAGEMENT.md         # このファイル
```

---

## ① サイト全体のロック・公開（最も重要）

**`index.html` の先頭にある `PAGE_OPEN` 変数を書き換えて push するだけです。**

### 変更箇所

`index.html` をエディタで開き、ファイルの先頭（`<head>` 直後）にある以下の行を探します：

```javascript
/* ★ サイト公開設定 ★ ここの数値を変更してください */
var PAGE_OPEN = 1; // 1 = 公開, 0 = サイト全体をロック
```

| 値 | 状態 |
|----|------|
| `1` | 公開（通常通り表示） |
| `0` | ロック（全ページ「閲覧できません」と表示） |

数値を変更したら保存して `git push` するだけで、GitHub Pages 経由で**全ユーザーに即座に反映**されます。

### 仕組み

- `index.html` の `PAGE_OPEN = 0` 設定時にブロック画面を表示
- 同時に `localStorage.siteOpen = '0'` を記録
- 各学習ページの `access-control.js` がこの値を読み取り、`blocked.html` へリダイレクト

---

## ② 個別ページのロック

学習ページをひとつだけ非公開にしたい場合は、そのページのファイルを直接編集します。

各学習ページ（例: `Spanish1_lesson3.html`）の先頭にある以下の行を変更します：

```javascript
/* ★ ページ公開設定 ★ ここの数値を変更してください */
var PAGE_OPEN = 1; // 1 = 公開, 0 = ロック
```

`0` にして push すると、そのページだけ `blocked.html` へリダイレクトされます。

---

## ③ VS Code タスク（toggle-lock.js）について

`.vscode/tasks.json` には以下のタスクが定義されています（Ctrl+Shift+B または「ターミナル → タスクの実行」から起動）：

| タスク | 内容 |
|--------|------|
| 🔒 サイトをロック | `node toggle-lock.js lock` |
| 🔓 サイトを公開する | `node toggle-lock.js unlock` |
| 📋 ロック状態を確認 | `node toggle-lock.js status` |

### ⚠️ 現在は動作しません

`toggle-lock.js` は `access-control.js` 内の `var SITE_LOCKED = ...;` という行を書き換える仕組みで動作しますが、**現在の `access-control.js` にはその行がありません**。実行すると以下のエラーが出て終了します：

```
❌ access-control.js に SITE_LOCKED 行が見つかりません。
```

**現在の運用方法**: ① の手順に従い、`index.html` の `PAGE_OPEN` を手動で書き換えて push してください。

---

## ④ 管理者ページ（admin.html）

URL: `https://leafhoja.github.io/admin.html`

ホームページ（`index.html`）の最下部にある「管理者ページ」リンクからパスワードを入力してアクセスします。

管理者ページには以下の外部ツールへのリンクがあります：

| ツール | 内容 |
|--------|------|
| Google Analytics | Webページの閲覧状況を確認 |
| Google AdSense | 広告の管理 |

---

## ⑤ 閲覧者がホームに来たときの流れ

```
アクセス
  │
  ├─ PAGE_OPEN = 0 (index.html)? ─── YES ──→ 「閲覧できません」画面
  │
  ├─ ポリシー未同意? ──────────────── YES ──→ 同意画面（白背景）
  │                                              └─ 同意 → ホーム表示
  │                                              └─ 拒否 → 広告 → 同意画面に戻る
  └─ ホーム表示
```

---

## ⑥ レッスンページのアクセス制御

各レッスンページには `access-control.js` が読み込まれており、以下をチェックしています：

1. このページの `PAGE_OPEN ≠ 1` → `blocked.html`（このページがロック）
2. `localStorage.siteOpen = '0'` → `blocked.html`（サイト全体がロック）
3. ポリシー未同意 → `index.html` へ（そこで同意を求める）

---

## ⑦ AdSense について（要対応）

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

---

## ⑧ 新しいレッスンページを追加するとき

1. 既存のレッスンファイルをコピーして作成
2. ファイル先頭の `PAGE_OPEN` 変数ブロックがあることを確認（コピー元にあれば自動でコピーされる）
3. `access-control.js` と `ga.js` の読み込みがあることを確認
4. `index.html` のカードリストにリンクを追加

---

## ⑨ 管理者パスワードについて

管理者パスワードは `index.html` 内に PBKDF2 ハッシュとして埋め込まれています。変更する場合はソースを直接編集して push してください。

> 管理者パスワードは12文字以上・英数字記号混在を推奨します（ハッシュがソースに公開されているため）。
