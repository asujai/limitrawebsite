import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "104",
    slug: "roy-baumeister-ego-tukenmesi-ve-karar-yorgunlugu-aksam-ekran-tuzagi",
    title: "Roy Baumeister'ın 'Ego Tükenmesi' Modeli: Gün Sonunda İrademiz Neden Çöker ve Telefona Teslim Oluruz?",
    summary: "Gündüz saatlerinde işine odaklanan bireylerin akşam yatakta saatlerce telefon kaydırmayı durduramamasının nedeni zayıf karakter değil, biyolojik olarak tükenen irade rezervidir. Roy Baumeister'ın 'Ego Tükenmesi' (Ego Depletion) ve karar yorgunluğu araştırmaları ışığında akşam ekran krizini önleme rehberi.",
    content: [
      "Pek çok insan için günün en çelişkili anı akşam saatleridir. Sabah erken uyanıp iş yerinde veya okulda karmaşık raporlar hazırlayan, zorlu toplantılarda dürtülerini kontrol eden ve gün boyunca yüksek disiplin sergileyen biri, akşam saat 22:00'de koltuğa veya yatağa uzandığında bambaşka birine dönüşür. 'Yalnızca beş dakika bakıp uyuyacağım' düşüncesiyle açılan sosyal medya akışında saatler erir; zihin ekrandan gözünü ayıramaz ve gece yarısı derin bir suçluluk ve pişmanlık duygusuyla kapanır. İnsanlar bu tabloyu genellikle zayıf irade veya ahlaki bir yetersizlik olarak değerlendirir. Oysa sosyal psikolojinin en saygın kuramcılarından Prof. Dr. Roy F. Baumeister'ın deneysel bulguları, meselenin karakter zayıflığı değil, tükenen biyolojik bir enerji havuzu olduğunu kanıtlamaktadır.",
      "Case Western Reserve Üniversitesi ve Florida State Üniversitesi'nde yürütülen ve 1998 yılında 'Journal of Personality and Social Psychology' dergisinde yayımlanan çığır açıcı deneyde Baumeister ve ekibi, iradenin sınırsız bir zihinsel güç değil, çalışan bir kas gibi yorulan sınırlı bir kaynak olduğunu ortaya koydu. Ünlü 'turp ve çikolata' deneyinde, taze pişmiş çikolatalı kurabiyelerin kokusu altında bırakılan ancak sadece çiğ turp yemelerine izin verilen deneklerin, çözülmesi imkansız bir geometri bulmacası karşısında mücadele etme süreleri ölçüldü. Çikolata arzusunu bastırmak için iradelerini tüketen grup sadece 8 dakika içinde pes ederken; hiçbir baştan çıkarıcıya direnmek zorunda kalmayan kontrol grubu ortalama 21 dakika boyunca çaba göstermeye devam etti. Baumeister bu olguyu 'Ego Tükenmesi' (Ego Depletion) olarak adlandırdı.",
      "İnsanın öz denetim mekanizması gün boyu sürekli enerji harcar. Sabah giyeceğiniz kıyafeti seçmekten gelen bir e-postayı yanıtlama biçiminize, trafikte öfkenizi yutmaktan işteki dikkat dağıtıcıları savuşturmaya kadar verilen her mikro karar prefrontal korteksteki irade rezervinden eksiltir. Psikolojide 'Karar Yorgunluğu' (Decision Fatigue) olarak tanımlanan bu süreç, akşama doğru zihinsel fren mekanizmasını neredeyse tamamen devre dışı bırakır. Saat 22:00 olduğunda elinize aldığınız akıllı telefon, binlerce nörobilimci ve algoritma mühendisi tarafından dikkatinizi maksimum sürede tutmak için tasarlanmış devasa bir baştan çıkarıcıdır. Tükenmiş bir iradenin, biyolojik olarak en savunmasız anında bu uyarım bombardımanına tek başına direnmesini beklemek gerçekçi değildir.",
      "Roy Baumeister ve gazeteci John Tierney'nin 'Willpower: Rediscovering the Greatest Human Strength' adlı eserinde vurguladığı üzere, hayatta en yüksek öz denetime sahip görünen insanlar sürekli irade mücadelesi verenler değildir. Aksine bu kişiler, iradenin tükeneceğini bilerek ortamlarını baştan tasarlayan ve kendilerini baştan çıkarıcı durumlarla baş başa bırakmayanlardır. Akşam saatlerindeki ekran krizini çözmenin yolu daha fazla irade göstermeye çalışmak değil, iradeye ihtiyaç bırakmayan çevresel kurallar koymaktır. Gün içindeki gereksiz mikro kararları rutinleştirerek zihinsel enerjiyi korumak, yorucu işleri sabah saatlerine çekmek ve akşam saatlerinde teknoloji kullanımına peşinen net sınırlar çekmek bu protokolün temelini oluşturur.",
      "Akşam saatlerinde tükenen iradeye güvenmek yerine dinlenme saatlerini algoritmik akışlardan korumak isteyenler için Limitra App Block, seçilen uygulamalara belirli saat aralıklarında erişim kısıtlaması getirerek geceyi ekransız ve dingin geçirmeye yardımcı oluyor."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Ekran Süresi Kontrolü",
    date: "2026-10-11",
    readTime: "6 dk",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego Tükenmesi",
      "Karar Yorgunluğu",
      "İrade Gücü",
      "Ekran Süresi Kontrolü",
      "Prefrontal Korteks",
      "Limitra App Block"
    ]
  },
  en: {
    id: "104",
    slug: "roy-baumeister-ego-depletion-decision-fatigue-evening-screen-trap",
    title: "Roy Baumeister's 'Ego Depletion' Model: Why Our Willpower Collapses at Night and Surrenders to Screens",
    summary: "Why professionals who demonstrate impeccable focus during the workday cannot stop scrolling in bed is not a flaw in character, but an exhausted biological willpower reservoir. A guide to preventing evening screen crises through Roy Baumeister's research on Ego Depletion and decision fatigue.",
    content: [
      "For many people, the most paradoxical part of the day occurs in the evening. An individual who wakes up early, writes demanding reports, navigates stressful meetings, and exercises rigorous self-discipline from nine to five turns into someone unrecognizable at 10 PM. Opening social media with the fleeting intention of 'checking for just five minutes before sleep' spiraled into hours of mindless scrolling. The mind remains glued to the glass, and the lights are finally turned off past midnight under heavy feelings of guilt and frustration. Most people label this as personal weakness or moral failing. Yet experimental findings from social psychologist Dr. Roy F. Baumeister demonstrate that the problem is not deficient character, but an exhausted biological energy pool.",
      "In a landmark 1998 study published in the 'Journal of Personality and Social Psychology', conducted at Case Western Reserve University and Florida State University, Baumeister and his colleagues revealed that self-control does not function as an infinite virtue, but as a muscle that fatigues with exertion. In the famous 'radish and chocolate' experiment, participants sat before fresh-baked chocolate chip cookies but were instructed to consume only raw radishes. When subsequently challenged with an unsolvable geometry puzzle, those who had exhausted their willpower resisting the cookies surrendered after just 8 minutes, whereas the control group persevered for an average of 21 minutes. Baumeister termed this psychological exhaustion 'Ego Depletion'.",
      "The executive mechanism of human self-regulation consumes energy continuously throughout the day. From selecting your clothes in the morning and phrasing delicate email responses to holding back irritation in traffic and filtering out workplace distractions, every single micro-choice siphons energy from the prefrontal cortex. This cumulative process, known as 'Decision Fatigue', gradually incapacitates mental braking mechanisms by evening. By 10 PM, picking up a smartphone places an exhausted mind directly in front of infinite feeds engineered by thousands of specialists to capture human attention. Expecting an ego-depleted brain to resist such potent stimulation relying solely on willpower is biologically unrealistic.",
      "As Roy Baumeister and John Tierney explain in their seminal work 'Willpower: Rediscovering the Greatest Human Strength', individuals who demonstrate exceptional self-control are not constantly winning heroic internal battles. Instead, they recognize that willpower is easily exhausted and proactively architect their environments to avoid tempting situations altogether. Overcoming evening doomscrolling requires establishing external boundaries that do not rely on late-night mental resistance. Consolidating trivial daytime decisions, shifting demanding tasks to earlier hours, and setting automated environmental guardrails around evening device usage form the foundation of this protocol.",
      "For individuals who prefer not to rely on depleted evening willpower to protect their resting hours from algorithmic feeds, Limitra App Block allows users to enforce access restrictions on selected applications during specified time intervals to preserve nighttime calm."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Screen Time Control",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego Depletion",
      "Decision Fatigue",
      "Willpower",
      "Screen Time Control",
      "Prefrontal Cortex",
      "Limitra App Block"
    ]
  },
  es: {
    id: "104",
    slug: "el-agotamiento-del-ego-de-roy-baumeister-y-la-trampa-nocturna-del-movil",
    title: "El modelo de 'agotamiento del ego' de Roy Baumeister: Por qué nuestra fuerza de voluntad colapsa de noche frente a las pantallas",
    summary: "Quienes mantienen una concentración impecable durante el día pero no pueden dejar de mirar el móvil en la cama no sufren una falta de carácter, sino un agotamiento biológico de su reserva de autocontrol. Guía basada en las investigaciones de Roy Baumeister sobre el agotamiento del ego y la fatiga por decisión.",
    content: [
      "Para muchas personas, el momento más desconcertante de la jornada llega al anochecer. Alguien que madruga, elabora informes exigentes, gestiona reuniones complejas y mantiene una estricta autodisciplina durante todo el día, se transforma en alguien irreconocible a las diez de la noche. La idea de 'mirar solo cinco minutos antes de dormir' se convierte en horas de navegación involuntaria por redes sociales; la mirada queda atrapada en la pantalla y la noche concluye con una profunda sensación de culpa y frustración. La sociedad suele catalogar esto como pereza o debilidad moral. Sin embargo, las investigaciones del doctor Roy F. Baumeister demuestran que no se trata de una falta de carácter, sino de una reserva biológica de energía que se ha agotado por completo.",
      "En un célebre estudio publicado en 1998 en el 'Journal of Personality and Social Psychology', Baumeister y su equipo descubrieron que el autocontrol no es una cualidad moral ilimitada, sino un recurso finito que se fatiga igual que un músculo. En el famoso experimento de los rábanos y las galletas recién horneadas, los participantes a quienes se obligó a resistir el aroma del chocolate y comer únicamente rábanos se rindieron ante un rompecabezas irresoluble en apenas 8 minutos, mientras que el grupo de control persistió durante una media de 21 minutos. Baumeister denominó a esta vulnerabilidad psicológica 'agotamiento del ego' (Ego Depletion).",
      "El mecanismo cerebral de autorregulación gasta recursos de manera constante durante el día. Desde decidir qué ropa vestir o cómo responder a un correo delicado, hasta contener una molestia en el tráfico y filtrar las distracciones del trabajo, cada microdecisión consume energía de la corteza prefrontal. Este desgaste progresivo, conocido en psicología como 'fatiga por decisión' (Decision Fatigue), desactiva los frenos inhibitorios del cerebro al llegar la noche. A las 22:00, el teléfono inteligente representa una trampa diseñada por expertos para retener la atención. Exigirle a una mente biológicamente extenuada que resista esa marea algorítmica apoyándose solo en la fuerza de voluntad resulta insostenible.",
      "Como explican Roy Baumeister y John Tierney en su libro 'Willpower: Rediscovering the Greatest Human Strength', las personas con mayor disciplina no son las que libran batallas titánicas constantes, sino las que estructuran su entorno para no tener que decidir cuando están cansadas. Para frenar el uso compulsivo de pantallas por la noche, la solución no consiste en exigirle más esfuerzo a una mente exhausta, sino en establecer barreras ambientales automáticas. Simplificar las decisiones cotidianas, afrontar las prioridades a primera hora y fijar normas claras y anticipadas para los dispositivos electrónicos constituyen los pilares de este enfoque.",
      "Para quienes buscan proteger sus horas de descanso frente a las redes sociales sin depender de una fuerza de voluntad agotada por la noche, Limitra App Block permite aplicar restricciones de acceso a aplicaciones seleccionadas en intervalos horarios definidos, facilitando noches serenas y libres de pantallas."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Control de Tiempo en Pantalla",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Agotamiento del ego",
      "Fatiga por decisión",
      "Fuerza de voluntad",
      "Control de Tiempo en Pantalla",
      "Corteza prefrontal",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "104",
    slug: "epuisement-de-lego-roy-baumeister-et-le-piege-des-ecrans-le-soir",
    title: "Le modèle d'« épuisement de l'ego » de Roy Baumeister : Pourquoi notre volonté s'effondre le soir devant les écrans",
    summary: "Ceux qui font preuve d'une concentration exemplaire au travail mais ne parviennent pas à lâcher leur téléphone au lit ne manquent pas de volonté : leur réservoir biologique d'autocontrôle est simplement vidé. Analyse de l'épuisement de l'ego et de la fatigue décisionnelle selon Roy Baumeister.",
    content: [
      "Pour beaucoup d'entre nous, le moment le plus paradoxal de la journée survient en soirée. Une personne capable de se lever tôt, de rédiger des synthèses complexes, de gérer des réunions tendues et de faire preuve d'une rigueur absolue toute la journée devient méconnaissable vers 22 heures. Partie avec l'intention de « regarder juste cinq minutes avant de dormir », elle se retrouve happée pendant deux heures par le défilement d'un fil d'actualité, incapable d'éteindre l'écran, avant de sombrer dans le remords. On attribue couramment cette dérive à un manque de courage ou de discipline. Pourtant, les recherches du professeur Roy F. Baumeister prouvent qu'il ne s'agit pas d'une faiblesse morale, mais de l'épuisement d'un stock d'énergie biologique bien réel.",
      "Dans une étude majeure parue en 1998 dans le 'Journal of Personality and Social Psychology', menée à l'Université Case Western Reserve et à l'Université d'État de Floride, Baumeister et son équipe ont démontré que la volonté ne constitue pas une ressource infinie, mais fonctionne comme un muscle sujet à la fatigue. Lors de la célèbre expérience opposant des radis crus à des biscuits au chocolat fraîchement cuits, les sujets contraints de résister à la tentation du chocolat pour grignoter des radis ont abandonné un casse-tête géométrique insoluble en 8 minutes seulement, contre 21 minutes pour le groupe témoin. Baumeister a baptisé cette baisse de régime psychologique « l'épuisement de l'ego » (Ego Depletion).",
      "Le cortex préfrontal sollicite en continu ses capacités d'inhibition tout au long de la journée. Qu'il s'agisse de choisir sa tenue matinale, de formuler une réponse professionnelle nuancée, de réprimer son agacement dans les transports ou de filtrer les sollicitations professionnelles, chaque microdécision entame le réservoir d'autorégulation. Ce phénomène, connu sous le nom de « fatigue décisionnelle » (Decision Fatigue), désactive les freins cérébraux à l'approche de la nuit. À 22 heures, saisir son smartphone place un cerveau épuisé face à des algorithmes conçus par des centaines d'ingénieurs pour maximiser la rétention. Espérer qu'une volonté à plat puisse résister à cette stimulation par la seule contrainte mentale est illusoire.",
      "Comme le soulignent Roy Baumeister et John Tierney dans leur ouvrage 'Willpower: Rediscovering the Greatest Human Strength', les individus qui semblent dotés d'une autodiscipline d'acier ne passent pas leur vie à lutter contre leurs pulsions. Ils anticipent l'épuisement de leur volonté en agençant leur cadre de vie de manière à éliminer les tentations superflues. Pour enrayer la captation nocturne des écrans, la solution ne réside pas dans un surcroît d'effort mental tardif, mais dans l'instauration de barrières environnementales automatiques. Réduire les microdécisions diurnes, programmer les tâches clés le matin et définir des limites mécaniques pour les appareils le soir forment le socle d'un repos préservé.",
      "Pour ceux qui souhaitent préserver leurs soirées des flux algorithmiques sans compter sur une volonté épuisée en fin de journée, Limitra App Block permet de programmer des plages horaires de restriction sur les applications sélectionnées afin de favoriser des nuits paisibles et déconnectées."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Contrôle du Temps d'Écran",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Épuisement de l'ego",
      "Fatigue décisionnelle",
      "Force de volonté",
      "Contrôle du Temps d'Écran",
      "Cortex préfrontal",
      "Limitra App Block"
    ]
  },
  de: {
    id: "104",
    slug: "roy-baumeister-ego-depletion-und-die-abendliche-smartphone-falle",
    title: "Das Modell der 'Ego-Depletion' von Roy Baumeister: Warum unsere Willenskraft abends kapituliert",
    summary: "Dass Menschen nach einem hochproduktiven Arbeitstag abends stundenlang am Smartphone hängenbleiben, liegt nicht an mangelnder Selbstdisziplin, sondern an erschöpften biologischen Willensressourcen. Wie Roy Baumeisters Forschung zu Ego-Depletion und Entscheidungsmüdigkeit hilft, abendliche Bildschirmkrisen zu verhindern.",
    content: [
      "Für viele Menschen ist der späte Abend der widersprüchlichste Moment des Tages. Jemand, der früh aufsteht, anspruchsvolle Berichte verfasst, schwierige Besprechungen meistert und tagsüber vorbildliche Selbstdisziplin an den Tag legt, verwandelt sich um 22:00 Uhr auf dem Sofa in eine völlig andere Person. Der Vorsatz, 'nur noch fünf Minuten vor dem Schlafen' auf das Smartphone zu schauen, mündet in stundenlosem Scrollen durch endlose Feeds. Der Blick bleibt wie gefesselt am Display haften, und das Licht wird schließlich weit nach Mitternacht unter schweren Schuldgefühlen gelöscht. Dieses Verhalten wird häufig als Charakterschwäche abgetan. Doch experimentelle Erkenntnisse des Sozialpsychologen Prof. Dr. Roy F. Baumeister belegen, dass nicht ein schwacher Wille die Ursache ist, sondern ein biologisch geleerter Energiespeicher.",
      "In einer wegweisenden Studie aus dem Jahr 1998 im 'Journal of Personality and Social Psychology', durchgeführt an der Case Western Reserve University und der Florida State University, wiesen Baumeister und sein Team nach, dass Willenskraft keine unbegrenzte Tugend ist, sondern wie ein Muskel bei Beanspruchung ermüdet. Im berühmten Radieschen-Kekse-Experiment gaben Probanden, die dem Duft frisch gebackener Schokoladenkekse widerstehen und stattdessen rohe Radieschen essen mussten, bei einer unlösbaren Geometrieaufgabe bereits nach 8 Minuten auf, während die Kontrollgruppe durchschnittlich 21 Minuten durchhielt. Baumeister prägte für dieses psychologische Phänomen den Begriff 'Ego-Depletion' (Ich-Erschöpfung).",
      "Das menschliche Steuerungssystem im Gehirn verbraucht im Laufe eines Tages kontinuierlich Energie. Von der morgendlichen Kleidungswahl über diplomatische Antworten im Berufsalltag bis hin zum Unterdrücken von Frustration und dem Ausblenden von Störungen: Jede einzelne Mikroentscheidung schwächt die Kapazitäten des präfrontalen Kortex. Dieser Prozess, der in der Psychologie als 'Entscheidungsmüdigkeit' (Decision Fatigue) bekannt ist, setzt die mentalen Bremsen gegen Abend schrittweise außer Kraft. Wer um 22:00 Uhr zum Smartphone greift, liefert ein erschöpftes Gehirn hochentwickelten Algorithmen aus, die gezielt auf maximale Verweildauer optimiert sind. Zu erwarten, dass reine Willenskraft in diesem Moment standhält, widerspricht der menschlichen Biologie.",
      "Wie Roy Baumeister und John Tierney in ihrem Standardwerk 'Willpower: Rediscovering the Greatest Human Strength' darlegen, zeichnen sich besonders disziplinierte Menschen nicht durch ständige heroische Willensanstrengungen aus. Sie gestalten vielmehr ihre Umgebung so, dass sie Versuchungen gar nicht erst ausgesetzt sind, wenn ihre geistigen Reserven erschöpft sind. Die Lösung für die abendliche Smartphone-Falle liegt daher nicht in noch mehr Willensanstrengung zu später Stunde, sondern in vorausschauenden äußeren Rahmenbedingungen. Unwichtige Alltagsentscheidungen zu automatisieren, anstrengende Aufgaben in den Vormittag zu verlegen und feste technische Schranken für den Abend zu definieren, bildet das Fundament dieses Konzepts.",
      "Wer seine abendliche Erholung nicht einer erschöpften Willenskraft überlassen und seine Nachtruhe vor algorithmischen Feeds schützen möchte, kann mit Limitra App Block feste Zeitfenster für Zugriffsbeschränkungen auf ausgewählte Anwendungen einrichten, um den Abend bildschirmfrei und gelassen zu verbringen."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Bildschirmzeit-Kontrolle",
    date: "2026-10-11",
    readTime: "6 Min.",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego-Depletion",
      "Entscheidungsmüdigkeit",
      "Willenskraft",
      "Bildschirmzeit-Kontrolle",
      "Präfrontaler Kortex",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "104",
    slug: "esgotamento-do-ego-de-roy-baumeister-e-a-armadilha-noturna-do-celular",
    title: "O modelo de 'esgotamento do ego' de Roy Baumeister: Por que nossa força de vontade desmorona à noite diante das telas",
    summary: "Quem mantém foco impecável durante o trabalho e não consegue parar de rolar o celular na cama não sofre de falta de caráter, mas de esgotamento biológico da força de vontade. Como as pesquisas de Roy Baumeister sobre esgotamento do ego e fadiga de decisão ajudam a proteger suas noites.",
    content: [
      "Para muitas pessoas, o momento mais contraditório do dia ocorre durante a noite. Alguém que acorda cedo, elabora relatórios complexos, conduz reuniões exigentes e mantém uma autodisciplina admirável ao longo de todo o expediente parece se transformar em outra pessoa por volta das 22h. A intenção de 'olhar só cinco minutos antes de dormir' se transforma em horas de rolagem contínua nas redes sociais; os olhos permanecem colados à tela e o descanso é adiado até a madrugada sob forte sentimento de culpa. Esse comportamento é frequentemente rotulado como fraqueza moral. No entanto, as descobertas científicas do psicólogo Dr. Roy F. Baumeister comprovam que o problema não reside no caráter, mas em um reservatório biológico de energia que simplesmente se esgotou.",
      "Em um estudo pioneiro publicado em 1998 no 'Journal of Personality and Social Psychology', realizado na Case Western Reserve University e na Florida State University, Baumeister e sua equipe demonstraram que o autocontrole não é uma virtude infinita, mas funciona como um músculo que se cansa com o esforço repetido. No célebre experimento dos rabanetes e biscoitos de chocolate, os participantes forçados a resistir aos doces quentes e consumir apenas rabanetes crus desistiram de um quebra-cabeça insolúvel em apenas 8 minutos, enquanto o grupo de controle persistiu por 21 minutos em média. Baumeister chamou essa vulnerabilidade temporária de 'esgotamento do ego' (Ego Depletion).",
      "O mecanismo de autorregulação consome energia de forma ininterrupta durante as horas acordadas. Da escolha das roupas pela manhã à resposta cuidadosa a um e-mail delicado, passando por tolerar o trânsito e filtrar distrações profissionais, cada microdecisão drena recursos do córtex pré-frontal. Esse processo contínuo, denominado 'fadiga de decisão' (Decision Fatigue), enfraquece gradualmente os freios inibitórios do cérebro ao final do dia. Às 22h, segurar o smartphone coloca uma mente esgotada diante de fluxos algorítmicos projetados por centenas de engenheiros para capturar a atenção humana. Exigir que a pura força de vontade resista a esse bombardeio em seu momento de maior fraqueza biológica é irrealista.",
      "Conforme detalham Roy Baumeister e John Tierney na obra 'Willpower: Rediscovering the Greatest Human Strength', indivíduos com elevado nível de autodisciplina não passam a vida lutando contra impulsos. Pelo contrário, eles compreendem os limites de sua energia e estruturam o ambiente para evitar situações tentadoras quando estão cansados. Superar a rolagem noturna não exige mais esforço mental tarde da noite, mas sim a criação de barreiras externas automáticas. Rotinizar decisões diárias menores, concentrar tarefas críticas nas primeiras horas do dia e estabelecer regras mecânicas prévias para os aparelhos compõem os pilares dessa abordagem.",
      "Para aqueles que preferem não confiar em uma força de vontade esgotada para proteger suas noites dos feeds sociais, o Limitra App Block permite configurar restrições de acesso a aplicativos selecionados durante intervalos de horários específicos, ajudando a preservar noites serenas e livres de telas."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Controle de Tempo de Tela",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Esgotamento do ego",
      "Fadiga de decisão",
      "Força de vontade",
      "Controle de Tempo de Tela",
      "Córtex pré-frontal",
      "Limitra App Block"
    ]
  },
  it: {
    id: "104",
    slug: "esaurimento-dell-ego-di-roy-baumeister-e-la-trappola-serale-dello-smartphone",
    title: "Il modello di 'esaurimento dell'ego' di Roy Baumeister: Perché la nostra forza di volontà crolla la sera davanti agli schermi",
    summary: "Chi mostra una concentrazione ferrea al lavoro ma non riesce a smettere di scorrere lo smartphone a letto non manca di carattere: ha semplicemente esaurito la riserva biologica di autocontrollo. La guida di prevenzione basata sulle ricerche di Roy Baumeister su Ego Depletion e affaticamento decisionale.",
    content: [
      "Per molti il momento più contraddittorio della giornata si verifica a tarda sera. Una persona capace di svegliarsi presto, stilare relazioni complesse, gestire riunioni delicate e mantenere una ferrea autodisciplina per tutto il giorno si trasforma in un individuo irriconoscibile verso le 22:00. Il proposito di 'dare solo una rapida occhiata prima di dormire' sfocia in ore di navigazione passiva sui social media; lo sguardo resta incollato allo schermo e la giornata si chiude a notte fonda tra rimpianti e sensi di colpa. Si tende spesso a liquidare questo fenomeno come semplice pigrizia o debolezza d'animo. Tuttavia, le ricerche sperimentali del professor Roy F. Baumeister dimostrano che la vera causa non è una mancanza di carattere, bensì il naturale esaurimento di un serbatoio biologico di energia.",
      "In un celebre studio del 1998 pubblicato sul 'Journal of Personality and Social Psychology', condotto presso la Case Western Reserve University e la Florida State University, Baumeister e il suo team hanno evidenziato che la forza di volontà non è una risorsa inesauribile, ma si comporta come un muscolo che si affatica con l'uso. Nel famoso esperimento dei ravanelli e dei biscotti al cioccolato appena sfornati, i soggetti costretti a reprimere il desiderio del dolce per consumare solo ravanelli si sono arresi di fronte a un rompicapo geometrico irrisolvibile in soli 8 minuti, contro i 21 minuti del gruppo di controllo. Baumeister definì questo stato di stanchezza psichica 'esaurimento dell'ego' (Ego Depletion).",
      "Il sistema esecutivo di autoregolazione spende energie costantemente durante le ore di veglia. Dalla scelta dell'abbigliamento al mattino alla stesura di un'email formale, dal controllo dell'irritazione nel traffico alla gestione delle interruzioni lavorative, ogni singola microdecisione intacca le riserve della corteccia prefrontale. Questo processo, noto come 'affaticamento decisionale' (Decision Fatigue), disattiva progressivamente i freni inibitori verso sera. Alle 22:00, impugnare uno smartphone espone una mente esausta a flussi algoritmici perfezionati da centinaia di ingegneri per massimizzare il tempo di permanenza. Pretendere che una volontà svuotata resista a tali stimoli facendo affidamento solo su se stessa è biologicamente insostenibile.",
      "Come illustrano Roy Baumeister e John Tierney nel libro 'Willpower: Rediscovering the Greatest Human Strength', le persone che ottengono i migliori risultati nell'autocontrollo non sono quelle che combattono continue battaglie interiori, ma quelle che organizzano in anticipo il proprio ambiente per non doversi trovare di fronte a tentazioni quando le energie scarseggiano. Per arginare l'uso compulsivo dello smartphone la sera, la soluzione non consiste nell'esigere uno sforzo disperato a tarda ora, ma nell'introdurre barriere ambientali predefinite. Automatizzare le scelte minori, concentrare le priorità al mattino e fissare confini tecnologici netti per la notte rappresentano i pilastri di questa strategia.",
      "Per chi desidera difendere le proprie ore di riposo dalle distrazioni digitali senza dover fare affidamento su una forza di volontà ormai esausta a fine giornata, Limitra App Block consente di impostare restrizioni di accesso su applicazioni selezionate in determinate fasce orarie, favorendo notti serene e lontane dagli schermi."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Controllo Tempo Schermo",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Esaurimento dell'ego",
      "Affaticamento decisionale",
      "Forza di volontà",
      "Controllo Tempo Schermo",
      "Corteccia prefrontale",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "104",
    slug: "roy-baumeister-ego-depletion-wa-arhaq-al-qarar-fakh-ash-shashat-laylan",
    title: "نموذج 'استنزاف الأنا' لروي بوميستر: لماذا تنهار إرادتنا ليلاً ونستسلم للشاشات؟",
    summary: "عجز الأشخاص الذين يتمتعون بتركيز استثنائي نهاراً عن التوقف عن تصفح الهاتف ليلاً في الفراش لا يعود لضعف في الشخصية، بل لاستنزاف بيولوجي في خزان قوة الإرادة. دليل وقائي مستند إلى أبحاث روي بوميستر حول استنزاف الأنا وإرهاق اتخاذ القرار.",
    content: [
      "بالنسبة لكثير من الناس، فإن اللحظة الأكثر تناقضاً في اليوم تحدث في ساعات المساء المتأخرة. فالشخص الذي يستيقظ مبكراً ويعد تقارير معقدة في عمله أو دراسته، ويدير اجتماعات شاقة، ويظهر انضباطاً ذاتياً صارماً طوال النهار، يتحول إلى شخص مختلف تماماً في العاشرة ليلاً عند الاستلقاء في الفراش. الفكرة البسيطة المتمثلة في 'تصفح الهاتف لخمس دقائق فقط قبل النوم' تذوب في ساعات من التمرير اللانهائي عبر منصات التواصل الاجتماعي؛ حيث تظل العينان مأسورتين بالشاشة ولا ينطفئ الضوء إلا بعد منتصف الليل وسط شعور عميق بالذنب والإحباط. وغالباً ما يصنف الناس هذا السلوك على أنه ضعف في الإرادة أو عيب شخصي. غير أن الأبحاث التجريبية لعالم النفس الاجتماعي الدكتور روي بوميستر تثبت أن الأمر ليس عيباً في الشخصية، بل هو استنزاف لطاقة بيولوجية محدودة للغاية.",
      "في دراسة رائدة نُشرت عام 1998 في 'مجلة الشخصية وعلم النفس الاجتماعي' (Journal of Personality and Social Psychology)، أجريت في جامعة كيس ويسترن ريزيرف وجامعة ولاية فلوريدا، أثبت بوميستر وفريقه أن ضبط النفس ليس فضيلة بلا حدود، بل يعمل تماماً مثل عضلة تتعب مع كثرة الاستخدام. في تجربة 'الفجل والبسكويت' الشهيرة، طُلب من المشاركين مقاومة رائحة بسكويت الشوكولاتة الطازج وتناول الفجل النيئ فقط، ثم عُرضت عليهم أحجية هندسية مستحيلة الحل؛ فاستسلم أولئك الذين استنفدوا إرادتهم في مقاومة البسكويت بعد 8 دقائق فقط، بينما واصلت المجموعة الضابطة المحاولة لمدة 21 دقيقة في المتوسط. وأطلق بوميستر على هذا الهبوط النفسي مصطلح 'استنزاف الأنا' (Ego Depletion).",
      "تستهلك آلية التنظيم الذاتي في الدماغ طاقة مستمرة طوال ساعات النهار. فمن اختيار الملابس صباحاً وصياغة الردود الدقيقة على الرسائل الإلكترونية، إلى كتم الغضب في زحام الطرق وتجنب المشتتات في بيئة العمل، تقتطع كل عملية اتخاذ قرار جزءاً من احتياطي القشرة الجبهية في الدماغ. وتؤدي هذه العملية التراكمية، المعروفة علمياً باسم 'إرهاق اتخاذ القرار' (Decision Fatigue)، إلى تعطيل مكابح الدماغ تدريجياً مع حلول المساء. وعند حلول العاشرة ليلاً، فإن التقاط الهاتف الذكي يضع عقلاً منهكاً في مواجهة خوارزميات صممها آلاف المهندسين لإبقاء الانتباه مشدوداً لأطول فترة ممكنة. وتوقع أن تصمد إرادة مستنزفة أمام هذا التحفيز الهائل بالاعتماد على الجهد الفردي وحده هو أمر غير واقعي بيولوجياً.",
      "كما يوضح روي بوميستر وجون تيرني في كتابهما 'Willpower: Rediscovering the Greatest Human Strength'، فإن الأفراد الذين يظهرون أعلى مستويات الانضباط في حياتهم ليسوا أولئك الذين يخوضون معارك داخلية بطولية مستمرة. بل هم أولئك الذين يدركون أن الإرادة قابلة للنفاذ، فيصممون بيئتهم مسبقاً لتفادي المواقف المغرية عندما يكونون مرهقين. والحل الأمثل للتخلص من فخ الشاشات الليلي لا يكمن في إجبار العقل المتعب على مزيد من المقاومة، بل في وضع حواجز بيئية وتقنية تلقائية. إن تقليل القرارات الصغيرة المشتتة نهاراً، وتقديم المهام الشاقة إلى الصباح، وتحديد قيود زمنية ميكانيكية واضحة للأجهزة في المساء يمثل جوهر هذا البروتوكول الوقائي.",
      "ولأولئك الذين يفضلون عدم الاعتماد على قوة إرادة مستنفدة في المساء لحماية ساعات راحتهم من تدفقات المنصات، يتيح Limitra App Block تحديد قيود زمنية للوصول إلى التطبيقات المختارة خلال فترات زمنية محددة للمساعدة في قضاء الليل في هدوء وبمعزل عن الشاشات."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "التحكم في وقت الشاشة",
    date: "2026-10-11",
    readTime: "6 دقائق",
    featured: false,
    tags: [
      "روي بوميستر",
      "استنزاف الأنا",
      "إرهاق اتخاذ القرار",
      "قوة الإرادة",
      "التحكم في وقت الشاشة",
      "القشرة الجبهية",
      "Limitra App Block"
    ]
  },
  id: {
    id: "104",
    slug: "model-ego-depletion-roy-baumeister-mengapa-tekad-runtuh-malam-hari",
    title: "Model 'Ego Depletion' Roy Baumeister: Mengapa Tekad Kita Runtuh di Malam Hari dan Menyerah pada Layar Ponsel?",
    summary: "Mengapa orang yang sangat fokus sepanjang hari tidak berdaya menghentikan scrolling di tempat tidur bukan karena kelemahan karakter, melainkan terkurasnya cadangan biologis tekad. Panduan mencegah krisis layar malam hari berdasarkan riset Roy Baumeister tentang kelelahan ego dan kelelahan keputusan.",
    content: [
      "Bagi banyak orang, momen paling paradoks dalam sehari terjadi saat malam tiba. Seseorang yang bangun pagi, menyelesaikan laporan rumit, mengelola rapat yang menegangkan, dan menunjukkan disiplin diri luar biasa sepanjang jam kerja dapat berubah menjadi sosok yang sama sekali berbeda pada pukul sepuluh malam. Niat sederhana untuk 'hanya melihat ponsel lima menit sebelum tidur' dengan cepat larut menjadi berjam-jam scrolling tanpa henti di media sosial; tatapan terkunci pada layar dan malam berakhir larut disertai perasaan bersalah yang mendalam. Orang-orang sering menganggap hal ini sebagai kelemahan karakter atau kegagalan moral. Namun, temuan eksperimental dari psikolog sosial Prof. Dr. Roy F. Baumeister membuktikan bahwa masalah sesungguhnya bukanlah karakter yang lemah, melainkan terkurasnya sumber daya energi biologis yang terbatas.",
      "Dalam penelitian penting tahun 1998 yang diterbitkan di 'Journal of Personality and Social Psychology', dilakukan di Case Western Reserve University dan Florida State University, Baumeister dan timnya membuktikan bahwa pengendalian diri bukanlah kebajikan tanpa batas, melainkan berfungsi layaknya otot yang mengalami kelelahan saat terus digunakan. Dalam eksperimen terkenal yang melibatkan lobak dan kue cokelat panggang, peserta yang diharuskan menahan godaan aroma kue dan hanya memakan lobak mentah menyerah saat mengerjakan teka-teki geometri yang mustahil dipecahkan hanya dalam 8 menit, sedangkan kelompok kontrol bertahan rata-rata 21 menit. Baumeister menamai kondisi penurunan psikologis ini sebagai 'Ego Depletion' (Pengurasan Ego).",
      "Mekanisme pengendalian diri di otak terus-menerus membakar energi sepanjang hari. Mulai dari memilih pakaian di pagi hari dan menyusun tanggapan email yang cermat, hingga menahan kekesalan di jalan raya dan mengabaikan gangguan di tempat kerja, setiap keputusan mikro menyedot energi dari korteks prefrontal. Proses kumulatif ini, yang dikenal dalam psikologi sebagai 'Kelelahan Keputusan' (Decision Fatigue), melumpuhkan rem mental menjelang malam. Pada pukul 22.00, mengambil smartphone menghadapkan pikiran yang lelah pada arus algoritma yang dirancang oleh ribuan insinyur untuk menahan perhatian selama mungkin. Mengharapkan tekad yang terkuras untuk melawan godaan tersebut sendirian adalah hal yang secara biologis tidak realistis.",
      "Sebagaimana diuraikan Roy Baumeister dan John Tierney dalam karya mereka 'Willpower: Rediscovering the Greatest Human Strength', individu yang tampak memiliki pengendalian diri luar biasa bukanlah mereka yang terus-menerus bertarung melawan godaan secara heroik. Sebaliknya, mereka menyadari keterbatasan tekad dan menata lingkungan mereka agar terhindar dari godaan ketika lelah. Menghindari jebakan scrolling malam hari tidak membutuhkan pengerahan tekad lebih keras di larut malam, melainkan penerapan batasan lingkungan yang otomatis. Mengurangi keputusan sepele di siang hari, memajukan tugas berat ke pagi hari, dan menetapkan batasan mekanis yang jelas untuk perangkat pada malam hari menjadi fondasi pendekatan ini.",
      "Bagi mereka yang ingin melindungi waktu istirahat malam dari jebakan algoritma tanpa harus bergantung pada tekad yang sudah terkuras, Limitra App Block memungkinkan pengguna menerapkan pembatasan akses pada aplikasi tertentu dalam rentang jam yang ditentukan guna mendukung malam yang tenang dan bebas layar."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Kontrol Waktu Layar",
    date: "2026-10-11",
    readTime: "6 mnt",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego Depletion",
      "Kelelahan Keputusan",
      "Kekuatan Tekad",
      "Kontrol Waktu Layar",
      "Korteks Prefrontal",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "104",
    slug: "ego-depletion-ni-roy-baumeister-at-ang-bitag-ng-screen-sa-gabi",
    title: "Ang Modelo ng 'Ego Depletion' ni Roy Baumeister: Bakit Bumibigay ang Ating Willpower sa Gabi sa Harap ng Screen?",
    summary: "Ang dahilan kung bakit ang mga taong disiplinado sa trabaho ay hindi mapigilan ang pag-scroll sa kama ay hindi mahinang pagkatao, kundi ang naubos na biyolohikal na reserba ng lakas ng loob. Gabay laban sa krisis sa screen sa gabi batay sa pananaliksik ni Roy Baumeister sa Ego Depletion at decision fatigue.",
    content: [
      "Para sa marami, ang pinakamalaking salungatan sa araw ay nagaganap sa gabi. Ang isang taong maagang gumigising, gumagawa ng mahihirap na ulat sa trabaho, humaharap sa mabibigat na pagpupulong, at nagpapakita ng mataas na disiplina mula umaga hanggang hapon ay nagiging ibang tao pagdating ng alas-diyes ng gabi. Ang simpleng layunin na 'titingin lang ng limang minuto bago matulog' ay nauuwi sa ilang oras na walang patumanggang pag-scroll sa social media; nananatiling nakatutok ang mga mata sa screen at natatapos ang gabi nang lampas hatinggabi na may kasamang matinding panghihinayang. Kadalasang itinuturing ito bilang kawalan ng determinasyon. Ngunit ayon sa mga natuklasan ng social psychologist na si Dr. Roy F. Baumeister, hindi ito kahinaan ng karakter kundi pagkaubos ng limitadong reserba ng biyolohikal na enerhiya.",
      "Sa isang tanyag na pag-aaral noong 1998 na inilathala sa 'Journal of Personality and Social Psychology' mula sa Case Western Reserve University at Florida State University, pinatunayan nina Baumeister at ng kanyang koponan na ang pagpipigil sa sarili ay hindi walang katapusang lakas, kundi parang kalamnan na napapagod kapag patuloy na ginagamit. Sa kilalang eksperimento ng labanos at bagong lutong cookies, ang mga kalahok na pinilit magtiis sa bango ng tsokolate at kumain lamang ng labanos ay sumuko sa isang imposibleng puzzle sa loob lamang ng 8 minuto, kumpara sa 21 minuto ng grupong hindi kinailangang magtiis. Tinawag ni Baumeister ang kondisyong ito bilang 'Ego Depletion' (Pagkaubos ng Ego).",
      "Ang mekanismo ng pagpipigil sa sarili ng tao ay patuloy na gumagastos ng lakas buong araw. Mula sa pagpili ng isusuot sa umaga at pag-iingat sa pagsagot sa email, hanggang sa pagtitimpi sa trapiko at pag-iwas sa mga abala sa trabaho, ang bawat desisyon ay unti-unting umuubos sa lakas ng prefrontal cortex. Ang prosesong ito, na tinatawag na 'Decision Fatigue' (Pagkapagod sa Pagdedesisyon), ay nagpapahina sa kakayahan ng utak na magpreno pagsapit ng gabi. Pagsapit ng alas-diyes, ang paghawak sa smartphone ay naglalagay sa isang pagod na isip sa harap ng mga algorismo na sadyang idinisenyo ng daan-daang eksperto upang hulihin ang atensyon. Hindi makatwirang asahan na ang isang naubos na willpower ay makakatanggi nang mag-isa sa ganitong matinding pang-aakit.",
      "Gaya ng ipinaliwanag nina Roy Baumeister at John Tierney sa aklat na 'Willpower: Rediscovering the Greatest Human Strength', ang mga taong may pinakamataas na disiplina sa sarili ay hindi yaong mga laging nakikipagbuno sa tukso. Sa halip, kinikilala nila na nauubos ang willpower at inaayos nila ang kanilang kapaligiran upang maiwasan ang mga tukso kapag pagod na sila. Ang solusyon sa pag-scroll sa gabi ay hindi ang pagpilit sa sarili na magtiis pa, kundi ang paglalagay ng mga awtomatikong panuntunan sa paligid. Ang pagbawas sa mga di-mahalagang desisyon sa araw, paggawa ng mahihirap na gawain sa umaga, at pagtatakda ng malinaw na harang sa mga gadyet sa gabi ang bumubuo sa pundasyon ng pamamaraang ito.",
      "Para sa mga nais protektahan ang kanilang oras ng pahinga laban sa mga algorithmic feed nang hindi umaasa sa naubos nang willpower sa gabi, ang Limitra App Block ay nagbibigay-daan upang magtakda ng paghihigpit sa pag-access sa mga napiling app sa mga partikular na oras upang mapanatili ang tahimik na gabi na malayo sa screen."
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "Kontrol sa Screen Time",
    date: "2026-10-11",
    readTime: "6 min",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego Depletion",
      "Decision Fatigue",
      "Willpower",
      "Kontrol sa Screen Time",
      "Prefrontal Cortex",
      "Limitra App Block"
    ]
  },
  th: {
    id: "104",
    slug: "roy-baumeister-ego-depletion-lae-kab-dak-na-jor-ton-klang-kuen",
    title: "แบบจำลอง 'Ego Depletion' ของ Roy Baumeister: เหตุใดพลังใจของเราจึงพังทลายลงในตอนกลางคืนและยอมแพ้ให้กับหน้าจอ",
    summary: "การที่คนที่ทำงานอย่างมีสมาธิตลอดทั้งวันไม่สามารถหยุดเลื่อนดูโทรศัพท์บนเตียงได้ไม่ใช่เพราะจิตใจอ่อนแอ แต่เป็นเพราะคลังพลังใจทางชีววิทยาหมดลง คู่มือป้องกันวิกฤตหน้าจอยามค่ำคืนจากงานวิจัยเรื่อง Ego Depletion และความล้าจากการตัดสินใจของ Roy Baumeister",
    content: [
      "สำหรับหลายคน ช่วงเวลาที่ขัดแย้งกันที่สุดในแต่ละวันคือช่วงค่ำ คนที่ตื่นแต่เช้า จัดการรายงานที่ซับซ้อน รับมือกับการประชุมที่ตึงเครียด และมีวินัยในตนเองอย่างยอดเยี่ยมตลอดเวลาทำงาน กลับกลายเป็นคนละคนเมื่อถึงเวลา 22.00 น. บนเตียง ความตั้งใจเพียง 'ขอดูโทรศัพท์แค่ห้านาทีก่อนนอน' กลับกลายเป็นการเลื่อนดูโซเชียลมีเดียนานหลายชั่วโมง สายตาถูกตรึงไว้กับหน้าจอ และปิดไฟนอนหลังเที่ยงคืนด้วยความรู้สึกผิดและหงุดหงิดใจ ผู้คนมักมองว่าสิ่งนี้เกิดจากความอ่อนแอหรือการขาดวินัย แต่ผลการวิจัยเชิงทดลองของ ศ.ดร. Roy F. Baumeister นักจิตวิทยาสังคม พิสูจน์ให้เห็นว่าปัญหาไม่ได้อยู่ที่อุปนิสัย แต่เป็นเพราะพลังงานทางชีววิทยาที่จำกัดได้หมดลง",
      "ในการศึกษาสำคัญปี 1998 ที่ตีพิมพ์ใน 'Journal of Personality and Social Psychology' ดำเนินการที่มหาวิทยาลัย Case Western Reserve และมหาวิทยาลัย Florida State Baumeister และทีมงานได้แสดงให้เห็นว่าการควบคุมตนเองไม่ใช่สิ่งที่มีอยู่อย่างไม่จำกัด แต่ทำงานคล้ายกับกล้ามเนื้อที่อ่อนล้าลงเมื่อถูกใช้งานอย่างต่อเนื่อง ในการทดลอง 'หัวไชเท้าและคุกกี้ช็อกโกแลต' อันโด่งดัง ผู้เข้าร่วมการทดลองที่ต้องอดทนต่อกลิ่นหอมของคุกกี้และกินได้เพียงหัวไชเท้าดิบ ยอมแพ้ต่อปริศนาเรขาคณิตที่ไม่มีคำตอบในเวลาเพียง 8 นาที ในขณะที่กลุ่มควบคุมพยายามต่อไปเฉลี่ยถึง 21 นาที Baumeister เรียกภาวะการหมดพลังทางจิตวิทยานี้ว่า 'Ego Depletion' (การหมดพลังแห่งตัวตน)",
      "กลไกการควบคุมตนเองของสมองต้องใช้พลังงานอย่างต่อเนื่องตลอดทั้งวัน ตั้งแต่การเลือกเสื้อผ้าในตอนเช้า การเรียบเรียงคำตอบในอีเมลอย่างระมัดระวัง ไปจนถึงการสะกดอารมณ์บนท้องถนนและการขจัดสิ่งรบกวนในที่ทำงาน ทุกการตัดสินใจเล็กๆ ล้วนดึงพลังงานออกจากเปลือกสมองส่วนหน้า (Prefrontal Cortex) กระบวนการสะสมนี้เรียกว่า 'Decision Fatigue' (ความล้าจากการตัดสินใจ) ซึ่งจะค่อยๆ ปลดเบรกทางจิตใจลงเมื่อเข้าสู่ช่วงค่ำ เมื่อถึงเวลา 22.00 น. การหยิบสมาร์ทโฟนขึ้นมาจึงเป็นการนำสมองที่เหนื่อยล้าไปเผชิญหน้ากับอัลกอริทึมที่ออกแบบโดยวิศวกรนับพันเพื่อดึงดูดความสนใจ การคาดหวังให้พลังใจที่หมดลงแล้วต่อสู้กับการกระตุ้นนี้เพียงลำพังจึงเป็นเรื่องที่เป็นไปไม่ได้ในทางชีววิทยา",
      "ดังที่ Roy Baumeister และ John Tierney ได้อธิบายไว้ในหนังสือ 'Willpower: Rediscovering the Greatest Human Strength' คนที่มีวินัยในตนเองสูงไม่ได้เป็นคนที่ต้องต่อสู้กับสิ่งล่อใจอย่างกล้าหาญตลอดเวลา แต่เป็นคนที่ตระหนักว่าพลังใจมีจำกัด จึงออกแบบสภาพแวดล้อมล่วงหน้าเพื่อหลีกเลี่ยงการเผชิญหน้ากับสิ่งล่อใจเมื่อตนเองเหนื่อยล้า การแก้ปัญหาการไถหน้าจอดึกดื่นจึงไม่ใช่การเค้นพลังใจในยามดึก แต่เป็นการสร้างเกราะป้องกันภายนอกแบบอัตโนมัติ การลดการตัดสินใจที่ไม่จำเป็นในแต่ละวัน การทำงานหนักให้เสร็จในตอนเช้า และการกำหนดขอบเขตที่ชัดเจนสำหรับอุปกรณ์ในตอนกลางคืนจึงเป็นหัวใจสำคัญของแนวทางนี้",
      "สำหรับผู้ที่ต้องการปกป้องเวลาพักผ่อนยามค่ำคืนจากกระแสอัลกอริทึมโดยไม่ต้องพึ่งพาพลังใจที่หมดลงไปแล้ว Limitra App Block ช่วยให้สามารถกำหนดการจำกัดการเข้าถึงแอปพลิเคชันที่เลือกไว้ในช่วงเวลาที่ระบุ เพื่อรักษาค่ำคืนที่สงบและปลอดจากหน้าจอ"
    ],
    source: "Roy Baumeister (Willpower) & Journal of Personality and Social Psychology",
    sourceUrl: "https://doi.org/10.1037/0022-3514.74.5.1252",
    category: "การควบคุมเวลาหน้าจอ",
    date: "2026-10-11",
    readTime: "6 นาที",
    featured: false,
    tags: [
      "Roy Baumeister",
      "Ego Depletion",
      "ความล้าจากการตัดสินใจ",
      "พลังใจ",
      "การควบคุมเวลาหน้าจอ",
      "เปลือกสมองส่วนหน้า",
      "Limitra App Block"
    ]
  }
};

const langFiles = {
  tr: 'haberler.json',
  en: 'news-en.json',
  es: 'news-es.json',
  fr: 'news-fr.json',
  de: 'news-de.json',
  pt: 'news-pt.json',
  it: 'news-it.json',
  ar: 'news-ar.json',
  id: 'news-id.json',
  fil: 'news-fil.json',
  th: 'news-th.json'
};

for (const [lang, filename] of Object.entries(langFiles)) {
  const filePath = path.join(dataDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // If article 104 already exists, remove it first to avoid duplicates
  const filtered = data.filter(item => item.id !== '104');
  
  // Prepend article 104 to the top of the list
  const updated = [articles[lang], ...filtered];
  
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2) + '\n', 'utf8');
  console.log(`[add-article-104] ${filename} güncellendi (toplam: ${updated.length})`);
}

console.log('[add-article-104] 11 dilde Makale 104 başarıyla eklendi.');
