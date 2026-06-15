# スペイン語学習サイト 開発ルール

## 新規レッスンHTMLを作成するとき（必須）

`<head>` 内のスクリプトタグは **必ずこの順序**で記述する。

```html
<script src="quiz-data.js" defer></script>
<script src="quiz-predicted-s1.js" defer></script>
<script src="quiz-predicted-s2.js" defer></script>
<script src="quiz.js" defer></script>
```

`quiz-predicted-s*.js` が `quiz-data.js` より前、または `quiz.js` より後になると、
管理者でも予想問題タブが表示されない。

## ファイル命名規則

- 一列（文法）：`Spanish1_lessonN.html`（N = 2〜10）
- 二列（会話・読解）：`Spanish2_lessonN.html`（N = 1〜10）

## 小テストデータ

| ファイル | 用途 | 閲覧権限 |
|---|---|---|
| `quiz-data.js` | 本番の小テスト問題 | 全ユーザー（実施後に公開） |
| `quiz-predicted-s1.js` | 一列（Spanish1）予想問題 | 管理者のみ |
| `quiz-predicted-s2.js` | 二列（Spanish2）予想問題 | 管理者のみ |

予想問題ファイルは一列・二列で分割管理する。新しい課の予想問題を追加するときは
対応するファイル（s1 または s2）に追記する。

### 変更可否（厳守）
- `quiz-data.js` の問題文・解答：**変更不可**（実施済み試験）
- `quiz-data.js` の解説（exp）：充実させてよい
- `quiz-predicted-s1.js` / `quiz-predicted-s2.js`：問題文・解答・解説とも刷新可

### データ形式
```js
// 一列：穴埋め
{ t: '… (<span class="qz-b" data-a="答え"></span>) …', ja: '和訳', exp: '解説' }

// 二列：和文西訳
{ ja: '日本語の問題文', a: 'スペイン語の解答例', exp: '解説' }
```
