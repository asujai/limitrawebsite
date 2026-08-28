import type { SupportedLang } from './translations';
import haberlerTr from './haberler.json';
import newsEn from './news-en.json';
import newsEs from './news-es.json';
import newsFr from './news-fr.json';
import newsDe from './news-de.json';
import newsPt from './news-pt.json';
import newsIt from './news-it.json';
import newsAr from './news-ar.json';
import newsId from './news-id.json';
import newsFil from './news-fil.json';
import newsTh from './news-th.json';

/**
 * Bölüm bazlı dil desteği listesi.
 * Haberler artık 11 dilde tam olarak mevcuttur.
 * Diğer bölümler (rehberler, iletişim, hukuki) kademeli olarak genişletilecektir.
 */
export const SECTION_LANGS = {
  news: ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'] as SupportedLang[],
  guides: ['tr', 'en'] as SupportedLang[],
  contact: ['tr', 'en'] as SupportedLang[],
  legal: ['tr', 'en'] as SupportedLang[],
};

export const FULL_CONTENT_LANGS: SupportedLang[] = ['tr', 'en'];
export const hasFullContent = (lang: SupportedLang) => FULL_CONTENT_LANGS.includes(lang);

/** Dil öneki: tr için '', diğerleri için '/xx' */
export const langPrefix = (lang: SupportedLang) => (lang === 'tr' ? '' : `/${lang}`);

export type PageKey =
  | 'home'
  | 'howItWorks'
  | 'faq'
  | 'news'
  | 'newsItem'
  | 'guides'
  | 'guide'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'other';

export interface NewsArticleItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  source: string;
  sourceUrl: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export const newsByLang: Record<SupportedLang, NewsArticleItem[]> = {
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
  th: newsTh,
};

/** Haber slug'ları dile göre farklı; ortak `id` üzerinden eşleştirilir. */
const newsSlugByLang: Record<SupportedLang, Record<string, string>> = {
  tr: Object.fromEntries(haberlerTr.map((n) => [n.id, n.slug])),
  en: Object.fromEntries(newsEn.map((n) => [n.id, n.slug])),
  es: Object.fromEntries(newsEs.map((n) => [n.id, n.slug])),
  fr: Object.fromEntries(newsFr.map((n) => [n.id, n.slug])),
  de: Object.fromEntries(newsDe.map((n) => [n.id, n.slug])),
  pt: Object.fromEntries(newsPt.map((n) => [n.id, n.slug])),
  it: Object.fromEntries(newsIt.map((n) => [n.id, n.slug])),
  ar: Object.fromEntries(newsAr.map((n) => [n.id, n.slug])),
  id: Object.fromEntries(newsId.map((n) => [n.id, n.slug])),
  fil: Object.fromEntries(newsFil.map((n) => [n.id, n.slug])),
  th: Object.fromEntries(newsTh.map((n) => [n.id, n.slug])),
};

const newsIdBySlug: Record<string, string> = {};
for (const lang of Object.keys(newsByLang) as SupportedLang[]) {
  for (const item of newsByLang[lang]) {
    newsIdBySlug[item.slug] = item.id;
  }
}

/** Bir haber slug'ının hedef dildeki karşılığı (yoksa null). */
export const translateNewsSlug = (slug: string, targetLang: SupportedLang): string | null => {
  const id = newsIdBySlug[slug];
  if (id === undefined) return null;
  return newsSlugByLang[targetLang]?.[id] ?? null;
};

/**
 * Bir URL yolunu dil + sayfa tipi + slug olarak çözer.
 * Dile bağlı olmayan sayfalar (limitra-social, cleanscan) 'other' döner.
 */
