import fs from 'node:fs';
import path from 'node:path';

const base = 'https://limitra.online';
const today = '2026-08-28';

const dataDir = path.resolve('src/data');

const haberlerTr = JSON.parse(fs.readFileSync(path.join(dataDir, 'haberler.json'), 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-en.json'), 'utf8'));
const newsEs = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-es.json'), 'utf8'));
const newsFr = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-fr.json'), 'utf8'));
const newsDe = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-de.json'), 'utf8'));
const newsPt = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-pt.json'), 'utf8'));
const newsIt = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-it.json'), 'utf8'));
const newsAr = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-ar.json'), 'utf8'));
const newsId = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-id.json'), 'utf8'));
const newsFil = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-fil.json'), 'utf8'));
const newsTh = JSON.parse(fs.readFileSync(path.join(dataDir, 'news-th.json'), 'utf8'));

const newsMap = {
  tr: haberlerTr,
  en: newsEn,
  es: newsEs,
  fr: newsFr,
  de: newsDe,
  pt: newsPt,
  it: newsIt,
  ar: newsAr,
  id: newsId,
  fil: newsFil,
  th: newsTh
};

const guideSlugs = [
  'ekran-suresi',
  'sosyal-medya-ve-kisa-video',
  'dikkat-uyku-ve-rutinler',
  'ekran-suresini-azaltma-yontemleri',
  'klasik-limitler-neden-yetmez',
  'daha-net-uygulama-sinirlari'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Turkish Routes -->
  <url>
    <loc>${base}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${base}/haberler</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

for (const item of haberlerTr) {
  xml += `  <url>
    <loc>${base}/haberler/${item.slug}</loc>
    <lastmod>${item.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `  <url>
    <loc>${base}/limitra</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${base}/sss</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${base}/bilgi-merkezi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

for (const slug of guideSlugs) {
  xml += `  <url>
    <loc>${base}/bilgi-merkezi/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

xml += `  <url>
    <loc>${base}/iletisim</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${base}/gizlilik-politikasi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${base}/kullanim-sartlari</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- English Routes -->
  <url>
    <loc>${base}/en</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${base}/en/news</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

for (const item of newsEn) {
  xml += `  <url>
    <loc>${base}/en/news/${item.slug}</loc>
    <lastmod>${item.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `  <url>
    <loc>${base}/en/limitra</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${base}/en/sss</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${base}/en/bilgi-merkezi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;

for (const slug of guideSlugs) {
  xml += `  <url>
    <loc>${base}/en/bilgi-merkezi/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
}

xml += `  <url>
    <loc>${base}/en/iletisim</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${base}/en/gizlilik-politikasi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${base}/en/kullanim-sartlari</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;

const otherLangs = ['es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of otherLangs) {
  const langName = {
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    pt: 'Portuguese',
    it: 'Italian',
    ar: 'Arabic',
    id: 'Indonesian',
    fil: 'Filipino',
    th: 'Thai'
  }[lang];

  xml += `
  <!-- ${langName} Routes -->
  <url>
    <loc>${base}/${lang}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${base}/${lang}/news</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

  for (const item of newsMap[lang]) {
    xml += `  <url>
    <loc>${base}/${lang}/news/${item.slug}</loc>
    <lastmod>${item.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  xml += `  <url>
    <loc>${base}/${lang}/limitra</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${base}/${lang}/sss</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

xml += `
  <!-- Legal & Utilities -->
  <url>
    <loc>${base}/limitra-social/privacy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${base}/limitra-social/terms</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${base}/limitra-social/delete-account</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
`;

fs.writeFileSync(path.resolve('public/sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml generated successfully.');
