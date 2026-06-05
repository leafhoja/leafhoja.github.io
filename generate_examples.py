#!/usr/bin/env python3
"""
スペイン語辞書用 例文生成スクリプト
レッスンの語彙リスト（pill-es）を優先して Claude Haiku で例文を生成する。
生成結果は new_examples.js に出力し、DICT_EXAMPLES に手動マージする。
"""

import re
import json
import os
import time

try:
    from anthropic import Anthropic
except ImportError:
    print("ERROR: pip3 install anthropic が必要です")
    exit(1)

# ── 設定 ──────────────────────────────────────────────────────
DICT_FILE   = "/Users/yo/claude/スペイン語/spanish_dictionary.html"
LESSON_FILES = [
    "/Users/yo/claude/スペイン語/Spanish1_lesson3.html",
    "/Users/yo/claude/スペイン語/Spanish1_lesson4.html",
    "/Users/yo/claude/スペイン語/Spanish1_lesson5.html",
    "/Users/yo/claude/スペイン語/Spanish1_lesson6.html",
    "/Users/yo/claude/スペイン語/Spanish1_lesson7.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson1.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson2.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson3.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson4.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson5.html",
    "/Users/yo/claude/スペイン語/Spanish2_lesson6.html",
]
OUTPUT_FILE = "/Users/yo/claude/スペイン語/new_examples.js"
MODEL       = "claude-haiku-4-5"
BATCH_SIZE  = 20
# ──────────────────────────────────────────────────────────────


def extract_lesson_vocab():
    """レッスンファイルから (pill-es, pill-ja) ペアを抽出する。"""
    pattern = re.compile(
        r'<span class="pill-es">([^<]+)</span>'
        r'(?:<span class="pill-pos">[^<]*</span>)?'
        r'<span class="pill-ja">([^<]+)</span>'
    )
    seen = {}
    for path in LESSON_FILES:
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            content = f.read()
        for es, ja in pattern.findall(content):
            es = es.strip()
            if es not in seen:
                seen[es] = ja.strip()
    return seen  # { "desayuno": "朝食", ... }


def extract_existing_keys():
    """DICT_EXAMPLES に既にあるキーを返す。"""
    with open(DICT_FILE, encoding="utf-8") as f:
        content = f.read()
    m = re.search(r'var DICT_EXAMPLES\s*=\s*\{(.*?)\};', content, re.DOTALL)
    if not m:
        return set()
    return set(re.findall(r"'([^']+)'\s*:", m.group(1)))


def normalize_key(word):
    """
    辞書キーとして使う形に正規化。
    "bonito/a" → "bonito", "gamba (camarón)" → "gamba (camarón)"（そのまま）
    """
    # /a, /o, /as などの男女形スラッシュ表記を除去
    word = re.sub(r'/[aáo]$', '', word)
    return word.strip()


def generate_batch(client, batch):
    """
    batch: [{"word": "...", "meaning": "..."}, ...]
    → {"1": {"es": "...", "ja": "..."}, ...}
    """
    word_list = "\n".join(
        f'{i+1}. {item["word"]} ＝ {item["meaning"]}'
        for i, item in enumerate(batch)
    )

    prompt = f"""以下のスペイン語単語・表現それぞれについて、自然な例文（スペイン語）と日本語訳を1つ作成してください。

条件：
- 例文はA2〜B1レベルの自然なスペイン語（初中級）
- 例文には必ずその単語・表現を含める
- 日本語訳は自然な日本語
- 複合表現やフレーズはそのまま文中で使う

単語・表現リスト：
{word_list}

JSON形式で回答（キーは番号の文字列）：
{{
  "1": {{"es": "スペイン語例文", "ja": "日本語訳"}},
  "2": {{"es": "...", "ja": "..."}},
  ...まで全{len(batch)}件
}}"""

    resp = client.messages.create(
        model=MODEL,
        max_tokens=3000,
        messages=[{"role": "user", "content": prompt}]
    )

    text = resp.content[0].text.strip()
    # JSON ブロックを抽出
    m = re.search(r'\{[\s\S]*\}', text)
    if not m:
        raise ValueError(f"JSON が見つかりません:\n{text[:300]}")
    return json.loads(m.group())


def js_str(s):
    """シングルクォートを \' にエスケープ。"""
    return s.replace("\\", "\\\\").replace("'", "\\'")


def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("ERROR: 環境変数 ANTHROPIC_API_KEY が設定されていません")
        print("  export ANTHROPIC_API_KEY=sk-...")
        exit(1)

    client = Anthropic(api_key=api_key)

    print("📖 レッスン語彙を抽出中...")
    lesson_vocab = extract_lesson_vocab()
    print(f"   {len(lesson_vocab)} 件")

    print("📋 既存例文キーを確認中...")
    existing = extract_existing_keys()
    print(f"   既存 {len(existing)} 件")

    # 生成対象を絞り込む
    targets = []
    for word, meaning in sorted(lesson_vocab.items()):
        key = normalize_key(word)
        if key not in existing and word not in existing:
            targets.append({"word": word, "key": key, "meaning": meaning})

    print(f"\n🎯 生成対象: {len(targets)} 件")
    if not targets:
        print("全単語に例文があります。終了。")
        return

    all_results = {}
    total_batches = (len(targets) + BATCH_SIZE - 1) // BATCH_SIZE

    for bi, start in enumerate(range(0, len(targets), BATCH_SIZE)):
        batch_items = targets[start:start + BATCH_SIZE]
        first = batch_items[0]["word"]
        last  = batch_items[-1]["word"]
        print(f"  [{bi+1}/{total_batches}] {first} … {last} ({len(batch_items)} 件)")

        try:
            results = generate_batch(client, batch_items)
            for j, item in enumerate(batch_items):
                key = str(j + 1)
                if key in results:
                    all_results[item["word"]] = {
                        "key": item["key"],
                        **results[key]
                    }
        except Exception as e:
            print(f"    ⚠️  バッチ失敗: {e}")

        if bi < total_batches - 1:
            time.sleep(0.5)

    print(f"\n✅ 生成完了: {len(all_results)} 件")

    # 出力ファイルに書き出し
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("// ========================================================\n")
        f.write("// 生成された例文エントリ\n")
        f.write("// spanish_dictionary.html の DICT_EXAMPLES の\n")
        f.write("// 末尾（};の直前）にこの内容を追加してください。\n")
        f.write("// ========================================================\n\n")

        # カテゴリ別にグループ化（元の順序で出力）
        prev_group = None
        for word in sorted(lesson_vocab.keys()):
            if word not in all_results:
                continue
            r = all_results[word]
            key = r["key"]
            es  = r.get("es", "")
            ja  = r.get("ja", "")
            f.write(f"  '{js_str(key)}': {{ es: '{js_str(es)}', ja: '{js_str(ja)}' }},\n")

    print(f"💾 出力: {OUTPUT_FILE}")
    print("\n次のステップ:")
    print(f"  cat {OUTPUT_FILE}")
    print("  → 内容を確認して spanish_dictionary.html の DICT_EXAMPLES に追加")


if __name__ == "__main__":
    main()
