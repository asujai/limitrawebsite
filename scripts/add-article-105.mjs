import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const articles = {
  tr: {
    id: "105",
    slug: "florida-hb-3-yasasi-14-yas-altina-sosyal-medya-yasagi",
    title: "Florida'da Tarihi Karar: HB 3 Yasası ile 14 Yaş Altına Sosyal Medya Yasaklanıyor",
    summary: "Florida Valisi Ron DeSantis tarafından onaylanan HB 3 yasası, 14 yaşın altındaki çocukların bağımlılık yapıcı algoritmik platformlarda hesap açmasını tamamen yasaklıyor. 14 ve 15 yaşındaki gençler için ebeveyn onayı zorunlu kılınırken, ihlal eden platformlara 50 bin dolara varan para cezaları getiriliyor.",
    content: [
      "Florida Eyaleti, çocukların ve gençlerin zihinsel sağlığını korumak ve sosyal medya platformlarının bağımlılık odaklı tasarım modellerini sınırlandırmak amacıyla Amerika Birleşik Devletleri'nin en kapsamlı yasal düzenlemelerinden birine imza attı. Florida Valisi Ron DeSantis tarafından onaylanan ve Eyalet Meclisi Başkanı Paul Renner öncülüğünde hazırlanan House Bill 3 (HB 3 - Reşit Olmayanlar İçin Çevrim İçi Koruma) yasası, 14 yaşın altındaki çocukların algoritmik sosyal medya platformlarında hesap sahibi olmasını kesin olarak yasaklıyor.",
      "Yeni mevzuat, çocukların dijital güvenliğini sağlamak için iki aşamalı bir yaş bariyeri getiriyor. Yasa kapsamında 14 yaş altındaki tüm bireylerin bağımlılık yapıcı özellikler barındıran platformlarda yeni hesap açması yasaklanırken, platformların bu yaş grubuna ait mevcut tüm hesapları tespit ederek silmesi zorunlu tutuluyor. 14 ve 15 yaşındaki gençler için ise sisteme katılım yalnızca doğrulanabilir ebeveyn veya vasi rızası şartına bağlanıyor. Ebeveynlerin veya reşit olmayan bireylerin talebi üzerine platformların hesabı 10 iş günü içinde kalıcı olarak kapatması gerekiyor.",
      "Düzenlemenin odak noktasını içeriğin kendisinden ziyade, platformların teknik tasarım mimarisi oluşturuyor. Yasa; sonsuz kaydırma (infinite scroll), otomatik video oynatma, kişisel beğeni ve etkileşim sayaçları, anlık bildirim bombardımanı ve algoritmik tavsiye motorları gibi kullanıcıyı ekranda tutmak için tasarlanmış özellikleri hedef alıyor. Florida Ticaret ve Tüketici Hakları mevzuatı çerçevesinde yürütülecek denetimlerde, kuralları kasten ihlal eden veya yaş doğrulama yükümlülüğünü yerine getirmeyen teknoloji şirketlerine ihlal başına 50.000 dolara kadar idari para cezası öngörülüyor.",
      "Pediatri uzmanları, çocuk psikologları ve veli örgütleri düzenlemeyi memnuniyetle karşılarken, erken yaşta algoritmik akışlara maruz kalmanın dikkat dağınıklığı, uyku yoksunluğu ve anksiyete riskini artırdığına dikkat çekiyor. Yasa koyucular, bu düzenlemenin sosyal medyanın serbest konuşma hakkını değil, çocukların zihinsel zaaflarını hedef alan ticari bağımlılık mekanizmalarını sınırladığını vurguluyor. Düzenleme, ABD genelinde birçok eyaletin benzer yaş sınırı modellerini hayata geçirmesi için de öncü bir emsal oluşturuyor.",
      "Yasal çerçevenin yanı sıra günlük kullanımda somut ve dengeli sınırlar belirlemek de önem taşıyor. Limitra App Block, seçilen uygulamalara bağımsız günlük süre limitleri tanımlayarak ekran kullanımını doğrudan cihaz üzerinden yönetmeye yardımcı oluyor."
    ],
    source: "Florida Temsilciler Meclisi & Florida Valiliği",
    sourceUrl: "https://www.flgov.com",
    category: "Devlet Düzenlemeleri & Yasalar",
    date: "2026-10-11",
    readTime: "5 dk",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Sosyal Medya Yasağı",
      "14 Yaş Sınırı",
      "Ron DeSantis",
      "Algoritmik Akışlar",
      "Limitra App Block"
    ]
  },
  en: {
    id: "105",
    slug: "florida-hb-3-law-social-media-ban-under-14",
    title: "Florida Enacts Landmark HB 3 Law: Social Media Banned for Children Under 14",
    summary: "Signed by Governor Ron DeSantis, Florida House Bill 3 strictly prohibits children under 14 from creating accounts on addictive algorithmic platforms. The legislation mandates parental consent for 14- and 15-year-olds and imposes penalties of up to $50,000 per violation.",
    content: [
      "The State of Florida has enacted one of the most comprehensive digital safety frameworks in the United States, designed to safeguard youth mental health and rein in addictive platform designs. Championed by Florida House Speaker Paul Renner and signed into law by Governor Ron DeSantis, House Bill 3 (HB 3 - Online Protections for Minors) establishes a definitive ban on social media accounts for children under the age of 14 on platforms utilizing algorithmic recommendation feeds.",
      "The legislation introduces a structured two-tiered age framework to protect adolescents. Platforms featuring addictive engagement designs are strictly barred from opening accounts for users under 14, and tech companies are legally required to terminate any existing accounts held by this demographic. For 14- and 15-year-olds, account creation and maintenance require verifiable parental or guardian consent. Upon request by a parent or minor, platforms must permanently delete user accounts and associated personal data within ten business days.",
      "A central component of HB 3 is its focus on engagement-maximizing system architecture rather than specific speech or content. The statute specifically targets platforms employing features such as infinite scrolling, autoplay video loops, algorithmic recommendation feeds, real-time push notifications, and personal engagement metrics like likes and view counts. Under the Florida Deceptive and Unfair Trade Practices Act, companies failing to implement reasonable age assurance or knowingly permitting unauthorized accounts face civil penalties of up to $50,000 per violation.",
      "Child health advocates, pediatricians, and educators have widely welcomed the measures, citing mounting evidence that early immersion in algorithmic media drives severe sleep deprivation, fragmented attention spans, and elevated anxiety. State lawmakers stressed that the statute respects First Amendment boundaries by regulating commercial habit-forming design elements rather than expressive speech. The legislation serves as an influential national precedent as numerous other states advance similar age-based digital protections.",
      "Alongside legislative safeguards, establishing clear and practical boundaries in daily screen use remains vital. Limitra App Block provides independent daily time limits on selected applications, helping users manage their device habits directly on the phone."
    ],
    source: "Florida House of Representatives & Executive Office of the Governor",
    sourceUrl: "https://www.flgov.com",
    category: "Government Policies & Laws",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Social Media Ban",
      "Under 14",
      "Ron DeSantis",
      "Algorithmic Feeds",
      "Limitra App Block"
    ]
  },
  es: {
    id: "105",
    slug: "florida-ley-hb-3-prohibicion-redes-sociales-menores-14",
    title: "Florida promulga la histórica ley HB 3: Prohibición de redes sociales para menores de 14 años",
    summary: "Firmada por el gobernador Ron DeSantis, la ley HB 3 de Florida prohíbe que los menores de 14 años creen cuentas en plataformas con algoritmos adictivos. Exige consentimiento paterno para jóvenes de 14 y 15 años y contempla multas de hasta 50.000 dólares.",
    content: [
      "El estado de Florida ha promulgado una de las normativas de seguridad digital infantil más rigurosas de Estados Unidos, diseñada para proteger la salud mental de los jóvenes y frenar los modelos de diseño adictivo en las plataformas tecnológicas. El Proyecto de Ley 3 de la Cámara de Representantes (HB 3 - Protecciones en Línea para Menores), impulsado por el presidente de la Cámara Paul Renner y firmado por el gobernador Ron DeSantis, prohíbe terminantemente las cuentas en redes sociales a los menores de 14 años en plataformas que emplean canales de recomendación algorítmica.",
      "El marco legislativo establece un sistema de acceso escalonado en dos niveles para salvaguardar a los adolescentes. Las plataformas con características de retención adictiva tienen prohibido abrir perfiles a usuarios menores de 14 años y están obligadas por ley a cancelar las cuentas ya existentes de dicho colectivo. Para los jóvenes de 14 y 15 años, el registro y mantenimiento de la cuenta exige el consentimiento expreso y verificable de los padres o tutores. A petición de los padres o del propio menor, la compañía debe eliminar permanentemente la cuenta en un plazo máximo de diez días hábiles.",
      "El eje de la normativa no reside en censurar contenidos específicos, sino en regular la arquitectura de diseño adictivo orientada a captar la atención de forma compulsiva. La ley señala expresamente funcionalidades como el desplazamiento infinito (infinite scroll), la reproducción automática de vídeos, las alertas push continuas y los contadores de interacción como 'me gusta' y visualizaciones. Bajo la Ley de Prácticas Comerciales Engañosas y Desleales de Florida, las plataformas que no apliquen una verificación de edad rigurosa afrontan sanciones civiles de hasta 50.000 dólares por cada infracción.",
      "Asociaciones médicas, pediatras y educadores han valorado favorablemente la medida, recordando que la sobreexposición temprana a flujos algorítmicos provoca déficit crónico de sueño, dispersión atencional y mayores tasas de ansiedad. Los legisladores recalcaron que la norma respeta la libertad de expresión al regular mecanismos comerciales de enganche psicológico en lugar del discurso de los usuarios. La iniciativa sienta un precedente de alcance nacional mientras otros estados avanzan en normativas similares de edad mínima.",
      "Junto con las medidas legales, fijar límites claros y realistas en el uso cotidiano de la tecnología sigue siendo fundamental. Limitra App Block permite configurar límites de tiempo diarios independientes para aplicaciones seleccionadas, ayudando a gestionar los hábitos de pantalla directamente desde el dispositivo."
    ],
    source: "Cámara de Representantes de Florida & Oficina del Gobernador",
    sourceUrl: "https://www.flgov.com",
    category: "Políticas gubernamentales y leyes",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Prohibición de redes sociales",
      "Menores de 14 años",
      "Ron DeSantis",
      "Algoritmos adictivos",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "105",
    slug: "floride-loi-hb-3-interdiction-reseaux-sociaux-moins-14-ans",
    title: "Floride : Adoption de la loi historique HB 3 interdisant les réseaux sociaux aux moins de 14 ans",
    summary: "Promulguée par le gouverneur Ron DeSantis, la loi floridienne HB 3 interdit aux enfants de moins de 14 ans d'ouvrir des comptes sur les plateformes algorithmiques addictives. Elle impose l'accord parental pour les 14-15 ans et prévoit des amendes jusqu'à 50 000 dollars.",
    content: [
      "L'État de Floride a adopté un dispositif législatif majeur pour protéger la santé mentale des mineurs face aux architectures numériques addictives des géants de la technologie. La loi « House Bill 3 » (HB 3 - Protections en ligne pour les mineurs), portée par le président de la Chambre des représentants Paul Renner et promulguée par le gouverneur Ron DeSantis, interdit formellement l'accès aux réseaux sociaux algorithmiques aux enfants de moins de 14 ans.",
      "Le texte instaure un cadre protecteur à deux niveaux pour encadrer les adolescents. Les plateformes intégrant des fonctionnalités de captation addictive ne peuvent plus créer de comptes pour les moins de 14 ans et ont l'obligation légale de supprimer les comptes existants appartenant à cette tranche d'âge. Pour les jeunes de 14 et 15 ans, l'inscription est subordonnée au consentement explicite et vérifiable des parents ou tuteurs. Sur demande des représentants légaux ou du mineur, les services doivent procéder à la suppression irrévocable du compte sous dix jours ouvrés.",
      "La loi cible en priorité les mécanismes d'ingénierie comportementale conçus pour maximiser le temps passé devant l'écran plutôt que les contenus eux-mêmes. Sont directement visés le défilement infini (infinite scrolling), la lecture vidéo automatique, les notifications push permanentes et les compteurs d'engagement personnel tels que les mentions 'j'aime'. En application de la loi sur les pratiques commerciales trompeuses et déloyales de Floride, les entreprises défaillantes s'exposent à des amendes civiles pouvant atteindre 50 000 dollars par infraction.",
      "Pédiatres, psychologues pour enfants et associations de parents ont salué cette initiative, soulignant que l'immersion précoce dans les flux algorithmiques engendre un manque de sommeil chronique, une fragmentation de l'attention et une hausse de l'anxiété. Les parlementaires ont insisté sur le fait que le texte encadre des techniques d'accoutumance commerciale sans restreindre la liberté d'expression. Cette loi constitue une référence nationale alors que plusieurs autres États élaborent des restrictions d'âge comparables.",
      "Au-delà des cadres réglementaires, instaurer des limites concrètes au quotidien demeure essentiel. Limitra App Block permet de définir des limites de temps quotidiennes indépendantes pour les applications choisies, facilitant ainsi la maîtrise du temps d'écran directement sur l'appareil."
    ],
    source: "Chambre des représentants de Floride & Bureau du Gouverneur",
    sourceUrl: "https://www.flgov.com",
    category: "Politiques publiques et lois",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Floride",
      "HB 3",
      "Interdiction réseaux sociaux",
      "Moins de 14 ans",
      "Ron DeSantis",
      "Flux algorithmiques",
      "Limitra App Block"
    ]
  },
  de: {
    id: "105",
    slug: "florida-gesetz-hb-3-social-media-verbot-unter-14",
    title: "Historischer Beschluss in Florida: Gesetz HB 3 verbietet soziale Medien für Kinder unter 14 Jahren",
    summary: "Das von Gouverneur Ron DeSantis unterzeichnete Gesetz HB 3 untersagt Kindern unter 14 Jahren die Kontoführung auf algorithmischen Plattformen. Für 14- und 15-Jährige ist eine elterliche Zustimmung erforderlich, bei Verstößen drohen Strafen von bis zu 50.000 Dollar.",
    content: [
      "Der US-Bundesstaat Florida hat eines der weitreichendsten Kinderschutzgesetze im digitalen Raum verabschiedet, um die psychische Gesundheit junger Menschen vor suchterzeugenden Plattformmechanismen zu schützen. Das Gesetz „House Bill 3“ (HB 3 – Online-Schutz für Minderjährige), initiiert von Parlamentspräsident Paul Renner und unterzeichnet von Gouverneur Ron DeSantis, verbietet Kindern unter 14 Jahren die Nutzung von Social-Media-Plattformen mit algorithmischen Empfehlungs-Feeds.",
      "Die Neuregelung führt ein zweistufiges Altersmodell ein, um Jugendliche gezielt abzusichern. Plattformen mit bindenden Verhaltensmustern dürfen keine neuen Profile für unter 14-Jährige anlegen und sind verpflichtet, bestehende Konten dieser Altersgruppe vollständig zu löschen. Für 14- und 15-jährige Jugendliche ist ein aktives und nachprüfbares Einverständnis der Erziehungsberechtigten zwingend vorgeschrieben. Auf Verlangen der Eltern oder der Jugendlichen müssen Benutzerkonten innerhalb von zehn Werktagen dauerhaft entfernt werden.",
      "Der juristische Hebel setzt nicht bei Inhalten oder Meinungsäußerungen an, sondern bei technischen Manipulationsstrukturen zur Verlängerung der Verweildauer. Das Gesetz zielt explizit auf Endlos-Scrolling (Infinite Scroll), automatische Videowiedergabe, permanente Push-Mitteilungen und öffentliche Interaktionszähler wie Likes ab. Nach dem Gesetz gegen unlautere Handelspraktiken in Florida drohen Technologieunternehmen bei mangelhafter Altersverifikation oder wissentlicher Duldung zivilrechtliche Bußgelder von bis zu 50.000 US-Dollar pro Verstoß.",
      "Kinderärzte, Entwicklungspsychologen und Elterninitiativen begrüßten die Initiative ausdrücklich und wiesen darauf hin, dass die frühe Aussetzung gegenüber algorithmischen Feeds zu gravierendem Schlafmangel, Konzentrationsverlust und erhöhter Ängstlichkeit führt. Die Gesetzgeber betonten, dass die Maßnahme kommerzielle Gewöhnungseffekte reguliert, ohne verfassungsrechtliche Grundrechte zu verletzen. Florida setzt damit einen Maßstab, an dem sich derzeit mehrere US-Bundesstaaten orientieren.",
      "Neben gesetzlichen Rahmenbedingungen bleibt es im Alltag entscheidend, verlässliche persönliche Nutzungsregeln aufzustellen. Limitra App Block ermöglicht es, unabhängige tägliche Zeitlimits für ausgewählte Anwendungen festzulegen und so den Bildschirmkonsum direkt auf dem Gerät im Gleichgewicht zu halten."
    ],
    source: "Repräsentantenhaus von Florida & Büro des Gouverneurs",
    sourceUrl: "https://www.flgov.com",
    category: "Regierungspolitik & Gesetze",
    date: "2026-10-11",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Social-Media-Verbot",
      "Unter 14 Jahre",
      "Ron DeSantis",
      "Algorithmische Feeds",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "105",
    slug: "florida-lei-hb-3-proibicao-redes-sociais-menores-14-anos",
    title: "Decisão histórica na Flórida: Lei HB 3 proíbe redes sociais para menores de 14 anos",
    summary: "Sancionada pelo governador Ron DeSantis, a lei HB 3 da Flórida proíbe que menores de 14 anos possuam contas em plataformas com algoritmos viciantes. O texto exige aval dos pais para jovens de 14 e 15 anos e estipula multas de até 50 mil dólares por infração.",
    content: [
      "O estado da Flórida aprovou uma das legislações mais abrangentes dos Estados Unidos para resguardar a saúde mental infantojuvenil e conter os modelos predatórios de engajamento digital. O projeto de lei House Bill 3 (HB 3 - Proteções Online para Menores), defendido pelo presidente da Câmara Paul Renner e sancionado pelo governador Ron DeSantis, proíbe expressamente menores de 14 anos de criarem contas em redes sociais baseadas em algoritmos de recomendação.",
      "A legislação estabelece um sistema de proteção em duas fases para blindar crianças e adolescentes. Plataformas que utilizam recursos projetados para prender a atenção estão impedidas de cadastrar usuários com menos de 14 anos e devem identificar e encerrar imediatamente as contas existentes dessa faixa etária. Para jovens de 14 e 15 anos, o acesso exige consentimento formal e comprovável dos pais ou responsáveis. A pedido da família ou do jovem, os dados e a conta devem ser excluídos definitivamente em até dez dias úteis.",
      "O foco da lei recai sobre a engenharia de design persuasivo dos aplicativos, e não sobre a manifestação de conteúdos. São alvo direto da regulamentação mecanismos como rolagem infinita (infinite scroll), reprodução automática de vídeos, notificações em tempo real e métricas de validação como contadores de curtidas e visualizações. Sob a Lei de Práticas Comerciais Enganosas da Flórida, empresas que descumprirem as verificações de idade enfrentam penalidades civis de até 50 mil dólares por ocorrência.",
      "Médicos pediatras, psicólogos infantis e entidades de pais apoiaram amplamente a determinação, alertando que a exposição precoce a fluxos algorítmicos alimenta privação crônica de sono, fragmentação atencional e quadros de ansiedade. Os parlamentares ressaltaram que a lei protege vulnerabilidades psicológicas sem restringir a liberdade de comunicação. A medida estabelece uma referência de âmbito nacional que vem inspirando outros estados norte-americanos a debaterem limites etários semelhantes.",
      "Paralelamente às salvaguardas legais, estabelecer parâmetros claros na rotina diária continua sendo indispensável. O Limitra App Block permite definir limites diários de tempo independentes para aplicativos selecionados, auxiliando na gestão saudável do uso do aparelho diretamente no próprio celular."
    ],
    source: "Câmara dos Representantes da Flórida & Gabinete do Governador",
    sourceUrl: "https://www.flgov.com",
    category: "Políticas governamentais e leis",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Flórida",
      "HB 3",
      "Proibição de redes sociais",
      "Menores de 14 anos",
      "Ron DeSantis",
      "Algoritmos viciantes",
      "Limitra App Block"
    ]
  },
  it: {
    id: "105",
    slug: "florida-legge-hb-3-divieto-social-media-sotto-14-anni",
    title: "Svolta storica in Florida: La legge HB 3 vieta i social media ai minori di 14 anni",
    summary: "Firmata dal governatore Ron DeSantis, la legge HB 3 della Florida proibisce ai minori di 14 anni l'apertura di profili su piattaforme algoritmiche persuasive. Obbligo di consenso genitoriale per i 14-15enni e sanzioni fino a 50.000 dollari per violazione.",
    content: [
      "Lo Stato della Florida ha approvato una delle leggi più incisive degli Stati Uniti per proteggere il benessere psicologico dei minori e porre un freno ai modelli di design digitale basati sulla dipendenza. La legge House Bill 3 (HB 3 - Protezioni online per i minori), promossa dal presidente della Camera Paul Renner e firmata dal governatore Ron DeSantis, vieta formalmente ai minori di 14 anni il possesso di account su piattaforme social governate da algoritmi predittivi.",
      "La disciplina istituisce un doppio livello di garanzia anagrafica a tutela dei giovanissimi. I servizi online dotati di schemi persuasivi non possono attivare nuovi account per gli utenti sotto i 14 anni e sono obbligati a individuare e cancellare i profili già registrati di questa fascia d'età. Per i ragazzi di 14 e 15 anni la permanenza sui social è consentita unicamente previa autorizzazione verificabile dei genitori. Su richiesta dei familiari o del minore, i gestori devono provvedere alla rimozione definitiva dei dati entro dieci giorni lavorativi.",
      "Il cardine della misura risiede nell'architettura tecnologica studiata per generare dipendenza, anziché sulla censura di specifici messaggi. La legge interviene contro lo scorrimento infinito (infinite scrolling), l'avvio automatico dei video, le notifiche push assidue e i contatori di gradimento personale come like e visualizzazioni. In base alla legge contro le pratiche commerciali sleali della Florida, le società che omettono controlli anagrafici adeguati rischiano sanzioni civili fino a 50.000 dollari per ciascuna infrazione.",
      "Pediatri, neuropsichiatri infantili e associazioni scolastiche hanno accolto con favore la riforma, ricordando come l'esposizione precoce alle timeline algoritmiche comprometta i ritmi del sonno, frantumi la concentrazione e alimenti stati d'ansia. I promotori hanno chiarito che il provvedimento argina tecniche commerciali di assuefazione tutelando i diritti costituzionali. La legge funge ora da modello apripista per numerosi altri Stati americani intenzionati a porre limiti stringenti per i minori.",
      "Accanto agli interventi legislativi, definire limiti pratici e costanti nella vita di tutti i giorni rimane essenziale. Limitra App Block consente di impostare limiti di tempo giornalieri indipendenti per le applicazioni selezionate, aiutando a regolare l'uso dello schermo direttamente dal dispositivo."
    ],
    source: "Camera dei Rappresentanti della Florida & Ufficio del Governatore",
    sourceUrl: "https://www.flgov.com",
    category: "Politiche governative e leggi",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Divieto social media",
      "Under 14",
      "Ron DeSantis",
      "Algoritmi persuasivi",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "105",
    slug: "florida-law-hb-3-social-media-ban-under-14",
    title: "قرار تاريخي في فلوريدا: قانون HB 3 يحظر وسائل التواصل الاجتماعي لمن هم دون 14 عاماً",
    summary: "وقع حاكم فلوريدا رون ديسانتيس قانون HB 3 الذي يحظر تماماً على الأطفال دون سن 14 عاماً فتح حسابات على المنصات الرقمية الإدمانية. يشترط القانون موافقة أولياء الأمور لسن 14 و15 عاماً ويفرض غرامات تصل إلى 50 ألف دولار.",
    content: [
      "أصدرت ولاية فلوريدا أحد أكثر القوانين صرامة في الولايات المتحدة لحماية الصحة النفسية للأطفال والمراهقين من التأثيرات الإدمانية للمنصات الرقمية التجارية. يحظر قانون مجلس النواب رقم 3 (HB 3 - حماية القاصرين عبر الإنترنت)، الذي دعمه رئيس مجلس النواب بول رينر ووقعه الحاكم رون ديسانتيس، تماماً على الأطفال دون سن 14 عاماً فتح أو امتلاك حسابات على منصات التواصل الاجتماعي القائمة على خوارزميات التوصية التفاعلية.",
      "يفرض الإطار القانوني نظاماً حمائياً من مستويين عمريين لضمان سلامة اليافعين. بموجب التشريع، يُمنع القاصرون دون سن 14 عاماً من إنشاء حسابات في التطبيقات المصممة لزيادة التفاعل، وتُلزم الشركات التقنية بحذف أي حسابات قائمة تتبع هذه الفئة العمرية. أما بالنسبة لليافعين في سن 14 و15 عاماً، فيُشترط الحصول على موافقة أبوية مؤكدة لإنشاء الحساب أو إدارته، مع إلزام الشركات بحذف الحساب وجميع البيانات المرتبطة به نهائياً في غضون عشرة أيام عمل عند طلب الوالدين أو القاصر.",
      "يركز القانون بصورة أساسية على آليات التصميم الهندسي المشجعة على الإدمان بدلاً من فرض قيود على حرية التعبير. وتشمل هذه الميزات التمرير اللانهائي (infinite scroll)، والتشغيل التلقائي لمقاطع الفيديو، وتدفقات التوصية الخوارزمية، والإشعارات اللحظية المستمرة، ومؤشرات التفاعل الشخصية مثل أزرار الإعجاب. وبموجب قانون ممارسات التجارة العادلة في فلوريدا، تواجه الشركات التي تخالف تدابير التحقق من العمر غرامات مدنية تصل إلى 50 ألف دولار عن كل انتهاك فردي.",
      "رحب أطباء الأطفال وخبراء الصحة النفسية وهيئات أولياء الأمور بالقانون، مشيرين إلى أن التعرض المبكر للخوارزميات يؤدي إلى تشتت الانتباه المزمن والحرمان من النوم والقلق. وأكد المشرعون أن القانون يستهدف آليات الإدمان التجاري وليس حرية التعبير، مما يجعله نموذجاً رائداً تدرسه ولايات أمريكية أخرى.",
      "وإلى جانب الضوابط القانونية، يظل وضع حدود عملية ومتوازنة للاستخدام اليومي أمراً ضرورياً. يتيح Limitra App Block تحديد حدود زمنية يومية مستقلة لكل تطبيق يجري اختياره، مما يساعد في إدارة وقت الشاشة مباشرة عبر الهاتف."
    ],
    source: "مجلس نواب فلوريدا ومكتب الحاكم",
    sourceUrl: "https://www.flgov.com",
    category: "السياسات الحكومية والقوانين",
    date: "2026-10-11",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "فلوريدا",
      "HB 3",
      "حظر وسائل التواصل",
      "دون 14 عاماً",
      "رون ديسانتيس",
      "خوارزميات إدمانية",
      "Limitra App Block"
    ]
  },
  id: {
    id: "105",
    slug: "florida-undang-undang-hb-3-larangan-media-sosial-di-bawah-14-tahun",
    title: "Keputusan Bersejarah di Florida: UU HB 3 Larang Media Sosial bagi Anak di Bawah 14 Tahun",
    summary: "Disahkan oleh Gubernur Ron DeSantis, UU HB 3 Florida melarang keras anak di bawah 14 tahun membuat akun di platform algoritmik yang adiktif. Izin orang tua diwajibkan bagi usia 14-15 tahun dengan denda hingga 50.000 dolar bagi pelanggar.",
    content: [
      "Negara Bagian Florida mengesahkan salah satu undang-undang perlindungan digital anak paling tegas di Amerika Serikat guna membentengi kesehatan mental generasi muda dari rekayasa platform yang adiktif. House Bill 3 (HB 3 - Perlindungan Daring untuk Anak di Bawah Umur), yang diprakarsai oleh Ketua DPR Florida Paul Renner dan ditandatangani oleh Gubernur Ron DeSantis, melarang keras anak-anak berusia di bawah 14 tahun memiliki akun di platform media sosial berfitur algoritma rekomendasi.",
      "Kerangka regulasi ini menetapkan dua jenjang batas usia demi melindungi remaja. Platform yang mengadopsi fitur penahan perhatian dilarang membuka akun baru bagi pengguna di bawah 14 tahun dan diwajibkan secara hukum untuk menghapus akun lama milik kelompok usia tersebut. Bagi remaja berusia 14 dan 15 tahun, kepemilikan akun diwajibkan mengantongi persetujuan orang tua atau wali yang dapat diverifikasi. Atas permohonan orang tua atau anak, pengelola layanan wajib menghapus akun secara permanen dalam waktu sepuluh hari kerja.",
      "Fokus aturan menyasar arsitektur desain yang dirancang memicu ketergantungan, bukan membatasi konten atau kebebasan berekspresi. Regulasi ini menargetkan fitur seperti gulir tanpa henti (infinite scroll), pemutaran video otomatis, notifikasi terus-menerus, dan indikator metrik seperti tombol suka dan tayangan. Di bawah payung Undang-Undang Praktik Perdagangan Menyesatkan Florida, perusahaan teknologi yang gagal menegakkan verifikasi usia menghadapi sanksi perdata hingga 50.000 dolar AS per pelanggaran.",
      "Dokter anak, psikolog perkembangan, dan organisasi orang tua menyambut baik langkah ini, seraya menyoroti bahwa keterikatan dini pada arus algoritma memperparah kurang tidur kronis, penurunan konsentrasi, serta kecemasan. Para pembuat undang-undang menegaskan bahwa aturan ini membatasi jebakan komersial tanpa mencederai hak konstitusional. Kebijakan Florida kini menjadi rujukan nasional bagi banyak negara bagian lain yang menyusun regulasi batas usia serupa.",
      "Selain regulasi formal, menetapkan batasan nyata dalam rutinitas harian tetap menjadi kunci utama. Limitra App Block menyediakan pengaturan batas durasi harian mandiri untuk aplikasi yang dipilih, membantu mengontrol penggunaan layar langsung dari perangkat."
    ],
    source: "DPR Florida & Kantor Gubernur",
    sourceUrl: "https://www.flgov.com",
    category: "Kebijakan Pemerintah & Hukum",
    date: "2026-10-11",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Larangan media sosial",
      "Di bawah 14 tahun",
      "Ron DeSantis",
      "Algoritma adiktif",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "105",
    slug: "florida-batas-hb-3-bawal-social-media-wala-pang-14-taon",
    title: "Makasaysayang Pasya sa Florida: Ipinagbabawal ng Batas HB 3 ang Social Media sa Wala Pang 14 Taon",
    summary: "Nilagdaan ni Gobernador Ron DeSantis ang batas HB 3 sa Florida na nagbabawal sa mga batang wala pang 14 taong gulang na magkaroon ng account sa mga nakakaadik na social platform. Kinakailangan ang pahintulot ng magulang para sa edad 14-15 at may multang aabot sa $50,000.",
    content: [
      "Nilagdaan ng Estado ng Florida ang isa sa pinakamatibay na batas sa Estados Unidos para protektahan ang kalusugang pangkaisipan ng kabataan mula sa nakakaadik na disenyo ng mga digital platform. Ang House Bill 3 (HB 3 - Proteksyon sa Online para sa mga Menor de Edad), na itinaguyod ni House Speaker Paul Renner at nilagdaan ni Gobernador Ron DeSantis, ay mahigpit na nagbabawal sa mga batang wala pang 14 taong gulang na magkaroon ng account sa mga algorithmic social media platform.",
      "Nagtatag ang bagong batas ng dalawang antas ng proteksyon batay sa edad upang gabayan ang mga kabataan. Ang mga platform na gumagamit ng mga tampok na pampatagal ng paggamit ay bawal magbukas ng mga bagong account para sa mga wala pang 14 taon, at inaatasan silang tukuyin at burahin ang mga umiiral nang account sa naturang grupo ng edad. Para sa mga kabataang may edad 14 at 15 taon, kinakailangan ang malinaw at napatunayang pahintulot ng magulang o tagapangalaga bago makapagbukas o makagamit ng account. Kapag hiniling ng magulang o ng menor de edad, obligadong permanenteng burahin ang account sa loob ng sampung araw ng trabaho.",
      "Nakatutok ang regulasyon sa mga tampok ng teknikal na disenyo na nagdudulot ng adiksyon kaysa sa pagbabawal sa partikular na opinyon o nilalaman. Partikular na pinupuntirya ng batas ang walang-katapusang pag-scroll (infinite scroll), awtomatikong pag-play ng video, tuloy-tuloy na push notification, at mga sukatan ng pakikipag-ugnayan tulad ng mga bilang ng 'like'. Sa ilalim ng batas laban sa panlilinlang sa kalakalan ng Florida, ang mga kompanya ng teknolohiya na hindi nagpapatupad ng tamang pagsusuri sa edad ay mahaharap sa multang sibil na aabot sa $50,000 bawat paglabag.",
      "Malugod na tinanggap ng mga pediatrician, psychologist, at samahan ng mga magulang ang hakbang na ito, habang binibigyang-diin na ang maagang pagkakalantad sa mga algorithm ay sanhi ng matinding kakulangan sa tulog, kawalan ng pokus, at pagtaas ng pagkabalisa. Binigyang-diin ng mga mambabatas na pinipigilan ng batas ang mga komersyal na pamamaraan ng pagkaadik nang hindi nilalabag ang kalayaan sa pamamahayag. Nagsisilbi itong huwaran para sa iba pang mga estado sa Amerika na naghahanda ng katulad na mga limitasyon sa edad.",
      "Kasabay ng mga legal na regulasyon, mahalaga ring magtakda ng malinaw at praktikal na hangganan sa pang-araw-araw na paggamit ng telepono. Nagbibigay ang Limitra App Block ng sariling pang-araw-araw na limitasyon sa oras para sa mga piling application, na tumutulong upang pamahalaan ang screen time nang direkta sa mismong device."
    ],
    source: "Kapulungan ng mga Kinatawan ng Florida at Tanggapan ng Gobernador",
    sourceUrl: "https://www.flgov.com",
    category: "Mga Patakaran ng Pamahalaan at Batas",
    date: "2026-10-11",
    readTime: "5 min",
    featured: false,
    tags: [
      "Florida",
      "HB 3",
      "Bawal ang Social Media",
      "Wala pang 14 Taon",
      "Ron DeSantis",
      "Algorithmic Feeds",
      "Limitra App Block"
    ]
  },
  th: {
    id: "105",
    slug: "florida-law-hb-3-social-media-ban-under-14-th",
    title: "มลรัฐฟลอริดาผ่านกฎหมายประวัติศาสตร์ HB 3: สั่งห้ามเด็กอายุต่ำกว่า 14 ปีใช้โซเชียลมีเดีย",
    summary: "ผู้ว่าการรัฐ รอน เดอแซนทิส ลงนามในกฎหมาย HB 3 ของฟลอริดา สั่งห้ามเด็กอายุต่ำกว่า 14 ปีเปิดบัญชีบนแพลตฟอร์มที่ใช้อัลกอริทึมชวนเสพติด กำหนดให้ต้องได้รับความยินยอมจากผู้ปกครองสำหรับเด็กอายุ 14-15 ปี พร้อมโทษปรับสูงสุด 50,000 ดอลลาร์",
    content: [
      "มลรัฐฟลอริดาได้ประกาศบังคับใช้หนึ่งในกฎหมายคุ้มครองความปลอดภัยดิจิทัลสำหรับเด็กที่ครอบคลุมที่สุดในสหรัฐอเมริกา เพื่อปกป้องสุขภาพจิตของเยาวชนจากสถาปัตยกรรมการออกแบบแพลตฟอร์มที่ชวนเสพติด กฎหมาย House Bill 3 (HB 3 - การคุ้มครองผู้เยาว์บนโลกออนไลน์) ซึ่งผลักดันโดยประธานสภาผู้แทนราษฎรฟลอริดา พอล เรนเนอร์ และลงนามโดยผู้ว่าการรัฐ รอน เดอแซนทิส กำหนดห้ามเด็กที่มีอายุต่ำกว่า 14 ปีเปิดหรือถือครองบัญชีบนแพลตฟอร์มโซเชียลมีเดียที่ใช้อัลกอริทึมชวนเสพติดอย่างเด็ดขาด",
      "กรอบกฎหมายนี้สร้างแนวทางป้องกันแบบสองระดับตามช่วงอายุเพื่อคุ้มครองเยาวชน แพลตฟอร์มที่มีฟีเจอร์กระตุ้นการใช้งานถูกสั่งห้ามเปิดบัญชีให้เด็กอายุต่ำกว่า 14 ปี พร้อมสั่งให้บริษัทเทคโนโลยีระบุตัวตนและลบบัญชีเดิมของกลุ่มอายุดังกล่าวอย่างเด็ดขาด ส่วนเยาวชนอายุ 14 และ 15 ปีจะต้องได้รับความยินยอมที่ตรวจสอบได้จากบิดามารดาหรือผู้ปกครองก่อนจึงจะสามารถเปิดหรือใช้งานบัญชีได้ และแพลตฟอร์มต้องลบบัญชีและข้อมูลอย่างถาวรภายใน 10 วันทำการหากผู้ปกครองหรือผู้เยาว์ร้องขอ",
      "จุดสำคัญของกฎหมายมุ่งเน้นไปที่สถาปัตยกรรมการออกแบบทางเทคนิคที่สร้างความเสพติดมากกว่าการควบคุมเนื้อหา เช่น การเลื่อนหน้าจอแบบไม่สิ้นสุด (Infinite Scroll) การเล่นวิดีโออัตโนมัติ การส่งการแจ้งเตือนแบบพุชตลอดเวลา ฟีดแนะนำเนื้อหา และการแสดงยอดไลก์หรือยอดการมีส่วนร่วม โดยภายใต้กฎหมายว่าด้วยการค้าที่ไม่เป็นธรรมของฟลอริดา บริษัทเทคโนโลยีที่ฝ่าฝืนหรือไม่ตรวจยืนยันอายุจะเผชิญโทษปรับทางแพ่งสูงสุดถึง 50,000 ดอลลาร์สหรัฐต่อการละเมิดหนึ่งครั้ง",
      "กุมารแพทย์ นักจิตวิทยาพัฒนาการ และกลุ่มผู้ปกครองต่างให้การสนับสนุนกฎหมายนี้เป็นอย่างมาก โดยชี้ว่าการเข้าถึงสื่ออัลกอริทึมตั้งแต่อายุน้อยส่งผลให้สมาธิสั้น ขาดการนอนหลับ และมีความวิตกกังวลสูงขึ้น ผู้บัญญัติกฎหมายย้ำว่ามาตรการนี้จำกัดกลไกการสร้างความเสพติดเชิงพาณิชย์โดยไม่ละเมิดเสรีภาพในการแสดงออก และกลายเป็นบรรทัดฐานสำคัญสำหรับรัฐอื่น ๆ ในสหรัฐฯ ที่กำลังพิจารณาข้อจำกัดทางดิจิทัลในลักษณะเดียวกัน",
      "นอกเหนือจากกรอบกฎหมายของภาครัฐแล้ว การสร้างขอบเขตที่สมดุลในการใช้งานแต่ละวันก็มีความสำคัญไม่แพ้กัน Limitra App Block มอบความสามารถในการกำหนดเวลาใช้งานรายวันแยกอิสระสำหรับแอปพลิเคชันที่เลือก เพื่อช่วยบริหารจัดการการใช้หน้าจอได้โดยตรงบนอุปกรณ์ของคุณ"
    ],
    source: "สภาผู้แทนราษฎรฟลอริดาและสำนักงานผู้ว่าการรัฐ",
    sourceUrl: "https://www.flgov.com",
    category: "นโยบายและกฎหมายของรัฐ",
    date: "2026-10-11",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "ฟลอริดา",
      "HB 3",
      "ห้ามใช้โซเชียลมีเดีย",
      "อายุต่ำกว่า 14 ปี",
      "รอน เดอแซนทิส",
      "ฟีดอัลกอริทึม",
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
  
  if (list.some(item => item.id === "105")) {
    console.log(`[${lang}] ID 105 already exists, skipping.`);
    continue;
  }

  list.unshift(articles[lang]);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] ID 105 prepended successfully to ${path.basename(filePath)}`);
}
