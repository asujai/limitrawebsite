import type { SupportedLang } from './translations';

/**
 * Ana sayfa metinleri (11 dil). Limitra Social önde (ücretsiz), Limitra App Block
 * gizlilik odaklı ikinci seçenek. Sitede fiyat rakamı gösterilmez.
 */

export const SOCIAL_STORE_URL = 'https://play.google.com/store/apps/details?id=com.limitra.socialprototype';
export const BLOCK_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gardiyan.app';

type Point = { t: string; d: string };
type Quote = { q: string; a: string };
type CompareRow = { k: string; s: string | boolean; b: string | boolean };

export interface HomeCopy {
  meta: { title: string; desc: string };
  tagline: string;
  hero: { h1a: string; h1b: string; lead: string; cta: string; note: string; alt: string; altLink: string };
  phone: { today: string; limit: string; locked: string; back: string; toast: string; streak: string };
  demo: { title: string; lead: string; hint: string; auto: string; reset: string; remaining: string; after: string };
  social: {
    title: string;
    lead: string;
    points: Point[];
    screenTitle: string;
    screenSub: string;
    on: string;
    near: string;
    over: string;
    min: string;
    days: string;
    best: string;
    idLabel: string;
    names: [string, string, string];
  };
  quotes: { caption: string; items: Quote[] };
  core: { title: string; items: Point[] };
  block: { title: string; lead: string; ledger: string[]; none: string; quote: string; answer: string; cta: string; more: string };
  compare: { title: string; rows: CompareRow[]; yes: string; no: string; ctaS: string; ctaB: string };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  final: { title: string; lead: string; alt: string };
}

