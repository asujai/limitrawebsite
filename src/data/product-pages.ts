import { APP_PRICE_TRY, APP_VERSION, STORE_URL } from './schema';
import type { AlternativeSlug } from './routes';

type L = 'tr' | 'en';
export const COMPARISON_DATE = '2026-09-11';
const priceTr = `₺${APP_PRICE_TRY.replace('.', ',')}`;
const priceEn = `₺${APP_PRICE_TRY}`;

/* ---------- Fiyatlandirma ---------- */
export const pricing: Record<L, {
  title: string; description: string; h1: string; answer: string;
  rows: [string, string][]; includedTitle: string; included: string[];
  notesTitle: string; notes: string[]; cta: string;
}> = {
  tr: {
    title: 'Fiyatlandırma | Limitra App Block',
    description: `Limitra App Block Google Play'de ${priceTr} tek seferlik ödemeyle satılır. Abonelik, uygulama içi satın alım, reklam veya gizli ücret yoktur.`,
    h1: 'Limitra App Block fiyatı',
    answer: `Limitra App Block, Google Play'de ${priceTr} tek seferlik ödemeyle satılır. Aylık veya yıllık abonelik yoktur, uygulama içi satın alım yoktur, reklam yoktur. Bir kez ödersiniz; tüm özellikler ve gelecek güncellemeler aynı Google hesabındaki tüm Android cihazlarınızda süresiz açıktır. Ücretsiz sürüm veya deneme sürümü yoktur; Google Play'in standart iade politikası geçerlidir.`,
    rows: [
      ['Fiyat (Türkiye)', priceTr],
      ['Ödeme modeli', 'Tek seferlik satın alma'],
      ['Abonelik', 'Yok'],
      ['Uygulama içi satın alım', 'Yok'],
      ['Reklam', 'Yok'],
      ['Ücretsiz sürüm / deneme', 'Yok'],
      ['Güncellemeler', 'Ek ücret yok'],
      ['Cihaz sayısı', 'Aynı Google hesabındaki tüm Android cihazlar'],
      ['İade', 'Google Play standart iade politikası']
    ],
    includedTitle: 'Tek ödemeye dahil olanlar',
    included: [
      'Sınırsız sayıda uygulama için günlük süre limiti',
      'Limit dolunca geçilemeyen kilit ekranı',
      'Aktif zaman aralığı ile zamanlanmış koruma',
      'Stoacı alıntılı kilit ekranı',
      'Seri (streak) ve seviye sistemi',
      'Cihaz içi olay zaman akışı',
      '11 dil desteği ve gelecek tüm sürümler'
    ],
    notesTitle: 'Bilinmesi gerekenler',
    notes: [
      'Diğer ülkelerde fiyat, Google Play tarafından yerel para biriminde gösterilir.',
      'Uygulama internet izni istemediği için lisans doğrulaması Google Play tarafından yapılır; ek hesap açılmaz.',
      'Fiyat değişirse bu sayfa ve mağaza sayfası birlikte güncellenir.'
    ],
    cta: "Google Play'de gör"
  },
  en: {
    title: 'Pricing | Limitra App Block',
    description: `Limitra App Block is sold on Google Play as a one-time purchase (${priceEn} in Türkiye, local pricing elsewhere). No subscription, no in-app purchases, no ads, no hidden fees.`,
    h1: 'Limitra App Block pricing',
    answer: `Limitra App Block is a one-time purchase on Google Play (${priceEn} in Türkiye; Google Play shows local pricing in other countries). There is no monthly or yearly subscription, no in-app purchases and no ads. You pay once; every feature and every future update stays unlocked on all Android devices that use the same Google account. There is no free tier or trial; Google Play's standard refund policy applies.`,
    rows: [
      ['Price (Türkiye)', priceEn],
      ['Payment model', 'One-time purchase'],
      ['Subscription', 'None'],
      ['In-app purchases', 'None'],
      ['Ads', 'None'],
      ['Free tier / trial', 'None'],
      ['Updates', 'No extra charge'],
      ['Devices', 'All Android devices on the same Google account'],
      ['Refunds', 'Google Play standard refund policy']
    ],
    includedTitle: 'What the single payment includes',
    included: [
      'Daily time limits for an unlimited number of apps',
      'Non-dismissable lock screen when the limit is reached',
      'Scheduled protection with an active time window',
      'Stoic-quote lock screen',
      'Streak and level system',
      'On-device event timeline',
      '11 languages and all future releases'
    ],
    notesTitle: 'Good to know',
    notes: [
      'Outside Türkiye, Google Play shows the price in your local currency.',
      'Because the app requests no internet permission, licensing is handled by Google Play; no separate account is created.',
      'If the price changes, this page and the store listing are updated together.'
    ],
    cta: 'View on Google Play'
  }
};

