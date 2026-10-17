import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articleData = {
  tr: {
    id: "111",
    slug: "marcus-aurelius-ve-epiktetos-icsel-kale-ile-algoritmik-dikkat-kontrolu",
    title: "Marcus Aurelius ve Epiktetos'un 'İçsel Kale'si: Algoritmik Dikkat Gasbına Karşı Stoacı Savunma Protokolü",
    summary: "Antik Stoacı felsefenin dikkat (prosochē) ve irade (prohairesis) öğretisi ile modern bilişsel nörobilimin kesişimi: Marcus Aurelius'un 'İçsel Kale'si, Epiktetos'un 'Kontrol İkiliği' ve bildirim döngülerini kıran 3 aşamalı zihinsel direnç protokolü.",
    content: [
      "Modern akıllı telefonlar ve algoritmik sosyal akışlar, insan beyninin bilişsel mimarisini derinlemesine zorlayan bir dikkat savaşı yürütüyor. Bilişsel nörobilimde insan dikkati iki temel ağ üzerinden işler: Prefrontal korteksin yönettiği, hedef odaklı ve bilinçli 'yukarıdan aşağıya' (top-down) yürütücü dikkat ağı ile çevredeki beklenmedik görsel ya da işitsel ipuçlarına refleksif olarak yönelen 'aşağıdan yukarıya' (bottom-up) belirginlik ağı (salience network). Sosyal ağ algoritmaları, değişken ödül aralıkları (variable reward schedules) ve ani kırmızı bildirim rozetleriyle beynin evrimsel yönelim tepkisini (orienting reflex) sürekli tetikler. Bu durum, bireyin bilinçli iradesini baypas ederek zihni reaktif, parçalanmış ve daima tetikte bir uyarılma haline hapseder.",
      "İki bin yıl önce Antik Roma ve Yunan'da Stoacı düşünürler, dijital algoritmalar henüz var olmadan çok önce, insan zihninin dışsal dürtüler karşısındaki kırılganlığını ve egemenliğini titizlikle incelemişti. Epiktetos, 'Söylevler' (Discourses) ve 'El Kitabı' (Encheiridion) adlı eserlerinde Stoacılığın temel direği olan 'Kontrol İkiliği' (Dichotomy of Control - Ta eph' hemin / Ta ouk eph' hemin) ilkesini formüle etti: Dünyada bazı şeyler bizim kontrolümüzdedir, bazıları ise değildir. Bildirimler, viral trendler, algoritma güncellemeleri ve başkalarının dijital tepkileri bütünüyle kontrolümüz dışındaki dışsal olgulardır; ancak dikkatimizi nereye odaklayacağımız, dürtülere onay verip vermeyeceğimiz (synkatathesis) ve iradi tercihimiz (prohairesis) tamamen bizim yetki alanımızdadır. Epiktetos'un uyardığı gibi: 'Biri bedenini yoldan geçen herhangi bir yabancıya teslim etseydi öfkeden deliye dönerdin; oysa sen en değerli varlığın olan zihnini, seni huzursuz edip dağıtsın diye karşına çıkan her rastgele uyarana teslim ediyorsun.'",
      "Stoacı İmparator Marcus Aurelius ise 'Kendime Düşünceler' (Meditations - Ta Eis Heauton) eserinde, Fransız felsefe tarihçisi Pierre Hadot'nun 'İçsel Kale' (The Inner Citadel) olarak adlandırdığı zihinsel egemenlik merkezini (Hegemonikon) tanımlar. Marcus Aurelius'a göre zihin, maruz kaldığı düşüncelerin ve uyaranların rengine bürünür; eğer kapıları korumasız bırakılırsa, dış dünyanın kargaşası kaleyi içeriden fetheder. Modern nörobilim, Marcus Aurelius'un bu gözlemini doğrulamaktadır: Beyin nöroplastisite ilkesi gereği sürekli maruz kaldığı sığ, parçalı ve hızlı uyaranlara göre sinaptik yollarını yeniden şekillendirir. Gün boyu pasif olarak sonsuz akış kaydıran bir zihin, derinleşme ve odaklanma yetisini biyolojik olarak kaybeder; içsel kalenin yönetici merkezi zaafa uğrar.",
      "Stoacılar bu zihinsel aşınmayı önlemek için 'Prosochē' (sürekli uyanık dikkat) adını verdikleri bir zihinsel duraklama pratiği geliştirdiler. Epiktetos, beliren her ani arzuya karşı şu protokolü emreder: 'Ey izlenim, dur! Sen sadece bir hayalsin, temsil ettiğin nesnenin kendisi değilsin; bekle, seni test etmeme izin ver.' Modern bilişsel davranışçı psikolojide Viktor Frankl'ın 'uyaran ile tepki arasındaki boşluk' olarak tarif ettiği bu ilke, günümüzde akıllı telefon bağımlılığına karşı 3 somut adıma dönüştürülebilir: 1) Duraklama ve Test (telefona uzanma refleksi belirdiğinde ekrana dokunmadan önce 10 saniye bekleyip dürtünün mekanik doğasını gözlemlemek), 2) Kontrol İkiliği Süzgeci (ekrandaki içeriğin kontrol edilemez bir dış gürültü olduğunu kabul edip içsel onayı geri çekmek), 3) Çevresel Sınır Mimarisi (içsel kaleyi korumak için dışsal kural ve engeller inşa etmek).",
      "Marcus Aurelius'un hatırlattığı gibi, yorgun bir zihnin algoritmik akıntılara karşı tek başına iradeyle direnmesi güçtür; bu nedenle zihinsel kaleyi destekleyecek net dış kurallar gerekir. Limitra App Block, seçilen uygulamalara bağımsız günlük kullanım süresi limitleri belirlemeyi ve süre dolduğunda ya da kısıtlı saat aralığında ekrana Stoacı metinler içeren kilit kartı bindirerek anlık dürtüyü kesintiye uğratmayı sağlıyor; böylece kullanıcının bilinçli duraklama anını yakalamasına ve dikkat kontrolünü korumasına yardımcı oluyor."
    ],
    source: "Marcus Aurelius (Kendime Düşünceler), Epiktetos (Söylevler) & Pierre Hadot (The Inner Citadel)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Ekran Süresi Kontrolü",
    date: "2026-10-17",
    readTime: "6 dk",
    featured: false,
    tags: [
      "Marcus Aurelius",
      "Epiktetos",
      "İçsel Kale",
      "Stoacı Felsefe",
      "Kontrol İkiliği",
      "Ekran Süresi Kontrolü",
      "Limitra App Block"
    ]
  },
  en: {
    id: "111",
    slug: "marcus-aurelius-and-epictetus-the-inner-citadel-and-algorithmic-attention",
    title: "The 'Inner Citadel' of Marcus Aurelius and Epictetus: A Stoic Defense Against Algorithmic Attention Hijacking",
    summary: "The convergence of ancient Stoic mindfulness (prosochē) and executive choice (prohairesis) with modern cognitive neuroscience: Marcus Aurelius's 'Inner Citadel', Epictetus's 'Dichotomy of Control', and a 3-stage mental protocol against addictive digital loops.",
    content: [
      "Modern smartphones and algorithmic feeds wage an unrelenting war against the cognitive architecture of the human mind. In cognitive neuroscience, human attention operates through two primary networks: the goal-driven, voluntary 'top-down' executive network orchestrated by the prefrontal cortex, and the stimulus-driven, reflexive 'bottom-up' salience network. Social media algorithms, engineered around variable reward schedules and sudden badge alerts, systematically exploit the brain's evolutionary orienting reflex. By constantly triggering bottom-up capture, they bypass deliberate intention and trap the user in a chronic state of reactive, fragmented vigilance.",
      "Two millennia before the dawn of digital algorithms, Stoic philosophers in ancient Rome and Greece dissected the fragile autonomy of the human mind with clinical precision. In his 'Discourses' and the 'Encheiridion', Epictetus formulated the foundational bedrock of Stoic discipline: the Dichotomy of Control (Ta eph' hemin vs. Ta ouk eph' hemin). Some things are within our power, while others are entirely outside it. Algorithmic notifications, viral trends, platform redesigns, and the validation of online crowds belong strictly to the realm of externals beyond our direct command. What remains sovereign is our faculty of judgment, our deliberate choice (prohairesis), and our power of assent (synkatathesis). As Epictetus famously warned: 'If someone handed your body over to any passerby, you would be furious; yet you hand over your mind to anyone who happens along, to be disturbed and confounded.'",
      "In his personal reflections ('Meditations' - Ta Eis Heauton), the Roman Emperor Marcus Aurelius developed the concept that French philosopher Pierre Hadot famously conceptualized as the 'Inner Citadel' (The Hegemonikon, or ruling center). Marcus observed that the mind takes on the color of its ongoing thoughts and impressions; if the gates of the citadel are left unguarded, external chaos breaches the walls and subjugates the rational core. Modern neuroscience validates this insight through neuroplasticity: the brain physically reorganizes its synaptic pathways around the patterns of stimulation it repeatedly encounters. Spending hours each day in passive, rapid-fire scrolling physically diminishes the prefrontal cortex's capacity for sustained deep focus, eroding the very fortress of cognitive independence.",
      "To counter this progressive mental erosion, the Stoics practiced 'Prosochē'—an attitude of continuous, vigilant awareness directed inward. Epictetus prescribed an active cognitive pause whenever a sudden impulse arose: 'Do not let the force of the impression carry you away, but say: Wait for me a little, impression; let me see what you are and what you represent; let me test you.' In modern cognitive behavioral therapy, echoing Viktor Frankl's insight on the gap between stimulus and response, this ancient exercise translates into a practical 3-step digital defense: 1) Pause and Test (pausing for 10 seconds when the impulse to unlock the phone strikes, observing the mechanical nature of the craving), 2) Filter Through the Dichotomy of Control (acknowledging digital feeds as external noise and refusing to grant them inner emotional assent), and 3) Environmental Architecture (erecting deliberate external barriers to defend the inner fortress).",
      "As Marcus Aurelius recognized, relying on raw willpower against a continuous siege is biologically precarious; safeguarding the inner citadel requires reliable external boundaries. Limitra App Block enables users to set independent daily time limits on selected applications and superimposes a lock screen featuring Stoic reflections whenever limits are reached or scheduled quiet hours begin, interrupting impulsive loops and restoring deliberate control over personal attention."
    ],
    source: "Marcus Aurelius (Meditations), Epictetus (Discourses) & Pierre Hadot (The Inner Citadel)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Screen Time Control",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marcus Aurelius",
      "Epictetus",
      "Inner Citadel",
      "Stoic Philosophy",
      "Dichotomy of Control",
      "Screen Time Control",
      "Limitra App Block"
    ]
  },
  es: {
    id: "111",
    slug: "marcus-aurelio-y-epicteto-la-ciudadela-interior-y-la-atencion-frente-a-algoritmos",
    title: "La 'Ciudadela Interior' de Marco Aurelio y Epicteto: Protocolo Estoico Frente al Secuestro Algorítmico de la Atención",
    summary: "La convergencia entre la atención plena estoica (prosochē) y la neurociencia cognitiva moderna: la 'Ciudadela Interior' de Marco Aurelio, la 'Dicotomía del Control' de Epicteto y un protocolo de 3 pasos frente a las trampas digitales.",
    content: [
      "Los teléfonos inteligentes modernos y los flujos algorítmicos libran una batalla constante contra la arquitectura cognitiva del cerebro humano. En neurociencia cognitiva, la atención humana opera a través de dos redes principales: la red ejecutiva 'de arriba hacia abajo' (top-down), deliberada y orientada a metas bajo el mando de la corteza prefrontal, y la red de saliencia 'de abajo hacia arriba' (bottom-up), refleja y guiada por estímulos sensoriales inesperados. Los algoritmos de las redes sociales, fundamentados en programas de recompensa variable y notificaciones visuales inmediatas, activan sistemáticamente el reflejo de orientación evolutivo. Esta captura refleja elude la voluntad consciente del usuario y lo confina en un estado permanente de alerta reactiva y fragmentada.",
      "Dos milenios antes de la era de los algoritmos digitales, los filósofos estoicos de la antigua Roma y Grecia examinaron con asombrosa lucidez la fragilidad de la mente humana ante los impulsos externos. En sus 'Disertaciones' y en el 'Enquiridión', Epicteto formuló el principio capital del estoicismo: la Dicotomía del Control (Ta eph' hemin frente a Ta ouk eph' hemin). En la vida, ciertas cosas están bajo nuestro control absoluto, mientras que otras escapan por completo a él. Las notificaciones, las tendencias virales, los cambios de interfaz y la aprobación de terceros en redes son factores externos ajenos a nuestra potestad. Lo único que nos pertenece incondicionalmente es nuestra capacidad de juicio, nuestra elección deliberada (prohairesis) y nuestro asentimiento consciente (synkatathesis). Como advirtió Epicteto: 'Si alguien entregara tu cuerpo al primer transeúnte que se cruzara, arderías en ira; sin embargo, entregas tu mente a cualquier estímulo casual para que la turbe y confunda.'",
      "Por su parte, el emperador Marco Aurelio, en sus 'Meditaciones' (Ta Eis Heauton), profundizó en la noción que el filósofo Pierre Hadot bautizó célebremente como la 'Ciudadela Interior' (el Hegemonikon, o principio rector de la mente). Marco Aurelio comprendió que el alma adquiere el tinte de las impresiones a las que se expone; si las puertas de la fortaleza quedan desprotegidas, el tumulto exterior conquista el centro de mando. La neurociencia moderna ratifica plenamente este principio a través de la plasticidad sináptica: el cerebro remodela sus conexiones en función de los estímulos rápidos y fragmentados que recibe a diario. Deslizar feeds interminables de forma pasiva debilita progresivamente la capacidad prefrontal de sostener una atención profunda, desmantelando la soberanía cognitiva.",
      "Para frenar este desgaste mental, los estoicos practicaban la 'Prosochē' (una atención vigilante y continua dirigida hacia el propio interior). Epicteto prescribía una pausa deliberada ante cada impulso repentino: 'Detente, impresión; permíteme ver qué eres y qué representas; déjame ponerte a prueba.' En la psicología cognitiva contemporánea, en consonancia con la célebre premisa de Viktor Frankl sobre el espacio que media entre el estímulo y la respuesta, esta sabiduría se materializa en un protocolo digital de 3 fases: 1) Pausa y comprobación (esperar diez segundos antes de tocar la pantalla al sentir el impulso de desbloquear, examinando la naturaleza refleja del deseo), 2) Filtro de la dicotomía del control (reconocer que el flujo digital es ruido ajeno y retirar el asentimiento emocional interno), y 3) Arquitectura de barreras externas (establecer límites deliberados para salvaguardar la fortaleza mental).",
      "Como bien discernió Marco Aurelio, pretender resistir un asedio continuo valiéndose únicamente de la fuerza de voluntad es una trampa biológica; blindar la ciudadela interior exige límites externos confiables. Limitra App Block permite fijar límites diarios independientes de tiempo para aplicaciones seleccionadas y superpone una pantalla de bloqueo con citas de reflexión estoica al agotarse el tiempo o durante horarios restringidos, quebrando los hábitos mecánicos y ayudando a restablecer la serenidad y el dominio consciente sobre la propia atención."
    ],
    source: "Marco Aurelio (Meditaciones), Epicteto (Disertaciones) y Pierre Hadot (La Ciudadela Interior)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Control de Tiempo en Pantalla",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marco Aurelio",
      "Epicteto",
      "Ciudadela Interior",
      "Filosofía Estoica",
      "Dicotomía del Control",
      "Control de Tiempo en Pantalla",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "111",
    slug: "marc-aurele-et-epictete-la-citadelle-interieure-et-l-attention-face-aux-algorithmes",
    title: "La 'Citadelle Intérieure' de Marc Aurèle et Épictète : Protocole Stoïcien Contre le Détournement Algorithmique de l'Attention",
    summary: "La rencontre entre la vigilance stoïcienne (prosochē) et les neurosciences cognitives modernes : la 'Citadelle Intérieure' de Marc Aurèle, la 'Dichotomie du Contrôle' d'Épictète et un protocole en 3 étapes face aux stimuli numériques.",
    content: [
      "Les téléphones intelligents et les flux algorithmiques modernes mènent une offensive continue contre l'architecture cognitive du cerveau humain. En neurosciences cognitives, l'attention mobilise deux réseaux distincts : le réseau exécutif volontaire et descendant (top-down), dirigé par le cortex préfrontal vers des objectifs conscients, et le réseau de saillance ascendant (bottom-up), déclenché de manière réflexe par les stimuli environnementaux inattendus. Les algorithmes des plateformes sociales, conçus autour de programmes de récompense variable et de notifications visuelles intempestives, sollicitent sans relâche le réflexe d'orientation ancestral de l'être humain. Ce piratage attentionnel contourne la volonté délibérée et installe l'utilisateur dans une vigilance réactive et morcelée.",
      "Deux mille ans avant l'avènement des algorithmes numériques, les philosophes stoïciens de la Grèce et de la Rome antiques analysaient déjà avec une acuité remarquable la vulnérabilité de l'esprit face aux sollicitations extérieures. Dans ses 'Entretiens' et son 'Manuel', Épictète a formalisé la pierre angulaire de l'éthique stoïcienne : la Dichotomie du Contrôle (Ta eph' hemin contre Ta ouk eph' hemin). Certaines choses dépendent de nous, tandis que d'autres n'en dépendent pas. Les notifications incessantes, les tendances éphémères, les mises à jour algorithmiques et le jugement d'autrui sur les réseaux sont des facteurs extérieurs échappant à notre maîtrise directe. Seuls notre jugement, notre libre choix rationnel (prohairesis) et notre assentiment (synkatathesis) demeurent sous notre souveraineté. Comme l'affirmait Épictète : 'Si l'on confiait ton corps au premier venu, tu serais hors de toi ; pourtant, tu livres ton esprit au premier solliciteur venu pour qu'il le trouble et le disperse.'",
      "Dans ses 'Pensées pour moi-même' (Ta Eis Heauton), l'empereur romain Marc Aurèle a approfondi le concept magnifiquement mis en lumière par l'historien Pierre Hadot : la 'Citadelle Intérieure' (l'Hêgemonikon, ou principe directeur de l'âme). Pour Marc Aurèle, l'âme s'imprègne de la teinte de ses pensées récurrentes ; si les remparts de la forteresse ne sont pas gardés avec vigilance, le tumulte extérieur investit le centre décisionnel. Les neurosciences contemporaines confirment pleinement cette métaphore grâce au principe de plasticité cérébrale : le cerveau reconfigure ses réseaux synaptiques au gré des stimulations fugaces et superficielles qu'il subit quotidiennement. Le défilement passif prolongé érode la capacité préfrontale de concentration soutenue, affaiblissant ainsi le bastion de l'autonomie intellectuelle.",
      "Afin d'endiguer cette dégradation de l'esprit, les stoïciens s'adonnaient à la 'Prosochē'—une attention lucide, constante et rigoureuse portée sur le centre directeur intérieur. Épictète recommandait d'instaurer une halte immédiate face à toute impulsion subite : 'Arrête-toi, représentation ; laisse-moi voir ce que tu es et ce que tu représentes ; permets-moi de te mettre à l'épreuve.' En psychologie cognitive moderne, en écho à l'espace entre le stimulus et la réponse décrit par Viktor Frankl, cette pratique se traduit par un protocole numérique en 3 étapes : 1) La pause réflexive (attendre dix secondes dès que l'envie machinale de déverrouiller l'écran surgit, afin d'observer la nature mécanique de l'impulsion), 2) Le tri par la dichotomie du contrôle (reconnaître que les flux numériques constituent un bruit extérieur et leur refuser tout assentiment émotionnel), et 3) L'architecture environnementale (ériger des barrières tangibles pour protéger la forteresse mentale).",
      "Comme le rappelait Marc Aurèle, compter sur la seule force de volonté pour repousser un siège permanent constitue une illusion biologique ; préserver sa citadelle intérieure requiert des garde-fous externes fiables. Limitra App Block permet d'assigner des plafonds de temps quotidiens indépendants pour chaque application ciblée et affiche un écran de verrouillage empreint de réflexions stoïciennes dès que la limite est atteinte ou durant les plages horaires sanctuarisées, interrompant les automatismes compulsifs et aidant à reconquérir une attention souveraine."
    ],
    source: "Marc Aurèle (Pensées pour moi-même), Épictète (Entretiens) et Pierre Hadot (La Citadelle Intérieure)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Contrôle du Temps d'Écran",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marc Aurèle",
      "Épictète",
      "Citadelle Intérieure",
      "Philosophie Stoïcienne",
      "Dichotomie du Contrôle",
      "Contrôle du Temps d'Écran",
      "Limitra App Block"
    ]
  },
  de: {
    id: "111",
    slug: "marc-aurel-und-epiktet-die-innere-burg-und-aufmerksamkeit-gegen-algorithmen",
    title: "Die 'Innere Burg' von Marc Aurel und Epiktet: Stoisches Schutzprotokoll Gegen den Algorithmischen Aufmerksamkeitsraub",
    summary: "Die Schnittstelle zwischen antiker stoischer Achtsamkeit (prosochē) und moderner kognitiver Neurowissenschaft: Marc Aurels 'Innere Burg', Epiktets 'Dichotomie der Kontrolle' und ein 3-stufiges mentales Schutzprotokoll gegen digitale Reizüberflutung.",
    content: [
      "Moderne Smartphones und algorithmische Feeds führen einen permanenten Zermürbungskrieg gegen die kognitive Architektur des menschlichen Gehirns. In der kognitiven Neurowissenschaft wird Aufmerksamkeit über zwei interagierende Netzwerke gesteuert: das zielgerichtete, willentliche 'Top-down'-Kontrollnetzwerk des präfrontalen Kortex und das reizgesteuerte, reflexhafte 'Bottom-up'-Salienznetzwerk. Soziale Medien nutzen variable Belohnungspläne und auffällige optische Signale, um gezielt den evolutionären Orientierungsreflex des Menschen zu kapern. Dadurch wird die bewusste Willensentscheidung systematisch unterlaufen und das Bewusstsein in eine dauerhafte, reaktive Zerrissenheit gestürzt.",
      "Bereits vor zweitausend Jahren sezierten stoische Denker im antiken Griechenland und Rom die Anfälligkeit des menschlichen Geistes gegenüber äußeren Reizen mit verblüffender Schärfe. In seinen 'Lehrgesprächen' (Diatribai) und dem 'Handbüchlein' (Encheiridion) formulierte Epiktet das unverrückbare Fundament stoischer Lebensführung: die Dichotomie der Kontrolle (Ta eph' hemin versus Ta ouk eph' hemin). Einige Dinge liegen vollkommen in unserer Macht, andere hingegen entziehen sich ihr gänzlich. Benachrichtigungen, algorithmische Trends, Softwareänderungen und die Bestätigung fremder Personen sind äußere Gegebenheiten, die wir nicht unmittelbar beherrschen. Vollständig unter unserer Kontrolle stehen allein unser Urteilsvermögen, unsere bewusste Wahlfreiheit (prohairesis) und unsere innere Zustimmung (synkatathesis). Epiktet mahnte eindringlich: 'Würde jemand deinen Körper einem beliebigen Passanten übergeben, wärst du voller Empörung; doch deinen Geist lieferst du jedem zufälligen Reiz aus, damit er ihn verwirrt und zerstreut.'",
      "Der römische Kaiser Marc Aurel prägte in seinen 'Selbstbetrachtungen' (Ta Eis Heauton) das Konzept, das der Philosoph Pierre Hadot berühmt als die 'Innere Burg' (das Hegemonikon, die leitende Vernunft der Seele) beschrieb. Marc Aurel erkannte: Die Seele nimmt die Farbe der Gedanken an, mit denen sie sich dauerhaft umgibt. Lässt man die Burgtore unbewacht, übernimmt das äußere Chaos die Herrschaft im Inneren. Die moderne Neurowissenschaft bestätigt diese Erkenntnis durch das Prinzip der Neuroplastizität: Das Gehirn verdrahtet seine synaptischen Pfade gemäß den flüchtigen, fragmentierten Reizmengern, denen es ausgesetzt wird. Wer täglich stundenlang passiv durch algorithmische Feeds scrollt, schwächt die Fähigkeit des präfrontalen Kortex zu ausdauernder Konzentration und untergräbt die eigene geistige Souveränität.",
      "Um dieser geistigen Erosion entgegenzuwirken, praktizierten die Stoiker 'Prosochē'—eine ununterbrochene, wachsame Achtsamkeit auf das innere Steuerungszentrum. Epiktet empfahl bei jedem aufkeimenden Reiz ein bewusstes Innehalten: 'Halt ein, Sinneseindruck! Lass mich sehen, was du bist und was du darstellst; erlaube mir, dich zu prüfen.' In der kognitiven Verhaltenstherapie, in Anlehnung an Viktor Frankls Modell des Raums zwischen Reiz und Reaktion, lässt sich diese antike Übung in ein 3-stufiges digitales Schutzprotokoll überführen: 1) Innehalten und Prüfen (beim Impuls zum Griff nach dem Telefon zehn Sekunden verharren, um die mechanische Natur des Verlangens zu erkennen), 2) Filterung durch die Dichotomie der Kontrolle (den digitalen Strom als äußeres Rauschen einstufen und die emotionale Zustimmung verweigern) sowie 3) Strukturelle Schutzgrenzen (bewusste äußere Barrieren errichten, um die innere Festung zu sichern).",
      "Wie Marc Aurel betonte, ist die reine Willenskraft im Angesicht einer unablässigen Reizflut biologisch rasch erschöpft; die innere Burg bedarf deshalb verlässlicher äußerer Leitplanken. Limitra App Block ermöglicht es, für ausgewählte Anwendungen unabhängige tägliche Zeitkontingente festzulegen und bei Erreichen des Limits oder während festgelegter Ruhezeiten einen Sperrbildschirm mit stoischen Gedanken einzublenden, der impulsive Routinen unterbricht und die bewusste Kontrolle über die eigene Aufmerksamkeit unterstützt."
    ],
    source: "Marc Aurel (Selbstbetrachtungen), Epiktet (Lehrgespräche) & Pierre Hadot (Die innere Burg)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Bildschirmzeit-Kontrolle",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marc Aurel",
      "Epiktet",
      "Innere Burg",
      "Stoische Philosophie",
      "Dichotomie der Kontrolle",
      "Bildschirmzeit-Kontrolle",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "111",
    slug: "marco-aurelio-e-epicteto-a-cidadela-interior-e-a-atencao-contra-algoritmos",
    title: "A 'Cidadela Interior' de Marco Aurélio e Epicteto: Protocolo Estoico Contra o Sequestro Algorítmico da Atenção",
    summary: "A convergência entre a atenção plena estoica (prosochē) e a neurociência cognitiva moderna: a 'Cidadela Interior' de Marco Aurélio, a 'Dicotomia do Controle' de Epicteto e um protocolo prático de 3 etapas contra armadilhas digitais.",
    content: [
      "Os smartphones contemporâneos e os feeds algorítmicos travam uma batalha contínua contra a arquitetura cognitiva da mente humana. Na neurociência cognitiva, a atenção opera por meio de duas redes primárias: a rede executiva deliberada e descendente (top-down), comandada pelo córtex pré-frontal em direção a metas conscientes, e a rede de saliência ascendente (bottom-up), acionada de forma reflexa por estímulos visuais ou sonoros inesperados. Os algoritmos das plataformas sociais, estruturados em esquemas de reforço intermitente e notificações insistentes, exploram o reflexo de orientação biológico. Essa apropriação reflexiva contorna a vontade consciente e aprisiona o indivíduo em um estado crônico de vigilância reativa e fragmentada.",
      "Dois milênios antes da consolidação dos algoritmos digitais, pensadores estoicos na Grécia e em Roma investigaram a vulnerabilidade da mente humana diante de impulsos externos com rigor exemplar. Em seus 'Discursos' e no 'Enquirídio', Epicteto estabeleceu o pilar fundamental do estoicismo: a Dicotomia do Controle (Ta eph' hemin contra Ta ouk eph' hemin). Há coisas que estão inteiramente sob nosso poder e outras que fogem completamente a ele. Notificações, temas virais, atualizações de algoritmos e reações virtuais são eventos externos alheios à nossa vontade. Aquilo que permanece soberanamente nosso é a nossa faculdade de julgamento, a nossa escolha racional (prohairesis) e a nossa anuência consciente (synkatathesis). Como advertiu Epicteto: 'Se alguém entregasse o teu corpo a qualquer transeunte, ficarias furioso; no entanto, entregas a tua mente a qualquer estímulo casual para que a perturbe e desoriente.'",
      "Em suas 'Meditações' (Ta Eis Heauton), o imperador romano Marco Aurélio concebeu a ideia que o historiador Pierre Hadot consagrou como a 'Cidadela Interior' (o Hegemonikon, ou núcleo diretor da mente). Para Marco Aurélio, a mente adquire a tonalidade das impressões às quais é reiteradamente exposta; se os portões da fortaleza forem deixados desguarnecidos, o caos exterior invade o centro do comando racional. A neurociência contemporânea corrobora essa visão por meio da neuroplasticidade: o cérebro remodela suas vias sinápticas em conformidade com os estímulos velozes e superficiais que recebe. Rolar feeds intermináveis de modo passivo compromete a capacidade pré-frontal de concentração profunda, debilitando a fortaleza da autonomia cognitiva.",
      "Para deter esse desgaste psíquico, os estoicos praticavam a 'Prosochē'—uma atenção contínua e vigilante voltada para o próprio centro diretor. Epicteto prescrevia uma interrupção deliberada diante de impulsos súbitos: 'Para, impressão; deixa-me ver o que és e o que representas; permite-me testar-te.' Na psicologia cognitivo-comportamental, em sintonia com a reflexão de Viktor Frankl sobre o intervalo entre o estímulo e a resposta, esse exercício ancestral traduz-se em um protocolo de 3 etapas no ambiente digital: 1) Pausa e teste (aguardar dez segundos antes de desbloquear o aparelho ao sentir o impulso automático, observando a natureza mecânica da vontade), 2) Filtro da dicotomia do controle (reconhecer os feeds como ruído exterior e recusar o assentimento emocional interno) e 3) Arquitetura de barreiras externas (estabelecer limites prévios para resguardar a fortaleza interior).",
      "Como bem frisou Marco Aurélio, fiar-se apenas na força de vontade para resistir a um cerco ininterrupto é biologicamente frágil; blindar a cidadela interior requer limites externos consistentes. O Limitra App Block possibilita configurar limites diários independentes de tempo de uso para aplicativos selecionados e sobrepõe uma tela de bloqueio com citações estoicas ao término do tempo ou durante períodos restritos, interrompendo ciclos compulsivos e auxiliando na preservação do controle consciente sobre a atenção."
    ],
    source: "Marco Aurélio (Meditações), Epicteto (Discursos) e Pierre Hadot (A Cidadela Interior)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Controle de Tempo de Tela",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marco Aurélio",
      "Epicteto",
      "Cidadela Interior",
      "Filosofia Estoica",
      "Dicotomia do Controle",
      "Controle de Tempo de Tela",
      "Limitra App Block"
    ]
  },
  it: {
    id: "111",
    slug: "marco-aurelio-ed-epitteto-la-cittadella-interiore-e-l-attenzione-contro-gli-algoritmi",
    title: "La 'Cittadella Interiore' di Marco Aurelio ed Epitteto: Protocollo Stoico Contro il Sequestro Algoritmico dell'Attenzione",
    summary: "Il punto d'incontro tra la presenza mentale stoica (prosochē) e le neuroscienze cognitive moderne: la 'Cittadella Interiore' di Marco Aurelio, la 'Dicotomia del Controllo' di Epitteto e un protocollo in 3 fasi contro i loop digitali compulsivi.",
    content: [
      "Gli smartphone moderni e i feed algoritmici conducono un'offensiva incessante contro l'architettura cognitiva del cervello umano. Nelle neuroscienze cognitive, l'attenzione viene modulata attraverso due reti complementari: la rete esecutiva deliberata 'top-down' guidata dalla corteccia prefrontale verso obiettivi consapevoli, e la rete di salienza riflessa 'bottom-up' innescata da stimoli sensoriali imprevisti. Gli algoritmi dei social media, basati su schemi di ricompensa intermittente e notifiche visive continue, sfruttano costantemente il riflesso d'orientamento ancestrale del cervello. Questa cattura automatica scavalca la volontà deliberata dell'individuo, confinandolo in uno stato persistente di reattività e dispersione mentale.",
      "Duemila anni prima della progettazione degli algoritmi digitali, i maestri stoici nell'antica Grecia e a Roma studiarono la fragilità dell'animo umano di fronte alle sollecitazioni esterne con lucidità impressionante. Nei suoi 'Discorsi' e nel 'Manuale', Epitteto enunciò il caposaldo della filosofia stoica: la Dicotomia del Controllo (Ta eph' hemin rispetto a Ta ouk eph' hemin). Nel mondo esistono elementi che sono pienamente in nostro potere e altri che non lo sono affatto. Notifiche, trend virali, modifiche di piattaforma e l'approvazione altrui online sono variabili esterne al di fuori del nostro controllo diretto. Ciò che rimane inviolabilmente nostro è la nostra facoltà di giudizio, la nostra scelta morale (prohairesis) e il nostro assenso deliberato (synkatathesis). Epitteto ammoniva: 'Se qualcuno consegnasse il tuo corpo al primo passante, saresti furioso; eppure tu consegni la tua mente a chiunque capiti, affinché la turbi e la disorienti.'",
      "Nelle sue 'Meditazioni' (Ta Eis Heauton), l'imperatore Marco Aurelio delineò il principio che lo storico Pierre Hadot definì magistralmente la 'Cittadella Interiore' (l'Hegemonikon, il principio direttivo dell'anima). Secondo Marco Aurelio, la mente assume il colore delle impressioni a cui si espone con continuità; se i bastioni della fortezza restano incustoditi, il caos esterno espugna il centro decisionale. Le neuroscienze moderne confermano questo principio grazie alla neuroplasticità: il cervello rimodella le connessioni sinaptiche in base agli stimoli frammentari a cui viene costantemente sottoposto. Scorrere feed all'infinito in maniera passiva logora la capacità prefrontale di mantenere una concentrazione prolungata, indebolendo la fortezza dell'autonomia personale.",
      "Per contrastare questa erosione dell'attenzione, gli stoici praticavano la 'Prosochē'—una presenza mentale vigile e costante rivolta alla propria guida interiore. Epitteto raccomandava una pausa deliberata di fronte a qualsiasi impulso improvviso: 'Fermati, impressione; fammi vedere cosa sei e che cosa rappresenti; permettimi di esaminarti.' Nella moderna terapia cognitivo-comportamentale, ricollegandosi all'intuizione di Viktor Frankl sullo spazio tra stimolo e risposta, questa pratica si traduce in un protocollo digitale in 3 passi: 1) Pausa ed esame (attendere dieci secondi quando sorge l'impulso automatico di sbloccare lo schermo, osservando la natura meccanica del desiderio), 2) Filtro della dicotomia del controllo (riconoscere che i contenuti digitali sono rumore esterno e negare l'assenso emotivo interno), e 3) Architettura di protezione esterna (costruire barriere concrete per difendere la cittadella mentale).",
      "Come ricordava Marco Aurelio, affidarsi unicamente alla forza di volontà per resistere a un assedio costante è biologicamente insostenibile; difendere la cittadella interiore richiede chiari confini esterni. Limitra App Block consente di impostare limiti giornalieri indipendenti per applicazioni selezionate e visualizza una schermata di blocco con riflessioni stoiche allo scadere del tempo o durante le fasce orarie protette, interrompendo gli impulsi automatici e aiutando a preservare un controllo consapevole sulla propria attenzione."
    ],
    source: "Marco Aurelio (Colloqui con se stesso), Epitteto (Discorsi) e Pierre Hadot (La cittadella interiore)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Controllo Tempo Schermo",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marco Aurelio",
      "Epitteto",
      "Cittadella Interiore",
      "Filosofia Stoica",
      "Dicotomia del Controllo",
      "Controllo Tempo Schermo",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "111",
    slug: "marcus-aurelius-and-epictetus-inner-citadel-and-algorithmic-attention",
    title: "'القلعة الداخلية' لماركوس أوريليوس وإبكتيتوس: بروتوكول رواقي للتصدي لاختطاف الانتباه الخوارزمي",
    summary: "تلاقي فلسفة اليقظة الرواقية القديمة (prosochē) مع علم الأعصاب الإدراكي الحديث: مفهوم 'القلعة الداخلية' لماركوس أوريليوس، و'ثنائية السيطرة' لإبكتيتوس، وبروتوكول عملي من 3 مراحل لاستعادة السيادة الذهنية أمام الشاشات.",
    content: [
      "تشن الهواتف الذكية وتدفقات المحتوى الخوارزمية الحديثة حرباً مستمرة على البنية المعرفية للعقل البشري. في علم الأعصاب الإدراكي، يعمل الانتباه البشري من خلال شبكتين رئيسيتين: شبكة التحكم التنفيذي الواعية الهادفة 'من الأعلى إلى الأسفل' (top-down) التي تقودها قشرة الفص الجبهي، وشبكة البروز الانعكاسية 'من الأسفل إلى الأعلى' (bottom-up) التي تنشط تلقائياً استجابة للمنبهات المفاجئة. تستغل خوارزميات منصات التواصل، المصممة وفق آليات المكافأة المتغيرة والإشعارات المتلاحقة، رد الفعل التوجيهي التطوري للمخ. يتجاوز هذا الاستدراج الآلي الإرادة الواعية للمستخدم، ويحبس الذهن في حالة مزمنة من التشتت والاستجابة الانفعالية.",
      "قبل ألفي عام من ولادة الخوارزميات الرقمية، حلل الفلاسفة الرواقيون في اليونان وروما القديمة هشاشة النفس البشرية أمام المثيرات الخارجية بدقة متناهية. في 'الخطب' و'المختصر'، صاغ إبكتيتوس المبدأ الجوهري للفلسفة الرواقية: 'ثنائية السيطرة' (Ta eph' hemin مقابل Ta ouk eph' hemin)؛ حيث تنقسم الأشياء في الحياة إلى ما يقع تحت إرادتنا وما هو خارج عن نطاقها. إن الإشعارات المتلاحقة، والاتجاهات الشائعة، وتعديلات الخوارزميات، وتفاعلات الآخرين على الإنترنت هي أمور خارجية لا نملك التحكم المباشر فيها. أما ما يظل ملكاً خالصاً لنا فهو قدرتنا على الحكم، واختيارنا الأخلاقي الواعي (prohairesis)، ومنحنا الموافقة الذهنية (synkatathesis). وكما حذر إبكتيتوس: 'لو سَلَّم شخصٌ جسدك لعابر سبيل لغضبت بشدة؛ ومع ذلك فإنك تُسلِّم عقلك لكل مثير عشوائي يمر بك ليعكره ويشتته.'",
      "وفي كتابه 'التأملات' (Ta Eis Heauton)، بلور الإمبراطور الروماني ماركوس أوريليوس المفهوم الذي أطلق عليه المؤرخ الفرنسي بيير هادوت اسم 'القلعة الداخلية' (Hegemonikon، أو العقل الحاكم في النفس). كان ماركوس يرى أن العقل يتصبغ بلون الأفكار والمنبهات التي يتعرض لها باستمرار؛ وإذا تُرِكت بوابات القلعة بلا حراسة، فإن الفوضى الخارجية ستجتاح مركز القيادة الداخلي. ويؤكد علم الأعصاب الحديث هذه الرؤية من خلال مبدأ المرونة العصبية (Neuroplasticity)؛ إذ يعيد الدماغ تشكيل مساراته العصبية وفقاً للمؤثرات السطحية السريعة التي يعتاد عليها يومياً. إن الاستغراق في التمرير اللانهائي لساعات يضعف قدرة الفص الجبهي على التركيز العميق المتواصل، مما يزعزع حصن الاستقلال المعرفي.",
      "ولمواجهة هذا التآكل الذهني، مارس الرواقيون مبدأ 'Prosochē' (اليقظة الصارمة والمستمرة للانتباه الداخلي). ووضع إبكتيتوس بروتوكولاً ذهنياً حازماً لمواجهة أي رغبة مفاجئة: 'توقفي أيتها الخاطرة؛ دعيني أرى ما أنتِ وما تمثلينه، واسمحي لي باختبارك.' وفي العلاج المعرفي السلوكي الحديث، وتماشياً مع رؤية فيكتور فرانكل حول المساحة الفاصلة بين المنبه والاستجابة، يتحول هذا التمرين العريق إلى بروتوكول رقمي من 3 خطوات: 1) التوقف والاختبار (التريث لمدة 10 ثوانٍ عند الشعور برغبة فتح الهاتف وملاحظة الطابع الآلي للاندفاع)، 2) التصفية عبر ثنائية السيطرة (إدراك أن المحتوى الرقمي مجرد ضجيج خارجي وسحب الموافقة النفسية عنه)، 3) هندسة الحدود الخارجية (بناء حواجز تنظيمية لحماية القلعة الداخلية).",
      "وكما شدد ماركوس أوريليوس، فإن الاعتماد على قوة الإرادة المجردة وحدها في مواجهة حصار مستمر هو مغامرة غير مضمونة بيولوجياً؛ لذا فإن حماية القلعة الداخلية تتطلب حدوداً خارجية واضحة. يتيح Limitra App Block تحديد حدود زمنية يومية مستقلة لكل تطبيق يجري اختياره، كما يعرض شاشة قفل تحمل تأملات رواقية عند استنفاد الوقت المحدد أو خلال الفترات المخصصة للهدوء، مما يقطع العادات الاندفاعية ويساعد على استعادة الانتباه الواعي والسيادة على الوقت."
    ],
    source: "ماركوس أوريليوس (التأملات)، إبكتيتوس (الخطب)، وبيير هادوت (القلعة الداخلية)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "التحكم في وقت الشاشة",
    date: "2026-10-17",
    readTime: "6 دقائق",
    featured: false,
    tags: [
      "ماركوس أوريليوس",
      "إبكتيتوس",
      "القلعة الداخلية",
      "الفلسفة الرواقية",
      "ثنائية السيطرة",
      "التحكم في وقت الشاشة",
      "Limitra App Block"
    ]
  },
  id: {
    id: "111",
    slug: "marcus-aurelius-dan-epictetus-benteng-batin-dan-perhatian-melawan-algoritma",
    title: "'Benteng Batin' Marcus Aurelius dan Epictetus: Protokol Stoik Melawan Pembajakan Perhatian Algoritmik",
    summary: "Pertemuan antara perhatian penuh Stoik (prosochē) dan ilmu saraf kognitif modern: 'Benteng Batin' Marcus Aurelius, 'Dikotomi Kendali' Epictetus, dan protokol 3 tahap untuk memulihkan kedaulatan mental di era digital.",
    content: [
      "Ponsel pintar modern dan linimasa algoritmik melancarkan tekanan terus-menerus terhadap arsitektur kognitif otak manusia. Dalam ilmu saraf kognitif, perhatian manusia beroperasi melalui dua jaringan utama: jaringan eksekutif sukarela 'top-down' yang dipimpin oleh korteks prefrontal menuju tujuan yang disadari, dan jaringan salience 'bottom-up' yang dipicu secara refleks oleh rangsangan mendadak di lingkungan. Algoritma media sosial, yang dirancang dengan skema imbalan variabel dan lencana notifikasi yang mencolok, secara sistematis mengeksploitasi refleks orientasi evolusioner otak. Penangkapan refleksif ini melewati kehendak sadar dan memerangkap pengguna dalam kewaspadaan reaktif yang terfragmentasi.",
      "Dua ribu tahun sebelum algoritma digital diciptakan, para filsuf Stoik di Yunani dan Romawi kuno telah membedah kerapuhan pikiran manusia di hadapan dorongan eksternal dengan sangat mendalam. Dalam 'Discourses' dan 'Encheiridion', Epictetus merumuskan fondasi utama ajaran Stoik: Dikotomi Kendali (Ta eph' hemin vs. Ta ouk eph' hemin). Di dunia ini, ada hal-hal yang sepenuhnya berada di bawah kendali kita, dan ada hal-hal yang sama sekali di luar kendali kita. Notifikasi gawai, tren viral, perubahan algoritma, dan reaksi orang lain di internet adalah hal-hal eksternal di luar kekuasaan langsung kita. Yang sepenuhnya menjadi milik kita adalah pertimbangan nalar, pilihan moral sadar (prohairesis), dan persetujuan batin kita (synkatathesis). Epictetus memperingatkan: 'Jika seseorang menyerahkan tubuhmu kepada orang asing yang lewat, kamu akan sangat marah; namun kamu justru menyerahkan pikiranmu kepada sembarang rangsangan acak agar pikiranmu gelisah dan terombang-ambing.'",
      "Kaisar Romawi Marcus Aurelius, dalam 'Meditations' (Ta Eis Heauton), mengembangkan gagasan yang oleh sejarawan Pierre Hadot disebut sebagai 'Benteng Batin' (The Inner Citadel / Hegemonikon, pusat pengendali jiwa). Marcus mengamati bahwa jiwa akan menyerap corak pikiran yang terus-menerus diterimanya; jika gerbang benteng dibiarkan tanpa penjagaan, kekacauan dari luar akan menaklukkan pusat komando rasional. Ilmu saraf modern membuktikan pandangan ini melalui konsep neuroplastisitas: otak secara fisik menyusun kembali jalur sinapsisnya sesuai dengan rangsangan cepat dan dangkal yang dialaminya setiap hari. Menggulir layar tanpa henti secara pasif perlahan menurunkan kapasitas korteks prefrontal untuk mempertahankan fokus mendalam, meruntuhkan benteng kemandirian kognitif.",
      "Untuk menahan pengikisan mental ini, kaum Stoik mempraktikkan 'Prosochē'—perhatian batin yang senantiasa waspada terhadap pusat pengambil keputusan. Epictetus menganjurkan jeda sadar setiap kali dorongan tiba-tiba muncul: 'Berhentilah sejenak, wahai kesan; biarkan aku melihat siapa dirimu dan apa yang kau wakili; izinkan aku mengujimu.' Dalam psikologi perilaku kognitif modern, sejalan dengan pemikiran Viktor Frankl mengenai jeda antara stimulus dan respons, latihan klasik ini diwujudkan menjadi protokol digital 3 langkah: 1) Jeda dan Uji (menunggu 10 detik saat dorongan meraih ponsel muncul, mengamati sifat mekanis dari keinginan tersebut), 2) Saring Melalui Dikotomi Kendali (menyadari bahwa arus digital adalah kebisingan eksternal dan menolak memberikan persetujuan emosional), serta 3) Arsitektur Batasan Eksternal (membangun batas nyata untuk melindungi benteng batin).",
      "Sebagaimana disadari Marcus Aurelius, mengandalkan tekad semata untuk menghadapi kepungan godaan yang tiada henti adalah kekeliruan biologis; melindungi benteng batin membutuhkan batasan eksternal yang andal. Limitra App Block memungkinkan pengguna menentukan batas waktu harian mandiri untuk aplikasi yang dipilih dan menampilkan layar kunci berisi renungan Stoik saat batas waktu tercapai atau jadwal tenang dimulai, menghentikan kebiasaan impulsif dan membantu memulihkan kendali penuh atas perhatian pribadi."
    ],
    source: "Marcus Aurelius (Meditations), Epictetus (Discourses) & Pierre Hadot (The Inner Citadel)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Kontrol Waktu Layar",
    date: "2026-10-17",
    readTime: "6 mnt",
    featured: false,
    tags: [
      "Marcus Aurelius",
      "Epictetus",
      "Benteng Batin",
      "Filosofi Stoik",
      "Dikotomi Kendali",
      "Kontrol Waktu Layar",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "111",
    slug: "marcus-aurelius-at-epictetus-panloob-na-kuta-at-atensyon-laban-sa-algoritmo",
    title: "Ang 'Panloob na Kuta' nina Marcus Aurelius at Epictetus: Stoic Protocol Laban sa Pag-agaw ng Algoritmo sa Atensyon",
    summary: "Ang pagtatagpo ng sinaunang Stoic mindfulness (prosochē) at modernong cognitive neuroscience: ang 'Panloob na Kuta' ni Marcus Aurelius, ang 'Dichotomy of Control' ni Epictetus, at 3 hakbang na protocol para bawiin ang sariling atensyon.",
    content: [
      "Ang mga modernong smartphone at algorithm ng social media ay walang humpay na humahamon sa kognitibong kayarian ng utak ng tao. Sa cognitive neuroscience, gumagana ang atensyon sa pamamagitan ng dalawang pangunahing network: ang may layunin at kusang 'top-down' executive network na pinamamahalaan ng prefrontal cortex, at ang 'bottom-up' salience network na kusang nagre-react sa mga biglaang pahiwatig sa paligid. Ang mga algorithm ng social media, na gumagamit ng mga variable reward at makukulay na badge ng notification, ay palagiang nagti-trigger sa orienting reflex ng utak. Ang awtomatikong pag-agaw na ito ay lumalagpas sa malay na pagpapasiya ng tao at naglalagay sa isip sa isang estado ng patuloy na pagkagambala.",
      "Dalawang libong taon bago sumulpot ang mga digital na algorithm, masusing sinuri ng mga pilosopong Stoic sa sinaunang Gresya at Roma ang kahinaan ng isip sa harap ng mga panlabas na pampasigla. Sa kanyang 'Discourses' at 'Encheiridion', binalangkas ni Epictetus ang pinakapundasyon ng Stoicism: ang Dichotomy of Control (Ta eph' hemin laban sa Ta ouk eph' hemin). May mga bagay na nasa ating kontrol, at may mga bagay na ganap na wala sa ating kontrol. Ang mga notification, viral na uso, pagbabago sa algorithm, at reaksyon ng ibang tao sa internet ay pawang mga panlabas na bagay na hindi natin hawak. Ang tanging nananatiling atin ay ang ating paghuhusga, ang ating malay na pagpili (prohairesis), at ang ating pahintulot sa kaisipan (synkatathesis). Tulad ng sinabi ni Epictetus: 'Kung ibinigay ng sinuman ang iyong katawan sa sinumang dumaraan, magagalit ka nang husto; gayunpaman, ipinauubaya mo ang iyong isip sa kahit anong pampasigla upang guluhin at lituhin ito.'",
      "Sa kanyang 'Meditations' (Ta Eis Heauton), binuo naman ng emperador ng Roma na si Marcus Aurelius ang konseptong tinawag ng pilosopong si Pierre Hadot na 'Panloob na Kuta' (The Inner Citadel / Hegemonikon, o ang namamahalang sentro ng kaluluwa). Ayon kay Marcus Aurelius, kinukulayan ng mga madalas na iniisip ang kaluluwa; kung iiwang bukas ang tarangkahan ng kuta, ang gulo ng labas ang sasakop sa sentro ng pamamahala. Pinatutunayan ito ng modernong neuroscience sa pamamagitan ng neuroplasticity: muling hinuhubog ng utak ang mga koneksyon nito ayon sa mabilis at mababaw na impormasyong paulit-ulit nitong natatanggap. Ang walang humpay na pag-scroll araw-araw ay unti-unting nagpapahina sa kakayahan ng prefrontal cortex para sa malalim na pokus, na sumisira sa kuta ng sariling kaisipan.",
      "Upang pigilan ang pagkaagnas na ito ng isip, nagsanay ang mga Stoic ng 'Prosochē'—isang gawi ng patuloy na pagiging gising at mapagbantay sa sariling atensyon. Nagtagubilin si Epictetus ng agarang paghinto sa harap ng anumang biglaang udyok: 'Huminto ka, impresyon; hayaan mong makita ko kung ano ka at kung ano ang kinakatawan mo; hayaan mong subukin kita.' Sa modernong cognitive behavioral therapy, katulad ng sinabi ni Viktor Frankl tungkol sa agwat sa pagitan ng stimulus at tugon, ang sinaunang gawaing ito ay nagiging 3 hakbang na digital protocol: 1) Paghinto at Pagsusuri (paghihintay ng 10 segundo bago hawakan ang telepono kapag naramdaman ang udyok, pinagmamasdan ang mekanikal na katangian nito), 2) Pagsala sa Pamamagitan ng Dichotomy of Control (pagkilala na ang digital feed ay ingay sa labas at pagtangging magpaapekto rito), at 3) Arkitektura ng Panlabas na Hangganan (paglalagay ng konkretong harang upang protektahan ang panloob na kuta).",
      "Tulad ng ipinaalala ni Marcus Aurelius, ang pag-asa lamang sa sariling lakas ng loob laban sa walang humpay na panggigipit ay hindi sapat ayon sa biyolohiya; ang pagtatanggol sa panloob na kuta ay nangangailangan ng maaasahang panlabas na hangganan. Nagbibigay ang Limitra App Block ng hiwalay na limitasyon sa oras ng paggamit bawat araw para sa mga napiling app at naglalagay ng lock screen na nagpapakita ng mga Stoic na pagninilay kapag naabot ang takdang oras o sa mga itinakdang oras ng katahimikan, na pumipigil sa pabigla-biglang paggamit at tumutulong na maibalik ang malay na kontrol sa sariling atensyon."
    ],
    source: "Marcus Aurelius (Meditations), Epictetus (Discourses) at Pierre Hadot (The Inner Citadel)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "Kontrol sa Screen Time",
    date: "2026-10-17",
    readTime: "6 min",
    featured: false,
    tags: [
      "Marcus Aurelius",
      "Epictetus",
      "Panloob na Kuta",
      "Pilosopiyang Stoic",
      "Dichotomy of Control",
      "Kontrol sa Screen Time",
      "Limitra App Block"
    ]
  },
  th: {
    id: "111",
    slug: "marcus-aurelius-and-epictetus-the-inner-citadel-and-algorithmic-attention",
    title: "'ปราการภายใน' ของมาร์คัส ออเรลิอุส และเอพิคเตตัส: โปรโตคอลสโตอิกเพื่อต้านการแย่งชิงสมาธิจากอัลกอริทึม",
    summary: "การบรรจบกันระหว่างการมีสติแบบสโตอิกโบราณ (prosochē) กับประสาทวิทยาศาสตร์การรู้คิดยุคใหม่: 'ปราการภายใน' ของมาร์คัส ออเรลิอุส, 'ทวิภาวะแห่งการควบคุม' ของเอพิคเตตัส และโปรโตคอล 3 ขั้นตอนเพื่อกอบกู้สมาธิคืนมา",
    content: [
      "สมาร์ตโฟนและฟีดอัลกอริทึมในยุคปัจจุบันกำลังทำสงครามอย่างต่อเนื่องกับโครงสร้างการรู้คิดของสมองมนุษย์ ในทางประสาทวิทยาศาสตร์การรู้คิด สมาธิของมนุษย์ทำงานผ่านสองเครือข่ายหลัก ได้แก่ เครือข่ายการบริหารจัดการระดับสูงจากบนลงล่าง (Top-down) ที่ควบคุมโดยสมองส่วนหน้าเพื่อมุ่งสู่เป้าหมายที่ตั้งใจ และเครือข่ายความโดดเด่นจากล่างขึ้นบน (Bottom-up) ที่ตอบสนองโดยสัญชาตญาณต่อสิ่งเร้ากะทันหัน อัลกอริทึมของโซเชียลมีเดียซึ่งถูกออกแบบด้วยระบบการให้รางวัลแบบไม่แน่นอนและการแจ้งเตือนสีแดงสด ได้กระตุ้นการตอบสนองเชิงการปรับทิศทางตามวิวัฒนาการของสมองอย่างต่อเนื่อง การเข้าครอบงำโดยสัญชาตญาณนี้ได้ก้าวข้ามเจตจำนงที่รู้ตัว และขังจิตใจไว้ในภาวะตื่นตัวแบบปฏิกิริยาที่กระจัดกระจายตลอดเวลา",
      "สองพันปีก่อนที่อัลกอริทึมดิจิทัลจะถือกำเนิด นักปรัชญาสโตอิกในกรีกและโรมันโบราณได้วิเคราะห์ความเปราะบางของจิตใจมนุษย์ต่อสิ่งเร้าภายนอกไว้อย่างลึกซึ้ง ในหนังสือ 'Discourses' และ 'Encheiridion' เอพิคเตตัสได้วางรากฐานสำคัญของสโตอิก นั่นคือ ทวิภาวะแห่งการควบคุม (Dichotomy of Control: Ta eph' hemin และ Ta ouk eph' hemin) ซึ่งระบุว่าในโลกนี้มีสิ่งที่เราควบคุมได้และสิ่งที่เราควบคุมไม่ได้ การแจ้งเตือน กระแสไวรัล การปรับอัลกอริทึม และปฏิกิริยาของคนอื่นบนโลกออนไลน์ ล้วนเป็นสิ่งภายนอกที่อยู่นอกเหนือการควบคุมของเราโดยตรง สิ่งเดียวที่ยังคงอยู่ใต้การตัดสินใจของเราอย่างแท้จริงคือความสามารถในการตัดสิน การเลือกอย่างมีสติ (prohairesis) และการยินยอมพร้อมใจภายใน (synkatathesis) ดังที่เอพิคเตตัสได้เตือนไว้ว่า: 'หากมีใครนำร่างกายของคุณไปมอบให้คนแปลกหน้า คุณคงจะโกรธจัด แต่คุณกลับยอมมอบจิตใจอันล้ำค่าให้แก่สิ่งเร้าสุ่มใดๆ ก็ตามเพื่อให้มันเข้ามาปั่นป่วนและทำให้จิตใจว้าวุ่น'",
      "ด้านจักรพรรดิโรมัน มาร์คัส ออเรลิอุส ได้พัฒนาแนวคิดในบันทึก 'Meditations' (Ta Eis Heauton) ซึ่งนักประวัติศาสตร์ปรัชญา ปิแอร์ ฮาดอต ได้ขนานนามว่าเป็น 'ปราการภายใน' (The Inner Citadel / Hegemonikon หรือศูนย์บัญชาการจิตวิญญาณ) มาร์คัสสังเกตว่าจิตใจจะซึมซับสีสันของความคิดที่มันเปิดรับอยู่เป็นประจำ หากปล่อยให้ประตูเมืองเปิดทิ้งไว้โดยไร้การคุ้มกัน ความสับสนวุ่นวายจากภายนอกจะเข้ายึดศูนย์กลางการตัดสินใจ ประสาทวิทยาศาสตร์ยุคใหม่ยืนยันความจริงข้อนี้ผ่านหลักการความยืดหยุ่นของระบบประสาท (Neuroplasticity) ว่าสมองจะปรับเปลี่ยนโครงสร้างไซแนปส์ตามสิ่งเร้าที่รวดเร็วและฉาบฉวยที่ได้รับในแต่ละวัน การเลื่อนฟีดไปเรื่อยๆ อย่างเฉื่อยชาจึงบั่นทอนขีดความสามารถของสมองส่วนหน้าในการจดจ่ออย่างลึกซึ้ง และทำลายปราการแห่งอิสรภาพทางปัญญาลง",
      "เพื่อป้องกันการสึกกร่อนทางจิตใจนี้ ชาวสโตอิกจึงฝึกฝน 'Prosochē' (การมีสติรู้ตัวอย่างระแวดระวังอยู่เสมอ) ต่อศูนย์กลางความคิดของตน เอพิคเตตัสได้แนะนำโปรโตคอลแห่งการหยุดยั้งทุกครั้งที่ความอยากกะทันหันเกิดขึ้น: 'หยุดก่อน เจ้าสิ่งเร้า! ให้ข้าได้ดูว่าเจ้าคืออะไรและเป็นตัวแทนของสิ่งใด ขอให้ข้าได้ทดสอบเจ้าเสียก่อน' ในจิตวิทยาพฤติกรรมทางปัญญา ซึ่งสอดคล้องกับแนวคิดของวิกเตอร์ แฟรงเคิล เรื่องช่องว่างระหว่างสิ่งเร้ากับการตอบสนอง บทเรียนโบราณนี้ถูกนำมาปรับเป็นโปรโตคอลดิจิทัล 3 ขั้นตอน: 1) หยุดและทดสอบ (เมื่อเกิดแรงกระตุ้นให้อยากหยิบโทรศัพท์ ให้รอ 10 วินาทีก่อนแตะหน้าจอเพื่อสังเกตความอยากที่เป็นกลไกอัตโนมัติ) 2) กรองผ่านทวิภาวะแห่งการควบคุม (ตระหนักว่าฟีดข้อมูลเป็นเสียงรบกวนภายนอกและปฏิเสธที่จะให้ใจคล้อยตาม) และ 3) สถาปัตยกรรมขอบเขตภายนอก (สร้างปราการภายนอกที่ชัดเจนเพื่อปกป้องปราการภายใน)",
      "ดังที่มาร์คัส ออเรลิอุส ได้เตือนไว้ การพึ่งพาเพียงพลังใจอย่างเดียวในการต้านทานสิ่งล่อใจที่ถาโถมตลอดเวลาเป็นเรื่องยากทางชีววิทยา การปกป้องปราการภายในจึงต้องมีกฎเกณฑ์ภายนอกที่มั่นคง Limitra App Block ช่วยให้สามารถกำหนดขีดจำกัดเวลาใช้งานรายวันสำหรับแอปพลิเคชันที่เลือกได้อย่างอิสระ และแสดงหน้าจอล็อกที่มีข้อคิดสโตอิกเมื่อหมดเวลาหรือในช่วงเวลาห้ามใช้ เพื่อช่วยตัดวงจรความเคยชินอัตโนมัติ และฟื้นฟูสมาธิและการควบคุมตนเองอย่างมีสติ"
    ],
    source: "Marcus Aurelius (Meditations), Epictetus (Discourses) & Pierre Hadot (The Inner Citadel)",
    sourceUrl: "https://plato.stanford.edu/entries/stoicism/",
    category: "การควบคุมเวลาหน้าจอ",
    date: "2026-10-17",
    readTime: "6 นาที",
    featured: false,
    tags: [
      "มาร์คัส ออเรลิอุส",
      "เอพิคเตตัส",
      "ปราการภายใน",
      "ปรัชญาสโตอิก",
      "ทวิภาวะแห่งการควบคุม",
      "การควบคุมเวลาหน้าจอ",
      "Limitra App Block"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filename = lang === 'tr' ? 'haberler.json' : `news-${lang}.json`;
  const filePath = path.join(dataDir, filename);

  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (existing.some(item => item.id === "111")) {
    console.log(`[WARN] ID 111 already exists in ${filename}, skipping unshift.`);
  } else {
    existing.unshift(articleData[lang]);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
    console.log(`[OK] Added ID 111 to ${filename} (Total items: ${existing.length})`);
  }
}

console.log('Successfully added article ID 111 in all 11 languages.');
