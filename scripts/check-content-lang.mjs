import fs from 'node:fs';

const en = JSON.parse(fs.readFileSync('src/data/news-en.json', 'utf8'));
const langs = ['es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

let totalMismatches = 0;

for (const lang of langs) {
  const data = JSON.parse(fs.readFileSync(`src/data/news-${lang}.json`, 'utf8'));
  const sameAsEn = [];

  for (const item of data) {
    const enItem = en.find(x => x.id === item.id);
    if (!enItem) continue;
    if (item.content && item.content.length > 0 && enItem.content && enItem.content.length > 0) {
      if (item.content[0].trim() === enItem.content[0].trim()) {
        sameAsEn.push(item.id);
      }
    }
  }

  if (sameAsEn.length > 0) {
    console.error(`[check:lang] ${lang} dilinde ${sameAsEn.length} içerik İngilizce gövdeye sahip: ${sameAsEn.join(', ')}`);
    totalMismatches += sameAsEn.length;
  }
}

if (totalMismatches > 0) {
  console.error(`[check:lang] HATA: Toplam ${totalMismatches} öğe İngilizce gövde ile kalmış.`);
  process.exit(1);
} else {
  console.log('[check:lang] BAŞARILI: Tüm dillerde gövde metinleri yerelleştirilmiş.');
  process.exit(0);
}
