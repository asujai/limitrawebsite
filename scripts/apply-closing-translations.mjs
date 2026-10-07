import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/translations';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = fs.readdirSync(dir).filter(x => /^closing-\d+\.json$/.test(x));
console.log(`Bulunan closing çeviri dosyası: ${files.length}`);

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const f of files) {
  const id = f.match(/\d+/)[0];
  const closing = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));

  for (const lang of langs) {
    const text = closing[lang];
    if (!text) {
      console.warn(`[UYARI] ${f} dosyasında ${lang} eksik!`);
      continue;
    }
    const fp = lang === 'tr' ? 'src/data/haberler.json' : `src/data/news-${lang}.json`;
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const item = data.find(x => x.id === id);
    if (!item) {
      console.error(`ID ${id} ${fp} içinde bulunamadı.`);
      continue;
    }
    item.content[item.content.length - 1] = text;
    fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf8');
  }
  console.log(`ID ${id} için kapanış paragrafı 11 dile uygulandı.`);
}
