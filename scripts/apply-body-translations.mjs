import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/translations';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const files = fs.readdirSync(dir).filter(x => /^body-\d+\.json$/.test(x));
console.log(`Bulunan çeviri dosyası: ${files.length}`);

for (const f of files) {
  const id = f.match(/\d+/)[0];
  const tr = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const [lang, paras] of Object.entries(tr)) {
    const fp = `src/data/news-${lang}.json`;
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const item = data.find(x => x.id === id);
    if (!item) throw new Error(`${lang} ${id} yok`);
    const keepLast = paras.length === item.content.length - 1;
    item.content = keepLast ? [...paras, item.content.at(-1)] : paras;
    fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf8');
  }
  console.log(`ID ${id} 9 dile uygulandı.`);
}
