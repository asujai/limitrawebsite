import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve('src/data');

const newsData = {
  tr: {
    id: "112",
    slug: "abd-federal-mahkemesi-okul-bolgeleri-sosyal-medya-bagimliligi-davasi",
    title: "ABD Federal Mahkemesi'nden Emsal Karar: Yüzlerce Okul Bölgesinin Sosyal Medya Devlerine Açtığı Dava Reddedilmedi",
    summary: "Kaliforniya Federal Mahkemesi, ABD genelindeki yüzlerce kamu okul bölgesinin Meta, TikTok, YouTube ve Snap aleyhine açtığı gençlik bağımlılığı davasını düşürmeyi reddetti. Yargıç Yvonne Gonzalez Rogers, teknoloji devlerinin 'Madde 230' dokunulmazlığı savunmasını kırarak; sonsuz kaydırma ve bildirim döngüleri gibi bağımlılık yapıcı ürün tasarım özelliklerinin doğrudan okullara ağır mali ve operasyonel yük getirdiğine hükmetti.",
    content: [
      "Amerika Birleşik Devletleri Kaliforniya Kuzey Bölge Federal Mahkemesi, sosyal medya platformlarının gençlerin zihinsel gelişimi üzerindeki tahribatına ilişkin bugüne kadarki en kritik hukuki kararlardan birine imza attı. Oakland'da görülen ve yüzlerce kamu okul bölgesini (Los Angeles Unified, Seattle Public Schools vb.) bir araya getiren çok bölgeli toplu davada (MDL No. 3047: In re Social Media Adolescent Addiction), Federal Yargıç Yvonne Gonzalez Rogers, teknoloji devlerinin davayı düşürme (motion to dismiss) talebini büyük ölçüde reddetti. Karar; Meta (Instagram ve Facebook), ByteDance (TikTok), Alphabet (YouTube) ve Snap aleyhine açılan davaların bağımsız jüri yargılamasına taşınmasının önünü açtı.",
      "Davanın en temel hukuki kırılma noktasını, teknoloji şirketlerinin çeyrek asırdır arkasına sığındığı İletişim Ahlakı Yasası Madde 230 (Section 230 of Communications Decency Act) zırhının sınırlandırılması oluşturdu. Teknoloji devleri, kullanıcıların paylaştığı içeriklerden sorumlu tutulamayacakları ve ifade özgürlüğü kapsamında dokunulmaz oldukları tezini savundu. Yargıç Gonzalez Rogers ise bu savunmayı geri çevirerek; davanın üçüncü taraf kullanıcı içeriklerini değil, platformların mühendislik ekipleri tarafından kasıtlı olarak geliştirilen bağımlılık yapıcı ürün tasarımı mimarisini hedef aldığını belirtti. Sonsuz kaydırma (infinite scroll), videoların otomatik oynatılması (auto-play), değişken ödüllü algoritma akışları ve kullanıcıyı zorlantılı biçimde uygulamaya geri çağıran anlık bildirim döngüleri, ifade değil doğrudan kusurlu ürün tasarımı sayıldı.",
      "Mahkeme, teknoloji devlerinin 'okulların maruz kaldığı zarar öğrencilerin bireysel durumuna bağlı dolaylı bir hasardır' argümanını da kesin bir dille reddetti. Kararda, okul yönetimlerinin sınıflarda yaşanan dikkat dağınıklığı, siber zorbalık, kaygı bozuklukları, devamsızlık ve uyku yoksunluğu gibi kitlesel krizlerle başa çıkmak için doğrudan bütçelerinden yüz milyonlarca dolar harcadığı belgelendi. Okulların ek psikolojik danışmanlar istihdam etmek, güvenlik protokollerini yenilemek ve öğretmenlerin ders anlatma süresinden feragat etmek zorunda kalmasının, platformların bağımlılık yapıcı algoritmalarının doğrudan ve öngörülebilir bir sonucu olduğu tescillendi.",
      "Kararda ayrıca, platformların şirket içi araştırmalarında algoritmaların gençlerin zihinsel sağlığı üzerindeki olumsuz etkilerini bildikleri halde bu riskleri kamuoyundan, eğitimcilerden ve velilerden gizlediklerine yönelik ihmal (negligence) ve uyarma yükümlülüğünün ihlali iddialarının geçerliliği onaylandı. Bu kararla birlikte kamu eğitim kurumları, Silikon Vadisi şirketlerinden eğitim bütçelerine binen dikkat krizinin mali tazminatını ve algoritmik mimarinin köklü biçimde yeniden tasarlanmasını yasal olarak talep etme hakkı kazandı.",
      "Yasal süreçler okul çağındaki çocukların dijital güvenliği için kurumsal sorumluluğu artırırken, sınıfta ve günlük yaşamda dikkati korumak somut sınırlarla mümkün oluyor. Seçilen uygulamalara bağımsız günlük kullanım süresi limiti koymak isteyenler için Limitra App Block, belirlenen süre dolduğunda erişimi durdurarak ekran süresinin kontrol altında tutulmasına yardımcı oluyor."
    ],
    source: "ABD Federal Mahkemesi (US District Court Northern District of California - MDL 3047) & Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Okullar & Gençlik",
    date: "2026-10-17",
    readTime: "5 dk",
    featured: false,
    tags: [
      "ABD Federal Mahkemesi",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Okul Bölgeleri Davası",
      "Madde 230",
      "Sonsuz Kaydırma",
      "Limitra App Block"
    ]
  },
  en: {
    id: "112",
    slug: "us-federal-court-school-districts-social-media-addiction-lawsuit",
    title: "Landmark U.S. Federal Court Ruling: Lawsuit by Hundreds of School Districts Against Social Media Giants Moves Forward",
    summary: "A California federal court has rejected motions by Meta, TikTok, YouTube, and Snap to dismiss a sweeping adolescent addiction lawsuit filed by hundreds of U.S. public school districts. Judge Yvonne Gonzalez Rogers pierced the platforms' Section 230 immunity shield, ruling that addictive product design features like infinite scroll and retention notification loops directly impose severe financial and operational damages on public schools.",
    content: [
      "In a watershed moment for digital accountability in education, the U.S. District Court for the Northern District of California has delivered a landmark ruling addressing the youth mental health crisis. Presiding over coordinated multidistrict litigation in Oakland (MDL No. 3047: In re Social Media Adolescent Addiction), U.S. District Judge Yvonne Gonzalez Rogers largely denied the motions to dismiss filed by Meta Platforms (Instagram and Facebook), ByteDance (TikTok), Alphabet (YouTube), and Snap. The decision formally advances lawsuits brought by hundreds of public school districts—including Los Angeles Unified and Seattle Public Schools—toward bellwether trials.",
      "The central legal breakthrough in the ruling dismantles Big Tech's longstanding defense under Section 230 of the Communications Decency Act. The tech conglomerates argued that Section 230 and the First Amendment grant absolute immunity against liability arising from platform use. Judge Gonzalez Rogers firmly rejected this claim regarding product design, establishing a clear line between third-party speech and affirmative product engineering. The court held that features deliberately engineered to cultivate compulsive engagement—such as infinite scroll feeds, algorithm-driven dopamine loops, autoplay video mechanics, and relentless push notifications—constitute defective product design rather than protected publishing activities.",
      "The federal court also repudiated the companies' argument that injuries suffered by school districts were merely derivative of individual student harms. Judge Gonzalez Rogers ruled that public school systems suffer direct, foreseeable institutional damages. The court recognized that districts have been forced to expend hundreds of millions of dollars from public budgets to recruit additional mental health counselors, manage pervasive classroom behavioral disruptions, combat algorithmic cyberbullying, and remediate instructional time lost to severe sleep deprivation and screen addiction.",
      "Furthermore, the ruling upheld the school districts' claims of negligence and failure to warn, citing extensive evidence that platforms possessed internal research documenting harms to adolescent brain development while publicly downplaying those risks. By keeping the core product liability claims intact, the decision sets a profound legal precedent that could compel social media companies to financially compensate public schools and undertake fundamental systemic redesigns of their youth engagement algorithms.",
      "While legal proceedings demand greater institutional accountability for children's digital safety, safeguarding focus in daily life requires deliberate practical boundaries. For those seeking to establish independent daily time limits on selected applications, Limitra App Block pauses access locally once a chosen limit is reached, helping maintain balanced screen time."
    ],
    source: "U.S. District Court (Northern District of California - MDL 3047) & Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Schools & Youth",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "U.S. Federal Court",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "School Districts Lawsuit",
      "Section 230",
      "Infinite Scroll",
      "Limitra App Block"
    ]
  },
  es: {
    id: "112",
    slug: "tribunal-federal-eeuu-distritos-escolares-demanda-adiccion-redes-sociales",
    title: "Fallo histórico de un tribunal federal de EE. UU.: Prosigue la macrodemanda de cientos de distritos escolares contra las redes sociales",
    summary: "Un tribunal federal de California desestima la petición de Meta, TikTok, YouTube y Snap de archivar la demanda por adicción juvenil presentada por cientos de distritos escolares públicos de EE. UU. La jueza Yvonne Gonzalez Rogers dictamina que la inmunidad del Artículo 230 no ampara el diseño intencionado de funciones adictivas como el scroll infinito y las notificaciones compulsivas que saturan a las escuelas.",
    content: [
      "En un dictamen de trascendencia histórica para la protección de la juventud y el sistema educativo, el Tribunal de Distrito de los Estados Unidos para el Distrito Norte de California ha asestado un severo revés a los gigantes tecnológicos. En el marco del litigio multidistrital tramitado en Oakland (MDL N.º 3047: In re Social Media Adolescent Addiction), la jueza federal Yvonne Gonzalez Rogers rechazó en gran medida las mociones de sobreseimiento presentadas por Meta (Instagram y Facebook), ByteDance (TikTok), Alphabet (YouTube) y Snap, permitiendo que la macrodemanda de cientos de distritos escolares públicos avance hacia el juicio.",
      "El eje del fallo derriba el escudo protector del Artículo 230 de la Ley de Decencia en las Comunicaciones, utilizado durante décadas por las grandes corporaciones para eludir responsabilidades legales. Las empresas alegaban inmunidad total bajo el amparo de la libertad de expresión y la publicación de contenidos ajenos. Sin embargo, la jueza Gonzalez Rogers determinó que la demanda no cuestiona los contenidos creados por terceros, sino el diseño de producto perjudicial concebido conscientemente para generar adicción en menores: el desplazamiento infinito (infinite scroll), las alertas push de retención, la reproducción automática y los algoritmos basados en gratificación variable intermitente.",
      "El tribunal rechazó categóricamente la postura de las plataformas de que los daños alegados por los centros educativos eran meramente indirectos o derivados. La resolución certifica que los distritos escolares soportan perjuicios operativos y económicos directos y previsibles. Las escuelas han debido destinar millones de dólares de sus presupuestos a contratar terapeutas y orientadores adicionales, atender crisis emocionales en horario lectivo, combatir el ciberacoso y paliar la pérdida de atención derivada del déficit crónico de sueño infantil provocado por las pantallas.",
      "Asimismo, la jueza mantuvo vivas las acusaciones de negligencia y omisión del deber de advertencia, subrayando que las empresas conocían a través de sus propios estudios internos el impacto lesivo de sus algoritmos en la salud mental juvenil y decidieron ocultarlo. Este precedente histórico sitúa a las tecnológicas ante la posibilidad real de indemnizar a las escuelas públicas y las obliga a plantearse un rediseño de raíz de sus interfaces para erradicar las dinámicas de dependencia.",
      "Mientras los tribunales exigen responsabilidades institucionales por el bienestar digital de los menores, proteger la concentración cotidiana exige límites prácticos claros. Para quienes desean fijar límites diarios independientes de tiempo en aplicaciones concretas, Limitra App Block pausa el acceso en el propio dispositivo una vez alcanzado el tiempo fijado, facilitando un uso equilibrado."
    ],
    source: "Tribunal de Distrito de EE. UU. (Distrito Norte de California - MDL 3047) y Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Escuelas y juventud",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "Tribunal Federal de EE. UU.",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Demanda Distritos Escolares",
      "Artículo 230",
      "Scroll Infinito",
      "Limitra App Block"
    ]
  },
  fr: {
    id: "112",
    slug: "tribunal-federal-americain-districts-scolaires-proces-addiction-reseaux-sociaux",
    title: "Décision historique de la justice fédérale américaine : Le méga-procès des districts scolaires contre les géants de la tech maintenu",
    summary: "Un tribunal fédéral de Californie rejette les requêtes en non-lieu de Meta, TikTok, YouTube et Snap face à la plainte de centaines de districts scolaires américains pour addiction des mineurs. La juge Yvonne Gonzalez Rogers a statué que la section 230 ne protège pas les architectures logicielles addictives telles que le défilement infini et les boucles de notification qui épuisent les écoles publiques.",
    content: [
      "Dans un arrêt d'une portée majeure pour la régulation numérique et la protection des jeunes, le tribunal de district des États-Unis pour le district Nord de Californie a validé les poursuites engagées par des centaines de districts scolaires publics contre les mastodontes de la Silicon Valley. Dans le cadre de la procédure groupée instruite à Oakland (MDL n° 3047 : In re Social Media Adolescent Addiction), la juge fédérale Yvonne Gonzalez Rogers a très largement rejeté les demandes de rejet déposées par Meta (Instagram et Facebook), ByteDance (TikTok), Alphabet (YouTube) et Snap, ouvrant la voie à des procès devant jury.",
      "Le point de bascule juridique réside dans l'effritement de l'immunité historique conférée par la section 230 du Communications Decency Act. Alors que les entreprises plaidaient l'exonération totale en tant qu'hébergeurs de contenus tiers protégés par le premier amendement, la juge a nettement dissocié la liberté d'expression du design produit. Le tribunal a établi que des fonctionnalités d'ingénierie comportementale conçues délibérément pour maximiser la captologie — comme le défilement infini (infinite scroll), la lecture automatique, les notifications incessantes et les récompenses intermittentes — relèvent d'une responsabilité pour défaut de conception industrielle et ne sauraient bénéficier de l'immunité éditoriale.",
      "La juridiction a également balayé l'argument selon lequel le préjudice subi par les établissements scolaires ne serait qu'indirect. Le jugement reconnaît que les districts scolaires subissent des dommages institutionnels directs, massifs et prévisibles. Les académies ont dû puiser des centaines de millions de dollars dans leurs budgets pour recruter des psychologues supplémentaires, gérer des troubles anxieux généralisés en classe, freiner le cyberharcèlement algorithmique et compenser la perte drastique d'attention imputable au manque de sommeil des élèves captifs de leurs écrans.",
      "Le tribunal a en outre confirmé les griefs de négligence et de manquement au devoir de mise en garde, relevant que les entreprises disposaient d'études internes attestant des ravages de leurs algorithmes sur le développement cérébral des mineurs tout en dissimulant ces données aux enseignants et aux familles. Cette décision historique contraint désormais les plateformes à répondre financièrement de la crise de l'attention subie par l'école publique et accélère la remise en cause des fonctionnalités addictives.",
      "Tandis que la justice réclame des comptes aux plateformes pour protéger l'enfance, préserver la concentration au quotidien requiert des barrières pratiques directes. Pour instaurer des limites d'utilisation quotidiennes indépendantes sur les applications choisies, Limitra App Block suspend l'accès sur l'appareil dès que le seuil défini est atteint, contribuant à maintenir des repères sains."
    ],
    source: "Tribunal de district des États-Unis (District Nord de Californie - MDL 3047) et Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Écoles et jeunesse",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "Tribunal Fédéral des États-Unis",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Procès Districts Scolaires",
      "Section 230",
      "Défilement Infini",
      "Limitra App Block"
    ]
  },
  de: {
    id: "112",
    slug: "us-bundesgericht-schulbezirke-klage-social-media-sucht-design",
    title: "Historisches Urteil eines US-Bundesgerichts: Klage hunderter Schulbezirke gegen Social-Media-Konzerne zugelassen",
    summary: "Ein US-Bundesgericht in Kalifornien hat die Anträge von Meta, TikTok, YouTube und Snap auf Abweisung der Klagen hunderter US-Schulbezirke wegen Social-Media-Sucht bei Jugendlichen abgewiesen. Richterin Yvonne Gonzalez Rogers stellte klar, dass der Immunitätsschutz von Section 230 nicht für süchtig machendes Produktdesign wie Endlos-Scrollen und Benachrichtigungsschleifen gilt, die Schulen massiv belasten.",
    content: [
      "In einer wegweisenden Entscheidung für den Jugendschutz und das Bildungswesen hat das US-Bezirksgericht für den nördlichen Bezirk von Kalifornien die Klagen hunderter öffentlicher Schulbezirke gegen die führenden Digitalkonzerne zugelassen. Im Rahmen des in Oakland gebündelten Verfahrens (MDL Nr. 3047: In re Social Media Adolescent Addiction) wies Bundesrichterin Yvonne Gonzalez Rogers die Anträge von Meta (Instagram und Facebook), ByteDance (TikTok), Alphabet (YouTube) und Snap auf Klageabweisung weitgehend zurück. Damit steht der Weg für Geschworenenprozesse gegen die Plattformen offen.",
      "Der zentrale juristische Durchbruch betrifft die Einschränkung der Immunität nach Section 230 des Communications Decency Act, auf die sich Technologiekonzerne seit Jahrzehnten berufen. Die Beklagten argumentierten, sie seien für Nutzerinhalte nicht haftbar und genössen verfassungsrechtlichen Schutz. Richterin Gonzalez Rogers wies diese Schutzbehauptung zurück und zog eine scharfe Grenze zwischen Inhalten Dritter und vorsätzlichem Produktdesign. Funktionen, die gezielt zur Erzeugung von Verhaltenssüchten entwickelt wurden — wie Infinite Scrolling, Autoplay-Mechanismen, unvorhersehbare algorithmische Belohnungsmuster und manipulative Push-Mitteilungen —, stellen ein fehlerhaftes Produktdesign dar und fallen nicht unter den Schutz für Medienverlage.",
      "Das Gericht wies auch die Behauptung der Konzerne zurück, der den Schulen entstandene Schaden sei lediglich abgeleitet oder indirekt. Die Richterin stellte fest, dass Schulbezirke direkte, erhebliche und vorhersehbare finanzielle sowie betriebliche Belastungen tragen. Öffentliche Schulen mussten Hunderte Millionen Dollar aufwenden, um zusätzliche Schulpsychologen einzustellen, massive Unterrichtsstörungen durch Schlafmangel und Konzentrationskrisen abzufedern und algorithmisch befeuertes Cybermobbing auf dem Schulgelände einzudämmen.",
      "Darüber hinaus bestätigte das Gericht die Klagepunkte wegen Fahrlässigkeit und Verletzung der Warnpflicht. Interne Dokumente belegen, dass den Plattformbetreibern die Gefahren ihrer Algorithmen für die neurologische Reifung junger Menschen bekannt waren, diese Erkenntnisse jedoch vor Öffentlichkeit und Pädagogen verschwiegen wurden. Das Urteil markiert einen historischen Präzedenzfall, der Tech-Konzerne zu Schadenersatz an das Bildungswesen und zur grundlegenden Entschärfung süchtig machender Schnittstellen zwingen könnte.",
      "Während die Justiz rechtliche Verantwortung für den digitalen Jugendschutz einfordert, erfordert der Schutz der Konzentration im Schulalltag klare praktische Grenzen. Wer auf ausgewählten Anwendungen unabhängige tägliche Zeitlimits setzen möchte, kann mit Limitra App Block den Zugriff lokal auf dem Gerät pausieren, sobald das festgelegte Limit erreicht ist, und so einen ausgewogenen Umgang wahren."
    ],
    source: "US-Bezirksgericht (Nördlicher Bezirk von Kalifornien - MDL 3047) & Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Schulen & Jugend",
    date: "2026-10-17",
    readTime: "5 Min.",
    featured: false,
    tags: [
      "US-Bundesgericht",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Klage Schulbezirke",
      "Section 230",
      "Infinite Scrolling",
      "Limitra App Block"
    ]
  },
  pt: {
    id: "112",
    slug: "tribunal-federal-eua-distritos-escolares-processo-vicio-redes-sociais",
    title: "Decisão histórica da Justiça Federal dos EUA: Ação de centenas de distritos escolares contra redes sociais vai a julgamento",
    summary: "Tribunal federal da Califórnia rejeita pedido da Meta, TikTok, YouTube e Snap para arquivar ação movida por centenas de distritos escolares públicos dos EUA sobre vício infantil em telas. A juíza Yvonne Gonzalez Rogers determinou que a imunidade da Seção 230 não protege recursos de design viciantes como scroll infinito e notificações contínuas que sobrecarregam as escolas.",
    content: [
      "Em uma decisão histórica para o direito digital e a saúde pública infantojuvenil, o Tribunal Distrital dos Estados Unidos para o Distrito Norte da Califórnia validou o avanço de uma mega-ação movida por centenas de distritos escolares públicos contra as maiores empresas de tecnologia do mundo. No processo coordenado em Oakland (MDL N.º 3047: In re Social Media Adolescent Addiction), a juíza federal Yvonne Gonzalez Rogers rejeitou a maior parte dos pedidos de arquivamento apresentados por Meta (Instagram e Facebook), ByteDance (TikTok), Alphabet (YouTube) e Snap, abrindo caminho para julgamentos perante o júri.",
      "A virada jurídica fundamental do caso residiu na desconstrução da blindagem oferecida pela Seção 230 do Communications Decency Act. As empresas sustentavam que a legislação lhes garantia imunidade irrestrita contra alegações sobre o uso de suas plataformas. Contudo, a juíza Gonzalez Rogers traçou uma distinção categórica entre conteúdo publicado por terceiros e arquitetura de engenharia de software. O tribunal definiu que elementos desenhados ativamente para alimentar o engajamento compulsivo — como o feed de rolagem infinita (infinite scroll), a reprodução automática de vídeos, algoritmos de recompensa variável e notificações predatórias — configuram defeito de concepção de produto, não gozando de imunidade editorial.",
      "A decisão judicial também rechaçou o argumento corporativo de que as perdas sofridas pelas redes de ensino seriam danos meramente indiretos. Ficou consignado que os distritos escolares arcam com prejuízos operacionais e financeiros diretos e previsíveis. As instituições públicas de ensino foram compelidas a desembolsar centenas de milhões de dólares para contratar orientadores e psicólogos adicionais, conter episódios de indisciplina decorrentes da privação de sono e gerenciar o ciberbullying amplificado pelas redes em horário escolar.",
      "A juíza também manteve as alegações de negligência e quebra do dever de alertar, apontando que as plataformas possuíam relatórios internos sobre os impactos lesivos de seus algoritmos no desenvolvimento cerebral de adolescentes, mas optaram por ocultá-los de educadores e famílias. Essa decisão abre caminho para que o poder público exija reparação financeira dos gigantes da tecnologia e imponha mudanças estruturais na concepção de serviços digitais voltados a menores.",
      "Enquanto os tribunais buscam responsabilizar os provedores pela segurança das crianças, proteger a concentração cotidiana depende de limites práticos consistentes. Para quem deseja definir limites diários independentes de tempo em aplicativos selecionados, o Limitra App Block interrompe o acesso no próprio aparelho assim que o tempo expira, apoiando uma rotina mais saudável."
    ],
    source: "Tribunal Distrital dos EUA (Distrito Norte da Califórnia - MDL 3047) e Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Escolas e juventude",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "Tribunal Federal dos EUA",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Ação Distritos Escolares",
      "Seção 230",
      "Scroll Infinito",
      "Limitra App Block"
    ]
  },
  it: {
    id: "112",
    slug: "tribunale-federale-usa-distretti-scolastici-causa-dipendenza-social-media",
    title: "Sentenza storica del tribunale federale USA: Prosegue la causa di centinaia di distretti scolastici contro i giganti dei social",
    summary: "Un tribunale federale della California respinge la richiesta di archiviazione presentata da Meta, TikTok, YouTube e Snap contro centinaia di distretti scolastici pubblici degli Stati Uniti. La giudice Yvonne Gonzalez Rogers ha stabilito che la Sezione 230 non protegge le scelte di design manipolatorio come lo scrolling infinito e le notifiche compulsive che gravano sulle scuole.",
    content: [
      "In un pronunciamento di portata storica per la tutela dei minori e del sistema educativo, il Tribunale Distrettuale degli Stati Uniti per il Distretto Nord della California ha inferto un duro colpo ai colossi tecnologici di Silicon Valley. Nell'ambito del contenzioso multidistrettuale istruito a Oakland (MDL N. 3047: In re Social Media Adolescent Addiction), la giudice federale Yvonne Gonzalez Rogers ha respinto la quasi totalità delle istanze di rigetto avanzate da Meta (Instagram e Facebook), ByteDance (TikTok), Alphabet (YouTube) e Snap, consentendo alle cause promosse da centinaia di distretti scolastici pubblici di procedere verso il processo.",
      "Il fulcro della decisione risiede nell'inapplicabilità della Sezione 230 del Communications Decency Act, la norma federale su cui i social hanno fondato decenni di immunità giuridica. Le società convenute sostenevano di non poter essere chiamate a rispondere per le interazioni degli utenti sulle loro reti. Tuttavia, la giudice Gonzalez Rogers ha sancito una distinzione netta tra i contenuti espressivi di terzi e la progettazione materiale del software. Funzionalità create deliberatamente per innescare un coinvolgimento compulsivo — tra cui lo scorrimento infinito (infinite scroll), l'avvio automatico dei video, i flussi algoritmici a ricompensa variabile e gli avvisi push assillanti — integrano a pieno titolo un difetto di progettazione del prodotto non coperto da immunità.",
      "Il tribunale ha inoltre rigettato la tesi difensiva secondo cui i danni lamentati dagli istituti scolastici sarebbero meramente indiretti o riflessi. La sentenza stabilisce che le scuole pubbliche subiscono un pregiudizio economico e gestionale immediato, grave e prevedibile. I consigli scolastici sono stati costretti a spendere centinaia di milioni di dollari dei contribuenti per assumere consulenti psicologici aggiuntivi, arginare crisi di ansia durante le lezioni, contrastare il cyberbullismo e recuperare ore didattiche compromesse dal deficit cronico di sonno e dalla frammentazione dell'attenzione degli alunni.",
      "La giudice ha inoltre confermato le imputazioni di negligenza e violazione dell'obbligo di avvertimento, evidenziando come i vertici aziendali conoscessero, grazie a ricerche riservate interne, le ripercussioni negative dei loro algoritmi sullo sviluppo cerebrale giovanile, scegliendo tuttavia di celarle al pubblico e ai docenti. Questa storica pronuncia apre le porte a cospicui risarcimenti per le scuole pubbliche e accelera la richiesta di una revisione radicale delle architetture digitali che catturano l'attenzione dei più giovani.",
      "Mentre la magistratura richiede responsabilità alle piattaforme per proteggere i minori, salvaguardare la concentrazione quotidiana richiede barriere pratiche chiare. Per chi desidera impostare limiti giornalieri indipendenti di utilizzo sulle singole applicazioni, Limitra App Block sospende l'accesso sul dispositivo una vez raggiunta la soglia prestabilita, aiutando a conservare ritmi equilibrati."
    ],
    source: "Tribunale Distrettuale degli Stati Uniti (Distretto Nord della California - MDL 3047) e Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Scuole e gioventù",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "Tribunale Federale USA",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Causa Distretti Scolastici",
      "Sezione 230",
      "Scrolling Infinito",
      "Limitra App Block"
    ]
  },
  ar: {
    id: "112",
    slug: "al-mahkama-al-fidiraliya-al-amrikiya-daawa-al-madaris-idman-al-tawasul",
    title: "حكم تاريخي لمحكمة فيدرالية أمريكية: المضي قدماً في دعوى مئات المناطق التعليمية ضد عمالقة التواصل الاجتماعي",
    summary: "محكمة فيدرالية في كاليفورنيا ترفض طلبات ميتا وتيك توك ويوتيوب وسناب لإسقاط دعوى إدمان المراهقين المرفوعة من مئات المناطق التعليمية العامة. القاضية إيفون غونزاليس روجرز قضت بأن المادة 230 لا تحمي ميزات التصميم الإدمانية مثل التمرير اللانهائي والإشعارات المتكررة التي ترهق المدارس العامة مالياً ونفسياً.",
    content: [
      "في حكم قضائي تاريخي يمثل نقطة تحول كبرى في حماية الصحة النفسية للأجيال الشابة والتعليم العام، أصدرت المحكمة الجزئية الأمريكية للمنطقة الشمالية بكاليفورنيا قراراً بارزاً ضد كبرى شركات التكنولوجيا. ففي إطار التقاضي الجماعي المنسق في أوكلاند (ملف رقم MDL 3047: دعوى إدمان المراهقين لوسائل التواصل)، رفضت القاضية الفيدرالية إيفون غونزاليس روجرز طلبات إسقاط الدعوى المقدمة من شركات ميتا (إنستغرام وفيسبوك) وبايت دانس (تيك توك) وألفابت (يوتيوب) وسناب، ممهدة الطريق لمحاكمة هذه المنصات أمام هيئة محلفين مستقلة.",
      "تمثل الاختراق القانوني الجوهري في الحكم في تقويض درع الحصانة الذي وفرته المادة 230 من قانون آداب الاتصالات الأمريكي لأكثر من ربع قرن. حيث جادلت شركات التكنولوجيا بأنها تتمتع بحصانة كاملة من المسؤولية بشأن استخدام منصاتها وحرية التعبير. غير أن القاضية روجرز رفضت هذا الدفع بشكل حاسم فيما يتعلق بتصميم المنتجات، موضحة أن الدعوى لا تستهدف المحتوى المنشور من أطراف ثالثة، بل الخصائص الهندسية المصممة عمداً لإيقاع المراهقين في حبائل الإدمان الرقمي؛ مثل التمرير اللانهائي (infinite scroll)، والتشغيل التلقائي لمقاطع الفيديو، والإشعارات الاسترجاعية المستمرة، وهي آليات تعد عيوباً تصنيعية في المنتج وليست حواراً محمياً.",
      "كما أسقطت المحكمة ذريعة المنصات القائلة بأن الأضرار التي لحقت بالمدارس هي أضرار غير مباشرة. وأكد القرار أن المدارس العامة تتحمل أعباءً مالية وتشغيلية مباشرة ومتوقعة، حيث اضطرت إدارات التعليم إلى إنفاق مئات الملايين من الدولارات لتوظيف مرشدين نفسيين إضافيين، وإدارة الاضطرابات السلوكية في الفصول الدراسية، والتعامل مع التنمر الإلكتروني، ومعالجة التراجع الحاد في التحصيل والانتباه الناتج عن الحرمان المزمن من النوم بسبب الشاشات.",
      "وعلاوة على ذلك، ثبتت المحكمة دعاوى الإهمال وانتهاك واجب التحذير، مستندة إلى أدلة دامغة تؤكد معرفة الشركات عبر أبحاثها الداخلية بالأضرار الجسيمة لخوارزمياتها على التطور العصبي للمراهقين وتعمّد إخفائها عن التربويين وأولياء الأمور. ويؤسس هذا الحكم لسابقة قد تلزم عمالقة وادي السيليكون بتعويض قطاع التعليم العام مادياً وإجبارهم على إجراء تعديلات هيكلية جذرية لإزالة فخاخ الإدمان الخوارزمي الموجهة للأطفال.",
      "وفي حين تسعى الإجراءات القضائية لفرض المسؤولية القانونية لحماية سلامة الأطفال، فإن الحفاظ على التركيز في الحياة اليومية يتطلب حدوداً عملية واضحة. ولمن يرغب في وضع حدود زمنية يومية مستقلة لكل تطبيق محدد، يتيح Limitra App Block إيقاف الوصول إلى التطبيق على الجهاز ذاته بمجرد انتهاء الوقت المخصص، مما يساعد في الحفاظ على توازن الاستخدام الرقمي."
    ],
    source: "المحكمة الجزئية الأمريكية (المنطقة الشمالية بكاليفورنيا - MDL 3047) ورويترز",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "المدارس والشباب",
    date: "2026-10-17",
    readTime: "5 دقائق",
    featured: false,
    tags: [
      "المحكمة الفيدرالية الأمريكية",
      "إيفون غونزاليس روجرز",
      "MDL 3047",
      "دعوى المناطق التعليمية",
      "المادة 230",
      "التمرير اللانهائي",
      "Limitra App Block"
    ]
  },
  id: {
    id: "112",
    slug: "pengadilan-federal-as-gugatan-distrik-sekolah-kecanduan-media-sosial",
    title: "Putusan Bersejarah Pengadilan Federal AS: Gugatan Ratusan Distrik Sekolah Terhadap Raksasa Media Sosial Terus Berlanjut",
    summary: "Pengadilan federal California menolak permohonan Meta, TikTok, YouTube, dan Snap untuk membatalkan gugatan kecanduan remaja yang diajukan oleh ratusan distrik sekolah negeri di AS. Hakim Yvonne Gonzalez Rogers menegaskan bahwa Pasal 230 tidak melindungi desain produk adiktif seperti infinite scroll dan notifikasi kompulsif yang membebani sekolah.",
    content: [
      "Dalam keputusan hukum bersejarah bagi perlindungan generasi muda dan dunia pendidikan, Pengadilan Distrik Amerika Serikat untuk Distrik Utara California menolak upaya pembatalan gugatan yang diajukan oleh ratusan distrik sekolah negeri melawan raksasa teknologi. Dalam litigasi gabungan terkoordinasi di Oakland (MDL No. 3047: In re Social Media Adolescent Addiction), Hakim Federal Yvonne Gonzalez Rogers menolak sebagian besar mosi pembatalan dari Meta (Instagram dan Facebook), ByteDance (TikTok), Alphabet (YouTube), dan Snap, membuka jalan menuju persidangan juri.",
      "Titik balik hukum paling fundamental dalam putusan ini adalah pembatasan tameng kekebalan Pasal 230 Communications Decency Act yang selama ini menjadi perlindungan mutlak bagi perusahaan media sosial. Para raksasa teknologi berargumen bahwa mereka kebal hukum karena hanya menjadi perantara konten pengguna. Namun, Hakim Gonzalez Rogers menolak argumen tersebut terkait desain produk, dengan menegaskan bahwa gugatan ini bukan menyoal konten pihak ketiga, melainkan pilihan rancang bangun algoritma yang sengaja direkayasa untuk memicu ketergantungan remaja: seperti gulir tanpa henti (infinite scroll), pemutaran video otomatis (auto-play), dan rentetan notifikasi pemicu dopamin.",
      "Pengadilan juga menolak dalih korporasi bahwa kerugian yang dialami pihak sekolah hanyalah kerugian turunan yang tidak langsung. Putusan tersebut menetapkan bahwa distrik sekolah menanggung kerugian finansial dan operasional yang nyata, langsung, dan dapat diprediksi. Sistem sekolah negeri terpaksa menggelontorkan ratusan juta dolar dari anggaran publik untuk mempekerjakan konselor kesehatan mental tambahan, menangani gangguan perilaku di ruang kelas, meredam perundungan siber, dan mengatasi hilangnya fokus belajar akibat kurang tidur kronis siswa yang terpaku pada layar.",
      "Lebih lanjut, hakim mempertahankan tuntutan kelalaian dan kegagalan memberikan peringatan, mencatat bukti bahwa perusahaan teknologi sebenarnya telah mengetahui bahaya algoritma mereka terhadap perkembangan otak remaja melalui riset internal rahasia namun sengaja menyembunyikannya dari pendidik dan orang tua. Keputusan ini menjadi preseden penting yang berpotensi memaksa perusahaan teknologi memberi ganti rugi pada sektor pendidikan publik serta merombak total fitur antarmuka adiktif mereka.",
      "Sementara proses hukum menuntut tanggung jawab institusional demi keamanan digital anak-anak, menjaga konsentrasi belajar sehari-hari membutuhkan batasan praktis yang nyata. Bagi pengguna yang ingin menetapkan batas waktu harian mandiri pada aplikasi tertentu, Limitra App Block menghentikan akses langsung di perangkat saat batas waktu habis, membantu menjaga keseimbangan waktu layar."
    ],
    source: "Pengadilan Distrik AS (Distrik Utara California - MDL 3047) & Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Sekolah & Remaja",
    date: "2026-10-17",
    readTime: "5 mnt",
    featured: false,
    tags: [
      "Pengadilan Federal AS",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Gugatan Distrik Sekolah",
      "Pasal 230",
      "Infinite Scroll",
      "Limitra App Block"
    ]
  },
  fil: {
    id: "112",
    slug: "us-federal-court-school-districts-demanda-adiksyon-social-media",
    title: "Makatotohanang Desisyon ng US Federal Court: Tuloy ang Demanda ng Daan-daang Distrito ng Paaralan Laban sa Social Media Giants",
    summary: "Ibinasura ng isang pederal na hukuman sa California ang hiling ng Meta, TikTok, YouTube, at Snap na ibasura ang demanda ng daan-daang pampublikong distrito ng paaralan sa US ukol sa adiksyon ng kabataan. Ipinasiya ni Judge Yvonne Gonzalez Rogers na hindi saklaw ng proteksyon ng Seksyon 230 ang mga mapanlinlang na disenyo tulad ng infinite scroll at push notification loops na nagpapahirap sa mga paaralan.",
    content: [
      "Sa isang makasaysayang desisyon para sa kapakanan ng kabataan at pampublikong edukasyon, pinayagan ng U.S. District Court para sa Northern District ng California ang malawakang demanda na isinampa ng daan-daang distrito ng pampublikong paaralan laban sa pinakamalalaking kumpanya ng teknolohiya. Sa pinagsama-samang paglilitis sa Oakland (MDL No. 3047: In re Social Media Adolescent Addiction), halos buong ibinasura ni U.S. District Judge Yvonne Gonzalez Rogers ang petisyon ng Meta (Instagram at Facebook), ByteDance (TikTok), Alphabet (YouTube), at Snap na ipawalang-bisa ang kaso, na nagbibigay-daan sa pagdinig ng hurado.",
      "Ang pinakapundamental na tagumpay sa batas sa pasyang ito ay ang pagbuwag sa kalasag ng Seksyon 230 ng Communications Decency Act na matagal nang ginagamit ng mga higante sa tech upang takasan ang pananagutan. Iginiit ng mga kumpanya na ligtas sila sa pananagutan sa ilalim ng kalayaan sa pagpapahayag. Gayunpaman, mariing tinukoy ni Judge Gonzalez Rogers ang malinaw na pagkakaiba sa pagitan ng nilalaman ng ibang tao at ng sinasadyang disenyo ng produkto. Ipinaliwanag ng hukuman na ang mga katangiang binuo upang lumikha ng labis na pagkahumaling — gaya ng walang katapusang pag-scroll (infinite scroll), awtomatikong pag-play ng video, at sunod-sunod na push notification — ay depektibong disenyo ng produkto at hindi sakop ng kalayaang mamahayag.",
      "Ibinasura rin ng hukuman ang katwiran ng mga kumpanya na ang pinsala sa mga paaralan ay hindi direkta. Kinilala ng desisyon na ang mga distrito ng paaralan ay direktang nagdaranas ng malubha at inaasahang pinsala sa pananalapi at operasyon. Napilitan ang mga pampublikong paaralan na maglaan ng daan-daang milyong dolyar upang kumuha ng karagdagang mental health counselors, lutasin ang mga kaguluhan sa silid-aralan dulot ng kawalan ng tulog, supilin ang cyberbullying, at bawiin ang oras ng pagtuturo na nawala dahil sa pagkagumon sa screen.",
      "Pinagtibay din ng hukom ang mga paratang ng kapabayaan at kabiguang magbabala, matapos lumitaw ang katibayan na alam ng mga platform mula sa kanilang sariling panloob na pananaliksik ang pinsala ng kanilang algorithm sa utak ng kabataan ngunit inilihim ito sa mga guro at magulang. Ang makasaysayang desisyong ito ay lumilikha ng batayan upang humingi ng bayad-pinsala ang mga pampublikong paaralan at mapilitan ang mga kumpanya na baguhin ang mga mapanganib na mekanismo ng kanilang aplikasyon.",
      "Habang itinutulak ng batas ang pananagutan ng mga platform para sa kaligtasan ng mga bata, ang pagpapanatili ng konsentrasyon sa bawat araw ay nangangailangan ng kongkretong pansariling hangganan. Para sa mga nais magtakda ng hiwalay na pang-araw-araw na limitasyon sa oras para sa mga piling aplikasyon, pinahihinto ng Limitra App Block ang pag-access sa mismong device kapag naabot na ang takdang oras, na tumutulong upang mapanatili ang maayos na pamamahala sa screen time."
    ],
    source: "U.S. District Court (Northern District of California - MDL 3047) at Reuters",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "Mga Paaralan at Kabataan",
    date: "2026-10-17",
    readTime: "5 min",
    featured: false,
    tags: [
      "U.S. Federal Court",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "Demanda Distrito ng Paaralan",
      "Seksyon 230",
      "Infinite Scroll",
      "Limitra App Block"
    ]
  },
  th: {
    id: "112",
    slug: "san-khwaeng-saharat-khet-kan-sueksa-fong-social-media-siy-sathi",
    title: "คำตัดสินประวัติศาสตร์ศาลแขวงสหรัฐฯ: ยกคำร้องคัดค้าน ให้ดำเนินคดีเขตการศึกษาหลายร้อยแห่งฟ้องบิ๊กเทคปมเด็กเสพติดโซเชียล",
    summary: "ศาลแขวงรัฐแคลิฟอร์เนียมีคำสั่งยกคำร้องของ Meta, TikTok, YouTube และ Snap ที่ขอให้ยกฟ้องคดีที่เขตการศึกษาหลายร้อยแห่งทั่วสหรัฐฯ ฟ้องร้องเรื่องการเสพติดของเยาวชน ผู้พิพากษา Yvonne Gonzalez Rogers ชี้ว่ามาตรา 230 ไม่คุ้มครองการออกแบบฟีเจอร์เสพติด เช่น ฟีดเลื่อนไม่สิ้นสุดและการแจ้งเตือนดึงดูดใจที่สร้างภาระหนักแก่โรงเรียน",
    content: [
      "ในคำตัดสินครั้งประวัติศาสตร์เพื่อการปกป้องสุขภาพจิตของเยาวชนและระบบการศึกษา ศาลแขวงสหรัฐฯ ประจำเขตทางตอนเหนือของรัฐแคลิฟอร์เนีย ได้มีคำสั่งครั้งสำคัญในการดำเนินคดีแบบกลุ่มที่รวบรวมเขตการศึกษาของรัฐหลายร้อยแห่ง ณ เมืองโอ๊กแลนด์ (MDL No. 3047: In re Social Media Adolescent Addiction) โดยผู้พิพากษา Yvonne Gonzalez Rogers ได้ปฏิเสธคำร้องขอยกฟ้องส่วนใหญ่ของ Meta (Instagram และ Facebook), ByteDance (TikTok), Alphabet (YouTube) และ Snap ซึ่งเปิดทางให้คดีประวัติศาสตร์นี้เข้าสู่กระบวนการพิจารณาคดีโดยคณะลูกขุนต่อไป",
      "จุดเปลี่ยนทางกฎหมายที่สำคัญที่สุดในคำตัดสินนี้ คือการจำกัดขอบเขตการคุ้มครองตามมาตรา 230 แห่งรัฐบัญญัติความเหมาะสมในการสื่อสาร (Communications Decency Act) ที่บรรดาบริษัทยักษ์ใหญ่ใช้เป็นเกราะกำบังมานานหลายทศวรรษ โดยบริษัทเทคโนโลยีอ้างว่าตนได้รับการคุ้มครองจากเนื้อหาที่ผู้ใช้โพสต์และเสรีภาพในการแสดงออก ทว่าผู้พิพากษา Rogers ได้ชี้ขาดอย่างชัดเจนว่าคดีนี้ไม่ได้มุ่งเป้าไปที่เนื้อหา แต่พุ่งเป้าไปที่การออกแบบผลิตภัณฑ์โดยเจตนาให้เกิดการเสพติด เช่น ระบบฟีดเลื่อนไม่สิ้นสุด (infinite scroll) การเล่นวิดีโออัตโนมัติ (auto-play) และระบบแจ้งเตือนแบบดึงดูดใจต่อเนื่อง ซึ่งถือเป็นความบกพร่องในการออกแบบผลิตภัณฑ์มิใช่เสรีภาพของสำนักพิมพ์",
      "ศาลยังได้ปฏิเสธข้อโต้แย้งของบรรดาแพลตฟอร์มที่ระบุว่าความเสียหายของโรงเรียนเป็นเพียงผลกระทบทางอ้อม โดยคำพิพากษาระบุชัดเจนว่าเขตการศึกษาได้รับความเสียหายโดยตรงและคาดการณ์ได้ ทั้งด้านงบประมาณและการปฏิบัติงาน โรงเรียนรัฐบาลต้องสูญเสียงบประมาณหลายร้อยล้านดอลลาร์เพื่อจ้างที่ปรึกษาด้านสุขภาพจิตเพิ่มเติม จัดการกับพฤติกรรมก้าวร้าวและการกลั่นแกล้งบนโลกไซเบอร์ ตลอดจนปัญหาการขาดสมาธิและภาวะอดนอนเรื้อรังของนักเรียนที่ติดหน้าจอ",
      "นอกจากนี้ ศาลยังรับรองข้อกล่าวหาเรื่องความประماทเลินเล่อและการละเลยหน้าที่ในการแจ้งเตือนอันตราย โดยมีหลักฐานชี้ว่าบริษัทเหล่านี้รับทราบถึงผลกระทบเชิงลบของอัลกอริทึมต่อพัฒนาการทางสมองของเยาวชนจากงานวิจัยภายใน แต่กลับปกปิดข้อมูลดังกล่าวจากครูและผู้ปกครอง คำตัดสินนี้สร้างบรรทัดฐานสำคัญที่อาจบีบให้ยักษ์ใหญ่ซิลิคอนแวลลีย์ต้องจ่ายค่าชดเชยแก่โรงเรียนและปรับเปลี่ยนโครงสร้างอัลกอริทึมที่ล่อลวงเยาวชนอย่างถึงรากถึงโคน",
      "ในขณะที่กระบวนการทางกฎหมายกำลังผลักดันให้เกิดความรับผิดชอบในระดับสถาบันเพื่อความปลอดภัยทางดิจิทัลของเด็กๆ การปกป้องสมาธิในชีวิตประจำวันก็ยังจำเป็นต้องอาศัยการกำหนดขอบเขตที่จับต้องได้ สำหรับผู้ที่ต้องการกำหนดเวลาใช้งานรายวันอย่างอิสระในแต่ละแอปพลิเคชัน Limitra App Block จะช่วยหยุดการเข้าถึงบนตัวเครื่องทันทีเมื่อครบเวลาที่กำหนด ช่วยให้การควบคุมเวลาหน้าจอมีความสมดุลและต่อเนื่อง"
    ],
    source: "ศาลแขวงสหรัฐฯ (เขตทางตอนเหนือของแคลิฟอร์เนีย - MDL 3047) และรอยเตอร์ส",
    sourceUrl: "https://www.cand.uscourts.gov",
    category: "โรงเรียนและเยาวชน",
    date: "2026-10-17",
    readTime: "5 นาที",
    featured: false,
    tags: [
      "ศาลแขวงสหรัฐฯ",
      "Yvonne Gonzalez Rogers",
      "MDL 3047",
      "คดีฟ้องร้องเขตการศึกษา",
      "มาตรา 230",
      "ฟีดเลื่อนไม่สิ้นสุด",
      "Limitra App Block"
    ]
  }
};

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const filename = lang === 'tr' ? 'haberler.json' : `news-${lang}.json`;
  const filePath = path.join(dataDir, filename);

  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (existing.some(item => item.id === "112")) {
    console.log(`[WARN] ID 112 already exists in ${filename}, skipping unshift.`);
  } else {
    existing.unshift(newsData[lang]);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
    console.log(`[OK] Added ID 112 to ${filename} (Total items: ${existing.length})`);
  }
}

console.log('Successfully added news ID 112 in all 11 languages.');
