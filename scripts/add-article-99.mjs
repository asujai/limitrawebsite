import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "99",
    slug: "dikkat-kalintisi-attention-residue-cal-newport-ve-sophie-leroy-deneyi",
    title: "Telefona Bir Anlık Bakmanın Gizli Maliyeti: Sophie Leroy'un 'Dikkat Kalıntısı' Deneyi ve Cal Newport",
    summary: "Çalışırken veya ders çalışırken sadece birkaç saniyeliğine telefona bakmak bile dikkatinizi bölmez; beyninizi dakikalarca felç eder. Dr. Sophie Leroy'un kanıtladığı 'Dikkat Kalıntısı' (Attention Residue) ve Cal Newport'un Deep Work analizi.",
    content: [
      "Pek çok insan, zorlu bir görev üzerinde çalışırken telefonuna gelen bir mesaja veya bildirime sadece 3-5 saniyeliğine göz atıp hemen işine geri döndüğünde hiçbir bilişsel kayıp yaşamadığını düşünür. 'Ben hızlıca baktım ve işime devam ettim' hissi, beynin çalışma belleği (working memory) dinamikleriyle taban tabana zıttır. Nörobilim ve örgütsel davranış araştırmaları, beynin odaklanma mekanizmasının anında açılıp kapanabilen bir düğme olmadığını; aksine ağır bir geminin yön değiştirmesi gibi yüksek atalet gerektirdiğini onlarca yıldır kanıtlamaktadır.",
      "Minnesota ve Washington Üniversitelerinde görev yapan örgütsel psikolog Dr. Sophie Leroy tarafından yayımlanan ve örgütsel davranış literatüründe klasikleşen çığır açıcı deneyde, insanların bir görevden diğerine geçerken bilişsel kapasitelerinin nasıl etkilendiği ölçüldü. Leroy, denekleri iki farklı çalışma grubuna ayırdı ve görev geçişleri arasındaki zihinsel performansı kelime tamamlama ve analitik karar verme testleriyle sınadı. Araştırma sonucunda tıp ve yönetim literatürüne geçen temel kavram doğrulandı: 'Dikkat Kalıntısı' (Attention Residue).",
      "Dr. Leroy'un bulgularına göre; bir kişi Görev A'dan (örneğin ders çalışma, rapor hazırlama veya kodlama) henüz tam bitmemiş bir Görev B'ye (gelen bir WhatsApp mesajı, e-posta veya sosyal medya bildirimi) geçtiğinde, zihinsel odağı Görev B'ye tamamen taşınamaz. Daha da kritiği, kişi Görev A'ya geri döndüğünde bile dikkatinin kayda değer bir parçası Görev B'de takılı kalır. Bu bilişsel kalıntı; çalışma belleğinin kapasitesini daraltır, mantıksal çıkarım hızını yavaşlatır ve derin odaklanma gerektiren analitik işlerde hata payını dramatik biçimde artırır.",
      "Yazar ve bilgisayar bilimci Cal Newport, dünyaca ünlü 'Deep Work' (Pürdikkat) kitabında bu deneyi merkeze alarak modern bilgi çalışanlarının en büyük yanılgısını ortaya koyar: Sorun, telefona ayrılan dakikaların toplamı değil; gün boyunca dikkatin sürekli mikro parçalara bölünerek kalıcı bir 'dikkat kalıntısı' sisi içinde yaşanmasıdır. Günde 50 kez 'sadece bir saniye' telefona bakmak, beynin hiçbir zaman tam bilişsel kapasitesine ulaşamamasına ve kronik bir zihinsel yorgunluğa yol açar.",
      "Leroy ve Newport'un bu bilimsel kanıtı, anlık iradeye güvenmenin neden yetersiz olduğunu gösterir. Çözüm; dikkati bölecek uyaranları fiziksel ve mekanik olarak erişilmez kılmaktır. Limitra ekosistemi bu zırhı kurmak için tasarlanmıştır: Limitra App Block ile derin odaklanma saatlerinizde tavizsiz kilitler devreye sokarak 'bir saniyelik' bakış dürtüsünü kaynağında durdurabilir, Limitra Social ile bir çalışma arkadaşınıza hesap verebilirlik taahhüdü vererek dikkatinizin kalıntısız ve berrak kalmasını güvence altına alabilirsiniz."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Bilim & Sağlık",
    date: "2026-10-08",
    readTime: "5 dk",
    featured: false,
    tags: [
      "Dikkat Kalıntısı",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Pürdikkat",
      "Bilişsel Kapasite",
      "Limitra"
    ]
  },
  en: {
    id: "99",
    slug: "attention-residue-cost-of-brief-checks-cal-newport-sophie-leroy",
    title: "The Hidden Cost of a Brief Glance: Sophie Leroy's 'Attention Residue' Experiment and Cal Newport",
    summary: "Checking your phone for just a few seconds while working doesn't simply pause your focus—it impairs cognitive performance for minutes. Dr. Sophie Leroy's groundbreaking research on 'Attention Residue' and Cal Newport's Deep Work analysis.",
    content: [
      "Many people believe that glancing at a phone notification or a quick message for just three to five seconds causes negligible cognitive harm. The subjective sensation of 'I just checked it for a second and immediately resumed my task' directly contradicts the fundamental architecture of human working memory. Decades of neuroscience and cognitive research confirm that human attention does not toggle like an instant light switch; rather, it functions like a heavy vessel that requires immense momentum and time to reorient.",
      "In a landmark study published by organizational psychologist Dr. Sophie Leroy (University of Washington / University of Minnesota), researchers directly quantified the cognitive penalty incurred when switching between tasks. By evaluating participants across word-completion and analytical decision-making paradigms, Leroy scientifically verified the phenomenon known as 'Attention Residue.'",
      "Dr. Leroy demonstrated that when an individual shifts from Task A (such as writing an analytical report or studying) to an unresolved Task B (such as a fleeting email or social alert), their attention does not cleanly transition. More critically, when they return to Task A, a significant portion of their attentional bandwidth remains stuck on Task B. This lingering residue drastically constricts working memory capacity, slows deductive reasoning, and elevates error rates during cognitively demanding endeavors.",
      "In his acclaimed book 'Deep Work', computer scientist Cal Newport highlights Leroy's experiment to diagnose the defining vulnerability of modern knowledge workers: the problem is not solely the total minutes lost to a screen, but the chronic fragmentation of focus. Checking a device fifty times a day for 'just a second' immerses the brain in a perpetual haze of attention residue, preventing it from ever operating at peak analytical depth.",
      "The scientific verdict from Leroy and Newport proves why relying on raw willpower during high-stakes work is a losing proposition. The only reliable countermeasure is introducing systematic structural boundaries that neutralize impulse checks before they occur. Limitra provides this defensive framework: Limitra App Block enforces absolute application lockdowns to eliminate the urge for a momentary peek, while Limitra Social leverages peer accountability to protect cognitive bandwidth and preserve uninterrupted focus."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Science & Health",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Attention Residue",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Cognitive Capacity",
      "Limitra"
    ]
  },
  es: {
    id: "99",
    slug: "residuo-de-atencion-costo-mirar-telefono-cal-newport-sophie-leroy",
    title: "El costo oculto de mirar el teléfono un instante: El experimento de 'Residuo de Atención' de Sophie Leroy y Cal Newport",
    summary: "Mirar el teléfono solo un par de segundos mientras trabajas no es una pausa inocua: paraliza el rendimiento cognitivo durante minutos. El estudio científico sobre el residuo de atención y el análisis de Deep Work.",
    content: [
      "Muchas personas asumen que revisar una notificación o un mensaje rápido en el teléfono durante tres o cuatro segundos no perjudica su concentración. La impresión de 'solo miré un segundo y volví al trabajo' se opone frontalmente al funcionamiento de la memoria de trabajo. La neurociencia y la psicología cognitiva han comprobado que el foco atencional no actúa como un interruptor instantáneo, sino que exige una notable inercia para reorientarse.",
      "En una célebre investigación dirigida por la Dra. Sophie Leroy (Universidad de Washington), se midió con precisión el desgaste mental que se produce al alternar entre distintas tareas. A través de pruebas de decisión analítica y resolución léxica, Leroy demostró experimentalmente la existencia del 'Residuo de Atención' (Attention Residue).",
      "Los resultados revelaron que cuando una persona interrumpe la Tarea A para atender brevemente la Tarea B (un mensaje o alerta), la atención no migra de forma limpia. Al regresar a la Tarea A, una fracción considerable de los recursos cognitivos permanece atrapada en la tarea secundaria. Este residuo satura la memoria operativa y eleva los errores en labores intelectuales complejas.",
      "En su obra 'Deep Work' (Céntrate), el profesor Cal Newport toma como pilar este experimento para explicar el agotamiento mental contemporáneo: el daño no radica únicamente en los minutos totales frente a la pantalla, sino en la fragmentación continua. Mirar el móvil cincuenta veces al día 'un solo segundo' sume al cerebro en una niebla permanente de residuo atencional.",
      "La conclusión de Leroy y Newport demuestra que confiar en la fuerza de voluntad en pleno trabajo es insuficiente. La solución exige barreras estructurales que impidan las microcomprobaciones impulsivas. El ecosistema Limitra responde a este desafío: con Limitra App Block puedes blindar tus periodos de concentración eliminando la tentación de mirar el móvil, y con Limitra Social cuentas con la supervisión mutua de un compañero para salvaguardar tu claridad mental."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Ciencia y salud",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Residuo de Atención",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Capacidad Cognitiva",
      "Limitra"
    ]
  },
  fr: {
    id: "99",
    slug: "residu-attentionnel-cout-coup-doeil-telephone-cal-newport-sophie-leroy",
    title: "Le coût caché d'un coup d'œil furtif au téléphone : L'expérience du « résidu attentionnel » de Sophie Leroy et Cal Newport",
    summary: "Regarder son téléphone quelques secondes pendant une session d'étude ou de travail paralyse les facultés cognitives pendant de longues minutes. L'étude fondatrice sur le résidu attentionnel et l'analyse de Deep Work.",
    content: [
      "Nombreux sont ceux qui s'imaginent que jeter un coup d'œil rapide de trois secondes à une notification ou à un message n'entraîne aucune déperdition cognitive. Ce sentiment de reprise immédiate est une illusion psychologique contredite par l'architecture de la mémoire de travail. Les neurosciences démontrent que l'attention humaine ne bascule pas instantanément, mais requiert une inertie considérable pour se repositionner.",
      "Dans une recherche pionnière menée par la chercheuse en psychologie organisationnelle Dr Sophie Leroy (Université de Washington), la dégradation des performances cognitives lors du passage d'une tâche à une autre a été rigoureusement quantifiée. Ces travaux ont établi un concept fondamental : le « résidu attentionnel » (Attention Residue).",
      "Les conclusions de Leroy établissent que lorsqu'une personne quitte la Tâche A pour consulter la Tâche B (un e-mail non résolu ou une alerte sociale), une part importante de son potentiel cérébral reste ancrée sur la seconde tâche. Même après le retour à la Tâche A, ce résidu encombre la mémoire vive et réduit significativement la vitesse de raisonnement déductif.",
      "Dans son ouvrage de référence 'Deep Work', l'universitaire Cal Newport s'appuie sur ces découvertes pour éclairer la fatigue chronique des travailleurs du savoir : le véritable danger ne réside pas dans les heures cumulées, mais dans le morcellement permanent de la pensée. Vérifier son smartphone cinquante fois par jour pendant « une seconde » condamne l'esprit à flotter dans un brouillard cognitif perpétuel.",
      "Les recherches de Leroy et Newport prouvent qu'une discipline purement interne ne résiste pas aux stimuli numériques. Seule une barrière structurelle et mécanique garantit une concentration préservée. C'est précisément la mission de l'écosystème Limitra : Limitra App Block instaure des verrouillages infranchissables pour neutraliser les réflexes de vérification impulsive, tandis que Limitra Social mobilise le soutien d'un partenaire d'engagement pour protéger votre énergie mentale."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Science et santé",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Résidu Attentionnel",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Performance Cognitive",
      "Limitra"
    ]
  },
  de: {
    id: "99",
    slug: "aufmerksamkeitsrueckstand-smartphone-blick-cal-newport-sophie-leroy",
    title: "Die versteckten Kosten eines kurzen Blicks aufs Handy: Sophie Leroys Experiment zum 'Aufmerksamkeitsrückstand' und Cal Newport",
    summary: "Während der Arbeit nur für wenige Sekunden aufs Smartphone zu schauen, unterbricht nicht nur die Konzentration – es hemmt die kognitive Leistungsfähigkeit für Minuten. Dr. Sophie Leroys Forschung zum Attention Residue und Cal Newports Deep-Work-Analyse.",
    content: [
      "Viele Menschen glauben, dass ein flüchtiger Blick von drei Sekunden auf eine Benachrichtigung oder eine Nachricht keine nennenswerten kognitiven Einbußen nach sich zieht. Das Gefühl, sofort wieder nahtlos an die Arbeit anknüpfen zu können, widerspricht jedoch der Arbeitsweise des menschlichen Arbeitsgedächtnisses. Die Kognitionsforschung belegt seit Jahrzehnten, dass Aufmerksamkeit kein Schalter ist, der beliebig umgelegt werden kann, sondern beträchtliche Trägheit aufweist.",
      "In einer wegweisenden Studie der Organisationspsychologin Dr. Sophie Leroy (University of Washington / University of Minnesota) wurde experimentell gemessen, welche Leistungseinbußen beim Wechsel zwischen Aufgaben entstehen. Durch standardisierte Wort- und Analyseprüfungen wies Leroy das Phänomen des 'Aufmerksamkeitsrückstands' (Attention Residue) wissenschaftlich nach.",
      "Leroys Daten belegen: Wechselt eine Person von Aufgabe A zu einer unvollendeten Aufgabe B (etwa einer Mitteilung auf dem Smartphone), wandert die Aufmerksamkeit nicht vollständig mit. Kehrt man anschließend zu Aufgabe A zurück, bleibt ein relevanter Teil der kognitiven Ressourcen an Aufgabe B gebunden. Dieser Rückstand verengt das Arbeitsgedächtnis und erhöht die Fehleranfälligkeit bei analytischen Aufgaben deutlich.",
      "In seinem Bestseller 'Deep Work' (Konzentriert arbeiten) macht Informatikprofessor Cal Newport dieses Experiment zum Kern seiner Argumentation: Das zentrale Problem moderner Wissensarbeit sind nicht nur die summierten Minuten am Bildschirm, sondern die permanente Fragmentierung des Denkens. Wer fünfzig Mal am Tag 'nur kurz' aufs Telefon schaut, zwingt sein Gehirn in einen dauerhaften kognitiven Nebel.",
      "Die Befunde von Leroy und Newport zeigen, dass Willenskraft allein gegen die Verlockungen digitaler Geräte scheitert. Notwendig sind externe, kompromisslose Mechanismen, die den Griff zum Handy mechanisch unterbinden. Das Limitra-Ökosystem setzt genau hier an: Limitra App Block sperrt ablenkende Apps während intensiver Arbeitsphasen verbindlich ab, während Limitra Social durch verbindliche Partnerschaften für echte Verbindlichkeit und klare geistige Frische sorgt."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Wissenschaft & Gesundheit",
    date: "2026-10-08",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "Aufmerksamkeitsrückstand",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Kognitive Kapazität",
      "Limitra"
    ]
  },
  pt: {
    id: "99",
    slug: "residuo-de-atencao-custo-olhar-celular-cal-newport-sophie-leroy",
    title: "O custo invisível de uma olhada rápida no celular: O experimento de 'Resíduo de Atenção' de Sophie Leroy e Cal Newport",
    summary: "Olhar para o telefone por meros segundos durante o estudo ou trabalho prejudica o foco cognitivo por vários minutos. A pesquisa comprovada sobre o Resíduo de Atenção e a análise de Deep Work.",
    content: [
      "Muitas pessoas acreditam que verificar uma notificação ou responder a uma mensagem rápida de três segundos no celular não afeta sua produtividade. A sensação subjetiva de retorno imediato à tarefa contraria as leis da memória de trabalho. A neurociência evidencia que a atenção humana não funciona como um interruptor liga-desliga, exigindo tempo e energia consideráveis para redirecionar seu foco.",
      "Em um estudo pioneiro liderado pela psicóloga organizacional Dra. Sophie Leroy (Universidade de Washington), mediu-se o impacto cognitivo direto da transição entre diferentes tarefas. Por meio de avaliações de capacidade dedutiva e testes analíticos, Leroy comprovou empiricamente o fenômeno denominado 'Resíduo de Atenção' (Attention Residue).",
      "As descobertas de Leroy revelam que, ao interromper a Tarefa A para checar uma Tarefa B inacabada (uma notificação ou mensagem), a atenção não se desloca de forma estanque. Ao retornar à Tarefa A, parte substancial dos recursos cerebrais permanece retida na tarefa anterior, reduzindo a velocidade de processamento e aumentando erros analíticos.",
      "Em seu livro 'Deep Work' (Foco Profundo), o cientista da computação Cal Newport destaca esse experimento para ilustrar o maior entrave da atualidade: o problema não é apenas o tempo total na tela, mas a fragmentação constante da mente. Conferir o celular dezenas de vezes ao dia por 'um segundo' aprisiona o cérebro em uma névoa contínua de resíduo atencional.",
      "As conclusões de Leroy e Newport comprovam que depender da pura força de vontade é ineficaz diante de algoritmos persuasivos. A única solução viável consiste em erguer barreiras estruturais externas. O ecossistema Limitra foi concebido para essa blindagem: o Limitra App Block bloqueia aplicativos distratores com rigor absoluto, enquanto o Limitra Social utiliza o compromisso compartilhado com um parceiro para proteger sua clareza mental."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Ciência e saúde",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Resíduo de Atenção",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Capacidade Cognitiva",
      "Limitra"
    ]
  },
  it: {
    id: "99",
    slug: "residuo-di-attenzione-costo-occhiata-telefono-cal-newport-sophie-leroy",
    title: "Il costo nascosto di una rapida occhiata allo smartphone: L'esperimento sul 'Residuo di Attenzione' di Sophie Leroy e Cal Newport",
    summary: "Controllare il telefono anche solo per pochi secondi durante il lavoro paralizza l'efficienza cognitiva per minuti. La ricerca scientifica sull'Attention Residue e l'analisi di Cal Newport in Deep Work.",
    content: [
      "Molte persone ritengono che lanciare un'occhiata fugace di tre secondi a una notifica o a un messaggio non comprometta la concentrazione. L'impressione soggettiva di riprendere subito il lavoro è un inganno psicologico smentito dai meccanismi della memoria di lavoro. Le neuroscienze dimostrano che l'attenzione non si attiva a comando immediato, ma necessita di una forte inerzia per cambiare direzione.",
      "In una ricerca fondamentale condotta dalla psicologa delle organizzazioni Dr. Sophie Leroy (Università di Washington), è stata misurata con rigore la penalizzazione cognitiva derivante dal passaggio da un'attività all'altra. Attraverso test lessicali e decisionali, Leroy ha documentato il fenomeno scientifico del 'Residuo di Attenzione' (Attention Residue).",
      "I dati dimostrano che quando una persona passa dall'Attività A a un'Attività B irrisolta (un messaggio o un avviso social), l'attenzione non si trasferisce in modo pulito. Anche tornando all'Attività A, una frazione considerevole di banda cognitiva rimane intrappolata sulla seconda incombenza, riducendo la memoria operativa e aumentando il tasso di errore.",
      "Nel celebre saggio 'Deep Work', Cal Newport utilizza questo esperimento per denunciare la più grande vulnerabilità del lavoratore moderno: il danno non è dato solo dai minuti trascorsi sullo schermo, ma dalla continua micro-frammentazione della coscienza. Guardare il telefono cinquanta volte al giorno per 'un istante' condanna il cervello a una perenne foschia cognitiva.",
      "L'evidenza di Leroy e Newport prova che affidarsi alla sola forza di volontà è una strategia fallimentare. L'unica risposta efficace risiede in vincoli meccanici che impediscano i controlli impulsivi. L'ecosistema Limitra nasce per fornire questa tutela: Limitra App Block blocca in modo inderogabile le app distraenti durante le sessioni di studio e lavoro, mentre Limitra Social sfrutta la responsabilità condivisa con un amico per garantire una mente limpida e focalizzata."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Scienza e salute",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Residuo di Attenzione",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Capacità Cognitiva",
      "Limitra"
    ]
  },
  ar: {
    id: "99",
    slug: "athr-al-intibah-taklifat-al-nazar-ila-al-hatif-cal-newport-sophie-leroy",
    title: "التكلفة الخفية للنظرة الخاطفة إلى الهاتف: تجربة 'أثر الانتباه' لـ صوفي ليروي وكال نيوبورت",
    summary: "النظر إلى هاتفك لبضع ثوانٍ أثناء المذاكرة أو العمل لا يوقف تركيزك مؤقتاً فحسب، بل يشل قدراتك الإدراكية لدقائق. تجربة د. صوفي ليروي المثبتة علمياً وتحليل كتاب Deep Work.",
    content: [
      "يعتقد الكثيرون أن إلقاء نظرة سريعة لمدة ثلاث ثوانٍ على إشعار أو رسالة في الهاتف أثناء أداء مهمة ذهنية لا يسبب أي ضرر إدراكي. غير أن هذا الشعور بالاستئناف الفوري يتناقض كلياً مع طبيعة الذاكرة العاملة في الدماغ البشري. تؤكد أبحاث علم الأعصاب والسلوك منذ عقود أن التركيز البشري لا يعمل كمفتاح تشغيل فوري، بل يشبه سفينة ضخمة تتطلب وقتاً وقوة دفع هائلة لتغيير مسارها.",
      "في دراسة رائدة نشرتها عالمة النفس التنظيمي د. صوفي ليروي (جامعة واشنطن / جامعة مينيسوتا)، تم قياس الأثر المعرفي الدقيق للانتقال بين المهام المختلفة. ومن خلال اختبارات استكمال الكلمات والقرارات التحليلية، أثبتت ليروي علمياً ظاهرة أطلقت عليها اسم 'أثر الانتباه' (Attention Residue).",
      "أظهرت نتائج الدكتورة ليروي أنه عندما ينتقل الفرد من المهمة (أ) إلى مهمة غير مكتملة (ب) مثل قراءة رسالة واردة، فإن انتباهه لا ينتقل بشكل كامل. والأخطر من ذلك، أنه عند العودة إلى المهمة (أ)، يظل جزء معتبر من طاقته الذهنية عالقاً في المهمة (ب)، مما يضيق سعة الذاكرة العاملة ويبطئ التفكير الاستنتاجي ويزيد معدل الأخطاء في المهام المعقدة.",
      "في كتابه الشهير 'Deep Work' (العمل العميق)، جعل عالم الحاسوب كال نيوبورت من هذه التجربة حجر الزاوية لتشخيص أزمة العصر: المشكلة الحقيقية ليست مجرد عدد الساعات على الشاشة، بل التفتيت المستمر للانتباه. إن فحص الهاتف خمسين مرة يومياً لمدة 'ثانية واحدة' يغرق العقل في ضباب دائم من أثر الانتباه يمنعه من بلوغ أقصى إمكاناته التحليلية.",
      "تثبت أبحاث ليروي ونيوبورت أن الاعتماد على قوة الإرادة اللحظية رهان خاسر. الحل الفعال يكمن في فرض حواجز خارجية مانعة تقطع دافع التشتت من جذوره. صُممت منظومة Limitra لتقديم هذا الدرع الواقي: يتيح لك تطبيق Limitra App Block قفل التطبيقات المشتتة بحزم خلال ساعات التركيز، بينما يمنحك Limitra Social التزاماً مشتركاً مع صديق لحماية صفائك الذهني وتحقيق تركيز استثنائي."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "العلوم والصحة",
    date: "2026-10-08",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "أثر الانتباه",
      "صوفي ليروي",
      "كال نيوبورت",
      "العمل العميق",
      "القدرة الإدراكية",
      "Limitra"
    ]
  },
  id: {
    id: "99",
    slug: "residu-perhatian-biaya-melihat-ponsel-sejenak-cal-newport-sophie-leroy",
    title: "Biaya Tersembunyi Menatap Ponsel Sesaat: Eksperimen 'Residu Perhatian' Sophie Leroy dan Cal Newport",
    summary: "Memeriksa ponsel hanya beberapa detik saat bekerja tidak sekadar menunda fokus—ini melumpuhkan performa kognitif selama beberapa menit. Riset ilmiah Dr. Sophie Leroy dan analisis Deep Work.",
    content: [
      "Banyak orang berasumsi bahwa melirik notifikasi ponsel selama 3 hingga 5 detik tidak menimbulkan kerugian kognitif yang berarti. Sensasi subjektif 'saya hanya melihat sebentar lalu lanjut kerja' sangat bertolak belakang dengan mekanisme memori kerja otak. Ilmu saraf membuktikan bahwa perhatian manusia bukanlah saklar instan, melainkan memiliki inersia besar yang membutuhkan waktu signifikan untuk beralih.",
      "Dalam riset penting oleh psikolog Dr. Sophie Leroy (University of Washington), para peneliti mengukur penurunan performa kognitif saat seseorang berpindah antar tugas. Melalui pengujian analitis dan verbal, Leroy membuktikan fenomena yang dikenal sebagai 'Residu Perhatian' (Attention Residue).",
      "Temuan Dr. Leroy menegaskan bahwa saat seseorang berpindah dari Tugas A ke Tugas B yang belum tuntas (seperti pesan singkat atau media sosial), fokusnya tidak berpindah seutuhnya. Saat kembali ke Tugas A, sebagian kapasitas mental tetap tertinggal di Tugas B. Residu ini mempersempit memori kerja dan meningkatkan risiko kesalahan pada tugas-tugas kompleks.",
      "Dalam buku terkenalnya 'Deep Work', ilmuwan komputer Cal Newport mengangkat eksperimen ini untuk mengungkap kesalahan fatal pekerja modern: bahaya terbesar bukanlah total durasi layar, melainkan fragmentasi fokus yang tiada henti. Menengok ponsel lima puluh kali sehari selama 'satu detik' menenggelamkan otak dalam kabut residu perhatian yang berkepanjangan.",
      "Bukti ilmiah dari Leroy dan Newport menunjukkan bahwa mengandalkan kemauan diri saja tidak akan cukup. Diperlukan batasan struktural eksternal yang tegas untuk mencegah dorongan impulsif tersebut. Ekosistem Limitra hadir untuk tujuan ini: Limitra App Block mengunci aplikasi pengalih fokus selama jam kerja intensif, sementara Limitra Social memanfaatkan akuntabilitas bersama rekan untuk menjaga ketajaman pikiran Anda."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Sains & Kesehatan",
    date: "2026-10-08",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Residu Perhatian",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Kapasitas Kognitif",
      "Limitra"
    ]
  },
  fil: {
    id: "99",
    slug: "residu-ng-atensyon-halaga-ng-panandaliang-tingin-cal-newport-sophie-leroy",
    title: "Ang Nakatagong Halaga ng Panandaliang Tingin sa Telepono: Eksperimento sa 'Attention Residue' nina Sophie Leroy at Cal Newport",
    summary: "Ang pagsulyap sa telepono nang ilang segundo habang nag-aaral o nagtatrabaho ay hindi lamang simpleng paghinto—pinapabagal nito ang utak sa loob ng ilang minuto. Ang pananaliksik ni Dr. Sophie Leroy at pagsusuri sa Deep Work.",
    content: [
      "Maraming tao ang naniniwalang ang pagsilip sa notification o text sa loob ng tatlong segundo ay walang masamang epekto sa konsentrasyon. Ang pakiramdam na 'sumulyap lang ako at nagpatuloy agad' ay salungat sa tunay na operasyon ng working memory ng tao. Pinatutunayan ng neuroscience na ang atensyon ay hindi parang switch ng ilaw, kundi nangangailangan ng sapat na oras upang ganap na makatutok.",
      "Sa isang mahalagang pag-aaral ng organizational psychologist na si Dr. Sophie Leroy (University of Washington), sinukat ang pagbaba ng kakayahan ng isip sa tuwing lumilipat ng gawain. Sa pamamagitan ng mga analytical tests, napatunayan ni Leroy ang penomenon na tinatawag na 'Attention Residue' (Residu ng Atensyon).",
      "Ayon sa mga natuklasan ni Dr. Leroy, kapag lumipat ang isang tao mula sa Gawain A patungo sa Gawain B na hindi pa tapos (tulad ng isang mensahe o alerto), hindi ganap na lumilipat ang kanyang isip. Sa pagbabalik sa Gawain A, may bahagi pa rin ng atensyon ang naiiwang nakakabit sa Gawain B. Ang residung ito ay nagpapaliit sa kapasidad ng utak at nagpapataas ng pagkakamali.",
      "Sa kanyang tanyag na aklat na 'Deep Work', ginamit ng computer scientist na si Cal Newport ang eksperimentong ito upang ipaliwanag ang karamdaman ng modernong lipunan: ang tunay na suliranin ay hindi lamang ang kabuuang oras sa screen, kundi ang paulit-ulit na pagkakaputol-putol ng atensyon. Ang pagtingin sa telepono nang limampung beses sa isang araw ay nagdudulot ng permanenteng ulap sa pag-iisip.",
      "Ipinapakita ng pag-aaral nina Leroy at Newport na hindi sapat ang simpleng tibay ng loob. Kinakailangan ang panlabas at matatag na harang upang pigilan ang mga biglaang silip. Dinisenyo ang Limitra para dito: pinapatupad ng Limitra App Block ang mahigpit na lock sa mga nakakaabalang app habang nag-aaral, at ang Limitra Social ay nagbibigay ng pananagutan kasama ang isang kaibigan upang mapanatiling malinaw at matalas ang iyong isip."
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "Agham at Kalusugan",
    date: "2026-10-08",
    readTime: "5 min",
    featured: false,
    tags: [
      "Attention Residue",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "Kakayahang Kognitibo",
      "Limitra"
    ]
  },
  th: {
    id: "99",
    slug: "attention-residue-cost-of-brief-glance-cal-newport-sophie-leroy",
    title: "ต้นทุนที่มองไม่เห็นของการเหลือบมองโทรศัพท์เพียงเสี้ยววินาที: การทดลอง 'Attention Residue' ของ Sophie Leroy และ Cal Newport",
    summary: "การหยิบโทรศัพท์ขึ้นมาดูเพียง 3-5 วินาทีขณะทำงานไม่ได้เป็นเพียงการหยุดพักชั่วคราว แต่ทำให้ประสิทธิภาพการประมวลผลของสมองลดลงต่อเนื่องยาวนานหลายนาที งานวิจัยทางวิทยาศาสตร์ของ Dr. Sophie Leroy และบทวิเคราะห์จากหนังสือ Deep Work",
    content: [
      "หลายคนเชื่อว่าการเหลือบดูการแจ้งเตือนหรือข้อความสั้นๆ บนสมาร์ตโฟนเพียง 3-5 วินาทีขณะทำงานหรืออ่านหนังสือไม่ได้สร้างความเสียหายต่อสมอง แต่ความรู้สึกที่ว่า 'แค่ดูแวบเดียวแล้วกลับมาทำต่อได้ทันที' ขัดแย้งกับหลักการทำงานของหน่วยความจำเพื่อการทำงาน (Working Memory) โดยสิ้นเชิง งานวิจัยด้านประสาทวิทยายืนยันมานานหลายทศวรรษว่า สมาธิของมนุษย์ไม่ได้ทำงานเหมือนสวิตช์ไฟที่เปิดปิดได้ในพริบตา หากแต่มีแรงเฉื่อยสูงที่ต้องใช้เวลาในการปรับทิศทาง",
      "ในการศึกษาชิ้นสำคัญของนักจิตวิทยาองค์กร ดร. โซฟี เลอรอย (Dr. Sophie Leroy จาก University of Washington) ได้ทำการวัดผลกระทบทางปัญญาเมื่อมนุษย์ต้องสลับไปมาระหว่างงานต่างๆ ผ่านแบบทดสอบการตัดสินใจเชิงวิเคราะห์ ผลการวิจัยได้พิสูจน์ปรากฏการณ์ทางวิทยาศาสตร์ที่เรียกว่า 'สมาธิตกค้าง' หรือ 'Attention Residue'",
      "ผลการวิจัยชี้ชัดว่า เมื่อบุคคลเปลี่ยนจากงาน A ไปยังงาน B ที่ยังไม่เสร็จสิ้น (เช่น ข้อความแจ้งเตือนหรือแชต) สมาธิจะไม่สามารถย้ายไปทั้งหมดได้ และเมื่อกลับมาทำงาน A ต่อไป ส่วนสำคัญของแบนด์วิดท์ทางปัญญาจะยังคงตกค้างอยู่ที่งาน B สมาธิตกค้างนี้ทำให้หน่วยความจำลดประสิทธิภาพลง การคิดเชิงเหตุผลช้าลง และมีอัตราความผิดพลาดสูงขึ้นอย่างมีนัยสำคัญ",
      "ในหนังสือยอดนิยม 'Deep Work' ของ คาล นิวพอร์ต (Cal Newport) ได้นำงานวิจัยนี้มาอธิบายจุดอ่อนที่อันตรายที่สุดของคนทำงานยุคดิจิทัล: ปัญหาไม่ได้อยู่ที่ชั่วโมงรวมหน้าจอเพียงอย่างเดียว แต่อยู่ที่การแตกกระจายของสมาธิตลอดทั้งวัน การหยิบโทรศัพท์ขึ้นมาดู 50 ครั้งต่อวันส่งผลให้สมองตกอยู่ในหมอกควันแห่งความเหนื่อยล้าทางจิตใจเรื้อรัง",
      "หลักฐานทางวิทยาศาสตร์ของ Leroy และ Newport ยืนยันว่าการพึ่งพาเพียงพลังใจไม่สามารถเอาชนะสิ่งล่อใจจากอัลกอริทึมได้ จำเป็นต้องมีกลไกโครงสร้างที่ปิดกั้นการหยิบดูโทรศัพท์อย่างเด็ดขาด ระบบนิเวศของ Limitra ถูกออกแบบมาเพื่อแก้ปัญหานี้: ด้วย Limitra App Block คุณสามารถล็อกแอปพลิเคชันที่รบกวนสมาธิได้อย่างเข้มงวด และ Limitra Social ช่วยสร้างพันธะสัญญาความรับผิดชอบร่วมกับเพื่อนเพื่อปกป้องความกระจ่างชัดของจิตใจคุณ"
    ],
    source: "Dr. Sophie Leroy (University of Washington) & Cal Newport (Deep Work)",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S074959780900038X",
    category: "วิทยาศาสตร์และสุขภาพ",
    date: "2026-10-08",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "Attention Residue",
      "Sophie Leroy",
      "Cal Newport",
      "Deep Work",
      "ความสามารถทางสติปัญญา",
      "Limitra"
    ]
  }
};

const languages = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

console.log('Adding Article 99 across 11 languages...');

for (const lang of languages) {
  const filePath = lang === 'tr' 
    ? path.join(dataDir, 'haberler.json')
    : path.join(dataDir, `news-${lang}.json`);

  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Filter out if 99 already exists (idempotency)
  const filtered = fileData.filter(item => item.id !== '99');

  // Insert at top
  filtered.unshift(articles[lang]);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), 'utf8');
  console.log(`[${lang.toUpperCase()}] Added article 99 to ${path.basename(filePath)}`);
}

console.log('Successfully added Article 99 in 11 languages.');