export const homeCopy: Record<SupportedLang, HomeCopy> = {
  tr: {
    meta: {
      title: 'Limitra | Uygulama engelleyici ve ekran süresi limiti: Social ve App Block',
      desc: 'Limitra Social ile uygulamalara günlük süre limiti koy, süre dolunca kilitlensin, arkadaşlarınla birlikte takip et. Gizlilik önceliğinse çevrimdışı Limitra App Block. Android için.'
    },
    tagline: 'İki uygulama, tek amaç: zamanını geri almak.',
    hero: {
      h1a: 'Limitini koy.',
      h1b: 'Arkadaşın görsün.',
      lead: 'Limitra Social, seçtiğin uygulamalara günlük süre koyar ve süre dolunca onları kilitler. Arkadaşların hedefte kalıp kalmadığını görür, sen de onlarınkini.',
      cta: 'Google Play’den ücretsiz indir',
      note: 'Android için · 11 dilde',
      alt: 'Hiçbir şey paylaşmak istemiyor musun?',
      altLink: 'Çevrimdışı Limitra App Block'
    },
    phone: {
      today: 'Bugünkü kullanım',
      limit: 'Limit 30 dk',
      locked: 'Bugünlük limitin doldu.',
      back: 'Devam etmek için ana ekrana dön.',
      toast: '{name} bugün hedefte kaldı',
      streak: '12 günlük seri'
    },
    demo: {
      title: 'Kaydırmaya devam et. Ne olacağını gör.',
      lead: 'Bu telefona 15 saniyelik bir limit koyduk. Akışı kaydır; süre bittiğinde Limitra’nın gerçekte ne yaptığını göreceksin.',
      hint: 'Telefonun içinde kaydır',
      auto: 'Benim yerime kaydır',
      reset: 'Baştan başla',
      remaining: 'Kalan süre',
      after: 'Gerçek uygulamada limiti sen belirlersin: uygulama başına, dakika cinsinden.'
    },
    social: {
      title: 'Tek başına zor. Birlikte daha kolay.',
      lead: 'İrade yalnız kalınca yorulur. Limitra Social’da koyduğun sınırı bir arkadaşın da görür; bu küçük görünürlük, sözünde durmayı kolaylaştırır.',
      points: [
        { t: 'ID ile ekle', d: 'Herkesin sekiz haneli bir Limitra ID’si var. Numaranı paylaş, isteği kabul et, o kadar.' },
        { t: 'Neyi paylaşacağını sen seç', d: 'Her limit için ayrı karar verirsin. Arkadaşın yalnızca paylaştığın limitlerin durumunu görür.' },
        { t: 'Seriyi birlikte koruyun', d: 'Hedefte kaldığın her gün serini uzatır. 7 günden 200 güne uzanan profil çerçeveleri kazanırsın.' }
      ],
      screenTitle: 'Arkadaşlar',
      screenSub: 'Birbirinizi yolda tutun',
      on: 'Hedefte',
      near: 'Limite yakın',
      over: 'Limit aşıldı',
      min: 'dk',
      days: 'gün',
      best: 'en uzun seri',
      idLabel: 'Senin ID’n',
      names: ['Deniz', 'Elif', 'Mert']
    },
    quotes: {
      caption: 'Süre dolduğunda karşına bir hata ekranı değil, durup düşündüren bir söz çıkar.',
      items: [
        { q: 'Her şey başkasınındır; yalnızca zaman bizimdir.', a: 'Seneca' },
        { q: 'Yaşamak için kısa bir zamanımız yok; onun çoğunu boşa harcıyoruz.', a: 'Seneca' },
        { q: 'Kendine hâkim olmayan hiç kimse özgür değildir.', a: 'Epiktetos' }
      ]
    },
    core: {
      title: 'İki uygulamada da aynı çekirdek',
      items: [
        { t: 'Tavizsiz kilit', d: 'Süre dolunca uygulamanın üstüne kilit ekranı gelir.' },
        { t: 'Stoacı kilit ekranı', d: 'Dürtüyle açtığın anda seni tek bir sözle durdurur.' },
        { t: 'Seri ve seviyeler', d: 'Hedefte kaldığın günler birikir, seviye atlarsın.' },
        { t: 'Cihaz içi istatistik', d: 'Kullanım süren telefonunda hesaplanır.' }
      ]
    },
    block: {
      title: 'Kimseyle paylaşmak istemiyorsan.',
      lead: 'Limitra App Block aynı kilidi tamamen çevrimdışı kurar. Hesap açmazsın, internet izni vermezsin; kuralların ve istatistiklerin telefonundan hiç çıkmaz.',
      ledger: ['İnternet izni', 'Hesap', 'Sunucu', 'Reklam', 'Abonelik'],
      none: 'Yok',
      quote: '“Sadece beş dakika daha.”',
      answer: 'Bugün olmaz.',
      cta: 'App Block’u Google Play’de gör',
      more: 'Nasıl çalıştığını oku'
    },
    compare: {
      title: 'Hangisi sana göre?',
      rows: [
        { k: 'En uygun olduğu kişi', s: 'Arkadaşıyla birlikte sınır koymak isteyen', b: 'Hiçbir veriyi paylaşmak istemeyen' },
        { k: 'Günlük limit ve kilit', s: true, b: true },
        { k: 'Stoacı kilit ekranı', s: true, b: true },
        { k: 'Seri ve seviyeler', s: true, b: true },
        { k: 'Arkadaşlarla paylaşım', s: true, b: false },
        { k: 'Hesap', s: 'Google veya e-posta', b: 'Gerekmez' },
        { k: 'İnternet', s: 'Yalnız arkadaş özellikleri için', b: 'Hiç kullanmaz' },
        { k: 'Başlangıç', s: 'Ücretsiz', b: 'Tek seferlik satın alım' }
      ],
      yes: 'Var',
      no: 'Yok',
      ctaS: 'Social’ı indir',
      ctaB: 'App Block’u gör'
    },
    faq: {
      title: 'Sık sorulanlar',
      items: [
        { q: 'Limitra Social ile Limitra App Block’un farkı ne?', a: 'İkisi de seçtiğin uygulamalara günlük süre koyar ve süre dolunca kilitler. Social buna arkadaşlarla paylaşımı ekler ve hesap ister. App Block hesapsız ve tamamen çevrimdışı çalışır.' },
        { q: 'Erişilebilirlik izni neden gerekiyor?', a: 'Hangi uygulamanın açıldığını anlamak ve limit dolduğunda kilit ekranını göstermek için. Mesajların, şifrelerin ve ekran içeriğin okunmaz, kaydedilmez, gönderilmez.' },
        { q: 'Arkadaşlarım neyi görebilir?', a: 'Yalnızca paylaşmayı seçtiğin limitleri ve durumlarını: hedefte, limite yakın ya da aşıldı. Kullanım istatistiklerin telefonunda saklanır.' },
        { q: 'iPhone’da çalışıyor mu?', a: 'Şimdilik hayır. İki uygulama da Android için geliştirildi ve Google Play’de.' }
      ]
    },
    final: {
      title: 'Bugün, zamanını geri al.',
      lead: 'Limitra Social ile ücretsiz başla, bir arkadaşını da çağır.',
      alt: 'Tek başına ve çevrimdışı mı? Limitra App Block'
    }
  },

  en: {
    meta: {
      title: 'Limitra | App Blocker & Screen Time Limits: Social and App Block',
      desc: 'Put daily time limits on apps with Limitra Social, have them lock when time runs out, and keep each other on track with friends. Privacy first? Try offline Limitra App Block. For Android.'
    },
    tagline: 'Two apps, one goal: giving you your time back.',
    hero: {
      h1a: 'Set your limit.',
      h1b: 'Let a friend see it.',
      lead: 'Limitra Social puts a daily time limit on the apps you choose and locks them when time runs out. Your friends see whether you stayed on target, and you see theirs.',
      cta: 'Get it free on Google Play',
      note: 'For Android · in 11 languages',
      alt: 'Rather share nothing?',
      altLink: 'Offline Limitra App Block'
    },
    phone: {
      today: 'Used today',
      limit: 'Limit 30 min',
      locked: 'You’ve reached today’s limit.',
      back: 'Go back to the home screen to continue.',
      toast: '{name} stayed on target today',
      streak: '12-day streak'
    },
    demo: {
      title: 'Keep scrolling. See what happens.',
      lead: 'We gave this phone a 15-second limit. Scroll the feed; when time runs out you’ll see what Limitra actually does.',
      hint: 'Scroll inside the phone',
      auto: 'Scroll for me',
      reset: 'Start over',
      remaining: 'Time left',
      after: 'In the real app you choose the limit: per app, in minutes.'
    },
    social: {
      title: 'Hard alone. Easier together.',
      lead: 'Willpower gets tired when it’s on its own. In Limitra Social a friend sees the limit you set, and that small bit of visibility makes it easier to keep your word.',
      points: [
        { t: 'Add by ID', d: 'Everyone gets an eight-digit Limitra ID. Share yours, accept the request, done.' },
        { t: 'You choose what to share', d: 'You decide for each limit. Friends only see the status of the limits you share.' },
        { t: 'Guard the streak together', d: 'Every day on target extends your streak, and you earn profile frames from 7 to 200 days.' }
      ],
      screenTitle: 'Friends',
      screenSub: 'Keep each other on track',
      on: 'On target',
      near: 'Near limit',
      over: 'Limit exceeded',
      min: 'min',
      days: 'days',
      best: 'best streak',
      idLabel: 'Your ID',
      names: ['Sarah', 'Daniel', 'Emma']
    },
    quotes: {
      caption: 'When time runs out you don’t get an error screen. You get a line worth stopping for.',
      items: [
        { q: 'Everything else belongs to others; time alone is ours.', a: 'Seneca' },
        { q: 'It is not that we have a short time to live, but that we waste a lot of it.', a: 'Seneca' },
        { q: 'No man is free who is not master of himself.', a: 'Epictetus' }
      ]
    },
    core: {
      title: 'The same core in both apps',
      items: [
        { t: 'A lock that holds', d: 'When time is up, a lock screen covers the app.' },
        { t: 'Stoic lock screen', d: 'Stops the impulse-open with a single line.' },
        { t: 'Streaks and levels', d: 'Days on target add up and you level up.' },
        { t: 'On-device stats', d: 'Your usage is calculated on your phone.' }
      ]
    },
    block: {
      title: 'If you’d rather share with no one.',
      lead: 'Limitra App Block builds the same lock completely offline. No account, no internet permission; your rules and stats never leave your phone.',
      ledger: ['Internet permission', 'Account', 'Servers', 'Ads', 'Subscription'],
      none: 'None',
      quote: '“Just five more minutes.”',
      answer: 'Not today.',
      cta: 'See App Block on Google Play',
      more: 'Read how it works'
    },
    compare: {
      title: 'Which one is for you?',
      rows: [
        { k: 'Best for', s: 'People who want to set limits with a friend', b: 'People who want to share no data at all' },
        { k: 'Daily limits and lock', s: true, b: true },
        { k: 'Stoic lock screen', s: true, b: true },
        { k: 'Streaks and levels', s: true, b: true },
        { k: 'Sharing with friends', s: true, b: false },
        { k: 'Account', s: 'Google or email', b: 'Not needed' },
        { k: 'Internet', s: 'Only for friend features', b: 'Never used' },
        { k: 'To start', s: 'Free', b: 'One-time purchase' }
      ],
      yes: 'Yes',
      no: 'No',
      ctaS: 'Get Social',
      ctaB: 'See App Block'
    },
    faq: {
      title: 'Common questions',
      items: [
        { q: 'What’s the difference between Limitra Social and Limitra App Block?', a: 'Both put daily time limits on the apps you choose and lock them when time runs out. Social adds sharing with friends and requires an account. App Block works without an account and fully offline.' },
        { q: 'Why does it need the Accessibility permission?', a: 'To detect which app is opened and show the lock screen when the limit is reached. Your messages, passwords and screen content are never read, stored or sent.' },
        { q: 'What can my friends see?', a: 'Only the limits you choose to share and their status: on target, near limit or exceeded. Your usage stats are stored on your phone.' },
        { q: 'Does it work on iPhone?', a: 'Not yet. Both apps are built for Android and available on Google Play.' }
      ]
    },
    final: {
      title: 'Take your time back, starting today.',
      lead: 'Start free with Limitra Social, and bring a friend.',
      alt: 'On your own and offline? Limitra App Block'
    }
  },

  es: {
    meta: {
      title: 'Limitra | Bloqueador de apps y límites de tiempo de pantalla: Social y App Block',
      desc: 'Pon límites diarios a tus apps con Limitra Social: se bloquean cuando se acaba el tiempo y tus amigos te ayudan a cumplir. ¿Priorizas la privacidad? Limitra App Block funciona sin conexión. Para Android.'
    },
    tagline: 'Dos apps, un objetivo: devolverte tu tiempo.',
    hero: {
      h1a: 'Pon tu límite.',
      h1b: 'Que un amigo lo vea.',
      lead: 'Limitra Social pone un límite diario a las apps que elijas y las bloquea cuando se acaba el tiempo. Tus amigos ven si cumpliste tu objetivo, y tú ves el suyo.',
      cta: 'Descárgala gratis en Google Play',
      note: 'Para Android · en 11 idiomas',
      alt: '¿Prefieres no compartir nada?',
      altLink: 'Limitra App Block, sin conexión'
    },
    phone: {
      today: 'Uso de hoy',
      limit: 'Límite 30 min',
      locked: 'Has alcanzado el límite de hoy.',
      back: 'Vuelve a la pantalla de inicio para continuar.',
      toast: '{name} cumplió su objetivo hoy',
      streak: 'Racha de 12 días'
    },
    demo: {
      title: 'Sigue deslizando. Mira lo que pasa.',
      lead: 'Le pusimos a este teléfono un límite de 15 segundos. Desliza el feed; cuando se acabe el tiempo verás lo que Limitra hace de verdad.',
      hint: 'Desliza dentro del teléfono',
      auto: 'Desliza por mí',
      reset: 'Empezar de nuevo',
      remaining: 'Tiempo restante',
      after: 'En la app real eliges tú el límite: por app, en minutos.'
    },
    social: {
      title: 'Solo es difícil. Juntos es más fácil.',
      lead: 'La fuerza de voluntad se cansa cuando está sola. En Limitra Social un amigo ve el límite que pusiste, y esa pequeña visibilidad hace más fácil cumplir tu palabra.',
      points: [
        { t: 'Añade por ID', d: 'Cada persona tiene un Limitra ID de ocho dígitos. Comparte el tuyo, acepta la solicitud y listo.' },
        { t: 'Tú eliges qué compartir', d: 'Decides para cada límite. Tus amigos solo ven el estado de los límites que compartes.' },
        { t: 'Cuidad la racha juntos', d: 'Cada día en tu objetivo alarga tu racha y ganas marcos de perfil de 7 a 200 días.' }
      ],
      screenTitle: 'Amigos',
      screenSub: 'Ayudaos a seguir el rumbo',
      on: 'En objetivo',
      near: 'Cerca del límite',
      over: 'Límite superado',
      min: 'min',
      days: 'días',
      best: 'mejor racha',
      idLabel: 'Tu ID',
      names: ['Lucía', 'Mateo', 'Sofía']
    },
    quotes: {
      caption: 'Cuando se acaba el tiempo no ves una pantalla de error, sino una frase que vale la pena.',
      items: [
        { q: 'Todo lo demás es ajeno; solo el tiempo es nuestro.', a: 'Séneca' },
        { q: 'No es que tengamos poco tiempo, sino que perdemos mucho.', a: 'Séneca' },
        { q: 'Nadie es libre si no es dueño de sí mismo.', a: 'Epicteto' }
      ]
    },
    core: {
      title: 'El mismo núcleo en ambas apps',
      items: [
        { t: 'Un bloqueo que aguanta', d: 'Cuando se acaba el tiempo, una pantalla de bloqueo cubre la app.' },
        { t: 'Pantalla estoica', d: 'Frena el impulso de abrir la app con una sola frase.' },
        { t: 'Rachas y niveles', d: 'Los días en tu objetivo se acumulan y subes de nivel.' },
        { t: 'Estadísticas en el dispositivo', d: 'Tu uso se calcula en tu teléfono.' }
      ]
    },
    block: {
      title: 'Si prefieres no compartir con nadie.',
      lead: 'Limitra App Block crea el mismo bloqueo totalmente sin conexión. Sin cuenta ni permiso de internet; tus reglas y estadísticas nunca salen de tu teléfono.',
      ledger: ['Permiso de internet', 'Cuenta', 'Servidores', 'Anuncios', 'Suscripción'],
      none: 'No',
      quote: '“Solo cinco minutos más.”',
      answer: 'Hoy no.',
      cta: 'Ver App Block en Google Play',
      more: 'Lee cómo funciona'
    },
    compare: {
      title: '¿Cuál es para ti?',
      rows: [
        { k: 'Ideal para', s: 'Quien quiere poner límites con un amigo', b: 'Quien no quiere compartir ningún dato' },
        { k: 'Límites diarios y bloqueo', s: true, b: true },
        { k: 'Pantalla de bloqueo estoica', s: true, b: true },
        { k: 'Rachas y niveles', s: true, b: true },
        { k: 'Compartir con amigos', s: true, b: false },
        { k: 'Cuenta', s: 'Google o correo', b: 'No hace falta' },
        { k: 'Internet', s: 'Solo para funciones de amigos', b: 'Nunca se usa' },
        { k: 'Para empezar', s: 'Gratis', b: 'Compra única' }
      ],
      yes: 'Sí',
      no: 'No',
      ctaS: 'Descargar Social',
      ctaB: 'Ver App Block'
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Qué diferencia hay entre Limitra Social y Limitra App Block?', a: 'Ambas ponen límites diarios a las apps que elijas y las bloquean cuando se acaba el tiempo. Social añade compartir con amigos y requiere una cuenta. App Block funciona sin cuenta y totalmente sin conexión.' },
        { q: '¿Por qué necesita el permiso de Accesibilidad?', a: 'Para detectar qué app se abre y mostrar la pantalla de bloqueo al llegar al límite. Tus mensajes, contraseñas y el contenido de la pantalla nunca se leen, guardan ni envían.' },
        { q: '¿Qué pueden ver mis amigos?', a: 'Solo los límites que decidas compartir y su estado: en objetivo, cerca del límite o superado. Tus estadísticas de uso se guardan en tu teléfono.' },
        { q: '¿Funciona en iPhone?', a: 'Todavía no. Ambas apps están hechas para Android y disponibles en Google Play.' }
      ]
    },
    final: {
      title: 'Recupera tu tiempo, desde hoy.',
      lead: 'Empieza gratis con Limitra Social y trae a un amigo.',
      alt: '¿Solo y sin conexión? Limitra App Block'
    }
  },

  fr: {
    meta: {
      title: 'Limitra | Bloqueur d’applis et limites de temps d’écran : Social et App Block',
      desc: 'Fixez des limites quotidiennes à vos applis avec Limitra Social : elles se verrouillent quand le temps est écoulé, et vos amis vous aident à tenir. La confidentialité avant tout ? Limitra App Block fonctionne hors ligne. Pour Android.'
    },
    tagline: 'Deux applis, un seul but : vous rendre votre temps.',
    hero: {
      h1a: 'Fixez votre limite.',
      h1b: 'Qu’un ami la voie.',
      lead: 'Limitra Social fixe une limite quotidienne aux applis de votre choix et les verrouille quand le temps est écoulé. Vos amis voient si vous avez tenu votre objectif, et vous voyez le leur.',
      cta: 'Téléchargez-la gratuitement sur Google Play',
      note: 'Pour Android · en 11 langues',
      alt: 'Vous préférez ne rien partager ?',
      altLink: 'Limitra App Block, hors ligne'
    },
    phone: {
      today: 'Utilisé aujourd’hui',
      limit: 'Limite 30 min',
      locked: 'Vous avez atteint la limite du jour.',
      back: 'Revenez à l’écran d’accueil pour continuer.',
      toast: '{name} a tenu son objectif aujourd’hui',
      streak: 'Série de 12 jours'
    },
    demo: {
      title: 'Continuez à faire défiler. Vous verrez.',
      lead: 'Nous avons donné à ce téléphone une limite de 15 secondes. Faites défiler le fil ; quand le temps est écoulé, vous verrez ce que fait vraiment Limitra.',
      hint: 'Faites défiler dans le téléphone',
      auto: 'Défiler pour moi',
      reset: 'Recommencer',
      remaining: 'Temps restant',
      after: 'Dans la vraie appli, c’est vous qui choisissez la limite : par appli, en minutes.'
    },
    social: {
      title: 'Seul, c’est dur. À deux, c’est plus simple.',
      lead: 'La volonté s’épuise quand elle est seule. Dans Limitra Social, un ami voit la limite que vous avez fixée, et cette petite visibilité aide à tenir parole.',
      points: [
        { t: 'Ajout par ID', d: 'Chacun a un Limitra ID à huit chiffres. Partagez le vôtre, acceptez la demande, c’est tout.' },
        { t: 'Vous choisissez quoi partager', d: 'Vous décidez pour chaque limite. Vos amis ne voient que l’état des limites partagées.' },
        { t: 'Protégez la série ensemble', d: 'Chaque jour dans l’objectif prolonge votre série, et vous gagnez des cadres de profil de 7 à 200 jours.' }
      ],
      screenTitle: 'Amis',
      screenSub: 'Gardez le cap ensemble',
      on: 'Dans l’objectif',
      near: 'Limite proche',
      over: 'Limite dépassée',
      min: 'min',
      days: 'jours',
      best: 'meilleure série',
      idLabel: 'Votre ID',
      names: ['Léa', 'Hugo', 'Chloé']
    },
    quotes: {
      caption: 'Quand le temps est écoulé, pas d’écran d’erreur : une phrase qui vaut la pause.',
      items: [
        { q: 'Tout le reste appartient à autrui ; seul le temps est à nous.', a: 'Sénèque' },
        { q: 'Ce n’est pas que nous ayons peu de temps, c’est que nous en perdons beaucoup.', a: 'Sénèque' },
        { q: 'Nul n’est libre s’il n’est maître de lui-même.', a: 'Épictète' }
      ]
    },
    core: {
      title: 'Le même cœur dans les deux applis',
      items: [
        { t: 'Un verrou qui tient', d: 'Le temps écoulé, un écran de verrouillage recouvre l’appli.' },
        { t: 'Écran stoïcien', d: 'Coupe l’ouverture impulsive avec une seule phrase.' },
        { t: 'Séries et niveaux', d: 'Les jours dans l’objectif s’additionnent et vous montez de niveau.' },
        { t: 'Statistiques sur l’appareil', d: 'Votre usage est calculé sur votre téléphone.' }
      ]
    },
    block: {
      title: 'Si vous préférez ne rien partager.',
      lead: 'Limitra App Block crée le même verrou entièrement hors ligne. Pas de compte, pas d’autorisation internet ; vos règles et statistiques ne quittent jamais votre téléphone.',
      ledger: ['Autorisation internet', 'Compte', 'Serveurs', 'Publicités', 'Abonnement'],
      none: 'Non',
      quote: '« Juste cinq minutes de plus. »',
      answer: 'Pas aujourd’hui.',
      cta: 'Voir App Block sur Google Play',
      more: 'Comprendre le fonctionnement'
    },
    compare: {
      title: 'Laquelle est faite pour vous ?',
      rows: [
        { k: 'Idéale pour', s: 'Ceux qui veulent se fixer des limites avec un ami', b: 'Ceux qui ne veulent partager aucune donnée' },
        { k: 'Limites quotidiennes et verrou', s: true, b: true },
        { k: 'Écran de verrouillage stoïcien', s: true, b: true },
        { k: 'Séries et niveaux', s: true, b: true },
        { k: 'Partage avec des amis', s: true, b: false },
        { k: 'Compte', s: 'Google ou e-mail', b: 'Inutile' },
        { k: 'Internet', s: 'Seulement pour les fonctions entre amis', b: 'Jamais utilisé' },
        { k: 'Pour commencer', s: 'Gratuit', b: 'Achat unique' }
      ],
      yes: 'Oui',
      no: 'Non',
      ctaS: 'Télécharger Social',
      ctaB: 'Voir App Block'
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Quelle différence entre Limitra Social et Limitra App Block ?', a: 'Les deux fixent des limites quotidiennes aux applis choisies et les verrouillent quand le temps est écoulé. Social ajoute le partage entre amis et nécessite un compte. App Block fonctionne sans compte et entièrement hors ligne.' },
        { q: 'Pourquoi l’autorisation d’accessibilité ?', a: 'Pour détecter quelle appli s’ouvre et afficher l’écran de verrouillage quand la limite est atteinte. Vos messages, mots de passe et contenus d’écran ne sont jamais lus, stockés ni envoyés.' },
        { q: 'Que voient mes amis ?', a: 'Uniquement les limites que vous choisissez de partager et leur état : dans l’objectif, limite proche ou dépassée. Vos statistiques d’usage restent sur votre téléphone.' },
        { q: 'Est-ce que ça marche sur iPhone ?', a: 'Pas encore. Les deux applis sont conçues pour Android et disponibles sur Google Play.' }
      ]
    },
    final: {
      title: 'Reprenez votre temps, dès aujourd’hui.',
      lead: 'Commencez gratuitement avec Limitra Social, et invitez un ami.',
      alt: 'Seul et hors ligne ? Limitra App Block'
    }
  },

  de: {
    meta: {
      title: 'Limitra | App-Blocker und Bildschirmzeit-Limits: Social und App Block',
      desc: 'Setze mit Limitra Social tägliche Zeitlimits für Apps: Sie sperren sich, wenn die Zeit um ist, und Freunde helfen dir dranzubleiben. Privatsphäre zuerst? Limitra App Block funktioniert komplett offline. Für Android.'
    },
    tagline: 'Zwei Apps, ein Ziel: dir deine Zeit zurückgeben.',
    hero: {
      h1a: 'Setz dein Limit.',
      h1b: 'Lass Freunde es sehen.',
      lead: 'Limitra Social setzt den Apps deiner Wahl ein tägliches Zeitlimit und sperrt sie, wenn die Zeit abgelaufen ist. Deine Freunde sehen, ob du im Ziel geblieben bist, und du siehst es bei ihnen.',
      cta: 'Kostenlos bei Google Play laden',
      note: 'Für Android · in 11 Sprachen',
      alt: 'Lieber gar nichts teilen?',
      altLink: 'Limitra App Block, offline'
    },
    phone: {
      today: 'Heute genutzt',
      limit: 'Limit 30 Min.',
      locked: 'Dein Tageslimit ist erreicht.',
      back: 'Kehre zum Startbildschirm zurück, um fortzufahren.',
      toast: '{name} ist heute im Ziel geblieben',
      streak: '12-Tage-Serie'
    },
    demo: {
      title: 'Scroll weiter. Schau, was passiert.',
      lead: 'Wir haben diesem Handy ein Limit von 15 Sekunden gegeben. Scroll durch den Feed; wenn die Zeit abläuft, siehst du, was Limitra wirklich tut.',
      hint: 'Im Handy scrollen',
      auto: 'Für mich scrollen',
      reset: 'Neu starten',
      remaining: 'Restzeit',
      after: 'In der echten App wählst du das Limit selbst: pro App, in Minuten.'
    },
    social: {
      title: 'Allein ist es schwer. Zusammen leichter.',
      lead: 'Willenskraft ermüdet, wenn sie allein ist. In Limitra Social sieht ein Freund das Limit, das du gesetzt hast, und diese kleine Sichtbarkeit macht es leichter, Wort zu halten.',
      points: [
        { t: 'Per ID hinzufügen', d: 'Jede Person hat eine achtstellige Limitra-ID. Teile deine, nimm die Anfrage an, fertig.' },
        { t: 'Du entscheidest, was du teilst', d: 'Für jedes Limit einzeln. Freunde sehen nur den Status der Limits, die du teilst.' },
        { t: 'Die Serie gemeinsam schützen', d: 'Jeder Tag im Ziel verlängert deine Serie, und du verdienst Profilrahmen von 7 bis 200 Tagen.' }
      ],
      screenTitle: 'Freunde',
      screenSub: 'Haltet euch gegenseitig auf Kurs',
      on: 'Im Ziel',
      near: 'Fast am Limit',
      over: 'Limit überschritten',
      min: 'Min.',
      days: 'Tage',
      best: 'beste Serie',
      idLabel: 'Deine ID',
      names: ['Lena', 'Jonas', 'Mia']
    },
    quotes: {
      caption: 'Wenn die Zeit um ist, kommt kein Fehlerbildschirm, sondern ein Satz, der innehalten lässt.',
      items: [
        { q: 'Alles andere gehört anderen; nur die Zeit ist unser.', a: 'Seneca' },
        { q: 'Wir haben nicht zu wenig Zeit, sondern wir verschwenden zu viel davon.', a: 'Seneca' },
        { q: 'Niemand ist frei, der nicht Herr über sich selbst ist.', a: 'Epiktet' }
      ]
    },
    core: {
      title: 'Derselbe Kern in beiden Apps',
      items: [
        { t: 'Eine Sperre, die hält', d: 'Ist die Zeit um, legt sich ein Sperrbildschirm über die App.' },
        { t: 'Stoischer Sperrbildschirm', d: 'Stoppt das impulsive Öffnen mit einem einzigen Satz.' },
        { t: 'Serien und Level', d: 'Tage im Ziel summieren sich, und du steigst auf.' },
        { t: 'Statistik auf dem Gerät', d: 'Deine Nutzung wird auf deinem Handy berechnet.' }
      ]
    },
    block: {
      title: 'Wenn du mit niemandem teilen willst.',
      lead: 'Limitra App Block baut dieselbe Sperre komplett offline. Kein Konto, keine Internetberechtigung; deine Regeln und Statistiken verlassen nie dein Handy.',
      ledger: ['Internetberechtigung', 'Konto', 'Server', 'Werbung', 'Abo'],
      none: 'Nein',
      quote: '„Nur noch fünf Minuten.“',
      answer: 'Heute nicht.',
      cta: 'App Block bei Google Play ansehen',
      more: 'So funktioniert es'
    },
    compare: {
      title: 'Welche passt zu dir?',
      rows: [
        { k: 'Ideal für', s: 'Alle, die mit Freunden Limits setzen wollen', b: 'Alle, die keinerlei Daten teilen wollen' },
        { k: 'Tageslimits und Sperre', s: true, b: true },
        { k: 'Stoischer Sperrbildschirm', s: true, b: true },
        { k: 'Serien und Level', s: true, b: true },
        { k: 'Teilen mit Freunden', s: true, b: false },
        { k: 'Konto', s: 'Google oder E-Mail', b: 'Nicht nötig' },
        { k: 'Internet', s: 'Nur für Freunde-Funktionen', b: 'Wird nie genutzt' },
        { k: 'Zum Start', s: 'Kostenlos', b: 'Einmalkauf' }
      ],
      yes: 'Ja',
      no: 'Nein',
      ctaS: 'Social laden',
      ctaB: 'App Block ansehen'
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { q: 'Was ist der Unterschied zwischen Limitra Social und Limitra App Block?', a: 'Beide setzen den gewählten Apps tägliche Zeitlimits und sperren sie, wenn die Zeit abläuft. Social ergänzt das Teilen mit Freunden und braucht ein Konto. App Block funktioniert ohne Konto und komplett offline.' },
        { q: 'Warum braucht die App die Bedienungshilfen-Berechtigung?', a: 'Um zu erkennen, welche App geöffnet wird, und beim Erreichen des Limits den Sperrbildschirm zu zeigen. Nachrichten, Passwörter und Bildschirminhalte werden nie gelesen, gespeichert oder gesendet.' },
        { q: 'Was können meine Freunde sehen?', a: 'Nur die Limits, die du teilen möchtest, und ihren Status: im Ziel, fast am Limit oder überschritten. Deine Nutzungsstatistiken bleiben auf deinem Handy.' },
        { q: 'Funktioniert es auf dem iPhone?', a: 'Noch nicht. Beide Apps sind für Android gebaut und bei Google Play erhältlich.' }
      ]
    },
    final: {
      title: 'Hol dir deine Zeit zurück – ab heute.',
      lead: 'Starte kostenlos mit Limitra Social und lade einen Freund ein.',
      alt: 'Allein und offline? Limitra App Block'
    }
  },

  pt: {
    meta: {
      title: 'Limitra | Bloqueador de apps e limites de tempo de tela: Social e App Block',
      desc: 'Defina limites diários para seus apps com o Limitra Social: eles bloqueiam quando o tempo acaba e seus amigos ajudam você a cumprir. Privacidade em primeiro lugar? O Limitra App Block funciona offline. Para Android.'
    },
    tagline: 'Dois apps, um objetivo: devolver o seu tempo.',
    hero: {
      h1a: 'Defina seu limite.',
      h1b: 'Deixe um amigo ver.',
      lead: 'O Limitra Social coloca um limite diário nos apps que você escolher e os bloqueia quando o tempo acaba. Seus amigos veem se você ficou na meta, e você vê a deles.',
      cta: 'Baixe grátis no Google Play',
      note: 'Para Android · em 11 idiomas',
      alt: 'Prefere não compartilhar nada?',
      altLink: 'Limitra App Block, offline'
    },
    phone: {
      today: 'Uso de hoje',
      limit: 'Limite 30 min',
      locked: 'Você atingiu o limite de hoje.',
      back: 'Volte à tela inicial para continuar.',
      toast: '{name} ficou na meta hoje',
      streak: 'Sequência de 12 dias'
    },
    demo: {
      title: 'Continue rolando. Veja o que acontece.',
      lead: 'Demos a este celular um limite de 15 segundos. Role o feed; quando o tempo acabar, você verá o que o Limitra faz de verdade.',
      hint: 'Role dentro do celular',
      auto: 'Role por mim',
      reset: 'Recomeçar',
      remaining: 'Tempo restante',
      after: 'No app real, você escolhe o limite: por app, em minutos.'
    },
    social: {
      title: 'Sozinho é difícil. Juntos é mais fácil.',
      lead: 'A força de vontade cansa quando está sozinha. No Limitra Social, um amigo vê o limite que você definiu, e essa pequena visibilidade facilita cumprir sua palavra.',
      points: [
        { t: 'Adicione pelo ID', d: 'Todo mundo tem um Limitra ID de oito dígitos. Compartilhe o seu, aceite o pedido e pronto.' },
        { t: 'Você escolhe o que compartilhar', d: 'A decisão é por limite. Seus amigos só veem o status dos limites que você compartilha.' },
        { t: 'Protejam a sequência juntos', d: 'Cada dia na meta aumenta sua sequência, e você ganha molduras de perfil de 7 a 200 dias.' }
      ],
      screenTitle: 'Amigos',
      screenSub: 'Mantenham-se no caminho',
      on: 'Na meta',
      near: 'Perto do limite',
      over: 'Limite excedido',
      min: 'min',
      days: 'dias',
      best: 'melhor sequência',
      idLabel: 'Seu ID',
      names: ['Ana', 'Pedro', 'Beatriz']
    },
    quotes: {
      caption: 'Quando o tempo acaba, você não vê uma tela de erro, e sim uma frase que vale a pausa.',
      items: [
        { q: 'Todo o resto pertence aos outros; só o tempo é nosso.', a: 'Sêneca' },
        { q: 'Não é que tenhamos pouco tempo, é que desperdiçamos muito.', a: 'Sêneca' },
        { q: 'Ninguém é livre se não for senhor de si mesmo.', a: 'Epicteto' }
      ]
    },
    core: {
      title: 'O mesmo núcleo nos dois apps',
      items: [
        { t: 'Um bloqueio que segura', d: 'Quando o tempo acaba, uma tela de bloqueio cobre o app.' },
        { t: 'Tela de bloqueio estoica', d: 'Interrompe a abertura por impulso com uma única frase.' },
        { t: 'Sequências e níveis', d: 'Os dias na meta se somam e você sobe de nível.' },
        { t: 'Estatísticas no aparelho', d: 'Seu uso é calculado no seu celular.' }
      ]
    },
    block: {
      title: 'Se você prefere não compartilhar com ninguém.',
      lead: 'O Limitra App Block cria o mesmo bloqueio totalmente offline. Sem conta, sem permissão de internet; suas regras e estatísticas nunca saem do seu celular.',
      ledger: ['Permissão de internet', 'Conta', 'Servidores', 'Anúncios', 'Assinatura'],
      none: 'Não',
      quote: '“Só mais cinco minutos.”',
      answer: 'Hoje não.',
      cta: 'Ver o App Block no Google Play',
      more: 'Veja como funciona'
    },
    compare: {
      title: 'Qual é para você?',
      rows: [
        { k: 'Ideal para', s: 'Quem quer definir limites com um amigo', b: 'Quem não quer compartilhar nenhum dado' },
        { k: 'Limites diários e bloqueio', s: true, b: true },
        { k: 'Tela de bloqueio estoica', s: true, b: true },
        { k: 'Sequências e níveis', s: true, b: true },
        { k: 'Compartilhar com amigos', s: true, b: false },
        { k: 'Conta', s: 'Google ou e-mail', b: 'Não precisa' },
        { k: 'Internet', s: 'Só para recursos com amigos', b: 'Nunca usa' },
        { k: 'Para começar', s: 'Grátis', b: 'Compra única' }
      ],
      yes: 'Sim',
      no: 'Não',
      ctaS: 'Baixar o Social',
      ctaB: 'Ver o App Block'
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'Qual a diferença entre o Limitra Social e o Limitra App Block?', a: 'Os dois colocam limites diários nos apps escolhidos e os bloqueiam quando o tempo acaba. O Social adiciona o compartilhamento com amigos e exige uma conta. O App Block funciona sem conta e totalmente offline.' },
        { q: 'Por que ele precisa da permissão de Acessibilidade?', a: 'Para detectar qual app foi aberto e mostrar a tela de bloqueio quando o limite é atingido. Suas mensagens, senhas e o conteúdo da tela nunca são lidos, armazenados ou enviados.' },
        { q: 'O que meus amigos podem ver?', a: 'Só os limites que você escolher compartilhar e o status deles: na meta, perto do limite ou excedido. Suas estatísticas de uso ficam no seu celular.' },
        { q: 'Funciona no iPhone?', a: 'Ainda não. Os dois apps são feitos para Android e estão no Google Play.' }
      ]
    },
    final: {
      title: 'Recupere seu tempo, a partir de hoje.',
      lead: 'Comece grátis com o Limitra Social e chame um amigo.',
      alt: 'Sozinho e offline? Limitra App Block'
    }
  },

  it: {
    meta: {
      title: 'Limitra | Blocco app e limiti di tempo schermo: Social e App Block',
      desc: 'Imposta limiti giornalieri alle app con Limitra Social: si bloccano quando il tempo finisce e i tuoi amici ti aiutano a rispettarli. Prima la privacy? Limitra App Block funziona offline. Per Android.'
    },
    tagline: 'Due app, un solo obiettivo: restituirti il tuo tempo.',
    hero: {
      h1a: 'Imposta il tuo limite.',
      h1b: 'Fallo vedere a un amico.',
      lead: 'Limitra Social imposta un limite giornaliero alle app che scegli e le blocca quando il tempo finisce. I tuoi amici vedono se hai rispettato l’obiettivo, e tu vedi il loro.',
      cta: 'Scaricala gratis su Google Play',
      note: 'Per Android · in 11 lingue',
      alt: 'Preferisci non condividere nulla?',
      altLink: 'Limitra App Block, offline'
    },
    phone: {
      today: 'Utilizzo di oggi',
      limit: 'Limite 30 min',
      locked: 'Hai raggiunto il limite di oggi.',
      back: 'Torna alla schermata Home per continuare.',
      toast: '{name} ha rispettato l’obiettivo oggi',
      streak: 'Serie di 12 giorni'
    },
    demo: {
      title: 'Continua a scorrere. Guarda cosa succede.',
      lead: 'Abbiamo dato a questo telefono un limite di 15 secondi. Scorri il feed; quando il tempo finisce vedrai cosa fa davvero Limitra.',
      hint: 'Scorri dentro il telefono',
      auto: 'Scorri tu per me',
      reset: 'Ricomincia',
      remaining: 'Tempo rimasto',
      after: 'Nell’app vera scegli tu il limite: per app, in minuti.'
    },
    social: {
      title: 'Da soli è dura. Insieme è più facile.',
      lead: 'La forza di volontà si stanca quando è sola. In Limitra Social un amico vede il limite che hai impostato, e questa piccola visibilità rende più facile mantenere la parola.',
      points: [
        { t: 'Aggiungi con l’ID', d: 'Ognuno ha un Limitra ID di otto cifre. Condividi il tuo, accetta la richiesta, fatto.' },
        { t: 'Scegli tu cosa condividere', d: 'Decidi per ogni limite. Gli amici vedono solo lo stato dei limiti che condividi.' },
        { t: 'Proteggete la serie insieme', d: 'Ogni giorno nell’obiettivo allunga la tua serie e guadagni cornici del profilo da 7 a 200 giorni.' }
      ],
      screenTitle: 'Amici',
      screenSub: 'Tenetevi in carreggiata',
      on: 'Nell’obiettivo',
      near: 'Vicino al limite',
      over: 'Limite superato',
      min: 'min',
      days: 'giorni',
      best: 'serie migliore',
      idLabel: 'Il tuo ID',
      names: ['Giulia', 'Luca', 'Sara']
    },
    quotes: {
      caption: 'Quando il tempo finisce non trovi una schermata di errore, ma una frase che vale la pausa.',
      items: [
        { q: 'Tutto il resto appartiene ad altri; solo il tempo è nostro.', a: 'Seneca' },
        { q: 'Non è che abbiamo poco tempo, è che ne sprechiamo molto.', a: 'Seneca' },
        { q: 'Nessuno è libero se non è padrone di sé stesso.', a: 'Epitteto' }
      ]
    },
    core: {
      title: 'Lo stesso cuore in entrambe le app',
      items: [
        { t: 'Un blocco che tiene', d: 'Finito il tempo, una schermata di blocco copre l’app.' },
        { t: 'Schermata stoica', d: 'Ferma l’apertura impulsiva con una sola frase.' },
        { t: 'Serie e livelli', d: 'I giorni nell’obiettivo si sommano e sali di livello.' },
        { t: 'Statistiche sul dispositivo', d: 'Il tuo utilizzo è calcolato sul telefono.' }
      ]
    },
    block: {
      title: 'Se preferisci non condividere con nessuno.',
      lead: 'Limitra App Block crea lo stesso blocco completamente offline. Nessun account, nessun permesso internet; regole e statistiche non lasciano mai il tuo telefono.',
      ledger: ['Permesso internet', 'Account', 'Server', 'Pubblicità', 'Abbonamento'],
      none: 'No',
      quote: '«Solo altri cinque minuti.»',
      answer: 'Oggi no.',
      cta: 'Vedi App Block su Google Play',
      more: 'Scopri come funziona'
    },
    compare: {
      title: 'Quale fa per te?',
      rows: [
        { k: 'Ideale per', s: 'Chi vuole darsi dei limiti con un amico', b: 'Chi non vuole condividere alcun dato' },
        { k: 'Limiti giornalieri e blocco', s: true, b: true },
        { k: 'Schermata di blocco stoica', s: true, b: true },
        { k: 'Serie e livelli', s: true, b: true },
        { k: 'Condivisione con amici', s: true, b: false },
        { k: 'Account', s: 'Google o e-mail', b: 'Non serve' },
        { k: 'Internet', s: 'Solo per le funzioni con amici', b: 'Mai usato' },
        { k: 'Per iniziare', s: 'Gratis', b: 'Acquisto unico' }
      ],
      yes: 'Sì',
      no: 'No',
      ctaS: 'Scarica Social',
      ctaB: 'Vedi App Block'
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        { q: 'Che differenza c’è tra Limitra Social e Limitra App Block?', a: 'Entrambe impostano limiti giornalieri alle app scelte e le bloccano quando il tempo finisce. Social aggiunge la condivisione con gli amici e richiede un account. App Block funziona senza account e completamente offline.' },
        { q: 'Perché serve il permesso di Accessibilità?', a: 'Per capire quale app viene aperta e mostrare la schermata di blocco al raggiungimento del limite. Messaggi, password e contenuti dello schermo non vengono mai letti, salvati o inviati.' },
        { q: 'Cosa possono vedere i miei amici?', a: 'Solo i limiti che scegli di condividere e il loro stato: nell’obiettivo, vicino al limite o superato. Le tue statistiche di utilizzo restano sul telefono.' },
        { q: 'Funziona su iPhone?', a: 'Non ancora. Entrambe le app sono pensate per Android e disponibili su Google Play.' }
      ]
    },
    final: {
      title: 'Riprenditi il tuo tempo, da oggi.',
      lead: 'Inizia gratis con Limitra Social e porta un amico.',
      alt: 'Da solo e offline? Limitra App Block'
    }
  },

  ar: {
    meta: {
      title: 'Limitra | حظر التطبيقات وحدود وقت الشاشة: Social وApp Block',
      desc: 'ضع حدًا يوميًا للتطبيقات مع Limitra Social: تُقفل عند انتهاء الوقت ويساعدك أصدقاؤك على الالتزام. الخصوصية أولًا؟ يعمل Limitra App Block دون اتصال بالإنترنت. لأجهزة أندرويد.'
    },
    tagline: 'تطبيقان وهدف واحد: أن نعيد إليك وقتك.',
    hero: {
      h1a: 'ضع حدّك.',
      h1b: 'ودع صديقك يراه.',
      lead: 'يضع Limitra Social حدًا زمنيًا يوميًا للتطبيقات التي تختارها ويقفلها عند انتهاء الوقت. يرى أصدقاؤك إن التزمت بهدفك، وترى أنت أهدافهم.',
      cta: 'حمّله مجانًا من Google Play',
      note: 'لأندرويد · بـ 11 لغة',
      alt: 'تفضّل ألا تشارك شيئًا؟',
      altLink: 'Limitra App Block دون اتصال'
    },
    phone: {
      today: 'استخدام اليوم',
      limit: 'الحد 30 دقيقة',
      locked: 'لقد بلغت حدّ اليوم.',
      back: 'ارجع إلى الشاشة الرئيسية للمتابعة.',
      toast: 'التزمت {name} بهدفها اليوم',
      streak: 'سلسلة 12 يومًا'
    },
    demo: {
      title: 'واصل التمرير. وشاهد ما سيحدث.',
      lead: 'وضعنا لهذا الهاتف حدًا مدته 15 ثانية. مرّر الصفحة؛ وعندما ينتهي الوقت سترى ما يفعله Limitra فعلًا.',
      hint: 'مرّر داخل الهاتف',
      auto: 'مرّر بدلًا مني',
      reset: 'ابدأ من جديد',
      remaining: 'الوقت المتبقي',
      after: 'في التطبيق الحقيقي أنت من يختار الحد: لكل تطبيق، بالدقائق.'
    },
    social: {
      title: 'وحدك صعب. معًا أسهل.',
      lead: 'تتعب الإرادة حين تكون وحدها. في Limitra Social يرى صديقك الحد الذي وضعته، وهذا القليل من الوضوح يجعل الوفاء بكلمتك أسهل.',
      points: [
        { t: 'أضف عبر المعرّف', d: 'لكل شخص معرّف Limitra من ثمانية أرقام. شارك معرّفك، واقبل الطلب، وانتهى الأمر.' },
        { t: 'أنت تختار ما تشاركه', d: 'تقرر لكل حد على حدة. لا يرى أصدقاؤك إلا حالة الحدود التي تشاركها.' },
        { t: 'احميا السلسلة معًا', d: 'كل يوم تلتزم فيه بهدفك يطيل سلسلتك، وتكسب إطارات للملف الشخصي من 7 إلى 200 يوم.' }
      ],
      screenTitle: 'الأصدقاء',
      screenSub: 'ساعدوا بعضكم على الالتزام',
      on: 'ضمن الهدف',
      near: 'قريب من الحد',
      over: 'تجاوز الحد',
      min: 'د',
      days: 'يومًا',
      best: 'أطول سلسلة',
      idLabel: 'معرّفك',
      names: ['سارة', 'عمر', 'ليلى']
    },
    quotes: {
      caption: 'عندما ينتهي الوقت لا تظهر لك شاشة خطأ، بل عبارة تستحق التوقف.',
      items: [
        { q: 'كل شيء ليس لنا؛ وحده الوقت مِلكنا.', a: 'سينيكا' },
        { q: 'ليست أعمارنا قصيرة، لكننا نهدر الكثير منها.', a: 'سينيكا' },
        { q: 'لا أحد حرّ ما لم يكن سيّد نفسه.', a: 'إبكتيتوس' }
      ]
    },
    core: {
      title: 'النواة نفسها في التطبيقين',
      items: [
        { t: 'قفل لا يتراجع', d: 'عند انتهاء الوقت تغطي شاشة القفل التطبيق.' },
        { t: 'شاشة قفل رواقية', d: 'توقف الفتح الاندفاعي بعبارة واحدة.' },
        { t: 'سلاسل ومستويات', d: 'تتراكم أيام الالتزام وترتقي في المستويات.' },
        { t: 'إحصاءات على الجهاز', d: 'يُحسب استخدامك على هاتفك.' }
      ]
    },
    block: {
      title: 'إن كنت تفضّل ألا تشارك أحدًا.',
      lead: 'يبني Limitra App Block القفل نفسه دون اتصال بالكامل. لا حساب ولا إذن إنترنت؛ قواعدك وإحصاءاتك لا تغادر هاتفك أبدًا.',
      ledger: ['إذن الإنترنت', 'الحساب', 'الخوادم', 'الإعلانات', 'الاشتراك'],
      none: 'لا يوجد',
      quote: '«خمس دقائق أخرى فقط.»',
      answer: 'ليس اليوم.',
      cta: 'شاهد App Block على Google Play',
      more: 'اقرأ كيف يعمل'
    },
    compare: {
      title: 'أيّهما يناسبك؟',
      rows: [
        { k: 'الأنسب لـ', s: 'من يريد وضع حدود مع صديق', b: 'من لا يريد مشاركة أي بيانات' },
        { k: 'حدود يومية وقفل', s: true, b: true },
        { k: 'شاشة قفل رواقية', s: true, b: true },
        { k: 'سلاسل ومستويات', s: true, b: true },
        { k: 'المشاركة مع الأصدقاء', s: true, b: false },
        { k: 'الحساب', s: 'Google أو البريد الإلكتروني', b: 'غير مطلوب' },
        { k: 'الإنترنت', s: 'لميزات الأصدقاء فقط', b: 'لا يستخدمه أبدًا' },
        { k: 'للبدء', s: 'مجاني', b: 'شراء لمرة واحدة' }
      ],
      yes: 'نعم',
      no: 'لا',
      ctaS: 'حمّل Social',
      ctaB: 'شاهد App Block'
    },
    faq: {
      title: 'أسئلة شائعة',
      items: [
        { q: 'ما الفرق بين Limitra Social وLimitra App Block؟', a: 'كلاهما يضع حدودًا يومية للتطبيقات التي تختارها ويقفلها عند انتهاء الوقت. يضيف Social المشاركة مع الأصدقاء ويتطلب حسابًا. أما App Block فيعمل دون حساب ودون اتصال بالكامل.' },
        { q: 'لماذا يحتاج إلى إذن تسهيل الاستخدام؟', a: 'لمعرفة التطبيق الذي فُتح وإظهار شاشة القفل عند بلوغ الحد. لا تُقرأ رسائلك أو كلمات مرورك أو محتوى شاشتك ولا تُخزَّن ولا تُرسَل أبدًا.' },
        { q: 'ماذا يمكن لأصدقائي أن يروا؟', a: 'الحدود التي تختار مشاركتها وحالتها فقط: ضمن الهدف، أو قريب من الحد، أو تجاوزه. تبقى إحصاءات استخدامك على هاتفك.' },
        { q: 'هل يعمل على iPhone؟', a: 'ليس بعد. التطبيقان مصمَّمان لأندرويد ومتاحان على Google Play.' }
      ]
    },
    final: {
      title: 'استعد وقتك، بدءًا من اليوم.',
      lead: 'ابدأ مجانًا مع Limitra Social، وادعُ صديقًا.',
      alt: 'وحدك ودون اتصال؟ Limitra App Block'
    }
  },

  id: {
    meta: {
      title: 'Limitra | Pemblokir aplikasi & batas waktu layar: Social dan App Block',
      desc: 'Pasang batas harian untuk aplikasi dengan Limitra Social: aplikasi terkunci saat waktunya habis dan teman membantumu tetap konsisten. Mengutamakan privasi? Limitra App Block bekerja offline. Untuk Android.'
    },
    tagline: 'Dua aplikasi, satu tujuan: mengembalikan waktumu.',
    hero: {
      h1a: 'Pasang batasmu.',
      h1b: 'Biar temanmu melihatnya.',
      lead: 'Limitra Social memasang batas waktu harian pada aplikasi pilihanmu dan menguncinya saat waktunya habis. Temanmu bisa melihat apakah kamu tetap di target, dan kamu bisa melihat milik mereka.',
      cta: 'Unduh gratis di Google Play',
      note: 'Untuk Android · dalam 11 bahasa',
      alt: 'Lebih suka tidak membagikan apa pun?',
      altLink: 'Limitra App Block, offline'
    },
    phone: {
      today: 'Pemakaian hari ini',
      limit: 'Batas 30 mnt',
      locked: 'Batas hari ini sudah tercapai.',
      back: 'Kembali ke layar utama untuk melanjutkan.',
      toast: '{name} tetap di target hari ini',
      streak: 'Runtutan 12 hari'
    },
    demo: {
      title: 'Terus gulir. Lihat apa yang terjadi.',
      lead: 'Kami memberi ponsel ini batas 15 detik. Gulir feed-nya; saat waktunya habis kamu akan melihat apa yang sebenarnya dilakukan Limitra.',
      hint: 'Gulir di dalam ponsel',
      auto: 'Gulirkan untukku',
      reset: 'Mulai lagi',
      remaining: 'Sisa waktu',
      after: 'Di aplikasi aslinya, kamu sendiri yang memilih batasnya: per aplikasi, dalam menit.'
    },
    social: {
      title: 'Sendiri itu berat. Bersama lebih mudah.',
      lead: 'Tekad mudah lelah saat sendirian. Di Limitra Social, temanmu melihat batas yang kamu pasang, dan keterlihatan kecil itu membuatmu lebih mudah menepati janji.',
      points: [
        { t: 'Tambah lewat ID', d: 'Setiap orang punya Limitra ID delapan digit. Bagikan ID-mu, terima permintaannya, selesai.' },
        { t: 'Kamu yang memilih apa yang dibagikan', d: 'Kamu memutuskan untuk setiap batas. Teman hanya melihat status batas yang kamu bagikan.' },
        { t: 'Jaga runtutan bersama', d: 'Setiap hari di target memperpanjang runtutanmu, dan kamu mendapat bingkai profil dari 7 hingga 200 hari.' }
      ],
      screenTitle: 'Teman',
      screenSub: 'Saling menjaga tetap di jalur',
      on: 'Di target',
      near: 'Hampir batas',
      over: 'Melewati batas',
      min: 'mnt',
      days: 'hari',
      best: 'runtutan terbaik',
      idLabel: 'ID-mu',
      names: ['Rina', 'Bayu', 'Sari']
    },
    quotes: {
      caption: 'Saat waktunya habis, yang muncul bukan layar galat, melainkan kalimat yang layak direnungkan.',
      items: [
        { q: 'Segala sesuatu milik orang lain; hanya waktu yang milik kita.', a: 'Seneca' },
        { q: 'Bukan hidup kita yang singkat, tetapi kita yang menyia-nyiakan banyak waktunya.', a: 'Seneca' },
        { q: 'Tak seorang pun bebas jika ia bukan tuan atas dirinya sendiri.', a: 'Epiktetos' }
      ]
    },
    core: {
      title: 'Inti yang sama di kedua aplikasi',
      items: [
        { t: 'Kunci yang bertahan', d: 'Saat waktu habis, layar kunci menutupi aplikasinya.' },
        { t: 'Layar kunci Stoik', d: 'Menghentikan dorongan membuka aplikasi dengan satu kalimat.' },
        { t: 'Runtutan dan level', d: 'Hari-hari di target terkumpul dan levelmu naik.' },
        { t: 'Statistik di perangkat', d: 'Pemakaianmu dihitung di ponselmu.' }
      ]
    },
    block: {
      title: 'Kalau kamu tak ingin berbagi dengan siapa pun.',
      lead: 'Limitra App Block membangun kunci yang sama sepenuhnya offline. Tanpa akun, tanpa izin internet; aturan dan statistikmu tak pernah keluar dari ponselmu.',
      ledger: ['Izin internet', 'Akun', 'Server', 'Iklan', 'Langganan'],
      none: 'Tidak ada',
      quote: '“Lima menit lagi saja.”',
      answer: 'Tidak hari ini.',
      cta: 'Lihat App Block di Google Play',
      more: 'Baca cara kerjanya'
    },
    compare: {
      title: 'Mana yang cocok untukmu?',
      rows: [
        { k: 'Paling cocok untuk', s: 'Yang ingin memasang batas bersama teman', b: 'Yang tak ingin membagikan data apa pun' },
        { k: 'Batas harian dan kunci', s: true, b: true },
        { k: 'Layar kunci Stoik', s: true, b: true },
        { k: 'Runtutan dan level', s: true, b: true },
        { k: 'Berbagi dengan teman', s: true, b: false },
        { k: 'Akun', s: 'Google atau email', b: 'Tidak perlu' },
        { k: 'Internet', s: 'Hanya untuk fitur teman', b: 'Tidak pernah dipakai' },
        { k: 'Untuk memulai', s: 'Gratis', b: 'Sekali beli' }
      ],
      yes: 'Ya',
      no: 'Tidak',
      ctaS: 'Unduh Social',
      ctaB: 'Lihat App Block'
    },
    faq: {
      title: 'Pertanyaan umum',
      items: [
        { q: 'Apa beda Limitra Social dan Limitra App Block?', a: 'Keduanya memasang batas harian pada aplikasi pilihanmu dan menguncinya saat waktunya habis. Social menambahkan fitur berbagi dengan teman dan memerlukan akun. App Block bekerja tanpa akun dan sepenuhnya offline.' },
        { q: 'Kenapa perlu izin Aksesibilitas?', a: 'Untuk mendeteksi aplikasi yang dibuka dan menampilkan layar kunci saat batas tercapai. Pesan, kata sandi, dan isi layarmu tidak pernah dibaca, disimpan, atau dikirim.' },
        { q: 'Apa yang bisa dilihat temanku?', a: 'Hanya batas yang kamu pilih untuk dibagikan beserta statusnya: di target, hampir batas, atau terlewati. Statistik pemakaianmu tersimpan di ponselmu.' },
        { q: 'Apakah bisa di iPhone?', a: 'Belum. Kedua aplikasi dibuat untuk Android dan tersedia di Google Play.' }
      ]
    },
    final: {
      title: 'Ambil kembali waktumu, mulai hari ini.',
      lead: 'Mulai gratis dengan Limitra Social, dan ajak seorang teman.',
      alt: 'Sendiri dan offline? Limitra App Block'
    }
  },

  fil: {
    meta: {
      title: 'Limitra | App blocker at limit sa screen time: Social at App Block',
      desc: 'Lagyan ng pang-araw-araw na limit ang mga app gamit ang Limitra Social: nala-lock ang mga ito kapag ubos na ang oras, at tinutulungan ka ng mga kaibigan na manatili sa target. Privacy ang inuuna mo? Gumagana offline ang Limitra App Block. Para sa Android.'
    },
    tagline: 'Dalawang app, iisang layunin: ibalik sa iyo ang oras mo.',
    hero: {
      h1a: 'Itakda ang limit mo.',
      h1b: 'Ipakita sa isang kaibigan.',
      lead: 'Naglalagay ang Limitra Social ng pang-araw-araw na limit sa mga app na pinili mo at nila-lock ang mga ito kapag ubos na ang oras. Nakikita ng mga kaibigan mo kung nanatili ka sa target, at nakikita mo rin ang sa kanila.',
      cta: 'I-download nang libre sa Google Play',
      note: 'Para sa Android · sa 11 wika',
      alt: 'Ayaw mong magbahagi ng kahit ano?',
      altLink: 'Offline na Limitra App Block'
    },
    phone: {
      today: 'Nagamit ngayon',
      limit: 'Limit 30 min',
      locked: 'Naabot mo na ang limit ngayong araw.',
      back: 'Bumalik sa home screen para magpatuloy.',
      toast: 'Nanatili sa target si {name} ngayon',
      streak: '12 araw na sunod-sunod'
    },
    demo: {
      title: 'Mag-scroll ka pa. Tingnan ang mangyayari.',
      lead: 'Binigyan namin ang phone na ito ng 15 segundong limit. I-scroll ang feed; pag naubos ang oras, makikita mo ang talagang ginagawa ng Limitra.',
      hint: 'Mag-scroll sa loob ng phone',
      auto: 'I-scroll para sa akin',
      reset: 'Ulitin',
      remaining: 'Natitirang oras',
      after: 'Sa totoong app, ikaw ang pipili ng limit: bawat app, sa minuto.'
    },
    social: {
      title: 'Mahirap mag-isa. Mas madali nang magkasama.',
      lead: 'Napapagod ang disiplina kapag nag-iisa. Sa Limitra Social, nakikita ng kaibigan mo ang limit na itinakda mo, at ang maliit na pagkakitang iyon ang nagpapadali sa pagtupad mo sa pangako.',
      points: [
        { t: 'Mag-add gamit ang ID', d: 'May walong-digit na Limitra ID ang bawat isa. Ibahagi ang sa iyo, tanggapin ang request, tapos na.' },
        { t: 'Ikaw ang pipili kung ano ang ibabahagi', d: 'Ikaw ang magpapasya sa bawat limit. Status lang ng mga ibinahagi mong limit ang makikita ng kaibigan mo.' },
        { t: 'Bantayan ang streak nang magkasama', d: 'Bawat araw na nasa target ay nagpapahaba ng streak mo, at nakakakuha ka ng profile frame mula 7 hanggang 200 araw.' }
      ],
      screenTitle: 'Mga Kaibigan',
      screenSub: 'Tulungan ang isa’t isa',
      on: 'Nasa target',
      near: 'Malapit sa limit',
      over: 'Lampas sa limit',
      min: 'min',
      days: 'araw',
      best: 'pinakamahabang streak',
      idLabel: 'Ang ID mo',
      names: ['Ana', 'Paolo', 'Bea']
    },
    quotes: {
      caption: 'Pag naubos ang oras, hindi error screen ang lalabas kundi isang linyang sulit pagnilayan.',
      items: [
        { q: 'Lahat ng iba ay pag-aari ng iba; ang oras lamang ang atin.', a: 'Seneca' },
        { q: 'Hindi maikli ang buhay natin; marami lang tayong sinasayang.', a: 'Seneca' },
        { q: 'Walang taong malaya kung hindi siya panginoon ng sarili.', a: 'Epictetus' }
      ]
    },
    core: {
      title: 'Iisang core sa dalawang app',
      items: [
        { t: 'Lock na hindi bumibigay', d: 'Pag ubos na ang oras, tatakpan ng lock screen ang app.' },
        { t: 'Stoic na lock screen', d: 'Pinipigilan ang biglaang pagbukas gamit ang isang linya.' },
        { t: 'Streak at level', d: 'Naiipon ang mga araw sa target at tumataas ang level mo.' },
        { t: 'Stats sa device', d: 'Sa phone mo kinukuwenta ang paggamit mo.' }
      ]
    },
    block: {
      title: 'Kung ayaw mong magbahagi kahit kanino.',
      lead: 'Binubuo ng Limitra App Block ang parehong lock nang buong offline. Walang account, walang internet permission; hindi lumalabas sa phone mo ang mga patakaran at stats mo.',
      ledger: ['Internet permission', 'Account', 'Server', 'Ads', 'Subscription'],
      none: 'Wala',
      quote: '“Limang minuto na lang.”',
      answer: 'Hindi ngayon.',
      cta: 'Tingnan ang App Block sa Google Play',
      more: 'Basahin kung paano gumagana'
    },
    compare: {
      title: 'Alin ang para sa iyo?',
      rows: [
        { k: 'Bagay para sa', s: 'Gustong magtakda ng limit kasama ang kaibigan', b: 'Ayaw magbahagi ng anumang data' },
        { k: 'Pang-araw-araw na limit at lock', s: true, b: true },
        { k: 'Stoic na lock screen', s: true, b: true },
        { k: 'Streak at level', s: true, b: true },
        { k: 'Pagbabahagi sa kaibigan', s: true, b: false },
        { k: 'Account', s: 'Google o email', b: 'Hindi kailangan' },
        { k: 'Internet', s: 'Para lang sa mga feature ng kaibigan', b: 'Hindi kailanman ginagamit' },
        { k: 'Para magsimula', s: 'Libre', b: 'Isang beses na bili' }
      ],
      yes: 'Oo',
      no: 'Wala',
      ctaS: 'I-download ang Social',
      ctaB: 'Tingnan ang App Block'
    },
    faq: {
      title: 'Mga karaniwang tanong',
      items: [
        { q: 'Ano ang pagkakaiba ng Limitra Social at Limitra App Block?', a: 'Pareho silang naglalagay ng pang-araw-araw na limit sa mga app na pinili mo at nila-lock ang mga ito pag ubos na ang oras. May pagbabahagi sa kaibigan ang Social at kailangan nito ng account. Gumagana ang App Block nang walang account at buong offline.' },
        { q: 'Bakit kailangan ang Accessibility permission?', a: 'Para malaman kung aling app ang binuksan at maipakita ang lock screen kapag naabot ang limit. Hindi kailanman binabasa, sine-save, o ipinapadala ang mga mensahe, password, at nilalaman ng screen mo.' },
        { q: 'Ano ang nakikita ng mga kaibigan ko?', a: 'Ang mga limit lang na pinili mong ibahagi at ang status nila: nasa target, malapit sa limit, o lampas. Nasa phone mo ang usage stats mo.' },
        { q: 'Gumagana ba sa iPhone?', a: 'Hindi pa. Para sa Android ang dalawang app at nasa Google Play.' }
      ]
    },
    final: {
      title: 'Bawiin ang oras mo, simula ngayon.',
      lead: 'Magsimula nang libre sa Limitra Social, at isama ang isang kaibigan.',
      alt: 'Mag-isa at offline? Limitra App Block'
    }
  },

  th: {
    meta: {
      title: 'Limitra | บล็อกแอปและจำกัดเวลาหน้าจอ: Social และ App Block',
      desc: 'ตั้งเวลาใช้งานรายวันให้แอปด้วย Limitra Social แอปจะล็อกเมื่อหมดเวลา และเพื่อนช่วยให้คุณทำตามเป้าได้ ให้ความสำคัญกับความเป็นส่วนตัว? Limitra App Block ทำงานแบบออฟไลน์ สำหรับ Android'
    },
    tagline: 'สองแอป หนึ่งเป้าหมาย: คืนเวลาให้คุณ',
    hero: {
      h1a: 'ตั้งลิมิตของคุณ',
      h1b: 'ให้เพื่อนได้เห็น',
      lead: 'Limitra Social ตั้งเวลาใช้งานรายวันให้แอปที่คุณเลือก และล็อกแอปเมื่อหมดเวลา เพื่อนจะเห็นว่าคุณอยู่ในเป้าหมายหรือไม่ และคุณก็เห็นของเพื่อนเช่นกัน',
      cta: 'ดาวน์โหลดฟรีบน Google Play',
      note: 'สำหรับ Android · รองรับ 11 ภาษา',
      alt: 'ไม่อยากแชร์อะไรเลยใช่ไหม',
      altLink: 'Limitra App Block แบบออฟไลน์'
    },
    phone: {
      today: 'ใช้วันนี้',
      limit: 'ลิมิต 30 นาที',
      locked: 'คุณใช้ครบลิมิตของวันนี้แล้ว',
      back: 'กลับไปที่หน้าจอหลักเพื่อดำเนินการต่อ',
      toast: 'วันนี้{name}อยู่ในเป้าหมาย',
      streak: 'ต่อเนื่อง 12 วัน'
    },
    demo: {
      title: 'เลื่อนต่อไป แล้วดูว่าจะเกิดอะไรขึ้น',
      lead: 'เราตั้งลิมิต 15 วินาทีให้โทรศัพท์เครื่องนี้ ลองเลื่อนฟีดดู เมื่อหมดเวลาคุณจะเห็นว่า Limitra ทำอะไรจริงๆ',
      hint: 'เลื่อนในโทรศัพท์',
      auto: 'เลื่อนให้ฉัน',
      reset: 'เริ่มใหม่',
      remaining: 'เวลาที่เหลือ',
      after: 'ในแอปจริง คุณเป็นคนเลือกลิมิตเอง: แยกตามแอป เป็นนาที'
    },
    social: {
      title: 'ทำคนเดียวมันยาก ทำด้วยกันง่ายกว่า',
      lead: 'ความตั้งใจจะเหนื่อยล้าเมื่ออยู่ลำพัง ใน Limitra Social เพื่อนจะเห็นลิมิตที่คุณตั้งไว้ และการถูกมองเห็นเพียงเล็กน้อยนี้ช่วยให้คุณรักษาคำพูดได้ง่ายขึ้น',
      points: [
        { t: 'เพิ่มเพื่อนด้วย ID', d: 'ทุกคนมี Limitra ID แปดหลัก แชร์ ID ของคุณ กดยอมรับคำขอ แค่นั้นเอง' },
        { t: 'คุณเลือกเองว่าจะแชร์อะไร', d: 'ตัดสินใจแยกทีละลิมิต เพื่อนจะเห็นเฉพาะสถานะของลิมิตที่คุณแชร์' },
        { t: 'รักษาสถิติต่อเนื่องไปด้วยกัน', d: 'ทุกวันที่อยู่ในเป้าหมายจะต่อสถิติของคุณ และได้กรอบโปรไฟล์ตั้งแต่ 7 ถึง 200 วัน' }
      ],
      screenTitle: 'เพื่อน',
      screenSub: 'ช่วยกันรักษาเป้าหมาย',
      on: 'อยู่ในเป้า',
      near: 'ใกล้ลิมิต',
      over: 'เกินลิมิต',
      min: 'นาที',
      days: 'วัน',
      best: 'ต่อเนื่องสูงสุด',
      idLabel: 'ID ของคุณ',
      names: ['มายด์', 'ต้น', 'แพร']
    },
    quotes: {
      caption: 'เมื่อหมดเวลา คุณจะไม่เจอหน้าจอแจ้งข้อผิดพลาด แต่จะเจอประโยคที่ควรค่าแก่การหยุดคิด',
      items: [
        { q: 'ทุกสิ่งล้วนเป็นของผู้อื่น มีเพียงเวลาที่เป็นของเรา', a: 'เซเนกา' },
        { q: 'ไม่ใช่ว่าชีวิตเราสั้น แต่เราใช้มันอย่างสูญเปล่าไปมาก', a: 'เซเนกา' },
        { q: 'ไม่มีใครเป็นอิสระ หากเขายังเป็นนายเหนือตนเองไม่ได้', a: 'เอพิคเตตัส' }
      ]
    },
    core: {
      title: 'แกนเดียวกันในทั้งสองแอป',
      items: [
        { t: 'ล็อกที่ไม่ยอมอ่อนข้อ', d: 'เมื่อหมดเวลา หน้าจอล็อกจะปิดทับแอป' },
        { t: 'หน้าจอล็อกแนวสโตอิก', d: 'หยุดการเปิดแอปตามแรงกระตุ้นด้วยประโยคเดียว' },
        { t: 'สถิติต่อเนื่องและเลเวล', d: 'วันที่อยู่ในเป้าหมายสะสมขึ้น และคุณได้เลื่อนเลเวล' },
        { t: 'สถิติบนอุปกรณ์', d: 'การใช้งานของคุณคำนวณบนโทรศัพท์ของคุณ' }
      ]
    },
    block: {
      title: 'ถ้าคุณไม่อยากแชร์กับใครเลย',
      lead: 'Limitra App Block สร้างล็อกแบบเดียวกันแบบออฟไลน์ทั้งหมด ไม่มีบัญชี ไม่มีสิทธิ์อินเทอร์เน็ต กฎและสถิติของคุณไม่เคยออกจากโทรศัพท์',
      ledger: ['สิทธิ์อินเทอร์เน็ต', 'บัญชี', 'เซิร์ฟเวอร์', 'โฆษณา', 'การสมัครสมาชิก'],
      none: 'ไม่มี',
      quote: '“ขออีกแค่ห้านาที”',
      answer: 'วันนี้ไม่ได้',
      cta: 'ดู App Block บน Google Play',
      more: 'อ่านวิธีการทำงาน'
    },
    compare: {
      title: 'แอปไหนเหมาะกับคุณ',
      rows: [
        { k: 'เหมาะกับ', s: 'คนที่อยากตั้งลิมิตไปพร้อมกับเพื่อน', b: 'คนที่ไม่อยากแชร์ข้อมูลใดๆ เลย' },
        { k: 'ลิมิตรายวันและการล็อก', s: true, b: true },
        { k: 'หน้าจอล็อกแนวสโตอิก', s: true, b: true },
        { k: 'สถิติต่อเนื่องและเลเวล', s: true, b: true },
        { k: 'แชร์กับเพื่อน', s: true, b: false },
        { k: 'บัญชี', s: 'Google หรืออีเมล', b: 'ไม่ต้องใช้' },
        { k: 'อินเทอร์เน็ต', s: 'เฉพาะฟีเจอร์เพื่อน', b: 'ไม่ใช้เลย' },
        { k: 'เริ่มต้น', s: 'ฟรี', b: 'ซื้อครั้งเดียว' }
      ],
      yes: 'มี',
      no: 'ไม่มี',
      ctaS: 'ดาวน์โหลด Social',
      ctaB: 'ดู App Block'
    },
    faq: {
      title: 'คำถามที่พบบ่อย',
      items: [
        { q: 'Limitra Social กับ Limitra App Block ต่างกันอย่างไร', a: 'ทั้งสองแอปตั้งเวลาใช้งานรายวันให้แอปที่คุณเลือกและล็อกเมื่อหมดเวลา Social เพิ่มการแชร์กับเพื่อนและต้องมีบัญชี ส่วน App Block ทำงานโดยไม่ต้องมีบัญชีและออฟไลน์ทั้งหมด' },
        { q: 'ทำไมต้องใช้สิทธิ์การช่วยเหลือพิเศษ (Accessibility)', a: 'เพื่อตรวจว่าแอปไหนถูกเปิด และแสดงหน้าจอล็อกเมื่อครบลิมิต ข้อความ รหัสผ่าน และเนื้อหาบนหน้าจอของคุณจะไม่ถูกอ่าน จัดเก็บ หรือส่งออกไป' },
        { q: 'เพื่อนของฉันเห็นอะไรบ้าง', a: 'เห็นเฉพาะลิมิตที่คุณเลือกแชร์และสถานะของลิมิตนั้น: อยู่ในเป้า ใกล้ลิมิต หรือเกินลิมิต สถิติการใช้งานของคุณเก็บไว้บนโทรศัพท์' },
        { q: 'ใช้กับ iPhone ได้ไหม', a: 'ยังไม่ได้ ทั้งสองแอปสร้างมาสำหรับ Android และมีให้ดาวน์โหลดบน Google Play' }
      ]
    },
    final: {
      title: 'เริ่มเอาเวลาของคุณคืนมา ตั้งแต่วันนี้',
      lead: 'เริ่มฟรีกับ Limitra Social แล้วชวนเพื่อนมาด้วย',
      alt: 'อยากใช้คนเดียวแบบออฟไลน์? Limitra App Block'
    }
  }
};

/** App Block bölümündeki manifest kanıtının başlığı. */
export const blockProof: Record<SupportedLang, string> = {
  tr: 'App Block’un kendi manifest dosyasından',
  en: 'From App Block’s own manifest',
  es: 'Del propio manifiesto de App Block',
  fr: 'Extrait du manifeste d’App Block',
  de: 'Aus dem Manifest von App Block',
  pt: 'Do próprio manifesto do App Block',
  it: 'Dal manifest di App Block',
  ar: 'من ملف البيان الخاص بـ App Block',
  id: 'Dari manifest App Block sendiri',
  fil: 'Mula sa sariling manifest ng App Block',
  th: 'จากไฟล์ manifest ของ App Block'
};