/* ---------- Karsilastirma ---------- */
export interface CompareRow { label: string; values: string[]; }
export const compare: Record<L, {
  title: string; description: string; h1: string; answer: string; columns: string[];
  rows: CompareRow[]; caption: string; method: string; methodTitle: string;
}> = {
  tr: {
    title: 'Uygulama Engelleyici Karşılaştırması: Limitra, StayFree, AppBlock, YourHour, Digital Wellbeing, Forest',
    description: 'Android uygulama engelleyici ve ekran süresi araçlarının tarafsız karşılaştırma tablosu: fiyat modeli, internet izni, hesap zorunluluğu, reklam, limit dolunca davranış ve platform.',
    h1: 'Android uygulama engelleyici karşılaştırması',
    answer: 'Bu tablo Limitra App Block ile StayFree, AppBlock (MobileSoft), YourHour, Google Digital Wellbeing ve Forest uygulamalarını fiyat modeli, internet izni, hesap zorunluluğu, reklam, limit dolduğunda davranış ve platform açısından karşılaştırır. Limitra\'nın ayırt edici özellikleri tek seferlik ödeme, internet izninin hiç istenmemesi ve limit dolunca ertelenemeyen kilittir; buna karşılık web sitesi engelleme, çoklu cihaz senkronu ve iOS desteği sunmaz. Rakip bilgileri herkese açık mağaza sayfalarından alınmıştır ve değişebilir.',
    columns: ['Özellik', 'Limitra App Block', 'StayFree', 'AppBlock', 'YourHour', 'Digital Wellbeing', 'Forest'],
    caption: `Android ekran süresi ve uygulama engelleme araçları karşılaştırması (${COMPARISON_DATE} itibarıyla herkese açık mağaza sayfaları esas alınmıştır).`,
    rows: [
      { label: 'Fiyat modeli', values: [`Tek ödeme (${priceTr})`, 'Ücretsiz + premium', 'Ücretsiz + premium', 'Ücretsiz + premium', 'Ücretsiz (sistem)', 'Ücretsiz + Pro'] },
      { label: 'İnternet izni', values: ['İstemez', 'İster', 'İster', 'İster', 'Sistem bileşeni', 'İster'] },
      { label: 'Hesap zorunluluğu', values: ['Yok', 'İsteğe bağlı', 'İsteğe bağlı', 'İsteğe bağlı', 'Google hesabı (cihaz)', 'İsteğe bağlı'] },
      { label: 'Reklam', values: ['Yok', 'Ücretsiz sürümde var', 'Ücretsiz sürümde var', 'Ücretsiz sürümde var', 'Yok', 'Ücretsiz sürümde var'] },
      { label: 'Limit dolunca', values: ['Gün sonuna kadar kilit; erteleme yok', 'Engelleme; katılık ayarlanabilir', 'Engelleme; katı mod seçeneği', 'Engelleme / uyarı', 'Uygulama kapanır; zamanlayıcı kaldırılabilir', 'Odak seansı bozulur (ağaç ölür)'] },
      { label: 'Yaklaşım', values: ['Uygulama başına günlük limit', 'İstatistik + limit', 'Zamanlama + engelleme', 'İstatistik + limit', 'Sistem zamanlayıcısı', 'Pomodoro odak seansı'] },
      { label: 'Zamanlanmış koruma', values: ['Aktif zaman aralığı', 'Var', 'Var', 'Var', 'Odak modu / Uyku modu', 'Seans bazlı'] },
      { label: 'Web sitesi engelleme', values: ['Yok', 'Var', 'Var', 'Kısıtlı', 'Chrome zamanlayıcısı', 'Tarayıcı eklentisi'] },
      { label: 'Kilit ekranı içeriği', values: ['Stoacı alıntılar', 'Standart', 'Standart', 'Standart', 'Standart', 'Ağaç görseli'] },
      { label: 'Veri konumu', values: ['Yalnızca cihaz', 'Cihaz + isteğe bağlı bulut', 'Cihaz + isteğe bağlı bulut', 'Cihaz + isteğe bağlı bulut', 'Cihaz', 'Cihaz + isteğe bağlı bulut'] },
      { label: 'Platform', values: ['Android 7.0+', 'Android, iOS, masaüstü', 'Android, iOS', 'Android', 'Android (Google sürümü)', 'Android, iOS'] },
      { label: 'Dil sayısı', values: ['11', 'Çok dilli', 'Çok dilli', 'Çok dilli', 'Sistem dili', 'Çok dilli'] }
    ],
    methodTitle: 'Yöntem ve sınırlar',
    method: 'Rakip sütunları, ilgili uygulamaların Google Play mağaza sayfaları ve resmî sitelerindeki herkese açık bilgilerden derlendi. Fiyatlar ülkeye göre değiştiği ve sık güncellendiği için rakipler için tutar yazılmadı; yalnızca model belirtildi. Emin olamadığımız hücreler için ilgili uygulamanın kendi sayfasını kontrol etmenizi öneririz. Tabloda Limitra lehine yorum yapılmamıştır: web sitesi engelleme, iOS desteği ve çoklu cihaz senkronu Limitra\'da yoktur.'
  },
  en: {
    title: 'App Blocker Comparison: Limitra vs StayFree, AppBlock, YourHour, Digital Wellbeing, Forest',
    description: 'Neutral comparison table of Android app blockers and screen time tools: pricing model, internet permission, account requirement, ads, behaviour when the limit is reached, and platforms.',
    h1: 'Android app blocker comparison',
    answer: 'This table compares Limitra App Block with StayFree, AppBlock (MobileSoft), YourHour, Google Digital Wellbeing and Forest across pricing model, internet permission, account requirement, ads, behaviour when the limit is reached, and platform. Limitra\'s distinguishing traits are a one-time purchase, no internet permission at all, and a lock that cannot be postponed once the limit is reached; in exchange it does not offer website blocking, multi-device sync or iOS. Competitor data comes from public store listings and may change.',
    columns: ['Feature', 'Limitra App Block', 'StayFree', 'AppBlock', 'YourHour', 'Digital Wellbeing', 'Forest'],
    caption: `Comparison of Android screen time and app blocking tools (based on public store listings as of ${COMPARISON_DATE}).`,
    rows: [
      { label: 'Pricing model', values: [`One-time purchase (${priceEn} in Türkiye)`, 'Free + premium', 'Free + premium', 'Free + premium', 'Free (system)', 'Free + Pro'] },
      { label: 'Internet permission', values: ['Not requested', 'Requested', 'Requested', 'Requested', 'System component', 'Requested'] },
      { label: 'Account required', values: ['No', 'Optional', 'Optional', 'Optional', 'Google account (device)', 'Optional'] },
      { label: 'Ads', values: ['None', 'In free tier', 'In free tier', 'In free tier', 'None', 'In free tier'] },
      { label: 'When the limit is reached', values: ['Locked until end of day; no snooze', 'Blocked; strictness configurable', 'Blocked; strict mode option', 'Blocked / warning', 'App closes; timer can be removed', 'Focus session fails (tree dies)'] },
      { label: 'Approach', values: ['Daily limit per app', 'Statistics + limits', 'Schedules + blocking', 'Statistics + limits', 'System timer', 'Pomodoro focus sessions'] },
      { label: 'Scheduled protection', values: ['Active time window', 'Yes', 'Yes', 'Yes', 'Focus mode / Bedtime mode', 'Per session'] },
      { label: 'Website blocking', values: ['No', 'Yes', 'Yes', 'Limited', 'Chrome timers', 'Browser extension'] },
      { label: 'Lock screen content', values: ['Stoic quotes', 'Standard', 'Standard', 'Standard', 'Standard', 'Tree visual'] },
      { label: 'Data location', values: ['Device only', 'Device + optional cloud', 'Device + optional cloud', 'Device + optional cloud', 'Device', 'Device + optional cloud'] },
      { label: 'Platforms', values: ['Android 7.0+', 'Android, iOS, desktop', 'Android, iOS', 'Android', 'Android (Google build)', 'Android, iOS'] },
      { label: 'Languages', values: ['11', 'Multilingual', 'Multilingual', 'Multilingual', 'System language', 'Multilingual'] }
    ],
    methodTitle: 'Method and limits',
    method: 'Competitor columns were compiled from public information on each app\'s Google Play listing and official website. Because prices vary by country and change often, no amounts are listed for competitors, only the model. Where we could not verify a cell we recommend checking the app\'s own page. The table is not slanted toward Limitra: website blocking, iOS support and multi-device sync are absent in Limitra.'
  }
};

