import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "102",
    slug: "durtu-sorfu-ve-10-dakika-kurali-telefona-uzanma-refleksini-kirmak",
    title: "Dürtü Sörfü ve 10 Dakika Kuralı: Telefona Uzanma Refleksini Kırmak",
    summary: "Bir iş üzerinde çalışırken elinizin istemsizce telefona gitmesinin ardındaki asıl sebep teknoloji değil, zihinsel rahatsızlıktan kaçma refleksidir. Nir Eyal'in 'İçsel Tetikleyiciler' analizi ve Dr. Alan Marlatt'ın 'Dürtü Sörfü' (Urge Surfing) protokolü.",
    content: [
      "Bir rapor hazırlarken, ders çalışırken veya zorlu bir analitik görev üzerindeyken çoğumuz aniden ekran kilidini açıp sosyal medya akışında kaybolduğumuzu fark ederiz. Bu durum genellikle telefonun titremesi veya yeni bir bildirim gelmesi yüzünden yaşanmaz; bildirimlerin tamamen kapalı olduğu anlarda bile zihin adeta görünmez bir iple telefona çekilir. Pek çok insan bunu bir irade zayıflığı veya teknoloji bağımlılığı olarak etiketler. Oysa davranış bilimci Nir Eyal'in 'Indistractable' (Kancadan Kurtulmak) çalışmasında ortaya koyduğu gibi, dikkat dağınıklığının temel kaynağı dışsal bildirimler değil; insan beyninin rahatsız edici duygulardan kaçma mekanizmasıdır.",
      "Evrimsel psikolojiye göre insan beyni sürekli olarak homeostazı (iç dengeyi) korumaya çalışır. Vücut üşüdüğünde titreyerek, acıktığında yemek arayarak nasıl fiziksel rahatsızlığı gidermeye çalışıyorsa; zihin de can sıkıntısı, belirsizlik, yalnızlık, karmaşık bir işle karşılaşınca yaşanan yetersizlik hissi veya bilişsel sürtünme gibi rahatsız edici içsel duygulardan anında kaçmak ister. Akıllı telefonlar, bu 'içsel tetikleyiciler' (internal triggers) karşısında insanlık tarihinin gördüğü en erişilebilir duygusal yatıştırıcı haline gelmiştir. Zor bir cümleyi yazarken takıldığınız o 5 saniyelik mikro rahatsızlık anında, beyin problemi çözmek yerine zahmetsiz bir dopamin vuruşu için telefona uzanmayı refleks haline getirir.",
      "Bu dürtüyü yok etmeye çalışmak veya 'asla bakmayacağım' diyerek iradeyle bastırmak, psikolojide 'ironik süreç kuramı' (beyaz ayı etkisi) olarak bilinen geri tepmeye yol açar; bastırılan arzu zihinde daha da büyür. Bu kısır döngüyü kırmak için Nir Eyal, Washington Üniversitesi Bağımlılık Davranışları Araştırma Merkezi'nden klinik psikolog Dr. G. Alan Marlatt'ın geliştirdiği 'Dürtü Sörfü' (Urge Surfing) metodolojisini önerir. Marlatt'ın klinik deneylerle kanıtladığı gibi, zihinsel bir aşerme veya dürtü sonsuza dek yükselen bir eğri değildir; okyanustaki bir dalgaya benzer. Dürtü başlar, birkaç dakika içinde tepe noktasına (kret) ulaşır ve eğer eyleme dökülmezse nörolojik olarak kaçınılmaz biçimde sönümlenir.",
      "Bu mekanizmanın pratik uygulaması '10 Dakika Kuralı' olarak adlandırılır. Çalışma sırasında elinizin telefona gitmek üzere olduğunu hissettiğiniz an kendinize eylemi yasaklamazsınız; çünkü yasak arzuyu besler. Bunun yerine şu kuralı işletirsiniz: 'Telefona bakabilirim, ancak şu an değil; tam 10 dakika sonra.' Bu 10 dakikalık bekleme penceresinde elinizi masadan çeker, hissettiğiniz o içsel huzursuzluğu (örneğin yazmaktan sıkılma veya odaklanma yorgunluğu) bir yabancı gibi gözlemlersiniz. Dürtüyü yargılamadan izlediğinizde, dopamin dalgası genellikle 3 ila 5 dakika içinde doruk noktasına ulaşıp kendiliğinden çekilir. Süre dolduğunda ise beyniniz o anlık dürtüsel girdaptan çıkmış ve derin çalışma akışına geri dönmüş olur.",
      "Zihinsel dürtüleri fark edip yönetmeyi öğrenmek, dijital araçlarla kurulan ilişkiyi reaktif bir bağımlılıktan bilinçli bir tercihe dönüştürür. Çalışma saatlerinde veya gün içinde dürtüsel olarak telefona uzanma alışkanlığını sınırlandırmak isteyenler için Limitra App Block, seçilen uygulamalara bağımsız günlük süre limitleri tanımlayarak dikkati korumaya yardımcı oluyor."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Ekran Süresi Kontrolü",
    date: "2026-10-10",
    readTime: "6 dk",
    featured: false,
    tags: [
      "Dürtü Sörfü",
      "10 Dakika Kuralı",
      "Nir Eyal",
      "İçsel Tetikleyiciler",
      "Alan Marlatt",
      "Ekran Süresi Kontrolü",
      "Limitra App Block"
    ]
  },
  en: {
    id: "102",
    slug: "urge-surfing-and-the-10-minute-rule-breaking-the-impulsive-phone-habit",
    title: "Urge Surfing and the 10-Minute Rule: Breaking the Reflex to Check Your Phone",
    summary: "The root cause of reaching for your phone while working is not technology itself, but a reflex to escape mental discomfort. An analysis of Nir Eyal's 'Internal Triggers' and Dr. Alan Marlatt's clinical 'Urge Surfing' protocol.",
    content: [
      "While drafting a report, studying, or tackling a demanding analytical task, many of us suddenly realize we have unlocked our phone and are scrolling through a social feed. This impulse rarely stems from a phone vibration or an incoming alert; even when notifications are completely silenced, the mind seems pulled toward the device by an invisible tether. Most people dismiss this as personal weakness or tech addiction. However, as behavioral designer Nir Eyal demonstrates in his seminal work 'Indistractable', the primary source of distraction is not external triggers, but the brain's innate drive to escape unpleasant emotions.",
      "Evolutionary psychology explains that the human brain constantly strives for homeostasis. Just as the body shivers when cold and searches for sustenance when hungry to alleviate physical discomfort, the mind seeks immediate relief from uncomfortable internal states such as boredom, uncertainty, fatigue, or cognitive friction when confronted with a complex assignment. Smartphones have become the most accessible psychological pacifier in history against these 'internal triggers'. At the micro-moment of friction when you struggle to formulate a difficult sentence, the brain defaults to grabbing the phone for frictionless dopamine instead of persisting with the problem.",
      "Attempting to suppress this impulse or forcing yourself never to look at your device backfires through what cognitive psychologists term 'ironic process theory' (the white bear effect), where active suppression amplifies the underlying desire. To dismantle this cycle, Eyal recommends 'Urge Surfing', a methodology pioneered by clinical psychologist Dr. G. Alan Marlatt at the University of Washington's Addictive Behaviors Research Center. As Marlatt's clinical research proved, cravings and impulsive urges do not escalate indefinitely; they behave like ocean waves. An urge gathers momentum, crests within several minutes, and if not acted upon, naturally subsides through neurological extinction.",
      "The practical protocol derived from this insight is known as the '10-Minute Rule'. When you feel the familiar impulse to grab your phone during work, you do not forbid yourself from checking it, as outright prohibition reinforces the temptation. Instead, you establish a simple condition: 'I can look at my phone, but not right now; I must wait exactly 10 minutes.' During this 10-minute interval, you step back and observe the internal discomfort—such as boredom or mental restlessness—as an objective bystander. By observing the craving without judgment, the dopamine wave usually crests and dissipates within three to five minutes, allowing you to return smoothly to deep cognitive flow.",
      "Learning to recognize and navigate internal impulses transforms our relationship with digital devices from reactive compulsion into intentional control. For individuals seeking to establish structured boundaries against impulsive phone checking during work or study sessions, Limitra App Block allows users to define independent daily time limits on selected applications to help preserve cognitive focus."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Screen Time Control",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Urge Surfing",
      "10-Minute Rule",
      "Nir Eyal",
      "Internal Triggers",
      "Alan Marlatt",
      "Screen Time Control",
      "Limitra App Block"
    ]
  },
  es: {
    id: "102",
    slug: "surf-de-impulsos-y-la-regla-de-los-10-minutos-para-frenar-el-movil",
    title: "El 'surf de impulsos' y la regla de los 10 minutos: Cómo frenar el hábito involuntario de mirar el móvil",
    summary: "El motivo principal por el que miramos el móvil mientras trabajamos no es la tecnología, sino el impulso de huir de una incomodidad mental. El análisis de los desencadenantes internos de Nir Eyal y el protocolo clínico del doctor Alan Marlatt.",
    content: [
      "Al redactar un informe, estudiar o realizar una tarea analítica compleja, muchos descubren de repente que han desbloqueado el teléfono y están navegando sin rumbo por una red social. Este impulso rara vez surge por una vibración o una notificación entrante; incluso con las alertas silenciadas, la mente parece arrastrada hacia la pantalla por un hilo invisible. La mayoría lo atribuye a una falta de fuerza de voluntad. Sin embargo, como explica el especialista en comportamiento Nir Eyal en su obra 'Indistractable', la raíz de la distracción no reside en los estímulos externos, sino en el mecanismo cerebral para huir de emociones incómodas.",
      "La psicología evolutiva señala que el cerebro humano busca constantemente la homeostasis. Del mismo modo que el cuerpo tiembla con el frío o busca alimento con el hambre para corregir el malestar físico, la mente intenta escapar de inmediato de sensaciones incómodas como el aburrimiento, la incertidumbre, el cansancio o la fricción cognitiva ante un reto exigente. Los teléfonos inteligentes se han convertido en el calmante emocional más accesible frente a estos 'desencadenantes internos'. En el instante en que nos atascamos con una idea difícil, el cerebro recurre por inercia al móvil para obtener dopamina sin esfuerzo en lugar de resolver la dificultad.",
      "Intentar reprimir este impulso prohibiéndonos tocar la pantalla suele provocar el 'efecto del oso blanco' (teoría del proceso irónico), donde la negación multiplica el deseo reprimido. Para desactivar esta dinámica, Eyal propone el 'surf de impulsos' (Urge Surfing), técnica desarrollada por el psicólogo clínico Dr. G. Alan Marlatt en el Centro de Investigación de Conductas Adictivas de la Universidad de Washington. Marlatt demostró empíricamente que los impulsos no crecen de forma indefinida; funcionan como olas marinas. La urgencia surge, alcanza su punto álgido en pocos minutos y, si no se cede ante ella, se desvanece de manera natural.",
      "La aplicación práctica de este principio se traduce en la 'regla de los 10 minutos'. Cuando sientas la necesidad urgente de tomar el móvil durante tus horas de trabajo, no te impongas una negativa absoluta, ya que eso incrementa la tentación. En su lugar, aplica esta pauta: 'Puedo consultar el teléfono, pero no ahora mismo; esperaré exactamente 10 minutos'. Durante esa pausa, observa la inquietud interna o el aburrimiento con curiosidad y sin juzgarte. Al contemplar la ola sin reaccionar, el pico de dopamina suele descender en tres a cinco minutos, permitiéndote recuperar la concentración profunda de forma natural.",
      "Reconocer y gestionar los impulsos internos permite transformar el uso de la tecnología de una compulsión reactiva en una decisión consciente. Para quienes desean fijar límites claros frente a las distracciones durante sus rutinas de estudio o trabajo, Limitra App Block permite configurar límites de tiempo diarios independientes para aplicaciones seleccionadas, ayudando a preservar la atención mental."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Control de Tiempo en Pantalla",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Surf de impulsos",
      "Regla de 10 minutos",
      "Nir Eyal",
      "Desencadenantes internos",
      "Alan Marlatt",
      "Control de tiempo en pantalla",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "102",
    slug: "le-surf-des-pulsions-et-la-regle-des-10-minutes-pour-maitriser-son-telephone",
    title: "Le surf des pulsions et la règle des 10 minutes : Rompre le réflexe impulsif de consulter son téléphone",
    summary: "La véritable raison qui nous pousse à saisir notre téléphone en plein travail n'est pas la technologie, mais un réflexe de fuite face à l'inconfort mental. Analyse des déclencheurs internes de Nir Eyal et protocole d'Urge Surfing d'Alan Marlatt.",
    content: [
      "En pleine rédaction d'un rapport, pendant des révisions ou face à un problème complexe, beaucoup d'entre nous se surprennent soudain à déverrouiller leur smartphone et à faire défiler un fil d'actualité. Cette impulsion survient rarement à cause d'une sonnerie ou d'une notification ; même lorsque l'appareil est en mode silencieux absolu, l'esprit semble attiré par un fil invisible. On y voit souvent un manque de discipline personnelle. Pourtant, comme le démontre l'analyste comportemental Nir Eyal dans son ouvrage 'Indistractable', la source première de la distraction ne provient pas des alertes extérieures, mais du besoin viscéral du cerveau de fuir un inconfort émotionnel.",
      "La psychologie évolutionniste enseigne que notre cerveau recherche en permanence l'homéostasie. Tout comme le corps frissonne lorsqu'il a froid ou réclame de la nourriture lorsqu'il a faim pour dissiper un malaise physique, l'esprit cherche une échappatoire immédiate face à l'ennui, au doute, à la fatigue ou à la résistance intellectuelle devant une tâche difficile. Face à ces 'déclencheurs internes' (internal triggers), le smartphone est devenu le calmant émotionnel le plus rapide de l'histoire. Dès que nous butons sur une phrase ardue, le cerveau choisit le réflexe du shoot de dopamine facile plutôt que l'effort de réflexion.",
      "Tenter de réprimer brutalement cette envie en se répétant 'je ne dois pas y toucher' provoque ce que les psychologues appellent la 'théorie des processus ironiques' (l'effet de l'ours blanc), où l'interdiction décuple l'obsession. Pour désamorcer ce mécanisme, Nir Eyal s'appuie sur le 'surf des pulsions' (Urge Surfing), une méthode conçue par le psychologue clinicien Dr G. Alan Marlatt à l'Université de Washington. Les recherches de Marlatt ont démontré qu'une pulsion compulsive ne croît pas indéfiniment : elle ressemble à une vague océanique qui monte, atteint une crête en quelques minutes, puis s'éteint naturellement si l'on n'y cède pas immédiatement.",
      "La mise en pratique concrète de cette découverte est la 'règle des 10 minutes'. Lorsque vous ressentez l'envie irrépressible de vérifier votre téléphone pendant une session de travail, ne vous l'interdisez pas catégoriquement, car l'interdit nourrit le désir. Adoptez plutôt cette consigne : 'Je peux regarder mon écran, mais pas tout de suite ; j'attends exactement 10 minutes'. Durant cet intervalle, observez votre malaise intérieur sans jugement, comme un simple spectateur. En laissant la vague monter sans agir, la tension s'apaise généralement en trois à cinq minutes, vous permettant de replonger sans heurt dans votre concentration.",
      "Apprendre à observer ses pulsions internes permet de transformer notre rapport aux écrans en une démarche délibérée et sereine. Pour ceux qui souhaitent poser des limites concrètes à l'utilisation impulsive des réseaux durant leurs sessions d'étude ou de travail, Limitra App Block permet de fixer une durée d'utilisation quotidienne indépendante pour chaque application ciblée afin de préserver l'attention."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Contrôle du Temps d'Écran",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Surf des pulsions",
      "Règle des 10 minutes",
      "Nir Eyal",
      "Déclencheurs internes",
      "Alan Marlatt",
      "Contrôle du temps d'écran",
      "Limitra App Block"
    ]
  },
  de: {
    id: "102",
    slug: "urge-surfing-und-die-10-minuten-regel-den-impulsiven-smartphone-griff-stoppen",
    title: "Urge Surfing und die 10-Minuten-Regel: Den automatischen Griff zum Smartphone stoppen",
    summary: "Der eigentliche Grund für den ständigen Griff zum Smartphone während der Arbeit ist nicht die Technik, sondern der Drang, mentalem Unbehagen zu entfliehen. Nir Eyals Analyse interner Auslöser und Dr. Alan Marlatts Urge-Surfing-Protokoll.",
    content: [
      "Ob beim Verfassen eines Berichts, beim Lernen oder bei anspruchsvollen Projekten: Viele Menschen ertappen sich unvermittelt dabei, wie sie das Smartphone entsperren und gedankenlos durch einen Social-Media-Feed scrollen. Dieser Impuls rührt selten von einem Klingelton oder einer Benachrichtigung her; selbst bei lautlos geschaltetem Gerät scheint der Geist wie magisch vom Bildschirm angezogen zu werden. Oft wird dies als Willensschwäche abgetan. Doch wie der Verhaltensforscher Nir Eyal in seinem Werk 'Indistractable' nachweist, liegt der wahre Ursprung von Ablenkung nicht in äußeren Reizen, sondern im Bestreben des Gehirns, unangenehmen Emotionen auszuweichen.",
      "Der Evolutionspsychologie zufolge strebt das menschliche Gehirn stets nach Homöostase. Genau wie der Körper bei Kälte zittert oder bei Hunger Nahrung sucht, um ein physisches Unbehagen zu lindern, will der Geist emotionalen Belastungen wie Langeweile, Unsicherheit, mentaler Erschöpfung oder kognitiver Reibung sofort entkommen. Smartphones fungieren heute als der am schnellsten verfügbare Beruhigungssauger gegen solche 'internen Auslöser' (Internal Triggers). Sobald bei einer Denkaufgabe eine kurze Hürde auftaucht, flieht das Gehirn reflexartig in eine mühelose Dopaminbelohnung, anstatt die geistige Anstrengung fortzuführen.",
      "Den Drang mit reiner Härte zu unterdrücken ('Ich darf keinesfalls hinschauen'), führt durch die 'ironische Prozesstheorie' (den Weißer-Bär-Effekt) meist zum gegenteiligen Ergebnis: Das Verbot verstärkt das Verlangen. Um dieses Verhaltensmuster aufzulösen, empfiehlt Eyal die Methode des 'Urge Surfing' (Wellenreiten des Verlangens), die von dem klinischen Psychologen Dr. G. Alan Marlatt an der University of Washington entwickelt wurde. Marlatt wies experimentell nach, dass impulsive Gelüste nicht unbegrenzt ansteigen. Sie verhalten sich wie Meereswellen: Sie bauen sich auf, erreichen nach wenigen Minuten ihren Höhepunkt und verebben von selbst, wenn man ihnen nicht nachgibt.",
      "Daraus leitet sich die praxiserprobte '10-Minuten-Regel' ab. Verspüren Sie während der Arbeitszeit den plötzlichen Reflex, zum Smartphone zu greifen, verbieten Sie sich die Handlung nicht, da Verbote den Drang nähren. Treffen Sie stattdessen eine klare Vereinbarung mit sich selbst: 'Ich darf auf das Telefon schauen, aber nicht jetzt; ich warte exakt 10 Minuten'. Beobachten Sie in dieser kurzen Zeitspanne die innere Unruhe oder Langeweile aus neutraler Distanz, ohne sie zu verurteilen. Die neuronale Dopaminwelle ebbt fast immer nach drei bis fünf Minuten ab, sodass Sie Ihre Konzentration mühelos wiedererlangen.",
      "Indem man lernt, innere Impulse bewusst wahrzunehmen, wandelt sich der Umgang mit digitalen Medien von einem reflexhaften Zwang zu einer bewussten Entscheidung. Für alle, die während intensiver Lern- oder Arbeitsphasen verlässliche Grenzen gegen impulsives Weiterscrollen setzen möchten, bietet Limitra App Block die Möglichkeit, für ausgewählte Anwendungen separate tägliche Zeitlimits festzulegen und so den geistigen Fokus zu sichern."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Bildschirmzeit-Kontrolle",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Urge Surfing",
      "10-Minuten-Regel",
      "Nir Eyal",
      "Interne Auslöser",
      "Alan Marlatt",
      "Bildschirmzeit-Kontrolle",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "102",
    slug: "surf-de-impulsos-e-a-regra-dos-10-minutos-para-controlar-o-telemovel",
    title: "Surf de impulsos e a regra dos 10 minutos: Como travar o reflexo automático de pegar no telemóvel",
    summary: "O verdadeiro motivo para pegarmos no telemóvel durante o trabalho não é a tecnologia, mas a fuga ao desconforto mental. A análise de gatilhos internos de Nir Eyal e o protocolo clínico de Alan Marlatt.",
    content: [
      "A meio da redação de um relatório, do estudo ou de uma tarefa intelectual exigente, muitas pessoas dão por si a desbloquear o telemóvel e a navegar num feed de redes sociais sem perceber como lá chegaram. Este impulso raramente nasce de uma vibração ou notificação; mesmo com o aparelho em silêncio total, a mente parece puxada para o ecrã. Quase sempre rotulamos isso como falta de força de vontade. Contudo, como o especialista em comportamento Nir Eyal demonstra no livro 'Indistractable', a raiz da distração não está nos estímulos externos, mas na tentativa do cérebro de escapar a emoções desconfortáveis.",
      "A psicologia evolutiva explica que o cérebro humano procura incessantemente a homeostase. Da mesma forma que o corpo treme de frio ou procura comida com a fome para repor o equilíbrio, a mente procura alívio imediato para sensações como o tédio, a incerteza, o cansaço ou a fricção cognitiva perante uma tarefa difícil. O smartphone tornou-se a chupeta emocional mais acessível da história contra esses 'gatilhos internos' (internal triggers). No instante em que surge um bloqueio criativo, o cérebro recorre automaticamente ao telemóvel para obter dopamina fácil em vez de insistir no raciocínio.",
      "Tentar reprimir esse desejo à força ('não vou olhar de maneira nenhuma') ativa a 'teoria dos processos irónicos' (o efeito do urso branco), em que a proibição direta faz disparar a obsessão mental. Para desarmar esse ciclo, Eyal recorre ao 'surf de impulsos' (Urge Surfing), metodologia criada pelo psicólogo clínico Dr. G. Alan Marlatt no Centro de Investigação de Comportamentos Aditivos da Universidade de Washington. Marlatt provou clinicamente que uma vontade impulsiva não sobe eternamente; comporta-se como uma onda no mar. A urgência cresce, atinge uma crista em poucos minutos e, se não for alimentada, desvanece-se por extinção neurológica.",
      "A aplicação prática desta descoberta é a chamada 'regra dos 10 minutos'. Quando sentir a urgência de pegar no telemóvel a meio do trabalho, não se proíba categoricamente de o fazer, pois a proibição agrava a vontade. Em vez disso, estabeleça um acordo simples: 'Posso ver o telemóvel, mas não agora; vou esperar exatamente 10 minutos'. Durante esses minutos, afaste as mãos e observe a inquietação ou o tédio como um observador neutro. Ao surfar a onda sem reagir de imediato, o pico de dopamina dissipa-se normalmente em três a cinco minutos, permitindo regressar ao trabalho profundo.",
      "Aprender a reconhecer e a observar os impulsos internos transforma a nossa relação com os ecrãs de uma compulsão reativa numa escolha deliberada. Para quem procura estabelecer barreiras concretas contra o impulso de abrir redes sociais durante o horário de trabalho ou estudo, o Limitra App Block permite configurar limites diários de tempo independentes para aplicações selecionadas, ajudando a proteger a concentração."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Controle de Tempo de Tela",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Surf de impulsos",
      "Regra dos 10 minutos",
      "Nir Eyal",
      "Gatilhos internos",
      "Alan Marlatt",
      "Controle de Tempo de Tela",
      "Limitra App Block"
    ]
  },
  it: {
    id: "102",
    slug: "urge-surfing-e-la-regola-dei-10-minuti-per-interrompere-il-riflesso-dello-smartphone",
    title: "L'urge surfing e la regola dei 10 minuti: Spezzare il riflesso impulsivo di prendere in mano il telefono",
    summary: "La causa principale per cui afferriamo il telefono mentre lavoriamo non è la tecnologia, ma il bisogno di sfuggire a un disagio interiore. L'analisi dei trigger interni di Nir Eyal e il protocollo di Alan Marlatt.",
    content: [
      "Mentre scriviamo una relazione, studiamo o affrontiamo un problema analitico complesso, molti si ritrovano all'improvviso a sbloccare lo smartphone e a scorrere distrattamente i social network. Questo impulso si manifesta raramente a causa di una notifica o di una suoneria; anche con il dispositivo completamente muto, la mente sembra attratta dallo schermo da un legame invisibile. Spesso lo consideriamo una carenza di disciplina. Tuttavia, come dimostra l'esperto di scienze comportamentali Nir Eyal nel saggio 'Indistractable', la prima causa di distrazione non risiede negli stimoli esterni, mas nel tentativo innato del cervello di sfuggire a sensazioni sgradevoli.",
      "La psicologia evolutiva insegna che il nostro cervello ricerca costantemente l'omeostasi. Proprio come l'organismo trema con il freddo o cerca nutrimento con la fame per ristabilire l'equilibrio fisiologico, la mente desidera evadere subito da noia, incertezza, stanchezza o fatica cognitiva di fronte a un ostacolo concettuale. Gli smartphone sono diventati il calmante emotivo più immediato della storia contro questi 'inneschi interni' (internal triggers). Nel momento esatto in cui ci blocchiamo su una riga difficile, il cervello ripiega sul telefono alla ricerca di dopamina senza sforzo piuttosto che affrontare la difficoltà.",
      "Cercare di reprimere questo impulso imponendosi di 'non guardare assolutamente' scatena la 'teoria dei processi ironici' (l'effetto dell'orso bianco), in cui il divieto mentale finisce per moltiplicare l'ossessione. Per spezzare questa spirale, Eyal consiglia la tecnica dell'Urge Surfing (cavalcare l'onda dell'impulso), concepita dal dottor G. Alan Marlatt presso l'Università di Washington. Marlatt ha dimostrato sperimentalmente che le voglie impulsive non crescono all'infinito: si comportano come le onde del mare. L'impulso sorge, raggiunge il suo culmine nel giro di pochi minuti e, se non assecondato, si dissolve naturalmente attraverso l'estinzione neurologica.",
      "La traduzione pratica di questo meccanismo è la cosiddetta 'regola dei 10 minuti'. Quando avverti il bisogno improvviso di prendere il telefono mentre lavori, non vietarti l'azione, poiché il divieto radicale accresce l'attrazione. Adotta invece questa semplice condizione: 'Posso guardare il telefono, ma non adesso; aspetterò esattamente 10 minuti'. Durante questa attesa, osserva il disagio o l'irrequietezza senza giudicarti, come un testimone neutrale. Lasciando scorrere l'onda senza assecondarla, il picco dopaminergico si sgonfia quasi sempre in tre o cinque minuti, permettendoti di rientrare nel flusso di lavoro.",
      "Imparare a riconoscere e gestire le pulsioni interiori consente di trasformare l'interazione con i dispositivi digitali da un automatismo reattivo a una scelta consapevole. Per chi desidera porre argini concreti alle distrazioni impulsive durante le sessioni di studio o lavoro, Limitra App Block consente di impostare limiti di tempo giornalieri autonomi per ciascuna app selezionata, aiutando a custodire la concentrazione mentale."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Controllo Tempo Schermo",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Urge Surfing",
      "Regola dei 10 minuti",
      "Nir Eyal",
      "Trigger interni",
      "Alan Marlatt",
      "Controllo Tempo Schermo",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "102",
    slug: "rakb-amwaj-al-raghba-wa-qaidat-al-ashr-daqaiq-likasr-adat-tafaqqud-al-hatif",
    title: "ركوب أمواج الرغبة وقاعدة الـ 10 دقائق: كسر رد الفعل التلقائي لتفقد الهاتف",
    summary: "الدافع الحقيقي للإمساك بالهاتف أثناء العمل ليس التكنولوجيا نفسها، بل هو رد فعل للهروب من الانزعاج الذهني. تحليل المحفزات الداخلية لنير إيال وبروتوكول د. آلان مارلات.",
    content: [
      "أثناء إعداد تقرير، أو المذاكرة، أو معالجة مهمة تحليلية معقدة، يجد الكثير منا أنفسهم فجأة يفتحون قفل هواتفهم ويتنقلون في خلاصات منصات التواصل دون وعي مسبق. نادراً ما ينبع هذا الدافع من رنين هاتف أو إشعار وارد؛ فحتى مع كتم جميع التنبيهات بالكامل، يظل العقل منجذباً نحو الشاشة بخيط غير مرئي. يفسر أغلب الناس هذا السلوك بضعف الإرادة أو الإدمان الرقمي. ومع ذلك، وكما يوضح الباحث السلوكي نير إيال في كتابه الشهير 'Indistractable'، فإن المصدر الجذري للتشتت ليس المحفزات الخارجية، بل هو سعي الدماغ الفطري للهروب من المشاعر المزعجة.",
      "وفقاً لعلم النفس التطوري، يسعى الدماغ البشري باستمرار إلى الحفاظ على التوازن الداخلي (الاتزان البدني). فكما يرتجف الجسد في البرد أو يبحث عن الطعام عند الجوع للتخلص من الانزعاج الجسدي، يبحث العقل عن مخرج فوري من المشاعر الداخلية المقلقة مثل الملل، أو الحيرة، أو الإرهاق، أو المقاومة الإدراكية أمام المهام الشاقة. لقد أصبحت الهواتف الذكية المهدئ النفسي الأكثر سهولة في التاريخ لمواجهة هذه 'المحفزات الداخلية' (internal triggers). في اللحظة التي تتعثر فيها أمام صياغة فكرة صعبة، يستسهل الدماغ اللجوء إلى الهاتف بحثاً عن جرعة دوبامين سريعة بدلاً من تحمل مشقة التركيز.",
      "إن محاولة كبت هذا الدافع بالقوة أو ترديد عبارات مثل 'لن أنظر إليه أبداً' تؤدي إلى ما يسميه علماء النفس 'نظرية العملية المتناقضة' (تأثير الدب الأبيض)، حيث يؤدي الكبت الصارم إلى مضاعفة الرغبة المكبوتة. ولكسر هذه الحلقة المفرغة، يقترح إيال أسلوب 'ركوب أمواج الرغبة' (Urge Surfing)، وهو بروتوكول ابتكره الطبيب النفسي السريري د. جي. آلان مارلات في مركز أبحاث السلوكيات الإدمانية بجامعة واشنطن. أثبتت أبحاث مارلات السريرية أن الرغبات الاندفاعية لا تتصاعد بلا نهاية، بل تشبه أمواج المحيط؛ حيث تبدأ الموجة وتصل إلى ذروتها خلال بضع دقائق، ثم تنحسر وتتلاشى تلقائياً إن لم نستجب لها.",
      "التطبيق العملي لهذا المفهوم يُعرف بـ 'قاعدة الـ 10 دقائق'. عندما تشعر برغبة مفاجئة في تفقد الهاتف أثناء العمل، لا تمنع نفسك تماماً لأن الحظر يغذي الاشتهاء، بل ضع شرطاً بسيطاً: 'يمكنني تفقد الهاتف، ولكن ليس الآن؛ بل بعد 10 دقائق تماماً'. خلال نافذة الانتظار هذه، ارفع يديك عن الجهاز وراقب ذلك التململ الداخلي أو الشعور بالملل كأنك مراقب خارجي محايد. عندما تراقب موجة الدوبامين بهدوء دون مقاومة، فإنها غالباً ما تنحسر وتنطفئ خلال 3 إلى 5 دقائق، مما يتيح لك العودة بسلاسة إلى حالة الاستغراق الذهني.",
      "إن التدرب على إدراك الدوافع الداخلية ومراقبتها يحول علاقتنا بالأجهزة الرقمية من رد فعل اندفاعي إلى خيار واعٍ ومدروس. ولمن يسعون إلى وضع حدود واضحة تحد من تفقد الهاتف باندفاع خلال أوقات الدراسة أو العمل، يتيح تطبيق Limitra App Block تحديد حدود زمنية يومية مستقلة لكل تطبيق محدد للمساعدة في حماية التركيز الذهني."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "التحكم في وقت الشاشة",
    date: "2026-10-10",
    readTime: "6 دقائق",
    featured: false,
    tags: [
      "ركوب أمواج الرغبة",
      "قاعدة 10 دقائق",
      "نير إيال",
      "محفزات داخلية",
      "آلان مارلات",
      "التحكم في وقت الشاشة",
      "Limitra App Block"
    ]
  },
  id: {
    id: "102",
    slug: "urge-surfing-dan-aturan-10-menit-menghentikan-refleks-membuka-ponsel",
    title: "Urge Surfing dan Aturan 10 Menit: Menghentikan Refleks Impulsif Membuka Ponsel",
    summary: "Alasan utama kita membuka ponsel saat sedang bekerja bukanlah teknologinya, melainkan refleks untuk lari dari ketidaknyamanan mental. Analisis pemicu internal Nir Eyal dan protokol klinis Dr. Alan Marlatt.",
    content: [
      "Saat sedang menulis laporan, belajar, atau menangani tugas analisis yang rumit, banyak orang tiba-tiba menyadari bahwa mereka telah membuka kunci ponsel dan sedang menggulir media sosial tanpa sadar. Keinginan ini jarang sekali dipicu oleh getaran atau notifikasi yang masuk; bahkan saat perangkat dibisukan sepenuhnya, pikiran seolah ditarik ke arah layar oleh dorongan tak kasat mata. Sebagian besar menganggapnya sebagai tanda kelemahan tekad. Namun, sebagaimana dibuktikan oleh pakar perilaku Nir Eyal dalam bukunya 'Indistractable', akar penyebab gangguan bukanlah pemicu eksternal, melainkan dorongan alami otak untuk melarikan diri dari emosi yang tidak nyaman.",
      "Berdasarkan psikologi evolusioner, otak manusia terus-menerus berusaha mempertahankan homeostasis atau keseimbangan internal. Sama seperti tubuh yang menggigil saat kedinginan atau mencari makanan saat lapar untuk menghilangkan ketidaknyamanan fisik, pikiran juga langsung mencari pelarian saat dihadapkan pada rasa bosan, ketidakpastian, kelelahan, atau resistensi kognitif terhadap tugas yang berat. Ponsel pintar telah menjadi penenang emosional paling instan dalam sejarah untuk menghadapi 'pemicu internal' (internal triggers) ini. Saat Anda menemui kebuntuan dalam berpikir, otak memilih jalan pintas berupa dopamin mudah di layar daripada bertahan dengan tantangan tersebut.",
      "Mencoba menekan dorongan ini secara paksa dengan berkata 'saya tidak boleh melihatnya sama sekali' justru memicu apa yang disebut psikolog sebagai 'teori proses ironis' (efek beruang putih), di mana penolakan keras malah memperbesar keinginan di dalam pikiran. Untuk memutus siklus ini, Eyal merekomendasikan metode 'Urge Surfing' (berselancar di atas dorongan) yang dipelopori oleh psikolog klinis Dr. G. Alan Marlatt di Universitas Washington. Penelitian klinis Marlatt membuktikan bahwa dorongan impulsif tidak meningkat tanpa batas; ia bekerja persis seperti ombak di laut. Dorongan itu muncul, mencapai puncaknya dalam beberapa menit, dan jika tidak dituruti, akan mereda dengan sendirinya.",
      "Penerapan praktis dari wawasan ini dikenal sebagai 'Aturan 10 Menit'. Ketika Anda merasakan dorongan kuat untuk mengambil ponsel di tengah-tengah pekerjaan, jangan melarang diri Anda sepenuhnya karena larangan mutlak hanya memperkuat godaan. Buatlah kesepakatan sederhana: 'Saya boleh melihat ponsel, tetapi bukan sekarang; saya akan menunggu tepat 10 menit'. Selama jeda 10 menit itu, amati rasa gelisah atau kebosanan Anda sebagai pengamat yang netral tanpa menghakiminya. Dengan mengamati gelombang hasrat tersebut, lonjakan dopamin biasanya akan surut dalam waktu tiga hingga lima menit, sehingga Anda dapat kembali ke fokus mendalam tanpa hambatan.",
      "Belajar menyadari dan mengamati dorongan internal mengubah interaksi kita dengan perangkat digital dari paksaan reaktif menjadi keputusan sadar. Bagi mereka yang ingin membangun batasan terstruktur terhadap kebiasaan impulsif mengecek ponsel selama jam kerja atau belajar, Limitra App Block memungkinkan pengaturan batas waktu harian independen untuk setiap aplikasi yang dipilih guna membantu menjaga kejernihan fokus."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Kontrol Waktu Layar",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Urge Surfing",
      "Aturan 10 Menit",
      "Nir Eyal",
      "Pemicu Internal",
      "Alan Marlatt",
      "Kontrol Waktu Layar",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "102",
    slug: "urge-surfing-at-ang-10-minutong-tuntunin-sa-pagkontrol-ng-telepono",
    title: "Urge Surfing at ang 10-Minutong Tuntunin: Pagpigil sa Kusang Paghawak sa Telepono",
    summary: "Ang tunay na dahilan kung bakit bigla nating hinahawakan ang telepono habang nagtatrabaho ay hindi ang teknolohiya, kundi ang pagnanais na takasan ang mental na pagkabalisa. Pagsusuri sa mga panloob na gatilyo ni Nir Eyal at ng protokol ni Dr. Alan Marlatt.",
    content: [
      "Habang naghahanda ng ulat, nag-aaral, o gumagawa ng mahirap na gawain, marami sa atin ang bigla na lamang namamamalayan na binubuksan na ang telepono at nag-i-scroll sa social media. Bihirang magmula ang simbuyong ito sa tunog o pumasok na notification; kahit tahimik ang cellphone, tila hinihila pa rin ang isip patungo sa screen. Kadalasang itinuturing ito bilang kawalan ng disiplina sa sarili. Ngunit tulad ng pinatunayan ng behavioral designer na si Nir Eyal sa kanyang librong 'Indistractable', ang ugat ng pagkaabala ay hindi nanggagaling sa labas, kundi sa likas na kagustuhan ng utak na takasan ang mga hindi komportableng damdamin.",
      "Ayon sa evolutionary psychology, patuloy na naghahanap ng balance o homeostasis ang utak ng tao. Kung paanong nanginginig ang katawan sa ginaw o naghahanap ng pagkain kapag nagugutom upang mapawi ang pisikal na hirap, naghahanap din ang isip ng agarang labasan kapag nakaranas ng pagkabagot, pagkalito, pagod, o hirap sa pag-iisip sa isang masalimuot na gawain. Naging pinakamadaling emosyonal na pampakalma ang smartphone laban sa mga 'panloob na gatilyo' (internal triggers) na ito. Sa sandaling mahirapan ka sa pagbubuo ng ideya, mas pinipili ng utak ang mabilis na dopamin sa telepono kaysa harapin ang hirap ng pag-iisip.",
      "Ang pilit na pagpigil sa simbuyong ito sa pamamagitan ng pagsasabing 'hinding-hindi ko ito titingnan' ay madalas nagdudulot ng 'ironic process theory' (ang epekto ng puting oso), kung saan ang labis na pagbabawal ay lalo lamang nagpapaigting sa pagnanasa. Upang buwagin ang siklong ito, iminungkahi ni Eyal ang 'Urge Surfing' (pagsakay sa alon ng pagnanasa) na binuo ng clinical psychologist na si Dr. G. Alan Marlatt sa University of Washington. Pinatunayan sa mga pag-aaral ni Marlatt na ang mapusok na pagnanasa ay hindi tuloy-tuloy na tumataas; kumikilos ito tulad ng alon sa dagat. Nagsisimula ito, umaabot sa tuktok sa loob ng ilang minuto, at kusang humuhupa kung hindi agad susundin.",
      "Ang praktikal na pagsasabuhay nito ay tinatawag na '10-Minutong Tuntunin'. Kapag naramdaman mo ang udyok na abutin ang telepono habang abala sa gawain, huwag ipagbawal nang tuluyan sa sarili ang pagtingin, dahil ang bawal ay lalong nagiging kaakit-akit. Sa halip, sundin ang patakarang ito: 'Maaari kong tingnan ang telepono, ngunit hindi ngayon; maghihintay ako nang eksaktong 10 minuto'. Sa loob ng panahong ito, alisin ang kamay sa device at pagmasdan ang nararamdamang pagkainip nang walang paghuhusga. Sa panonood lamang sa alon ng pagnanasa, karaniwang humuhupa ang bugso ng dopamin sa loob ng tatlo hanggang limang minuto, na nagbibigay-daan upang makabalik ka nang maayos sa malalim na pokus.",
      "Ang pagkatutong kumilala at magbantay sa sariling panloob na udyok ay nagbabago sa ating paggamit ng teknolohiya mula sa pagiging mapusok tungo sa may malay na desisyon. Para sa mga nais maglagay ng malinaw na hangganan laban sa pabigla-biglang paggamit ng telepono sa oras ng trabaho o pag-aaral, nagbibigay-daan ang Limitra App Block na magtakda ng hiwalay na pang-araw-araw na limitasyon sa oras para sa mga piling application upang makatulong sa pagpapanatili ng konsentrasyon."
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "Kontrol sa Screen Time",
    date: "2026-10-10",
    readTime: "6 min",
    featured: false,
    tags: [
      "Urge Surfing",
      "10-Minutong Tuntunin",
      "Nir Eyal",
      "Panloob na Gatilyo",
      "Alan Marlatt",
      "Kontrol sa Screen Time",
      "Limitra App Block"
    ]
  },
  th: {
    id: "102",
    slug: "kan-to-khluen-khwam-yak-lae-kot-10-nathi-yut-phrittikam-yip-thorasap-doi-mai-ru-tua",
    title: "การโต้คลื่นความอยากและกฎ 10 นาที: หยุดพฤติกรรมหยิบโทรศัพท์ขึ้นมาดูโดยไม่รู้ตัว",
    summary: "ต้นเหตุที่แท้จริงของการหยิบโทรศัพท์ขึ้นมาดูขณะทำงานไม่ใช่เทคโนโลยี แต่เป็นปฏิกิริยาอัตโนมัติในการหลบหนีความไม่สบายใจทางอารมณ์ บทวิเคราะห์สิ่งเร้าภายในของ Nir Eyal และระเบียบปฏิบัติ Urge Surfing ของ ดร. Alan Marlatt",
    content: [
      "ขณะกำลังร่างรายงาน ทบทวนบทเรียน หรือทำงานที่ต้องใช้ความคิดเชิงวิเคราะห์อย่างหนัก หลายคนมักพบว่าตนเองเผลอปลดล็อกโทรศัพท์และเลื่อนดูฟีดโซเชียลมีเดียไปแล้วโดยไม่รู้ตัว แรงกระตุ้นนี้แทบไม่ได้เกิดขึ้นจากเสียงเรียกเข้าหรือการแจ้งเตือนที่ดังขึ้น แม้ว่าจะปิดเสียงอุปกรณ์ไว้อย่างสมบูรณ์ จิตใจกลับยังคงถูกดึงดูดเข้าหาหน้าจอเหมือนมีเส้นเชือกที่มองไม่เห็น หลายคนมักมองว่านี่คือความอ่อนแอของจิตใจหรือการเสพติดหน้าจอ ทว่าดังที่ Nir Eyal นักออกแบบพฤติกรรมได้อธิบายไว้ในหนังสือ 'Indistractable' ต้นตอที่แท้จริงของการเสียสมาธิไม่ได้มาจากสิ่งเร้าภายนอก แต่เกิดจากกลไกของสมองที่พยายามหลบหนีจากอารมณ์ที่ไม่น่าพึงใจ",
      "จิตวิทยาเชิงวิวัฒนาการชี้ว่า สมองของมนุษย์พยายามรักษาสภาวะสมดุล (homeostasis) อยู่เสมอ เช่นเดียวกับที่ร่างกายจะสั่นเมื่อเผชิญความหนาวหรือมองหาอาหารเมื่อหิวเพื่อคลายความไม่สบายทางกาย จิตใจก็ต้องการทางออกทันทีเมื่อเผชิญกับความเบื่อหน่าย ความไม่แน่ใจ ความเหนื่อยล้า หรือแรงต้านทานทางความคิดเมื่อเจองานที่ซับซ้อน สมาร์ทโฟนได้กลายเป็นเครื่องมือปลอบประโลมอารมณ์ที่เข้าถึงได้ง่ายที่สุดในประวัติศาสตร์เพื่อตอบสนองต่อ 'สิ่งเร้าภายใน' (internal triggers) เหล่านี้ ในวินาทีที่คุณติดขัดกับประโยคที่เขียนยาก สมองจะเลือกหนีไปหาโดปามีนที่ได้มาอย่างง่ายดายบนหน้าจอแทนที่จะทนอยู่กับความยากลำบากทางความคิด",
      "การพยายามสะกดกลั้นแรงขับนี้ด้วยการสั่งตัวเองว่า 'ห้ามดูเด็ดขาด' มักก่อให้เกิดสิ่งที่นักจิตวิทยาเรียกว่า 'ทฤษฎีกระบวนการย้อนแย้ง' (ironic process theory หรือ ปรากฏการณ์หมีขาว) ซึ่งการสั่งห้ามกลับยิ่งทำให้ความปรารถนานั้นทวีความรุนแรงขึ้น เพื่อแก้ปัญหานี้ Eyal แนะนำให้ใช้เทคนิค 'Urge Surfing' (การโต้คลื่นความอยาก) ซึ่งคิดค้นโดย ดร. G. Alan Marlatt นักจิตวิทยาคลินิกแห่งศูนย์วิจัยพฤติกรรมเสพติด มหาวิทยาลัยวอชิงตัน งานวิจัยของ Marlatt พิสูจน์แล้วว่าความอยากที่พุ่งขึ้นมาไม่ได้เพิ่มขึ้นอย่างไม่มีที่สิ้นสุด แต่มันมีลักษณะเหมือนคลื่นในมหาสมุทร คลื่นความอยากจะก่อตัวขึ้น ถึงจุดสูงสุดภายในไม่กี่นาที และหากเราไม่ตอบสนองต่อมัน มันจะสลายตัวไปเองตามกลไกทางระบบประสาท",
      "การนำหลักการนี้ไปใช้จริงเรียกว่า 'กฎ 10 นาที' เมื่อคุณรู้สึกอยากหยิบโทรศัพท์ขึ้นมาดูขณะกำลังทำงาน อย่าสั่งห้ามตัวเองอย่างเด็ดขาดเพราะข้อห้ามจะยิ่งกระตุ้นความอยาก แต่ให้สร้างข้อตกลงง่ายๆ กับตัวเองว่า 'ฉันดูโทรศัพท์ได้ แต่ไม่ใช่ตอนนี้ ฉันจะรออีก 10 นาทีพอดี' ในช่วงเวลา 10 นาทีนี้ ให้ละมือออกจากอุปกรณ์และเฝ้าสังเกตความกระวนกระวายหรือความเบื่อหน่ายนั้นในฐานะผู้สังเกตการณ์ที่เป็นกลาง เมื่อคุณเฝ้ามองคลื่นความอยากโดยไม่ลงมือทำ คลื่นโดปามีนมักจะสงบลงเองภายใน 3 ถึง 5 นาที ทำให้คุณสามารถกลับเข้าสู่สมาธิในการทำงานได้อย่างราบรื่น",
      "การเรียนรู้ที่จะตระหนักรู้และเฝ้าสังเกตแรงกระตุ้นภายในช่วยเปลี่ยนความสัมพันธ์ของเรากับอุปกรณ์ดิจิทัลจากการถูกครอบงำด้วยปฏิกิริยาตอบสนองมาเป็นการควบคุมอย่างมีสติ สำหรับผู้ที่ต้องการกำหนดขอบเขตที่ชัดเจนเพื่อลดพฤติกรรมหยิบโทรศัพท์ขึ้นมาดูโดยไม่ตั้งใจระหว่างการเรียนหรือการทำงาน Limitra App Block ช่วยให้คุณสามารถตั้งค่าจำกัดเวลาการใช้งานรายวันแยกสำหรับแต่ละแอปพลิเคชันที่เลือก เพื่อช่วยรักษาความจดจ่อทางจิตใจ"
    ],
    source: "Nir Eyal (Indistractable) & Dr. Alan Marlatt Dürtü Sörfü Araştırması",
    sourceUrl: "https://www.nirandfar.com/indistractable/",
    category: "การควบคุมเวลาหน้าจอ",
    date: "2026-10-10",
    readTime: "6 นาที",
    featured: false,
    tags: [
      "Urge Surfing",
      "กฎ 10 นาที",
      "Nir Eyal",
      "สิ่งเร้าภายใน",
      "Alan Marlatt",
      "การควบคุมเวลาหน้าจอ",
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
  
  // If article 102 already exists, remove it first to avoid duplicates
  const filtered = data.filter(item => item.id !== '102');
  
  // Prepend article 102 to the top of the list
  const updated = [articles[lang], ...filtered];
  
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2) + '\n', 'utf8');
  console.log(`[add-article-102] ${filename} güncellendi (toplam: ${updated.length})`);
}

console.log('[add-article-102] 11 dilde Makale 102 başarıyla eklendi.');
