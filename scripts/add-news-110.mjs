import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const newsData = {
  tr: {
    id: "110",
    slug: "abd-senatosu-kosa-yasasi-bagimlilik-yapan-algoritmalar-ve-guvenlik-standartlari",
    title: "ABD Senatosu'ndan Tarihi Karar: 91'e 3 Oyla Geçen KOSA Yasası ile Sosyal Medyada 'Özen Yükümlülüğü' Dönemi",
    summary: "ABD Senatosu, çocukları ve gençleri algoritmaların bağımlılık yapıcı tuzaklarından korumayı hedefleyen Çocukların Çevrim İçi Güvenliği Yasası'nı (KOSA) 91 kabul ve 3 ret oyuyla onayladı. Richard Blumenthal ve Marsha Blackburn öncülüğünde hazırlanan federal yasa; teknoloji şirketlerine yasal 'özen yükümlülüğü' getirirken, sonsuz kaydırma gibi bağımlılık yapıcı tasarım özelliklerinin kapatılabilmesini ve varsayılan en katı güvenlik standartlarını şart koşuyor.",
    content: [
      "Amerika Birleşik Devletleri Senatosu, dijital çağda çocukların ve gençlerin zihinsel gelişimini koruma hedefiyle son çeyrek asrın en kapsamlı federal teknoloji düzenlemesine imza attı. Demokrat Senatör Richard Blumenthal ve Cumhuriyetçi Senatör Marsha Blackburn tarafından ortaklaşa hazırlanan Çocukların Çevrim İçi Güvenliği Yasası (Kids Online Safety Act - KOSA), Senato Genel Kurulu'nda 91 kabul ve 3 ret gibi ezici bir iki partili çoğunlukla kabul edildi. Yıllardır teknoloji devlerinin kendi özdenetim mekanizmalarına bırakılan dijital alanı ilk kez bağlayıcı federal standartlara bağlayan tasarı, algoritmik sömürüye ve ekran bağımlılığına karşı dönüm noktası olarak değerlendiriliyor.",
      "Yasanın hukuki temelini, sosyal ağ sağlayıcılarına ve çevrim içi platformlara yüklenen yasal 'özen yükümlülüğü' (duty of care) oluşturuyor. Bu ilke uyarınca teknoloji şirketleri, 17 yaşın altındaki reşit olmayan kullanıcılara yönelik hizmet tasarımlarında makul tedbirleri almak ve olası zararları önceden hafifletmekle doğrudan sorumlu tutuluyor. Platformların; depresyon, kaygı bozuklukları, intihar ve kendine zarar verme eğilimleri, yeme bozuklukları, siber zorbalık ve kompulsif ekran bağımlılığını körükleyen algoritmik yapıları engellemesi yasal zorunluluk haline geliyor.",
      "Düzenleme, genç kullanıcıları ekranda saatlerce tutmak üzere kurgulanan agresif dikkat mühendisliği araçlarını doğrudan hedef alıyor. Platformlar; gençlere ve ebeveynlere sonsuz kaydırma (infinite scroll), videoların otomatik oynatılması (auto-play) ve kullanıcıyı zorlantılı biçimde uygulamaya geri çağıran anlık bildirim döngülerini tek bir dokunuşla kapatma seçeneği sunmak zorunda kalacak. Ayrıca platformlar, kişiselleştirilmiş manipülatif öneri motorları yerine kronolojik içerik akışına geçme imkânı tanıyacak ve reşit olmayan tüm hesaplar varsayılan olarak en yüksek gizlilik ve güvenlik ayarlarıyla açılacak.",
      "Yasanın yaptırım mekanizması, Federal Ticaret Komisyonu (FTC) ve eyalet başsavcılarının koordinasyonunda yürütülecek; kuralları ihlal eden teknoloji devlerine her bir ihlal için ağır federal para cezaları uygulanacak. Aynı zamanda büyük platformların çocuk güvenliği risklerini her yıl bağımsız denetçilere açması ve akredite akademik araştırmacılara algoritmik işleyişe dair şeffaf veri erişimi sağlaması şart koşuluyor. Ebeveynlere ise çocuklarının günlük ekran sürelerini şeffaf biçimde takip edebilecekleri ve sınır koyabilecekleri yerel araçlar sunulması zorunlu hale getiriliyor.",
      "Yasal düzenlemeler platform seviyesinde güvenlik standartları inşa etmeyi amaçlarken, günlük hayatta ekran başında geçirilen zamanı dengede tutmak bireysel disiplin ve somut araçlar gerektiriyor. Seçilen uygulamalara bağımsız günlük kullanım süresi limitleri belirlemek isteyenler için Limitra App Block, belirlenen süre dolduğunda erişimi durdurarak sağlıklı dijital alışkanlıkların korunmasına yardımcı oluyor."
    ],
    source: "ABD Senatosu (Senate.gov) & FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Devlet Düzenlemeleri & Yasalar",
    date: "2026-10-14",
    readTime: "5 dk",
    featured: false,
    tags: [
      "KOSA Yasası",
      "ABD Senatosu",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Özen Yükümlülüğü",
      "Sonsuz Kaydırma Yasağı",
      "Limitra App Block"
    ]
  },
  en: {
    id: "110",
    slug: "us-senate-kosa-act-addictive-algorithms-safety-standards",
    title: "Historic U.S. Senate Vote: KOSA Passes 91-3, Enforcing 'Duty of Care' and Curbing Addictive Algorithms",
    summary: "The United States Senate has overwhelmingly approved the Kids Online Safety Act (KOSA) in a historic 91-3 bipartisan vote. Championed by Senators Richard Blumenthal and Marsha Blackburn, the landmark legislation establishes a statutory 'duty of care' for tech platforms, mandates the ability to disable addictive features like infinite scrolling, and enforces the strictest default privacy protections for minors.",
    content: [
      "In a historic milestone for digital governance, the United States Senate has approved the most comprehensive federal tech regulation in more than two decades, voting 91-3 to pass the Kids Online Safety Act (KOSA). Co-authored by Democratic Senator Richard Blumenthal and Republican Senator Marsha Blackburn, the bipartisan legislation establishes legally binding child safety standards across major social networks and digital platforms. Moving past years of voluntary industry pledges, the statute establishes enforceable guardrails designed to shield youth from algorithmic manipulation and compulsive screen time habits.",
      "At the legal core of the legislation is a statutory 'duty of care' imposed directly on tech conglomerates and online services. Under this mandate, platforms must take affirmative and reasonable measures in the design and operation of their products to prevent and mitigate specified harms to minors under 17. The law explicitly obligates companies to curb product designs that promote mental health disorders, depression, anxiety, eating disorders, self-harm, cyberbullying, sexual exploitation, and compulsive, addictive engagement loops.",
      "The statute systematically dismantles key elements of aggressive engagement engineering engineered to maximize youth screen time. Covered platforms will be legally required to provide accessible safeguards allowing minors and parents to turn off addictive recommendation engines, disable endless infinite scrolling, switch off automatic video autoplay, and mute retention-focused push notifications. Furthermore, platforms must offer alternative chronological content feeds and enforce maximum privacy and safety protections by default, restricting direct messaging from strangers and eliminating algorithmic behavioral profiling.",
      "Enforcement of the legislation is anchored in dual oversight by the Federal Trade Commission (FTC) and state attorneys general, backed by substantial civil penalties for non-compliance. Large digital platforms must undergo mandatory annual independent risk assessments and grant vetted academic researchers transparent access to algorithmic recommendation systems. In parallel, platforms must equip parents with integrated tools to monitor aggregate daily screen time and configure usage boundaries without compromising the privacy of encrypted communications.",
      "While government frameworks mandate platform-level protections, cultivating balanced digital habits in daily life requires deliberate personal boundaries. For those seeking to establish independent daily time limits on selected applications, Limitra App Block provides local device controls that pause access once a chosen limit is reached."
    ],
    source: "U.S. Senate (Senate.gov) & FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Government Policies & Laws",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "KOSA Act",
      "US Senate",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Duty of Care",
      "Addictive Algorithms",
      "Limitra App Block"
    ]
  },
  es: {
    id: "110",
    slug: "senado-eeuu-ley-kosa-algoritmos-adictivos-estandares-seguridad",
    title: "Decisión histórica en el Senado de EE. UU.: La ley KOSA sale adelante 91-3 e impone el 'deber de diligencia' en redes sociales",
    summary: "El Senado de Estados Unidos aprueba por una abrumadora mayoría bipartidista de 91 votos a favor y 3 en contra la Ley de Seguridad Infantil en Línea (KOSA). Impulsada por Richard Blumenthal y Marsha Blackburn, la normativa federal instaura un 'deber de diligencia' vinculante para las grandes tecnológicas, exige permitir la desactivación del scroll infinito y fija la máxima privacidad por defecto.",
    content: [
      "En una jornada histórica para la regulación del entorno digital, el Senado de los Estados Unidos aprobó por una contundente mayoría bipartidista de 91 votos frente a 3 la Ley de Seguridad Infantil en Línea (Kids Online Safety Act, KOSA). Impulsada conjuntamente por el senador demócrata Richard Blumenthal y la senadora republicana Marsha Blackburn, la ley constituye la reforma federal más ambiciosa de las últimas dos décadas para proteger a menores y adolescentes frente a la manipulación algorítmica y la dependencia tecnológica.",
      "La piedra angular del texto legislativo radica en la instauración de un 'deber de diligencia' (duty of care) jurídicamente vinculante para las plataformas sociales y los servicios en línea. Este principio responsabiliza de forma directa a las corporaciones tecnológicas de adoptar medidas razonables en el diseño de sus sistemas para prevenir y mitigar perjuicios sobre menores de 17 años, tales como la depresión, la ansiedad clínica, los trastornos de la conducta alimentaria, las autolesiones, el ciberacoso y los patrones compulsivos de consumo de pantalla.",
      "La norma arremete contra las técnicas persuasivas de ingeniería de la atención que buscan retener indefinidamente a los jóvenes frente a las pantallas. Las plataformas estarán obligadas a facilitar a menores y progenitores herramientas sencillas para desactivar los algoritmos adictivos de recomendación, el desplazamiento infinito (infinite scroll), la reproducción automática de vídeos y las notificaciones automáticas diseñadas para forzar el retorno. Asimismo, deberán habilitar la opción de un muro cronológico y mantener por defecto la configuración de privacidad y seguridad más estricta.",
      "El régimen sancionador recaerá bajo la supervisión coordinada de la Comisión Federal de Comercio (FTC) y los fiscales generales de los estados, contemplando cuantiosas multas por infracción. Además, las grandes compañías tecnológicas deberán someterse a auditorías independientes anuales y abrir sus datos de recomendación a investigadores académicos acreditados. A su vez, los padres contarán con herramientas transparentes para supervisar el tiempo total de pantalla y fijar límites claros de uso sin vulnerar la intimidad de las comunicaciones privadas.",
      "Mientras las normativas públicas exigen mayores salvaguardas a las plataformas, construir rutinas equilibradas en el día a día requiere límites personales deliberados. Para quienes buscan establecer límites diarios independientes de tiempo en aplicaciones concretas, Limitra App Block permite pausar el acceso en el propio dispositivo una vez alcanzado el tiempo fijado."
    ],
    source: "Senado de EE. UU. (Senate.gov) y FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Políticas gubernamentales y leyes",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "Ley KOSA",
      "Senado de EE. UU.",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Deber de Diligencia",
      "Scroll Infinito",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "110",
    slug: "senat-americain-loi-kosa-algorithmes-addictifs-normes-securite",
    title: "Vote historique au Sénat américain : La loi KOSA adoptée par 91 voix contre 3, imposant un 'devoir de vigilance' aux plateformes",
    summary: "Le Sénat des États-Unis a massivement approuvé le Kids Online Safety Act (KOSA) par 91 voix contre 3. Porté par Richard Blumenthal et Marsha Blackburn, ce texte fédéral fondamental instaure une obligation légale de vigilance pour les géants de la tech, impose la désactivation du défilement infini et sanctuarise la protection par défaut des mineurs.",
    content: [
      "Dans une démarche bipartisane sans précédent depuis plus de vingt ans, le Sénat des États-Unis a voté à une écrasante majorité de 91 voix contre 3 en faveur du Kids Online Safety Act (KOSA). Porté conjointement par le sénateur démocrate Richard Blumenthal et la sénatrice républicaine Marsha Blackburn, ce texte fédéral majeur soumet pour la première fois les réseaux sociaux et plateformes numériques à des exigences de sécurité juridique contraignantes, visant à soustraire les mineurs aux pièges de la captologie et des flux addictifs.",
      "L'armature juridique du texte repose sur la création d'un 'devoir de vigilance' (duty of care) imposé aux exploitants de plateformes numériques. En vertu de cette obligation, les entreprises de la tech doivent concevoir et paramétrer leurs produits de manière à prévenir et atténuer activement les préjudices graves subis par les mineurs de moins de 17 ans. Sont formellement ciblés les troubles anxieux, la dépression, les conduites suicidaires, les troubles du comportement alimentaire, le cyberharcèlement ainsi que les boucles de dépendance comportementale.",
      "Le texte s'attaque frontalement aux fonctionnalités persuasives conçues pour monopoliser l'attention des adolescents. Les plateformes devront obligatoirement permettre aux mineurs et à leurs parents de désactiver d'un simple geste les moteurs de recommandation algorithmique, le défilement infini (infinite scroll), la lecture automatique des vidéos et les notifications de rétention intempestives. Par ailleurs, les réseaux devront proposer un affichage chronologique non profilé et appliquer par défaut le niveau de confidentialité et de protection le plus élevé.",
      "L'application de la loi sera orchestrée conjointement par la Federal Trade Commission (FTC) et les procureurs généraux des États, avec de lourdes sanctions financières à la clé. Les grandes plateformes devront en outre publier un audit indépendant annuel de leurs risques et octroyer aux chercheurs universitaires un accès transparent à leurs algorithmes. Les parents disposeront d'outils intégrés pour contrôler le temps d'écran quotidien cumulé et poser des limites d'usage, dans le respect du secret des échanges privés chiffrés.",
      "Tandis que la législation impose des garde-fous aux plateformes, maintenir un usage mesuré au quotidien repose sur des limites personnelles concrètes. Pour ceux qui souhaitent définir des limites quotidiennes indépendantes par application, Limitra App Block permet de restreindre l'accès directement sur l'appareil lorsque la durée choisie est atteinte."
    ],
    source: "Sénat américain (Senate.gov) et FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Politiques publiques et lois",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "Loi KOSA",
      "Sénat américain",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Devoir de Vigilance",
      "Défilement Infini",
      "Limitra App Block"
    ]
  },
  de: {
    id: "110",
    slug: "us-senat-kosa-gesetz-suchterzeugende-algorithmen-sicherheitsstandards",
    title: "Historische Abstimmung im US-Senat: KOSA-Gesetz mit 91 zu 3 Stimmen verabschiedet – Sorgfaltspflicht für Social-Media-Konzerne",
    summary: "Der US-Senat hat den Kids Online Safety Act (KOSA) mit einer parteiübergreifenden Mehrheit von 91 zu 3 Stimmen angenommen. Die von Richard Blumenthal und Marsha Blackburn initiierte Bundesgesetzgebung verpflichtet Tech-Plattformen zu einer rechtlichen 'Sorgfaltspflicht', ermöglicht das Abschalten endloser Feeds und schreibt strengste Voreinstellungen für Minderjährige vor.",
    content: [
      "In einem historischen Schulterschluss hat der Senat der Vereinigten Staaten mit 91 zu 3 Stimmen für den Kids Online Safety Act (KOSA) gestimmt und damit die bedeutendste parteiübergreifende Tech-Regulierung seit über zwei Jahrzehnten beschlossen. Der Gesetzentwurf des demokratischen Senators Richard Blumenthal und der republikanischen Senatorin Marsha Blackburn setzt den jahrelangen freiwilligen Selbstverpflichtungen der Digitalkonzerne ein Ende und verankert verbindliche bundesweite Schutzstandards, um Jugendliche vor algorithmischer Manipulation und unkontrollierter Bildschirmzeit zu schützen.",
      "Das juristische Herzstück des Gesetzes ist eine gesetzliche 'Sorgfaltspflicht' (duty of care), die Online-Plattformen und sozialen Netzwerken auferlegt wird. Betreiber sind künftig rechtlich verpflichtet, bei der Konzeption und dem Betrieb ihrer Dienste angemessene Vorkehrungen zu treffen, um Gefahren für Minderjährige unter 17 Jahren proaktiv zu verhindern und abzumildern. Dies umfasst insbesondere die Vorbeugung von Depressionen, Angststörungen, Essstörungen, Cybermobbing, Suizidgefährdung sowie suchtähnlichen, zwanghaften Verhaltensmustern bei der Bildschirmnutzung.",
      "Das Gesetz untersagt den ungebremsten Einsatz persuasiver Designmuster, die gezielt auf die Ausbeutung jugendlicher Aufmerksamkeit abzielen. Plattformen müssen Minderjährigen und Eltern intuitive Kontrollen bereitstellen, um algorithmische Empfehlungssysteme, unendliches Scrollen (infinite scroll), automatische Videowiedergaben und aufdringliche Push-Benachrichtigungen mit einem Klick zu deaktivieren. Zudem müssen chronologische Beitragsübersichten als Alternative bereitstehen und alle Konten von Minderjährigen standardmäßig auf die höchste Privatsphäre- und Sicherheitsstufe geschaltet sein.",
      "Die Durchsetzung liegt in den Händen der Federal Trade Commission (FTC) und der Generalstaatsanwälte der Bundesstaaten, die Verstöße mit empfindlichen Zivilstrafen ahnden können. Große Tech-Unternehmen werden zudem verpflichtet, jährliche unabhängige Risikoaudits durchführen zu lassen und akkreditierten Forschern Einblick in ihre algorithmischen Systeme zu gewähren. Eltern erhalten standardisierte Werkzeuge an die Hand, um die tägliche Gesamtnutzungszeit ihrer Kinder transparent einzusehen und Obergrenzen festzulegen, ohne vertrauliche Nachrichten einzusehen.",
      "Während staatliche Gesetze Schutzregeln auf Plattformebene vorschreiben, verlangt ein gesunder digitaler Alltag im Hier und Jetzt klare persönliche Leitplanken. Für diejenigen, die für ausgewählte Anwendungen unabhängige tägliche Zeitlimits festlegen möchten, hilft Limitra App Block dabei, den Zugriff auf dem eigenen Gerät zu sperren, sobald das festgelegte Limit erreicht ist."
    ],
    source: "US-Senat (Senate.gov) & FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Regierungspolitik & Gesetze",
    date: "2026-10-14",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "KOSA-Gesetz",
      "US-Senat",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Sorgfaltspflicht",
      "Endloses Scrollen",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "110",
    slug: "senado-eua-lei-kosa-algoritmos-viciantes-padroes-seguranca",
    title: "Decisão histórica no Senado dos EUA: Lei KOSA é aprovada por 91 a 3 e impõe 'dever de cuidado' às redes sociais",
    summary: "O Senado dos Estados Unidos aprovou a Lei de Segurança Infantil Online (KOSA) por expressivos 91 votos a 3. Liderado por Richard Blumenthal e Marsha Blackburn, o marco federal pioneiro impõe às empresas de tecnologia o dever legal de cuidado, obriga a desativação da rolagem infinita e determina configurações máximas de privacidade para menores.",
    content: [
      "Em uma votação bipartidária histórica para a governança tecnológica, o Senado dos Estados Unidos aprovou por 91 votos a 3 a Lei de Segurança Infantil Online (Kids Online Safety Act, KOSA). Desenvolvida em conjunto pelo senador democrata Richard Blumenthal e pela senadora republicana Marsha Blackburn, a legislação federal representa a maior reforma nas regras para o ecossistema digital em mais de duas décadas, impondo parâmetros obrigatórios para proteger jovens contra táticas de retenção algorítmica e tempo de tela desmedido.",
      "A estrutura jurídica da lei baseia-se na exigência de um 'dever de cuidado' (duty of care) legalmente vinculante para as plataformas de redes sociais e serviços conectados. Pela nova diretriz, as empresas passam a responder judicialmente pela obrigação de adotar medidas razoáveis na arquitetura de seus produtos, prevenindo e mitigando danos a menores de 17 anos. A obrigação abrange a contenção de riscos ligados a depressão, crises de ansiedade, distúrbios alimentares, automutilação, intimidação virtual e uso compulsivo das telas.",
      "O texto ataca diretamente os mecanismos de design persuasivo criados para prender a atenção dos adolescentes por horas a fio. As plataformas passam a ser obrigadas a oferecer aos jovens e seus responsáveis a opção de desativar os motores de recomendação algorítmica, a rolagem infinita (infinite scroll), a reprodução automática de vídeos e as notificações insistentes de engajamento. As redes também deverão disponibilizar feeds cronológicos alternativos e ativar, por padrão, o nível máximo de proteção e privacidade nas contas de menores.",
      "A fiscalização será conduzida em conjunto pela Comissão Federal de Comércio (FTC) e pelos procuradores-gerais estaduais, com previsão de multas severas por descumprimento. As grandes corporações de tecnologia deverão passar por auditorias independentes anuais e abrir o funcionamento de seus algoritmos a pesquisadores acadêmicos credenciados. Paralelamente, os pais terão acesso a recursos transparentes para monitorar o tempo total diário de tela e estipular barreiras de uso sem violar a privacidade das mensagens dos filhos.",
      "Enquanto a legislação pública estabelece salvaguardas nas plataformas, sustentar uma rotina equilibrada no dia a dia exige limites pessoais deliberados. Para quem deseja definir limites diários independentes de tempo em aplicativos específicos, o Limitra App Block permite pausar o acesso no próprio dispositivo assim que o período estipulado é atingido."
    ],
    source: "Senado dos EUA (Senate.gov) e FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Políticas governamentais e leis",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "Lei KOSA",
      "Senado dos EUA",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Dever de Cuidado",
      "Rolagem Infinita",
      "Limitra App Block"
    ]
  },
  it: {
    id: "110",
    slug: "senato-usa-legge-kosa-algoritmi-additivi-standard-sicurezza",
    title: "Svolta storica al Senato USA: La legge KOSA passa con 91 voti a 3, imponendo il 'dovere di diligenza' ai giganti digitali",
    summary: "Il Senato degli Stati Uniti approva a larghissima maggioranza bipartisan (91-3) il Kids Online Safety Act (KOSA). Promossa da Richard Blumenthal e Marsha Blackburn, la normativa federale istituisce un 'dovere di diligenza' vincolante, impone l'opzione di spegnere lo scrolling infinito e fissa la massima riservatezza predefinita per i minori.",
    content: [
      "Con un voto bipartisan di portata storica, il Senato degli Stati Uniti ha approvato a schiacciante maggioranza (91 voti favorevoli e 3 contrari) il Kids Online Safety Act (KOSA), segnando la più rilevante riforma della disciplina tecnologica federale negli ultimi vent'anni. Il provvedimento, guidato dal senatore democratico Richard Blumenthal e dalla senatrice repubblicana Marsha Blackburn, sostituisce le insufficienti politiche di autoregolamentazione delle piattaforme con standard giuridici rigorosi per proteggere i minori dalle dinamiche di cattura dell'attenzione e dalla dipendenza da schermo.",
      "Il cardine normativo del testo poggia sull'introduzione di un vincolante 'dovere di diligenza' (duty of care) per i gestori di reti sociali e servizi online. In base a questo principio, le aziende tecnologiche hanno l'obbligo legale di adottare misure ragionevoli nella progettazione dei loro prodotti per prevenire e mitigare danni specifici agli under 17. Tra questi figurano disturbi depressivi, ansia clinica, disturbi del comportamento alimentare, condotte autolesionistiche, cyberbullismo e cicli compulsivi di utilizzo continuo.",
      "La legge interviene in modo incisivo sui meccanismi algoritmici concepiti per massimizzare la permanenza degli utenti più giovani. Le piattaforme saranno obbligate a mettere a disposizione di ragazzi e genitori strumenti semplici per disattivare gli algoritmi di raccomandazione, lo scorrimento infinito (infinite scroll), l'avvio automatico dei video e le notifiche studiate per indurre il ritorno compulsivo all'app. Sarà inoltre obbligatorio consentire la visualizzazione cronologica dei contenuti e applicare come impostazione predefinita il grado massimo di privacy e tutela.",
      "L'attuazione delle prescrizioni sarà presidiata dalla Federal Trade Commission (FTC) e dai procuratori generali dei singoli stati, con sanzioni pecuniarie particolarmente severe per ogni inadempienza. I grandi colossi del web saranno tenuti a sottoporsi a verifiche indipendenti annuali e a garantire ai ricercatori universitari accreditati l'accesso ai dati sui sistemi di raccomandazione. I genitori riceveranno strumenti integrati per monitorare il monte ore quotidiano e definire soglie di utilizzo, salvaguardando al contempo la riservatezza delle comunicazioni private.",
      "Mentre le normative pubbliche mirano a rafforzare le tutele a monte sulle piattaforme, costruire abitudini digitali sane nella quotidianità richiede confini personali concreti. Per chi desidera impostare limiti giornalieri indipendenti di tempo su determinate applicazioni, Limitra App Block permette di sospendere l'accesso direttamente sul dispositivo una volta raggiunta la soglia prestabilita."
    ],
    source: "Senato USA (Senate.gov) e FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Politiche governative e leggi",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "Legge KOSA",
      "Senato USA",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Dovere di Diligenza",
      "Scrolling Infinito",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "110",
    slug: "majlis-alshuyukh-alamriki-qanun-kosa-khawarithmiyat-alimaniyya",
    title: "قرار تاريخي في مجلس الشيوخ الأمريكي: تمرير قانون KOSA بأغلبية 91 مقابل 3 وفرض 'واجب الرعاية' على المنصات",
    summary: "وافق مجلس الشيوخ الأمريكي بأغلبية ساحقة من الحزبين (91 مقابل 3) على قانون أمان الأطفال على الإنترنت (KOSA). يفرض التشريع الفيدرالي الذي قاده ريتشارد بلومنتال ومارشا بلاكبيرن 'واجب رعاية' قانونياً على كبرى شركات التكنولوجيا، مع إلزامية إتاحة خيار إيقاف التمرير اللانهائي وتطبيق أقصى إعدادات خصوصية للقاصرين.",
    content: [
      "في خطوة تاريخية لإصلاح الفضاء الرقمي، أقر مجلس الشيوخ الأمريكي بأغلبية كاسحة بلغت 91 صوتاً مقابل 3 أصوات قانون أمان الأطفال على الإنترنت (KOSA)، مسجلاً أهم تشريع فيدرالي لتنظيم كبرى شركات التكنولوجيا منذ أكثر من عقدين. ويؤسس القانون المشترك بين السيناتور الديمقراطي ريتشارد بلومنتال والسيناتورة الجمهورية مارشا بلاكبيرن معايير قانونية ملزمة تنهي عقوداً من سياسات التنظيم الذاتي للمنصات، بهدف حماية المراهقين من خوارزميات الاستدراج والإفراط في قضاء الساعات أمام الشاشات.",
      "يرتكز القانون على مبدأ قانوني محوري يُعرف باسم 'واجب الرعاية' (duty of care) المفروض على منصات التواصل الاجتماعي والخدمات الرقمية. وبموجب هذا الالتزام، تصبح الشركات مسؤولة قانونياً عن اتخاذ تدابير استباقية معقولة في تصميم برمجياتها لمنع وتخفيف الأضرار الموجهة للقاصرين دون سن 17 عاماً. وتشمل هذه الأضرار حالات الاكتئاب، واضطرابات القلق الحاد، واضطرابات الأكل، وإيذاء النفس، والتنمر الإلكتروني، وأنماط الاستخدام القهري المسببة للإدمان الرقمي.",
      "يستهدف التشريع بصرامة آليات 'هندسة الانتباه' المصممة لإبقاء المستخدمين الصغار مأسورين في دوامة المحتوى. وسيتعين على المنصات تزويد اليافعين وأولياء أمورهم بأدوات سهلة لإيقاف الخوارزميات التوصيات المصممة للاستدراج، وإلغاء ميزة التمرير اللانهائي (infinite scroll)، والتشغيل التلقائي لمقاطع الفيديو، والإشعارات المتواصلة التي تحث على العودة القسرية للتطبيق. كما يُلزم القانون المنصات بإتاحة خيار الترتيب الزمني للمنشورات وتفعيل أقصى درجات الخصوصية والأمان كإعداد افتراضي.",
      "تتولى لجنة التجارة الفيدرالية (FTC) بالتعاون مع المدعين العامين في الولايات إنفاذ أحكام القانون، مع فرض غرامات مالية باهظة عن كل انتهاك يثبت بحق الشركات المخالفة. كما ستخضع المنصات الكبرى لتدقيق أمني سنوي مستقل وتلتزم بإتاحة بيانات الخوارزميات للباحثين الأكاديميين المعتمدين. وفي الوقت ذاته، يُلزم القانون توفير لوحات تحكم للآباء لمتابعة الوقت الإجمالي للشاشة ووضع قيود واضحة دون التعدي على سرية الرسائل الشخصية المشفرة.",
      "وفي حين تهدف القوانين الفيدرالية إلى وضع ضوابط عامة على مستوى المنصات، فإن إدارة الوقت اليومي أمام الشاشات تتطلب حدوداً شخصية ملموسة. ولمن يرغب في تحديد مدة استخدام يومية مستقلة لتطبيقات مختارة، يتيح Limitra App Block إيقاف الوصول إلى التطبيق على الجهاز ذاته فور انتهاء الوقت المحدد، بما يدعم بناء عادات رقمية متوازنة."
    ],
    source: "مجلس الشيوخ الأمريكي (Senate.gov) ولجنة التجارة الفيدرالية",
    sourceUrl: "https://www.senate.gov",
    category: "السياسات الحكومية والقوانين",
    date: "2026-10-14",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "قانون KOSA",
      "مجلس الشيوخ الأمريكي",
      "ريتشارد بلومنتال",
      "مارشا بلاكبيرن",
      "واجب الرعاية",
      "التمرير اللانهائي",
      "Limitra App Block"
    ]
  },
  id: {
    id: "110",
    slug: "senat-as-undang-undang-kosa-algoritma-adiktif-standar-keamanan",
    title: "Keputusan Bersejarah Senat AS: UU KOSA Lolos 91-3, Wajibkan 'Kewajiban Berhati-hati' bagi Media Sosial",
    summary: "Senat Amerika Serikat meloloskan Undang-Undang Keamanan Daring Anak (KOSA) dengan suara mayoritas telak 91 setuju berbanding 3 menolak. Diprakarsai oleh Richard Blumenthal dan Marsha Blackburn, undang-undang federal ini mewajibkan 'duty of care' bagi raksasa teknologi, menuntut opsi pemadaman infinite scroll, serta menetapkan perlindungan privasi tertinggi secara bawaan bagi remaja.",
    content: [
      "Dalam langkah bersejarah bagi tata kelola teknologi global, Senat Amerika Serikat menyetujui Kids Online Safety Act (KOSA) melalui pemungutan suara lintas partai dengan hasil telak 91 setuju dan 3 menolak. Undang-undang federal yang dirumuskan oleh Senator Demokrat Richard Blumenthal dan Senator Republik Marsha Blackburn ini menjadi regulasi teknologi paling signifikan dalam dua dasawarsa terakhir, menggantikan janji sukarela industri dengan aturan hukum mengikat guna membentengi remaja dari manipulasi algoritma dan durasi layar berlebih.",
      "Fondasi utama undang-undang ini adalah penerapan 'kewajiban berhati-hati' (duty of care) yang dibebankan secara hukum kepada pengelola platform media sosial dan layanan digital. Berdasarkan prinsip ini, korporasi teknologi diwajibkan mengambil langkah-langkah pencegahan nyata dalam desain sistem mereka untuk meredam bahaya bagi pengguna di bawah usia 17 tahun. Tanggung jawab hukum tersebut mencakup mitigasi terhadap depresi, gangguan kecemasan, gangguan pola makan, perundungan siber, dorongan menyakiti diri sendiri, serta pola ketergantungan layar yang kompulsif.",
      "Regulasi ini menargetkan secara spesifik fitur-fitur rekayasa perhatian yang dirancang untuk mengunci waktu pengguna muda di depan layar. Platform diwajibkan menyediakan mekanisme praktis bagi remaja dan orang tua untuk mematikan mesin rekomendasi algoritmik, menghentikan fitur gulir tanpa akhir (infinite scroll), menonaktifkan pemutaran video otomatis, serta memblokir notifikasi persuasif yang memicu dorongan membuka kembali aplikasi. Platform juga wajib menyediakan opsi linimasa kronologis dan memberlakukan setelan privasi paling ketat secara bawaan.",
      "Pengawasan kepatuhan hukum akan dijalankan secara terpadu oleh Komisi Perdagangan Federal (FTC) bersama para Jaksa Agung di tingkat negara bagian, dengan ancaman denda perdata yang signifikan atas setiap pelanggaran. Platform skala besar juga diwajibkan menjalani audit risiko independen tahunan dan membuka akses data sistem rekomendasi bagi peneliti akademis terverifikasi. Pada saat yang sama, orang tua akan dibekali alat bawaan untuk memantau akumulasi waktu layar harian dan menentukan batas pemakaian tanpa melanggar kerahasiaan pesan terenkripsi anak.",
      "Sementara regulasi pemerintah berfokus membangun perlindungan sistemik pada tingkat platform, memelihara kebiasaan layar yang seimbang dalam keseharian menuntut batasan pribadi yang nyata. Bagi pengguna yang ingin menetapkan batas durasi harian tersendiri pada aplikasi tertentu, Limitra App Block membantu menghentikan akses langsung di perangkat saat batas waktu yang dipilih telah terpenuhi."
    ],
    source: "Senat AS (Senate.gov) & FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Kebijakan Pemerintah & Hukum",
    date: "2026-10-14",
    readTime: "5 menit",
    featured: false,
    tags: [
      "UU KOSA",
      "Senat AS",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Duty of Care",
      "Infinite Scroll",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "110",
    slug: "senado-ng-us-batas-kosa-nakakaadik-na-algoritmo-pamantayan-sa-kaligtasan",
    title: "Makasaysayang Desisyon ng Senado ng US: KOSA Naaprubahan nang 91-3, Ipinatupad ang 'Duty of Care' sa Social Media",
    summary: "Inaprubahan ng Senado ng Estados Unidos ang Kids Online Safety Act (KOSA) sa pamamagitan ng malaking boto na 91 sang-ayon at 3 tutol. Pinangunahan nina Richard Blumenthal at Marsha Blackburn, nagtatakda ang batas pederal ng ligal na 'duty of care' para sa tech platforms, nag-uutos na gawing opsiyonal ang infinite scroll, at nagpapatupad ng pinakamahigpit na default privacy para sa kabataan.",
    content: [
      "Sa isang makasaysayang tagumpay para sa digital na regulasyon, inaprubahan ng Senado ng Estados Unidos ang Kids Online Safety Act (KOSA) sa pamamagitan ng 91 pabor at 3 tutol na bipartisan na boto. Binuo nina Democratic Senator Richard Blumenthal at Republican Senator Marsha Blackburn, ang pambansang panukalang-batas na ito ang pinakamalawak na reporma sa teknolohiya sa nakalipas na dalawang dekada, na nagtatatag ng pormal na pananagutan sa batas upang protektahan ang kabataan laban sa nakakaadik na algorithmic design at labis na paggamit ng telepono.",
      "Ang pinakasentro ng batas ay ang ligal na 'tungkulin sa pag-iingat' (duty of care) na ipinapataw sa mga kumpanya ng social media at mga online service. Sa ilalim ng patakarang ito, direktang mananagot ang mga higanteng kumpanya ng teknolohiya na magsagawa ng mga kinakailangang hakbang sa disenyo ng kanilang produkto upang maiwasan at mabawasan ang mga pinsala sa kabataang wala pang 17 taong gulang. Kabilang dito ang pagkontrol sa depresyon, matinding pagkabalisa, eating disorders, pambu-bully sa internet, pananakit sa sarili, at mapilit na adiksyon sa screen.",
      "Tinatamaan ng bagong batas ang mga mapanlinlang na disenyo na sadyang ginawa upang itali ang atensyon ng kabataan. Obligado ang mga platform na magbigay ng madaling kontrol sa mga kabataan at magulang upang patayin ang algorithmic recommendation feeds, pigilan ang tuloy-tuloy na infinite scroll, alisin ang autoplay sa mga video, at harangan ang mga mapilit na push notification. Dagdag pa rito, kailangang mag-alok ng alternatibong chronological feed at panatilihin ang pinakamataas na antas ng privacy at proteksyon bilang default setting.",
      "Pangungunahan ng Federal Trade Commission (FTC) at ng mga state attorney general ang pagpapatupad ng batas, na may kasamang mabibigat na multa sa bawat paglabag. Kakailanganin din ng malalaking platform na sumailalim sa taunang independiyenteng pagsusuri sa kaligtasan at magbigay ng access sa data para sa mga kinikilalang akademikong mananaliksik. Bukod dito, bibigyan ang mga magulang ng mga built-in na gamit upang makita ang kabuuang oras ng paggamit ng screen at magtakda ng limitasyon nang hindi pinakikialaman ang pribadong mensahe ng mga anak.",
      "Habang layunin ng mga batas ng pamahalaan na maglagay ng proteksyon sa mismong mga platform, ang pagpapanatili ng balanseng oras sa paggamit ng telepono sa araw-araw ay nangangailangan pa rin ng sariling disiplina. Para sa mga nais magtakda ng hiwalay na limitasyon sa oras bawat araw sa mga partikular na application, ang Limitra App Block ay tumutulong na ihinto ang pag-access sa mismong device kapag naabot na ang napiling limitasyon."
    ],
    source: "Senado ng US (Senate.gov) at FTC",
    sourceUrl: "https://www.senate.gov",
    category: "Mga Patakaran ng Pamahalaan at Batas",
    date: "2026-10-14",
    readTime: "5 min",
    featured: false,
    tags: [
      "KOSA Act",
      "Senado ng US",
      "Richard Blumenthal",
      "Marsha Blackburn",
      "Duty of Care",
      "Infinite Scroll",
      "Limitra App Block"
    ]
  },
  th: {
    id: "110",
    slug: "us-senate-kosa-act-addictive-algorithms-child-safety-standards-th",
    title: "มติประวัติศาสตร์วุฒิสภาสหรัฐฯ: ผ่านกฎหมาย KOSA 91 ต่อ 3 เสียง บังคับใช้ 'หน้าที่ในการดูแล' และสกัดอัลกอริทึมเสพติด",
    summary: "วุฒิสภาสหรัฐฯ ผ่านร่างกฎหมายความปลอดภัยออนไลน์สำหรับเด็ก (KOSA) ด้วยคะแนนเสียงท่วมท้น 91 ต่อ 3 เสียง นำโดยริชาร์ด บลูเมนธอล และมาร์ชา แบล็กเบิร์น กฎหมายระดับชาตินี้กำหนด 'หน้าที่ในการดูแล' ตามกฎหมายแก่แพลตฟอร์มเทคโนโลยี บังคับให้มีตัวเลือกปิดระบบเลื่อนฟีดไม่สิ้นสุด และตั้งค่าความเป็นส่วนตัวระดับสูงสุดแก่เยาวชน",
    content: [
      "ในก้าวสำคัญระดับประวัติศาสตร์ของการกำกับดูแลเทคโนโลยี วุฒิสภาสหรัฐอเมริกาได้ลงมติด้วยคะแนนเสียงท่วมท้นจากทั้งสองพรรค 91 ต่อ 3 เสียง ผ่านร่างกฎหมายความปลอดภัยออนไลน์สำหรับเด็ก (Kids Online Safety Act หรือ KOSA) ซึ่งนับเป็นการปฏิรูปกฎหมายเทคโนโลยีระดับชาติที่ครอบคลุมที่สุดในรอบกว่ายี่สิบปี ผลักดันร่วมกันโดยสมาชิกวุฒิสภาสังกัดพรรคเดโมแครต ริชาร์ด บลูเมนธอล และสมาชิกวุฒิสภาสังกัดพรรครีพับลิกัน มาร์ชา แบล็กเบิร์น เพื่อกำหนดมาตรฐานบังคับใช้ทางกฎหมายที่แท้จริง แทนที่การปล่อยให้บริษัทเทคโนโลยีควบคุมดูแลกันเองแบบสมัครใจ",
      "หัวใจสำคัญทางกฎหมายของร่างกฎหมายฉบับนี้คือการกำหนด 'หน้าที่ในการใช้ความระมัดระวังดูแล' (duty of care) ที่มีผลผูกพันตามกฎหมายต่อแพลตฟอร์มโซเชียลมีเดียและบริการออนไลน์ โดยบริษัทเทคโนโลยีต้องมีหน้าที่รับผิดชอบในการออกแบบและดำเนินงาน เพื่อป้องกันและบรรเทาอันตรายที่อาจเกิดขึ้นกับผู้ใช้ที่มีอายุต่ำกว่า 17 ปีอย่างจริงจัง ครอบคลุมถึงการยับยั้งความเสี่ยงต่อภาวะซึมเศร้า โรควิตกกังวล ความผิดปกติในการรับประทานอาหาร การทำร้ายตนเอง การกลั่นแกล้งบนโลกออนไลน์ และพฤติกรรมการเสพติดหน้าจออย่างรุนแรง",
      "กฎหมายฉบับนี้มุ่งจัดการกับกลไกทางวิศวกรรมความสนใจที่ถูกสร้างขึ้นเพื่อดึงดูดให้เยาวชนอยู่บนหน้าจอนานที่สุด โดยแพลตฟอร์มจะต้องจัดให้มีตัวเลือกที่เข้าถึงได้ง่าย เพื่อให้เยาวชนและผู้ปกครองสามารถสั่งปิดระบบแนะนำคอนเทนต์ด้วยอัลกอริทึม ปิดระบบการเลื่อนฟีดแบบไม่รู้จบ (infinite scroll) ปิดการเล่นวิดีโออัตโนมัติ และปิดการแจ้งเตือนที่กระตุ้นการใช้งานซ้ำ นอกจากนี้ แพลตฟอร์มจะต้องมีตัวเลือกฟีดแบบเรียงตามลำดับเวลา และต้องเปิดใช้งานการตั้งค่าความปลอดภัยและความเป็นส่วนตัวระดับสูงสุดเป็นค่าเริ่มต้น",
      "การบังคับใช้กฎหมายจะอยู่ภายใต้การกำกับดูแลของคณะกรรมาธิการการค้าแห่งสหรัฐฯ (FTC) ร่วมกับอัยการสูงสุดของแต่ละรัฐ พร้อมบทลงโทษปรับทางการเงินที่เข้มงวดสำหรับการฝ่าฝืน นอกจากนี้ แพลตฟอร์มขนาดใหญ่จะต้องผ่านการตรวจสอบความเสี่ยงอย่างเป็นอิสระทุกปี และต้องเปิดเผยข้อมูลกลไกอัลกอริทึมแก่นักวิจัยทางวิชาการที่ได้รับการรับรอง ในขณะเดียวกัน ผู้ปกครองจะได้รับเครื่องมือในตัวเพื่อติดตามเวลาหน้าจอรวมในแต่ละวันและตั้งค่าขีดจำกัดการใช้งาน โดยไม่ละเมิดความเป็นส่วนตัวของการสนทนาส่วนบุคคล",
      "ในขณะที่มาตรการทางกฎหมายมุ่งสร้างมาตรฐานความปลอดภัยในระดับโครงสร้างของแพลตฟอร์ม แต่การสร้างสมดุลของเวลาหน้าจอในชีวิตประจำวันยังคงต้องอาศัยการตั้งขอบเขตที่ชัดเจนในระดับบุคคล สำหรับผู้ที่ต้องการกำหนดเวลาการใช้งานรายวันแยกเป็นอิสระในแต่ละแอปพลิเคชัน Limitra App Block จะช่วยระงับการเข้าถึงแอปบนอุปกรณ์โดยตรงเมื่อใช้งานครบกำหนดเวลา เพื่อช่วยรักษาพฤติกรรมดิจิทัลที่ดีต่อสุขภาพ"
    ],
    source: "วุฒิสภาสหรัฐฯ (Senate.gov) และ FTC",
    sourceUrl: "https://www.senate.gov",
    category: "นโยบายและกฎหมายของรัฐ",
    date: "2026-10-14",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "กฎหมาย KOSA",
      "วุฒิสภาสหรัฐฯ",
      "ริชาร์ด บลูเมนธอล",
      "มาร์ชา แบล็กเบิร์น",
      "หน้าที่ในการดูแล",
      "ระบบเลื่อนไม่สิ้นสุด",
      "Limitra App Block"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filename = lang === 'tr' ? 'haberler.json' : `news-${lang}.json`;
  const filePath = path.join(dataDir, filename);

  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (existing.some(item => item.id === "110")) {
    console.log(`[WARN] ID 110 already exists in ${filename}, skipping unshift.`);
  } else {
    existing.unshift(newsData[lang]);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
    console.log(`[OK] Added ID 110 to ${filename} (Total items: ${existing.length})`);
  }
}

console.log('Successfully added news ID 110 in all 11 languages.');
