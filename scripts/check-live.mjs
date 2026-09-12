// Canli site ile yerel kaynak arasindaki farki olcer: son haber canlida var mi, fiyat semasi eslesiyor mu.
// Kullanim: npm run check:live  (cikis kodu 1 = canli geride; deploy gerekli)
import fs from 'node:fs';

const SITE = 'https://limitra.online';
const haberler = JSON.parse(fs.readFileSync('src/data/haberler.json', 'utf8'));
const latest = haberler[0];
const schema = fs.readFileSync('src/data/schema.ts', 'utf8');
const price = schema.match(/APP_PRICE\s*=\s*'([^']+)'/)?.[1];
const currency = schema.match(/APP_PRICE_CURRENCY\s*=\s*'([^']+)'/)?.[1];

let failed = false;
const check = (ok, msg) => { console.log(`${ok ? 'OK  ' : 'FAIL'} ${msg}`); if (!ok) failed = true; };

const newsUrl = `${SITE}/haberler/${latest.slug}/`;
const newsRes = await fetch(newsUrl, { redirect: 'manual' });
check(newsRes.status === 200, `son haber (id ${latest.id}, ${latest.date}) canlida: ${newsUrl} -> HTTP ${newsRes.status}`);

const home = await (await fetch(`${SITE}/`)).text();
const live = home.match(/"price":"([^"]+)","priceCurrency":"([^"]+)"/);
check(live && live[1] === price && live[2] === currency, `fiyat semasi canli=${live?.[1]} ${live?.[2]} yerel=${price} ${currency}`);

if (failed) {
  console.log('\nCanli site kaynak kodun gerisinde. Calistir: npm run deploy:vps');
  process.exit(1);
}
console.log('\nCanli site guncel.');
