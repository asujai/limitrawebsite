import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "98",
    slug: "ab-komisyonu-kids-act-yasa-tasarisi-13-yas-alti-yasak-ve-gunluk-1-saat-siniri",
    title: "Avrupa Komisyonu'ndan Tarihi 'EU KIDS Act' Tasarısı: 13 Yaş Altına Sosyal Medya Yasağı ve Günlük 1 Saat Sınırı",
    summary: "Avrupa Komisyonu, çocukları algoritmik tuzaklardan korumak için 'EU KIDS Act' yasa teklifini kabul etti. Tasarı; 13 yaş altına tam yasak, 13-15 yaşa ebeveyn denetimli 'mini hesap' ve günlük azami 1 saat süre sınırı getiriyor.",
    content: [
      "Avrupa Komisyonu, üye ülkeler arasındaki dağınık çocuk güvenliği düzenlemelerini tek bir çatı altında toplamak ve gençleri dijital platformların yıpratıcı etkilerinden korumak amacıyla 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy) adlı kapsamlı yasa teklifini resmen kabul etti. Taslak düzenleme; sosyal ağlar, kısa video platformları, çevrim içi oyunlar ve üretken yapay zekâ sohbet botlarını doğrudan kapsayan katı bir kademeli erişim modeli getiriyor.",
      "Yasa tasarısının merkezinde üç aşamalı bir yaş mimarisi yer alıyor: 13 yaşın altındaki çocukların sosyal medya hizmetlerine erişimi tamamen yasaklanıyor. 13 ila 15 yaş arasındaki gençler için ise yalnızca bir ebeveyn veya vasinin gözetiminde oluşturulabilen 'mini hesap' (mini-accounts) modeli zorunlu kılınıyor. Bu hesaplar kısıtlı işlevlere sahip olacak ve sistem düzeyinde günlük azami 1 saatlik kullanım tavanı uygulanacak. 15 yaş ve üzeri kullanıcılar bağımsız hesap açabilecek olsa da tüm platformlar reşit olmayanlara karşı tasarım güvenliği yükümlülüklerine tabi tutulacak.",
      "Tasarının en devrimci maddelerinden biri, 'tasarım yoluyla güvenlik' (safety-by-design) ilkesi kapsamında bağımlılık yaratan özelliklerin yasaklanmasıdır. Düzenleme yürürlüğe girdiğinde; kullanıcıları ekranda rehin tutan sonsuz kaydırma (infinite scrolling), gece gönderilen dürtüsel bildirimler, streak (seri tamamlama) döngüleri ve harcama tuzakları (loot box) reşit olmayanların kullanımına kapatılacak. Ayrıca platformlar, hizmetlerinin çocuklar için güvenli olduğunu kanıtlamakla yasal olarak yükümlü kılınarak ispat yükü doğrudan teknoloji şirketlerine yüklenecek.",
      "Komisyon, yaş doğrulamasının kullanıcı gizliliğini ihlal etmemesi için 'sıfır bilgi kanıtı' (zero-knowledge proof) teknolojisini şart koşuyor. 26 Kasım 2026 tarihine kadar kamuoyu istişaresine açık olan tasarı, Avrupa Parlamentosu ve AB Konseyi'nin onay sürecinin ardından 27 üye ülkede doğrudan bağlayıcı bir tüzük olarak yürürlüğe girecek.",
      "Avrupa Birliği'nin benimsediği bu yaklaşım, ekran süresini denetimsiz iradeye bırakmanın küresel bir halk sağlığı riskine dönüştüğünü tescilliyor. Limitra ekosistemi, AB'nin hedeflediği bu koruma duvarını bugünden cebinize getirir: Limitra App Block ile kendinize ve ailenize günlük 1 saatlik tavizsiz kullanım tavanları belirleyebilir, Limitra Social ile bir hesap verebilirlik ortağı eşliğinde bağımlılık yapan algoritmik akışların kontrolünü elinize alabilirsiniz."
    ],
    source: "Avrupa Komisyonu (European Commission) & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Devlet Düzenlemeleri & Yasalar",
    date: "2026-10-07",
    readTime: "5 dk",
    featured: false,
    tags: [
      "AB Komisyonu",
      "EU KIDS Act",
      "Sosyal Medya Yasağı",
      "Sonsuz Kaydırma",
      "1 Saat Sınırı",
      "Tasarım Yoluyla Güvenlik",
      "Limitra"
    ]
  },
  en: {
    id: "98",
    slug: "eu-commission-kids-act-proposal-under-13-ban-daily-1-hour-limit",
    title: "European Commission Unveils 'EU KIDS Act' Proposal: Social Media Ban Under 13 and Daily 1-Hour Cap",
    summary: "The European Commission has adopted the landmark 'EU KIDS Act' proposal to shield minors from manipulative platform design. The draft mandates a complete ban under 13, parental 'mini-accounts' with a 1-hour daily cap for ages 13–15, and an outlaw on infinite scrolling.",
    content: [
      "The European Commission has officially presented the 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy), a landmark legislative proposal designed to harmonize youth digital safety rules across all 27 member states. The regulation covers social media networks, video-sharing platforms, online gaming, app stores, and generative AI conversational chatbots under strict safety-by-design standards.",
      "At the heart of the draft regulation is a graduated age framework: children under the age of 13 are completely barred from opening social media accounts. For teens aged 13 to under 15, platforms must implement guardian-supervised 'mini-accounts' with restricted features and an automated daily time limit of one hour. Minors aged 15 and older will be permitted independent accounts, though platforms must still enforce robust default protections.",
      "Crucially, the proposal outlaws dopamine-exploiting addictive design patterns for minors. Features such as infinite scrolling feeds, manipulative late-night notifications, gamified streak rewards, and in-game spending traps will be strictly prohibited. Furthermore, the regulation reverses the legal burden of proof, requiring technology corporations to actively demonstrate that their platforms are safe and age-appropriate before offering services to young users.",
      "To enforce these safeguards without compromising user privacy, the Commission mandates privacy-preserving age verification, leveraging zero-knowledge proof technologies. The proposal is open for public consultation until November 26, 2026, before proceeding through formal legislative negotiations in the European Parliament and the Council of the European Union.",
      "The European Union's regulatory push validates a growing global consensus: relying purely on self-control against predatory algorithmic feeds is unsustainable. Limitra delivers this essential boundary architecture today: with Limitra App Block, you can enforce an unyielding daily 1-hour cap on distracting apps, while Limitra Social empowers you to pair with a peer accountability partner to defeat digital inertia."
    ],
    source: "European Commission & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Government Policies & Laws",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "European Commission",
      "EU KIDS Act",
      "Social Media Ban",
      "Infinite Scrolling",
      "1-Hour Screen Limit",
      "Safety by Design",
      "Limitra"
    ]
  },
  es: {
    id: "98",
    slug: "comision-europea-propuesta-kids-act-prohibicion-menores-13-limite-1-hora",
    title: "La Comisión Europea presenta la propuesta 'EU KIDS Act': Prohibición para menores de 13 años y límite de 1 hora diaria",
    summary: "La Comisión Europea adoptó la histórica propuesta legislativa 'EU KIDS Act' para proteger a los menores del diseño adictivo. El texto contempla la prohibición total para menores de 13 años, 'mini-cuentas' supervisadas con límite diario de 1 hora para jóvenes de 13 a 15 años y el fin del scroll infinito.",
    content: [
      "La Comisión Europea ha presentado oficialmente la propuesta legislativa 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy), un marco regulatorio integral destinado a armonizar las normativas de seguridad digital infantil en los 27 países miembros. El reglamento abarca redes sociales, plataformas de vídeo, videojuegos en línea, tiendas de aplicaciones y chatbots conversacionales de inteligencia artificial.",
      "El núcleo del proyecto legislativo establece un modelo de acceso escalonado por edades: los menores de 13 años tendrán prohibido el acceso a redes sociales. Para adolescentes de 13 a 15 años, las plataformas deberán habilitar 'mini-cuentas' supervisadas por padres o tutores, con funciones restringidas y un límite diario estricto de una hora de uso. A partir de los 15 años se permitirán cuentas independientes, siempre bajo estrictas medidas de protección por diseño.",
      "Entre sus disposiciones más contundentes, la normativa prohíbe los patrones de diseño adictivos para menores. Mecanismos como el desplazamiento infinito (infinite scrolling), las notificaciones automáticas nocturnas, las rachas de recompensas (streaks) y las compras compulsivas quedarán vetados. Además, la propuesta invierte la carga de la prueba, obligando a las empresas tecnológicas a demostrar activamente que sus entornos son seguros antes de acoger a menores.",
      "La Comisión estipula que la verificación de edad se realice mediante soluciones criptográficas que protejan la privacidad, como las pruebas de conocimiento cero (zero-knowledge proofs). La consulta pública permanecerá abierta hasta el 26 de noviembre de 2026, antes de que el texto pase al Parlamento Europeo y al Consejo de la UE para su tramitación definitiva.",
      "Esta iniciativa comunitaria confirma que combatir los algoritmos extractivos con mera fuerza de voluntad resulta insuficiente. El ecosistema Limitra pone estas barreras a tu alcance: con Limitra App Block puedes fijar un límite inquebrantable de 1 hora en aplicaciones recreativas, y con Limitra Social cuentas con el poder de un compañero de responsabilidad para romper los hábitos de navegación compulsiva."
    ],
    source: "Comisión Europea & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Políticas gubernamentales y leyes",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "Comisión Europea",
      "EU KIDS Act",
      "Redes Sociales",
      "Scroll Infinito",
      "Límite de Pantalla",
      "Seguridad por Diseño",
      "Limitra"
    ]
  },
  fr: {
    id: "98",
    slug: "commission-europeenne-kids-act-interdiction-moins-13-ans-limite-1-heure",
    title: "La Commission Européenne dévoile le 'EU KIDS Act' : Interdiction avant 13 ans et plafond d'une heure quotidienne",
    summary: "La Commission européenne a adopté la proposition législative 'EU KIDS Act' pour protéger les jeunes des designs addictifs. Le projet prévoit une interdiction sous 13 ans, des 'mini-comptes' parentaux plafonnés à 1 heure par jour entre 13 et 15 ans et la fin du défilement infini.",
    content: [
      "La Commission européenne a adopté officiellement la proposition de règlement 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy), visant à harmoniser la protection des mineurs dans l'espace numérique au sein des 27 États membres. Ce texte encadre strictement les réseaux sociaux, plateformes de partage vidéo, jeux en ligne, magasins d'applications et agents conversationnels d'intelligence artificielle.",
      "Le projet repose sur un système d'accès progressif : l'accès aux réseaux sociaux est rigoureusement interdit aux enfants de moins de 13 ans. Pour la tranche d'âge de 13 à 15 ans, les plateformes devront proposer des 'mini-comptes' sous contrôle parental, aux fonctionnalités restreintes et soumis à une limitation automatisée d'une heure d'écran par jour. Dès 15 ans, les jeunes pourront détenir un compte autonome, mais sous le régime strict de la sécurité dès la conception.",
      "Le règlement frappe directement les ressorts neuro-ergonomiques favorisant la dépendance numérique. Le défilement infini (infinite scrolling), les notifications tardives incitatives, les mécanismes de séries (streaks) et les micro-transactions addictives seront proscrits pour les mineurs. De plus, la charge de la preuve est renversée : ce sont désormais les géants de la tech qui doivent apporter la preuve préalable de l'innocuité de leurs interfaces.",
      "Afin de garantir cette vérification d'âge sans porter atteinte à la vie privée, le dispositif s'appuiera sur des technologies préservant la confidentialité telles que les preuves à divulgation nulle de connaissance (zero-knowledge proofs). La consultation publique est ouverte jusqu'au 26 novembre 2026 avant l'examen par le Parlement européen et le Conseil de l'UE.",
      "Cette impulsion européenne démontre qu'une volonté individuelle désarmée ne peut rivaliser avec des flux prédateurs. Limitra concrétise cette discipline numérique au quotidien : Limitra App Block permet d'instaurer un plafond ferme d'une heure sur vos applications chronophages, tandis que Limitra Social vous associe à un allié de confiance pour reprendre durablement le contrôle de votre attention."
    ],
    source: "Commission Européenne & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Politiques publiques et lois",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "Commission Européenne",
      "EU KIDS Act",
      "Réseaux Sociaux",
      "Défilement Infini",
      "Temps d'Écran",
      "Protection des Mineurs",
      "Limitra"
    ]
  },
  de: {
    id: "98",
    slug: "eu-kommission-kids-act-entwurf-verbot-unter-13-und-1-stunde-tageslimit",
    title: "EU-Kommission legt 'EU KIDS Act' vor: Social-Media-Verbot unter 13 und tägliches 1-Stunden-Limit",
    summary: "Die Europäische Kommission hat den Gesetzesentwurf 'EU KIDS Act' zum Schutz Minderjähriger verabschiedet. Vorgesehen sind ein vollständiges Verbot unter 13 Jahren, elterliche 'Mini-Konten' mit 1 Stunde Tageslimit für 13- bis 15-Jährige sowie das Verbot von endlosem Scrollen.",
    content: [
      "Die Europäische Kommission hat den Verordnungsentwurf 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy) offiziell angenommen, um den Schutz von Kindern und Jugendlichen im Internet EU-weit zu vereinheitlichen. Die vorgeschlagenen Vorschriften gelten verbindlich für soziale Netzwerke, Videoplattformen, Online-Spiele, App-Stores und KI-basierte Chatbots in allen 27 Mitgliedstaaten.",
      "Kernstück der Initiative ist ein gestuftes Altersmodell: Kindern unter 13 Jahren wird der Zugang zu Social-Media-Diensten vollständig untersagt. Für Jugendliche zwischen 13 und 15 Jahren müssen Plattformen elterlich beaufsichtigte 'Mini-Konten' bereitstellen, die über reduzierte Funktionen und eine strikte, systemweite Begrenzung auf maximal eine Stunde Nutzungszeit pro Tag verfügen. Ab 15 Jahren ist ein eigenes Konto erlaubt, unterliegt jedoch weiterhin umfassenden Schutzvorgaben.",
      "Besonders wegweisend ist das Verbot suchtfördernder Designmuster im Sinne des 'Safety-by-Design'-Prinzips. Endloses Scrollen (Infinite Scrolling), manipulative Push-Nachrichten in den Nachtstunden, Gamification-Elemente wie 'Streaks' sowie versteckte Kauffallen werden für Minderjährige untersagt. Zudem kehrt der Entwurf die Beweislast um: Technologieunternehmen müssen künftig nachweisen, dass ihre Dienste das Wohl von Kindern nicht beeinträchtigen.",
      "Um das Alter der Nutzer datenschutzkonform zu verifizieren, setzt die Kommission auf moderne kryptografische Verfahren wie Zero-Knowledge-Proofs. Die öffentliche Konsultation läuft bis zum 26. November 2026, bevor der Vorschlag vom Europäischen Parlament und dem Rat der Europäischen Union beraten und verabschiedet wird.",
      "Die EU-Initiative unterstreicht, dass bloße Willenskraft gegen hochgradig optimierte Algorithmen selten ausreicht. Limitra setzt genau diese Schutzmechanismen direkt auf Ihrem Gerät um: Mit Limitra App Block sperren Sie ablenkende Apps verlässlich nach Erreichen Ihres Tageslimits, während Limitra Social Sie mit einem Partner verbindet, um gemeinsame digitale Disziplin zu leben."
    ],
    source: "Europäische Kommission & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Regierungspolitik & Gesetze",
    date: "2026-10-07",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "EU-Kommission",
      "EU KIDS Act",
      "Social Media Verbot",
      "Endloses Scrollen",
      "Bildschirmzeit Limit",
      "Jugendschutz",
      "Limitra"
    ]
  },
  pt: {
    id: "98",
    slug: "comissao-europeia-proposta-kids-act-proibicao-menores-13-limite-1-hora",
    title: "Comissão Europeia apresenta proposta do 'EU KIDS Act': Proibição para menores de 13 anos e limite de 1 hora diária",
    summary: "A Comissão Europeia aprovou a histórica proposta do 'EU KIDS Act' para blindar menores contra designs viciantes. O projeto determina veto total abaixo dos 13 anos, 'mini-contas' supervisionadas com teto diário de 1 hora para jovens de 13 a 15 anos e o fim da rolagem infinita.",
    content: [
      "A Comissão Europeia adotou formalmente a proposta legislativa 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy), com o intuito de estabelecer regras harmonizadas de proteção à infância digital em toda a União Europeia. O regulamento abrange redes sociais, plataformas de vídeo, jogos online, lojas de aplicativos e assistentes conversacionais de inteligência artificial nos 27 Estados-membros.",
      "O pilar central da proposta é uma estrutura etária escalonada: crianças menores de 13 anos ficam totalmente proibidas de utilizar redes sociais. Para a faixa de 13 a 15 anos incompletos, as plataformas deverão fornecer 'mini-contas' gerenciadas por responsáveis legais, dotadas de recursos simplificados e uma restrição automatizada de uso diário de no máximo uma hora. Usuários a partir de 15 anos poderão gerir contas individuais, sob rigorosas exigências de segurança padrão.",
      "A regulação combate diretamente mecanismos de retenção dopaminérgica sob o conceito de 'segurança por design'. Padrões que exploram a vulnerabilidade infantil, como a rolagem infinita (infinite scrolling), alertas noturnos disruptivos, incentivos contínuos de ofensivas ('streaks') e microtransações predatórias, serão banidos para menores. Além disso, inverte-se o ônus da prova: caberá às empresas de tecnologia comprovar a segurança prévia de seus ecossistemas.",
      "Para assegurar a conferência etária com estrita preservação da privacidade dos cidadãos, a Comissão preconiza o uso de provas de conhecimento zero (zero-knowledge proofs). A consulta pública fica aberta até 26 de novembro de 2026, seguindo então para deliberação conjunta no Parlamento Europeu e no Conselho da UE.",
      "Essa movimentação regulatória confirma que depender unicamente do autocontrole contra feeds viciantes é um beco sem saída. A solução do Limitra materializa essa blindagem: o Limitra App Block impõe bloqueios mecânicos intransponíveis após o limite diário selecionado, e o Limitra Social une você a um parceiro de responsabilidade mútua para manter a clareza mental e o foco."
    ],
    source: "Comissão Europeia & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Políticas governamentais e leis",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "Comissão Europeia",
      "EU KIDS Act",
      "Redes Sociais",
      "Rolagem Infinita",
      "Tempo de Tela",
      "Proteção Infantil",
      "Limitra"
    ]
  },
  it: {
    id: "98",
    slug: "commissione-europea-proposta-kids-act-divieto-under-13-limite-1-ora",
    title: "La Commissione Europea presenta la proposta 'EU KIDS Act': Divieto sotto i 13 anni e tetto di 1 ora al giorno",
    summary: "La Commissione Europea ha adottato la proposta di legge 'EU KIDS Act' per tutelare i minori dalle dinamiche digitali persuasive. Previsti il divieto assoluto sotto i 13 anni, 'mini-account' genitoriali limitati a 1 ora quotidiana tra i 13 e i 15 anni e lo stop allo scorrimento infinito.",
    content: [
      "La Commissione Europea ha formalizzato la proposta di regolamento denominata 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy), volta a unificare le tutele per l'infanzia e l'adolescenza nel contesto digitale dei 27 paesi dell'Unione. Il provvedimento copre in modo organico social network, servizi di condivisione video, giochi online, store digitali e sistemi di intelligenza artificiale conversazionale.",
      "L'architettura normativa si fonda su un accesso progressivo scandito dall'età: i minori di 13 anni non potranno accedere ai social network. Per la fascia tra i 13 e i 15 anni, i servizi dovranno predisporre 'mini-account' collegati e supervisionati dai genitori, caratterizzati da funzioni essenziali e da un tetto orario non negoziabile di un'ora al giorno. A partire dai 15 anni sarà consentito l'account autonomo, pur mantenendo standard restrittivi di protezione dei dati e sicurezza per impostazione predefinita.",
      "Sul fronte della 'sicurezza per progettazione' (safety by design), il testo dichiara guerra ai pattern che inducono dipendenza compulsiva. Vengono vietati per i minori lo scorrimento continuo e infinito (infinite scrolling), le notifiche push durante le ore notturne, le meccaniche premianti basate sulle serie consecutive ('streaks') e gli acquisti ingannevoli. La norma inverte inoltre l'onere della prova, obbligando le big tech a certificare l'innocuità dei propri algoritmi.",
      "La verifica dell'età anagrafica dovrà avvenire nel rispetto scrupoloso della privacy attraverso tecnologie crittografiche a conoscenza zero (zero-knowledge proofs). La consultazione pubblica resterà aperta fino al 26 novembre 2026, preludio al dibattito legislativo presso il Parlamento Europeo e il Consiglio dell'UE.",
      "La determinazione delle istituzioni europee dimostra che l'autodisciplina non basta per arginare architetture concepite per catturare l'attenzione. Limitra traduce questo principio in protezione pratica: Limitra App Block vi consente di impostare un blocco ferreo al superamento dell'ora quotidiana, mentre Limitra Social vi affianca a un amico fidato per condividere traguardi di autentico distacco digitale."
    ],
    source: "Commissione Europea & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Politiche governative e leggi",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "Commissione Europea",
      "EU KIDS Act",
      "Social Network",
      "Scorrimento Infinito",
      "Tempo Schermo",
      "Sicurezza Minori",
      "Limitra"
    ]
  },
  ar: {
    id: "98",
    slug: "al-mofawadiya-al-orobiya-mashroa-kids-act-hazr-don-13-wa-had-saa-wahida",
    title: "المفوضية الأوروبية تطرح مشروع قانون 'EU KIDS Act': حظر لمن هم دون سن 13 وحد يومي لمدة ساعة واحدة",
    summary: "تبنت المفوضية الأوروبية رسميًا مقترح 'EU KIDS Act' لحماية القاصرين من التصميم الخوارزمي المسبب للإدمان. يتضمن المشروع حظرًا تامًا لمن دون 13 عامًا، وحسابات مصغرة بإشراف الوالدين وحد أقصى ساعة يوميًا للأعمار بين 13 و15 عامًا، وحظر التمرير اللانهائي.",
    content: [
      "اعتمدت المفوضية الأوروبية رسميًا مقترح تنظيم 'EU KIDS Act' (الحفاظ على أمان وموثوقية المساحات الرقمية للإنترنت)، الذي يهدف إلى توحيد معايير حماية الأطفال الرقمية في جميع دول الاتحاد الأوروبي السبع والعشرين. يشمل التشريع المقترح شبكات التواصل الاجتماعي ومنصات الفيديو والألعاب الإلكترونية ومتاجر التطبيقات ونماذج الذكاء الاصطناعي التوليدي التفاعلية.",
      "يرتكز المشروع على نموذج وصول تدريجي يعتمد على الفئات العمرية: يُحظر تمامًا على الأطفال دون سن 13 عامًا فتح أو استخدام حسابات التواصل الاجتماعي. أما الفئة العمرية بين 13 و15 عامًا، فتلتزم المنصات بتوفير 'حسابات مصغرة' بإشراف وتفعيل الوالدين، تتسم بوظائف محدودة وتفرض سقفًا زمنيًا إلزاميًا لا يتجاوز ساعة واحدة يوميًا. ويُسمح لمن بلغ 15 عامًا فأكثر بإنشاء حساب مستقل مع استمرار معايير الأمان المدمجة.",
      "وفي بند هو الأبرز لمكافحة الإدمان الرقمي تحت مبدأ 'الأمان بالتصميم' (Safety by Design)، يحظر القانون الآليات المصممة لاستنزاف الانتباه؛ مثل التمرير اللانهائي (Infinite Scrolling)، والإشعارات الليلية المحفزة، ومكافآت السلاسل التفاعلية المتتالية (Streaks)، وفخاخ الإنفاق داخل التطبيقات. كما يقلب القانون عبء الإثبات القانوني ليلزم شركات التكنولوجيا بتقديم أدلة قاطعة على أمان منصاتها للقاصرين قبل السماح لهم بالوصول.",
      "ولضمان التحقق من السن دون المساس بخصوصية المستخدمين، تشترط المفوضية اعتماد حلول تشفير متقدمة مثل إثباتات المعرفة الصفرية (Zero-Knowledge Proofs). وتستمر مرحلة المشاورات العامة حتى 26 نوفمبر 2026، تمهيدًا لمناقشة المقترح واعتماده عبر البرلمان الأوروبي ومجلس الاتحاد الأوروبي.",
      "يؤكد هذا التوجه الدولي أن الاعتماد على الإرادة الفردية وحدها لم يعد كافيًا لمواجهة خوارزميات الاستنزاف الرقمي. وهنا يوفر نظام Limitra هذه المظلة الوقائية مباشرة على هاتفك: يمنحك تطبيق Limitra App Block القدرة على وضع حواجز حديدية تمنع تجاوز السقف اليومي، بينما يتيح لك Limitra Social بناء شراكة التزام واقعية مع صديق لكسر سلاسل الإدمان الرقمي."
    ],
    source: "المفوضية الأوروبية & رويترز",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "السياسات الحكومية والقوانين",
    date: "2026-10-07",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "المفوضية الأوروبية",
      "EU KIDS Act",
      "وسائل التواصل الاجتماعي",
      "التمرير اللانهائي",
      "وقت الشاشة",
      "الأمان بالتصميم",
      "Limitra"
    ]
  },
  id: {
    id: "98",
    slug: "komisi-eropa-rancangan-kids-act-larangan-bawah-13-tahun-batas-1-jam",
    title: "Komisi Eropa Rilis Draf 'EU KIDS Act': Larangan Medsos di Bawah 13 Tahun dan Batas Waktu 1 Jam Per Hari",
    summary: "Komisi Eropa menyetujui rancangan undang-undang 'EU KIDS Act' untuk melindungi remaja dari jeratan desain digital adiktif. RUU ini melarang medsos bagi anak di bawah 13 tahun, mewajibkan akun mini berpengawasan batas 1 jam untuk usia 13-15 tahun, dan melarang infinite scrolling.",
    content: [
      "Komisi Eropa secara resmi mengadopsi rancangan regulasi 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy) guna menyelaraskan aturan keselamatan digital bagi anak-anak di 27 negara anggota Uni Eropa. Aturan ini mencakup platform media sosial, layanan berbagi video, gim online, toko aplikasi, dan chatbot kecerdasan buatan generatif.",
      "Rancangan ini memberlakukan struktur akses berjenjang berbasis usia: anak di bawah usia 13 tahun dilarang sepenuhnya menggunakan layanan media sosial. Untuk remaja berusia 13 hingga 15 tahun, platform diwajibkan menyediakan 'akun mini' di bawah pengawasan orang tua dengan fitur terbatas serta pembatasan waktu layar otomatis maksimal 1 jam per hari. Remaja berusia 15 tahun ke atas diperbolehkan memiliki akun mandiri dengan tetap menerapkan standar perlindungan bawaan yang ketat.",
      "Salah satu poin terpenting regulasi ini adalah prinsip 'keamanan sejak perancangan' (safety by design) yang melarang fitur pemicu adiksi bagi anak di bawah umur. Fitur gulir tanpa henti (infinite scrolling), notifikasi pengganggu di jam tidur malam, mekanisme hadiah beruntun (streaks), serta jebakan transaksi dalam gim akan dilarang total. Selain itu, regulasi ini membalikkan beban pembuktian kepada korporasi teknologi untuk membuktikan bahwa produk mereka aman bagi perkembangan anak.",
      "Untuk memastikan usia pengguna tanpa mengorbankan privasi, Komisi Eropa mewajibkan teknologi verifikasi usia mutakhir seperti zero-knowledge proofs. Konsultasi publik terbuka hingga 26 November 2026 sebelum disahkan melalui Parlemen Eropa dan Dewan Uni Eropa.",
      "Langkah Uni Eropa ini membuktikan bahwa mengandalkan kemauan pribadi semata tidak cukup menghadapi algoritma yang dirancang untuk menyedot perhatian. Limitra menghadirkan benteng perlindungan tersebut di ponsel Anda: Limitra App Block memungkinkan Anda mengunci aplikasi setelah batas 1 jam tercapai, sedangkan Limitra Social menghubungkan Anda dengan rekan akuntabilitas untuk menjaga fokus dan produktivitas nyata."
    ],
    source: "Komisi Eropa & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Kebijakan Pemerintah & Hukum",
    date: "2026-10-07",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Komisi Eropa",
      "EU KIDS Act",
      "Media Sosial",
      "Infinite Scrolling",
      "Waktu Layar",
      "Perlindungan Anak",
      "Limitra"
    ]
  },
  fil: {
    id: "98",
    slug: "komisyon-ng-europa-panukalang-kids-act-bawal-wala-pang-13-limit-1-oras",
    title: "Inilunsad ng Komisyon ng Europa ang 'EU KIDS Act': Bawal sa Edad Mababa sa 13 at May Limitasyong 1 Oras Bawat Araw",
    summary: "Inaprubahan ng Komisyon ng Europa ang makasaysayang panukalang 'EU KIDS Act' upang protektahan ang kabataan sa nakakahumaling na disenyo ng social media. Ipinagbabawal nito ang paggamit sa edad mababa sa 13, nagtatakda ng mini-account na may 1 oras na limit para sa edad 13-15, at ipinagbabawal ang infinite scroll.",
    content: [
      "Opisyal na inilabas ng Komisyon ng Europa ang panukalang batas na 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy) upang magtakda ng iisang pamantayan sa kaligtasan ng kabataan sa digital world sa 27 bansa ng European Union. Saklaw ng panukala ang mga social network, video sharing platforms, online games, app stores, at mga AI chatbot.",
      "Sentro sa panukala ang baitang-baitang na edad para sa paggamit: ganap na ipinagbabawal sa mga batang wala pang 13 taong gulang ang paggamit ng social media. Para sa mga kabataang edad 13 hanggang 15, inoobliga ang mga platform na magpatupad ng 'mini-accounts' sa ilalim ng gabay ng magulang, na may limitadong features at awtomatikong 1 oras na maximum screen time bawat araw. Ang edad 15 pataas ay maaaring magkaroon ng sariling account ngunit protektado pa rin ng mga panuntunang pangkaligtasan.",
      "Ipinagbabawal din ng panukala ang mga 'addictive design features' para sa mga menor de edad alinsunod sa 'safety by design'. Kabilang dito ang walang tigil na pag-scroll (infinite scrolling), panggabing push notifications, streak reward systems, at mga gastusin sa laro (loot boxes). Bukod dito, inilipat ang responsibilidad ng pagpapatunay sa mga kumpanya ng teknolohiya upang patunayang ligtas ang kanilang mga sistema bago papasukin ang kabataan.",
      "Upang mapatunayan ang edad nang hindi nalalabag ang pribadong impormasyon, iniaatas ng Komisyon ang paggamit ng cryptographic tools tulad ng zero-knowledge proofs. Bukas ang pampublikong konsultasyon hanggang Nobyembre 26, 2026, bago ang pinal na pag-apruba sa European Parliament at Council ng EU.",
      "Pinapatunayan ng hakbang ng Europa na hindi sapat ang sariling disiplina laban sa mga mapanlinlang na algorithm. Hatid ng Limitra ang proteksyong ito sa iyong device: gamit ang Limitra App Block, maaari kang magtakda ng matibay na 1 oras na harang sa mga nakakaabalang app, habang ang Limitra Social ay nagbibigay ng kasama sa pananagutan upang mapanatili ang iyong kalayaan mula sa digital addiction."
    ],
    source: "Komisyon ng Europa & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "Mga Patakaran ng Pamahalaan at Batas",
    date: "2026-10-07",
    readTime: "5 min",
    featured: false,
    tags: [
      "Komisyon ng Europa",
      "EU KIDS Act",
      "Social Media",
      "Infinite Scrolling",
      "Screen Time Limit",
      "Kaligtasan ng Kabataan",
      "Limitra"
    ]
  },
  th: {
    id: "98",
    slug: "eu-commission-kids-act-proposal-ban-under-13-limit-1-hour",
    title: "คณะกรรมาธิการยุโรปเปิดตัวร่างกฎหมาย 'EU KIDS Act': แบนโซเชียลเด็กต่ำกว่า 13 ปี และจำกัดเวลา 1 ชั่วโมงต่อวัน",
    summary: "คณะกรรมาธิการยุโรปผ่านร่างกฎหมายครั้งประวัติศาสตร์ 'EU KIDS Act' เพื่อปกป้องเยาวชนจากการออกแบบแอปที่เสพติด โดยกำหนดห้ามเด็กอายุต่ำกว่า 13 ปีใช้งาน กำหนด 'มินิแอ็กเคานต์' จำกัดเวลา 1 ชั่วโมงต่อวันสำหรับอายุ 13-15 ปี และสั่งห้ามระบบฟีดเลื่อนไม่สิ้นสุด",
    content: [
      "คณะกรรมาธิการยุโรป (European Commission) ได้นำเสนอร่างกฎหมาย 'EU KIDS Act' (Keeping Internet Digital Spaces Accountable and Trustworthy) อย่างเป็นทางการ เพื่อสร้างมาตรฐานความปลอดภัยดิจิทัลสำหรับเด็กและเยาวชนที่เป็นหนึ่งเดียวกันทั่วทั้ง 27 ประเทศสมาชิกสหภาพยุโรป ครอบคลุมโซเชียลมีเดีย แพลตฟอร์มวิดีโอ เกมออนไลน์ แอปสโตร์ และแชตบอตปัญญาประดิษฐ์เชิงสนทนา",
      "หัวใจสำคัญของร่างกฎหมายนี้คือการจัดระดับการเข้าถึงตามช่วงอายุ: เด็กที่มีอายุต่ำกว่า 13 ปีจะถูกห้ามเข้าถึงบริการโซเชียลมีเดียโดยเด็ดขาด สำหรับเยาวชนอายุระหว่าง 13 ถึง 15 ปี แพลตฟอร์มต้องให้บริการผ่าน 'มินิแอ็กเคานต์' (mini-accounts) ที่อยู่ภายใต้การกำกับดูแลของผู้ปกครอง มีฟังก์ชันจำกัด และมีระบบบังคับจำกัดเวลาการใช้งานหน้าจอสูงสุดไม่เกิน 1 ชั่วโมงต่อวัน ขณะที่ผู้มีอายุ 15 ปีขึ้นไปสามารถมีบัญชีอิสระได้แต่ยังอยู่ภายใต้มาตรฐานความปลอดภัยขั้นสูง",
      "นอกจากนี้ ร่างกฎหมายยังสั่งห้ามการออกแบบที่กระตุ้นภาวะเสพติดสำหรับผู้เยาว์ภายใต้หลักการ 'ความปลอดภัยตั้งแต่ขั้นตอนออกแบบ' (Safety by Design) โดยห้ามระบบฟีดเลื่อนไม่สิ้นสุด (Infinite Scrolling) การแจ้งเตือนกระตุ้นช่วงเวลากลางคืน ระบบสะสมแต้มต่อเนื่อง (Streaks) และกับดักการจ่ายเงินในเกม ทั้งยังกำหนดให้ภาระการพิสูจน์ตกเป็นของบริษัทเทคโนโลยีที่จะต้องยืนยันว่าแพลตฟอร์มปลอดภัยต่อเด็กจริง",
      "ในการยืนยันอายุโดยไม่ละเมิดความเป็นส่วนตัว สหภาพยุโรปกำหนดให้ใช้เทคโนโลยีเข้ารหัสขั้นสูง เช่น Zero-Knowledge Proofs โดยกระบวนการรับฟังความคิดเห็นสาธารณะจะเปิดจนถึงวันที่ 26 พฤศจิกายน 2026 ก่อนเข้าสู่การพิจารณาของรัฐสภายุโรปและคณะมนตรีแห่งสหภาพยุโรป",
      "ความเคลื่อนไหวระดับโลกนี้ตอกย้ำว่าการพึ่งพาเพียงพลังใจตนเองไม่อาจต้านทานอัลกอริทึมที่ออกแบบมาเพื่อดึงดูดสายตาได้ Limitra จึงถูกพัฒนาขึ้นเพื่อมอบเกราะป้องกันที่แท้จริง: Limitra App Block ช่วยล็อกแอปพลิเคชันอย่างเด็ดขาดเมื่อครบเวลา 1 ชั่วโมงต่อวัน และ Limitra Social ช่วยจับคู่ความรับผิดชอบร่วมกับเพื่อนเพื่อทวงคืนเวลาและสมาธิกลับคืนมา"
    ],
    source: "คณะกรรมาธิการยุโรป & Reuters",
    sourceUrl: "https://ec.europa.eu/commission/presscorner/",
    category: "นโยบายและกฎหมายของรัฐ",
    date: "2026-10-07",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "คณะกรรมาธิการยุโรป",
      "EU KIDS Act",
      "โซเชียลมีเดีย",
      "ฟีดเลื่อนไม่สิ้นสุด",
      "จำกัดเวลาหน้าจอ",
      "ความปลอดภัยของเด็ก",
      "Limitra"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filePath = lang === 'tr' 
    ? path.join(dataDir, 'haberler.json') 
    : path.join(dataDir, `news-${lang}.json`);

  const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Check if ID 98 already exists
  if (list.some(item => item.id === "98")) {
    console.log(`[${lang}] ID 98 already exists, skipping.`);
    continue;
  }

  // Prepend new article
  list.unshift(articles[lang]);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] ID 98 prepended successfully to ${path.basename(filePath)}`);
}