/* ---------- Rakip alternatifleri ---------- */
export interface AlternativePage {
  rival: string;
  title: string; description: string; h1: string; answer: string;
  rivalStrengths: string[]; limitraDiffers: string[]; keepRival: string[]; switchTo: string[];
}
export const altSections: Record<L, { rivalStrengths: (r: string) => string; limitraDiffers: string; keepRival: (r: string) => string; switchTo: string; compareLink: string; }> = {
  tr: {
    rivalStrengths: (r) => `${r} nerede güçlü`,
    limitraDiffers: 'Limitra App Block nerede farklı',
    keepRival: (r) => `${r} ile devam etmeniz gereken durumlar`,
    switchTo: 'Limitra App Block\'un daha uygun olduğu durumlar',
    compareLink: 'Tam karşılaştırma tablosunu gör'
  },
  en: {
    rivalStrengths: (r) => `Where ${r} is strong`,
    limitraDiffers: 'Where Limitra App Block differs',
    keepRival: (r) => `When to stay with ${r}`,
    switchTo: 'When Limitra App Block is the better fit',
    compareLink: 'See the full comparison table'
  }
};

export const alternatives: Record<L, Record<AlternativeSlug, AlternativePage>> = {
  tr: {
    stayfree: {
      rival: 'StayFree',
      title: 'StayFree alternatifi: Limitra App Block',
      description: 'StayFree yerine aboneliksiz, reklamsız ve internet izni istemeyen bir Android uygulama engelleyici arıyorsanız Limitra App Block\'un farkları ve sınırları.',
      h1: 'StayFree alternatifi arıyorsanız',
      answer: 'Limitra App Block, StayFree\'nin abonelik ve reklam modeli yerine tek seferlik ödeme, internet izni istemeyen tamamen cihaz içi çalışma ve limit dolunca ertelenemeyen kilit sunan bir Android alternatifidir. StayFree ayrıntılı kullanım istatistikleri, web sitesi engelleme ve çoklu cihaz senkronu isteyenler için daha kapsamlıdır; Limitra ise yalnızca tek işi yapan, veri toplamayan ve bir kez ödenen bir engelleyici isteyenler içindir.',
      rivalStrengths: ['Günlük, haftalık ve aylık ayrıntılı kullanım grafikleri', 'Web sitesi engelleme ve tarayıcı desteği', 'Android, iOS, Windows ve Chrome arasında senkron', 'Ücretsiz başlangıç seviyesi'],
      limitraDiffers: ['Abonelik yok; tek seferlik ödeme', 'Reklam yok, hiçbir sürümde', 'İnternet izni hiç istenmez; veri cihazdan çıkamaz', 'Limit dolunca kilit gün sonuna kadar kalır, "5 dakika daha" yok', 'Kilit ekranında Stoacı alıntılar'],
      keepRival: ['Ekran süresi istatistiklerini ayrıntılı incelemek istiyorsanız', 'Web sitelerini de engellemek istiyorsanız', 'iPhone veya bilgisayarla senkron gerekiyorsa', 'Ödeme yapmadan başlamak istiyorsanız'],
      switchTo: ['Aylık ücret ödemek istemiyorsanız', 'Uygulamanın internete hiç çıkmamasını istiyorsanız', 'İstatistik değil, geçilemeyen bir sınır istiyorsanız', 'Reklamsız ve hesapsız bir araç arıyorsanız']
    },
    appblock: {
      rival: 'AppBlock',
      title: 'AppBlock alternatifi: Limitra App Block',
      description: 'AppBlock (MobileSoft) yerine tek ödemeli, çevrimdışı ve tavizsiz bir Android uygulama engelleyici arayanlar için Limitra App Block karşılaştırması.',
      h1: 'AppBlock alternatifi arıyorsanız',
      answer: 'Limitra App Block, AppBlock\'un zamanlama ve web sitesi engelleme odaklı freemium modeline karşı tek seferlik ödeme, internet izni istemeyen yapı ve uygulama başına günlük süre limiti sunar. AppBlock çok sayıda profil, konum/Wi-Fi tetikleyici ve web engelleme isteyenler için daha esnektir; Limitra ise ayar karmaşası olmadan "bu uygulamaya günde şu kadar" diyen ve bir kez ödeyen kullanıcılar içindir. İki uygulamanın adı benzese de bağımsız ürünlerdir.',
      rivalStrengths: ['Zaman, konum ve Wi-Fi tetikleyicili engelleme profilleri', 'Web sitesi ve bildirim engelleme', 'Android ve iOS desteği', 'Ücretsiz başlangıç seviyesi'],
      limitraDiffers: ['Tek seferlik ödeme; premium katman yok', 'İnternet izni yok; reklam yok', 'Uygulama başına günlük süre bütçesi, tek ekranda', 'Limit dolunca kilit ertelenemez', 'Aktif zaman aralığı ile tek bir zamanlanmış koruma'],
      keepRival: ['Konum veya Wi-Fi tetikleyicili profiller gerekiyorsa', 'Web sitelerini ve bildirimleri de engellemek istiyorsanız', 'iOS cihazınız varsa'],
      switchTo: ['Aboneliksiz ve reklamsız bir araç istiyorsanız', 'Uygulamanın veri toplamadığından emin olmak istiyorsanız', 'Profil kurmak yerine günlük limit koymak istiyorsanız']
    },
    yourhour: {
      rival: 'YourHour',
      title: 'YourHour alternatifi: Limitra App Block',
      description: 'YourHour yerine istatistik değil geçilemeyen sınır isteyenler için aboneliksiz ve çevrimdışı Android uygulama engelleyici Limitra App Block.',
      h1: 'YourHour alternatifi arıyorsanız',
      answer: 'Limitra App Block, YourHour\'un kullanım istatistiği ve "bağımlılık seviyesi" raporlama yaklaşımının aksine engellemeye odaklanır: uygulama başına günlük limit, dolunca gün sonuna kadar kilit, tek seferlik ödeme ve internet izni istemeyen yapı. YourHour telefon alışkanlığını ölçmek ve raporlamak isteyenler için daha zengindir; Limitra ölçmek değil durdurmak isteyenler içindir.',
      rivalStrengths: ['Ayrıntılı kullanım raporları ve bağımlılık seviyesi sınıflandırması', 'Kilit açma sayısı ve zaman çizelgesi takibi', 'Ücretsiz başlangıç seviyesi'],
      limitraDiffers: ['Odak istatistik değil engelleme; limit dolunca erteleme yok', 'Tek seferlik ödeme, reklam yok', 'İnternet izni yok, hesap yok', 'Stoacı alıntılı kilit ekranı ve seri sistemi'],
      keepRival: ['Önce alışkanlığınızı ölçmek ve raporlamak istiyorsanız', 'Ücretsiz bir araçla başlamak istiyorsanız'],
      switchTo: ['Ne kadar kullandığınızı zaten biliyor ve durdurmak istiyorsanız', 'Reklamsız, aboneliksiz ve veri toplamayan bir araç istiyorsanız']
    },
    'digital-wellbeing': {
      rival: 'Digital Wellbeing',
      title: 'Digital Wellbeing alternatifi: Limitra App Block',
      description: 'Google Digital Wellbeing uygulama zamanlayıcıları tek dokunuşla kaldırılabiliyor. Daha sert bir sınır isteyenler için Limitra App Block.',
      h1: 'Digital Wellbeing yetmiyorsa',
      answer: `Limitra App Block, Android'in yerleşik Digital Wellbeing uygulama zamanlayıcılarından farklı olarak limit dolduğunda kolayca kaldırılamayan bir kilit koyar: zamanlayıcıyı silmek veya süreyi uzatmak yerine uygulama gün sonuna kadar kapalı kalır ve korumayı iptal etmek beş dakika kesintisiz basılı tutmayı gerektirir. Digital Wellbeing ücretsiz ve sistemin parçasıdır; Limitra ${priceTr} tek ödemelidir ve yalnızca kendi sınırını korumak isteyen kişiler için tasarlanmıştır.`,
      rivalStrengths: ['Ücretsiz ve birçok Android cihazda önceden yüklü', 'Odak modu, Uyku modu ve Chrome site zamanlayıcıları', 'Sistem düzeyinde kullanım istatistikleri'],
      limitraDiffers: ['Zamanlayıcı tek dokunuşla kaldırılamaz; kilit gün sonuna kadar sürer', 'Korumayı iptal etmek 5 dakika kesintisiz basılı tutma gerektirir', 'Stoacı alıntılar ve seri sistemiyle davranışsal destek', 'Digital Wellbeing sunmayan cihazlarda da çalışır'],
      keepRival: ['Yumuşak bir hatırlatma sizin için yeterliyse', 'Ödeme yapmak istemiyorsanız'],
      switchTo: ['Zamanlayıcıyı sürekli kaldırıp devam ettiğinizi fark ettiyseniz', 'Cihazınızda Digital Wellbeing yoksa', 'Karar anında kendinizle pazarlık etmek istemiyorsanız']
    },
    forest: {
      rival: 'Forest',
      title: 'Forest alternatifi: Limitra App Block',
      description: 'Forest\'ın seans bazlı odak zamanlayıcısı yerine gün boyu uygulama başına limit koyan Android engelleyici Limitra App Block.',
      h1: 'Forest alternatifi arıyorsanız',
      answer: 'Limitra App Block ve Forest farklı sorunları çözer: Forest belirli odak seansları sırasında telefondan uzak durmanızı oyunlaştırırken, Limitra gün boyunca belirli uygulamalara günlük süre bütçesi koyar ve bütçe bitince o uygulamayı kilitler. Seans başlatmayı unuttuğunuzda Forest sizi korumaz; Limitra limit kurulduktan sonra sizden bir şey beklemez. Forest çalışma seansları için, Limitra sürekli koruma için uygundur; ikisi birlikte de kullanılabilir.',
      rivalStrengths: ['Ağaç dikme metaforuyla motive edici odak seansları', 'Arkadaşlarla ortak seans', 'iOS ve Android'],
      limitraDiffers: ['Seans değil gün bazlı: uygulama başına günlük limit', 'Siz hatırlamadan da çalışır; limit her gün sıfırlanır', 'Tek seferlik ödeme, internet izni yok', 'Limit dolunca geçilemeyen kilit'],
      keepRival: ['Belirli çalışma seanslarında oyunlaştırılmış motivasyon istiyorsanız', 'Telefonu bütünüyle bırakmak istiyor, uygulama seçmek istemiyorsanız'],
      switchTo: ['Sorun seans dışı saatlerdeki dağınık kullanımsa', 'Belirli uygulamalara (kısa video, sosyal medya) günlük sınır istiyorsanız', 'Hatırlamaya bağlı olmayan bir koruma istiyorsanız']
    }
  },
  en: {
    stayfree: {
      rival: 'StayFree',
      title: 'StayFree alternative: Limitra App Block',
      description: 'Looking for a StayFree alternative on Android without subscriptions, ads or internet permission? How Limitra App Block differs and where it falls short.',
      h1: 'If you are looking for a StayFree alternative',
      answer: 'Limitra App Block is an Android alternative to StayFree that replaces the subscription-and-ads model with a one-time purchase, fully on-device operation with no internet permission, and a lock that cannot be postponed once the daily limit is reached. StayFree is the richer tool for detailed usage statistics, website blocking and multi-device sync; Limitra is for people who want a blocker that does one job, collects nothing and is paid for once.',
      rivalStrengths: ['Detailed daily, weekly and monthly usage charts', 'Website blocking and browser support', 'Sync across Android, iOS, Windows and Chrome', 'Free tier to start'],
      limitraDiffers: ['No subscription; one-time purchase', 'No ads in any version', 'No internet permission at all; data cannot leave the device', 'Lock stays until end of day; no "5 more minutes"', 'Stoic quotes on the lock screen'],
      keepRival: ['You want to analyse screen time statistics in depth', 'You need to block websites too', 'You need sync with an iPhone or a computer', 'You want to start without paying'],
      switchTo: ['You do not want a monthly fee', 'You want the app to never touch the network', 'You want an unbreakable limit, not a report', 'You want a tool with no ads and no account']
    },
    appblock: {
      rival: 'AppBlock',
      title: 'AppBlock alternative: Limitra App Block',
      description: 'Comparison for people looking for a one-time-purchase, offline, strict Android app blocker instead of AppBlock (MobileSoft).',
      h1: 'If you are looking for an AppBlock alternative',
      answer: 'Limitra App Block offers a one-time purchase, no internet permission and a daily time limit per app, in contrast to AppBlock\'s freemium model built around schedules and website blocking. AppBlock is more flexible for people who want many profiles, location or Wi-Fi triggers and web blocking; Limitra is for users who want to say "this app, this many minutes a day" without configuration and pay once. Despite the similar names, the two are independent products.',
      rivalStrengths: ['Blocking profiles triggered by time, location or Wi-Fi', 'Website and notification blocking', 'Android and iOS', 'Free tier to start'],
      limitraDiffers: ['One-time purchase; no premium tier', 'No internet permission; no ads', 'Daily time budget per app on a single screen', 'The lock cannot be postponed once the limit is reached', 'One scheduled protection via an active time window'],
      keepRival: ['You need location- or Wi-Fi-triggered profiles', 'You want to block websites and notifications too', 'You use iOS'],
      switchTo: ['You want a tool with no subscription and no ads', 'You want certainty that the app collects no data', 'You prefer a daily limit to building profiles']
    },
    yourhour: {
      rival: 'YourHour',
      title: 'YourHour alternative: Limitra App Block',
      description: 'For people who want an unbreakable limit rather than statistics: Limitra App Block as a subscription-free, offline Android alternative to YourHour.',
      h1: 'If you are looking for a YourHour alternative',
      answer: 'Limitra App Block focuses on blocking rather than YourHour\'s usage-statistics and "addiction level" reporting: a daily limit per app, a lock until end of day when it runs out, a one-time purchase and no internet permission. YourHour is richer for measuring and reporting phone habits; Limitra is for people who want to stop rather than measure.',
      rivalStrengths: ['Detailed usage reports and addiction-level classification', 'Unlock counts and timeline tracking', 'Free tier to start'],
      limitraDiffers: ['Focus on blocking, not statistics; no snooze when the limit is reached', 'One-time purchase, no ads', 'No internet permission, no account', 'Stoic-quote lock screen and streak system'],
      keepRival: ['You want to measure and report your habit first', 'You want to start with a free tool'],
      switchTo: ['You already know how much you use your phone and want to stop', 'You want a tool with no ads, no subscription and no data collection']
    },
    'digital-wellbeing': {
      rival: 'Digital Wellbeing',
      title: 'Digital Wellbeing alternative: Limitra App Block',
      description: 'Google Digital Wellbeing app timers can be removed with one tap. Limitra App Block for people who need a firmer limit on Android.',
      h1: 'If Digital Wellbeing is not enough',
      answer: `Unlike Android's built-in Digital Wellbeing app timers, Limitra App Block applies a lock that cannot be removed with a tap once the limit is reached: instead of deleting the timer or extending it, the app stays closed until the end of the day and cancelling protection requires holding a button for five uninterrupted minutes. Digital Wellbeing is free and part of the system; Limitra is a one-time purchase (${priceEn} in Türkiye) designed only for people who want their own limit enforced.`,
      rivalStrengths: ['Free and pre-installed on many Android devices', 'Focus mode, Bedtime mode and Chrome site timers', 'System-level usage statistics'],
      limitraDiffers: ['The timer cannot be removed with one tap; the lock lasts until end of day', 'Cancelling protection requires a 5-minute uninterrupted hold', 'Behavioural support through Stoic quotes and streaks', 'Works on devices that do not ship Digital Wellbeing'],
      keepRival: ['A gentle reminder is enough for you', 'You do not want to pay'],
      switchTo: ['You keep removing the timer and carrying on', 'Your device does not ship Digital Wellbeing', 'You do not want to negotiate with yourself in the moment']
    },
    forest: {
      rival: 'Forest',
      title: 'Forest alternative: Limitra App Block',
      description: 'Instead of Forest\'s session-based focus timer, Limitra App Block puts an all-day, per-app limit in place on Android.',
      h1: 'If you are looking for a Forest alternative',
      answer: 'Limitra App Block and Forest solve different problems: Forest gamifies staying off your phone during focus sessions, while Limitra sets a daily time budget for specific apps throughout the day and locks the app when the budget is spent. When you forget to start a session, Forest does not protect you; once a limit is set, Limitra expects nothing from you. Forest suits study sessions, Limitra suits continuous protection, and the two can be used together.',
      rivalStrengths: ['Motivating focus sessions with the tree-planting metaphor', 'Shared sessions with friends', 'iOS and Android'],
      limitraDiffers: ['Day-based, not session-based: a daily limit per app', 'Works without you remembering; limits reset every day', 'One-time purchase, no internet permission', 'Non-dismissable lock when the limit is reached'],
      keepRival: ['You want gamified motivation for specific study sessions', 'You want to put the whole phone down rather than pick apps'],
      switchTo: ['The problem is scattered use outside sessions', 'You want daily caps on specific apps (short video, social media)', 'You want protection that does not depend on remembering']
    }
  }
};