export function parsePath(pathname: string): { lang: SupportedLang; key: PageKey; slug: string } {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const segments = clean.split('/').filter(Boolean);
  const langs: SupportedLang[] = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

  let lang: SupportedLang = 'tr';
  let rest = segments;
  if (segments.length && langs.includes(segments[0] as SupportedLang)) {
    lang = segments[0] as SupportedLang;
    rest = segments.slice(1);
  }

  const sub = rest.join('/');
  const slugOf = (prefix: string) => rest.slice(prefix.split('/').length).join('/');

  if (sub === '') return { lang, key: 'home', slug: '' };
  if (sub === 'limitra') return { lang, key: 'howItWorks', slug: '' };
  if (sub === 'sss') return { lang, key: 'faq', slug: '' };
  if (sub === 'haberler' || sub === 'news') return { lang, key: 'news', slug: '' };
  if (sub.startsWith('haberler/')) return { lang, key: 'newsItem', slug: sub.slice('haberler/'.length) };
  if (sub.startsWith('news/')) return { lang, key: 'newsItem', slug: sub.slice('news/'.length) };
  if (sub === 'bilgi-merkezi') return { lang, key: 'guides', slug: '' };
  if (sub.startsWith('bilgi-merkezi/')) return { lang, key: 'guide', slug: slugOf('bilgi-merkezi') };
  if (sub === 'iletisim') return { lang, key: 'contact', slug: '' };
  if (sub === 'gizlilik-politikasi') return { lang, key: 'privacy', slug: '' };
  if (sub === 'kullanim-sartlari') return { lang, key: 'terms', slug: '' };

  return { lang, key: 'other', slug: sub };
}

/**
 * Hedef dilde gerçekten var olan URL'i döner; o dilde sayfa yoksa null.
 * hreflang etiketleri için kullanılır — uydurma rota üretmez.
 */
export function buildUrl(lang: SupportedLang, key: PageKey, slug = ''): string | null {
  const p = langPrefix(lang);

  switch (key) {
    case 'home':
      return p || '/';
    case 'howItWorks':
      return `${p}/limitra`;
    case 'faq':
      return `${p}/sss`;
    case 'news':
      return SECTION_LANGS.news.includes(lang) ? (lang === 'tr' ? '/haberler' : `${p}/news`) : null;
    case 'newsItem': {
      if (!SECTION_LANGS.news.includes(lang)) return null;
      const target = translateNewsSlug(slug, lang);
      if (!target) return null;
      return lang === 'tr' ? `/haberler/${target}` : `${p}/news/${target}`;
    }
    case 'guides':
      return SECTION_LANGS.guides.includes(lang) ? `${p}/bilgi-merkezi` : null;
    case 'guide':
      return SECTION_LANGS.guides.includes(lang) ? `${p}/bilgi-merkezi/${slug}` : null;
    case 'contact':
      return SECTION_LANGS.contact.includes(lang) ? `${p}/iletisim` : null;
    case 'privacy':
      return SECTION_LANGS.legal.includes(lang) ? `${p}/gizlilik-politikasi` : null;
    case 'terms':
      return SECTION_LANGS.legal.includes(lang) ? `${p}/kullanim-sartlari` : null;
    default:
      return null;
  }
}

/**
 * Gezinme bağlantıları için: hedef dilde sayfa yoksa İngilizce sürüme,
 * o da yoksa dilin ana sayfasına düşer. Asla 404 üretmez.
 */
export function resolveUrl(lang: SupportedLang, key: PageKey, slug = ''): string {
  return buildUrl(lang, key, slug) ?? buildUrl('en', key, slug) ?? (langPrefix(lang) || '/');
}

/** Bir dil için tüm ana rotalar (eksik bölümler İngilizce'ye düşer). */
export const routes = (lang: SupportedLang) => ({
  home: resolveUrl(lang, 'home'),
  howItWorks: resolveUrl(lang, 'howItWorks'),
  faq: resolveUrl(lang, 'faq'),
  news: resolveUrl(lang, 'news'),
  newsItem: (slug: string) => resolveUrl(lang, 'newsItem', slug),
  guides: resolveUrl(lang, 'guides'),
  guide: (slug: string) => resolveUrl(lang, 'guide', slug),
  contact: resolveUrl(lang, 'contact'),
  privacy: resolveUrl(lang, 'privacy'),
  terms: resolveUrl(lang, 'terms')
});
