export type SupportedLang = 'tr' | 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ar' | 'id' | 'fil' | 'th';

export interface LangConfig {
  code: SupportedLang;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LangConfig[] = [
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  { code: 'fil', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭', dir: 'ltr' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', dir: 'ltr' },
];

export const translations: Record<SupportedLang, {
  nav: {
    home: string;
    howItWorks: string;
    news: string;
    guides: string;
    faq: string;
    getApp: string;
    language: string;
  };
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustOnDevice: string;
    trustNoAds: string;
    trustAndroid: string;
  };
  principles: {
    title: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  problem: {
    kicker: string;
    title: string;
    desc: string;
    loopLabel: string;
    t1Time: string;
    t1Text: string;
    t2Time: string;
    t2Text: string;
    pauseTitle: string;
  };
  steps: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{ num: string; title: string; text: string }>;
  };
  features: {
    kicker: string;
    title: string;
    desc: string;
    checks: string[];
    exploreBtn: string;
  };
  privacy: {
    kicker: string;
    title: string;
    desc: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  newsHome: {
    kicker: string;
    title: string;
    allNews: string;
    read: string;
  };
  guides: {
    kicker: string;
    title: string;
    allGuides: string;
  };
  finalCta: {
    kicker: string;
    title: string;
    desc: string;
    btn: string;
    androidNote: string;
  };
  footer: {
    productTitle: string;
    exploreTitle: string;
    legalTitle: string;
    rights: string;
    tagline: string;
  };
}> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      howItWorks: 'Nasıl çalışır?',
      news: 'Dünya Basını',
      guides: 'Rehberler',
      faq: 'SSS',
      getApp: 'Uygulamayı indir',
      language: 'Dil Seçin'
    },
    hero: {
      badge: 'Daha sakin bir dijital ritim',
      h1Line1: 'Kararını şimdi ver.',
      h1Line2: 'Limitra App Block sonra korusun.',
      lead: 'Sınırını zihnin sakinken belirle. Dikkatin dağıldığında Limitra App Block, daha önce verdiğin karara sadık kalmana yardımcı olsun.',
      ctaPrimary: 'Google Play’den indir',
      ctaSecondary: 'Nasıl çalıştığını gör',
      trustOnDevice: 'Veriler cihazda',
      trustNoAds: 'Reklamsız',
      trustAndroid: 'Android için'
    },
    principles: {
      title: 'Limitra App Block ilkeleri',
      p1Title: 'Net',
      p1Desc: 'Bir bakışta anlayabileceğin sınırlar.',
      p2Title: 'Gizli',
      p2Desc: 'Hassas kullanım verileri cihazında kalır.',
      p3Title: 'Sakin',
      p3Desc: 'Gürültülü ekranlar, reklamlar ve suçluluk yok.'
    },
    problem: {
      kicker: 'Asıl problem',
      title: 'Ne zaman durman gerektiğini zaten biliyorsun. Zor olan, o anda durabilmek.',
      desc: 'Çoğu ekran süresi aracı, kapatabileceğin bir bildirim daha gönderir. Limitra App Block ise daha önce verdiğin kararı, ihtiyaç duyduğun anda net bir molaya dönüştürür.',
      loopLabel: 'Tanıdık bir döngü',
      t1Time: '22:14',
      t1Text: '“Beş dakika bakıp çıkarım.”',
      t2Time: '22:47',
      t2Text: 'Hâlâ kaydırıyorsun.',
      pauseTitle: 'Belirlediğin sınır şimdi aktif.'
    },
    steps: {
      kicker: 'Üç sade adım',
      title: 'Daha az pazarlık. Daha çok hayat.',
      subtitle: 'Limitra App Block kurulumu kısa tutar; böylece aracın kendisi yeni bir dikkat dağıtıcıya dönüşmez.',
      items: [
        { num: '01', title: 'Dikkat dağıtanları seç', text: 'Seni en sık ekrana çeken uygulamaları belirle.' },
        { num: '02', title: 'Net bir sınır koy', text: 'Zihnin sakinken her uygulamanın hak ettiği süreye karar ver.' },
        { num: '03', title: 'Korumayı Limitra App Block’a bırak', text: 'Süre dolduğunda verdiğin karar gerçek bir molaya dönüşsün.' }
      ]
    },
    features: {
      kicker: 'Baskı kurmadan ilerleme',
      title: 'Deseni gör. Alışkanlığı güçlendir.',
      desc: 'Sade zaman tüneli ve disiplin özeti, hayatını bir tabloya çevirmeden ne olduğunu anlamanı sağlar.',
      checks: [
        'Limitlerin ne zaman devreye girdiğini gör',
        'Yakın dönem istikrarını incele',
        'Tüm geçmişi cihazında tut'
      ],
      exploreBtn: 'Tüm özellikleri incele'
    },
    privacy: {
      kicker: 'Tasarım gereği gizli',
      title: 'Dijital alışkanlıkların sana ait.',
      desc: 'Kullanım bilgilerin Android cihazında işlenir. Limitra App Block, dikkatini korumak için tasarlandı; onu yeni bir veri kaynağına çevirmek için değil.',
      point1Title: 'Cihazında',
      point1Desc: 'Yerel veri işleme',
      point2Title: 'Reklamsız',
      point2Desc: 'Dikkat tuzağı yok',
      point3Title: 'Minimal',
      point3Desc: 'Yalnızca ihtiyacın olan'
    },
    newsHome: {
      kicker: 'Dünya Basını ve Yasalar',
      title: 'Dünya harekete geçiyor. Ya siz?',
      allNews: 'Tüm dünya haberleri',
      read: 'Oku'
    },
    guides: {
      kicker: 'Oku, anla, değiştir',
      title: 'Teknolojiyle daha sakin bir ilişki için bilgi.',
      allGuides: 'Tüm rehberler'
    },
    finalCta: {
      kicker: 'Bugün başla',
      title: 'Önemli olana yer aç.',
      desc: 'Bugün tek bir net sınır koy ve dikkatini daha iyi bir yere ver.',
      btn: 'Limitra App Block’u Google Play’den indir',
      androidNote: 'Android 8.0 ve üzeri'
    },
    footer: {
      productTitle: 'Ürün',
      exploreTitle: 'Basın & Rehberler',
      legalTitle: 'Limitra Yasal',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Dijital disiplini destekleyen bir uygulama engelleyicidir.'
    }
  },

  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      news: 'Global News',
      guides: 'Guides',
      faq: 'FAQ',
      getApp: 'Get the app',
      language: 'Select Language'
    },
    hero: {
      badge: 'A calmer digital rhythm',
      h1Line1: 'Decide now.',
      h1Line2: 'Limitra App Block protects it later.',
      lead: 'Set clear limits while your mind is calm. When distraction arrives, Limitra App Block helps you stay loyal to the decision you already made.',
      ctaPrimary: 'Get it on Google Play',
      ctaSecondary: 'See how it works',
      trustOnDevice: 'On-device data',
      trustNoAds: 'No ads',
      trustAndroid: 'Built for Android'
    },
    principles: {
      title: 'Limitra App Block principles',
      p1Title: 'Clear',
      p1Desc: 'A boundary you can understand at a glance.',
      p2Title: 'Private',
      p2Desc: 'Sensitive usage data stays on your device.',
      p3Title: 'Calm',
      p3Desc: 'No noisy dashboards, ads or guilt.'
    },
    problem: {
      kicker: 'The real problem',
      title: 'You already know when to stop. The hard part is stopping in that moment.',
      desc: 'Most screen-time tools arrive as one more notification you can dismiss. Limitra App Block turns the decision you made earlier into a clear pause when it matters.',
      loopLabel: 'A familiar loop',
      t1Time: '22:14',
      t1Text: '“I’ll look for five minutes.”',
      t2Time: '22:47',
      t2Text: 'Still scrolling.',
      pauseTitle: 'The boundary you set is now active.'
    },
    steps: {
      kicker: 'Three simple steps',
      title: 'Less negotiating. More living.',
      subtitle: 'Limitra App Block keeps setup short so the tool itself never becomes another distraction.',
      items: [
        { num: '01', title: 'Choose the distractions', text: 'Select the apps that steal your attention most often.' },
        { num: '02', title: 'Set a clear limit', text: 'Decide how much time each app deserves while your mind is clear.' },
        { num: '03', title: 'Let Limitra App Block protect it', text: 'When time is up, the boundary you set becomes a real pause.' }
      ]
    },
    features: {
      kicker: 'Progress without pressure',
      title: 'See the pattern. Strengthen the habit.',
      desc: 'A simple timeline and discipline summary help you understand what happened without turning your life into a spreadsheet.',
      checks: [
        'See when limits became active',
        'Review your recent consistency',
        'Keep the story local to your device'
      ],
      exploreBtn: 'Explore every feature'
    },
    privacy: {
      kicker: 'Privacy by design',
      title: 'Your digital habits are yours.',
      desc: 'Usage information is processed on your Android device. Limitra App Block is designed to protect your attention—not to turn it into another data source.',
      point1Title: 'On your device',
      point1Desc: 'Local processing',
      point2Title: 'No ads',
      point2Desc: 'No attention traps',
      point3Title: 'Minimal',
      point3Desc: 'Only what you need'
    },
    newsHome: {
      kicker: 'Global Press & Laws',
      title: 'Governments are taking action. What about you?',
      allNews: 'All global news',
      read: 'Read'
    },
    guides: {
      kicker: 'Read, understand, change',
      title: 'Knowledge for a calmer relationship with technology.',
      allGuides: 'All guides'
    },
    finalCta: {
      kicker: 'Start today',
      title: 'Make room for what matters.',
      desc: 'Set one clear boundary today and give your attention somewhere better.',
      btn: 'Get Limitra App Block on Google Play',
      androidNote: 'For Android 8.0 and newer'
    },
    footer: {
      productTitle: 'Product',
      exploreTitle: 'Press & Guides',
      legalTitle: 'Limitra Legal',
      rights: 'All rights reserved.',
      tagline: 'A supportive digital-discipline & app blocking tool.'
    }
  },

  es: {
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo funciona',
      news: 'Prensa Global',
      guides: 'Guías',
      faq: 'Preguntas',
      getApp: 'Descargar app',
      language: 'Idioma'
    },
    hero: {
      badge: 'Un ritmo digital más tranquilo',
      h1Line1: 'Decide ahora.',
      h1Line2: 'Limitra App Block te protege después.',
      lead: 'Establece límites claros mientras tu mente está tranquila. Cuando llegue la distracción, Limitra App Block te ayuda a mantener tu decisión.',
      ctaPrimary: 'Descargar en Google Play',
      ctaSecondary: 'Ver cómo funciona',
      trustOnDevice: 'Datos en el dispositivo',
      trustNoAds: 'Sin anuncios',
      trustAndroid: 'Para Android'
    },
    principles: {
      title: 'Principios de Limitra App Block',
      p1Title: 'Claro',
      p1Desc: 'Límites que entiendes de un vistazo.',
      p2Title: 'Privado',
      p2Desc: 'Tus datos de uso nunca salen de tu móvil.',
      p3Title: 'Sereno',
      p3Desc: 'Sin paneles ruidosos, publicidad ni culpa.'
    },
    problem: {
      kicker: 'El verdadero problema',
      title: 'Ya sabes cuándo parar. Lo difícil es detenerse en ese instante.',
      desc: 'La mayoría de herramientas de tiempo de pantalla son solo notificaciones fáciles de ignorar. Limitra App Block convierte tu decisión previa en una pausa firme.',
      loopLabel: 'Un ciclo conocido',
      t1Time: '22:14',
      t1Text: '“Miro cinco minutos y lo dejo.”',
      t2Time: '22:47',
      t2Text: 'Sigues deslizando la pantalla.',
      pauseTitle: 'El límite que estableciste está activo.'
    },
    steps: {
      kicker: 'Tres sencillos pasos',
      title: 'Menos negociación. Más vida.',
      subtitle: 'Configuración rápida para que la propia herramienta no sea otra distracción.',
      items: [
        { num: '01', title: 'Elige las distracciones', text: 'Selecciona las apps que más tiempo te roban.' },
        { num: '02', title: 'Pon un límite claro', text: 'Decide el tiempo diario con la mente despejada.' },
        { num: '03', title: 'Deja que la app proteja tu tiempo', text: 'Al acabarse el tiempo, tu decisión se convierte en una pausa real.' }
      ]
    },
    features: {
      kicker: 'Progreso sin agobios',
      title: 'Mira el patrón. Refuerza el hábito.',
      desc: 'Una cronología sencilla y resumen de constancia para entender tus hábitos sin complicarte.',
      checks: [
        'Comprueba cuándo se activaron los límites',
        'Revisa tu constancia en los últimos días',
        'Historial 100% privado en tu móvil'
      ],
      exploreBtn: 'Descubrir funciones'
    },
    privacy: {
      kicker: 'Privacidad por diseño',
      title: 'Tus hábitos digitales te pertenecen.',
      desc: 'La información se procesa localmente en tu Android. Diseñado para proteger tu atención, no para recopilar datos.',
      point1Title: 'En tu móvil',
      point1Desc: 'Procesamiento local',
      point2Title: 'Sin anuncios',
      point2Desc: 'Cero trampas de atención',
      point3Title: 'Minimalista',
      point3Desc: 'Solo lo que necesitas'
    },
    newsHome: {
      kicker: 'Prensa Global y Leyes',
      title: 'Los gobiernos actúan contra la adicción. ¿Y tú?',
      allNews: 'Ver todas las noticias',
      read: 'Leer'
    },
    guides: {
      kicker: 'Lee, comprende, transforma',
      title: 'Conocimiento para una relación más sana con la tecnología.',
      allGuides: 'Todas las guías'
    },
    finalCta: {
      kicker: 'Empieza hoy',
      title: 'Haz espacio a lo que de verdad importa.',
      desc: 'Pon hoy un límite claro y dedica tu atención a lo que merece la pena.',
      btn: 'Descargar Limitra App Block en Google Play',
      androidNote: 'Disponible para Android 8.0 o superior'
    },
    footer: {
      productTitle: 'Producto',
      exploreTitle: 'Prensa y Guías',
      legalTitle: 'Legal',
      rights: 'Todos los derechos reservados.',
      tagline: 'Herramienta de bloqueo y disciplina digital.'
    }
  },

  fr: {
    nav: {
      home: 'Accueil',
      howItWorks: 'Comment ça marche',
      news: 'Presse Mondiale',
      guides: 'Guides',
      faq: 'FAQ',
      getApp: 'Télécharger',
      language: 'Langue'
    },
    hero: {
      badge: 'Un rythme numérique plus apaisé',
      h1Line1: 'Décidez maintenant.',
      h1Line2: 'Limitra App Block vous protège ensuite.',
      lead: 'Fixez vos limites l’esprit serein. Quand la tentation arrive, Limitra App Block vous aide à rester fidèle à votre décision.',
      ctaPrimary: 'Disponible sur Google Play',
      ctaSecondary: 'Découvrir le fonctionnement',
      trustOnDevice: 'Données sur l’appareil',
      trustNoAds: 'Sans publicité',
      trustAndroid: 'Conçu pour Android'
    },
    principles: {
      title: 'Principes de Limitra App Block',
      p1Title: 'Clair',
      p1Desc: 'Des limites compréhensibles en un coup d’œil.',
      p2Title: 'Privé',
      p2Desc: 'Vos données d’utilisation restent sur votre téléphone.',
      p3Title: 'Serein',
      p3Desc: 'Pas de notifications inutiles, ni de culpabilisation.'
    },
    problem: {
      kicker: 'Le vrai problème',
      title: 'Vous savez déjà quand vous arrêter. Le plus dur est de le faire sur le moment.',
      desc: 'La plupart des outils envoient une simple notification que l’on balaie. Limitra App Block transforme votre décision en une véritable pause protectrice.',
      loopLabel: 'Un schéma familier',
      t1Time: '22:14',
      t1Text: '« Juste cinq minutes… »',
      t2Time: '22:47',
      t2Text: 'Vous faites toujours défiler.',
      pauseTitle: 'Votre limite programmée est maintenant active.'
    },
    steps: {
      kicker: 'Trois étapes simples',
      title: 'Moins de négociation. Plus de vie.',
      subtitle: 'Une configuration rapide pour que l’outil ne devienne pas une autre distraction.',
      items: [
        { num: '01', title: 'Sélectionnez les distractions', text: 'Choisissez les applications qui capturent votre attention.' },
        { num: '02', title: 'Définissez une limite claire', text: 'Fixez le temps quotidien approprié à tête reposée.' },
        { num: '03', title: 'Laissez l’application faire', text: 'Le temps écoulé, votre choix devient une pause inviolable.' }
      ]
    },
    features: {
      kicker: 'Progrès sans pression',
      title: 'Observez la tendance. Renforcez l’habitude.',
      desc: 'Un historique simple et un bilan de discipline pour suivre vos progrès sans tableaux complexes.',
      checks: [
        'Consultez l’heure d’activation des limites',
        'Évaluez votre régularité récente',
        'Stockage local et confidentiel'
      ],
      exploreBtn: 'Toutes les fonctionnalités'
    },
    privacy: {
      kicker: 'Confidentialité absolue',
      title: 'Vos habitudes numériques vous appartiennent.',
      desc: 'Traitement local sur votre téléphone Android. Conçu pour protéger votre attention, pas pour extraire vos données.',
      point1Title: 'Sur votre appareil',
      point1Desc: 'Traitement local',
      point2Title: 'Sans pub',
      point2Desc: 'Aucun piège à clic',
      point3Title: 'Minimaliste',
      point3Desc: 'Uniquement l’essentiel'
    },
    newsHome: {
      kicker: 'Presse Mondiale & Régulations',
      title: 'Les États légifèrent contre l’addiction aux écrans. Et vous ?',
      allNews: 'Toutes les actualités',
      read: 'Lire'
    },
    guides: {
      kicker: 'Lire, comprendre, changer',
      title: 'Des connaissances pour apaiser votre rapport aux écrans.',
      allGuides: 'Tous les guides'
    },
    finalCta: {
      kicker: 'Commencez aujourd’hui',
      title: 'Faites de la place à ce qui compte.',
      desc: 'Posez une limite ferme aujourd’hui et consacrez votre attention à l’essentiel.',
      btn: 'Télécharger Limitra App Block sur Google Play',
      androidNote: 'Pour Android 8.0 et supérieur'
    },
    footer: {
      productTitle: 'Produit',
      exploreTitle: 'Presse & Guides',
      legalTitle: 'Mentions Légales',
      rights: 'Tous droits réservés.',
      tagline: 'Outil de blocage d’applications et de discipline numérique.'
    }
  },

  de: {
    nav: {
      home: 'Startseite',
      howItWorks: 'Funktionsweise',
      news: 'Weltnachrichten',
      guides: 'Ratgeber',
      faq: 'FAQ',
      getApp: 'App holen',
      language: 'Sprache'
    },
    hero: {
      badge: 'Ein ruhigerer digitaler Rhythmus',
      h1Line1: 'Jetzt entscheiden.',
      h1Line2: 'Limitra App Block schützt es später.',
      lead: 'Setzen Sie klare Grenzen mit klarem Kopf. Wenn die Ablenkung droht, hilft Ihnen Limitra App Block, standhaft zu bleiben.',
      ctaPrimary: 'Auf Google Play laden',
      ctaSecondary: 'Funktionsweise ansehen',
      trustOnDevice: 'Daten nur auf dem Gerät',
      trustNoAds: 'Werbefrei',
      trustAndroid: 'Für Android'
    },
    principles: {
      title: 'Limitra App Block Prinzipien',
      p1Title: 'Klar',
      p1Desc: 'Grenzen, die man auf einen Blick versteht.',
      p2Title: 'Privat',
      p2Desc: 'Nutzungsdaten verlassen Ihr Gerät nicht.',
      p3Title: 'Ruhig',
      p3Desc: 'Keine lauten Dashboards, Werbung oder Schuldgefühle.'
    },
    problem: {
      kicker: 'Das eigentliche Problem',
      title: 'Sie wissen, wann Schluss sein sollte. Schwer ist es im Moment der Versuchung.',
      desc: 'Klassische Bildschirmzeit-Tools senden nur eine wegwischbare Warnung. Limitra App Block verwandelt Ihren Entschluss in eine echte, unumstößliche Pause.',
      loopLabel: 'Eine vertraute Schleife',
      t1Time: '22:14',
      t1Text: '„Nur kurz fünf Minuten…“',
      t2Time: '22:47',
      t2Text: 'Sie scrollen immer noch.',
      pauseTitle: 'Ihre gesetzte Grenze ist jetzt aktiv.'
    },
    steps: {
      kicker: 'Drei einfache Schritte',
      title: 'Weniger Verhandeln. Mehr Leben.',
      subtitle: 'Kurze Einrichtung, damit das Tool nicht selbst zur Ablenkung wird.',
      items: [
        { num: '01', title: 'Ablenkungen wählen', text: 'Wählen Sie die Apps aus, die am meisten Zeit stehlen.' },
        { num: '02', title: 'Klare Zeitgrenze setzen', text: 'Bestimmen Sie das tägliche Zeitkontingent in Ruhe.' },
        { num: '03', title: 'Limitra App Block schützen lassen', text: 'Ist die Zeit abgelaufen, tritt die Sperre verbindlich in Kraft.' }
      ]
    },
    features: {
      kicker: 'Fortschritt ohne Druck',
      title: 'Muster erkennen. Gewohnheit festigen.',
      desc: 'Eine schlichte Zeitleiste und Disziplin-Übersicht für nachhaltige Selbstbeherrschung.',
      checks: [
        'Sehen, wann Limits aktiviert wurden',
        'Beständigkeit der letzten Tage prüfen',
        'Verlauf bleibt vollständig lokal auf dem Gerät'
      ],
      exploreBtn: 'Alle Funktionen erkunden'
    },
    privacy: {
      kicker: 'Datenschutz by Design',
      title: 'Ihre digitalen Gewohnheiten gehören Ihnen.',
      desc: 'Nutzungsdaten werden ausschließlich lokal auf Ihrem Android-Gerät verarbeitet. Entwickelt für Ihren Fokus, nicht für Datensammler.',
      point1Title: 'Auf Ihrem Gerät',
      point1Desc: 'Lokale Datenverarbeitung',
      point2Title: 'Werbefrei',
      point2Desc: 'Keine Aufmerksamkeitsfallen',
      point3Title: 'Minimalistisch',
      point3Desc: 'Nur das Wesentliche'
    },
    newsHome: {
      kicker: 'Weltpresse & Gesetze',
      title: 'Staaten regulieren digitale Sucht. Handeln Sie auch?',
      allNews: 'Alle Weltnachrichten',
      read: 'Lesen'
    },
    guides: {
      kicker: 'Lesen, verstehen, handeln',
      title: 'Wissen für einen gesunden Umgang mit Technologie.',
      allGuides: 'Alle Ratgeber'
    },
    finalCta: {
      kicker: 'Heute starten',
      title: 'Platz schaffen für das Wesentliche.',
      desc: 'Setzen Sie heute eine klare Grenze und schenken Sie Ihre Aufmerksamkeit dem echten Leben.',
      btn: 'Limitra App Block bei Google Play laden',
      androidNote: 'Für Android 8.0 und neuer'
    },
    footer: {
      productTitle: 'Produkt',
      exploreTitle: 'Presse & Ratgeber',
      legalTitle: 'Rechtliches',
      rights: 'Alle Rechte vorbehalten.',
      tagline: 'App-Blocker und Werkzeug für digitale Disziplin.'
    }
  },

  pt: {
    nav: {
      home: 'Início',
      howItWorks: 'Como funciona',
      news: 'Imprensa Global',
      guides: 'Guias',
      faq: 'Perguntas',
      getApp: 'Baixar app',
      language: 'Idioma'
    },
    hero: {
      badge: 'Um ritmo digital mais tranquilo',
      h1Line1: 'Decida agora.',
      h1Line2: 'O Limitra App Block protege depois.',
      lead: 'Defina limites claros enquanto sua mente está calma. Quando a distração chegar, o Limitra App Block ajuda você a cumprir sua decisão.',
      ctaPrimary: 'Baixar no Google Play',
      ctaSecondary: 'Ver como funciona',
      trustOnDevice: 'Dados no aparelho',
      trustNoAds: 'Sem anúncios',
      trustAndroid: 'Para Android'
    },
    principles: {
      title: 'Princípios do Limitra App Block',
      p1Title: 'Claro',
      p1Desc: 'Limites fáceis de entender num piscar de olhos.',
      p2Title: 'Privado',
      p2Desc: 'Seus dados de uso ficam 100% no celular.',
      p3Title: 'Sereno',
      p3Desc: 'Sem gráficos poluídos, propagandas ou culpa.'
    },
    problem: {
      kicker: 'O real problema',
      title: 'Você já sabe a hora de parar. O difícil é parar naquele instante.',
      desc: 'A maioria dos apps de tempo de tela só envia avisos fáceis de ignorar. O Limitra App Block transforma sua decisão prévia em uma pausa firme.',
      loopLabel: 'Um ciclo conhecido',
      t1Time: '22:14',
      t1Text: '“Vou olhar só cinco minutinhos.”',
      t2Time: '22:47',
      t2Text: 'Você ainda está rolando o feed.',
      pauseTitle: 'Seu limite programado está ativo agora.'
    },
    steps: {
      kicker: 'Três passos simples',
      title: 'Menos negociação. Mais vida.',
      subtitle: 'Configuração rápida para não virar outra distração no seu dia.',
      items: [
        { num: '01', title: 'Escolha as distrações', text: 'Selecione os apps que mais roubam sua atenção.' },
        { num: '02', title: 'Defina o limite diário', text: 'Decida com a cabeça fria o tempo justo para cada app.' },
        { num: '03', title: 'Deixe o app proteger seu tempo', text: 'Ao estourar o tempo, seu limite vira um bloqueio real.' }
      ]
    },
    features: {
      kicker: 'Progresso sem pressão',
      title: 'Veja o padrão. Fortaleça o hábito.',
      desc: 'Linha do tempo limpa e resumo de disciplina para acompanhar sua evolução com clareza.',
      checks: [
        'Veja quando os bloqueios entraram em ação',
        'Acompanhe sua constância nos últimos dias',
        'Histórico 100% salvo localmente no aparelho'
      ],
      exploreBtn: 'Explorar recursos'
    },
    privacy: {
      kicker: 'Privacidade em primeiro lugar',
      title: 'Seus hábitos digitais pertencem a você.',
      desc: 'Processamento local no seu dispositivo Android. Feito para proteger sua atenção, não para lucrar com seus dados.',
      point1Title: 'No seu aparelho',
      point1Desc: 'Processamento local',
      point2Title: 'Sem anúncios',
      point2Desc: 'Zero armadilhas de atenção',
      point3Title: 'Minimalista',
      point3Desc: 'Apenas o que importa'
    },
    newsHome: {
      kicker: 'Imprensa Global e Leis',
      title: 'Governos de todo o mundo estão agindo. E você?',
      allNews: 'Todas as notícias',
      read: 'Ler'
    },
    guides: {
      kicker: 'Leia, entenda, transforme',
      title: 'Conhecimento para uma relação mais saudável com as telas.',
      allGuides: 'Todos os guias'
    },
    finalCta: {
      kicker: 'Comece hoje',
      title: 'Abra espaço para o que realmente importa.',
      desc: 'Estabeleça um limite firme hoje e devolva seu foco ao mundo real.',
      btn: 'Baixar Limitra App Block no Google Play',
      androidNote: 'Compatível com Android 8.0 ou superior'
    },
    footer: {
      productTitle: 'Produto',
      exploreTitle: 'Imprensa & Guias',
      legalTitle: 'Legal',
      rights: 'Todos os direitos reservados.',
      tagline: 'Bloqueador de apps e ferramenta de disciplina digital.'
    }
  },

  it: {
    nav: {
      home: 'Home',
      howItWorks: 'Come funziona',
      news: 'Stampa Mondiale',
      guides: 'Guide',
      faq: 'FAQ',
      getApp: 'Scarica l’app',
      language: 'Lingua'
    },
    hero: {
      badge: 'Un ritmo digitale più sereno',
      h1Line1: 'Decidi ora.',
      h1Line2: 'Limitra App Block protegge dopo.',
      lead: 'Imposta limiti chiari quando la mente è riposata. Quando arriva la distrazione, Limitra App Block ti aiuta a rispettare la tua decisione.',
      ctaPrimary: 'Scarica su Google Play',
      ctaSecondary: 'Scopri come funziona',
      trustOnDevice: 'Dati solo sul dispositivo',
      trustNoAds: 'Senza pubblicità',
      trustAndroid: 'Per Android'
    },
    principles: {
      title: 'Principi di Limitra App Block',
      p1Title: 'Chiaro',
      p1Desc: 'Limiti comprensibili a colpo d’occhio.',
      p2Title: 'Privato',
      p2Desc: 'I dati di utilizzo restano nel tuo telefono.',
      p3Title: 'Calmo',
      p3Desc: 'Niente notifiche insistenti o sensi di colpa.'
    },
    problem: {
      kicker: 'Il vero problema',
      title: 'Sai già quando dovresti fermarti. Il difficile è farlo in quell’istante.',
      desc: 'La maggior parte degli strumenti invia solo un avviso facile da ignorare. Limitra App Block trasforma la tua decisione in una vera pausa protettiva.',
      loopLabel: 'Un circolo vizioso',
      t1Time: '22:14',
      t1Text: '“Guardo solo cinque minuti.”',
      t2Time: '22:47',
      t2Text: 'Stai ancora scorrendo lo schermo.',
      pauseTitle: 'Il limite che hai impostato è ora attivo.'
    },
    steps: {
      kicker: 'Tre semplici passaggi',
      title: 'Meno trattative. Più vita reale.',
      subtitle: 'Configurazione immediata per non diventare un’ulteriore distrazione.',
      items: [
        { num: '01', title: 'Scegli le distrazioni', text: 'Seleziona le app che ti sottraggono più tempo.' },
        { num: '02', title: 'Fissa un limite netto', text: 'Decidi il tempo consentito a mente lucida.' },
        { num: '03', title: 'Lascia fare a Limitra App Block', text: 'Scaduto il tempo, la tua scelta diventa un blocco reale.' }
      ]
    },
    features: {
      kicker: 'Progresso senza ansia',
      title: 'Riconosci l’abitudine. Rafforza la disciplina.',
      desc: 'Una cronologia essenziale e un riepilogo per monitorare la costanza senza complicazioni.',
      checks: [
        'Vedi quando scattano i blocchi giornalieri',
        'Analizza la tua costanza nel tempo',
        'Dati salvati in modo sicuro e locale'
      ],
      exploreBtn: 'Tutte le funzionalità'
    },
    privacy: {
      kicker: 'Privacy by Design',
      title: 'Le tue abitudini digitali appartengono solo a te.',
      desc: 'Elaborazione locale sul tuo dispositivo Android. Progettato per proteggere la tua attenzione, non per raccogliere dati.',
      point1Title: 'Sul dispositivo',
      point1Desc: 'Elaborazione locale',
      point2Title: 'Senza pubblicità',
      point2Desc: 'Nessuna trappola commerciale',
      point3Title: 'Minimale',
      point3Desc: 'Solo l’essenziale'
    },
    newsHome: {
      kicker: 'Stampa Mondiale e Leggi',
      title: 'I governi mondiali prendono provvedimenti. E tu?',
      allNews: 'Tutte le notizie',
      read: 'Leggi'
    },
    guides: {
      kicker: 'Leggi, comprendi, cambia',
      title: 'Consapevolezza per un rapporto più sano con lo smartphone.',
      allGuides: 'Tutte le guide'
    },
    finalCta: {
      kicker: 'Inizia oggi',
      title: 'Fai spazio a ciò che conta davvero.',
      desc: 'Imposta oggi un limite chiaro e dedica la tua attenzione alle cose importanti.',
      btn: 'Scarica Limitra App Block su Google Play',
      androidNote: 'Per Android 8.0 e versioni successive'
    },
    footer: {
      productTitle: 'Prodotto',
      exploreTitle: 'Stampa & Guide',
      legalTitle: 'Note Legali',
      rights: 'Tutti i diritti riservati.',
      tagline: 'App blocker e strumento per la disciplina digitale.'
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      howItWorks: 'كيف يعمل؟',
      news: 'أخبار العالم',
      guides: 'الدلائل',
      faq: 'الأسئلة الشائعة',
      getApp: 'تحميل التطبيق',
      language: 'اللغة'
    },
    hero: {
      badge: 'إيقاع رقمي أكثر هدوءاً',
      h1Line1: 'اتخذ قرارك الآن.',
      h1Line2: 'ودع Limitra App Block يحميه لاحقاً.',
      lead: 'ضع حدودك وأنت بكامل تركيزك وهدوئك. وعندما تأتي المشتتات، يساعدك Limitra App Block على الالتزام بقرارك السابق.',
      ctaPrimary: 'تحميل من Google Play',
      ctaSecondary: 'اكتشف طريقة العمل',
      trustOnDevice: 'بياناتك داخل جهازك',
      trustNoAds: 'بدون إعلانات',
      trustAndroid: 'مخصص لأجهزة أندرويد'
    },
    principles: {
      title: 'مبادئ Limitra App Block',
      p1Title: 'واضح',
      p1Desc: 'حدود تفهمها من النظرة الأولى.',
      p2Title: 'خاص وآمن',
      p2Desc: 'بيانات استخدامك لا تغادر هاتفك أبداً.',
      p3Title: 'هادئ',
      p3Desc: 'لا لوحات معقدة ولا إعلانات ولا شعور بالذنب.'
    },
    problem: {
      kicker: 'المشكلة الحقيقية',
      title: 'أنت تعرف متى يجب أن تتوقف، لكن الصعوبة تكمن في التوقف في تلك اللحظة.',
      desc: 'معظم أدوات وقت الشاشة تكتفي بإرسال إشعار يمكنك تجاهله بسهولة. أما Limitra App Block فيحول قرارك العقلاني إلى استراحة حقيقية غير قابلة للمساومة.',
      loopLabel: 'دائرة مألوفة',
      t1Time: '22:14',
      t1Text: '“سأتصفح لخمس دقائق فقط.”',
      t2Time: '22:47',
      t2Text: 'ما زلت تقلب الشاشة بلا نهاية.',
      pauseTitle: 'الحد الذي وضعته أصبح نشطاً ومحمياً الآن.'
    },
    steps: {
      kicker: 'ثلاث خطوات بسيطة',
      title: 'مساومة أقل. حياة حقيقية أكثر.',
      subtitle: 'إعداد سريع حتى لا يتحول التطبيق نفسه إلى مشتت آخر.',
      items: [
        { num: '01', title: 'اختر التطبيقات المشتتة', text: 'حدد التطبيقات التي تستنزف وقتك وانتباهك.' },
        { num: '02', title: 'ضع حداً يومياً واضحاً', text: 'قرر الوقت المناسب لكل تطبيق بذهن صافٍ.' },
        { num: '03', title: 'دع التطبيق يحمي وقتك', text: 'عند انتهاء الوقت، يتحول قرارك إلى حاجز حقيقي.' }
      ]
    },
    features: {
      kicker: 'تقدم بلا ضغوط',
      title: 'راقب النمط. عزز العادة.',
      desc: 'سجل زمني بسيط وملخص للالتزام يساعدك على فهم عاداتك دون تحويل حياتك إلى جداول بيانات.',
      checks: [
        'معرفة متى تم تفعيل قيود التطبيقات',
        'مراجعة مدى ثباتك والتزامك في الأيام السابقة',
        'بيانات الاستخدام محفوظة بالكامل على هاتفك'
      ],
      exploreBtn: 'استكشف كافة المزايا'
    },
    privacy: {
      kicker: 'الخصوصية أولاً',
      title: 'عاداتك الرقمية ملك لك وحدك.',
      desc: 'تتم معالجة البيانات محلياً داخل جهاز أندرويد. صُمم التطبيق لحماية انتباهك وليس لتحويله لمصدر بيانات.',
      point1Title: 'داخل جهازك',
      point1Desc: 'معالجة محلية',
      point2Title: 'بدون إعلانات',
      point2Desc: 'خالٍ من فخاخ الانتباه',
      point3Title: 'بسيط وهادف',
      point3Desc: 'فقط ما تحتاجه حقاً'
    },
    newsHome: {
      kicker: 'الصحافة العالمية والقوانين',
      title: 'حكومات العالم تتحرك لمواجهة الإدمان الرقمي. ماذا عنك؟',
      allNews: 'كل الأخبار العالمية',
      read: 'اقرأ المزيد'
    },
    guides: {
      kicker: 'اقرأ، افهم، غيّر',
      title: 'معرفة علمية لبناء علاقة أكثر توازناً مع التكنولوجيا.',
      allGuides: 'جميع الدلائل'
    },
    finalCta: {
      kicker: 'ابدأ اليوم',
      title: 'افسح المجال للأمور الأكثر أهمية في حياتك.',
      desc: 'ضع حداً واضحاً اليوم واستعد تركيزك ووقتك الثمين.',
      btn: 'تحميل Limitra App Block من Google Play',
      androidNote: 'متاح لأجهزة أندرويد 8.0 فما فوق'
    },
    footer: {
      productTitle: 'المنتج',
      exploreTitle: 'الأخبار والدلائل',
      legalTitle: 'الشروط القانونية',
      rights: 'جميع الحقوق محفوظة.',
      tagline: 'أداة حظر التطبيقات والانضباط الرقمي.'
    }
  },

  id: {
    nav: {
      home: 'Beranda',
      howItWorks: 'Cara Kerja',
      news: 'Berita Global',
      guides: 'Panduan',
      faq: 'Tanya Jawab',
      getApp: 'Unduh Aplikasi',
      language: 'Bahasa'
    },
    hero: {
      badge: 'Ritme digital yang lebih tenang',
      h1Line1: 'Putuskan sekarang.',
      h1Line2: 'Limitra App Block menjaganya nanti.',
      lead: 'Tetapkan batasan saat pikiranmu tenang. Ketika godaan scrolling datang, Limitra App Block membantumu setia pada keputusan yang telah kamu buat.',
      ctaPrimary: 'Unduh di Google Play',
      ctaSecondary: 'Lihat cara kerjanya',
      trustOnDevice: 'Data di perangkat',
      trustNoAds: 'Bebas iklan',
      trustAndroid: 'Khusus Android'
    },
    principles: {
      title: 'Prinsip Limitra App Block',
      p1Title: 'Jelas',
      p1Desc: 'Batasan yang mudah dipahami seketika.',
      p2Title: 'Privat',
      p2Desc: 'Data penggunaan sensitif tetap tersimpan di ponselmu.',
      p3Title: 'Tenang',
      p3Desc: 'Tanpa grafik rumit, iklan, atau rasa bersalah.'
    },
    problem: {
      kicker: 'Masalah sebenarnya',
      title: 'Kamu sudah tahu kapan harus berhenti. Yang sulit adalah berhenti di saat itu juga.',
      desc: 'Kebanyakan aplikasi batas waktu hanya memberi notifikasi yang mudah diabaikan. Limitra App Block mengubah keputusanmu menjadi jeda nyata yang tegas.',
      loopLabel: 'Pola yang tak asing',
      t1Time: '22:14',
      t1Text: '“Cuma mau lihat 5 menit saja.”',
      t2Time: '22:47',
      t2Text: 'Kamu masih terus scrolling.',
      pauseTitle: 'Batasan yang kamu pasang sekarang aktif.'
    },
    steps: {
      kicker: 'Tiga langkah mudah',
      title: 'Kurangi kompromi. Perbanyak hidup nyata.',
      subtitle: 'Pengaturan singkat agar alat ini tidak menjadi gangguan baru.',
      items: [
        { num: '01', title: 'Pilih distraksi', text: 'Tentukan aplikasi yang paling sering mencuri perhatianmu.' },
        { num: '02', title: 'Beri batas tegas', text: 'Tentukan durasi harian yang wajar saat pikiran jernih.' },
        { num: '03', title: 'Biarkan aplikasi melindungi waktumu', text: 'Saat waktu habis, akses otomatis dikunci hingga esok.' }
      ]
    },
    features: {
      kicker: 'Kemajuan tanpa tekanan',
      title: 'Lihat polanya. Perkuat kebiasaannya.',
      desc: 'Linimasa ringkas dan ringkasan disiplin harian untuk melihat konsistensimu tanpa repot.',
      checks: [
        'Ketahui kapan batas aplikasi mulai aktif',
        'Pantau konsistensi beberapa hari terakhir',
        'Data 100% tersimpan lokal di perangkat'
      ],
      exploreBtn: 'Jelajahi semua fitur'
    },
    privacy: {
      kicker: 'Privasi sejak awal',
      title: 'Kebiasaan digitalmu adalah milikmu seutuhnya.',
      desc: 'Semua info penggunaan diproses langsung di ponsel Android milikmu. Dirancang untuk melindungi fokusmu, bukan menjual datamu.',
      point1Title: 'Di perangkatmu',
      point1Desc: 'Pemrosesan lokal',
      point2Title: 'Tanpa iklan',
      point2Desc: 'Bebas jebakan atensi',
      point3Title: 'Minimalis',
      point3Desc: 'Hanya yang kamu butuhkan'
    },
    newsHome: {
      kicker: 'Pers Global & Regulasi',
      title: 'Pemerintah dunia mulai bertindak. Bagaimana denganmu?',
      allNews: 'Semua berita global',
      read: 'Baca'
    },
    guides: {
      kicker: 'Baca, pahami, ubah',
      title: 'Wawasan ilmiah untuk hubungan yang lebih sehat dengan gawai.',
      allGuides: 'Semua panduan'
    },
    finalCta: {
      kicker: 'Mulai hari ini',
      title: 'Beri ruang untuk hal yang benar-benar bermakna.',
      desc: 'Pasang satu batasan tegas hari ini dan alihkan fokusmu ke kehidupan nyata.',
      btn: 'Unduh Limitra App Block di Google Play',
      androidNote: 'Untuk Android 8.0 ke atas'
    },
    footer: {
      productTitle: 'Produk',
      exploreTitle: 'Berita & Panduan',
      legalTitle: 'Legalitas',
      rights: 'Hak cipta dilindungi undang-undang.',
      tagline: 'Aplikasi pemblokir dan pembangun disiplin digital.'
    }
  },

  fil: {
    nav: {
      home: 'Tahanan',
      howItWorks: 'Paano Gumagana',
      news: 'Balitang Global',
      guides: 'Mga Gabay',
      faq: 'Mga Tanong',
      getApp: 'I-download',
      language: 'Wika'
    },
    hero: {
      badge: 'Mas kalmadong ritmong digital',
      h1Line1: 'Magdesisyon ngayon.',
      h1Line2: 'Poprotektahan ito ng Limitra App Block mamaya.',
      lead: 'Magtakda ng malinaw na limitasyon habang kalmado ang iyong isip. Kapag dumating ang tukso sa pag-scroll, tutulungan ka ng Limitra App Block na manindigan.',
      ctaPrimary: 'Kuhanin sa Google Play',
      ctaSecondary: 'Alamin kung paano gumagana',
      trustOnDevice: 'Lokal sa device ang data',
      trustNoAds: 'Walang ads',
      trustAndroid: 'Para sa Android'
    },
    principles: {
      title: 'Mga Prinsipyo ng Limitra App Block',
      p1Title: 'Malinaw',
      p1Desc: 'Mga limitasyong maiintindihan sa isang tingin.',
      p2Title: 'Pribado',
      p2Desc: 'Hindi lumalabas sa iyong telepono ang data mo.',
      p3Title: 'Tahimik',
      p3Desc: 'Walang magugulong dashboard, ads, o panunumbat.'
    },
    problem: {
      kicker: 'Ang totoong problema',
      title: 'Alam mo na kung kailan dapat huminto. Ang mahirap ay ang paghinto sa mismong sandaling iyon.',
      desc: 'Karamihan sa screen time tools ay nagbibigay lang ng paalala na madaling balewalain. Ginagawang tunay na harang ng Limitra App Block ang iyong naunang desisyon.',
      loopLabel: 'Pamilyar na paulit-ulit na ikot',
      t1Time: '22:14',
      t1Text: '“Limang minuto lang ako titingin.”',
      t2Time: '22:47',
      t2Text: 'Nagso-scroll ka pa rin.',
      pauseTitle: 'Aktibo na ngayon ang itinakda mong limitasyon.'
    },
    steps: {
      kicker: 'Tatlong simpleng hakbang',
      title: 'Bawas pakikipagtawaran. Mas maraming totoong buhay.',
      subtitle: 'Mabilis na setup para hindi maging panibagong abala ang mismong app.',
      items: [
        { num: '01', title: 'Piliin ang mga nakakaabala', text: 'Piliin ang apps na madalas umagaw ng iyong pansin.' },
        { num: '02', title: 'Maglagay ng malinaw na limitasyon', text: 'Magtakda ng tamang oras habang malinaw ang isipan.' },
        { num: '03', title: 'Hayaang protektahan ng app ang oras mo', text: 'Kapag ubos na ang oras, magiging totoong harang ang iyong desisyon.' }
      ]
    },
    features: {
      kicker: 'Pag-unlad nang walang pressure',
      title: 'Tingnan ang pattern. Palakasin ang disiplina.',
      desc: 'Simpleng timeline at buod ng disiplina para maunawaan ang iyong progreso nang walang komplikasyon.',
      checks: [
        'Alamin kung kailan naging aktibo ang mga limitasyon',
        'Suriin ang iyong konsistensi sa nakalipas na mga araw',
        'Lokal na nakatago sa device ang buong kasaysayan'
      ],
      exploreBtn: 'Tingnan ang lahat ng feature'
    },
    privacy: {
      kicker: 'Protektado ang privacy mo',
      title: 'Sa iyo lamang ang iyong mga digital habit.',
      desc: 'Pinoproseso sa iyong Android device ang impormasyon. Ginawa ito para protektahan ang atensyon mo, hindi para mangalap ng data.',
      point1Title: 'Sa iyong device',
      point1Desc: 'Lokal na pagproseso',
      point2Title: 'Walang ads',
      point2Desc: 'Walang patibong sa atensyon',
      point3Title: 'Minimalist',
      point3Desc: 'Tanging kailangan mo lang'
    },
    newsHome: {
      kicker: 'Pandaigdigang Balita at Batas',
      title: 'Kumikilos na ang mga bansa laban sa screen addiction. Ikaw ba?',
      allNews: 'Lahat ng pandaigdigang balita',
      read: 'Basahin'
    },
    guides: {
      kicker: 'Magbasa, umunawa, magbago',
      title: 'Kaalaman para sa mas balanseng pakikitungo sa teknolohiya.',
      allGuides: 'Lahat ng gabay'
    },
    finalCta: {
      kicker: 'Magsimula ngayon',
      title: 'Magbigay-daan sa mga bagay na talagang mahalaga.',
      desc: 'Magtakda ng isang malinaw na hangganan ngayon at ibaling ang iyong pansin sa totoong buhay.',
      btn: 'I-download ang Limitra App Block sa Google Play',
      androidNote: 'Para sa Android 8.0 pataas'
    },
    footer: {
      productTitle: 'Produkto',
      exploreTitle: 'Balita at Gabay',
      legalTitle: 'Legal',
      rights: 'Lahat ng karapatan ay nakalaan.',
      tagline: 'App blocker at digital discipline tool para sa Android.'
    }
  },

  th: {
    nav: {
      home: 'หน้าแรก',
      howItWorks: 'วิธีการทำงาน',
      news: 'ข่าวรอบโลก',
      guides: 'คู่มือ',
      faq: 'คำถามที่พบบ่อย',
      getApp: 'ดาวน์โหลดแอป',
      language: 'ภาษา'
    },
    hero: {
      badge: 'จังหวะชีวิตดิจิทัลที่สงบขึ้น',
      h1Line1: 'ตัดสินใจตอนนี้',
      h1Line2: 'ให้ Limitra App Block ช่วยปกป้องเวลาของคุณ',
      lead: 'กำหนดขีดจำกัดอย่างชัดเจนในเวลาที่คุณมีสติ เมื่อความเพลิดเพลินเริ่มรบกวน Limitra App Block จะช่วยให้คุณรักษาคำมั่นสัญญาที่ตั้งไว้',
      ctaPrimary: 'ดาวน์โหลดบน Google Play',
      ctaSecondary: 'ดูวิธีการทำงาน',
      trustOnDevice: 'ข้อมูลประมวลผลบนเครื่อง',
      trustNoAds: 'ไม่มีโฆษณา',
      trustAndroid: 'สำหรับ Android'
    },
    principles: {
      title: 'หลักการของ Limitra App Block',
      p1Title: 'ชัดเจน',
      p1Desc: 'ขีดจำกัดที่เข้าใจง่ายในพริบตาเดียว',
      p2Title: 'เป็นส่วนตัว',
      p2Desc: 'ข้อมูลการใช้งานจะอยู่ในมือถือของคุณเท่านั้น',
      p3Title: 'สงบเงียบ',
      p3Desc: 'ไม่มีหน้าจอรก ไม่มีการแจ้งเตือนชวนผิดหวัง'
    },
    problem: {
      kicker: 'ปัญหาที่แท้จริง',
      title: 'คุณรู้ตัวอยู่แล้วว่าควรหยุดเมื่อไหร่ แต่สิ่งที่ยากคือการหยุดในวินาทีนั้น',
      desc: 'เครื่องมือจำกัดเวลาหน้าจอส่วนใหญ่แค่ส่งการแจ้งเตือนที่ปัดทิ้งได้ง่าย แต่ Limitra App Block จะเปลี่ยนความตั้งใจของคุณให้เป็นการหยุดพักที่แท้จริงและเด็ดขาด',
      loopLabel: 'วงจรที่คุ้นเคย',
      t1Time: '22:14',
      t1Text: '“ขอเปิดดูแค่ 5 นาที…”',
      t2Time: '22:47',
      t2Text: 'คุณยังคงเลื่อนหน้าจอไม่หยุด',
      pauseTitle: 'ขีดจำกัดที่คุณตั้งไว้เริ่มทำงานแล้ว'
    },
    steps: {
      kicker: 'สามขั้นตอนง่ายๆ',
      title: 'ต่อรองกับตัวเองน้อยลง ใช้ชีวิตจริงมากขึ้น',
      subtitle: 'ตั้งค่าง่ายและรวดเร็ว เพื่อไม่ให้ตัวแอปกลายเป็นสิ่งรบกวนใหม่',
      items: [
        { num: '01', title: 'เลือกแอปที่ดึงดูดใจ', text: 'เลือกแอปที่ขโมยสมาธิของคุณไปบ่อยที่สุด' },
        { num: '02', title: 'กำหนดเวลาอย่างชัดเจน', text: 'ตัดสินใจว่าแต่ละแอปควรได้เวลาเท่าไหร่ในขณะที่ใจสงบ' },
        { num: '03', title: 'ให้ Limitra App Block ดูแลเวลา', text: 'เมื่อหมดเวลา ข้อตกลงของคุณจะกลายเป็นการพักจริง' }
      ]
    },
    features: {
      kicker: 'ก้าวหน้าโดยไม่กดดัน',
      title: 'มองเห็นรูปแบบ เสริมสร้างวินัย',
      desc: 'ไทม์ไลน์ที่เรียบง่ายและสรุปความสม่ำเสมอช่วยให้คุณเข้าใจพฤติกรรมของตัวเองโดยไม่ต้องปวดหัวกับตารางซับซ้อน',
      checks: [
        'ดูเวลาที่การจำกัดเริ่มทำงานในแต่ละวัน',
        'ทบทวนความสม่ำเสมอในการรักษาวินัย',
        'ประวัติทั้งหมดจัดเก็บเฉพาะในเครื่องของคุณ'
      ],
      exploreBtn: 'สำรวจฟีเจอร์ทั้งหมด'
    },
    privacy: {
      kicker: 'ความเป็นส่วนตัวตั้งแต่การออกแบบ',
      title: 'พฤติกรรมดิจิทัลเป็นของคุณคนเดียว',
      desc: 'ข้อมูลการใช้งานจะถูกประมวลผลบนเครื่อง Android ของคุณ แอปถูกออกแบบมาเพื่อปกป้องสมาธิ ไม่ใช่เพื่อนำข้อมูลไปขาย',
      point1Title: 'บนอุปกรณ์ของคุณ',
      point1Desc: 'ประมวลผลเฉพาะที่',
      point2Title: 'ไร้โฆษณา',
      point2Desc: 'ไม่มีกับดักดึงดูดความสนใจ',
      point3Title: 'เรียบง่าย',
      point3Desc: 'มีเฉพาะสิ่งที่คุณต้องการ'
    },
    newsHome: {
      kicker: 'ข่าวสารและกฎหมายระดับโลก',
      title: 'รัฐบาลทั่วโลกเริ่มออกกฎหมายจัดการ แล้วคุณล่ะ?',
      allNews: 'ข่าวสารทั่วโลกทั้งหมด',
      read: 'อ่านต่อ'
    },
    guides: {
      kicker: 'อ่าน เข้าใจ เปลี่ยนแปลง',
      title: 'ความรู้เพื่อสร้างความสัมพันธ์ที่สงบสุขกับเทคโนโลยี',
      allGuides: 'คู่มือทั้งหมด'
    },
    finalCta: {
      kicker: 'เริ่มต้นวันนี้',
      title: 'เปิดพื้นที่ให้กับสิ่งที่สำคัญอย่างแท้จริง',
      desc: 'ตั้งขีดจำกัดที่ชัดเจนตั้งแต่วันนี้ และคืนความสนใจของคุณให้กับชีวิตจริง',
      btn: 'ดาวน์โหลด Limitra App Block บน Google Play',
      androidNote: 'สำหรับ Android 8.0 ขึ้นไป'
    },
    footer: {
      productTitle: 'ผลิตภัณฑ์',
      exploreTitle: 'ข่าวสารและคู่มือ',
      legalTitle: 'ข้อกำหนดทางกฎหมาย',
      rights: 'สงวนลิขสิทธิ์ทั้งหมด',
      tagline: 'แอปบล็อกเกอร์และเครื่องมือฝึกวินัยดิจิทัล'
    }
  }
};
