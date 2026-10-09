import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "101",
    slug: "italya-okullarda-cep-telefonu-yasagi-egitsel-kullanim-dahil-sinifta-ekransiz-donem",
    title: "İtalya'da Okullarda Kapsamlı Telefon Yasağı: Eğitsel Amaçlı Kullanım Dahil Sınıflardan Ekranlar Kaldırıldı",
    summary: "İtalya Eğitim ve Liyakat Bakanlığı, ilkokul ve ortaokulların ardından liselerde de ders saatlerinde cep telefonu kullanımını tamamen yasakladı. Yeni genelgeyle 'eğitsel amaçlı kullanım' istisnası da kaldırılarak sınıflarda kâğıt ajandalara ve el yazısına dönüş teşvik ediliyor.",
    content: [
      "İtalya Eğitim ve Liyakat Bakanlığı (Ministero dell'Istruzione e del Merito), çocukların ve gençlerin bilişsel gelişimini, dikkat kapasitesini ve sınıf içi etkileşimini korumak amacıyla okullarda cep telefonu kullanımına yönelik kapsamlı kısıtlamaları yürürlüğe koydu. Bakan Giuseppe Valditara tarafından yayımlanan resmî genelgeler doğrultusunda, ilkokul ve ortaokulların ardından lise düzeyinde de ders saatleri boyunca sınıflarda akıllı telefon, akıllı saat ve kablosuz kulaklık kullanımı yasaklandı.",
      "Düzenlemenin en dikkat çeken yönünü, önceki yıllarda uygulanan pedagojik istisnaların sonlandırılması oluşturuyor. Yeni yönergeye göre, öğretmen izniyle bile olsa ders sırasında kişisel cep telefonlarının eğitsel veya didaktik amaçlarla kullanılmasına izin verilmiyor. Bakanlık, dijital araçların gerekli olduğu öğretim faaliyetlerinde telefonların yerine öğretmen gözetiminde kullanılan bilgisayar veya tabletlerin tercih edilmesini şart koşuyor. Engelli öğrenciler veya özel öğrenme güçlüğü (DSA) bulunan bireyler için yardımcı teknoloji olarak kullanılan cihazlar ise bu kuralın istisnasını oluşturuyor.",
      "Kararın bilimsel gerekçesinde OECD, Dünya Sağlık Örgütü ve İtalya Yüksek Sağlık Enstitüsü araştırmalarına atıfta bulunuldu. Akıllı telefonların ders sırasında ortamda bulunmasının bile çalışma belleğini zayıflattığı, odaklanma süresini kısalttığı ve ergenlerde yalnızlık ile uyku düzensizliklerini tetiklediği vurgulandı. Bakan Valditara, ekran bağımlılığına karşı geleneksel öğrenme araçlarının değerini hatırlatarak öğrencilerin el yazısı alışkanlıklarını güçlendirmek amacıyla kâğıt ajanda (diario cartaceo) kullanımına geri dönülmesini de tavsiye etti.",
      "İtalya'nın adımı, UNESCO'nun Küresel Eğitim İzleme raporunda dikkat çektiği uluslararası eğilimin en somut örneklerinden birini oluşturuyor. Rapora göre dünya genelinde 114 ülke eğitim kurumlarında akıllı telefonları sınırlandıran ulusal politikalar uyguluyor. İtalyan okul yönetimleri, öğrencilerin sabah girişlerinde cihazlarını güvenli dolaplara veya sınıf kutularına teslim etmesini sağlayarak teneffüslerde ve ders aralarında yüz yüze iletişimi ve sosyal oyunları canlandırmayı hedefliyor.",
      "Okul saatlerinde veya çalışma rutinlerinde dikkati dağıtan dijital bildirimlerle arasına net bir mesafe koymak isteyen kullanıcılar için Limitra App Block, seçilen uygulamalara belirli saat aralıklarında erişimi kısıtlayarak zihinsel odağı korumaya yardımcı oluyor."
    ],
    source: "İtalya Eğitim ve Liyakat Bakanlığı (Ministero dell'Istruzione e del Merito) & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Okullar & Gençlik",
    date: "2026-10-09",
    readTime: "5 dk",
    featured: false,
    tags: [
      "İtalya",
      "Eğitim Bakanlığı",
      "Giuseppe Valditara",
      "Okulda Telefon Yasağı",
      "Ekransız Eğitim",
      "Dijital Dikkat",
      "Limitra App Block"
    ]
  },
  en: {
    id: "101",
    slug: "italy-bans-smartphones-in-schools-including-educational-use",
    title: "Italy Enacts Strict School Smartphone Ban: Devices Barred from Classrooms Even for Educational Use",
    summary: "The Italian Ministry of Education and Merit has expanded its smartphone ban to high schools during instruction hours. The ministerial directive removes exceptions for didactic use, promoting a return to paper diaries and focused classroom learning.",
    content: [
      "The Italian Ministry of Education and Merit (Ministero dell'Istruzione e del Merito) has implemented comprehensive restrictions on mobile phone usage across all schools to protect students' cognitive development, attention span, and in-person social interaction. Following ministerial directives issued by Minister Giuseppe Valditara, the prohibition on smartphones, smartwatches, and wireless earbuds during instructional hours now covers primary, middle, and upper secondary schools nationwide.",
      "The most significant aspect of the policy is the removal of previous pedagogical exceptions. Under the directive, personal mobile phones cannot be used in classrooms even for didactic or educational purposes with teacher permission. The ministry specifies that when digital tools are necessary for curriculum activities, schools must use dedicated tablets or computers under direct teacher supervision. Exemptions remain strictly limited to students with disabilities or specific learning disorders (DSA) who rely on assistive technologies.",
      "The directive cites scientific findings from the OECD, the World Health Organization, and the Italian National Institute of Health (Istituto Superiore di Sanità), which indicate that the mere presence of smartphones during class diminishes working memory, shortens attention spans, and exacerbates digital dependency. Minister Valditara emphasized the enduring value of traditional learning practices, recommending the revival of physical paper diaries (diario cartaceo) to help students strengthen handwriting habits and organizational memory.",
      "Italy's policy aligns with a growing international trend highlighted in UNESCO's Global Education Monitoring reports, which document that 114 countries worldwide now enforce national restrictions on smartphones in educational environments. Italian schools are implementing designated storage lockers and classroom deposit boxes, aiming to encourage face-to-face peer conversations and active play during recess and passing periods.",
      "For individuals seeking to establish clear boundaries against distracting notifications during school or study hours, Limitra App Block provides scheduled time-window restrictions on selected applications to help sustain deep focus."
    ],
    source: "Italian Ministry of Education and Merit & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Schools & Youth",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italy",
      "Ministry of Education",
      "Giuseppe Valditara",
      "School Phone Ban",
      "Classroom Distraction",
      "Digital Wellbeing",
      "Limitra App Block"
    ]
  },
  es: {
    id: "101",
    slug: "italia-prohibe-telefonos-moviles-escuelas-incluido-uso-educativo",
    title: "Italia prohíbe los teléfonos móviles en las escuelas: Se restringen las pantallas incluso para uso educativo",
    summary: "El Ministerio de Educación de Italia amplió la prohibición de teléfonos inteligentes a las escuelas secundarias durante el horario lectivo. La directiva elimina las excepciones para fines didácticos e impulsa el regreso a los diarios escolares en papel.",
    content: [
      "El Ministerio de Educación y del Mérito de Italia (Ministero dell'Istruzione e del Merito) ha establecido restricciones exhaustivas sobre el uso de teléfonos móviles en los centros educativos con el fin de proteger el desarrollo cognitivo, la capacidad de concentración y la interacción personal de los alumnos. De acuerdo con las directivas oficiales impulsadas por el ministro Giuseppe Valditara, la prohibición de teléfonos inteligentes, relojes inteligentes y auriculares inalámbricos durante las horas de clase abarca la educación primaria, secundaria obligatoria y bachillerato en todo el país.",
      "El aspecto más relevante de la nueva normativa radica en la supresión de las anteriores excepciones pedagógicas. Según las instrucciones ministeriales, los teléfonos personales no pueden emplearse en el aula ni siquiera con fines didácticos o educativos autorizados por el docente. El ministerio establece que, cuando sea imprescindible utilizar herramientas digitales en el aprendizaje, se recurra a tabletas u ordenadores escolares bajo la supervisión directa del profesor. La única excepción se reserva para estudiantes con necesidades educativas especiales o trastornos específicos del aprendizaje que requieran dispositivos de apoyo.",
      "La medida se fundamenta en evidencias científicas de la OCDE, la Organización Mundial de la Salud y el Instituto Superior de Sanidad de Italia, que señalan que la presencia del teléfono en clase reduce la memoria de trabajo, fragmenta la atención y acentúa el aislamiento en los adolescentes. El ministro Valditara defendió la vigencia de los métodos tradicionales de aprendizaje y recomendó el regreso al diario escolar en papel (diario cartaceo) para fortalecer la escritura a mano y la memoria organizativa.",
      "La iniciativa italiana refleja una corriente global destacada por el informe de seguimiento de la educación de la UNESCO, según el cual 114 países han adoptado políticas nacionales que limitan los teléfonos en las escuelas. Los centros educativos italianos están implementando taquillas de custodia y cajas en las aulas para asegurar que los dispositivos permanezcan guardados, fomentando la conversación directa y la actividad física durante los recreos.",
      "Para quienes desean mantener una distancia clara frente a las distracciones digitales durante las horas lectivas o de estudio, Limitra App Block permite configurar bloqueos por franja horaria en aplicaciones seleccionadas, ayudando a preservar la concentración."
    ],
    source: "Ministerio de Educación y del Mérito de Italia & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Escuelas y juventud",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italia",
      "Ministerio de Educación",
      "Giuseppe Valditara",
      "Prohibición de móviles en escuelas",
      "Atención escolar",
      "Bienestar digital",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "101",
    slug: "italie-interdiction-smartphones-ecole-y-compris-usage-pedagogique",
    title: "L'Italie interdit les smartphones à l'école : Écrans proscrits en classe même pour motif pédagogique",
    summary: "Le ministère italien de l'Éducation a étendu l'interdiction des smartphones aux lycées pendant les heures de cours. La directive supprime les dérogations pédagogiques et encourage le retour au cahier de textes papier et à la prise de notes manuscrite.",
    content: [
      "Le ministère italien de l'Éducation et du Mérite (Ministero dell'Istruzione e del Merito) a instauré des restrictions strictes sur l'usage des téléphones mobiles dans les établissements scolaires afin de préserver les facultés cognitives, l'attention et les interactions directes entre élèves. Conformément aux circulaires officielles signées par le ministre Giuseppe Valditara, l'interdiction des smartphones, montres connectées et écouteurs sans fil durant le temps scolaire s'applique désormais de l'école primaire jusqu'au lycée sur l'ensemble du territoire national.",
      "L'élément central de cette directive réside dans la suppression des dérogations pédagogiques antérieures. Désormais, les téléphones portables personnels ne peuvent plus être utilisés en classe, même à des fins didactiques ou éducatives supervisées par l'enseignant. Le ministère stipule que si des supports numériques s'avèrent nécessaires pour une séquence pédagogique, les établissements doivent privilégier des tablettes ou ordinateurs dédiés sous la conduite directe du professeur. Seuls les élèves en situation de handicap ou présentant des troubles spécifiques de l'apprentissage (DSA) bénéficient d'une exception au titre de technologies d'assistance.",
      "Cette décision s'appuie sur des rapports de l'OCDE, de l'Organisation mondiale de la santé et de l'Institut supérieur de la santé italien, démontrant que la proximité d'un smartphone altère la mémoire de travail, disperse l'attention et accentue la fatigue numérique chez les adolescents. Le ministre Valditara a également encouragé le retour au cahier de textes papier (diario cartaceo) pour réhabiliter l'écriture manuscrite et soutenir l'organisation personnelle sans écran.",
      "La démarche de l'Italie s'inscrit dans un mouvement international mis en lumière par l'UNESCO, dont le rapport mondial recense désormais 114 pays appliquant des restrictions sur les téléphones à l'école. Les établissements italiens installent des casiers et des boîtes de dépôt afin de garantir que les appareils restent hors de portée, stimulant les échanges spontanés et les activités partagées lors des récréations.",
      "Pour instaurer une pause numérique structurée pendant les heures de cours ou de révision, Limitra App Block permet de planifier des plages horaires de blocage sur les applications choisies afin de protéger le temps de concentration."
    ],
    source: "Ministère italien de l'Éducation et du Mérite & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Écoles et jeunesse",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italie",
      "Ministère de l'Éducation",
      "Giuseppe Valditara",
      "Interdiction portable école",
      "Attention scolaire",
      "Bien-être numérique",
      "Limitra App Block"
    ]
  },
  de: {
    id: "101",
    slug: "italien-smartphone-verbot-schulen-auch-fuer-unterrichtszwecke",
    title: "Italien verbietet Smartphones an Schulen: Bildschirme im Unterricht auch zu Lernzwecken untersagt",
    summary: "Das italienische Bildungsministerium hat das Smartphone-Verbot während der Unterrichtszeit auf Oberschulen ausgeweitet. Der ministerielle Erlass hebt didaktische Ausnahmen auf und fördert die Rückkehr zum Papiertagebuch und zur Handschrift.",
    content: [
      "Das italienische Ministerium für Unterricht und Verdienst (Ministero dell'Istruzione e del Merito) hat umfassende Beschränkungen für die Nutzung von Mobiltelefonen an Schulen in Kraft gesetzt, um die kognitive Entwicklung, die Aufmerksamkeitsspanne und das persönliche Miteinander der Schüler zu schützen. Auf Grundlage der Erlasse von Bildungsminister Giuseppe Valditara gilt das Verbot von Smartphones, Smartwatches und kabellosen Kopfhörern während der Schulstunden nun von der Grundschule bis zur gymnasialen Oberstufe landesweit.",
      "Der bemerkenswerteste Punkt der Richtlinie ist die Abschaffung früherer didaktischer Ausnahmeregelungen. Nach den ministeriellen Vorgaben dürfen private Mobiltelefone im Klassenzimmer künftig selbst zu pädagogischen Zwecken mit Genehmigung der Lehrkraft nicht mehr verwendet werden. Das Ministerium schreibt vor, dass bei Bedarf digitaler Lehrinhalte auf schuleigene Tablets oder Computer unter direkter Aufsicht der Lehrkraft zurückgegriffen werden muss. Ausnahmen gelten ausschließlich für Schüler mit Behinderungen oder spezifischen Lernstörungen, die auf assistive Technologien angewiesen sind.",
      "Die Entscheidung stützt sich auf wissenschaftliche Untersuchungen der OECD, der Weltgesundheitsorganisation und des italienischen Gesundheitsinstituts (Istituto Superiore di Sanità). Diese belegen, dass bereits die bloße Anwesenheit von Smartphones das Arbeitsgedächtnis belastet, den Fokus beeinträchtigt und emotionale Unruhe verstärkt. Minister Valditara hob die Bedeutung klassischer Lernformen hervor und empfahl die Rückkehr zum traditionellen Papiertagebuch (diario cartaceo), um die handschriftliche Praxis und das Erinnerungsvermögen zu stärken.",
      "Italiens Vorgehen spiegelt einen weltweiten Trend wider, den der UNESCO-Weltbildungsbericht festhält: Inzwischen setzen 114 Länder nationale Einschränkungen für Smartphones im Bildungsbereich durch. Italienische Schulen richten Schließfächer und Sammelboxen ein, damit Geräte während des Schultags verstaut bleiben und die Pausen wieder für persönliche Gespräche und Bewegung genutzt werden.",
      "Wer während der Schulzeit oder bei intensiven Arbeitsphasen störende App-Benachrichtigungen ausschließen möchte, kann mit Limitra App Block feste Zeitfenster für ausgewählte Anwendungen definieren und so die Konzentration unterstützen."
    ],
    source: "Italienisches Ministerium für Unterricht und Verdienst & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Schulen & Jugend",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italien",
      "Bildungsministerium",
      "Giuseppe Valditara",
      "Handyverbot Schule",
      "Konzentration im Unterricht",
      "Digitale Achtsamkeit",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "101",
    slug: "italia-proibe-telemoveis-escolas-incluindo-uso-pedagogico",
    title: "Itália proíbe telemóveis nas escolas: Ecrãs afastados das salas mesmo para fins pedagógicos",
    summary: "O Ministério da Educação de Itália alargou a proibição de smartphones ao ensino secundário durante o horário letivo. A diretiva revoga exceções didáticas e incentiva o regresso às agendas de papel e à escrita manual.",
    content: [
      "O Ministério da Educação e do Mérito de Itália (Ministero dell'Istruzione e del Merito) estabeleceu restrições rigorosas à utilização de telemóveis nas escolas com o objetivo de proteger o desenvolvimento cognitivo, a concentração e a convivência presencial dos estudantes. De acordo com as diretivas assinadas pelo ministro Giuseppe Valditara, a proibição de smartphones, smartwatches e auriculares sem fios durante as aulas aplica-se agora desde o ensino primário até ao ensino secundário em todo o país.",
      "O ponto central da nova orientação é o fim das exceções pedagógicas prévias. Segundo a norma, os telemóveis pessoais não podem ser utilizados na sala de aula mesmo para finalidades didáticas sob autorização do professor. O ministério determinou que, caso sejam necessárias ferramentas digitais no processo de ensino, devem ser utilizados computadores ou tablets institucionais sob supervisão direta do docente. Apenas alunos com deficiência ou perturbações específicas de aprendizagem mantêm permissão para usar dispositivos de apoio.",
      "A medida fundamenta-se em estudos da OCDE, da Organização Mundial da Saúde e do Instituto Superior de Saúde de Itália, que comprovam que a proximidade de smartphones reduz a memória de trabalho, encurta o foco e intensifica o cansaço mental dos jovens. O ministro Valditara sublinhou a importância dos métodos tradicionais de estudo e aconselhou a retoma das agendas escolares em papel (diario cartaceo) para exercitar a escrita manual e a retenção de informação.",
      "A decisão italiana enquadra-se no panorama global reportado pela UNESCO, que assinala que 114 países contam atualmente com diretrizes nacionais de restrição ao uso de telemóveis nas escolas. Os estabelecimentos italianos estão a disponibilizar cacifos e caixas de recolha nas salas para assegurar que os aparelhos fiquem guardados, incentivando conversas presenciais e atividades ao ar livre nos intervalos.",
      "Para quem pretende criar um intervalo digital bem definido durante o período de aulas ou de estudo, o Limitra App Block permite configurar bloqueios por intervalo de horário em aplicações selecionadas, ajudando a manter o foco."
    ],
    source: "Ministério da Educação e do Mérito de Itália & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Escolas e juventude",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Itália",
      "Ministério da Educação",
      "Giuseppe Valditara",
      "Proibição de telemóveis na escola",
      "Foco escolar",
      "Bem-estar digital",
      "Limitra App Block"
    ]
  },
  it: {
    id: "101",
    slug: "italia-stop-smartphone-a-scuola-vietati-in-classe-anche-per-uso-didattico",
    title: "Stop agli smartphone nelle scuole italiane: Dispositivi vietati in classe anche per fini didattici",
    summary: "Il Ministero dell'Istruzione e del Merito ha esteso il divieto dei telefoni cellulari alle scuole superiori durante l'orario di lezione. La circolare elimina le deroghe didattiche e rilancia il diario cartaceo e la scrittura a mano.",
    content: [
      "Il Ministero dell'Istruzione e del Merito (MIM) ha reso pienamente operative le disposizioni volte a limitare l'uso dei telefoni cellulari all'interno delle istituzioni scolastiche, con l'obiettivo di tutelare lo sviluppo cognitivo, l'attenzione e la socialità degli studenti. Seguendo le direttive emanate dal ministro Giuseppe Valditara, il divieto di utilizzo di smartphone, smartwatch e auricolari wireless durante le ore di lezione coinvolge l'intero percorso formativo, dalla scuola primaria fino alla scuola secondaria di secondo grado.",
      "Il punto più rilevante della normativa riguarda l'eliminazione delle precedenti deroghe per attività didattiche. Secondo la circolare ministeriale, i telefoni cellulari personali non possono più essere utilizzati in classe neppure a fini educativi o didattici con il consenso del docente. Il Ministero ha chiarito che l'impiego di strumenti digitali per finalità di apprendimento deve avvenire esclusivamente tramite tablet o computer forniti dalla scuola e sotto la diretta guida degli insegnanti. L'unica eccezione rimane valida per gli alunni con disabilità o disturbi specifici dell'apprendimento (DSA) certificati da PEI o PDP.",
      "Il provvedimento richiama i dati diffusi dall'OCSE, dall'Organizzazione Mondiale della Sanità e dall'Istituto Superiore di Sanità, evidenziando come la presenza costante degli schermi riduca la memoria di lavoro, frammenti la concentrazione e alimenti ansia e isolamento nei più giovani. Il ministro Valditara ha inoltre ribadito il valore pedagogico degli strumenti tradizionali, raccomandando il ritorno al diario cartaceo per riscoprire l'abitudine alla scrittura manuale e stimolare la memoria organizzativa.",
      "L'iniziativa italiana si inserisce in un quadro internazionale ben delineato dall'ultimo rapporto di monitoraggio dell'UNESCO, che rileva come 114 Paesi nel mondo abbiano adottato politiche nazionali di limitazione dello smartphone nelle aule. Negli istituti italiani si moltiplicano contenitori dedicati e armadietti per custodire i dispositivi fino al termine delle lezioni, restituendo valore alla conversazione diretta e alla ricreazione condivisa.",
      "Per chi desidera proteggere la propria concentrazione durante le ore di scuola o nei momenti dedicati allo studio, Limitra App Block consente di impostare finestre orarie di blocco sulle applicazioni selezionate, aiutando a ridurre le distrazioni digitali."
    ],
    source: "Ministero dell'Istruzione e del Merito & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Scuole e gioventù",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italia",
      "Ministero dell'Istruzione",
      "Giuseppe Valditara",
      "Divieto smartphone scuola",
      "Attenzione in classe",
      "Benessere digitale",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "101",
    slug: "italya-tahzur-al-hawatil-al-thakiyya-fi-al-madaris-hatta-lil-aghrad-al-talimiyya",
    title: "إيطاليا تحظر الهواتف الذكية في المدارس بالكامل: منع الأجهزة في الفصول حتى للأغراض التعليمية",
    summary: "وسعت وزارة التعليم الإيطالية حظر استخدام الهواتف المحمولة ليشمل المدارس الثانوية أثناء الحصص الدراسية. التعميم الوزاري ألغى الاستثناءات التعليمية السابقة ودعا للعودة إلى اليوميات الورقية والكتابة اليدوية.",
    content: [
      "فرضت وزارة التعليم والاستحقاق الإيطالية (Ministero dell'Istruzione e del Merito) قيوداً شاملة على استخدام الهواتف المحمولة داخل المدارس، وذلك لحماية النمو المعرفي للطلاب وتحسين قدرتهم على التركيز وتعزيز التواصل الاجتماعي المباشر. وبموجب التوجيهات الرسمية التي أصدرها الوزير جوزيبي فالديتارا، يمتد حظر الهواتف الذكية والساعات الذكية وسماعات الأذن اللاسلكية أثناء الحصص الدراسية ليشمل المدارس الابتدائية والإعدادية والثانوية في جميع أنحاء البلاد.",
      "ويعد أبرز ما يميز هذه القرارات إلغاء الاستثناءات التعليمية التي كانت معمولاً بها سابقاً. فوفقاً للتعليمات الوزارية الجديدة، لم يعد يُسمح للطلاب باستخدام هواتفهم الشخصية في الفصل حتى وإن كان ذلك لأغراض دراسية أو تعليمية بإذن المعلم. وأوضحت الوزارة أنه في حال دعت الحاجة التربوية لاستخدام أدوات رقمية، فيجب الاعتماد على الأجهزة اللوحية أو الحواسيب المحمولة المخصصة وتحت إشراف مباشر من المعلم. وتقتصر الاستثناءات حصرياً على الطلاب من ذوي الإعاقة أو الذين يعانون من صعوبات تعلم محددة ويحتاجون لأجهزة مساعدة.",
      "واستندت الوزارة في قرارها إلى دراسات صادرة عن منظمة التعاون الاقتصادي والتنمية ومنظمة الصحة العالمية والمعهد العالي للصحة في إيطاليا، والتي تؤكد أن وجود الهواتف في الفصل يضعف الذاكرة العاملة ويشتت الانتباه ويزيد من التوتر والقلق لدى المراهقين. وشدد الوزير فالديتارا على أهمية الأدوات التقليدية، موصياً بالعودة إلى المذكرات المدرسية الورقية (diario cartaceo) لتعزيز عادة الكتابة بخط اليد وتنمية القدرة على التنظيم الذهني.",
      "وتأتي الخطوة الإيطالية ضمن توجه دولي أوسع وثقه تقرير اليونسكو العالمي لرصد التعليم، والذي أشار إلى أن 114 دولة حول العالم تطبق سياسات وطنية لتقييد الهواتف داخل المؤسسات التعليمية. وتعمل المدارس في إيطاليا على توفير خزائن مخصصة وصناديق لحفظ الأجهزة طوال اليوم الدراسي، بما يسهم في إحياء التفاعل الحقيقي والأنشطة المشتركة خلال فترات الاستراحة.",
      "ولمن يرغب في وضع حدود واضحة تمنع الإشعارات المشتتة أثناء الدوام الدراسي أو ساعات المذاكرة، يوفر تطبيق Limitra App Block ميزة حظر التطبيقات وفق فترات زمنية محددة للمساعدة في الحفاظ على التركيز الذهني."
    ],
    source: "وزارة التعليم والاستحقاق الإيطالية & وكالة أنسا (ANSA)",
    sourceUrl: "https://www.miur.gov.it",
    category: "المدارس والشباب",
    date: "2026-10-09",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "إيطاليا",
      "وزارة التعليم",
      "جوزيبي فالديتارا",
      "حظر الهواتف في المدارس",
      "التركيز الدراسي",
      "الانضباط الرقمي",
      "Limitra App Block"
    ]
  },
  id: {
    id: "101",
    slug: "italia-larang-ponsel-di-sekolah-termasuk-untuk-keperluan-belajar",
    title: "Italia Larang Ponsel di Sekolah: Pembatasan Total di Kelas Bahkan untuk Tujuan Pembelajaran",
    summary: "Kementerian Pendidikan Italia memperluas larangan penggunaan ponsel pintar hingga tingkat sekolah menengah atas selama jam pelajaran. Surat edaran baru menghapus pengecualian didaktik dan mendorong penggunaan buku agenda kertas.",
    content: [
      "Kementerian Pendidikan dan Prestasi Italia (Ministero dell'Istruzione e del Merito) memberlakukan pembatasan menyeluruh terhadap penggunaan telepon seluler di lingkungan sekolah guna melindungi perkembangan kognitif, rentang perhatian, dan interaksi sosial langsung para siswa. Melalui arahan resmi dari Menteri Giuseppe Valditara, larangan ponsel pintar, jam tangan pintar, dan earphone nirkabel selama jam kegiatan belajar mengajar kini mencakup sekolah dasar, sekolah menengah pertama, hingga sekolah menengah atas di seluruh negeri.",
      "Poin paling krusial dari kebijakan baru ini adalah penghapusan pengecualian pedagogis yang sebelumnya berlaku. Berdasarkan surat edaran kementerian, siswa tidak lagi diperbolehkan menggunakan ponsel pribadi di dalam kelas bahkan untuk keperluan belajar atau didaktik atas izin guru. Kementerian menegaskan bahwa jika aktivitas pembelajaran memerlukan perangkat digital, sekolah wajib menggunakan komputer tablet atau laptop inventaris sekolah di bawah pengawasan langsung pengajar. Pengecualian hanya diberikan secara ketat bagi siswa penyandang disabilitas atau kesulitan belajar khusus yang memerlukan teknologi asistif.",
      "Kebijakan ini dilandasi oleh riset dari OECD, Organisasi Kesehatan Dunia (WHO), dan Institut Kesehatan Tinggi Italia (Istituto Superiore di Sanità) yang membuktikan bahwa keberadaan ponsel di kelas menurunkan kapasitas memori kerja, mengikis konsentrasi, serta memicu kecemasan pada remaja. Menteri Valditara menekankan pentingnya metode belajar konvensional dan menyarankan pengembalian buku agenda harian kertas (diario cartaceo) untuk melatih keterampilan menulis tangan dan retensi memori siswa.",
      "Langkah tegas Italia selaras dengan tren global yang dicatat dalam laporan Global Education Monitoring UNESCO, yang melaporkan bahwa 114 negara telah menerapkan kebijakan nasional pembatasan ponsel di sekolah. Sekolah-sekolah di Italia kini menyediakan loker khusus dan kotak penyimpanan di ruang kelas agar perangkat tersimpan rapi, sehingga jam istirahat kembali diisi dengan percakapan nyata dan aktivitas fisik bersama.",
      "Bagi individu yang ingin membangun batas digital yang jelas dari gangguan notifikasi selama jam sekolah atau sesi belajar mandiri, Limitra App Block menyediakan pengaturan pemblokiran berdasarkan rentang waktu pada aplikasi pilihan guna menjaga konsentrasi."
    ],
    source: "Kementerian Pendidikan dan Prestasi Italia & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Sekolah & Remaja",
    date: "2026-10-09",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Italia",
      "Kementerian Pendidikan",
      "Giuseppe Valditara",
      "Larangan Ponsel Sekolah",
      "Fokus Belajar",
      "Kebugaran Digital",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "101",
    slug: "italya-ipinagbawal-ang-cellphone-sa-paaralan-pati-sa-pag-aaral",
    title: "Ipinagbawal ng Italya ang mga Cellphone sa Paaralan: Hindi Na Pwede sa Klase Kahit para sa Pag-aaral",
    summary: "Pinalawak ng Kagawaran ng Edukasyon ng Italya ang pagbabawal sa mga smartphone hanggang sa senior high school habang may klase. Tinanggal sa bagong direktiba ang mga pedagogical exemption at ibinabalik ang paggamit ng paper diary at sulat-kamay.",
    content: [
      "Ipinatupad ng Kagawaran ng Edukasyon at Merit ng Italya (Ministero dell'Istruzione e del Merito) ang mahigpit na mga limitasyon sa paggamit ng mobile phone sa mga paaralan upang protektahan ang cognitive development, konsentrasyon, at personal na pakikipagkapwa ng mga mag-aaral. Sa pamamagitan ng opisyal na kautusan mula kay Education Minister Giuseppe Valditara, ang pagbabawal sa mga smartphone, smartwatch, at wireless earphone tuwing oras ng klase ay sumasaklaw na ngayon sa elementarya, junior high, at senior high school sa buong bansa.",
      "Ang pinakatampok na bahagi ng patakaran ay ang pagtatanggal sa mga dating pedagogical exemption. Ayon sa direktiba, hindi na maaaring gamitin ang personal na cellphone sa silid-aralan kahit pa para sa layuning pang-edukasyon o didaktiko sa pahintulot ng guro. Nilinaw ng kagawaran na kung kailangan ng mga digital na kagamitan sa pag-aaral, dapat gumamit ng mga nakalaang tablet o computer ng paaralan sa ilalim ng direktang gabay ng guro. Ang tanging pinapayagan ay ang mga mag-aaral na may kapansanan o specific learning disabilities na nangangailangan ng assistive technology.",
      "Nakabatay ang desisyon sa mga pananaliksik mula sa OECD, World Health Organization, at National Institute of Health ng Italya (Istituto Superiore di Sanità) na nagpapatunay na ang presensya pa lamang ng smartphone sa klase ay nagpapahina sa working memory, sumisira sa focus, at nagdudulot ng pagkabalisa sa kabataan. Binigyang-diin ni Minister Valditara ang kahalagahan ng tradisyonal na pamamaraan ng pag-aaral at inirekomenda ang pagbabalik ng paper diary (diario cartaceo) upang mapanatili ang kasanayan sa pagsusulat gamit ang kamay.",
      "Ang hakbang ng Italya ay bahagi ng lumalaking pandaigdigang kilusan na binigyang-diin sa Global Education Monitoring report ng UNESCO, kung saan 114 na bansa na ang nagpapatupad ng pambansang regulasyon laban sa cellphone sa mga paaralan. Naglalagay ngayon ang mga paaralan sa Italya ng mga locker at lalagyan sa silid-aralan upang manatiling nakatago ang mga aparato, na nagbabalik sa masiglang kwentuhan at laro sa oras ng recess.",
      "Para sa mga nais maglagay ng malinaw na hangganan laban sa mga nakakadistrang abiso sa oras ng klase o pag-aaral, nagbibigay ang Limitra App Block ng pagharang ayon sa takdang oras sa mga napiling application upang mapanatili ang matalas na pokus."
    ],
    source: "Kagawaran ng Edukasyon at Merit ng Italya & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "Mga Paaralan at Kabataan",
    date: "2026-10-09",
    readTime: "5 min",
    featured: false,
    tags: [
      "Italya",
      "Kagawaran ng Edukasyon",
      "Giuseppe Valditara",
      "Bawal ang Cellphone sa Paaralan",
      "Konsentrasyon sa Klase",
      "Digital Discipline",
      "Limitra App Block"
    ]
  },
  th: {
    id: "101",
    slug: "italy-bans-smartphones-in-schools-including-educational-use-th",
    title: "อิตาลีสั่งแบนสมาร์ทโฟนในโรงเรียนอย่างเด็ดขาด: ห้ามใช้ในห้องเรียนแม้เพื่อการศึกษาก็ตาม",
    summary: "กระทรวงศึกษาธิการอิตาลีขยายคำสั่งห้ามใช้สมาร์ทโฟนครอบคลุมถึงระดับมัธยมปลายตลอดชั่วโมงเรียน โดยยกเลิกข้อยกเว้นเพื่อการสอน และสนับสนุนให้นักเรียนกลับมาใช้สมุดบันทึกกระดาษและเขียนด้วยลายมือ",
    content: [
      "กระทรวงศึกษาธิการและคุณธรรมของอิตาลี (Ministero dell'Istruzione e del Merito) ได้บังคับใช้มาตรการควบคุมการใช้โทรศัพท์มือถือในสถานศึกษาอย่างครอบคลุม เพื่อปกป้องพัฒนาการทางสมอง สมาธิในการเรียนรู้ และปฏิสัมพันธ์ทางสังคมของนักเรียน โดยคำสั่งอย่างเป็นทางการจากรัฐมนตรีจูเซปเป วัลดิตารา (Giuseppe Valditara) กำหนดให้การห้ามใช้สมาร์ทโฟน สมาร์ทวอทช์ และหูฟังไร้สายในระหว่างเวลาเรียน ครอบคลุมตั้งแต่ระดับประถมศึกษา มัธยมศึกษาตอนต้น จนถึงมัธยมศึกษาตอนปลายทั่วประเทศ",
      "จุดสำคัญที่สุดของนโยบายใหม่นี้คือการยกเลิกข้อยกเว้นเพื่อวัตถุประสงค์ทางการสอนที่เคยมีมาก่อนหน้านี้ ตามแนวปฏิบัติระบุว่าไม่อนุญาตให้นักเรียนใช้โทรศัพท์มือถือส่วนตัวในห้องเรียน แม้จะได้รับอนุญาตจากครูเพื่อใช้ทำงานวิชาการก็ตาม กระทรวงฯ ระบุว่าหากจำเป็นต้องใช้เครื่องมือดิจิทัลในการเรียนการสอน โรงเรียนจะต้องจัดหาแท็บเล็ตหรือคอมพิวเตอร์ที่อยู่ภายใต้การดูแลของครูโดยตรงเท่านั้น โดยมีข้อยกเว้นเพียงกรณีเดียวสำหรับนักเรียนที่มีความพิการหรือมีความบกพร่องทางการเรียนรู้เฉพาะด้านที่ต้องใช้อุปกรณ์ช่วยเหลือ",
      "มาตรการนี้อ้างอิงจากงานวิจัยของ OECD องค์การอนามัยโลก (WHO) และสถาบันสุขภาพแห่งชาติของอิตาลี (Istituto Superiore di Sanità) ซึ่งพบว่าการมีสมาร์ทโฟนอยู่ใกล้ตัวส่งผลให้ความจำในการทำงานลดลง สมาธิสั้นลง และเพิ่มความเครียดในหมู่วัยรุ่น รัฐมนตรีวัลดิตาราเน้นย้ำถึงคุณค่าของการเรียนรู้แบบดั้งเดิม พร้อมทั้งแนะนำให้โรงเรียนนำสมุดบันทึกการบ้านแบบกระดาษ (diario cartaceo) กลับมาใช้ เพื่อส่งเสริมทักษะการเขียนด้วยลายมือและการจดจำอย่างเป็นระบบ",
      "การตัดสินใจของอิตาลีสอดคล้องกับแนวโน้มทั่วโลกที่รายงานของยูเนสโก (UNESCO GEM Report) ระบุว่า มีถึง 114 ประเทศที่ประกาศใช้นโยบายระดับชาติในการจำกัดการใช้สมาร์ทโฟนในโรงเรียน โดยโรงเรียนต่างๆ ในอิตาลีได้เริ่มจัดทำล็อกเกอร์และกล่องเก็บอุปกรณ์หน้าชั้นเรียน เพื่อให้อุปกรณ์ถูกเก็บไว้อย่างปลอดภัย ส่งเสริมให้นักเรียนหันมาพูดคุยและทำกิจกรรมร่วมกันในช่วงพักกลางวัน",
      "สำหรับผู้ที่ต้องการกำหนดขอบเขตเพื่อป้องกันการแจ้งเตือนรบกวนสมาธิในระหว่างเวลาเรียนหรือช่วงอ่านหนังสือ Limitra App Block มีฟังก์ชันจำกัดการเข้าถึงแอปพลิเคชันตามช่วงเวลาที่กำหนด เพื่อช่วยรักษาโฟกัสและความต่อเนื่องในการทำงาน"
    ],
    source: "กระทรวงศึกษาธิการและคุณธรรมของอิตาลี & ANSA",
    sourceUrl: "https://www.miur.gov.it",
    category: "โรงเรียนและเยาวชน",
    date: "2026-10-09",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "อิตาลี",
      "กระทรวงศึกษาธิการ",
      "Giuseppe Valditara",
      "ห้ามใช้มือถือในโรงเรียน",
      "สมาธิในห้องเรียน",
      "สุขภาวะดิจิทัล",
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
  
  if (list.some(item => item.id === "101")) {
    console.log(`[${lang}] ID 101 already exists, skipping.`);
    continue;
  }

  list.unshift(articles[lang]);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] ID 101 prepended successfully to ${path.basename(filePath)}`);
}