/* ---------- Degisiklik gunlugu ---------- */
export interface ChangelogEntry { version: string; code: number; date: string; items: string[]; }
export const changelog: Record<L, { title: string; description: string; h1: string; answer: string; entries: ChangelogEntry[]; caption: string; cols: string[]; }> = {
  tr: {
    title: 'Değişiklik Günlüğü | Limitra App Block',
    description: `Limitra App Block sürüm geçmişi: her sürümün tarihi, sürüm numarası ve yapılan değişiklikler. Güncel sürüm ${APP_VERSION}.`,
    h1: 'Değişiklik günlüğü',
    answer: `Limitra App Block'un güncel sürümü ${APP_VERSION} (sürüm kodu 18), 5 Eylül 2026'da Google Play'de yayınlandı. Bu sayfa her sürümün tarihini, sürüm kodunu ve kullanıcıya dokunan değişiklikleri listeler; ilk yayın Haziran 2026'dır.`,
    caption: 'Limitra App Block sürüm geçmişi (en yeni en üstte).',
    cols: ['Sürüm', 'Kod', 'Tarih', 'Değişiklikler'],
    entries: [
      { version: '1.2.1', code: 18, date: '2026-09-05', items: ['Limit dolduğunda kilidin bazı cihazlarda tetiklenmemesine yol açan gerileme giderildi.', 'Kilit, uygulamanın gerçekten ön planda olduğu teyit edilerek kurulur.', 'İzleme koptuğunda kullanım süresi 10 saniyelik aralıklarla sistem kullanım verisiyle uzlaştırılır.', 'Mağaza ekran görüntüleri 11 dilde yenilendi; tablet görselleri eklendi.'] },
      { version: '1.2.0', code: 17, date: '2026-09-05', items: ['Türkiye dışındaki saat dilimlerinde zamanlanmış korumanın yanlış çalışmasına neden olan hata düzeltildi.', 'Süre dolduğunda kilit ekranının gelmemesi hatası düzeltildi.', 'Mağaza metinleri 11 dilde güncellendi.'] },
      { version: '1.1.9', code: 16, date: '2026-08-30', items: ['İnternet, ağ durumu ve reklam kimliği izinleri uygulamadan tamamen kaldırıldı; uygulama artık ağa çıkamaz.', 'Reklam bileşenleri ve bağımlılıkları çıkarıldı.', 'Yeni uygulama ikonu.', 'Çevrimdışı gizlilik sözleşmesini doğrulayan otomatik testler eklendi.'] },
      { version: '1.1.8', code: 15, date: '2026-08-25', items: ['Seri (streak) hesaplamasındaki başlangıç hatası düzeltildi.', 'Kilit ekranı yapışkan hale getirildi; ana ekrana dön düğmesi eklendi.', '11 dilde bozulan karakter kodlaması onarıldı.'] },
      { version: '1.1.6', code: 13, date: '2026-08-03', items: ['Koruma mantığı, izin akışları ve arayüz güncellemeleri.', 'Test kapsamı genişletildi.'] },
      { version: '1.0', code: 1, date: '2026-06-07', items: ['İlk Google Play yayını: uygulama başına günlük limit, kilit ekranı, izin sihirbazı ve gizlilik politikası.'] }
    ]
  },
  en: {
    title: 'Changelog | Limitra App Block',
    description: `Limitra App Block release history: date, version code and changes for every release. Current version ${APP_VERSION}.`,
    h1: 'Changelog',
    answer: `The current version of Limitra App Block is ${APP_VERSION} (version code 18), published on Google Play on 5 September 2026. This page lists the date, version code and user-facing changes of every release; the first release was in June 2026.`,
    caption: 'Limitra App Block release history (newest first).',
    cols: ['Version', 'Code', 'Date', 'Changes'],
    entries: [
      { version: '1.2.1', code: 18, date: '2026-09-05', items: ['Fixed a regression that could prevent the lock from triggering on some devices when the limit was reached.', 'The lock is now established only after confirming the app is really in the foreground.', 'When monitoring drops, usage time is reconciled with system usage data every 10 seconds.', 'Store screenshots refreshed in 11 languages; tablet screenshots added.'] },
      { version: '1.2.0', code: 17, date: '2026-09-05', items: ['Fixed scheduled protection misbehaving in time zones outside Türkiye.', 'Fixed the lock screen not appearing when the limit ran out.', 'Store listing updated in 11 languages.'] },
      { version: '1.1.9', code: 16, date: '2026-08-30', items: ['Internet, network state and advertising ID permissions removed entirely; the app can no longer reach the network.', 'Ad components and dependencies removed.', 'New app icon.', 'Automated tests added to verify the offline privacy contract.'] },
      { version: '1.1.8', code: 15, date: '2026-08-25', items: ['Fixed the streak baseline calculation.', 'Lock screen made sticky; "back to home" button added.', 'Repaired broken character encoding in 11 languages.'] },
      { version: '1.1.6', code: 13, date: '2026-08-03', items: ['Protection logic, permission flows and UI updates.', 'Expanded test coverage.'] },
      { version: '1.0', code: 1, date: '2026-06-07', items: ['First Google Play release: daily limit per app, lock screen, permission wizard and privacy policy.'] }
    ]
  }
};

export { STORE_URL };
