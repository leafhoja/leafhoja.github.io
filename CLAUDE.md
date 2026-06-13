# スペイン語学習サイト 開発ルール

## 新規レッスンHTMLを作成するとき（必須）

`<head>` 内のスクリプトタグは **必ずこの順序**で記述する。

```html
<script src="quiz-data.js" defer></script>
<script src="quiz-predicted.js" defer></script>
<script src="quiz.js" defer></script>
```

`quiz-predicted.js` が `quiz-data.js` より前、または `quiz.js` より後になると、
管理者でも予想問題タブが表示されない。

## ファイル命名規則

- 一列（文法）：`Spanish1_lessonN.html`（N = 2〜10）
- 二列（会話・読解）：`Spanish2_lessonN.html`（N = 1〜10）

## 小テストデータ

| ファイル | 用途 | 閲覧権限 |
|---|---|---|
| `quiz-data.js` | 本番の小テスト問題 | 全ユーザー（実施後に公開） |
| `quiz-predicted.js` | 予想問題（adminOnly: true） | 管理者のみ |

### 変更可否（厳守）
- `quiz-data.js` の問題文・解答：**変更不可**（実施済み試験）
- `quiz-data.js` の解説（exp）：充実させてよい
- `quiz-predicted.js`：問題文・解答・解説とも刷新可

### データ形式
```js
// 一列：穴埋め
{ t: '… (<span class="qz-b" data-a="答え"></span>) …', ja: '和訳', exp: '解説' }

// 二列：和文西訳
{ ja: '日本語の問題文', a: 'スペイン語の解答例', exp: '解説' }
```
