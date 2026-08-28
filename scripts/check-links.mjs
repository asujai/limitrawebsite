// dist/ icindeki tum ic baglantilari tarar ve karsiligi uretilmemis olanlari listeler.
// Kullanim: npm run build && node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';

const root = 'dist';
if (!fs.existsSync(root)) {
  console.error('dist/ yok. Once "npm run build" calistirin.');
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    entry.isDirectory() ? walk(full) : files.push(full);
  }
})(root);

const existing = new Set(files.map((f) => '/' + path.relative(root, f).split(path.sep).join('/')));
const exists = (url) => existing.has(url) || existing.has(url.replace(/\/$/, '') + '/index.html');

const broken = new Map();
for (const file of files.filter((f) => f.endsWith('.html'))) {
  const from = '/' + path.relative(root, file).split(path.sep).join('/').replace(/index\.html$/, '');
  for (const match of fs.readFileSync(file, 'utf8').matchAll(/(?:href|src)="(\/[^"#?]*)"/g)) {
    const url = match[1];
    if (url.startsWith('//') || exists(url)) continue;
    if (!broken.has(url)) broken.set(url, new Set());
    broken.get(url).add(from);
  }
}

if (broken.size === 0) {
  console.log('OK - kirik ic baglanti yok.');
  process.exit(0);
}

console.log(`KIRIK BAGLANTI HEDEFI: ${broken.size}`);
for (const url of [...broken.keys()].sort()) {
  const pages = [...broken.get(url)];
  console.log(`${url}  <- ${pages.length} sayfa, orn. ${pages.slice(0, 3).join(', ')}`);
}
process.exit(1);
