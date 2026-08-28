import fs from 'node:fs';
import path from 'node:path';

const pagesDir = path.resolve('src/pages');

// TR
const trDir = path.join(pagesDir, 'haberler');
if (!fs.existsSync(trDir)) fs.mkdirSync(trDir, { recursive: true });

fs.writeFileSync(
  path.join(trDir, 'index.astro'),
`---
import NewsIndex from '../../components/NewsIndex.astro';
---

<NewsIndex lang="tr" />
`,
  'utf8'
);

fs.writeFileSync(
  path.join(trDir, '[slug].astro'),
`---
import NewsArticle from '../../components/NewsArticle.astro';
import newsList from '../../data/haberler.json';

export function getStaticPaths() {
  return newsList.map((item) => ({
    params: { slug: item.slug },
    props: { news: item }
  }));
}

const { news } = Astro.props;
---

<NewsArticle news={news} lang="tr" />
`,
  'utf8'
);

const otherLangs = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of otherLangs) {
  const dir = path.join(pagesDir, lang, 'news');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(
    path.join(dir, 'index.astro'),
`---
import NewsIndex from '../../../components/NewsIndex.astro';
---

<NewsIndex lang="${lang}" />
`,
    'utf8'
  );

  fs.writeFileSync(
    path.join(dir, '[slug].astro'),
`---
import NewsArticle from '../../../components/NewsArticle.astro';
import newsList from '../../../data/news-${lang}.json';

export function getStaticPaths() {
  return newsList.map((item) => ({
    params: { slug: item.slug },
    props: { news: item }
  }));
}

const { news } = Astro.props;
---

<NewsArticle news={news} lang="${lang}" />
`,
    'utf8'
  );
  console.log(`Generated news pages for ${lang}`);
}
