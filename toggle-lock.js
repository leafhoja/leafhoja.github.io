#!/usr/bin/env node
/**
 * toggle-lock.js — サイトのロック・公開を切り替えて GitHub に push する
 *
 * 使い方（VSCode タスク経由、または直接）:
 *   node toggle-lock.js lock    → 全ページを閲覧不可にして push
 *   node toggle-lock.js unlock  → 全ページを公開状態に戻して push
 *   node toggle-lock.js status  → 現在の状態を表示するだけ
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const action = process.argv[2];
const dir    = __dirname;

const TARGET_FILES = [
  path.join(dir, 'access-control.js'),
  path.join(dir, 'index.html'),
];

const LOCK_RE   = /^var SITE_LOCKED = (true|false);.*$/m;
const LOCK_LINE = (val) => 'var SITE_LOCKED = ' + val + '; // toggle-lock.js が書き換える行（変更しないこと）';

// 現在の状態を access-control.js から読む
const acContent = fs.readFileSync(TARGET_FILES[0], 'utf8');
const match     = acContent.match(LOCK_RE);
if (!match) {
  console.error('❌ access-control.js に SITE_LOCKED 行が見つかりません。');
  process.exit(1);
}
const isLocked = match[1] === 'true';

if (action === 'status' || !action) {
  console.log('現在の状態:', isLocked ? '🔒 ロック中（全ページ閲覧不可）' : '🔓 公開中');
  if (!action) console.log('\n使い方: node toggle-lock.js [lock|unlock|status]');
  process.exit(0);
}

if (action !== 'lock' && action !== 'unlock') {
  console.error('❌ 引数は lock / unlock / status のいずれかにしてください。');
  process.exit(1);
}

const wantLocked = (action === 'lock');

if (wantLocked === isLocked) {
  console.log('既に' + (isLocked ? '🔒 ロック中' : '🔓 公開中') + 'です。変更なし。');
  process.exit(0);
}

// 各ファイルの SITE_LOCKED 行を書き換える
let changed = [];
for (const filePath of TARGET_FILES) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!LOCK_RE.test(content)) {
    console.warn('⚠️  SITE_LOCKED 行が見つかりません: ' + path.basename(filePath) + ' — スキップ');
    continue;
  }
  const newContent = content.replace(LOCK_RE, LOCK_LINE(String(wantLocked)));
  fs.writeFileSync(filePath, newContent);
  changed.push(path.basename(filePath));
}

if (changed.length === 0) {
  console.error('❌ 書き換えできたファイルがありません。');
  process.exit(1);
}

console.log('✏️  更新: ' + changed.join(', '));

// git add → commit → push
const commitMsg = wantLocked ? 'サイトをロック（全ページ閲覧不可）' : 'サイトを公開';
try {
  const addTargets = changed.map(f => '"' + f + '"').join(' ');
  execSync('git add ' + addTargets, { cwd: dir, stdio: 'inherit' });
  execSync('git commit -m "' + commitMsg + '"', { cwd: dir, stdio: 'inherit' });
  execSync('git push origin main', { cwd: dir, stdio: 'inherit' });
  console.log((wantLocked ? '🔒 ロック完了' : '🔓 公開完了') + ' → GitHub に push しました');
} catch (e) {
  console.error('❌ Git 操作に失敗しました:', e.message);
  process.exit(1);
}
