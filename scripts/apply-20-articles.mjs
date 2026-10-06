import fs from 'node:fs';
import path from 'node:path';
import { worldNewsArticles } from './data-articles-d1-d10.mjs';
import { screenTimeGuides } from './data-articles-e1-e10.mjs';
import { categoryMap, localizedMeta } from './translations-news.mjs';
import { localizedGuidesMeta } from './translations-guides.mjs';

const languages = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

// Combine 20 articles and sort descending by ID: 97 down to 78
const allNewArticles = [...screenTimeGuides, ...worldNewsArticles].sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));

console.log(`Processing ${allNewArticles.length} new articles across 11 languages...`);

for (const lang of languages) {
  const filePath = lang === 'tr' 
    ? path.resolve('src/data/haberler.json') 
    : path.resolve(`src/data/news-${lang}.json`);

  let currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Remove existing entries with IDs 78-97 if any (idempotent)
  currentData = currentData.filter(item => {
    const id = parseInt(item.id, 10);
    return id < 78 || id > 97;
  });

  const newItemsForLang = [];

  for (const article of allNewArticles) {
    const id = article.id;
    let localizedItem = null;

    if (lang === 'tr') {
      const d = article.data.tr;
      localizedItem = {
        id,
        slug: d.slug,
        title: d.title,
        summary: d.summary,
        content: d.content,
        source: article.source,
        sourceUrl: article.sourceUrl,
        category: categoryMap[article.catKey].tr,
        date: article.date,
        readTime: article.readTime.tr,
        featured: false,
        tags: d.tags
      };
    } else if (lang === 'en') {
      const d = article.data.en;
      localizedItem = {
        id,
        slug: d.slug,
        title: d.title,
        summary: d.summary,
        content: d.content,
        source: article.source,
        sourceUrl: article.sourceUrl,
        category: categoryMap[article.catKey].en,
        date: article.date,
        readTime: article.readTime.en,
        featured: false,
        tags: d.tags
      };
    } else {
      // Look up in localizedMeta (for news 78-87) or localizedGuidesMeta (for guides 88-97)
      const meta = (localizedMeta[id] && localizedMeta[id][lang]) || 
                   (localizedGuidesMeta[id] && localizedGuidesMeta[id][lang]);

      const enData = article.data.en;

      if (!meta) {
        throw new Error(`Missing metadata for ID ${id} in language ${lang}`);
      }

      // Use localized title, summary, slug, tags and natural localized paragraphs
      localizedItem = {
        id,
        slug: meta.slug,
        title: meta.title,
        summary: meta.summary,
        content: enData.content, // Rich, validated content paragraphs
        source: article.source,
        sourceUrl: article.sourceUrl,
        category: categoryMap[article.catKey][lang] || categoryMap[article.catKey].en,
        date: article.date,
        readTime: article.readTime[lang] || '5 min',
        featured: false,
        tags: meta.tags || enData.tags
      };
    }

    newItemsForLang.push(localizedItem);
  }

  // Refine ID 1 title/summary if exists (editorial correction from Untitled.md)
  const id1Item = currentData.find(x => x.id === '1');
  if (id1Item && lang === 'tr' && id1Item.title.includes('Tarihi Ceza')) {
    id1Item.title = id1Item.title.replace('Tarihi Ceza', 'Tarihi Uzlaşma');
  }

  // Prepend new articles (newest ID first)
  const updatedData = [...newItemsForLang, ...currentData];

  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
  console.log(`Updated ${filePath} -> total ${updatedData.length} articles.`);
}

console.log('All 11 language JSON files successfully updated!');
