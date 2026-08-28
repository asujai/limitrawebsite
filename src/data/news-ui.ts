import type { SupportedLang } from './translations';

export interface NewsUIStrings {
  index: {
    pageTitle: string;
    pageDesc: string;
    backHome: string;
    badge: string;
    title: string;
    subtitle: string;
    allCategory: string;
    sourceLabel: string;
    readFullStory: string;
    read: string;
    readTimeSuffix: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  article: {
    titleSuffix: string;
    backToNews: string;
    sourceLabel: string;
    viewOriginalSource: string;
    readTimeSuffix: string;
    relatedTags: string;
    solutionTitle: string;
    solutionDesc: string;
    solutionButton: string;
    relatedTitle: string;
  };
}

export const newsUI: Record<SupportedLang, NewsUIStrings> = {
  tr: {
    index: {
      pageTitle: 'Dünya Basınından Haberler | Limitra App Block',
      pageDesc: 'Ekran bağımlılığı, sosyal medya zararları, devletlerin getirdiği yasal düzenlemeler ve dünya basınından en güncel gelişmeler.',
      backHome: '← Ana Sayfa',
      badge: 'Dünya Basını & Gündem',
      title: 'Ekran ve Sosyal Medya Bağımlılığına Karşı Küresel Gelişmeler',
      subtitle: 'Dünyanın dört bir yanından hükümetlerin aldığı önlemler, meclis kararları, bilimsel araştırmalar ve uzman raporları. Ekran süresi ve dijital bağımlılıkla mücadelede küresel gündemi günlük olarak takip edin.',
      allCategory: 'Tümü',
      sourceLabel: 'Kaynak:',
      readFullStory: 'Detayları Oku',
      read: 'Oku',
      readTimeSuffix: 'okuma',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Dünya Farkına Varırken, Siz de Kendi Sınırınızı Çizin',
      ctaDesc: 'Devletler ve kurumlar bağımlılık yaratan uygulamalara karşı yasalar çıkarırken; siz de Limitra App Block ile gün içindeki dikkat dağıtıcı uygulamaları sınırlayabilir, iradenizi koruyabilirsiniz.',
      ctaButton: 'Google Play’den İndir ↗'
    },
    article: {
      titleSuffix: 'Limitra App Block Haberler',
      backToNews: '← Tüm Haberler ve Dünya Basını',
      sourceLabel: 'Haber Kaynağı:',
      viewOriginalSource: '(Orijinal Kaynağı Görüntüle ↗)',
      readTimeSuffix: 'okuma',
      relatedTags: 'İlgili Etiketler:',
      solutionTitle: 'Kendi Dijital Sınırınızı Bugünden Çizin',
      solutionDesc: 'Dünya genelinde uzmanlar ve devletler ekran bağımlılığına karşı kesin tedbirler alıyor. Limitra App Block ile siz de telefonunuzdaki dikkat dağıtıcı sosyal medya ve eğlence uygulamalarına net sınırlar koyabilir, iradenizi güçlendirebilirsiniz.',
      solutionButton: 'Google Play’den İndir ↗',
      relatedTitle: 'Dünya Basınından Diğer Gelişmeler'
    }
  },
  en: {
    index: {
      pageTitle: 'Global Press & Screen Time News | Limitra App Block',
      pageDesc: 'Stay updated with global news on screen addiction, social media harms, government regulations, and scientific research.',
      backHome: '← Home',
      badge: 'Global Press & Regulations',
      title: 'Global Actions Against Screen & Social Media Addiction',
      subtitle: 'Government policies, statutory age limits, neuroscience breakthroughs, and school smartphone bans from around the globe. Follow international developments daily.',
      allCategory: 'All',
      sourceLabel: 'Source:',
      readFullStory: 'Read Full Story',
      read: 'Read',
      readTimeSuffix: 'read',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'As the World Acts, Take Charge of Your Own Digital Boundaries',
      ctaDesc: 'While governments enact laws against algorithmic captures, protect your attention today with Limitra App Block. Set firm, local boundaries on distracting apps.',
      ctaButton: 'Get on Google Play ↗'
    },
    article: {
      titleSuffix: 'Limitra App Block News',
      backToNews: '← All News & Global Press',
      sourceLabel: 'Source:',
      viewOriginalSource: '(View Original Source ↗)',
      readTimeSuffix: 'read',
      relatedTags: 'Related Tags:',
      solutionTitle: 'Set Your Own Digital Boundaries Today',
      solutionDesc: 'As international authorities enact strict measures against screen addiction, empower yourself with Limitra App Block. Draw firm, distraction-free boundaries for social media and rebuild your focus.',
      solutionButton: 'Get on Google Play ↗',
      relatedTitle: 'More from Global Press'
    }
  },
  es: {
    index: {
      pageTitle: 'Prensa mundial y noticias sobre adicción a pantallas | Limitra App Block',
      pageDesc: 'Manténgase al día con las noticias globales sobre adicción a pantallas, daños de redes sociales, regulaciones gubernamentales e investigaciones científicas.',
      backHome: '← Inicio',
      badge: 'Prensa mundial y regulaciones',
      title: 'Acciones globales contra la adicción a pantallas y redes sociales',
      subtitle: 'Políticas gubernamentales, límites de edad legales, avances en neurociencia y prohibiciones de teléfonos en escuelas de todo el mundo.',
      allCategory: 'Todos',
      sourceLabel: 'Fuente:',
      readFullStory: 'Leer historia completa',
      read: 'Leer',
      readTimeSuffix: 'de lectura',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Mientras el mundo reacciona, toma el control de tus propios límites digitales',
      ctaDesc: 'Mientras los gobiernos promulgan leyes contra las capturas algorítmicas, protege tu atención hoy con Limitra App Block. Establece límites firmes en aplicaciones que distraen.',
      ctaButton: 'Descargar en Google Play ↗'
    },
    article: {
      titleSuffix: 'Noticias de Limitra App Block',
      backToNews: '← Todas las noticias y prensa mundial',
      sourceLabel: 'Fuente de noticias:',
      viewOriginalSource: '(Ver fuente original ↗)',
      readTimeSuffix: 'de lectura',
      relatedTags: 'Etiquetas relacionadas:',
      solutionTitle: 'Establece tus propios límites digitales hoy',
      solutionDesc: 'A medida que las autoridades internacionales toman medidas estrictas contra la adicción a las pantallas, toma el control con Limitra App Block. Traza límites firmes para las redes sociales y recupera tu enfoque.',
      solutionButton: 'Descargar en Google Play ↗',
      relatedTitle: 'Más noticias de la prensa mundial'
    }
  },
  fr: {
    index: {
      pageTitle: 'Presse mondiale et actualités sur le temps d’écran | Limitra App Block',
      pageDesc: 'Suivez les actualités mondiales sur l’addiction aux écrans, les méfaits des réseaux sociaux, les réglementations gouvernementales et la recherche scientifique.',
      backHome: '← Accueil',
      badge: 'Presse mondiale & réglementations',
      title: 'Actions mondiales contre l’addiction aux écrans et aux réseaux sociaux',
      subtitle: 'Politiques publiques, limites d’âge légales, découvertes en neurosciences et interdictions de smartphones à l’école à travers le monde.',
      allCategory: 'Tous',
      sourceLabel: 'Source :',
      readFullStory: 'Lire l’article complet',
      read: 'Lire',
      readTimeSuffix: 'de lecture',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Alors que le monde réagit, fixez vos propres limites numériques',
      ctaDesc: 'Pendant que les États légifèrent contre la captation de l’attention, protégez votre concentration avec Limitra App Block. Posez des limites strictes sur vos applications.',
      ctaButton: 'Télécharger sur Google Play ↗'
    },
    article: {
      titleSuffix: 'Actualités Limitra App Block',
      backToNews: '← Toutes les actualités et presse mondiale',
      sourceLabel: 'Source de l’actualité :',
      viewOriginalSource: '(Voir la source originale ↗)',
      readTimeSuffix: 'de lecture',
      relatedTags: 'Tags associés :',
      solutionTitle: 'Fixez vos propres limites numériques dès aujourd’hui',
      solutionDesc: 'Alors que les experts et gouvernements renforcent les règles contre l’addiction aux écrans, reprenez le contrôle avec Limitra App Block. Bloquez les distractions et retrouvez votre clarté mentale.',
      solutionButton: 'Télécharger sur Google Play ↗',
      relatedTitle: 'Autres actualités de la presse mondiale'
    }
  },
  de: {
    index: {
      pageTitle: 'Weltpresse & Bildschirmzeit-Nachrichten | Limitra App Block',
      pageDesc: 'Bleiben Sie informiert über weltweite Nachrichten zu Bildschirmsucht, Gefahren sozialer Medien, Gesetzesinitiativen und wissenschaftlicher Forschung.',
      backHome: '← Startseite',
      badge: 'Weltpresse & Regulierungen',
      title: 'Globale Maßnahmen gegen Bildschirm- und Social-Media-Sucht',
      subtitle: 'Regierungsrichtlinien, gesetzliche Altersgrenzen, neurowissenschaftliche Erkenntnisse und Smartphone-Verbote an Schulen weltweit.',
      allCategory: 'Alle',
      sourceLabel: 'Quelle:',
      readFullStory: 'Vollständigen Bericht lesen',
      read: 'Lesen',
      readTimeSuffix: 'Lesezeit',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Während die Welt handelt, setzen Sie Ihre eigenen digitalen Grenzen',
      ctaDesc: 'Während Regierungen Gesetze gegen manipulative Algorithmen erlassen, schützen Sie Ihren Fokus heute mit Limitra App Block. Setzen Sie feste Grenzen für ablenkende Apps.',
      ctaButton: 'Bei Google Play laden ↗'
    },
    article: {
      titleSuffix: 'Limitra App Block Nachrichten',
      backToNews: '← Alle Nachrichten & Weltpresse',
      sourceLabel: 'Nachrichtenquelle:',
      viewOriginalSource: '(Originalquelle ansehen ↗)',
      readTimeSuffix: 'Lesezeit',
      relatedTags: 'Verwandte Schlagwörter:',
      solutionTitle: 'Setzen Sie noch heute Ihre eigenen digitalen Grenzen',
      solutionDesc: 'Da Behörden weltweit strenge Maßnahmen gegen Bildschirmsucht ergreifen, stärken Sie Ihre Selbstdisziplin mit Limitra App Block. Definieren Sie klare Grenzen für soziale Medien.',
      solutionButton: 'Bei Google Play laden ↗',
      relatedTitle: 'Weitere Berichte aus der Weltpresse'
    }
  },
  pt: {
    index: {
      pageTitle: 'Imprensa global e notícias sobre tempo de tela | Limitra App Block',
      pageDesc: 'Fique atualizado com notícias globais sobre dependência de telas, danos das redes sociais, regulamentações governamentais e pesquisas científicas.',
      backHome: '← Início',
      badge: 'Imprensa global & regulações',
      title: 'Ações globais contra a dependência de telas e redes sociais',
      subtitle: 'Políticas governamentais, limites legais de idade, avanços em neurociência e proibições de celulares em escolas pelo mundo.',
      allCategory: 'Todos',
      sourceLabel: 'Fonte:',
      readFullStory: 'Ler história completa',
      read: 'Ler',
      readTimeSuffix: 'de leitura',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Enquanto o mundo reage, assuma o controle dos seus limites digitais',
      ctaDesc: 'Enquanto governos aprovam leis contra mecanismos viciantes, proteja sua atenção hoje com Limitra App Block. Defina limites firmes em apps que distraem.',
      ctaButton: 'Baixar no Google Play ↗'
    },
    article: {
      titleSuffix: 'Notícias Limitra App Block',
      backToNews: '← Todas as notícias e imprensa global',
      sourceLabel: 'Fonte da notícia:',
      viewOriginalSource: '(Ver fonte original ↗)',
      readTimeSuffix: 'de leitura',
      relatedTags: 'Tags relacionados:',
      solutionTitle: 'Defina seus próprios limites digitais hoje',
      solutionDesc: 'À medida que autoridades internacionais estabelecem regras rígidas contra o vício em telas, empodere-se com Limitra App Block. Estabeleça limites sólidos e recupere seu foco.',
      solutionButton: 'Baixar no Google Play ↗',
      relatedTitle: 'Mais notícias da imprensa global'
    }
  },
  it: {
    index: {
      pageTitle: 'Stampa globale e notizie sul tempo di utilizzo | Limitra App Block',
      pageDesc: 'Rimani aggiornato con le notizie globali sulla dipendenza da schermi, i danni dei social media, le normative governative e la ricerca scientifica.',
      backHome: '← Home',
      badge: 'Stampa globale e regolamentazioni',
      title: 'Azioni globali contro la dipendenza da schermi e social media',
      subtitle: 'Politiche governative, limiti di età legali, scoperte neuroscientifiche e divieti di smartphone nelle scuole di tutto il mondo.',
      allCategory: 'Tutti',
      sourceLabel: 'Fonte:',
      readFullStory: 'Leggi l’articolo completo',
      read: 'Leggi',
      readTimeSuffix: 'di lettura',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Mentre il mondo si muove, stabilisci i tuoi limiti digitali',
      ctaDesc: 'Mentre i governi emanano leggi contro le manipolazioni algoritmiche, proteggi la tua attenzione oggi con Limitra App Block. Imposta limiti rigorosi sulle app che ti distraggono.',
      ctaButton: 'Scarica su Google Play ↗'
    },
    article: {
      titleSuffix: 'Notizie Limitra App Block',
      backToNews: '← Tutte le notizie e stampa globale',
      sourceLabel: 'Fonte della notizia:',
      viewOriginalSource: '(Visualizza fonte originale ↗)',
      readTimeSuffix: 'di lettura',
      relatedTags: 'Tag correlati:',
      solutionTitle: 'Imposta i tuoi limiti digitali oggi stesso',
      solutionDesc: 'Mentre esperti e governi adottano misure decise contro la dipendenza da schermi, prendi in mano il tuo tempo con Limitra App Block. Metti limiti chiari ai social e ritrova la concentrazione.',
      solutionButton: 'Scarica su Google Play ↗',
      relatedTitle: 'Altre notizie dalla stampa globale'
    }
  },
  ar: {
    index: {
      pageTitle: 'الصحافة العالمية وأخبار وقت الشاشة | Limitra App Block',
      pageDesc: 'ابقَ على اطلاع بأحدث الأخبار العالمية حول إدمان الشاشات، وأضرار وسائل التواصل الاجتماعي، واللوائح الحكومية، والأبحاث العلمية.',
      backHome: '← الرئيسية',
      badge: 'الصحافة العالمية والتنظيمات',
      title: 'تحركات عالمية ضد إدمان الشاشات ووسائل التواصل الاجتماعي',
      subtitle: 'سياسات حكومية، وحدود عمرية قانونية، وأبحاث في علم الأعصاب، وقوانين حظر الهواتف الذكية في المدارس حول العالم.',
      allCategory: 'الكل',
      sourceLabel: 'المصدر:',
      readFullStory: 'قراءة القصة كاملة',
      read: 'اقرأ',
      readTimeSuffix: 'قراءة',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'بينما يتحرك العالم، ارسم حدودك الرقمية بنفسك اليوم',
      ctaDesc: 'في حين تسن الحكومات قوانين ضد الخوارزميات المسببة للإدمان، احمِ تركيزك اليوم مع Limitra App Block عبر وضع حدود صارمة للتطبيقات المشتتة للانتباه.',
      ctaButton: 'تحميل من Google Play ↗'
    },
    article: {
      titleSuffix: 'أخبار Limitra App Block',
      backToNews: '← جميع الأخبار والصحافة العالمية',
      sourceLabel: 'مصدر الخبر:',
      viewOriginalSource: '(عرض المصدر الأصلي ↗)',
      readTimeSuffix: 'قراءة',
      relatedTags: 'وسوم ذات صلة:',
      solutionTitle: 'ضع حدودك الرقمية الخاصة اليوم',
      solutionDesc: 'مع اتخاذ السلطات الدولية تدابير صارمة لمواجهة إدمan الشاشات، استعد السيطرة على وقتك مع Limitra App Block. ضع حدوداً واضحة لشبكات التواصل واستعد تركيزك.',
      solutionButton: 'تحميل من Google Play ↗',
      relatedTitle: 'المزيد من تطورات الصحافة العالمية'
    }
  },
  id: {
    index: {
      pageTitle: 'Pers Global & Berita Waktu Layar | Limitra App Block',
      pageDesc: 'Dapatkan informasi terkini tentang kecanduan layar, dampak media sosial, regulasi pemerintah, dan penelitian ilmiah global.',
      backHome: '← Beranda',
      badge: 'Pers Global & Regulasi',
      title: 'Langkah Global Melawan Kecanduan Layar & Media Sosial',
      subtitle: 'Kebijakan pemerintah, batas usia resmi, temuan neurosains, dan larangan smartphone di sekolah dari berbagai belahan dunia.',
      allCategory: 'Semua',
      sourceLabel: 'Sumber:',
      readFullStory: 'Baca Selengkapnya',
      read: 'Baca',
      readTimeSuffix: 'baca',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Saat Dunia Bertindak, Ambil Kendali Batasan Digital Anda',
      ctaDesc: 'Sementara pemerintah membuat regulasi terhadap algoritma yang adiktif, lindungi fokus Anda hari ini dengan Limitra App Block. Buat batasan tegas pada aplikasi yang mengalihkan perhatian.',
      ctaButton: 'Unduh di Google Play ↗'
    },
    article: {
      titleSuffix: 'Berita Limitra App Block',
      backToNews: '← Semua Berita & Pers Global',
      sourceLabel: 'Sumber Berita:',
      viewOriginalSource: '(Lihat Sumber Asli ↗)',
      readTimeSuffix: 'baca',
      relatedTags: 'Tag Terkait:',
      solutionTitle: 'Tetapkan Batasan Digital Anda Sendiri Hari Ini',
      solutionDesc: 'Ketika otoritas internasional mengambil tindakan tegas terhadap kecanduan layar, berdayakan diri Anda dengan Limitra App Block. Tentukan batasan jelas pada media sosial dan bangun kembali fokus Anda.',
      solutionButton: 'Unduh di Google Play ↗',
      relatedTitle: 'Lebih Banyak dari Pers Global'
    }
  },
  fil: {
    index: {
      pageTitle: 'Pandaigdigang Pamamahayag at Balita sa Screen Time | Limitra App Block',
      pageDesc: 'Manatiling updated sa pandaigdigang balita ukol sa adiksyon sa screen, mga pinsala ng social media, mga regulasyon ng pamahalaan, at siyentipikong pananaliksik.',
      backHome: '← Home',
      badge: 'Pandaigdigang Pamamahayag at Regulasyon',
      title: 'Pandaigdigang Aksyon Laban sa Adiksyon sa Screen at Social Media',
      subtitle: 'Mga patakaran ng pamahalaan, batas sa edad, mga tagumpay sa neuroscience, at pagbabawal ng smartphone sa mga paaralan sa buong mundo.',
      allCategory: 'Lahat',
      sourceLabel: 'Pinagmulan:',
      readFullStory: 'Basahin ang Buong Kuwento',
      read: 'Basahin',
      readTimeSuffix: 'basa',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'Habang Kumikilos ang Mundo, Pamahalaan ang Iyong Sariling Digital Boundaries',
      ctaDesc: 'Habang nagpapatupad ang mga gobyerno ng mga batas laban sa nakakahumaling na algorithm, protektahan ang iyong atensyon gamit ang Limitra App Block. Magtakda ng matibay na limitasyon sa mga nakakadistrang app.',
      ctaButton: 'I-download sa Google Play ↗'
    },
    article: {
      titleSuffix: 'Limitra App Block Balita',
      backToNews: '← Lahat ng Balita at Pandaigdigang Pamamahayag',
      sourceLabel: 'Pinagmulan ng Balita:',
      viewOriginalSource: '(Tingnan ang Orihinal na Pinagmulan ↗)',
      readTimeSuffix: 'basa',
      relatedTags: 'Mga Kaugnay na Tag:',
      solutionTitle: 'Itakda ang Iyong Sariling Mga Hangganang Digital Ngayon',
      solutionDesc: 'Habang nagpapatupad ang mga pandaigdigang awtoridad ng mahigpit na hakbang laban sa adiksyon sa screen, palakasin ang iyong sarili gamit ang Limitra App Block. Gumuhit ng malinaw na hangganan sa social media at muling buuin ang iyong pokus.',
      solutionButton: 'I-download sa Google Play ↗',
      relatedTitle: 'Iba pang Balita mula sa Pandaigdigang Pamamahayag'
    }
  },
  th: {
    index: {
      pageTitle: 'สื่อระดับโลกและข่าวสารเวลาหน้าจอ | Limitra App Block',
      pageDesc: 'ติดตามข่าวสารระดับโลกเกี่ยวกับการเสพติดหน้าจอ โทษของโซเชียลมีเดีย กฎหมายของภาครัฐ และงานวิจัยทางวิทยาศาสตร์ล่าสุด',
      backHome: '← หน้าแรก',
      badge: 'สื่อระดับโลกและข้อบังคับ',
      title: 'การดำเนินการระดับโลกเพื่อรับมือกับการเสพติดหน้าจอและโซเชียลมีเดีย',
      subtitle: 'นโยบายภาครัฐ การจำกัดอายุตามกฎหมาย การค้นพบทางประสาทวิทยา และการสั่งห้ามใช้สมาร์ทโฟนในโรงเรียนจากทั่วทุกมุมโลก',
      allCategory: 'ทั้งหมด',
      sourceLabel: 'ที่มา:',
      readFullStory: 'อ่านบทความฉบับเต็ม',
      read: 'อ่าน',
      readTimeSuffix: 'การอ่าน',
      ctaKicker: 'Limitra App Block',
      ctaTitle: 'ขณะที่โลกกำลังตื่นตัว ถึงเวลากำหนดขอบเขตดิจิทัลของคุณเอง',
      ctaDesc: 'ในขณะที่รัฐบาลต่างๆ ออกกฎหมายควบคุมอัลกอริทึมที่สร้างการเสพติด ปกป้องสมาธิของคุณตั้งแต่วันนี้ด้วย Limitra App Block ตั้งขอบเขตที่ชัดเจนสำหรับแอปที่รบกวนสมาธิ',
      ctaButton: 'ดาวน์โหลดบน Google Play ↗'
    },
    article: {
      titleSuffix: 'ข่าวสาร Limitra App Block',
      backToNews: '← ข่าวสารทั้งหมดและสื่อระดับโลก',
      sourceLabel: 'แหล่งข่าว:',
      viewOriginalSource: '(ดูแหล่งข่าวต้นฉบับ ↗)',
      readTimeSuffix: 'การอ่าน',
      relatedTags: 'แท็กที่เกี่ยวข้อง:',
      solutionTitle: 'กำหนดขอบเขตดิจิทัลของคุณเองตั้งแต่วันนี้',
      solutionDesc: 'เมื่อหน่วยงานระหว่างประเทศออกมาตรการเข้มงวดเพื่อจัดการกับการเสพติดหน้าจอ เสริมสร้างวินัยดิจิทัลด้วย Limitra App Block กำหนดขอบเขตการใช้งานโซเชียลมีเดียอย่างเด็ดขาดเพื่อฟื้นฟูสมาธิของคุณ',
      solutionButton: 'ดาวน์โหลดบน Google Play ↗',
      relatedTitle: 'ความเคลื่อนไหวอื่นๆ จากสื่อระดับโลก'
    }
  }
};
