import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const newsData = {
  tr: {
    id: "108",
    slug: "norvec-sosyal-medya-16-yas-siniri-ve-yas-dogrulama-yasasi",
    title: "Norveç'ten Sosyal Medyada Radikal Adım: Yaş Sınırı 16'ya Çıkarılıyor, Şirketlere Zorunlu Yaş Doğrulama Geliyor",
    summary: "Norveç Hükümeti, çocukları algoritmaların bağımlılık yapıcı etkilerinden korumak için sosyal medya asgari yaş sınırını 16'ya yükselten yasa teklifini duyurdu. Medietilsynet verilerine göre 9-11 yaş grubunda yaygınlaşan erken kullanıma karşı Kişisel Veriler Yasası güncellenirken, yaş doğrulama sorumluluğu ebeveynlerden alınıp teknoloji şirketlerine yükleniyor.",
    content: [
      "Norveç Başbakanı Jonas Gahr Støre ve Çocuk ve Aile Bakanı Kjersti Toppe, çocukların ve gençlerin zihinsel gelişimini korumak ve büyük teknoloji şirketlerinin algoritmik baskısına karşı durmak amacıyla sosyal medyada köklü bir yasal düzenleme başlattıklarını duyurdu. Mevcut uygulamadaki 13 yaş sınırının fiilen işlemediğini ve çocukların savunmasız kaldığını belirten Başbakan Støre, bu adımı 'teknoloji devlerinin ticari algoritmalarına karşı küçük çocukların beyinlerini koruma mücadelesi' olarak niteledi. Hükümetin hazırladığı yasa tasarısı, sosyal medya platformlarına erişim için asgari yaş sınırını 16'ya çıkarmayı ve teknoloji şirketlerine bağlayıcı teknik yükümlülükler getirmeyi öngörüyor.",
      "Yasa adımının ardındaki en kritik gerekçelerden birini, Norveç Medya Otoritesi'nin (Medietilsynet) yürüttüğü 'Barn og medier' (Çocuklar ve Medya) araştırmasının çarpıcı sonuçları oluşturuyor. Resmî verilere göre Norveç'te 9 yaşındaki çocukların yarısından fazlası (%53), 10 yaşındakilerin %58'i ve 11 yaşındakilerin ise %72'si platformların beyana dayalı 13 yaş kuralına rağmen Snapchat, TikTok ve Instagram gibi sosyal ağları aktif olarak kullanıyor. Medietilsynet, basit bir doğum tarihi seçimiyle atlatılabilen sembolik kısıtlamaların çocukları zararlı içeriklere, gizli ticari reklamlara ve sonsuz akış girdabına karşı tamamen korumasız bıraktığına dikkat çekiyor.",
      "Yeni yasal mimari, Norveç Kişisel Veriler Yasası'nda (Personopplysningsloven) yapılacak bağlayıcı bir değişikliğe dayanıyor. Düzenleme yürürlüğe girdiğinde, 16 yaşından küçük bireyler kişisel verilerinin işlenmesine ve profillemeye yasal olarak rıza gösteremeyecek; bu da platformların reşit olmayan kullanıcılara hesap açmasını hukuken geçersiz kılacak. En önemli yapısal dönüşüm ise yaş teyidi sorumluluğunun ebeveynlerin omuzlarından alınıp doğrudan teknoloji şirketlerine yüklenmesi olacak. Platformlar, AB Dijital Hizmetler Yasası (DSA) standartlarıyla uyumlu, BankID ve elektronik kimlik altyapılarına dayanan güvenilir ve manipüle edilemez yaş doğrulama sistemleri kurmak zorunda kalacak; kurallara uymayan şirketlere ağır idari yaptırımlar uygulanacak.",
      "Tasarıda pedagojik ve sosyal dinamikler de gözetilerek özel bir yaş hesabı benimsendi. Kısıtlama, bir gencin 16 yaşına bastığı takvim yılının 1 Ocak gününden itibaren geçerli olacak; böylece aynı sınıftaki öğrencilerin doğum ayı farkı yüzünden sosyal olarak dışlanmasının ve sınıf içi bölünmelerin önüne geçilecek. Çocuk ve Aile Bakanı Kjersti Toppe, düzenlemenin aynı zamanda ebeveynlere güçlü bir yasal güvence sunduğunu vurgulayarak, 'Pek çok anne baba çocuklarına telefon ve sosyal medya konusunda sınır koymak istiyor ancak akran baskısı nedeniyle tek başına direnemiyor. Bu yasa, ebeveynlere arkalarını yaslayabilecekleri meşru bir dayanak sunuyor' açıklamasında bulundu.",
      "Yasal düzenlemeler platform düzeyinde yaş bariyerleri inşa etmeyi amaçlarken, günlük hayatta ekran başında geçirilen zamanı dengede tutmak bireysel disiplin ve somut araçlar gerektiriyor. Seçilen uygulamalara bağımsız günlük kullanım süresi limitleri belirlemek isteyenler için Limitra App Block, süre dolduğunda erişimi keserek sağlıklı dijital alışkanlıkların korunmasına yardımcı oluyor."
    ],
    source: "Norveç Hükümeti (Regjeringen.no) & Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Devlet Düzenlemeleri & Yasalar",
    date: "2026-10-13",
    readTime: "5 dk",
    featured: false,
    tags: [
      "Norveç Sosyal Medya Yasağı",
      "16 Yaş Sınırı",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Zorunlu Yaş Doğrulama",
      "Limitra App Block"
    ]
  },
  en: {
    id: "108",
    slug: "norway-social-media-16-age-limit-mandatory-verification",
    title: "Norway Takes Decisive Action on Social Media: Minimum Age Raised to 16 with Mandatory Tech Verification",
    summary: "The Norwegian government has announced a comprehensive legislative proposal raising the minimum age for social media use to 16 to shield children from addictive algorithms. Backed by Medietilsynet data showing widespread underage use among 9-to-11-year-olds, the bill amends the Personal Data Act and shifts the burden of age verification entirely onto tech giants.",
    content: [
      "Norwegian Prime Minister Jonas Gahr Støre and Minister for Children and Families Kjersti Toppe have unveiled major legislative proposals to raise the minimum age for social media use to 16, escalating state efforts to protect youth from commercial algorithmic design. Describing the initiative as an imperative battle to defend young developing brains against predatory tech conglomerates, Støre emphasized that existing self-declared age gates have failed to safeguard children. The planned bill establishes binding regulatory obligations on platforms to verify age electronically, replacing informal self-declarations with verifiable barriers.",
      "The policy shift is anchored in alarming empirical data from the Norwegian Media Authority's (Medietilsynet) 'Barn og medier' (Children and Media) national survey. The findings revealed that over half (53%) of 9-year-olds, 58% of 10-year-olds, and 72% of 11-year-olds in Norway actively maintain accounts on platforms such as Snapchat, TikTok, and Instagram, despite nominal 13-year terms of service. Medietilsynet highlighted that easily circumvented date-of-birth inputs leave young minors fully exposed to hyper-personalized commercial feeds, harmful content, and compulsive screen habits.",
      "At the core of the regulatory architecture lies an amendment to Norway's Personal Data Act (Personopplysningsloven). Under the new framework, minors under 16 will no longer be legally permitted to consent to commercial data processing or algorithmic profiling, making underage accounts legally void. Crucially, the enforcement burden shifts from parents directly onto tech platforms. In alignment with European Digital Services Act (DSA) standards, social networks will be legally compelled to integrate tamper-proof electronic age-verification mechanisms—such as BankID and certified e-ID gateways—subject to severe financial penalties for non-compliance.",
      "To prevent social fragmentation within school classrooms, the government structured the age threshold to take effect on January 1st of the calendar year a youth turns 16, ensuring that entire peer cohorts and classes gain eligibility concurrently. Minister Kjersti Toppe underscored that the legislation provides parents with much-needed institutional backing: 'Many parents genuinely want to establish firm digital boundaries, but feel isolated against relentless peer pressure. This statute grants mothers and fathers a legitimate legal anchor to stand upon.'",
      "While government regulations target platform-level age barriers, sustaining balanced digital habits in everyday life requires deliberate personal boundaries. For those looking to set independent daily time limits on selected applications, Limitra App Block provides local device controls that restrict access once a chosen limit is reached."
    ],
    source: "Norwegian Government (Regjeringen.no) & Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Government Policies & Laws",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Norway Social Media Law",
      "16 Year Age Limit",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personal Data Act",
      "Mandatory Age Verification",
      "Limitra App Block"
    ]
  },
  es: {
    id: "108",
    slug: "noruega-limite-edad-16-redes-sociales-verificacion-obligatoria",
    title: "Noruega da un paso decisivo en redes sociales: eleva la edad mínima a los 16 años y exigirá verificación obligatoria",
    summary: "El gobierno noruego presenta un proyecto de ley para elevar la edad mínima en redes sociales a los 16 años y proteger a los menores de los algoritmos adictivos. Respaldada por datos de Medietilsynet que revelan un uso masivo entre los 9 y 11 años, la norma modifica la Ley de Datos Personales y traslada la verificación técnica a las grandes plataformas.",
    content: [
      "El primer ministro de Noruega, Jonas Gahr Støre, y la ministra de Infancia y Familias, Kjersti Toppe, anunciaron una profunda reforma legislativa para elevar a los 16 años la edad mínima de acceso a las redes sociales, con el objetivo de salvaguardar el desarrollo cognitivo de los jóvenes frente a la presión comercial de los algoritmos. Al calificar esta iniciativa como una batalla decisiva para defender el cerebro infantil frente al poder de los gigantes tecnológicos, Støre subrayó que el umbral actual de 13 años basado en la autodeclaración ha fracasado en la práctica. El proyecto de ley impondrá requisitos técnicos vinculantes a las plataformas para sustituir los filtros declarativos por barreras digitales reales.",
      "Uno de los motivos centrales de esta medida se fundamenta en las revelaciones del estudio nacional 'Barn og medier' (Niños y medios), llevado a cabo por la Autoridad Noruega de Medios (Medietilsynet). Según los datos oficiales, más de la mitad de los niños de 9 años (53%), el 58% de los de 10 años y el 72% de los de 11 años en Noruega utilizan de forma habitual redes como Snapchat, TikTok e Instagram, eludiendo las restricciones nominales vigentes. Medietilsynet advirtió de que un simple formulario de fecha de nacimiento deja a los menores totalmente indefensos ante flujos comerciales adictivos y contenidos inapropiados.",
      "La nueva arquitectura jurídica se articula a través de una modificación vinculante de la Ley de Datos Personales de Noruega (Personopplysningsloven). Con esta reforma, los menores de 16 años carecerán de validez legal para consentir el tratamiento comercial de sus datos y la elaboración de perfiles algorítmicos, lo que convertirá en ilícitas las cuentas de menores de esa edad. El cambio estructural más relevante radica en que la responsabilidad de comprobar la edad deja de recaer sobre los padres y se traslada plenamente a las empresas tecnológicas. Estas estarán obligadas a implantar sistemas de autenticación electrónica seguros y verificables, como BankID, bajo amenaza de severas sanciones en sintonía con la Ley de Servicios Digitales (DSA) de la UE.",
      "Para evitar la fragmentación social dentro de las aulas escolares, el proyecto prevé que la restricción entre en vigor el 1 de enero del año natural en que el menor cumpla 16 años, garantizando que todos los compañeros de un mismo curso alcancen el acceso de manera simultánea. La ministra Kjersti Toppe destacó que la medida proporciona un respaldo indispensable a las familias: 'Muchos progenitores desean poner límites al uso del móvil y las redes, pero se sienten desbordados ante la presión social de los compañeros. Esta ley otorga a los padres una base legal firme para decir no'.",
      "Mientras las normativas estatales buscan establecer barreras de acceso en las plataformas, mantener hábitos equilibrados en el día a día exige límites personales deliberados. Para quienes desean definir límites diarios independientes de tiempo en aplicaciones concretas, Limitra App Block permite pausar el acceso en el propio dispositivo una vez alcanzado el tiempo fijado."
    ],
    source: "Gobierno de Noruega (Regjeringen.no) y Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Políticas gubernamentales y leyes",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Ley de Redes Sociales en Noruega",
      "Límite de 16 Años",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Verificación de Edad Obligatoria",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "108",
    slug: "norvege-limite-age-16-ans-reseaux-sociaux-verification-obligatoire",
    title: "La Norvège durcit l'accès aux réseaux sociaux : âge minimum relevé à 16 ans et vérification obligatoire imposée aux plateformes",
    summary: "Le gouvernement norvégien a présenté un projet de loi élevant à 16 ans l'âge d'accès aux réseaux sociaux afin de protéger les mineurs des algorithmes addictifs. Fondée sur les conclusions de Medietilsynet révélant un usage massif dès 9-11 ans, la réforme modifie la loi sur les données personnelles et transfère l'obligation de contrôle aux géants de la tech.",
    content: [
      "Le Premier ministre norvégien Jonas Gahr Støre et la ministre de l'Enfance et des Familles Kjersti Toppe ont annoncé une offensive législative majeure visant à relever l'âge d'accès aux réseaux sociaux à 16 ans, afin de prémunir les plus jeunes contre l'emprise des algorithmes commerciaux. Qualifiant cette démarche de combat indispensable pour préserver le cerveau des enfants face aux géants de la technologie, Støre a rappelé que l'actuelle limite de 13 ans fondée sur la simple déclaration d'âge s'avère inopérante. Le texte en préparation impose désormais aux plateformes des contraintes techniques strictes pour vérifier réellement l'âge des utilisateurs.",
      "Cette initiative fait suite aux conclusions alarmantes de l'enquête nationale 'Barn og medier' (Enfants et médias) menée par l'Autorité norvégienne des médias (Medietilsynet). Selon ces données officielles, plus de la moitié des enfants de 9 ans (53 %), 58 % de ceux de 10 ans et 72 % des 11 ans en Norvège utilisent régulièrement des applications telles que Snapchat, TikTok et Instagram, en contournant sans difficulté les règles déclaratives. Medietilsynet souligne qu'un simple formulaire de date de naissance laisse les mineurs entièrement exposés aux flux de recommandation personnalisés et aux contenus préjudiciables.",
      "Le dispositif repose sur une modification contraignante de la loi norvégienne sur les données personnelles (Personopplysningsloven). Une fois la réforme adoptée, les jeunes de moins de 16 ans ne pourront plus légalement consentir au profilage de leurs données, rendant nulle l'ouverture de compte pour cette tranche d'âge. Le tournant majeur réside dans le déplacement de la charge de vérification : elle ne pèsera plus sur les parents, mais directement sur les entreprises du numérique. Celles-ci devront déployer des passerelles d'identification électronique inviolables, telles que BankID, sous peine de lourdes sanctions financières inspirées du règlement européen sur les services numériques (DSA).",
      "Afin d'éviter toute rupture de cohésion sociale au sein des classes scolaires, le seuil s'appliquera à compter du 1er janvier de l'année civile au cours de laquelle l'adolescent fête ses 16 ans, permettant à une même promotion d'élèves de franchir cette étape ensemble. La ministre Kjersti Toppe a souligné que ce texte offre un point d'appui indispensable aux parents : 'De nombreux parents souhaitent fixer des limites claires aux écrans, mais se sentent démunis face à la pression du groupe. Cette loi leur confère une légitimité institutionnelle indiscutable pour dire non.'",
      "Alors que les politiques publiques visent à ériger des garde-fous sur les plateformes, préserver un équilibre numérique au quotidien repose sur des limites personnelles concrètes. Pour ceux qui souhaitent définir des limites quotidiennes indépendantes par application, Limitra App Block permet de restreindre l'accès directement sur l'appareil lorsque la durée choisie est atteinte."
    ],
    source: "Gouvernement norvégien (Regjeringen.no) et Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Politiques publiques et lois",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Loi Réseaux Sociaux Norvège",
      "Limite 16 Ans",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Contrôle de l'Âge Obligatoire",
      "Limitra App Block"
    ]
  },
  de: {
    id: "108",
    slug: "norwegen-altersgrenze-16-social-media-verpflichtende-alterspruefung",
    title: "Norwegen plant radikale Wende bei Social Media: Mindestalter steigt auf 16 Jahre mit verbindlicher Altersprüfung",
    summary: "Die norwegische Regierung bringt einen Gesetzentwurf ein, der das Mindestalter für soziale Netzwerke auf 16 Jahre anhebt, um Kinder vor suchterzeugenden Algorithmen zu schützen. Gestützt auf Medietilsynet-Daten über die massive Nutzung bei 9- bis 11-Jährigen, überträgt das Gesetz die Prüfpflicht auf die Tech-Konzerne.",
    content: [
      "Der norwegische Ministerpräsident Jonas Gahr Støre und die Ministerin für Kinder und Familien Kjersti Toppe haben weitreichende gesetzliche Schritte angekündigt, um das Mindestalter für die Nutzung sozialer Medien auf 16 Jahre anzuheben und Heranwachsende vor dem Einfluss kommerzieller Algorithmen zu schützen. Støre bezeichnete die Initiative als notwendigen Kampf zum Schutz kindlicher Gehirne gegen die Marktmacht der Tech-Giganten und stellte klar, dass die bisherige formale 13-Jahre-Regel in der Praxis wirkungslos geblieben ist. Der Gesetzentwurf sieht verbindliche technische Hürden vor, die reine Selbstauskünfte durch manipulationssichere Verfahren ersetzen.",
      "Ein wesentlicher Auslöser für das Eingreifen sind die alarmierenden Ergebnisse der nationalen Erhebung 'Barn og medier' (Kinder und Medien) der norwegischen Medienbehörde (Medietilsynet). Den offiziellen Daten zufolge nutzen in Norwegen mehr als die Hälfte der 9-Jährigen (53 %), 58 % der 10-Jährigen und 72 % der 11-Jährigen regelmäßig Plattformen wie Snapchat, TikTok und Instagram, obwohl diese formell erst ab 13 Jahren freigegeben sind. Medietilsynet warnte davor, dass leicht zu umgehende Geburtsdatumsabfragen Minderjährige schutzlos algorithmischen Reizfluten und schädlichen Inhalten aussetzen.",
      "Kernstück der rechtlichen Neuerung ist eine Änderung des norwegischen Datenschutzgesetzes (Personopplysningsloven). Nach Inkrafttreten können Jugendliche unter 16 Jahren nicht mehr wirksam in die Verarbeitung ihrer personenbezogenen Daten zu Profiling-Zwecken einwilligen, womit entsprechende Konten juristisch unzulässig werden. Die entscheidende Verschiebung betrifft die Durchsetzung: Die Verantwortung für die Altersprüfung wird den Eltern abgenommen und vollständig den Tech-Plattformen auferlegt. Diese müssen fälschungssichere elektronische Nachweissysteme wie BankID einführen; bei Verstößen drohen spürbare Sanktionen im Einklang mit dem Digital Services Act (DSA) der EU.",
      "Um soziale Ausschlüsse im Schulalltag zu vermeiden, greift die Regelung ab dem 1. Januar des Kalenderjahres, in dem Jugendliche das 16. Lebensjahr vollenden, sodass Klassenverbände den Übergang gemeinsam durchlaufen. Ministerin Kjersti Toppe hob hervor, dass das Gesetz Familien den Rücken stärkt: 'Viele Eltern möchten den Smartphone- und Social-Media-Konsum begrenzen, scheitern aber am immensen Gruppendruck im Freundeskreis. Dieses Gesetz verschafft Eltern eine verlässliche behördliche Handhabe, um Nein zu sagen.'",
      "Während gesetzliche Vorgaben Altersgrenzen auf Plattformebene anstreben, erfordert ein ausgeglichener digitaler Alltag im Hier und Jetzt klare persönliche Leitplanken. Für diejenigen, die für ausgewählte Anwendungen unabhängige tägliche Zeitlimits festlegen möchten, hilft Limitra App Block dabei, den Zugriff auf dem eigenen Gerät zu sperren, sobald das festgelegte Limit erreicht ist."
    ],
    source: "Norwegische Regierung (Regjeringen.no) & Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Regierungspolitik & Gesetze",
    date: "2026-10-13",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "Norwegen Social Media Gesetz",
      "16 Jahre Altersgrenze",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Verbindliche Altersprüfung",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "108",
    slug: "noruega-limite-idade-16-anos-redes-sociais-verificacao-obrigatoria",
    title: "Noruega toma medida histórica nas redes sociais: idade mínima sobe para 16 anos com verificação obrigatória",
    summary: "O governo norueguês apresentou um projeto de lei que eleva para 16 anos a idade mínima para acesso às redes sociais, visando proteger jovens contra algoritmos viciantes. Apoiada em dados da Medietilsynet sobre uso precoce entre 9 e 11 anos, a medida altera a Lei de Proteção de Dados e transfere a responsabilidade técnica para as plataformas.",
    content: [
      "O primeiro-ministro da Noruega, Jonas Gahr Støre, e a ministra da Infância e Famílias, Kjersti Toppe, anunciaram uma reforma legislativa profunda para estabelecer em 16 anos a idade mínima de acesso às redes sociais, intensificando a defesa do desenvolvimento cerebral dos jovens diante da engenharia algorítmica. Ao caracterizar a proposta como uma batalha indispensável para proteger cérebros infantis da pressão comercial das grandes empresas de tecnologia, Støre afirmou que o atual limite formal de 13 anos não oferece proteção real. O projeto de lei criará obrigações vinculantes para que as plataformas apliquem barreiras técnicas autênticas.",
      "A fundamentação da proposta baseia-se nos dados do levantamento nacional 'Barn og medier' (Crianças e Mídia), realizado pela Autoridade Norueguesa de Mídia (Medietilsynet). Os registros oficiais revelam que na Noruega mais da metade das crianças de 9 anos (53%), 58% das de 10 anos e 72% das de 11 anos utilizam ativamente plataformas como Snapchat, TikTok e Instagram, contornando com facilidade os termos declaratórios. A Medietilsynet ressaltou que campos editáveis de data de nascimento deixam os menores totalmente expostos a feeds personalizados viciantes e estímulos prejudiciais.",
      "A espinha dorsal jurídica reside em uma alteração expressa na Lei de Dados Pessoais da Noruega (Personopplysningsloven). Com a nova norma, menores de 16 anos não poderão autorizar legalmente a coleta e o processamento de seus dados para fins de criação de perfis comerciais, tornando ilícitas contas criadas abaixo dessa faixa etária. A principal mudança de paradigma retira o peso da fiscalização dos pais e o transfere para as gigantes da tecnologia, que deverão integrar sistemas de identificação digital seguros, como o BankID, sujeitando-se a multas pesadas alinhadas à Lei de Serviços Digitais (DSA) da União Europeia.",
      "Para evitar exclusão social no ambiente escolar, a restrição passará a valer a partir de 1º de janeiro do ano em que o adolescente completa 16 anos, garantindo que toda a turma escolar alcance a permissão no mesmo período. A ministra Kjersti Toppe enfatizou que o projeto oferece respaldo crucial aos lares: 'Muitos pais desejam limitar o uso de celulares e redes sociais, mas encontram extrema dificuldade diante da pressão dos pares. Esta legislação concede às famílias uma base jurídica sólida para dizer não.'",
      "Enquanto as legislações buscam erguer barreiras de idade no nível das plataformas, manter hábitos digitais equilibrados no cotidiano exige limites pessoais deliberados. Para quem deseja definir limites diários independentes de tempo em aplicativos selecionados, o Limitra App Block permite interromper o acesso diretamente no aparelho assim que o tempo determinado é atingido."
    ],
    source: "Governo da Noruega (Regjeringen.no) e Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Políticas governamentais e leis",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Lei de Redes Sociais na Noruega",
      "Limite de 16 Anos",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Verificação de Idade Obrigatória",
      "Limitra App Block"
    ]
  },
  it: {
    id: "108",
    slug: "norvegia-limite-eta-16-anni-social-network-verifica-obbligatoria",
    title: "La Norvegia fissa a 16 anni il limite per i social network: verifica dell'età obbligatoria per le grandi piattaforme",
    summary: "Il governo norvegese ha annunciato una proposta di legge che porta a 16 anni l'età minima per l'accesso ai social media, proteggendo i giovani dai feed algoritmici. Basata sui dati di Medietilsynet che mostrano un utilizzo diffuso già tra 9 e 11 anni, la riforma trasferisce l'onere della verifica tecnica sui colossi tecnologici.",
    content: [
      "Il Primo Ministro norvegese Jonas Gahr Støre e la Ministra per l'Infanzia e le Famiglie Kjersti Toppe hanno annunciato un intervento legislativo radicale per innalzare a 16 anni l'età minima per l'accesso ai social network, rafforzando la tutela dei giovani contro la progettazione algoritmica commerciale. Descrivendo la misura come una battaglia necessaria per proteggere le menti dei bambini dallo strapotere dei colossi tecnologici, Støre ha rimarcato che l'attuale soglia dei 13 anni basata su un'autocertificazione informale è del tutto inefficace. Il disegno di legge imporrà alle aziende vincoli tecnici stringenti per certificare l'età in modo verificabile.",
      "La decisione politica trova riscontro nei dati allarmanti dell'indagine nazionale 'Barn og medier' (Bambini e Media) condotta dall'Autorità norvegese per i media (Medietilsynet). Dalle statistiche ufficiali emerge che oltre la metà dei bambini di 9 anni (53%), il 58% dei bambini di 10 anni e il 72% di quelli di 11 anni in Norvegia utilizzano regolarmente piattaforme come Snapchat, TikTok e Instagram, aggirando con un click i limiti formali. Medietilsynet ha evidenziato che la semplice compilazione manuale della data di nascita lascia i minori completamente indifesi dinanzi a contenuti lesivi e dinamiche compulsive.",
      "L'impianto normativo si basa sulla modifica della Legge sui dati personali della Norvegia (Personopplysningsloven). Con l'approvazione del provvedimento, i minori di 16 anni non potranno più prestare legalmente il consenso al trattamento dei propri dati o alla profilazione, rendendo nulli gli account aperti al di sotto di questa soglia. Il passaggio fondamentale consiste nel trasferire la responsabilità del controllo dai genitori direttamente alle aziende tecnologiche. Le piattaforme dovranno implementare sistemi di identità elettronica certificati, come BankID, rischiando pesanti sanzioni finanziarie calibrate sugli standard del Digital Services Act (DSA) europeo.",
      "Per evitare disparità relazionali all'interno delle classi scolastiche, la norma prevede che il divieto decada il 1° gennaio dell'anno solare in cui l'adolescente compie 16 anni, consentendo ai compagni di classe di accedere contemporaneamente. La ministra Kjersti Toppe ha chiarito che il provvedimento costituisce un sostegno prezioso per le famiglie: 'Moltissimi genitori intendono porre limiti all'uso di smartphone e social, ma si sentono isolati davanti alla pressione dei coetanei. Questa legge offre alle madri e ai padri un appiglio istituzionale solido per dire di no.'",
      "Mentre le normative pubbliche puntano a introdurre barriere d'accesso a livello di piattaforma, mantenere un equilibrio digitale nella vita quotidiana richiede confini personali concreti. Per chi desidera impostare limiti giornalieri indipendenti di utilizzo sulle singole app, Limitra App Block consente di bloccare l'accesso direttamente sul dispositivo una volta esaurito il tempo prestabilito."
    ],
    source: "Governo norvegese (Regjeringen.no) e Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Politiche governative e leggi",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Legge Social Network Norvegia",
      "Limite 16 Anni",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Verifica Età Obbligatoria",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "108",
    slug: "norway-social-media-16-age-limit-ar",
    title: "النرويج تقر خطوة حاسمة بشأن وسائل التواصل الاجتماعي: رفع الحد الأدنى للسن إلى 16 عاماً وإلزام المنصات بالتحقق الرقمي",
    summary: "أعلنت الحكومة النرويجية عن مشروع قانون يرفع الحد الأدنى لسن استخدام منصات التواصل الاجتماعي إلى 16 عاماً لحماية الأطفال من الخوارزميات المسببة للإدمان. استناداً إلى بيانات هيئة الإعلام النرويجية (Medietilsynet) التي كشفت استخداماً مبكراً واسعاً بين سن 9 و11 عاماً، ينقل القانون مسؤولية التحقق إلى شركات التكنولوجيا.",
    content: [
      "أعلن رئيس الوزراء النرويجي يوناس غار ستوره ووزيرة شؤون الأطفال والأسرة شيرستي توبه عن مشروع قانون شامل لرفع الحد الأدنى لسن استخدام وسائل التواصل الاجتماعي إلى 16 عاماً، في إطار مساعي الدولة لحماية الصحة النفسية للأجيال الناشئة من سطوة الخوارزميات التجارية. ووصف ستوره هذه الخطوة بأنها معركة ضرورية للدفاع عن عقول الأطفال في مواجهة عمالقة التكنولوجيا، مشيراً إلى أن السن القانونية الحالية المحددة بـ 13 عاماً عبر الإقرار الذاتي قد أثبتت عدم فاعليتها على أرض الواقع. ويفرض التشريع الجديد التزامات تقنية ملزمة على المنصات الرقمية لإنشاء حواجز تحقق رقمية صارمة.",
      "تستند هذه المبادرة إلى نتائج بحثية بالغة الأهمية من المسح الوطني 'Barn og medier' (الأطفال والإعلام) الذي أجرته هيئة الإعلام النرويجية (Medietilsynet). حيث أظهرت البيانات الرسمية أن أكثر من نصف الأطفال في سن 9 سنوات (53%)، و58% من الأطفال في سن 10 سنوات، و72% من الأطفال في سن 11 عاماً في النرويج يمتلكون حسابات نشطة على منصات مثل سناب شات وتيك توك وإنستغرام، على الرغم من القواعد النظرية الحالية. وأكدت الهيئة أن تسجيل تاريخ الميلاد الشكلي يترك الصغار فريسة سهلة للخلاصات الإعلانية الموجهة والمحتوى الضار.",
      "يعتمد الإطار القانوني الجديد على تعديل ملزم لقانون حماية البيانات الشخصية النرويجي (Personopplysningsloven). وبموجب هذا التعديل، لن يتمكن من تقل أعمارهم عن 16 عاماً من منح موافقة قانونية لمعالجة بياناتهم الشخصية أو استخدامها لأغراض التوصيف الخوارزمي، مما يجعل إنشاء حسابات لهذه الفئة مخالفاً للقانون. ويتمثل التحول الأبرز في نقل عبء التحقق من العمر من كاهل الآباء إلى الشركات التكنولوجية مباشرة، حيث ستُلزم بتطبيق آليات توثيق إلكترونية موثوقة مثل نظام الهوية الرقمية BankID، تحت طائلة عقوبات مالية صارمة تتماشى مع قانون الخدمات الرقمية الأوروبي (DSA).",
      "مراعاةً للتوازن الاجتماعي داخل الفصول الدراسية، نص مشروع القانون على أن يدخل الحظر حيز التنفيذ في الأول من يناير من العام الميلادي الذي يبلغ فيه الطفل 16 عاماً، مما يضمن وصول طلاب الصف الدراسي الواحد إلى المنصات في الوقت نفسه ومنع أي عزل اجتماعي للطلاب الأصغر سناً بالشهور. وأكدت الوزيرة شيرستي توبه أن القانون يمثل دعماً جوهرياً للأسرة: 'يرغب العديد من الآباء في فرض ضوابط حازمة على الشاشات، لكنهم يواجهون ضغوطاً هائلة من الأقران. يمنح هذا القانون أولياء الأمور سنداً قانونياً معتمداً لرفض الاستخدام المبكر'.",
      "وبينما تسعى القوانين الحكومية إلى فرض قيود عمرية على مستوى المنصات، فإن بناء عادات رقمية متوازنة في الحياة اليومية يتطلب حدوداً شخصية واعية. ولأولئك الذين يرغبون في وضع حدود يومية مستقلة لاستخدام تطبيقات محددة، يتيح Limitra App Block قفل الوصول محلياً على الجهاز بمجرد استهلاك الوقت المحدد."
    ],
    source: "الحكومة النرويجية (Regjeringen.no) وهيئة الإعلام النرويجية (Medietilsynet)",
    sourceUrl: "https://www.regjeringen.no",
    category: "السياسات الحكومية والقوانين",
    date: "2026-10-13",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "قانون وسائل التواصل في النرويج",
      "حد الـ 16 عاماً",
      "Medietilsynet",
      "يوناس غار ستوره",
      "حماية البيانات الشخصية",
      "التحقق الإلزامي من السن",
      "Limitra App Block"
    ]
  },
  id: {
    id: "108",
    slug: "norwegia-batas-usia-16-tahun-media-sosial-verifikasi-wajib",
    title: "Norwegia Ambil Langkah Tegas pada Media Sosial: Batas Usia Minimal Dinaikkan ke 16 Tahun dan Verifikasi Wajib bagi Platform",
    summary: "Pemerintah Norwegia mengumumkan rancangan undang-undang yang menaikkan batas usia minimal penggunaan media sosial menjadi 16 tahun untuk melindungi anak-anak dari algoritma adiktif. Berdasarkan data Medietilsynet yang mencatat tingginya penggunaan di usia 9-11 tahun, regulasi ini mengalihkan beban verifikasi usia ke perusahaan teknologi.",
    content: [
      "Perdana Menteri Norwegia Jonas Gahr Støre bersama Menteri Urusan Anak dan Keluarga Kjersti Toppe mengumumkan langkah legislatif menyeluruh untuk menaikkan batas usia minimal akses media sosial menjadi 16 tahun, guna melindungi perkembangan kognitif anak-anak dari pengaruh algoritma komersial. Menyebut langkah ini sebagai perjuangan penting demi melindungi otak anak-anak dari dominasi raksasa teknologi, Støre menegaskan bahwa batas formal 13 tahun yang mengandalkan deklarasi mandiri telah gagal total di lapangan. RUU ini akan mewajibkan platform untuk membangun batasan teknis yang dapat diverifikasi secara sah.",
      "Pendorong utama kebijakan ini berasal dari data empiris survei nasional 'Barn og medier' (Anak dan Media) yang dirilis oleh Otoritas Media Norwegia (Medietilsynet). Catatan resmi mengungkap bahwa di Norwegia, lebih dari separuh anak usia 9 tahun (53%), 58% anak usia 10 tahun, dan 72% anak usia 11 tahun aktif menggunakan media sosial seperti Snapchat, TikTok, dan Instagram, mengabaikan batasan tertulis di platform. Medietilsynet menyoroti bahwa pengisian tanggal lahir yang mudah dimanipulasi membuat anak-anak rentan terpapar konten berbahaya serta arus konten adiktif.",
      "Fondasi hukum peraturan baru ini bertumpu pada amendemen Undang-Undang Data Pribadi Norwegia (Personopplysningsloven). Setelah diberlakukan, anak di bawah usia 16 tahun tidak lagi memiliki keabsahan hukum untuk menyetujui pemrosesan data pribadi atau profiling komersial, sehingga pembuatan akun oleh anak di bawah usia tersebut menjadi tidak sah. Perubahan paling signifikan adalah pengalihan beban verifikasi dari pundak orang tua langsung ke perusahaan teknologi. Platform akan diwajibkan mengintegrasikan sistem identitas digital resmi seperti BankID, dengan ancaman denda administratif yang selaras dengan prinsip Digital Services Act (DSA) Uni Eropa.",
      "Demi mencegah perpecahan sosial di lingkungan kelas sekolah, batasan usia ini dirancang berlaku mulai 1 Januari pada tahun kalender saat seorang remaja berusia 16 tahun, sehingga teman sekelas dapat memperoleh hak akses secara serempak. Menteri Kjersti Toppe menekankan bahwa undang-undang ini memberikan payung hukum yang sangat dibutuhkan para orang tua: 'Banyak orang tua ingin membatasi ponsel dan media sosial, namun kesulitan menghadapi tekanan teman sebaya. Aturan ini memberi dasar legal yang kuat bagi keluarga untuk berkata tidak.'",
      "Ketika regulasi pemerintah berupaya menetapkan batasan usia di tingkat platform, membangun kebiasaan digital yang seimbang dalam kehidupan sehari-hari membutuhkan batas pribadi yang nyata. Bagi pengguna yang ingin menentukan batas waktu penggunaan harian secara mandiri untuk aplikasi tertentu, Limitra App Block membantu membatasi akses langsung di perangkat begitu batas waktu tercapai."
    ],
    source: "Pemerintah Norwegia (Regjeringen.no) & Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Kebijakan Pemerintah & Hukum",
    date: "2026-10-13",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Hukum Media Sosial Norwegia",
      "Batas Usia 16 Tahun",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Verifikasi Usia Wajib",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "108",
    slug: "norway-social-media-16-taon-edad-limit-sapilitang-pagpapatunay",
    title: "Norway Nagpatupad ng Mahigpit na Hakbang sa Social Media: Edad ng Paggamit Itinaas sa 16 at Sapilitang Pagpapatunay sa mga Kumpanya",
    summary: "Inihayag ng pamahalaan ng Norway ang panukalang batas na nagtataas sa minimum age para sa social media sa 16 na taon upang protektahan ang mga kabataan mula sa nakakaadik na algorithm. Batay sa datos ng Medietilsynet na nagpapakita ng maagang paggamit sa edad 9 hanggang 11, inililipat ng batas ang obligasyon ng pagpapatunay sa mga tech platform.",
    content: [
      "Inihayag nina Punong Ministro ng Norway Jonas Gahr Støre at Ministro para sa mga Bata at Pamilya Kjersti Toppe ang isang malawakang panukalang batas na nagtataas sa minimum age ng paggamit ng social media sa 16 na taon, upang ipagtanggol ang kaisipan ng mga kabataan laban sa impluwensya ng mga komersyal na algorithm. Inilarawan ni Støre ang hakbang na ito bilang mahalagang laban para protektahan ang utak ng mga bata laban sa mga dambuhalang kumpanya ng teknolohiya, at binigyang-diin na ang kasalukuyang 13-anyos na patakaran na nakabatay sa sariling deklarasyon ay nabigo sa praktika. Ang panukalang batas ay magpapataw ng mahigpit na teknikal na obligasyon sa mga platform upang kumpirmahin ang edad ng mga user.",
      "Ang pangunahing dahilan sa likod ng hakbang na ito ay ang nakababahalang datos mula sa pambansang sarbey na 'Barn og medier' (Mga Bata at Media) na isinagawa ng Awtoridad sa Media ng Norway (Medietilsynet). Ayon sa opisyal na ulat, higit sa kalahati ng mga batang 9 na taong gulang (53%), 58% ng mga 10 taong gulang, at 72% ng mga 11 taong gulang sa Norway ay regular nang gumagamit ng Snapchat, TikTok, at Instagram sa kabila ng umiiral na limitasyon. Binigyang-diin ng Medietilsynet na ang madaling lokohing paglalagay ng petsa ng kapanganakan ay nag-iiwan sa mga bata na walang kalaban-laban laban sa mga adiktibong feed at mapaminsalang nilalaman.",
      "Ang batayan ng bagong batas ay nakasalalay sa pag-amyenda sa Personal Data Act ng Norway (Personopplysningsloven). Kapag naipatupad na, ang mga menor de edad na wala pang 16 ay hindi na maaaring magbigay ng legal na pahintulot sa pagproseso ng kanilang personal na data o profiling, na magpapawalang-bisa sa mga account ng mga nasa ilalim ng edad na ito. Ang pinakamalaking pagbabago ay ang paglilipat ng responsibilidad sa pagpapatunay ng edad mula sa mga magulang patungo mismo sa mga tech kumpanya. Obligado silang magpatupad ng maaasahang electronic identity verification tulad ng BankID, na may kaakibat na mabibigat na multa batay sa mga pamantayan ng Digital Services Act (DSA) ng EU.",
      "Upang maiwasan ang pagkakahiwalay sa loob ng mga silid-aralan, itinakda ang pagpapatupad simula Enero 1 ng taon kung kailan magiging 16 anyos ang isang kabataan, upang ang magkakaklase ay sabay-sabay na magkaroon ng pahintulot. Idiniin ni Ministro Kjersti Toppe na ang batas ay nagbibigay ng matibay na sandigan sa mga magulang: 'Maraming magulang ang nais magtakda ng limitasyon sa mga telepono at social media ngunit nahihirapan dahil sa pressure mula sa mga kaibigan. Ang batas na ito ay nagbibigay sa mga pamilya ng lehitimong batayan upang tumanggi.'",
      "Habang ang mga pampublikong batas ay nakatuon sa pagtatakda ng mga limitasyon sa edad sa mga platform, ang pagpapanatili ng balanseng paggamit ng screen sa araw-araw ay nangangailangan ng personal na disiplina at malinaw na hangganan. Para sa mga nais magtakda ng malayang araw-araw na limitasyon sa oras para sa mga napiling app, tinutulungan ng Limitra App Block na ihinto ang pag-access sa device kapag naabot na ang itinakdang limitasyon."
    ],
    source: "Pamahalaan ng Norway (Regjeringen.no) at Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "Mga Patakaran ng Pamahalaan at Batas",
    date: "2026-10-13",
    readTime: "5 min",
    featured: false,
    tags: [
      "Batas sa Social Media sa Norway",
      "16 Taon Limitasyon sa Edad",
      "Medietilsynet",
      "Jonas Gahr Støre",
      "Personopplysningsloven",
      "Mandatoryong Pagpapatunay ng Edad",
      "Limitra App Block"
    ]
  },
  th: {
    id: "108",
    slug: "norway-social-media-16-age-limit-th",
    title: "นอร์เวย์เดินหน้ามาตรการเข้มงวด: ปรับเกณฑ์อายุขั้นต่ำโซเชียลมีเดียขึ้นเป็น 16 ปี พร้อมบังคับระบบยืนยันตัวตนดิจิทัล",
    summary: "รัฐบาลนอร์เวย์ประกาศร่างกฎหมายเพิ่มเกณฑ์อายุขั้นต่ำในการใช้โซเชียลมีเดียเป็น 16 ปี เพื่อปกป้องสมองและพัฒนาการของเด็กจากอัลกอริทึมที่เสพติด ข้อมูลจาก Medietilsynet พบการใช้งานสูงตั้งแต่อายุ 9-11 ปี กฎหมายใหม่จึงกำหนดให้แพลตฟอร์มเทคโนโลยีเป็นผู้รับผิดชอบการยืนยันอายุ",
    content: [
      "นายกรัฐมนตรีนอร์เวย์ โยนัส กาห์ สเติร์ และรัฐมนตรีว่าการกระทรวงเด็กและครอบครัว เคียร์สติ ท็อปเปอ ได้ประกาศร่างกฎหมายสำคัญเพื่อเพิ่มเกณฑ์อายุขั้นต่ำในการเข้าถึงโซเชียลมีเดียขึ้นเป็น 16 ปี เพื่อปกป้องพัฒนาการทางสมองของเยาวชนจากแรงกดดันของอัลกอริทึมเชิงพาณิชย์ สเติร์ระบุว่านี่คือการต่อสู้ที่จำเป็นในการปกป้องสมองของเด็กจากบริษัทยักษ์ใหญ่ด้านเทคโนโลยี พร้อมชี้ว่าเกณฑ์อายุเดิม 13 ปีที่ให้ผู้ใช้ระบุอายุด้วยตนเองนั้นล้มเหลวโดยสิ้นเชิง ร่างกฎหมายนี้จะกำหนดข้อผูกพันทางเทคนิคที่เข้มงวดแก่แพลตฟอร์มในการตรวจสอบอายุอย่างแท้จริง",
      "แรงผลักดันหลักเบื้องหลังนโยบายนี้มาจากผลสำรวจระดับชาติ 'Barn og medier' (เด็กและสื่อ) โดยสำนักงานสื่อแห่งนอร์เวย์ (Medietilsynet) ซึ่งเปิดเผยว่าเด็กอายุ 9 ขวบในนอร์เวย์มากกว่าครึ่งหนึ่ง (53%), เด็กอายุ 10 ขวบ 58% และเด็กอายุ 11 ขวบถึง 72% ใช้งานแอปพลิเคชันอย่าง Snapchat, TikTok และ Instagram เป็นประจำ แม้จะมีข้อกำหนดตามเงื่อนไขเดิมก็ตาม Medietilsynet เตือนว่าการกรอกวันเกิดที่หลอกได้ง่ายทำให้เด็กขาดการป้องกันจากเนื้อหาที่เป็นอันตรายและฟีดที่กระตุ้นการเสพติด",
      "โครงสร้างทางกฎหมายใหม่นี้อิงจากการแก้ไขพระราชบัญญัติข้อมูลส่วนบุคคลของนอร์เวย์ (Personopplysningsloven) เมื่อมีผลบังคับใช้ เยาวชนอายุต่ำกว่า 16 ปีจะไม่สามารถให้ความยินยอมตามกฎหมายในการประมวลผลข้อมูลส่วนบุคคลเพื่อการจัดทำโปรไฟล์อัลกอริทึมได้ ซึ่งทำให้บัญชีของเด็กต่ำกว่า 16 ปีผิดกฎหมาย จุดเปลี่ยนสำคัญที่สุดคือการย้ายภาระการยืนยันอายุจากผู้ปกครองไปยังบริษัทเทคโนโลยีโดยตรง แพลตฟอร์มจะต้องผสานระบบยืนยันตัวตนอิเล็กทรอนิกส์ที่มีความปลอดภัย เช่น BankID หากฝ่าฝืนจะมีบทลงโทษทางการเงินอย่างหนักตามมาตรฐาน Digital Services Act (DSA) ของสหภาพยุโรป",
      "เพื่อป้องกันปัญหาการแบ่งแยกทางสังคมในห้องเรียน กฎหมายกำหนดให้เกณฑ์อายุมีผลตั้งแต่วันที่ 1 มกราคมของปีปฏิทินที่เยาวชนมีอายุครบ 16 ปี เพื่อให้นักเรียนในชั้นเดียวกันได้รับสิทธิ์พร้อมกัน เคียร์สติ ท็อปเปอ รัฐมนตรีว่าการกระทรวงเด็กและครอบครัวเน้นย้ำว่า กฎหมายนี้เป็นเกราะกำบังสำคัญให้แก่ครอบครัว: 'พ่อแม่หลายคนต้องการจำกัดการใช้สมาร์ตโฟนและโซเชียลมีเดีย แต่ต้องเผชิญแรงกดดันอย่างหนักจากเพื่อนฝูง กฎหมายนี้มอบหลักยึดที่ชอบธรรมให้ผู้ปกครองสามารถปฏิเสธได้อย่างมั่นใจ'",
      "ในขณะที่มาตรการทางกฎหมายมุ่งเน้นการสร้างเกณฑ์อายุในระดับแพลตฟอร์ม การสร้างสมดุลการใช้หน้าจอในชีวิตประจำวันยังคงต้องอาศัยการกำหนดขอบเขตส่วนบุคคลที่ชัดเจน สำหรับผู้ที่ต้องการกำหนดเวลาใช้งานรายวันแยกตามแอปพลิเคชันอย่างอิสระ Limitra App Block ช่วยจำกัดการเข้าถึงบนอุปกรณ์โดยตรงเมื่อใช้งานครบตามเวลาที่กำหนดไว้"
    ],
    source: "รัฐบาลนอร์เวย์ (Regjeringen.no) และ Medietilsynet",
    sourceUrl: "https://www.regjeringen.no",
    category: "นโยบายและกฎหมายของรัฐ",
    date: "2026-10-13",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "กฎหมายโซเชียลมีเดียนอร์เวย์",
      "เกณฑ์อายุ 16 ปี",
      "Medietilsynet",
      "โยนัส กาห์ สเติร์",
      "Personopplysningsloven",
      "การยืนยันอายุภาคบังคับ",
      "Limitra App Block"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filename = lang === 'tr' ? 'haberler.json' : `news-${lang}.json`;
  const filePath = path.join(dataDir, filename);

  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (existing.some(item => item.id === "108")) {
    console.log(`[WARN] ID 108 already exists in ${filename}, skipping unshift.`);
  } else {
    existing.unshift(newsData[lang]);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
    console.log(`[OK] Added ID 108 to ${filename} (Total items: ${existing.length})`);
  }
}

console.log('Successfully added news ID 108 in all 11 languages.');
