import type { SupportedLang } from './translations';

export const SITE_URL = 'https://limitra.online';
export const STORE_URL = 'https://play.google.com/store/apps/details?id=com.gardiyan.app';
export const APP_VERSION = '1.2.1';
export const APP_VERSION_DATE = '2026-09-05';
export const APP_PRICE = '0.49';
export const APP_PRICE_CURRENCY = 'USD';
export const APP_PRICE_LABEL = '$0.49';

/** Tek cumlelik kanonik tanim; llms.txt, JSON-LD ve ucuncu taraf kayitlarda birebir ayni kullanilir. */
export const SHORT_DESCRIPTION: Record<'tr' | 'en', string> = {
  tr: 'Limitra App Block, Android için aboneliksiz ve %100 çevrimdışı bir uygulama engelleyici ve ekran süresi sınırlayıcıdır; günlük limit dolduğunda seçilen uygulamayı gün sonuna kadar kilitler.',
  en: 'Limitra App Block is a subscription-free, 100% offline app blocker and screen time limiter for Android; when the daily limit runs out it locks the selected app until the end of the day.'
};

/** Ana sayfa H1 altindaki dogrudan cevap paragrafi (<=120 kelime). */
export const HERO_ANSWER: Record<'tr' | 'en', string> = {
  tr: `${SHORT_DESCRIPTION.tr} Android 7.0 ve üzeri cihazlarda çalışır, Google Play'de $0.49 tek seferlik ödemeyle sunulur; internet izni istemez, hesap gerektirmez ve tüm veriler cihazda kalır.`,
  en: `${SHORT_DESCRIPTION.en} It runs on Android 7.0 and above, is sold on Google Play as a $0.49 one-time purchase, requests no internet permission, needs no account, and keeps all data on the device.`
};

const FEATURES: Record<'tr' | 'en', string[]> = {
  tr: [
    'Uygulama başına günlük süre limiti',
    'Limit dolunca geçilemeyen kilit ekranı',
    'Aktif zaman aralığı (ör. 09:00-18:00) ile zamanlanmış koruma',
    'Stoacı alıntılı kilit ekranı',
    'Seri (streak) ve seviye sistemi',
    'Cihaz içi olay zaman akışı',
    'İnternet izni yok, hesap yok, reklam yok',
    'Tek seferlik ödeme, abonelik yok',
    '11 dil desteği'
  ],
  en: [
    'Daily time limit per app',
    'Non-dismissable lock screen when the limit is reached',
    'Scheduled protection with an active time window (e.g. 09:00-18:00)',
    'Stoic-quote lock screen',
    'Streak and level system',
    'On-device event timeline',
    'No internet permission, no account, no ads',
    'One-time purchase, no subscription',
    '11 languages'
  ]
};

/** Her sayfaya eklenen temel varlik grafi: Organization + WebSite + SoftwareApplication. */
export function baseGraph(lang: SupportedLang) {
  const l: 'tr' | 'en' = lang === 'tr' ? 'tr' : 'en';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: 'Limitra',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: 'destek@limitra.online',
        sameAs: [STORE_URL]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Limitra App Block',
        publisher: { '@id': `${SITE_URL}/#org` },
        inLanguage: l === 'tr' ? 'tr-TR' : 'en'
      },
      {
        '@type': ['SoftwareApplication', 'MobileApplication'],
        '@id': `${SITE_URL}/#app`,
        name: 'Limitra App Block',
        alternateName: ['Limitra', 'Limitra: Uygulama Engelleyici', 'Limitra: Focus App Blocker'],
        description: SHORT_DESCRIPTION[l],
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'App blocker / screen time limiter',
        operatingSystem: 'Android 7.0+',
        url: SITE_URL,
        downloadUrl: STORE_URL,
        installUrl: STORE_URL,
        softwareVersion: APP_VERSION,
        dateModified: APP_VERSION_DATE,
        author: { '@id': `${SITE_URL}/#org` },
        publisher: { '@id': `${SITE_URL}/#org` },
        isAccessibleForFree: false,
        offers: {
          '@type': 'Offer',
          price: APP_PRICE,
          priceCurrency: APP_PRICE_CURRENCY,
          category: 'one-time purchase',
          url: STORE_URL,
          availability: 'https://schema.org/InStock'
        },
        featureList: FEATURES[l],
        inLanguage: ['en', 'tr', 'ar', 'de', 'es', 'fr', 'hi', 'id', 'pt', 'ru', 'th']
      }
    ]
  };
}
