import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "103",
    slug: "fransada-okullarda-dijital-mola-telefonlar-fiziksel-olarak-kilitleniyor",
    title: "Fransa'da Okullarda 'Dijital Mola': Telefonlar Sınıfa Girmeden Fiziksel Olarak Kilitleniyor",
    summary: "Fransa Milli Eğitim Bakanlığı, okullarda telefonların çantada kapalı tutulması kuralının yetersiz kalması üzerine 'Pause Numérique' uygulamasını başlattı. Öğrenciler sabah okula girdiklerinde telefonlarını kilitli dolaplara teslim ediyor ve tüm gün ekrandan tamamen izole ediliyor.",
    content: [
      "Fransa Milli Eğitim Bakanlığı (Ministère de l'Éducation nationale), çocukların ve gençlerin dikkat kapasitesini artırmak, sınıf içi huzuru sağlamak ve akran zorbalığını azaltmak amacıyla 'Pause Numérique' (Dijital Mola) uygulamasını ülke çapında genişletti. 2018 yılında yürürlüğe giren ve cihazların okul bahçesinde dahi çantada kapalı tutulmasını öngören yasal çerçevenin sahadaki denetim zorlukları nedeniyle yetersiz kalması üzerine, yeni sistemle birlikte cihazların fiziksel olarak okul kapısında izole edilmesi ilkesi benimsendi.",
      "Yeni düzenlemeye göre ortaokul ve liselerde öğrenciler okula girdikleri andan itibaren akıllı telefonlarını, akıllı saatlerini ve internet bağlantılı cihazlarını güvenli dolaplara, kilitli manyetik kılıflara veya özel sınıf kutularına teslim ediyor. Gün boyunca, teneffüsler ve öğle yemekleri de dahil olmak üzere öğrencilerin telefonlarına erişimi tamamen engelleniyor. Cihazlar yalnızca okul çıkışında öğrencilere iade ediliyor. Yalnızca sağlık takip cihazı (örneğin diyabet monitörü) kullanan veya özel eğitime ihtiyaç duyan öğrenciler için istisna uygulanıyor.",
      "Fransa Eğitim Bakanlığı'nın yayımladığı değerlendirme raporlarında, öğrencilerin telefonları çantalarında bulundurmasının dahi sürekli bir bildirim beklentisi ve zihinsel meşguliyet yarattığı vurgulandı. Tuvaletlerde gizlice sosyal medyaya bakma, teneffüslerde video çekip akranlarıyla alay etme ve ders esnasında gizli mesajlaşma gibi problemlerin fiziksel kilit sistemiyle ortadan kalktığı belirtildi. Pilot okullarda yapılan incelemeler, uygulamanın hayata geçirilmesiyle birlikte siber zorbalık olaylarında belirgin bir düşüş ve teneffüslerde yüz yüze sohbet ve fiziksel aktivitede artış sağlandığını gösterdi.",
      "Fransız okul yöneticileri ve psikologlar, akıllı telefonların sadece sınıftaki akademik başarıyı değil, okulun sosyal dokusunu da aşındırdığına dikkat çekiyor. Telefonların fiziksel olarak toplanması, gençlerin ders aralarında ekranlara dalmak yerine birbiriyle konuşmasını, kütüphaneleri kullanmasını ve spor yapmasını teşvik ediyor. Düzenleme, okul kurallarını ihlal ederek telefonunu teslim etmeyen öğrencilerin cihazlarına gün sonuna veya veli görüşmesine kadar el konulmasına da yasal dayanak sağlıyor.",
      "Okul saatlerinde veya yoğun çalışma aralıklarında bildirimlerin dikkat dağıtmasını engellemek isteyenler için Limitra App Block, seçilen uygulamalara belirli saat aralıklarında erişim kısıtlaması getirerek odaklanmayı korumaya yardımcı oluyor."
    ],
    source: "Fransa Milli Eğitim Bakanlığı (Ministère de l'Éducation nationale) & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Okullar & Gençlik",
    date: "2026-10-10",
    readTime: "5 dk",
    featured: false,
    tags: [
      "Fransa",
      "Milli Eğitim Bakanlığı",
      "Pause Numérique",
      "Okulda Telefon Yasağı",
      "Dijital Mola",
      "Siber Zorbalık",
      "Limitra App Block"
    ]
  },
  en: {
    id: "103",
    slug: "france-schools-digital-pause-phones-physically-locked-away",
    title: "France Implements 'Digital Pause' in Schools: Smartphones Physically Locked Away During the Day",
    summary: "The French Ministry of National Education has expanded the 'Pause Numérique' policy, requiring students to store smartphones in secure lockers upon arrival. Moving beyond the 2018 backpack rule, the measure eliminates screen distraction throughout the entire school day.",
    content: [
      "The French Ministry of National Education (Ministère de l'Éducation nationale) has expanded its nationwide 'Pause Numérique' (Digital Pause) program, aimed at reclaiming student attention, improving classroom dynamics, and curbing cyberbullying. The initiative addresses the limitations of France's 2018 legislation—which required devices to remain turned off inside schoolbags—by establishing a strict standard of physical separation from smartphones and connected wearables throughout the school day.",
      "Under the policy across middle and high schools, students must surrender their smartphones, smartwatches, and wireless gadgets into dedicated lockers, lockable pouches, or secure homeroom storage boxes upon entering the premises. Access to personal devices remains prohibited across instructional periods, passing intervals, and lunch breaks. Devices are returned only when students leave school at the end of the day. Strict exceptions are preserved solely for students with medical monitoring requirements or specific educational accommodations.",
      "Evaluation findings published by educational authorities emphasize that simply carrying a silent phone in a backpack maintains continuous cognitive load and anticipatory distraction. Field data from pilot institutions showed that physical storage effectively stopped clandestine hallway browsing, unauthorized bathroom recording, and peer harassment. Schools reported measurable improvements in student attentiveness and a noticeable decline in online bullying incidents during campus hours.",
      "School administrators and educational psychologists noted that eliminating personal screens restored social vitality to school grounds. Without the default reflex of staring into screens during breaks, students re-engaged in spontaneous face-to-face conversations, board games, library reading, and outdoor recreation. The regulatory framework also grants faculty clear legal authority to confiscate unauthorized devices until parent collection if rules are breached.",
      "For individuals seeking to eliminate distracting notifications during school hours or focused study blocks, Limitra App Block provides scheduled time-window restrictions on selected applications to help preserve mental clarity."
    ],
    source: "French Ministry of National Education & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Schools & Youth",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "France",
      "Ministry of Education",
      "Digital Pause",
      "Pause Numérique",
      "School Phone Ban",
      "Classroom Focus",
      "Limitra App Block"
    ]
  },
  es: {
    id: "103",
    slug: "francia-pausa-digital-escuelas-telefonos-bloqueados-fisicamente",
    title: "Francia implementa la 'Pausa Digital' en las escuelas: Móviles bloqueados físicamente durante toda la jornada",
    summary: "El Ministerio de Educación de Francia refuerza la prohibición de pantallas con el programa 'Pause Numérique'. Los alumnos deben depositar sus teléfonos en taquillas o estuches bloqueados al entrar al centro educativo, eliminando el uso de pantallas incluso en los recreos.",
    content: [
      "El Ministerio de Educación Nacional de Francia (Ministère de l'Éducation nationale) ha extendido el dispositivo de 'Pausa Digital' (Pause Numérique) con el objetivo de proteger la concentración de los alumnos, mejorar la convivencia escolar y frenar el ciberacoso. Esta medida supera las deficiencias de la ley aprobada en 2018 —que permitía a los estudiantes conservar los teléfonos apagados en sus mochilas— al exigir una separación física obligatoria de los terminales durante toda la jornada lectiva.",
      "De acuerdo con las directrices ministeriales en colegios e institutos, los estudiantes deben depositar sus teléfonos móviles, relojes inteligentes y auriculares en casilleros seguros, fundas con cierre magnético o cajas colectivas nada más ingresar al recinto. El acceso a los dispositivos queda totalmente vetado durante las horas de clase, los cambios de aula y los períodos de recreo y almuerzo, devolviéndose únicamente a la salida. Se contemplan excepciones estrictas para alumnos con dispositivos médicos de monitorización o necesidades educativas especiales.",
      "Los informes del ministerio destacan que la presencia pasiva del teléfono en la mochila perpetúa una alerta mental constante y la tentación permanente de comprobar notificaciones. Las experiencias piloto demostraron que la custodia física impidió grabaciones no autorizadas en baños y pasillos, atenuó las disputas nacidas en redes sociales y restableció el foco durante las clases magistrales, registrándose un descenso significativo de los incidentes de acoso digital.",
      "Directores y pedagogos franceses subrayan que retirar físicamente los teléfonos ha reactivado la vida social en los patios. Al desaparecer el reflejo automático de mirar una pantalla, los estudiantes han retomado las charlas cara a cara, la lectura en bibliotecas y las actividades deportivas en los descansos. La normativa otorga además amparo formal a los docentes para retener los dispositivos que incumplan la norma hasta la intervención familiar.",
      "Para quienes desean evitar que las notificaciones interrumpan las horas lectivas o las sesiones de trabajo intenso, Limitra App Block permite configurar bloqueos por franja horaria en aplicaciones seleccionadas, ayudando a proteger la concentración."
    ],
    source: "Ministerio de Educación Nacional de Francia & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Escuelas y juventud",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "Francia",
      "Ministerio de Educación",
      "Pausa Digital",
      "Prohibición de móviles",
      "Atención escolar",
      "Acoso escolar",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "103",
    slug: "france-pause-numerique-etablissements-scolaires-smartphones-verrouilles-physiquement",
    title: "France : La « Pause numérique » généralisée, les smartphones mis à l'écart physiquement à l'école",
    summary: "Le ministère de l'Éducation nationale déploie le dispositif « Portable en pause ». Dépassant la loi de 2018, les élèves doivent déposer leurs téléphones dans des casiers ou pochettes sécurisées dès leur arrivée, bannissant les écrans tout au long de la journée scolaire.",
    content: [
      "Le ministère de l'Éducation nationale et de la Jeunesse a généralisé le déploiement du dispositif « Pause numérique » (ou « Portable en pause »), conçu pour restaurer l'attention des élèves, pacifier le climat scolaire et prévenir le cyberharcèlement. Cette initiative vient parfaire la législation de 2018 — qui imposait l'extinction des téléphones dans les cartables — en instaurant une véritable mise à l'écart physique des appareils dès le franchissement des grilles de l'établissement.",
      "Selon le cadre réglementaire applicable dans les collèges et lycées, les élèves sont tenus de déposer smartphones, montres connectées et écouteurs dans des casiers individuels, des pochettes magnétiques verrouillées ou des boîtes dédiées dès leur arrivée. L'accès aux équipements reste strictement interdit durant les cours, les interclasses, les récréations et la pause méridienne, la restitution n'intervenant qu'à la sortie des cours. Seuls les élèves bénéficiant d'aménagements médicaux ou porteurs de handicap conservent leurs outils d'assistance.",
      "Les bilans établis par les autorités académiques soulignent que le simple fait de conserver un appareil éteint dans son sac entretient une charge mentale et une attente permanente de notifications. L'expérimentation a prouvé que la consigne physique met fin aux consultations furtives dans les couloirs ou sanitaires, apaise les tensions nées sur les réseaux sociaux et favorise une écoute active en classe, avec un recul sensible des faits de harcèlement en ligne au sein des établissements.",
      "Chefs d'établissement et psychologues scolaires observent que l'éloignement matériel des écrans a réanimé la convivialité dans les cours de récréation. Privés du réflexe d'isolement numérique, les adolescents renouent avec la discussion directe, la lecture au CDI et les activités sportives partagées. Le règlement intérieur confère en outre au personnel éducatif l'autorité nécessaire pour confisquer tout appareil non déposé jusqu'à la rencontre avec les représentants légaux.",
      "Pour instaurer une coupure numérique ciblée pendant les heures de cours ou les temps d'étude personnelle, Limitra App Block permet de planifier des plages horaires de blocage sur les applications choisies afin de préserver la concentration."
    ],
    source: "Ministère de l'Éducation nationale et de la Jeunesse & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Écoles et jeunesse",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "France",
      "Éducation nationale",
      "Pause numérique",
      "Portable en pause",
      "Interdiction smartphone",
      "Climat scolaire",
      "Limitra App Block"
    ]
  },
  de: {
    id: "103",
    slug: "frankreich-digitale-pause-schulen-smartphones-physisch-eingeschlossen",
    title: "Frankreich führt 'Digitale Pause' an Schulen ein: Smartphones werden tagsüber physisch weggesperrt",
    summary: "Das französische Bildungsministerium weitet das Programm 'Pause Numérique' aus. Schüler müssen ihre Mobiltelefone beim Betreten der Schule in Schließfächern oder sicheren Taschen hinterlegen, sodass Bildschirme während des gesamten Schultags tabu bleiben.",
    content: [
      "Das französische Bildungsministerium (Ministère de l'Éducation nationale) hat das Programm 'Pause Numérique' (Digitale Pause) landesweit ausgebaut, um die Konzentrationsfähigkeit der Schüler zu stärken, das Schulklima zu verbessern und Cybermobbing einzudämmen. Die Maßnahme schließt die Lücken des Gesetzes von 2018 — das lediglich vorschrieb, Handys ausgeschaltet in der Schultasche zu lassen —, indem sie eine strikte physische Trennung von Smartphones und vernetzten Geräten während des gesamten Schultags festlegt.",
      "Gemäß den ministeriellen Richtlinien an Mittel- und Oberstufenschulen müssen Schüler ihre Mobiltelefone, Smartwatches und kabellosen Kopfhörer beim Betreten des Schulgeländes in Schließfächern, magnetisch verschließbaren Taschen oder Sammelboxen abgeben. Der Zugriff auf persönliche Geräte ist während des Unterrichts, in den Pausen und während der Mittagszeit vollständig untersagt; die Rückgabe erfolgt erst bei Verlassen der Schule. Strenge Ausnahmen gelten ausschließlich für Schüler mit medizinischen Überwachungsgeräten oder besonderem Förderbedarf.",
      "Evaluierungsberichte der Schulbehörden heben hervor, dass selbst ein stummgeschaltetes Telefon in der Tasche eine dauerhafte kognitive Belastung und Erwartungshaltung erzeugt. Die Testergebnisse aus Modellschulen belegten, dass die physische Aufbewahrung heimliche Handynutzung auf Toiletten, unerlaubte Videoaufnahmen und Konflikte aus sozialen Medien wirksam verhindert hat. Lehrkräfte meldeten eine deutlich höhere Aufmerksamkeit im Unterricht und einen spürbaren Rückgang digitaler Schikanen.",
      "Schulleiter und Pädagogen betonen, dass der Verzicht auf Bildschirme das soziale Miteinander auf den Schulhöfen wiederbelebt hat. Ohne den automatischen Griff zum Display finden Schüler wieder zu persönlichen Gesprächen, gemeinsamen Spielen und Bewegung in den Pausen zurück. Die Schulordnung gibt den Lehrkräften zudem die rechtliche Befugnis, nicht abgegebene Geräte bis zu einem Elterngespräch einzubehalten.",
      "Wer störende Mitteilungen während der Schul- oder Arbeitszeit zuverlässig ausschließen möchte, kann mit Limitra App Block feste Zeitfenster für ausgewählte Anwendungen definieren und so die eigene Konzentration schützen."
    ],
    source: "Französisches Bildungsministerium (Ministère de l'Éducation nationale) & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Schulen & Jugend",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "Frankreich",
      "Bildungsministerium",
      "Digitale Pause",
      "Pause Numérique",
      "Handyverbot Schule",
      "Konzentration",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "103",
    slug: "franca-pausa-digital-escolas-telemoveis-bloqueados-fisicamente",
    title: "França implementa 'Pausa Digital' nas escolas: Telemóveis guardados e bloqueados durante todo o dia",
    summary: "O Ministério da Educação de França reforça a proibição de ecrãs através do programa 'Pause Numérique'. Os alunos devem depositar os aparelhos em cacifos ou bolsas de segurança à entrada da escola, impedindo o uso de telemóveis mesmo nos intervalos.",
    content: [
      "O Ministério da Educação Nacional de França (Ministère de l'Éducation nationale) expandiu o programa 'Pausa Digital' (Pause Numérique) a nível nacional para fortalecer o foco dos estudantes, pacificar o ambiente escolar e combater o ciberbullying. A diretriz supera as fragilidades da legislação de 2018 — que apenas exigia manter os telemóveis desligados nas mochilas — ao instaurar a separação física obrigatória de dispositivos eletrónicos durante todo o horário letivo.",
      "De acordo com os regulamentos em vigor nas escolas básicas e secundárias, os alunos devem entregar smartphones, relógios inteligentes e auriculares em cacifos seguros, bolsas com fecho magnético ou caixas coletivas logo à chegada ao estabelecimento. O acesso aos equipamentos permanece proibido nas salas de aula, nos intervalos e durante o almoço, sendo devolvidos apenas no final do dia. Mantêm-se exceções restritas para estudantes que necessitam de dispositivos para monitorização de saúde ou apoio educativo especial.",
      "Os relatórios de avaliação do ministério sublinham que manter o telemóvel na mochila, ainda que silencioso, gera uma carga cognitiva contínua e expectativa permanente de notificações. As escolas-piloto demonstraram que o depósito físico erradicou o uso clandestino nos corredores e casas de banho, mitigou tensões originadas em redes sociais e devolveu a atenção às aulas, resultando numa redução expressiva dos incidentes de intimidação virtual.",
      "Diretores escolares e psicólogos destacam que a retirada física dos ecrãs resgatou a convivência presencial nos recreios. Sem a tentação imediata dos dispositivos, os jovens voltaram a dialogar frente a frente, frequentar bibliotecas e praticar atividades físicas nos intervalos. O regulamento interno faculta ainda aos docentes a prerrogativa legal de reter qualquer equipamento não declarado até comparência dos encarregados de educação.",
      "Para quem pretende criar um intervalo digital bem definido durante as aulas ou períodos de estudo intenso, o Limitra App Block permite configurar bloqueios por intervalo de horário em aplicações selecionadas, ajudando a manter o foco."
    ],
    source: "Ministério da Educação Nacional de França & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Escolas e juventude",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "França",
      "Ministério da Educação",
      "Pausa Digital",
      "Proibição de telemóveis",
      "Foco escolar",
      "Ciberbullying",
      "Limitra App Block"
    ]
  },
  it: {
    id: "103",
    slug: "francia-pausa-digitale-scuole-smartphone-custoditi-fisicamente",
    title: "Francia, 'Pausa Digitale' nelle scuole: Smartphone chiusi fisicamente all'ingresso per tutto il giorno",
    summary: "Il Ministero dell'Educazione francese estende il dispositivo 'Pause Numérique'. Gli studenti devono depositare i telefoni in appositi armadietti o custodie sigillate all'arrivo a scuola, azzerando le distrazioni da schermo anche durante la ricreazione.",
    content: [
      "Il Ministero dell'Educazione Nazionale francese (Ministère de l'Éducation nationale) ha esteso su scala nazionale il dispositivo della 'Pausa Digitale' (Pause Numérique), concepito per proteggere la capacità di attenzione degli studenti, migliorare il clima scolastico e contrastare il cyberbullismo. Il provvedimento supera i limiti della legge del 2018 — che si limitava a imporre telefoni spenti negli zaini — introducendo il principio della custodia fisica obbligatoria dei dispositivi all'ingresso dell'istituto.",
      "In base alle direttive applicate nelle scuole secondarie di primo e secondo grado, gli alunni devono riporre smartphone, smartwatch e auricolari in armadietti sicuri, custodie magnetiche o appositi contenitori di classe non appena varcata la soglia scolastica. L'accesso agli schermi personali resta precluso durante le lezioni, i cambi d'ora, la ricreazione e la mensa, con restituzione prevista solo all'uscita pomeridiana. Sono garantite eccezioni rigorose solo per studenti con disabilità o necessità terapeutiche comprovate.",
      "I documenti di valutazione diffusi dalle autorità scolastiche evidenziano come la semplice vicinanza di un telefono nello zaino mantenga un carico cognitivo latente e una costante aspettativa di messaggi. I dati raccolti negli istituti pilota hanno confermato che la custodia materiale azzera le consultazioni furtive nei corridoi, disinnesca i contrasti nati sui social network e favorisce la partecipazione in aula, registrando una netta flessione degli episodi di molestia digitale.",
      "Dirigenti scolastici e pedagogisti sottolineano come l'allontanamento fisico dei dispositivi abbia rianimato la socialità nei cortili. Senza il rifugio automatico dello schermo nei momenti di pausa, i ragazzi riscoprono la conversazione diretta, lo sport all'aperto e la lettura. Il regolamento conferisce inoltre al personale docente la piena autorità di sequestrare i dispositivi non consegnati fino all'intervento dei genitori.",
      "Per chi desidera proteggere la propria concentrazione durante le ore di scuola o nei momenti dedicati allo studio, Limitra App Block consente di impostare finestre orarie di blocco sulle applicazioni selezionate, aiutando a ridurre le distrazioni digitali."
    ],
    source: "Ministero dell'Educazione Nazionale francese & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Scuole e gioventù",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "Francia",
      "Ministero dell'Educazione",
      "Pausa Digitale",
      "Pause Numérique",
      "Smartphone a scuola",
      "Bullismo online",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "103",
    slug: "faransa-al-istirahah-al-raqmiyyah-al-madaris-hathr-al-hawatil-filiyan",
    title: "فرنسا تطبق 'الاستراحة الرقمية' في المدارس: حجز الهواتف الذكية في خزائن مقفلة طوال اليوم الدراسي",
    summary: "وسعت وزارة التربية الوطنية الفرنسية برنامج 'Pause Numérique' لإلزام الطلاب بإيداع هواتفهم في خزائن آمنة فور وصولهم للمدرسة، متجاوزة قيود قانون 2018 لعزل الشاشات تماماً حتى أثناء فترات الاستراحة.",
    content: [
      "وسعت وزارة التربية الوطنية والشباب الفرنسية (Ministère de l'Éducation nationale) نطاق تطبيق برنامج 'الاستراحة الرقمية' (Pause Numérique) على المستوى الوطني، وذلك بهدف استعادة تركيز الطلاب وتحسين البيئة المدرسية والحد من التنمر الإلكتروني. وتأتي هذه الخطوة لمعالجة ثغرات قانون عام 2018 — الذي كان يكتفي بطلب إغلاق الهواتف داخل الحقائب — من خلال فرض عزل مادي وإيداع فعلي للأجهزة الذكية طوال ساعات اليوم المدرسي.",
      "ووفقاً للتعليمات المعمول بها في المدارس الإعدادية والثانوية، يتعين على الطلاب تسليم هواتفهم الذكية وساعاتهم الذكية وسماعاتهم اللاسلكية في خزائن آمنة أو حافظات مغناطيسية مخصصة فور دخولهم حرم المؤسسة التعليمية. ويُحظر استخدام الأجهزة الشخصية أثناء الحصص الدراسية وفترات الاستراحة وأوقات الغداء، ولا تُعاد إلا عند مغادرة المدرسة في نهاية الدوام. وتقتصر الاستثناءات الصارمة على الحالات الطبية التي تتطلب مراقبة صحية مستمرة أو الطلاب من ذوي الاحتياجات التعليمية الخاصة.",
      "وأكدت تقارير التقييم الصادرة عن الوزارة أن مجرد وجود الهاتف داخل الحقيبة يُبقي العقل في حالة تأهب وترقب مستمر للإشعارات. وأثبتت المدارس النموذجية أن الاحتجاز الفعلي للأجهزة أنهى ظاهرة الاستخدام السري في الممرات ودورات المياه، وخفف من حدة النزاعات الناشئة عن شبكات التواصل الاجتماعي، وأسهم في رفع مستوى الانتباه داخل الفصول، مع انخفاض ملموس في حوادث المضايقات الرقمية بين الزملاء.",
      "وأشار مديرو المدارس والأخصائيون التربويون إلى أن إبعاد الشاشات أعاد إحياء التفاعل الإنساني المباشر في الساحات المدرسية؛ حيث أقبل الطلاب على الحديث المباشر وممارسة الرياضة وزيارة المكتبات بدلاً من الانعزال خلف الشاشات. كما تمنح اللوائح المدرسية الكادر التعليمي صلاحية قانونية صريحة لمصادرة أي جهاز يخالف التعليمات حتى حضور أولياء الأمور.",
      "ولمن يرغب في وضع حدود واضحة تمنع الإشعارات المشتتة أثناء الدوام الدراسي أو ساعات المذاكرة، يوفر تطبيق Limitra App Block ميزة حظر التطبيقات وفق فترات زمنية محددة للمساعدة في الحفاظ على التركيز الذهني."
    ],
    source: "وزارة التربية الوطنية الفرنسية & صحيفة لوموند (Le Monde)",
    sourceUrl: "https://www.education.gouv.fr",
    category: "المدارس والشباب",
    date: "2026-10-10",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "فرنسا",
      "وزارة التربية الوطنية",
      "الاستراحة الرقمية",
      "حظر الهواتف في المدارس",
      "التنمر الإلكتروني",
      "الانضباط الدراسي",
      "Limitra App Block"
    ]
  },
  id: {
    id: "103",
    slug: "prancis-jeda-digital-sekolah-ponsel-dikunci-secara-fisik",
    title: "Prancis Terapkan 'Jeda Digital' di Sekolah: Ponsel Pintar Dikunci Fisik Sepanjang Hari Belajar",
    summary: "Kementerian Pendidikan Nasional Prancis memperluas program 'Pause Numérique'. Para siswa diwajibkan menyimpan ponsel di loker atau kantong khusus saat tiba di sekolah, meniadakan gangguan layar bahkan saat jam istirahat.",
    content: [
      "Kementerian Pendidikan Nasional Prancis (Ministère de l'Éducation nationale) memperluas program 'Jeda Digital' (Pause Numérique) secara nasional guna memulihkan rentang perhatian siswa, meningkatkan iklim belajar, serta menekan perundungan siber. Kebijakan ini mengatasi keterbatasan undang-undang tahun 2018 — yang sekadar mewajibkan ponsel dimatikan di dalam tas — dengan menerapkan pemisahan fisik secara ketat terhadap gawai selama jam sekolah.",
      "Berdasarkan pedoman di sekolah menengah pertama dan atas, siswa wajib mengumpulkan ponsel pintar, jam tangan pintar, dan earphone nirkabel ke dalam loker khusus, kantong magnetis, atau kotak penyimpanan kelas begitu tiba di sekolah. Akses ke perangkat pribadi dilarang total sepanjang jam pelajaran, jeda pergantian kelas, waktu istirahat, hingga makan siang, dan hanya dikembalikan saat siswa pulang. Pengecualian hanya berlaku ketat bagi siswa dengan kebutuhan pemantauan medis atau pendampingan belajar khusus.",
      "Laporan evaluasi kementerian menegaskan bahwa membiarkan ponsel berada di tas tetap memicu beban kognitif dan antisipasi notifikasi yang mengalihkan pikiran. Hasil uji coba di sekolah percontohan membuktikan bahwa penyimpanan fisik berhasil menghentikan akses tersembunyi di toilet, meredakan perselisihan di media sosial, serta memulihkan ketenangan kelas, yang ditandai dengan penurunan signifikan kasus perundungan digital di lingkungan sekolah.",
      "Kepala sekolah dan psikolog pendidikan mencatat bahwa penyingkiran fisik gawai menghidupkan kembali dinamika sosial di lapangan sekolah. Tanpa kebiasaan menatap layar saat istirahat, para siswa kembali terlibat dalam percakapan nyata, membaca di perpustakaan, dan beraktivitas fisik bersama. Aturan ini juga memberikan wewenang hukum bagi guru untuk menyita gawai yang tidak diserahkan hingga ada pertemuan dengan orang tua.",
      "Bagi individu yang ingin membangun batas digital yang jelas dari gangguan notifikasi selama jam sekolah atau sesi belajar mandiri, Limitra App Block menyediakan pengaturan pemblokiran berdasarkan rentang waktu pada aplikasi pilihan guna menjaga konsentrasi."
    ],
    source: "Kementerian Pendidikan Nasional Prancis & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Sekolah & Remaja",
    date: "2026-10-10",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Prancis",
      "Kementerian Pendidikan",
      "Jeda Digital",
      "Pause Numérique",
      "Larangan Ponsel Sekolah",
      "Perundungan Siber",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "103",
    slug: "pransya-digital-pause-paaralan-cellphone-pisikal-na-ikinakandado",
    title: "Ipinatupad ng Pransya ang 'Digital Pause' sa Paaralan: Mga Cellphone Pisikal Nang Ikinakandado Buong Araw",
    summary: "Pinalawak ng Kagawaran ng Edukasyon ng Pransya ang patakarang 'Pause Numérique'. Kinakailangang isuko ng mga mag-aaral ang kanilang mga smartphone sa mga secure locker pagdating sa paaralan, inaalis ang screen time maging sa recess.",
    content: [
      "Pinalawak ng Kagawaran ng Pambansang Edukasyon ng Pransya (Ministère de l'Éducation nationale) ang programang 'Pause Numérique' (Digital Pause) sa buong bansa upang muling palakasin ang konsentrasyon ng mga mag-aaral, pabutihin ang samahan sa silid-aralan, at pigilan ang cyberbullying. Tinutugunan nito ang kakulangan ng batas noong 2018 — kung saan nakatago lang ang mga patay na telepono sa bag — sa pamamagitan ng sapilitang pisikal na pagtatabi ng mga gadget sa buong araw ng klase.",
      "Ayon sa mga patakaran sa junior at senior high school, obligadong ideposito ng mga mag-aaral ang kanilang mga smartphone, smartwatch, at wireless earphone sa mga secure locker, magnetic pouch, o classroom box pagkapasok pa lamang sa paaralan. Mahigpit na ipinagbabawal ang paghawak sa personal na gadyet sa buong oras ng aralin, pagitan ng mga klase, recess, at tanghalian, at ibinabalik lamang ito bago umuwi. Ang tanging exempted ay ang mga mag-aaral na may medikal na pangangailangan o espesyal na gabay sa pag-aaral.",
      "Ipinunto ng mga ulat ng kagawaran na ang presensya pa lamang ng cellphone sa bag ay nagdudulot ng patuloy na pag-aabang sa mga notipikasyon at sumisira sa focus. Napatunayan sa mga pilot school na ang pisikal na pagkakandado ay pumigil sa patagong paggamit sa mga banyo at hallway, nagpatahimik sa mga alitan mula sa social media, at nagpataas sa partisipasyon sa klase, kasabay ng malaking pagbaba sa mga insidente ng pananakot sa internet.",
      "Napansin ng mga punong-guro at psychologist na muling sumigla ang personal na pakikipagkapwa sa mga bakuran ng paaralan. Nang mawala ang pagtitig sa screen tuwing break, nagbalik ang mga kabataan sa aktibong kwentuhan, pagbabasa sa aklatan, at paglalaro. Binibigyan din ng regulasyon ang mga guro ng legal na kapangyarihan na kumpiskahin ang mga hindi isinukong aparato hanggang sa makipag-usap ang magulang.",
      "Para sa mga nais maglagay ng malinaw na hangganan laban sa mga nakakadistrang abiso sa oras ng klase o pag-aaral, nagbibigay ang Limitra App Block ng pagharang ayon sa takdang oras sa mga napiling application upang mapanatili ang matalas na pokus."
    ],
    source: "Kagawaran ng Pambansang Edukasyon ng Pransya & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "Mga Paaralan at Kabataan",
    date: "2026-10-10",
    readTime: "5 min",
    featured: false,
    tags: [
      "Pransya",
      "Kagawaran ng Edukasyon",
      "Digital Pause",
      "Pause Numérique",
      "Bawal ang Cellphone",
      "Cyberbullying",
      "Limitra App Block"
    ]
  },
  th: {
    id: "103",
    slug: "france-digital-pause-schools-smartphones-physically-locked-th",
    title: "ฝรั่งเศสบังคับใช้ 'Digital Pause' ในโรงเรียน: ล็อกสมาร์ทโฟนไว้ในตู้ตลอดทั้งวันตัดขาดหน้าจอ",
    summary: "กระทรวงศึกษาธิการฝรั่งเศสขยายโครงการ 'Pause Numérique' กำหนดให้นักเรียนต้องฝากสมาร์ทโฟนไว้ในล็อกเกอร์ทันทีที่มาถึงโรงเรียน ยกระดับจากกฎปี 2018 เพื่อขจัดสิ่งรบกวนสมาธิจากหน้าจออย่างสิ้นเชิงแม้ในช่วงพักกลางวัน",
    content: [
      "กระทรวงศึกษาธิการแห่งชาติของฝรั่งเศส (Ministère de l'Éducation nationale) ได้ขยายการบังคับใช้โครงการ 'Pause Numérique' (Digital Pause หรือ การพักจากดิจิทัล) ไปทั่วประเทศ เพื่อฟื้นฟูสมาธิในการเรียนรู้ พัฒนาบรรยากาศในโรงเรียน และลดปัญหาการกลั่นแกล้งบนโลกไซเบอร์ มาตรการนี้แก้จุดอ่อนของกฎหมายปี 2018 ซึ่งเดิมอนุญาตให้นักเรียนเก็บโทรศัพท์ที่ปิดเครื่องไว้ในกระเป๋าได้ โดยเปลี่ยนเป็นการบังคับแยกอุปกรณ์เชื่อมต่ออินเทอร์เน็ตออกไปเก็บไว้นอกตัวอย่างเด็ดขาดตลอดทั้งวันเรียน",
      "ตามแนวทางปฏิบัติในโรงเรียนมัธยมต้นและมัธยมปลาย นักเรียนจะต้องนำสมาร์ทโฟน สมาร์ทวอทช์ และหูฟังไร้สายไปเก็บไว้ในล็อกเกอร์นิรภัย ซองแม่เหล็กแบบล็อกได้ หรือกล่องเก็บประจำชั้นเรียนทันทีที่เดินทางมาถึงโรงเรียน โดยจะไม่มีการอนุญาตให้เข้าถึงอุปกรณ์ส่วนตัวตลอดช่วงเวลาเรียน ระหว่างคาบ เวลาพัก และช่วงรับประทานอาหารกลางวัน และจะได้รับคืนเมื่อเลิกเรียนเท่านั้น มีข้อยกเว้นที่เข้มงวดเฉพาะนักเรียนที่มีอุปกรณ์ติดตามสุขภาพทางการแพทย์หรือมีความบกพร่องทางการเรียนรู้ที่จำเป็นต้องใช้เทคโนโลยีช่วยเหลือ",
      "รายงานการประเมินของกระทรวงฯ ชี้ชัดว่า แม้โทรศัพท์จะปิดเสียงอยู่ในกระเป๋า สมองก็ยังคงทำงานหนักจากความคาดหวังและรอคอยการแจ้งเตือนอยู่ตลอดเวลา ข้อมูลจากการทดลองในโรงเรียนนำร่องระบุว่า การล็อกอุปกรณ์ไว้ช่วยหยุดพฤติกรรมแอบใช้มือถือในห้องน้ำ ลดความขัดแย้งที่ลุกลามมาจากโซเชียลมีเดีย และช่วยให้นักเรียนมีสมาธิกับการเรียนในห้องมากขึ้น พร้อมทั้งพบว่ากรณีการระรานทางไซเบอร์ในสถานศึกษาลดลงอย่างมีนัยสำคัญ",
      "ผู้บริหารสถานศึกษาและนักจิตวิทยาชี้ให้เห็นว่า การนำหน้าจอออกไปช่วยฟื้นฟูความสัมพันธ์ระหว่างบุคคลในช่วงพักกลางวัน เมื่อไม่ต้องก้มมองหน้าจอ นักเรียนจึงหันมาพูดคุยกันต่อหน้า เข้าห้องสมุด และเล่นกีฬาหรือทำกิจกรรมร่วมกันมากขึ้น นอกจากนี้ กฎระเบียบยังให้อำนาจตามกฎหมายแก่คณะครูในการยึดอุปกรณ์ที่ละเมิดข้อบังคับไว้จนกว่าผู้ปกครองจะมารับด้วยตนเอง",
      "สำหรับผู้ที่ต้องการกำหนดขอบเขตเพื่อป้องกันการแจ้งเตือนรบกวนสมาธิในระหว่างเวลาเรียนหรือช่วงอ่านหนังสือ Limitra App Block มีฟังก์ชันจำกัดการเข้าถึงแอปพลิเคชันตามช่วงเวลาที่กำหนด เพื่อช่วยรักษาโฟกัสและความต่อเนื่องในการทำงาน"
    ],
    source: "กระทรวงศึกษาธิการแห่งชาติฝรั่งเศส & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    category: "โรงเรียนและเยาวชน",
    date: "2026-10-10",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "ฝรั่งเศส",
      "กระทรวงศึกษาธิการ",
      "Pause Numérique",
      "Digital Pause",
      "ห้ามใช้มือถือในโรงเรียน",
      "การกลั่นแกล้งออนไลน์",
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
  
  if (list.some(item => item.id === "103")) {
    console.log(`[${lang}] ID 103 already exists, skipping.`);
    continue;
  }

  list.unshift(articles[lang]);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] ID 103 prepended successfully to ${path.basename(filePath)}`);
}
