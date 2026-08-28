import type { SupportedLang } from './translations';
import haberlerTr from './haberler.json';
import newsEn from './news-en.json';

/**
 * Tam içerikli diller: haber arşivi, bilgi merkezi, iletişim ve hukuki
 * sayfaların gerçek çevirisi yalnızca bu dillerde var.
 * Diğer diller yalnızca ana sayfa, /limitra ve /sss sayfalarına sahip;
 * eksik bölümlerde İngilizce sürüme düşülür.
 */
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

/** Haber slug'ları dile göre farklı; ortak `id` üzerinden eşleştirilir. */
const newsSlugByLang: Record<'tr' | 'en', Record<number, string>> = {
  tr: Object.fromEntries(haberlerTr.map((n) => [n.id, n.slug])),
  en: Object.fromEntries(newsEn.map((n) => [n.id, n.slug]))
};

const newsIdBySlug: Record<string, number> = {
  ...Object.fromEntries(haberlerTr.map((n) => [n.slug, n.id])),
  ...Object.fromEntries(newsEn.map((n) => [n.slug, n.id]))
};

/** Bir haber slug'ının hedef dildeki karşılığı (yoksa null). */
export const translateNewsSlug = (slug: string, targetLang: SupportedLang): string | null => {
  const id = newsIdBySlug[slug];
  if (id === undefined) return null;
  return newsSlugByLang[targetLang === 'tr' ? 'tr' : 'en'][id] ?? null;
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
  if (sub.startsWith('haberler/') || sub.startsWith('news/')) {
    return { lang, key: 'newsItem', slug: slugOf('haberler') };
  }
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
  const full = hasFullContent(lang);

  switch (key) {
    case 'home':
      return p || '/';
    case 'howItWorks':
      return `${p}/limitra`;
    case 'faq':
      return `${p}/sss`;
    case 'news':
      return full ? (lang === 'tr' ? '/haberler' : `${p}/news`) : null;
    case 'newsItem': {
      if (!full) return null;
      const target = translateNewsSlug(slug, lang);
      if (!target) return null;
      return lang === 'tr' ? `/haberler/${target}` : `${p}/news/${target}`;
    }
    case 'guides':
      return full ? `${p}/bilgi-merkezi` : null;
    case 'guide':
      return full ? `${p}/bilgi-merkezi/${slug}` : null;
    case 'contact':
      return full ? `${p}/iletisim` : null;
    case 'privacy':
      return full ? `${p}/gizlilik-politikasi` : null;
    case 'terms':
      return full ? `${p}/kullanim-sartlari` : null;
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
