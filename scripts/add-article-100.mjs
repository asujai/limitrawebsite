import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "100",
    slug: "filipinler-senatosu-smart-kids-act-18-yas-altina-sosyal-medya-yasagi",
    title: "Filipinler Senatosu'ndan Tarihi Karar: 18 Yaş Altına Sosyal Medyayı Kısıtlayan SMART KIDS Act Kabul Edildi",
    summary: "Filipinler Senatosu, 18 yaşın altındaki bireylerin yüksek riskli sosyal medya platformlarında hesap açmasını ve bu platformlara erişmesini yasaklayan SMART KIDS Act tasarısını 16-1 oyla kabul etti.",
    content: [
      "Filipinler Senatosu, çocukları ve gençleri çevrim içi ortamdaki zararlı içeriklerden, istismardan ve algoritmik bağımlılıktan korumayı amaçlayan 2424 sayılı Senato Tasarısını (SMART KIDS Act - Safe Media Access and Responsible Technology for Kids in Digital Spaces) üçüncü ve nihai oturumda 16'ya karşı 1 oyla kabul etti. Senato Genel Kurulu'ndan geçen düzenleme, 18 yaşın altındaki bireylerin yüksek riskli sosyal medya platformlarına erişimine kapsamlı sınırlamalar getiriyor.",
      "Tasarının baş sponsoru Senatör Robinhood Padilla tarafından sunulan yasa metnine göre; sosyal ağlar, algoritmik akışa dayalı kısa video uygulamaları ve yüksek riskli dijital servisler, 18 yaşından küçük kullanıcılara hesap açma veya var olan hesapları kullanma izni veremeyecek. Tasarı; yalnızca bire bir iletişim sağlayan özel mesajlaşma uygulamalarını, e-posta servislerini, eğitim platformlarını, haber sitelerini ve sosyal ağ unsuru içermeyen çevrim içi oyunları bu kısıtlamanın dışında tutuyor.",
      "Düzenleme, teknoloji şirketlerine kullanıcıların yaşını resmî kimlik belgeleriyle doğrulamayı zorunlu kılan katı bir yaş güvencesi mekanizması yüklüyor. Kullanıcı gizliliğini gözetmek amacıyla platformların doğrulama tamamlandıktan sonra kimlik kopyalarını sunucularında saklaması yasaklanıyor. Yükümlülüklere uymayan dijital hizmet sağlayıcılarına ihlal başına 5 milyon ila 20 milyon Filipin pesosu idari para cezası öngörülürken, çocukların bu kuralları delmesine bilerek yardım eden velilere de kamu hizmeti ve dijital ebeveynlik eğitimi yaptırımları getiriliyor.",
      "Tasarıya tek ret oyunu veren Senatör Risa Hontiveros, toptan bir yasağın ergenlerin gelişen karar alma kapasitesini yok saydığını ve bilgiye erişim hakkını sınırlayabileceğini savunarak yaşa göre kademelendirilmiş bir koruma modeli önerdi. Senato'da kabul edilen tasarı, Temsilciler Meclisi'ndeki benzer metinlerle birleştirilmek üzere iki meclisli uzlaşma komisyonuna gidecek ve ardından yürürlüğe girmesi için Devlet Başkanı Ferdinand Marcos Jr.'ın onayına sunulacak.",
      "Devletlerin yasal düzenleme adımları sürerken, kendi telefonunda veya aile ortamında dijital sınırları netleştirmek isteyen kullanıcılar bireysel yöntemlere başvuruyor. Limitra App Block, seçilen uygulamalara bağımsız günlük kullanım süresi limiti belirleyerek cihaz başında geçirilen vakti kontrol altında tutmaya yardımcı oluyor."
    ],
    source: "Filipinler Senatosu (Senate of the Philippines) & Manila Bulletin",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Devlet Düzenlemeleri & Yasalar",
    date: "2026-10-08",
    readTime: "5 dk",
    featured: false,
    tags: [
      "Filipinler Senatosu",
      "SMART KIDS Act",
      "Sosyal Medya Yasası",
      "18 Yaş Sınırı",
      "Yaş Doğrulama",
      "Limitra App Block"
    ]
  },
  en: {
    id: "100",
    slug: "philippines-senate-approves-smart-kids-act-social-media-ban-under-18",
    title: "Philippines Senate Passes SMART KIDS Act: Landmark Bill Restricts Social Media Under 18",
    summary: "The Philippine Senate has approved Senate Bill No. 2424 (SMART KIDS Act) on third and final reading in a 16–1 vote, prohibiting minors under 18 from creating or accessing accounts on high-risk social media platforms.",
    content: [
      "The Senate of the Philippines has approved Senate Bill No. 2424, titled the Safe Media Access and Responsible Technology for Kids in Digital Spaces (SMART KIDS) Act, on its third and final reading with a decisive 16–1 vote. The landmark measure establishes stringent safeguards to protect minors from digital harms, predatory exploitation, and compulsive online behaviors by prohibiting individuals under the age of 18 from creating or maintaining accounts on platforms designated as high-risk digital services.",
      "Sponsored by Senator Robinhood Padilla, the legislation focuses specifically on social networks, algorithmic short-video services, and social platforms driven by user-generated public content. To safeguard educational and functional digital needs, the bill explicitly exempts one-on-one direct messaging services, email providers, accredited learning portals, news media websites, and online games that do not feature public social networking components.",
      "Under the provisions of the bill, digital platform operators are legally obligated to establish robust age-assurance mechanisms, requiring official government identification or verified digital credentials to confirm user age. To protect citizen privacy, platforms are strictly prohibited from retaining copies of submitted identification documents once verification is complete. Non-compliant service providers face substantial administrative penalties ranging from ₱5 million to ₱20 million per violation, while parents or guardians who knowingly assist minors in bypassing the age safeguards may face fines, mandatory community service, and compulsory attendance in digital parenting programs.",
      "Senator Risa Hontiveros cast the lone dissenting vote, contending that an absolute prohibition across all minors under 18 is overly restrictive and fails to account for the evolving maturity and educational agency of older adolescents. The bill will now proceed to a bicameral conference committee to resolve differences with parallel measures from the House of Representatives before being submitted to President Ferdinand Marcos Jr. for final enactment.",
      "As governments pursue broader statutory frameworks, individuals and families seeking clearer boundaries often adopt focused personal tools. Limitra App Block provides independent daily time limits on selected applications to help manage screen time and reduce unintended digital distraction."
    ],
    source: "Senate of the Philippines & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Government Policies & Laws",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Philippines Senate",
      "SMART KIDS Act",
      "Social Media Regulation",
      "Under 18 Restriction",
      "Age Verification",
      "Limitra App Block"
    ]
  },
  es: {
    id: "100",
    slug: "senado-filipinas-aprueba-smart-kids-act-prohibicion-redes-menores-18",
    title: "El Senado de Filipinas aprueba la SMART KIDS Act: Histórica restricción de redes sociales para menores de 18 años",
    summary: "El Senado de Filipinas aprobó en tercera y última lectura el proyecto SB 2424 (SMART KIDS Act) con 16 votos a favor y 1 en contra, prohibiendo el acceso y la creación de cuentas en redes sociales de alto riesgo a menores de 18 años.",
    content: [
      "El Senado de Filipinas aprobó en tercera y última lectura el Proyecto de Ley del Senado N.º 2424, conocido como Ley de Acceso Seguro a Medios y Tecnología Responsable para Menores en Espacios Digitales (SMART KIDS Act), con una votación de 16 a favor y 1 en contra. Esta medida legislativa tiene como objetivo proteger a niños y adolescentes de contenidos nocivos, acoso digital y diseños algorítmicos compulsivos, restringiendo a los menores de 18 años la creación y el mantenimiento de cuentas en plataformas consideradas de alto riesgo.",
      "El proyecto, impulsado por el senador Robinhood Padilla, se centra en redes sociales comerciales y aplicaciones de vídeo corto con algoritmos de recomendación. Para preservar las herramientas esenciales de comunicación y estudio, la norma exime expresamente a los servicios de mensajería privada directa sin grupos públicos, el correo electrónico, las plataformas educativas reconocidas, los portales de noticias y los videojuegos en línea sin componentes de red social.",
      "La ley exige a las plataformas tecnológicas implementar sistemas fiables de verificación de edad mediante documentos de identidad oficiales. Para salvaguardar la privacidad de los usuarios, las empresas tienen prohibido conservar copias de los documentos tras finalizar la verificación. Los proveedores que incumplan estas obligaciones se enfrentan a sanciones administrativas de entre 5 y 20 millones de pesos filipinos por infracción, mientras que los tutores que colaboren deliberadamente para eludir las restricciones podrán recibir multas y realizar servicio comunitario o programas de formación digital.",
      "La senadora Risa Hontiveros emitió el único voto en contra, argumentando que una prohibición generalizada no toma en cuenta la progresiva autonomía de los adolescentes mayores y podría restringir su acceso a información legítima. Tras su aprobación en el Senado, el texto pasará a un comité bicameral para conciliarse con las iniciativas de la Cámara de Representantes antes de enviarse al presidente Ferdinand Marcos Jr. para su promulgación definitiva.",
      "Mientras continúan los avances regulatorios a nivel estatal, muchas personas y familias buscan soluciones directas para estructurar sus hábitos cotidianos. Limitra App Block permite establecer límites de tiempo diarios independientes para aplicaciones seleccionadas, ayudando a gestionar el tiempo en pantalla de manera consciente."
    ],
    source: "Senado de Filipinas (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Políticas gubernamentales y leyes",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Senado de Filipinas",
      "SMART KIDS Act",
      "Regulación de redes sociales",
      "Menores de 18 años",
      "Verificación de edad",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "100",
    slug: "senat-philippines-adopte-smart-kids-act-interdiction-reseaux-sociaux-moins-18-ans",
    title: "Le Sénat des Philippines adopte le SMART KIDS Act : Restriction des réseaux sociaux pour les moins de 18 ans",
    summary: "Le Sénat des Philippines a adopté en troisième lecture le projet de loi SB 2424 (SMART KIDS Act) par 16 voix contre 1, interdisant aux mineurs de moins de 18 ans d'ouvrir ou d'utiliser un compte sur les réseaux sociaux à haut risque.",
    content: [
      "Le Sénat des Philippines a adopté en troisième et dernière lecture, par 16 voix contre 1, le projet de loi sénatorial n° 2424 intitulé SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act). Ce texte majeur vise à prémunir les jeunes contre l'exploitation en ligne, les contenus violents et les mécanismes de dépendance numérique en interdisant aux moins de 18 ans la création ou l'accès à des comptes sur des plateformes numériques qualifiées de services à haut risque.",
      "Porté par le sénateur Robinhood Padilla, le projet cible principalement les réseaux sociaux grand public et les applications de vidéos courtes régies par des flux algorithmiques. Afin de ne pas entraver les besoins de communication essentiels et l'apprentissage, la loi prévoit des exemptions claires pour la messagerie instantanée privée directe sans diffusion publique, les services de courrier électronique, les plateformes scolaires et éducatives ainsi que les jeux en ligne sans fonctionnalités de réseautage social.",
      "Le dispositif impose aux plateformes numériques d'intégrer des mécanismes stricts de vérification de l'âge reposant sur des pièces d'identité officielles. Soucieux de préserver la vie privée des utilisateurs, le législateur interdit expressément aux entreprises de conserver une copie des documents une fois le contrôle effectué. Les plateformes en infraction s'exposent à des amendes administratives allant de 5 à 20 millions de pesos philippins par infraction, tandis que les parents facilitant délibérément le contournement des règles pourront être astreints à des travaux d'intérêt général et à des formations parentales au numérique.",
      "Seule opposante au texte, la sénatrice Risa Hontiveros a fait valoir qu'une interdiction indifférenciée jusqu'à 18 ans ne tient pas compte du développement de l'autonomie chez les adolescents et risque de limiter leur accès légitime à l'information. Le texte va désormais faire l'objet d'une commission mixte avec la Chambre des représentants avant d'être transmis au président Ferdinand Marcos Jr. pour signature.",
      "Face aux initiatives législatives des États, de nombreux usagers privilégient des repères concrets pour organiser leur quotidien numérique. Limitra App Block permet de fixer des limites de temps quotidiennes indépendantes sur les applications sélectionnées afin d'aider à garder le contrôle sur le temps d'écran."
    ],
    source: "Sénat des Philippines (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Politiques publiques et lois",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Sénat des Philippines",
      "SMART KIDS Act",
      "Régulation des réseaux sociaux",
      "Moins de 18 ans",
      "Vérification de l'âge",
      "Limitra App Block"
    ]
  },
  de: {
    id: "100",
    slug: "philippinen-senat-beschliesst-smart-kids-act-social-media-verbot-unter-18",
    title: "Philippinischer Senat beschließt SMART KIDS Act: Soziale Medien für unter 18-Jährige stark eingeschränkt",
    summary: "Der philippinische Senat hat den Gesetzentwurf SB 2424 (SMART KIDS Act) in dritter Lesung mit 16 zu 1 Stimmen angenommen. Minderjährigen unter 18 Jahren wird die Registrierung auf risikoreichen Social-Media-Plattformen untersagt.",
    content: [
      "Der Senat der Philippinen hat den Gesetzentwurf Senate Bill Nr. 2424, bekannt als SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act), in dritter und abschließender Lesung mit 16 zu 1 Stimmen verabschiedet. Die weitreichende Gesetzgebung bezweckt den Schutz von Jugendlichen vor algorithmischer Reizüberflutung, Missbrauch und digitalen Risiken, indem Personen unter 18 Jahren das Erstellen und Führen von Konten auf als risikoreich eingestuften Plattformen untersagt wird.",
      "Das vom Senator Robinhood Padilla eingebrachte Gesetz richtet sich vor allem gegen soziale Netzwerke und algorithmisch gesteuerte Kurzvideo-Apps. Um die schulische Nutzung und den elementaren Austausch nicht zu beeinträchtigen, sind direkte 1-zu-1-Nachrichtendienste ohne öffentliche Gruppen, E-Mail-Dienste, anerkannte Bildungsportale, Nachrichtenseiten sowie Online-Spiele ohne soziale Netzwerkfunktionen ausdrücklich von den Einschränkungen ausgenommen.",
      "Plattformbetreiber werden gesetzlich verpflichtet, verlässliche Mechanismen zur Altersüberprüfung anhand offizieller Ausweisdokumente einzuführen. Zum Schutz der Privatsphäre ist es den Technologieunternehmen untersagt, Kopien der Dokumente nach Abschluss der Prüfung zu speichern. Bei Verstößen drohen Plattformen behördliche Bußgelder zwischen 5 und 20 Millionen philippinischen Pesos pro Fall. Eltern, die Minderjährigen wissentlich bei der Umgehung der Sperren helfen, können mit Geldstrafen und gemeinnütziger Arbeit belegt werden.",
      "Die Senatorin Risa Hontiveros stimmte als einzige gegen den Entwurf und argumentierte, ein pauschales Verbot für alle unter 18-Jährigen werde der wachsenden Urteilskraft älterer Jugendlicher nicht gerecht und könne den Zugang zu Bildungsressourcen erschweren. Der Entwurf geht nun in einen Vermittlungsausschuss mit dem Repräsentantenhaus, bevor er Präsident Ferdinand Marcos Jr. zur endgültigen Ausfertigung vorgelegt wird.",
      "Während Staaten neue regulatorische Rahmenbedingungen schaffen, greifen viele Nutzer und Familien zu eigenständigen Methoden, um feste digitale Leitplanken zu setzen. Limitra App Block ermöglicht es, unabhängige tägliche Nutzungszeitlimits für ausgewählte Apps festzulegen und so die eigene Bildschirmzeit bewusst zu strukturieren."
    ],
    source: "Philippinischer Senat (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Regierungspolitik & Gesetze",
    date: "2026-10-08",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "Philippinischer Senat",
      "SMART KIDS Act",
      "Social-Media-Regulierung",
      "Unter 18 Jahre",
      "Altersverifikation",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "100",
    slug: "senado-filipinas-aprova-smart-kids-act-proibicao-redes-menores-18",
    title: "Senado das Filipinas aprova o SMART KIDS Act: Restrição de redes sociais para menores de 18 anos",
    summary: "O Senado das Filipinas aprovou em terceira e última votação o projeto SB 2424 (SMART KIDS Act) por 16 a 1, proibindo menores de 18 anos de criarem ou manterem contas em redes sociais classificadas como de alto risco.",
    content: [
      "O Senado das Filipinas aprovou em terceira e última votação o Projeto de Lei do Senado n.º 2424, denominado SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act), por 16 votos a 1. A nova legislação estabelece diretrizes rigorosas para resguardar crianças e adolescentes contra conteúdos nocivos, aliciamento digital e dependência comportamental, restringindo o acesso e a criação de contas de menores de 18 anos em plataformas classificadas como serviços digitais de alto risco.",
      "A proposta, apresentada pelo senador Robinhood Padilla, concentra-se em redes sociais e plataformas de vídeos curtos orientadas por algoritmos. Com o objetivo de preservar os recursos de estudo e comunicação diária, o projeto isenta expressamente aplicativos de mensagens instantâneas privadas sem canais públicos, serviços de e-mail, plataformas de ensino credenciadas, portais de notícias e jogos eletrônicos sem elementos de rede social.",
      "O texto obriga as empresas de tecnologia a adotarem mecanismos confiáveis de verificação de idade mediante documentos oficiais de identificação. Para resguardar a privacidade, as companhias estão proibidas de reter cópias dos documentos após o término da verificação. Provedores que descumprirem as exigências estarão sujeitos a multas administrativas entre 5 e 20 milhões de pesos filipinos por infração, enquanto responsáveis que colaborarem deliberadamente para burlar o sistema poderão cumprir serviços comunitários e cursos de parentalidade digital.",
      "A senadora Risa Hontiveros foi a única voz contrária à proposta, ponderando que uma proibição irrestrita para todos os menores de 18 anos desconsidera a maturidade progressiva dos adolescentes mais velhos e pode limitar o acesso à informação. O texto segue agora para uma comissão mista com a Câmara dos Representantes antes de ser encaminhado para sanção do presidente Ferdinand Marcos Jr.",
      "À medida que iniciativas governamentais debatem limites formais, muitas pessoas e famílias buscam mecanismos próprios para manter o foco no cotidiano. O Limitra App Block oferece a possibilidade de definir limites diários de tempo de uso para aplicativos selecionados, auxiliando na gestão consciente do tempo de tela."
    ],
    source: "Senado das Filipinas (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Políticas governamentais e leis",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Senado das Filipinas",
      "SMART KIDS Act",
      "Regulamentação de redes sociais",
      "Menores de 18 anos",
      "Verificação de idade",
      "Limitra App Block"
    ]
  },
  it: {
    id: "100",
    slug: "senato-filippine-approva-smart-kids-act-divieto-social-media-under-18",
    title: "Il Senato delle Filippine approva lo SMART KIDS Act: Stop ai social media per i minori di 18 anni",
    summary: "Il Senato delle Filippine ha approvato in terza lettura il disegno di legge SB 2424 (SMART KIDS Act) con 16 voti favorevoli e 1 contrario, vietando ai minori di 18 anni l'apertura e l'uso di account sui social ad alto rischio.",
    content: [
      "Il Senato delle Filippine ha approvato in terza e ultima lettura il disegno di legge n. 2424, noto come SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act), con una maggioranza di 16 voti favorevoli e 1 contrario. Il provvedimento istituisce rigide tutele per salvaguardare bambini e adolescenti da abusi online, contenuti dannosi e dinamiche algoritmiche persuasive, vietando ai minori di 18 anni la creazione e il mantenimento di account sulle piattaforme digitali classificate ad alto rischio.",
      "Promosso dal senatore Robinhood Padilla, il testo riguarda specificamente i social network e le piattaforme di video brevi governate da feed algoritmici. Al fine di preservare le necessità didattiche e di comunicazione essenziale, la normativa esclude espressamente i servizi di messaggistica privata diretta privi di canali pubblici, le caselle e-mail, i portali educativi riconosciuti, i siti di informazione e i videogiochi privi di componenti di rete sociale.",
      "La legge impone ai fornitori digitali di implementare rigorosi sistemi di verifica dell'età basati su documenti di identità ufficiali. Per tutelare la riservatezza degli utenti, le piattaforme non possono conservare copie dei documenti una volta conclusa la procedura. Le aziende inadempienti rischiano sanzioni amministrative da 5 a 20 milioni di pesos filippini per violazione, mentre i genitori che agevolano intenzionalmente l'elusione del blocco possono incorrere in multe e percorsi formativi di genitorialità digitale.",
      "La senatrice Risa Hontiveros ha espresso l'unico voto contrario, evidenziando che un divieto totale fino ai 18 anni non tiene conto della graduale autonomia dei giovani e rischia di limitare l'accesso a fonti formative legittime. Il testo passerà ora al vaglio di una commissione bicamerale con la Camera dei Rappresentanti prima della firma finale del presidente Ferdinand Marcos Jr.",
      "Parallelamente all'introduzione di tutele legislative, molti utenti e famiglie scelgono di adottare regole pratiche e dirette sui propri dispositivi. Limitra App Block consente di configurare limiti giornalieri indipendenti per specifiche applicazioni, aiutando a monitorare e gestire in modo equilibrato il tempo trascorso sullo schermo."
    ],
    source: "Senato delle Filippine (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Politiche governative e leggi",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Senato delle Filippine",
      "SMART KIDS Act",
      "Regolamentazione social media",
      "Minori di 18 anni",
      "Verifica dell'età",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "100",
    slug: "majlis-al-shuyukh-al-filibini-yusadiq-smart-kids-act-hazr-wasail-tawasul-don-18",
    title: "مجلس الشيوخ الفلبيني يقر قانون SMART KIDS Act: قيود مشددة على وسائل التواصل لمن هم دون 18 عاماً",
    summary: "صادق مجلس الشيوخ الفلبيني في القراءة الثالثة والنهائية على مشروع القانون SB 2424 بأغلبية 16 صوتاً مقابل صوت واحد، لحظر إنشاء أو استخدام حسابات على منصات التواصل عالية المخاطر لمن هم دون 18 عاماً.",
    content: [
      "صادق مجلس الشيوخ الفلبيني في القراءة الثالثة والنهائية بأغلبية 16 صوتاً مقابل صوت معارض واحد على مشروع القانون رقم 2424 المعروف باسم SMART KIDS Act (قانون الوصول الآمن للوسائط والتكنولوجيا المسؤولة للأطفال في الفضاء الرقمي). وتهدف هذه المبادرة التشريعية إلى حماية القُصّر من الاستغلال الإلكتروني والمحتوى الضار وآليات الإدمان الخوارزمي، عبر حظر إنشاء أو إدارة حسابات على المنصات الرقمية المصنفة بأنها عالية المخاطر لمن تقل أعمارهم عن 18 عاماً.",
      "يركز مشروع القانون، الذي رعاه السيناتور روبنهود باديلا، على شبكات التواصل الاجتماعي وتطبيقات مقاطع الفيديو القصيرة المعتمدة على الخوارزميات الموجهة. وحرصاً على ضمان استمرار الخدمات التعليمية والاتصالات الأساسية، يستثني القانون صراحةً تطبيقات المراسلة الفورية المباشرة الفردية التي تخلو من المجموعات العامة، وخدمات البريد الإلكتروني، والمنصات التعليمية المعتمدة، والمواقع الإخبارية، والألعاب الإلكترونية التي لا تتضمن شبكات تواصل اجتماعي.",
      "يُلزم التشريع الشركات الرقمية بتطبيق آليات دقيقة للتحقق من العمر استناداً إلى وثائق الهوية الرسمية. وحفاظاً على خصوصية المستخدمين، يُحظر على المنصات الاحتفاظ بنسخ من مستندات الهوية بعد إتمام التحقق. ويواجه مزودو الخدمات المخالفون غرامات إدارية تتراوح بين 5 ملايين و20 مليون بيزو فلبيني عن كل مخالفة، بينما قد يتعرض أولياء الأمور الذين يساعدون القُصّر عمداً في تجاوز الحظر لغرامات وأعمال خدمة مجتمعية وبرامج إرشادية في التربية الرقمية.",
      "وكانت السيناتور ريسا هونتيفيروس صاحبة الصوت المعارض الوحيد، حيث اعتبرت أن الحظر الشامل لمن هم دون 18 عاماً يتجاهل النضج التدريجي للشباب في سن المراهقة وقد يحد من حقهم في الوصول إلى المعرفة. وسينتقل مشروع القانون إلى لجنة توفيق مشتركة مع مجلس النواب لتوحيد النصوص قبل إحالته إلى الرئيس فرديناند ماركوس الابن للمصادقة النهائية.",
      "وفي ظل مساعي الدول لوضع أطر قانونية لحماية الفضاء الرقمي، يفضل العديد من المستخدمين وأولياء الأمور اتخاذ خطوات عملية لضبط عاداتهم اليومية. يتيح تطبيق Limitra App Block تحديد سقف زمني يومي مستقل لكل تطبيق يجري اختياره، مما يساعد في إدارة وقت الشاشة والحد من التشتت الرقمي غير المخطط له."
    ],
    source: "مجلس الشيوخ الفلبيني (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "السياسات الحكومية والقوانين",
    date: "2026-10-08",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "مجلس الشيوخ الفلبيني",
      "SMART KIDS Act",
      "تنظيم وسائل التواصل",
      "دون 18 عاما",
      "التحقق من العمر",
      "Limitra App Block"
    ]
  },
  id: {
    id: "100",
    slug: "senat-filipina-sahkan-smart-kids-act-larangan-media-sosial-bawah-18-tahun",
    title: "Senat Filipina Sahkan SMART KIDS Act: Larangan Media Sosial bagi Pengguna di Bawah 18 Tahun",
    summary: "Senat Filipina mengesahkan RUU SB 2424 (SMART KIDS Act) pada pembacaan ketiga dengan perolehan suara 16-1, melarang anak di bawah usia 18 tahun membuat atau mengakses akun di platform media sosial berisiko tinggi.",
    content: [
      "Senat Filipina resmi mengesahkan Rancangan Undang-Undang Senat No. 2424, yang dikenal sebagai SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act), pada pembacaan ketiga dan terakhir dengan 16 suara setuju dan 1 menolak. Undang-undang ini dirancang untuk membentengi anak-anak dan remaja dari bahaya konten merugikan, eksploitasi daring, serta pola keterikatan algoritmik, dengan melarang individu di bawah usia 18 tahun memiliki akun pada platform digital yang dikategorikan berisiko tinggi.",
      "Disponsori oleh Senator Robinhood Padilla, aturan ini membidik jaringan media sosial komersial dan platform video pendek berbasis rekomendasi otomatis. Guna mendukung kebutuhan belajar dan komunikasi mendasar, beleid ini mengecualikan aplikasi pesan instan pribadi antarpengguna tanpa grup publik, layanan email, platform pembelajaran resmi, situs berita, serta permainan daring tanpa fitur jejaring sosial.",
      "Platform digital diwajibkan menerapkan verifikasi usia yang andal dengan memanfaatkan dokumen identitas resmi yang diakui pemerintah. Untuk melindungi privasi warga, perusahaan dilarang menyimpan salinan identitas tersebut setelah proses verifikasi selesai. Penyedia layanan yang melanggar ketentuan menghadapi sanksi denda administratif sebesar 5 juta hingga 20 juta peso Filipina per pelanggaran, sedangkan orang tua yang secara sengaja membantu memfasilitasi pelanggaran dapat dikenai sanksi kerja sosial dan program pembinaan parenting digital.",
      "Senator Risa Hontiveros menjadi satu-satunya pihak yang memberikan suara menolak, dengan alasan bahwa larangan total hingga usia 18 tahun mengabaikan kapasitas kedewasaan remaja yang sedang bertumbuh serta berpotensi membatasi akses informasi yang sah. RUU ini selanjutnya akan dibahas dalam komite bikameral bersama Dewan Perwakilan Rakyat sebelum diajukan ke Presiden Ferdinand Marcos Jr. untuk disahkan menjadi undang-undang resmi.",
      "Seiring langkah regulasi yang terus bergulir di berbagai negara, banyak individu dan keluarga memilih membangun batasan mandiri di lingkungan masing-masing. Limitra App Block memfasilitasi pengaturan batas waktu penggunaan harian secara independen untuk aplikasi yang dipilih guna membantu menjaga keseimbangan waktu layar."
    ],
    source: "Senat Filipina (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Kebijakan Pemerintah & Hukum",
    date: "2026-10-08",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Senat Filipina",
      "SMART KIDS Act",
      "Regulasi Media Sosial",
      "Bawah 18 Tahun",
      "Verifikasi Usia",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "100",
    slug: "senado-ng-pilipinas-ipinasa-ang-smart-kids-act-bawal-social-media-wala-pang-18",
    title: "Ipinasa ng Senado ng Pilipinas ang SMART KIDS Act: Pagbabawal sa Social Media sa Edad 18 Pababa",
    summary: "Inaprubahan ng Senado ng Pilipinas sa ikatlo at huling pagbasa ang Senate Bill No. 2424 (SMART KIDS Act) sa botong 16–1, na nagbabawal sa mga menor de edad na wala pang 18 taong gulang na magbukas o magkaroon ng account sa mga high-risk social media platform.",
    content: [
      "Inaprubahan ng Senado ng Pilipinas sa ikatlo at huling pagbasa ang Senate Bill No. 2424, o ang Safe Media Access and Responsible Technology for Kids in Digital Spaces (SMART KIDS) Act, sa pamamagitan ng botong 16 pabor at 1 laban. Layunin ng makasaysayang panukalang batas na ito na protektahan ang mga kabataan mula sa panganib sa internet, pang-aabuso, at labis na pagkahumaling sa mga algoritmo sa pamamagitan ng pagbabawal sa mga indibidwal na wala pang 18 taong gulang na gumawa o magpanatili ng account sa mga digital service na tinukoy bilang high-risk.",
      "Isinulong ni Senador Robinhood Padilla ang panukala na nakatutok sa mga pangunahing social media network at short-video apps na gumagamit ng mga awtomatikong recommendation feed. Upang hindi maantala ang pag-aaral at mahahalagang pakikipag-ugnayan, hindi sakop ng pagbabawal ang mga pribadong 1-on-1 messaging app na walang pampublikong grupo, mga serbisyo ng email, accredited na educational portals, mga news website, at online games na walang social networking feature.",
      "Itinatakda ng batas sa mga digital platform ang pagpapatupad ng matibay na mekanismo para sa age verification gamit ang mga opisyal na ID ng pamahalaan. Upang mapangalagaan ang privacy ng mga mamamayan, mahigpit na ipinagbabawal sa mga kumpanya ang pagtatago ng kopya ng mga dokumento kapag natapos na ang proseso ng pagpapatunay. Ang mga lalabag na kumpanya ay maaaring pagmultahin ng ₱5 milyon hanggang ₱20 milyon bawat paglabag, habang ang mga magulang o tagapangalaga na sadyang tutulong sa paglusot sa patakaran ay maaaring patawan ng multa, community service, at pagdalo sa digital parenting program.",
      "Tanging si Senadora Risa Hontiveros ang bumoto laban sa panukala, kung saan iginiit niya na ang pangkalahatang pagbabawal sa lahat ng wala pang 18 taong gulang ay labis na malawak at hindi kumikilala sa lumalawak na kakayahan at pag-unawa ng mga nakatatandang tinedyer. Sasailalim na ngayon ang panukala sa bicameral conference committee upang pag-isahin ang bersyon ng Senado at ng Mababang Kapulungan bago dalhin kay Pangulong Ferdinand Marcos Jr. para sa pinal na lagda.",
      "Habang isinusulong ng pamahalaan ang mga pambansang panuntunan, marami ring indibidwal at pamilya ang naghahanap ng praktikal na paraan upang kontrolin ang sariling gawi sa telepono. Ang Limitra App Block ay nagbibigay-daan upang magtakda ng hiwalay na pang-araw-araw na limitasyon sa oras ng paggamit para sa mga napiling app upang matulungang mabawasan ang pagkaabala sa screen."
    ],
    source: "Senado ng Pilipinas (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "Mga Patakaran ng Pamahalaan at Batas",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Senado ng Pilipinas",
      "SMART KIDS Act",
      "Batas sa Social Media",
      "Wala pang 18 Taon",
      "Age Verification",
      "Limitra App Block"
    ]
  },
  th: {
    id: "100",
    slug: "philippines-senate-smart-kids-act-social-media-ban-under-18",
    title: "วุฒิสภาฟิลิปปินส์ผ่านร่างกฎหมาย SMART KIDS Act: จำกัดการเข้าถึงโซเชียลมีเดียในผู้มีอายุต่ำกว่า 18 ปี",
    summary: "วุฒิสภาฟิลิปปินส์มีมติ 16 ต่อ 1 เสียง ผ่านร่างกฎหมาย SB 2424 (SMART KIDS Act) ในวาระที่สามและวาระสุดท้าย สั่งห้ามผู้มีอายุต่ำกว่า 18 ปีเปิดหรือใช้งานบัญชีบนแพลตฟอร์มโซเชียลมีเดียที่มีความเสี่ยงสูง",
    content: [
      "วุฒิสภาแห่งฟิลิปปินส์มีมติเห็นชอบร่างพระราชบัญญัติ Senate Bill หมายเลข 2424 หรือ SMART KIDS Act (Safe Media Access and Responsible Technology for Kids in Digital Spaces Act) ในการพิจารณาวาระที่สามและวาระสุดท้าย ด้วยคะแนนเสียงเห็นชอบ 16 เสียง และไม่เห็นชอบ 1 เสียง มาตรการทางกฎหมายครั้งประวัติศาสตร์นี้มีเป้าหมายเพื่อคุ้มครองเด็กและเยาวชนจากภัยคุกคามทางไซเบอร์ การแสวงหาประโยชน์ และการเสพติดอัลกอริทึม โดยกำหนดห้ามมิให้บุคคลที่มีอายุต่ำกว่า 18 ปีสร้างหรือถือครองบัญชีบนบริการดิจิทัลที่จัดอยู่ในกลุ่มความเสี่ยงสูง",
      "ร่างกฎหมายดังกล่าวซึ่งนำเสนอโดยวุฒิสมาชิก โรบินฮูด ปาดิลลา (Robinhood Padilla) มุ่งเน้นไปที่เครือข่ายสังคมออนไลน์และแอปพลิเคชันวิดีโอสั้นที่มีระบบฟีดอัลกอริทึม เพื่อไม่ให้กระทบต่อการศึกษาและการสื่อสารที่จำเป็น กฎหมายได้ยกเว้นบริการส่งข้อความส่วนตัวแบบตัวต่อตัวที่ไม่มีกลุ่มสาธารณะ บริการอีเมล แพลตฟอร์มการเรียนรู้ที่ได้รับการรับรอง เว็บไซต์ข่าวสาร ตลอดจนเกมออนไลน์ที่ไม่มีองค์ประกอบของเครือข่ายสังคม",
      "กฎหมายกำหนดให้ผู้ให้บริการแพลตฟอร์มต้องติดตั้งระบบยืนยันอายุที่น่าเชื่อถือโดยใช้เอกสารระบุตัวตนอย่างเป็นทางการที่ออกโดยหน่วยงานรัฐ และเพื่อคุ้มครองความเป็นส่วนตัวของผู้ใช้ แพลตฟอร์มจะถูกห้ามมิให้เก็บรักษาสำเนาเอกสารระบุตัวตนหลังจากเสร็จสิ้นการตรวจสอบ บริษัทที่ไม่ปฏิบัติตามจะต้องเผชิญกับโทษปรับทางปกครองตั้งแต่ 5 ล้านถึง 20 ล้านเปโซฟิลิปปินส์ต่อการกระทำผิดหนึ่งครั้ง ส่วนผู้ปกครองที่มีเจตนาช่วยเหลือให้เด็กหลบเลี่ยงมาตรการอาจต้องรับโทษปรับและทำงานบริการสังคมพร้อมทั้งเข้ารับการอบรมการดูแลเด็กในยุคดิจิทัล",
      "วุฒิสมาชิก ริซา ฮอนติเวรอส (Risa Hontiveros) เป็นผู้ลงคะแนนเสียงคัดค้านเพียงคนเดียว โดยระบุว่าการสั่งห้ามแบบเหมารวมกับทุกคนที่อายุต่ำกว่า 18 ปี ไม่สอดคล้องกับพัฒนาการและการตัดสินใจของวัยรุ่นตอนปลาย และอาจจำกัดสิทธิในการเข้าถึงข้อมูลที่เป็นประโยชน์ ทั้งนี้ ร่างกฎหมายจะเข้าสู่การพิจารณาของคณะกรรมาธิการร่วมสองสภาเพื่อปรับความสอดคล้องกับร่างของสภาผู้แทนราษฎร ก่อนนำเสนอต่อประธานาธิบดี เฟอร์ดินานด์ มาร์กอส จูเนียร์ เพื่อลงนามบังคับใช้ต่อไป",
      "ในขณะที่ภาครัฐกำลังขับเคลื่อนกรอบนโยบายเชิงโครงสร้าง ผู้ใช้และครอบครัวจำนวนมากเลือกสร้างขอบเขตดิจิทัลด้วยตนเองในชีวิตประจำวัน Limitra App Block ช่วยให้สามารถกำหนดขีดจำกัดเวลาใช้งานรายวันสำหรับแต่ละแอปพลิเคชันที่เลือกไว้ เพื่อช่วยจัดการเวลาหน้าจอและลดสิ่งรบกวนสมาธิอย่างมีประสิทธิภาพ"
    ],
    source: "วุฒิสภาแห่งฟิลิปปินส์ (Senate of the Philippines) & ABS-CBN News",
    sourceUrl: "https://legacy.senate.gov.ph",
    category: "นโยบายและกฎหมายของรัฐ",
    date: "2026-10-08",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "วุฒิสภาฟิลิปปินส์",
      "SMART KIDS Act",
      "กฎหมายโซเชียลมีเดีย",
      "อายุต่ำกว่า 18 ปี",
      "การยืนยันอายุ",
      "Limitra App Block"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filePath = lang === 'tr' 
    ? path.join(dataDir, 'haberler.json') 
    : path.join(dataDir, `news-${lang}.json`);

  const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (list.some(item => item.id === "100")) {
    console.log(`[${lang}] ID 100 already exists, skipping.`);
    continue;
  }

  list.unshift(articles[lang]);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] ID 100 prepended successfully to ${path.basename(filePath)}`);
}
