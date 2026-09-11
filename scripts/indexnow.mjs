// Sitemap'teki tum URL'leri IndexNow (Bing/Yandex/Naver/Seznam) ile bildirir.
// Kullanim: node scripts/indexnow.mjs            -> tum sitemap
//           node scripts/indexnow.mjs /sss /en/sss -> yalniz verilen yollar
import fs from 'node:fs';

const host = 'limitra.online';
const key = fs.readFileSync('.indexnow-key', 'utf8').trim();
const args = process.argv.slice(2);

const urlList = args.length
  ? args.map((p) => `https://${host}${p.startsWith('/') ? p : '/' + p}`)
  : [...fs.readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList })
});
console.log(`IndexNow: ${urlList.length} URL -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) { console.error(await res.text()); process.exit(1); }
