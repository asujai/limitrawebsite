import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('src/data');

// Tüm diller için kategoriler
const categories = {
  tr: {
    gov: 'Devlet Düzenlemeleri & Yasalar',
    school: 'Okullar & Gençlik',
    science: 'Bilim & Sağlık'
  },
  en: {
    gov: 'Government Policies & Laws',
    school: 'Schools & Youth',
    science: 'Science & Health'
  },
  es: {
    gov: 'Políticas gubernamentales y leyes',
    school: 'Escuelas y juventud',
    science: 'Ciencia y salud'
  },
  fr: {
    gov: 'Politiques et lois gouvernementales',
    school: 'Écoles et jeunesse',
    science: 'Science et santé'
  },
  de: {
    gov: 'Regierungspolitik & Gesetze',
    school: 'Schulen & Jugend',
    science: 'Wissenschaft & Gesundheit'
  },
  pt: {
    gov: 'Políticas governamentais e leis',
    school: 'Escolas e juventude',
    science: 'Ciência e saúde'
  },
  it: {
    gov: 'Politiche governative e leggi',
    school: 'Scuole e gioventù',
    science: 'Scienza e salute'
  },
  ar: {
    gov: 'السياسات الحكومية والقوانين',
    school: 'المدارس والشباب',
    science: 'العلوم والصحة'
  },
  id: {
    gov: 'Kebijakan Pemerintah & Regulasi',
    school: 'Sekolah & Generasi Muda',
    science: 'Sains & Kesehatan'
  },
  fil: {
    gov: 'Mga Patakaran ng Pamahalaan at Batas',
    school: 'Mga Paaralan at Kabataan',
    science: 'Agham at Kalusugan'
  },
  th: {
    gov: 'นโยบายและกฎหมายภาครัฐ',
    school: 'โรงเรียนและเยาวชน',
    science: 'วิทยาศาสตร์และสุขภาพ'
  }
};

// Ortak haber meta bilgileri
// 11 haberin tamamı (en yeni olan ID: 11 en üstte)
const newsArticles = [
  // --- HABER 11 (YENİ - 2026-08-28) ---
  {
    id: "11",
    date: "2026-08-28",
    source: "Ministère de l'Éducation Nationale & Le Monde",
    sourceUrl: "https://www.education.gouv.fr",
    featured: false,
    catKey: "school",
    data: {
      tr: {
        slug: "fransa-okullarda-fiziki-telefon-yasagi-pause-numerique",
        title: "Fransa'dan Okullarda 'Dijital Mola' Kararı: Akıllı Telefonlar Girişte Kilitli Dolaplara Alınıyor",
        summary: "Fransa Cumhurbaşkanlığı Ekran Komisyonu'nun tarihi raporunun ardından, Milli Eğitim Bakanlığı ülke genelindeki ortaokul ve liselerde 'Pause Numérique' (Dijital Mola) protokolünü yürürlüğe koydu. Öğrencilerin telefonları okul girişinde dolaplarda kilitleniyor.",
        content: [
          "Fransa Cumhurbaşkanı Emmanuel Macron tarafından görevlendirilen uzman nörolog ve psikiyatristlerden oluşan bağımsız 'Ekran Komisyonu'nun (Commission Écrans) yayımladığı dönüm noktası niteliğindeki raporun ardından, Fransız hükümeti okullarda telefon kullanımına karşı en kapsamlı uygulamayı başlattı.",
          "Komisyonun 'Kayıp Zamanın Peşinde' (À la recherche du temps perdu) başlıklı resmi raporunda; çocukların ve gençlerin maruz kaldığı aşırı ekran süresinin uyku düzenini bozduğu, fiziksel hareketsizliğe yol açtığı ve anksiyete ile dikkat dağınıklığını tetiklediği bilimsel verilerle ortaya konmuştu.",
          "Bu doğrultuda Fransa Milli Eğitim Bakanlığı, ortaokul (collège) ve liselerde (lycée) 'Pause Numérique' protokolünü zorunlu kıldı. Yeni düzenlemeyle öğrenciler okul sınırlarına girdikleri andan itibaren akıllı telefon ve bağlı cihazlarını özel kilitli dolaplara veya kilitli kılıflara teslim etmek zorunda.",
          "Bakanlık verilerine göre, pilot okullarda yapılan denemelerde sınıflarda ve teneffüslerde odaklanmanın %35 arttığı, akran zorbalığının belirgin şekilde düştüğü ve gençlerin gerçek sosyal aktivitelere yöneldiği raporlandı.",
          "Fransa Eğitim Bakanlığı, ekran kısıtlamasının yalnızca sınıfla sınırlı kalmaması gerektiğini vurgulayarak, ailelere de evde ekransız akşam ve yemek rutinleri oluşturma çağrısında bulundu."
        ],
        readTime: "5 dk",
        tags: ["Fransa", "Pause Numérique", "Okulda Telefon Yasağı", "Ekran Komisyonu", "Dijital Bağımlılık", "Eğitim"]
      },
      en: {
        slug: "france-school-smartphone-ban-pause-numerique-protocol",
        title: "France Enforces Total Physical Smartphone Lockaway in Schools Under 'Pause Numérique' Directive",
        summary: "Following the French Presidential Screen Commission's landmark findings on youth digital exposure, the French Ministry of National Education rolled out the 'Pause Numérique' mandate across secondary schools, requiring students to physically lock away phones during school hours.",
        content: [
          "Following the publication of the official report by France's Special Commission on Screen Exposure (Commission Écrans), co-chaired by leading neurologists and addiction specialists appointed by President Emmanuel Macron, the French Government has taken decisive action against youth screen addiction.",
          "The commission's report, titled 'À la recherche du temps perdu', concluded that constant screen exposure and hyperconnectivity among adolescents directly harm sleep architecture, foster sedentary behavior, and aggravate attention fragmentation and anxiety.",
          "In response, the French Ministry of National Education enacted the nationwide 'Pause Numérique' (Digital Break) protocol across collèges and lycées. Under the directive, students must physically surrender or lock their smartphones in secure lockers or signal-blocking pouches from morning entry until dismissal.",
          "Empirical assessments from trial schools revealed a 35% improvement in classroom focus, a dramatic decline in online school bullying, and a noticeable resurgence of physical peer interactions during recess.",
          "French authorities emphasized that institutional boundaries are essential to counter engineered digital habits, urging families to establish phone-free evening and bedtime routines at home."
        ],
        readTime: "5 min",
        tags: ["France", "Pause Numérique", "School Smartphone Ban", "Screen Commission", "Digital Wellbeing", "Education"]
      },
      es: {
        slug: "francia-prohibicion-telefonos-escuelas-pause-numerique",
        title: "Francia impone el bloqueo físico de teléfonos en escuelas bajo el protocolo 'Pause Numérique'",
        summary: "Tras el histórico informe de la Comisión Presidencial sobre Pantallas, el Ministerio de Educación de Francia extendió el protocolo 'Pause Numérique' a colegios e institutos, obligando a los alumnos a guardar sus teléfonos bajo llave durante la jornada escolar.",
        content: [
          "Tras la publicación del informe oficial de la Comisión de Expertos sobre Pantallas (Commission Écrans), designada por el presidente Emmanuel Macron y copresidida por reconocidos neurólogos y psiquiatras, el gobierno francés ha tomado medidas contundentes contra la adicción a las pantallas.",
          "El informe, titulado 'À la recherche du temps perdu', concluyó que la hiperconexión y el tiempo excesivo frente a las pantallas deterioran el sueño, fomentan el sedentarismo y multiplican los casos de ansiedad y déficit de atención en los jóvenes.",
          "Por ello, el Ministerio de Educación Nacional implementó a nivel nacional el protocolo 'Pause Numérique' en colegios y liceos. Los estudiantes deben depositar sus dispositivos en casilleros con llave o fundas especiales desde la entrada matutina hasta el fin de las clases.",
          "Las evaluaciones en centros piloto demostraron un aumento del 35% en la concentración en clase, una disminución sustancial del ciberacoso y un renacimiento de la convivencia y juegos físicos durante los recreos.",
          "Las autoridades francesas insistieron en que los límites institucionales son imprescindibles y exhortaron a las familias a crear rutinas libres de pantallas durante las cenas y noches en el hogar."
        ],
        readTime: "5 min",
        tags: ["Francia", "Pause Numérique", "Prohibición de celulares", "Comisión Pantallas", "Bienestar digital", "Educación"]
      },
      fr: {
        slug: "france-interdiction-smartphones-ecoles-pause-numerique",
        title: "France : la « Pause numérique » généralisée dans les collèges et lycées avec casiers verrouillés",
        summary: "Dans le sillage du rapport de la Commission d’experts sur les écrans remis à l'Élysée, le ministère de l'Éducation nationale déploie la « Pause numérique » avec mise à l'écart physique des smartphones pour tous les élèves durant le temps scolaire.",
        content: [
          "À la suite de la remise du rapport d'experts « Enfants et écrans : À la recherche du temps perdu », commandé par le président Emmanuel Macron et coprésidé par la neurologue Servane Mouton et le psychiatre Amine Benyamina, l'exécutif français renforce la protection des jeunes face à la surexposition aux écrans.",
          "Le rapport a scientifiquement mis en lumière les impacts néfastes de l'hyperconnexion sur le sommeil, la sédentarité, la myopie, l'attention cognitive et la vulnérabilité émotionnelle des adolescents.",
          "En application des préconisations, le ministère de l'Éducation nationale a généralisé le dispositif de « Pause numérique » (ou portable en pause) dans les collèges et lycées. Les élèves doivent désormais déposer leurs téléphones portables dans des casiers ou pochettes verrouillées dès leur arrivée.",
          "Les retours d'expériences soulignent un bond de 35 % de l'attention en classe, une baisse mesurable des tensions et du cyberharcèlement, ainsi qu'un retour tangible des échanges humains et de l'activité physique en récréation.",
          "Le ministère rappelle que l'encadrement doit également se poursuivre au sein des familles, en instaurant des règles claires d'extinction des écrans le soir et lors des repas."
        ],
        readTime: "5 min",
        tags: ["France", "Pause numérique", "Interdiction smartphone", "Commission écrans", "Bien-être numérique", "Éducation"]
      },
      de: {
        slug: "frankreich-smartphone-verbot-schulen-pause-numerique",
        title: "Frankreich verordnet 'Pause Numérique': Smartphones an Schulen müssen weggesperrt werden",
        summary: "Nach dem wegweisenden Bericht der präsidialen Bildschirmkommission führt das französische Bildungsministerium das Protokoll 'Pause Numérique' an Sekundarschulen ein: Handys müssen beim Betreten der Schule physisch weggesperrt werden.",
        content: [
          "Nach der Vorlage des offiziellen Expertenberichts der von Präsident Emmanuel Macron eingesetzten Bildschirmkommission (Commission Écrans) zieht die französische Regierung entschlossene Konsequenzen gegen die Bildschirmsucht von Jugendlichen.",
          "Der Bericht mit dem Titel 'Auf der Suche nach der verlorenen Zeit' belegt wissenschaftlich, dass ständige Bildschirmnutzung zu Schlafmangel, Bewegungsmangel, Konzentrationsschwächen und erhöhtem Angstempfinden führt.",
          "Als Reaktion verordnete das Bildungsministerium die landesweite 'Pause Numérique' an Collèges und Lycées. Schüler müssen ihre Smartphones und Smartwatches morgens in speziellen Schließfächern oder verschließbaren Hüllen abgeben.",
          "Ergebnisse aus Modellschulen zeigen eine Steigerung der Unterrichtsaufmerksamkeit um 35 %, einen deutlichen Rückgang von Cybermobbing und eine Wiederbelebung sozialer Kontakte auf dem Schulhof.",
          "Frankreichs Bildungsministerium betont, dass institutionelle Barrieren gegen digitale Reizüberflutung nötig sind, und ermutigt Eltern zu bildschirmfreien Abendroutinen zu Hause."
        ],
        readTime: "5 Min.",
        tags: ["Frankreich", "Pause Numérique", "Smartphone-Verbot Schule", "Bildschirmkommission", "Digitale Disziplin", "Bildung"]
      },
      pt: {
        slug: "franca-proibicao-smartphones-escolas-pause-numerique",
        title: "França implementa 'Pause Numérique': celulares devem ser trancados em armários nas escolas",
        summary: "Após o relatório histórico da Comissão Presidencial sobre Telas, o Ministério da Educação da França tornou obrigatório o protocolo 'Pause Numérique' no ensino secundário, exigindo o bloqueio físico dos aparelhos durante todo o período escolar.",
        content: [
          "Após a divulgação do relatório da Comissão Especial sobre Exposição a Telas (Commission Écrans), nomeada pelo presidente Emmanuel Macron e coliderada por neurologistas e psiquiatras, a França adotou medidas firmes contra a dependência digital de crianças e jovens.",
          "O relatório oficial apontou que o excesso de tempo de tela e o uso ininterrupto de redes sociais prejudicam a arquitetura do sono, geram sedentarismo e agravam a ansiedade e a fragmentação da atenção.",
          "Dessa forma, o Ministério da Educação Nacional determinou o protocolo 'Pause Numérique' em collèges e liceus. Ao entrar na escola, os estudantes devem guardar seus smartphones em armários trancados ou estojos especiais bloqueadores de sinal.",
          "As avaliações em escolas piloto apontaram melhora de 35% na concentração pedagógica, queda acentuada em episódios de cyberbullying e retomada evidente das interações interpessoais nos intervalos.",
          "O governo francês ressaltou que limites estruturais são fundamentais para proteger a mente dos jovens e convocou os pais a adotarem noites sem telas em casa."
        ],
        readTime: "5 min",
        tags: ["França", "Pause Numérique", "Proibição de celulares", "Comissão Telas", "Bem-estar digital", "Educação"]
      },
      it: {
        slug: "francia-divieto-smartphone-scuole-pause-numerique",
        title: "Francia: 'Pause Numérique' nelle scuole, smartphone obbligatoriamente chiusi a chiave all'ingresso",
        summary: "In seguito allo storico rapporto della Commissione presidenziale sugli schermi, il Ministero dell'Istruzione francese ha esteso il protocollo 'Pause Numérique' a medie e superiori, imponendo la custodia fisica dei telefoni durante l'orario scolastico.",
        content: [
          "Dopo la pubblicazione della relazione ufficiale della Commissione di esperti sull'esposizione agli schermi (Commission Écrans), voluta dal presidente Emmanuel Macron e guidata da illustri neurologi e psichiatri, il governo francese passa all'azione contro la dipendenza da smartphone tra i giovani.",
          "Il rapporto, intitolato 'À la recherche du temps perdu', ha evidenziato con prove scientifiche come l'iperconnessione danneggi il sonno, aumenti la sedentarietà e moltiplichi i disturbi di attenzione e ansia.",
          "Il Ministero dell'Istruzione ha pertanto reso obbligatoria la 'Pause Numérique' in collèges e licei. Gli studenti devono consegnare o riporre i propri dispositivi in appositi armadietti blindati o custodie sigillate dall'inizio alla fine delle lezioni.",
          "I dati raccolti nelle scuole pilota mostrano un incremento del 35% nella concentrazione in classe, un calo considerevole del cyberbullismo e una rinascita delle relazioni umane e del gioco nei cortili.",
          "Le autorità francesi ricordano che i limiti sistemici sono indispensabili per contrastare le trappole dell'attenzione e invitano le famiglie a stabilire serate senza telefoni a casa."
        ],
        readTime: "5 min",
        tags: ["Francia", "Pause Numérique", "Divieto smartphone scuole", "Commissione Schermi", "Benessere digitale", "Istruzione"]
      },
      ar: {
        slug: "france-ban-smartphones-schools-pause-numerique",
        title: "فرنسا تفرض بروتوكول 'الاستراحة الرقمية': إيداع الهواتف الذكية في خزائن مغلقة بالمدارس",
        summary: "عقب التقرير التاريخي للجنة الرئاسية المعنية بالشاشات، أطلقت وزارة التعليم الفرنسية مبادرة 'الاستراحة الرقمية' في المدارس الإعدادية والثانوية، ملزمة الطلاب بإغلاق هواتفهم وحفظها في خزائن مخصصة طوال اليوم الدراسي.",
        content: [
          "بعد نشر التقرير الرسمي للجنة الخبراء المعنية بالتعرض للشاشات (Commission Écrans) برئاسة أطباء أعصاب ونفسيين بارزين بتكليف من الرئيس إيمانويل ماكرون، اتخذت فرنسا تدابير غير مسبوقة لحماية الأطفال والمراهقين من الإدمان الرقمي.",
          "أكد تقرير اللجنة المعنون 'بحثاً عن الوقت الضائع' أن فرط استخدام الشاشات ووسائل التواصل الاجتماعي يؤدي إلى اضطرابات حادة في النوم والخمول البدني وتشتت الانتباه وتفاقم القلق.",
          "وبناءً على ذلك، عممت وزارة التعليم الوطني بروتوكول 'Pause Numérique' (الاستراحة الرقمية) على المدارس الإعدادية والثانوية، حيث يتعين على الطلاب إيداع هواتفهم وأجهزتهم الذكية في خزائن مقفلة أو حقائب خاصة عند الدخول.",
          "أظهرت التقييمات في المدارس التجريبية تحسناً بنسبة 35% في التركيز الأكاديمي، وانخفاضاً ملحوظاً في حوادث التنمر الإلكتروني، وعودة التفاعل الاجتماعي المباشر بين الطلاب في فترات الاستراحة.",
          "وشددت الوزارة على أهمية وضع حدود تقنية ومؤسسية صارمة للسيطرة على الإدمان الإلكتروني، داعية أولياء الأمور إلى تطبيق روتين مسائي خالٍ من الشاشات في المنازل."
        ],
        readTime: "5 دقائق",
        tags: ["فرنسا", "الاستراحة الرقمية", "حظر الهواتف في المدارس", "لجنة الشاشات", "العافية الرقمية", "التعليم"]
      },
      id: {
        slug: "prancis-larangan-smartphone-sekolah-pause-numerique",
        title: "Prancis Terapkan 'Pause Numérique': Smartphone Wajib Dikunci di Loker Selama Jam Sekolah",
        summary: "Menyusul laporan resmi Komisi Layar Kepresidenan, Kementerian Pendidikan Prancis memberlakukan protokol 'Pause Numérique' di sekolah menengah, mewajibkan siswa mengunci ponsel mereka di loker khusus saat memasuki sekolah.",
        content: [
          "Menyusul diterbitkannya laporan resmi Komisi Khusus Paparan Layar (Commission Écrans) yang ditunjuk oleh Presiden Emmanuel Macron dan dipimpin oleh pakar neurologi dan psikiatri, pemerintah Prancis mengambil tindakan tegas terhadap kecanduan layar di kalangan remaja.",
          "Laporan bertajuk 'Mencari Waktu yang Hilang' tersebut membuktikan secara ilmiah bahwa paparan layar berlebih dan media sosial merusak kualitas tidur, meningkatkan perilaku pasif, serta memicu kecemasan dan defisit konsentrasi.",
          "Kementerian Pendidikan Nasional Prancis merespons dengan mewajibkan protokol 'Pause Numérique' di sekolah menengah. Siswa diwajibkan menyimpan ponsel dan perangkat pintar mereka di loker terkunci khusus sejak pagi hari hingga jam pulang sekolah.",
          "Hasil uji coba menunjukkan peningkatan fokus belajar di kelas sebesar 35%, penurunan drastis kasus perundungan siber, serta kembalinya interaksi sosial nyata saat jam istirahat.",
          "Pemerintah Prancis menegaskan bahwa batasan struktural sangat diperlukan dan mengimbau keluarga untuk menerapkan malam bebas layar di rumah."
        ],
        readTime: "5 mnt",
        tags: ["Prancis", "Pause Numérique", "Larangan Ponsel Sekolah", "Komisi Layar", "Kesehatan Digital", "Pendidikan"]
      },
      fil: {
        slug: "france-pagbabawal-smartphone-paaralan-pause-numerique",
        title: "Ipinatupad ng France ang 'Pause Numérique': Mga Smartphone Kailangang I-lock sa Loker sa Paaralan",
        summary: "Kasunod ng ulat ng Presidential Screen Commission, ipinatupad ng Ministry of National Education ng France ang protocol na 'Pause Numérique' sa mga sekundaryang paaralan, kung saan kinakailangang itago sa mga nakakandadong loker ang mga telepono.",
        content: [
          "Kasunod ng paglalabas ng opisyal na ulat ng Screen Exposure Commission na itinalaga ni Pangulong Emmanuel Macron at pinamunuan ng mga kilalang neurologist at psychiatrist, gumawa ng matatag na hakbang ang gobyerno ng France laban sa screen addiction ng kabataan.",
          "Ipinakita sa ulat na ang labis na paggamit ng screen at social media ay sumisira sa tulog, nagdudulot ng sedentary lifestyle, at nagpapalala ng anxiety at kakulangan sa atensyon.",
          "Bilang tugon, ipinag-utos ng Ministry of National Education ang 'Pause Numérique' protocol sa mga collège at lycée. Obligado ang mga mag-aaral na iwan ang kanilang mga smartphone sa mga nakakandadong lalagyan pagpasok sa umaga.",
          "Ayon sa datos ng mga pilot school, tumaas ng 35% ang pokus sa silid-aralan, bumaba ang cyberbullying, at muling sumigla ang personal na pakikipag-ugnayan ng mga estudyante sa recess.",
          "Binigyang-diin ng pamahalaan na mahalaga ang mga panuntunang institusyonal upang labanan ang digital addiction, at hinimok ang mga magulang na magpatupad ng phone-free evening routine sa tahanan."
        ],
        readTime: "5 min",
        tags: ["France", "Pause Numérique", "Bawal ang Phone sa Paaralan", "Screen Commission", "Digital Wellbeing", "Edukasyon"]
      },
      th: {
        slug: "france-ban-smartphones-schools-pause-numerique",
        title: "ฝรั่งเศสบังคับใช้มาตรการ 'Pause Numérique' สั่งล็อกสมาร์ทโฟนในตู้ล็อกเกอร์ระหว่างเวลาเรียน",
        summary: "สืบเนื่องจากรายงานประวัติศาสตร์ของคณะกรรมาธิการด้านหน้าจอแห่งทำเนียบประธานาธิบดี กระทรวงศึกษาธิการฝรั่งเศสได้ประกาศใช้มาตรการ 'Pause Numérique' ในโรงเรียนมัธยม โดยกำหนดให้นักเรียนต้องเก็บโทรศัพท์ไว้ในตู้ล็อกเกอร์ที่ปิดล็อกอย่างมิดชิด",
        content: [
          "หลังจากการเผยแพร่รายงานอย่างเป็นทางการของคณะกรรมาธิการตรวจสอบผลกระทบจากหน้าจอ (Commission Écrans) ซึ่งแต่งตั้งโดยประธานาธิบดีเอ็มมานูเอล มาครง และนำโดยแพทย์ผู้เชี่ยวชาญด้านประสาทวิทยาและจิตเวช รัฐบาลฝรั่งเศสได้ดำเนินมาตรการขั้นเด็ดขาดเพื่อแก้ปัญหาการเสพติดหน้าจอในเด็กและเยาวชน",
          "รายงานดังกล่าวระบุว่า การเชื่อมต่อโลกดิจิทัลตลอดเวลาและการใช้หน้าจอมากเกินไปส่งผลกระทบโดยตรงต่อคุณภาพการนอนหลับ เพิ่มความเฉื่อยชาทางร่างกาย และกระตุ้นให้เกิดภาวะวิตกกังวลและสมาธิสั้นในกลุ่มวัยรุ่น",
          "กระทรวงศึกษาธิการแห่งชาติจึงได้บังคับใช้มาตรการ 'Pause Numérique' (การพักเบรกจากดิจิทัล) ในโรงเรียนมัธยม โดยนักเรียนจะต้องนำสมาร์ทโฟนและอุปกรณ์เชื่อมต่อฝากไว้ในตู้ล็อกเกอร์หรือกระเป๋าปิดล็อกตั้งแต่เข้าโรงเรียนจนถึงเวลาเลิกเรียน",
          "ผลการประเมินจากโรงเรียนนำร่องพบว่า สมาธิของนักเรียนในห้องเรียนเพิ่มขึ้นถึง 35% อัตราการกลั่นแกล้งบนโลกออนไลน์ลดลงอย่างเห็นได้ชัด และนักเรียนกลับมามีปฏิสัมพันธ์ทางสังคมในชีวิตจริงมากขึ้นในช่วงเวลาพัก",
          "ทางการฝรั่งเศสเน้นย้ำว่า การกำหนดขอบเขตในระดับสถาบันมีความจำเป็นอย่างยิ่งในการปรับพฤติกรรมดิจิทัล พร้อมกระตุ้นให้ผู้ปกครองกำหนดช่วงเวลาปลอดหน้าจอที่บ้านในมื้ออาหารและก่อนนอน"
        ],
        readTime: "5 นาที",
        tags: ["ฝรั่งเศส", "Pause Numérique", "ห้ามใช้โทรศัพท์ในโรงเรียน", "คณะกรรมาธิการหน้าจอ", "สุขภาพดิจิทัล", "การศึกษา"]
      }
    }
  },

  // --- HABER 1 ---
  {
    id: "1",
    date: "2026-08-26",
    source: "Reuters, Washington Post & NY Attorney General Office",
    sourceUrl: "https://www.reuters.com",
    featured: true,
    catKey: "gov",
    data: {
      tr: {
        slug: "abd-meta-17-milyar-dolar-bagimlilik-davasi-uzlasmasi",
        title: "ABD'de Meta'ya Tarihi Ceza: 17 Milyar Dolarlık 'Bağımlılık Tasarımı' Uzlaşması ve Zorunlu Süre Kısıtlamaları",
        summary: "ABD'deki 50'ye yakın eyaletin açtığı davada Meta (Instagram & Facebook), gençlerde bilerek bağımlılık yaratan algoritmalar ve sonsuz kaydırma özellikleri tasarladığı suçlamasıyla 17,1 milyar dolarlık rekor uzlaşmayı kabul etti. Reşit olmayanlar için günde 2 saat sınırı ve gece ekran yasağı geliyor.",
        content: [
          "Amerika Birleşik Devletleri tarihinin en büyük teknoloji ve kamu sağlığı davalarından biri sonuçlandı. Aralarında New York, California ve Colorado'nun da bulunduğu 50'ye yakın eyalet başsavcısının Meta aleyhine açtığı 'gençlerin ruh sağlığını kasten tehlikeye atma ve bağımlılık yapıcı algoritmalar tasarlama' davasında 17,1 milyar dolarlık tarihi bir uzlaşmaya varıldı.",
          "Dava dosyalarında, Meta'nın kendi iç araştırmalarında Instagram'ın genç kızlarda depresyon, beden algısı bozukluğu ve anksiyeteyi artırdığını bilmesine rağmen, platformdaki 'dopamin döngülerini' ve sonsuz kaydırma (infinite scroll) özelliklerini daha da agresifleştirdiği resmi delillerle kanıtlandı.",
          "Anlaşma kapsamında Meta yalnızca devasa bir tazminat ödemekle kalmayacak, aynı zamanda platformlarında köklü kısıtlamalara gidecek:",
          "1. Reşit olmayan kullanıcılar için günlük toplam kullanım süresi maksimum 2 saat ile sınırlandırılacak.",
          "2. Gece saatlerinde gençlerin platforma erişimi otomatik olarak kısıtlanacak ve ekran karartılacak.",
          "3. Okul ve ders saatlerinde bildirim gönderimi tamamen durdurulacak.",
          "4. Kullanıcılara ve ebeveynlere bağımlılık yapan algoritmik öneri akışlarını kapatıp yalnızca kronolojik akışa geçme zorunlu seçeneği sunulacak.",
          "Eyalet Başsavcıları yaptıkları ortak açıklamada, 'Teknoloji devlerinin çocuklarımızın zihnini ve zamanını kâr uğruna rehin aldığı dönem sona eriyor. Bu karar, dijital platformların kasıtlı bağımlılık mekanizmalarına karşı küresel bir dönüm noktasıdır' dedi."
        ],
        readTime: "6 dk",
        tags: ["Meta", "Instagram", "Facebook", "17 Milyar Dolar", "Bağımlılık Davası", "ABD", "Yasa"]
      },
      en: {
        slug: "us-meta-17-billion-dollar-addictive-design-settlement",
        title: "US Meta Landmark Settlement: $17 Billion Historic Deal on Addictive Design and Youth Screen Restrictions",
        summary: "In a historic resolution with nearly 50 US states, Meta (Instagram & Facebook) agreed to a $17.1 billion settlement over allegations of deliberately designing addictive algorithms that harm youth mental health. Crucial reforms include a 2-hour daily limit for minors and mandatory nighttime screen shutdowns.",
        content: [
          "In one of the most consequential consumer protection and public health settlements in tech history, Meta has agreed to pay approximately $17.1 billion to resolve bipartisan lawsuits brought by attorney generals across nearly 50 US states and territories.",
          "The litigation revealed internal documents showing Meta executives were aware that Instagram usage exacerbated anxiety, depression, and severe body dysmorphia among teenage users, yet continued deploying aggressive infinite scroll feeds and dopamine-stimulating notification loops.",
          "Under the legally binding 10-year settlement terms, Meta must implement sweeping systemic guardrails:",
          "1. Enforce a hard 2-hour daily cap for minors across Instagram and Facebook.",
          "2. Prohibit minor access and darken platform feeds during nighttime hours.",
          "3. Cease push notifications to students during school hours and late evenings.",
          "4. Provide mandatory options for teenagers and parents to disable addictive algorithmic recommendation feeds in favor of chronological sorting.",
          "State Attorneys General declared: 'The era where Big Tech harvests children's mental well-being for engagement metrics is coming to an end. This landmark settlement establishes a global precedent for firm digital friction and youth safety.'"
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "$17 Billion", "Addictive Design", "USA", "Regulation"]
      },
      es: {
        slug: "eeuu-acuerdo-meta-17-mil-millones-diseno-adictivo",
        title: "Histórico acuerdo de Meta en EE. UU.: 17.000 millones de dólares por diseño adictivo y límites de pantalla",
        summary: "En un acuerdo histórico con casi 50 estados de EE. UU., Meta aceptó pagar 17.100 millones de dólares tras acusaciones de diseñar algoritmos adictivos perjudiciales para los jóvenes. Se impondrá un límite diario de 2 horas para menores y apagón nocturno.",
        content: [
          "En uno de los acuerdos de protección al consumidor y salud pública más importantes de la historia tecnológica, Meta acordó pagar 17.100 millones de dólares para resolver demandas presentadas por fiscales generales de casi 50 estados.",
          "El litigio reveló documentos internos que demostraban que los directivos de Meta sabían que Instagram agravaba la depresión y ansiedad en adolescentes, pero continuaron implementando el desplazamiento infinito y bucles de dopamina.",
          "Según los términos del acuerdo, Meta deberá implementar restricciones obligatorias:",
          "1. Límite máximo de 2 horas diarias para menores en Instagram y Facebook.",
          "2. Bloqueo y pantalla oscura obligatoria durante la noche para menores.",
          "3. Cese de notificaciones push durante el horario escolar.",
          "4. Opción obligatoria para desactivar algoritmos adictivos y cambiar a orden cronológico.",
          "Los fiscales generales declararon: 'La era en la que las grandes tecnológicas secuestran el tiempo de nuestros hijos por beneficios económicos está terminando'."
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "17 mil millones", "Diseño adictivo", "EEUU", "Regulación"]
      },
      fr: {
        slug: "etats-unis-accord-meta-17-milliards-design-addictif",
        title: "États-Unis : accord historique de 17 milliards de dollars contre Meta pour « design addictif »",
        summary: "Poursuivi par près de 50 États américains, Meta a accepté un accord de 17,1 milliards de dollars pour avoir sciemment conçu des algorithmes addictifs nocifs pour les mineurs. Un plafond de 2 heures par jour et un couvre-feu nocturne sont imposés.",
        content: [
          "Dans le cadre de l'un des règlements juridiques les plus marquants de l'histoire du numérique, Meta a accepté de verser 17,1 milliards de dollars pour mettre fin aux poursuites intentées par les procureurs généraux d'une cinquantaine d'États américains.",
          "Les pièces du dossier ont révélé que les dirigeants de Meta savaient qu'Instagram aggravait la dépression et l'anxiété chez les adolescentes, tout en intensifiant les flux infinis et les stimulations dopaminergiques.",
          "L'accord impose des garde-fous contraignants sur 10 ans :",
          "1. Plafond strict de 2 heures d'utilisation quotidienne pour les mineurs.",
          "2. Coupure automatique et écran noir pendant la nuit pour les adolescents.",
          "3. Interdiction des notifications pendant les heures de classe.",
          "4. Option obligatoire pour désactiver les flux algorithmiques au profit du flux chronologique.",
          "Les procureurs généraux ont affirmé : 'L'époque où la Big Tech exploitait la santé mentale de nos enfants touche à sa fin.'"
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "17 milliards", "Design addictif", "États-Unis", "Réglementation"]
      },
      de: {
        slug: "usa-meta-17-milliarden-vergleich-suchtdesign",
        title: "USA: Historischer 17-Milliarden-Dollar-Vergleich gegen Meta wegen suchterzeugenden Designs",
        summary: "In einem historischen Vergleich mit fast 50 US-Bundesstaaten zahlt Meta 17,1 Milliarden Dollar wegen vorsätzlich suchterzeugender Algorithmen. Für Minderjährige gilt künftig ein 2-Stunden-Tageslimit und eine nächtliche Bildschirmsperre.",
        content: [
          "In einem der folgenschwersten Verfahren der Technologiegeschichte hat Meta einem Vergleich über 17,1 Milliarden Dollar zugestimmt, um Klagen von fast 50 US-Bundesstaaten beizulegen.",
          "Interne Dokumente belegten, dass Meta-Führungskräfte wussten, dass Instagram Depressionen und Angstzustände bei Jugendlichen verstärkte, dennoch aber Endlos-Scrollen und Dopamin-Schleifen forcierten.",
          "Der Vergleich verpflichtet Meta zu weitreichenden Maßnahmen:",
          "1. Striktes Tageslimit von maximal 2 Stunden für Minderjährige.",
          "2. Automatische Abschaltung und schwarzer Bildschirm während der Nachtstunden.",
          "3. Vollständiger Stopp von Push-Benachrichtigungen während der Schulzeit.",
          "4. Verpflichtende Option zum Abschalten algorithmischer Feeds zugunsten chronologischer Ansichten.",
          "Die Generalstaatsanwälte erklärten: 'Das Zeitalter, in dem Tech-Konzerne das Wohlbefinden unserer Kinder für Profite opfern, geht zu Ende.'"
        ],
        readTime: "6 Min.",
        tags: ["Meta", "Instagram", "Facebook", "17 Milliarden", "Suchtdesign", "USA", "Regulierung"]
      },
      pt: {
        slug: "eua-acordo-meta-17-bilhoes-design-viciante",
        title: "EUA: Acordo histórico de US$ 17 bilhões com a Meta por design viciante e limites de tela",
        summary: "Em resolução histórica com quase 50 estados dos EUA, a Meta aceitou pagar US$ 17,1 bilhões por acusações de criar algoritmos viciantes nocivos aos jovens. As reformas incluem limite de 2 horas diárias e bloqueio noturno para menores.",
        content: [
          "Em um dos maiores acordos de proteção ao consumidor da história da tecnologia, a Meta concordou em pagar US$ 17,1 bilhões para encerrar processos movidos por procuradores-gerais de quase 50 estados norte-americanos.",
          "Documentos internos comprovaram que a Meta sabia dos impactos negativos do Instagram na saúde mental de adolescentes, mas manteve o feed infinito e gatilhos de dopamina.",
          "Os termos obrigatórios estabelecem:",
          "1. Limite máximo diário de 2 horas para menores de idade.",
          "2. Bloqueio automático de acesso durante o período noturno.",
          "3. Suspensão de notificações durante o horário escolar.",
          "4. Opção de desativar recomendações algorítmicas e usar apenas ordem cronológica.",
          "Os procuradores destacaram que a decisão marca um divisor de águas na proteção contra mecanismos digitais abusivos."
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "17 bilhões", "Design viciante", "EUA", "Regulação"]
      },
      it: {
        slug: "usa-accordo-meta-17-miliardi-design-che-crea-dipendenza",
        title: "USA: Accordo storico da 17 miliardi di dollari per Meta su design che crea dipendenza e limiti di tempo",
        summary: "In una storica intesa con quasi 50 stati USA, Meta ha accettato un accordo da 17,1 miliardi di dollari sull'accusa di aver progettato algoritmi volutamente assuefacenti. Previsto limite di 2 ore al giorno e blocco notturno per i minori.",
        content: [
          "In una delle vertenze più importanti della storia tecnologica, Meta verserà 17,1 miliardi di dollari per chiudere le cause intentate dai procuratori generali di quasi 50 stati americani.",
          "Dalle indagini è emerso che i vertici di Meta conoscevano i danni di Instagram sulla salute mentale dei giovani, ma hanno continuato a potenziare lo scorrimento infinito.",
          "L'accordo vincolante introduce:",
          "1. Tetto massimo di 2 ore giornaliere per i minori.",
          "2. Oscuramento automatico della piattaforma durante la notte.",
          "3. Blocco delle notifiche push durante l'orario scolastico.",
          "4. Possibilità di disattivare l'algoritmo predittivo per passare al feed cronologico.",
          "I procuratori hanno sottolineato che questo accordo sancisce la fine dello sfruttamento incontrollato dell'attenzione dei minori."
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "17 miliardi", "Dipendenza digitale", "USA", "Regolamentazione"]
      },
      ar: {
        slug: "us-meta-17-billion-addictive-design-settlement",
        title: "تسوية تاريخية في أمريكا: تغريم ميتا 17 مليار دولار بسبب التصميم المسبب للإدمان وقيود على الشاشات",
        summary: "في تسوية تاريخية مع نحو 50 ولاية أمريكية، وافقت شركة ميتا على دفع 17.1 مليار دولار إثر اتهامات بتصميم خوارزميات إدمانية تضر بصحة المراهقين. تشمل الإجراءات فرض حد أقصى لساعتين يومياً وحظر الوصول الليلي.",
        content: [
          "في واحدة من أضخم قضايا حماية المستهلك في تاريخ التكنولوجيا، وافقت ميتا على دفع 17.1 مليار دولار لتسوية دعاوى قضائية رفعتها نحو 50 ولاية أمريكية.",
          "أثبتت وثائق المحكمة أن إدارة ميتا كانت على علم بأن إنستغرام يفاقم الاكتئاب والقلق لدى الفتيات، ومع ذلك واصلت نشر التمرير اللانهائي وحلقات الدوبامين.",
          "تتضمن بنود الاتفاقية الملزمة:",
          "1. تقييد استخدام القاصرين بساعتين كحد أقصى يومياً.",
          "2. حظر وصول القاصرين وإظهار شاشة مظلمة خلال ساعات الليل.",
          "3. إيقاف الإشعارات تماماً أثناء الدوام المدرسي.",
          "4. خيار إجباري لتعطيل الخوارزميات والانتقال للترتيب الزمني.",
          "أكد المدعون العامون أن هذا القرار يمثل نقطة تحول عالمية لوضع حدود صارمة لشركات التكنولوجيا."
        ],
        readTime: "6 دقائق",
        tags: ["ميتا", "إنستغرام", "فيسبوك", "17 مليار دولار", "تصميم إدماني", "أمريكا", "قانون"]
      },
      id: {
        slug: "as-meta-kesepakatan-17-miliar-dolar-desain-adiktif",
        title: "AS: Kesepakatan Bersejarah Meta Senilai 17 Miliar Dolar atas Desain Adiktif dan Pembatasan Layar Remaja",
        summary: "Dalam resolusi bersejarah dengan hampir 50 negara bagian AS, Meta menyetujui penyelesaian 17,1 miliar dolar atas tuduhan merancang algoritma adiktif yang merusak mental remaja. Termasuk batas harian 2 jam dan pemadaman malam.",
        content: [
          "Dalam salah satu penyelesaian hukum terbesar dalam sejarah teknologi, Meta setuju membayar 17,1 miliar dolar untuk menyelesaikan gugatan dari hampir 50 jaksa agung negara bagian AS.",
          "Litigasi mengungkap dokumen internal bahwa pimpinan Meta mengetahui dampak buruk Instagram terhadap depresi remaja, namun tetap memperluas fitur infinite scroll.",
          "Ketentuan kesepakatan mencakup:",
          "1. Batas waktu harian maksimal 2 jam untuk pengguna di bawah umur.",
          "2. Penutupan akses otomatis dan layar gelap pada malam hari.",
          "3. Penghentian notifikasi push selama jam sekolah.",
          "4. Opsi wajib untuk menonaktifkan feed algoritma dan beralih ke kronologis.",
          "Jaksa Agung menegaskan bahwa era eksploitasi waktu anak demi keuntungan finansial telah berakhir."
        ],
        readTime: "6 mnt",
        tags: ["Meta", "Instagram", "Facebook", "17 Miliar Dolar", "Desain Adiktif", "AS", "Regulasi"]
      },
      fil: {
        slug: "us-meta-17-bilyong-dolyar-kasunduan-nakakahumaling-na-disenyo",
        title: "US: Makasaysayang $17 Bilyong Kasunduan ng Meta sa Nakakahumaling na Disenyo at Limitasyon sa Screen",
        summary: "Sa makasaysayang kasunduan sa halos 50 estado ng US, pumayag ang Meta na magbayad ng $17.1 bilyon dahil sa pagdidisenyo ng mga nakakahumaling na algorithm. Kabilang dito ang 2 oras na limitasyon bawat araw para sa mga menor de edad at curfew sa gabi.",
        content: [
          "Sa isa sa pinakamalaking kasunduan sa proteksyon ng mamimili sa kasaysayan ng teknolohiya, pumayag ang Meta na magbayad ng $17.1 bilyon upang resolbahin ang mga kaso mula sa halos 50 estado.",
          "Ipinakita sa mga dokumento na alam ng pamunuan ng Meta na pinalalala ng Instagram ang depresyon at anxiety ng mga kabataan, ngunit patuloy pa ring nagpatupad ng infinite scroll.",
          "Kabilang sa mga ipinag-utos:",
          "1. Mahigpit na 2 oras na limitasyon bawat araw para sa mga menor de edad.",
          "2. Awtomatikong pag-block at pagpapadilim ng screen sa gabi.",
          "3. Paghinto ng push notifications sa oras ng klase.",
          "4. Sapilitang opsyon na i-off ang algorithm at lumipat sa kronolohikal na feed.",
          "Ipinahayag ng mga State Attorney General na tapos na ang panahon kung kailan ginagawang negosyo ang kapakanan ng mga bata."
        ],
        readTime: "6 min",
        tags: ["Meta", "Instagram", "Facebook", "$17 Bilyon", "Nakakahumaling na Disenyo", "USA", "Batas"]
      },
      th: {
        slug: "us-meta-17-billion-dollar-addictive-design-settlement",
        title: "สหรัฐฯ บรรลุข้อตกลงประวัติศาสตร์ 1.7 หมื่นล้านดอลลาร์กับ Meta ฐานออกแบบแอปสร้างการเสพติดและจำกัดเวลาหน้าจอ",
        summary: "ในข้อตกลงประวัติศาสตร์กับเกือบ 50 รัฐในสหรัฐฯ Meta ตกลงจ่ายเงิน 1.71 หมื่นล้านดอลลาร์ ยุติคดีออกแบบอัลกอริทึมที่จงใจสร้างการเสพติดในกลุ่มเยาวชน พร้อมบังคับจำกัดเวลาใช้งาน 2 ชั่วโมงต่อวันและปิดกั้นการเข้าถึงในเวลากลางคืน",
        content: [
          "ในหนึ่งในคดีคุ้มครองผู้บริโภคและสาธารณสุขครั้งประวัติศาสตร์ของวงการเทคโนโลยี Meta ได้ตกลงจ่ายเงิน 1.71 หมื่นล้านดอลลาร์เพื่อยุติการฟ้องร้องจากอัยการสูงสุดในเกือบ 50 รัฐของสหรัฐฯ",
          "เอกสารภายในระบุว่า ผู้บริหารของ Meta ทราบดีว่าการใช้งาน Instagram ส่งผลให้วัยรุ่นเกิดภาวะซึมเศร้าและวิตกกังวล แต่ยังคงพัฒนาระบบ Infinite Scroll และวงจรกระตุ้นโดปามีนอย่างต่อเนื่อง",
          "ข้อตกลงนี้กำหนดให้ Meta ดำเนินมาตรการควบคุมที่เข้มงวด:",
          "1. บังคับใช้การจำกัดเวลาใช้งานสูงสุดไม่เกิน 2 ชั่วโมงต่อวันสำหรับผู้เยาว์",
          "2. ปิดกั้นการเข้าถึงและพักหน้าจอเป็นสีดำอัตโนมัติในเวลากลางคืนสำหรับเยาวชน",
          "3. ระงับการส่งการแจ้งเตือนทั้งหมดระหว่างเวลาเรียน",
          "4. บังคับให้มีตัวเลือกในการปิดฟีดอัลกอริทึมและเปลี่ยนเป็นลำดับเวลาปกติ",
          "อัยการสูงสุดประจำรัฐระบุว่า ยุคสมัยที่บริษัทยักษ์ใหญ่ด้านเทคโนโลยีแสวงหาผลกำไรจากสุขภาพจิตของเด็กๆ กำลังจะสิ้นสุดลง"
        ],
        readTime: "6 นาที",
        tags: ["Meta", "Instagram", "Facebook", "1.7 หมื่นล้านดอลลาร์", "การออกแบบสร้างการเสพติด", "สหรัฐฯ", "กฎหมาย"]
      }
    }
  },

  // --- HABER 2 ---
  {
    id: "2",
    date: "2026-08-25",
    source: "T.C. Millî Eğitim Bakanlığı & Anadolu Ajansı",
    sourceUrl: "https://www.meb.gov.tr",
    featured: true,
    catKey: "school",
    data: {
      tr: {
        slug: "turkiye-meb-okullarda-cep-telefonu-yasagi-genelgesi",
        title: "Milli Eğitim Bakanlığı'ndan 81 İle Genelge: Okullarda Cep Telefonu Kullanımı Tamamen Yasaklandı",
        summary: "Milli Eğitim Bakanlığı (MEB), okullarda öğrencilerin ders saatlerinde cep telefonu bulundurmasını ve kullanmasını yasaklayan genelgeyi yeniledi. Yeni düzenlemeyle öğretmenlerin de derste telefon kullanımı kısıtlanırken, dijital bağımlılıkla mücadele resmi müfredata girdi.",
        content: [
          "Milli Eğitim Bakanlığı (MEB), 81 il milli eğitim müdürlüğüne gönderdiği kapsamlı genelge ile eğitim-öğretim ortamlarında cep telefonu, tablet ve akıllı saat kullanımına yönelik tedbirleri en üst seviyeye çıkardı.",
          "Genelgeye göre, öğrencilerin sınıflarda cep telefonu bulundurması kesin olarak yasaklandı. Telefonlar sabah ilk derse girilmeden önce okul yönetimlerince kurulan özel kilitli dolap veya kutularda toplanacak ve son ders bitimine kadar öğrencilere teslim edilmeyecek.",
          "Bu yıl yürürlüğe giren kritik bir yenilikle, öğretmenlerin de ders esnasında sınıfta cep telefonu kullanmaları ve sınıfa telefonla girmeleri yasaklandı. Böylece ders ortamının tamamen ekransız ve kesintisiz odaklanma alanı olması hedefleniyor.",
          "Bakanlık ayrıca ödev, duyuru ve veli bilgilendirme süreçlerinde kontrolsüz anlık mesajlaşma gruplarının kullanımını kısıtladı. Bakanlık onaylı resmi eğitim portalları haricinde dijital ödev baskısı oluşturulmasının önüne geçilecek.",
          "Genelgede, çocuklarda artan dikkat dağınıklığı, ders başarısındaki düşüş ve siber zorbalık vakalarının doğrudan ekran bağımlılığı ile ilişkili olduğu vurgulanarak, tüm okullarda 'Duygu-Değer Temelli Dijital Esenlik' eğitimlerinin verileceği duyuruldu."
        ],
        readTime: "5 dk",
        tags: ["Türkiye", "MEB", "Okulda Telefon Yasağı", "Dijital Bağımlılık", "Eğitim", "Genelge"]
      },
      en: {
        slug: "turkey-ministry-of-education-classroom-smartphone-ban",
        title: "Turkey's Ministry of National Education Enforces Total Classroom Smartphone Ban Across 81 Provinces",
        summary: "Turkey's Ministry of National Education (MEB) has issued a nationwide directive prohibiting mobile phones in classrooms for both students and teachers, while officially embedding digital wellbeing and screen addiction education into the curriculum.",
        content: [
          "The Turkish Ministry of National Education has tightened regulatory measures regarding digital devices, issuing a binding directive to provincial directorates across all 81 provinces to ensure distraction-free educational environments.",
          "Under the mandate, student smartphones, smartwatches, and tablets must be collected in locked storage units prior to morning roll call and remain secured until the end of the school day.",
          "In a major policy update, classroom mobile phone usage has also been prohibited for teachers during instructional hours, prioritizing human interaction and uninterrupted academic focus.",
          "The Ministry also banned unapproved instant messaging groups for assignments and official notices to eliminate late-night digital homework fatigue.",
          "Citing empirical data linking uncontrolled screen time to cognitive fragmentation and rising cyberbullying rates, the Ministry launched the 'Values-Based Digital Wellbeing Curriculum' across all public and private institutions."
        ],
        readTime: "5 min",
        tags: ["Turkey", "Education", "Phone Ban", "Digital Wellbeing", "Classroom Focus", "Policy"]
      },
      es: {
        slug: "turquia-ministerio-educacion-prohibicion-celulares-aulas",
        title: "Turquía prohíbe el uso de teléfonos inteligentes en las aulas de 81 provincias",
        summary: "El Ministerio de Educación de Turquía emitió una directiva nacional que prohíbe los teléfonos en las aulas para alumnos y docentes, e integra la educación sobre adicción digital en el plan de estudios.",
        content: [
          "El Ministerio de Educación Nacional de Turquía emitió una directiva vinculante para las 81 provincias con el objetivo de garantizar aulas libres de distracciones digitales.",
          "Los dispositivos de los alumnos deben guardarse en casilleros cerrados antes del inicio de las clases y no se entregan hasta el final de la jornada.",
          "Como novedad clave, también se prohíbe a los profesores utilizar el teléfono móvil dentro del aula durante las horas de clase.",
          "Asimismo, se restringió el uso de grupos de mensajería instantánea no oficiales para tareas, evitando la fatiga digital nocturna.",
          "El ministerio lanzó el programa 'Bienestar Digital Basado en Valores' en todas las instituciones educativas del país."
        ],
        readTime: "5 min",
        tags: ["Turquía", "Educación", "Prohibición celulares", "Bienestar digital", "Aulas", "Normativa"]
      },
      fr: {
        slug: "turquie-ministere-education-interdiction-smartphones-classes",
        title: "Turquie : interdiction totale des smartphones dans les salles de classe des 81 provinces",
        summary: "Le ministère turc de l'Éducation nationale a publié une directive nationale interdisant les téléphones en classe pour les élèves et les enseignants, tout en intégrant la prévention de l'addiction aux écrans au programme scolaire.",
        content: [
          "Le ministère de l'Éducation nationale de Turquie a renforcé les mesures relatives aux appareils numériques dans l'ensemble des 81 provinces du pays.",
          "Les téléphones des élèves doivent être déposés dans des casiers verrouillés avant le début des cours et restent sous clé jusqu'à la fin de la journée.",
          "Une règle stricte interdit également aux enseignants d'utiliser leur smartphone en classe pendant les cours afin de préserver une concentration maximale.",
          "Le ministère a également limité les groupes de messagerie instantanée non approuvés pour éviter la surcharge mentale liée aux devoirs tardifs.",
          "Un module officiel sur le bien-être numérique a été introduit dans toutes les écoles."
        ],
        readTime: "5 min",
        tags: ["Turquie", "Éducation", "Interdiction téléphone", "Bien-être numérique", "Classe", "Directive"]
      },
      de: {
        slug: "tuerkei-bildungsministerium-smartphone-verbot-klassenzimmer",
        title: "Türkei: Bildungsministerium verhängt Smartphone-Verbot im Unterricht in allen 81 Provinzen",
        summary: "Das türkische Bildungsministerium hat eine landesweite Richtlinie erlassen, die Mobiltelefone im Klassenzimmer für Schüler und Lehrkräfte untersagt und digitale Entgiftung in den Lehrplan aufnimmt.",
        content: [
          "Das türkische Bildungsministerium hat in allen 81 Provinzen verbindliche Richtlinien für ablenkungsfreie Lernumgebungen erlassen.",
          "Smartphones der Schüler werden vor Unterrichtsbeginn in versperrten Schränken verwahrt und erst nach Unterrichtsende ausgegeben.",
          "Auch Lehrkräften ist die Smartphone-Nutzung während des Unterrichts untersagt, um die menschliche Interaktion zu stärken.",
          "Inoffizielle Chatgruppen für Hausaufgaben wurden eingeschränkt, um digitale Belastung am Abend zu vermeiden.",
          "Ein neues Unterrichtsprogramm zur Förderung digitaler Disziplin und mentaler Gesundheit wurde landesweit eingeführt."
        ],
        readTime: "5 Min.",
        tags: ["Türkei", "Bildung", "Smartphone-Verbot", "Digitale Disziplin", "Klassenzimmer", "Richtlinie"]
      },
      pt: {
        slug: "turquia-ministerio-educacao-proibicao-celulares-salas-aula",
        title: "Turquia proíbe celulares em salas de aula em todas as 81 províncias",
        summary: "O Ministério da Educação da Turquia renovou a diretriz que proíbe celulares em sala de aula para alunos e professores, integrando a educação contra o vício digital ao currículo escolar.",
        content: [
          "O Ministério da Educação Nacional da Turquia determinou medidas rigorosas em todas as 81 províncias para criar ambientes de aprendizado focados.",
          "Os aparelhos dos alunos são recolhidos e trancados em armários especiais antes da primeira aula e devolvidos apenas no final do dia.",
          "Os professores também estão proibidos de usar celulares durante as aulas, priorizando a atenção pedagógica.",
          "Grupos informais de mensagens para tarefas foram restringidos para combater o cansaço digital noturno.",
          "Foi lançado um programa nacional de conscientização e bem-estar digital para toda a rede escolar."
        ],
        readTime: "5 min",
        tags: ["Turquia", "Educação", "Proibição celulares", "Bem-estar digital", "Foco escolar", "Diretriz"]
      },
      it: {
        slug: "turchia-ministero-istruzione-divieto-smartphone-classi",
        title: "Turchia: il Ministero dell'Istruzione vieta gli smartphone nelle classi di tutte le 81 province",
        summary: "Il Ministero dell'Istruzione turco ha emanato una direttiva nazionale che vieta i cellulari in classe sia per studenti che per insegnanti, inserendo l'educazione al benessere digitale nei programmi scolastici.",
        content: [
          "Il Ministero dell'Istruzione della Turchia ha emanato disposizioni vincolanti per tutte le 81 province per garantire aule prive di distrazioni.",
          "I telefoni degli studenti vengono ritirati e chiusi in armadietti sicuri la mattina fino al termine delle lezioni.",
          "Il divieto di utilizzo dello smartphone durante le lezioni si estende anche al corpo docente.",
          "È stato limitato l'uso di gruppi di messaggistica non ufficiali per compiti e comunicazioni scolastiche.",
          "È stato introdotto un programma didattico nazionale dedicato al contrasto della dipendenza da schermi."
        ],
        readTime: "5 min",
        tags: ["Turchia", "Istruzione", "Divieto cellulari", "Benessere digitale", "Scuola", "Direttiva"]
      },
      ar: {
        slug: "turkey-ministry-of-education-classroom-smartphone-ban",
        title: "وزارة التعليم التركية تصدر تعميماً لـ 81 ولاية: حظر شامل لاستخدام الهواتف في المدارس",
        summary: "جددت وزارة التعليم التركية حظر استخدام الهواتف المحمولة داخل الفصول للطلاب والمعلمين، وأدرجت التوعية بالإدمان الرقمي رسمياً في المناهج الدراسية.",
        content: [
          "أصدرت وزارة التعليم الوطني التركية تعميماً شاملاً لمديريات التعليم في 81 ولاية لرفع تدابير مكافحة التشتت الرقمي إلى أعلى مستوى.",
          "يُحظر تماماً وجود الهواتف مع الطلاب داخل الفصول، حيث تُجمع صباحاً في خزائن مغلقة حتى نهاية اليوم الدراسي.",
          "شمل القرار حظر استخدام المعلمين للهواتف المحمولة أثناء الحصص الدراسية لضمان بيئة تعليمية هادئة.",
          "تم تقييد مجموعات المراسلة الفورية غير المعتمدة للواجبات المدرسية لمنع الضغط الرقمي المسائي.",
          "أطلقت الوزارة برنامج 'العافية الرقمية القائمة على القيم' في جميع المدارس."
        ],
        readTime: "5 دقائق",
        tags: ["تركيا", "التعليم", "حظر الهواتف", "الإدمان الرقمي", "المدارس", "تعميم"]
      },
      id: {
        slug: "turki-kementerian-pendidikan-larangan-ponsel-ruang-kelas",
        title: "Kementerian Pendidikan Turki Berlakukan Larangan Total Smartphone di Kelas di 81 Provinsi",
        summary: "Kementerian Pendidikan Nasional Turki mengeluarkan arahan nasional yang melarang ponsel di ruang kelas bagi siswa dan guru, sekaligus memasukkan literasi kecanduan digital ke dalam kurikulum.",
        content: [
          "Kementerian Pendidikan Turki memperketat regulasi perangkat digital di seluruh 81 provinsi guna menciptakan lingkungan belajar yang fokus.",
          "Ponsel siswa dikumpulkan di loker terkunci sebelum pelajaran pertama dan disimpan hingga jam sekolah usai.",
          "Guru juga dilarang menggunakan smartphone selama jam mengajar untuk menjaga interaksi langsung.",
          "Penggunaan grup pesan instan tidak resmi untuk tugas sekolah dibatasi guna mengurangi kelelahan digital malam hari.",
          "Kurikulum 'Kesejahteraan Digital' resmi diluncurkan di seluruh sekolah."
        ],
        readTime: "5 mnt",
        tags: ["Turki", "Pendidikan", "Larangan Ponsel", "Kesehatan Digital", "Ruang Kelas", "Kebijakan"]
      },
      fil: {
        slug: "turkey-kagawaran-ng-edukasyon-pagbabawal-cellphone-silid-aralan",
        title: "Kagawaran ng Edukasyon ng Turkey, Ipinagbawal ang Cellphone sa Silid-Aralan sa 81 Lalawigan",
        summary: "Naglabas ang Kagawaran ng Edukasyon ng Turkey ng pambansang direktiba na nagbabawal sa mga mobile phone sa silid-aralan para sa mga mag-aaral at guro, habang isinasama ang digital wellbeing sa kurikulum.",
        content: [
          "Pinaigting ng Kagawaran ng Edukasyon ng Turkey ang mga panuntunan laban sa digital distraction sa lahat ng 81 lalawigan.",
          "Kinokolekta ang mga smartphone ng mga estudyante sa mga nakakandadong lalagyan bago magsimula ang klase hanggang sa huling dismissal.",
          "Ipinagbawal din sa mga guro ang paggamit ng telepono habang nagtuturo upang mapanatili ang fokus sa pag-aaral.",
          "Nilimitahan ang mga unapproved messaging group para sa takdang-aralin upang maiwasan ang late-night digital stress.",
          "Inilunsad ang opisyal na curriculum ukol sa Digital Wellbeing sa buong bansa."
        ],
        readTime: "5 min",
        tags: ["Turkey", "Edukasyon", "Bawal ang Phone", "Digital Wellbeing", "Silid-Aralan", "Polisiya"]
      },
      th: {
        slug: "turkey-education-ministry-classroom-smartphone-ban",
        title: "กระทรวงศึกษาธิการตุรกีสั่งห้ามใช้สมาร์ทโฟนในห้องเรียนครอบคลุมทั้ง 81 จังหวัด",
        summary: "กระทรวงศึกษาธิการแห่งชาติตุรกีออกคำสั่งห้ามนำสมาร์ทโฟนเข้าห้องเรียนทั้งสำหรับนักเรียนและครู พร้อมบรรจุหลักสูตรการดูแลสุขภาวะดิจิทัลเข้าสู่ระบบการศึกษาอย่างเป็นทางการ",
        content: [
          "กระทรวงศึกษาธิการตุรกีประกาศใช้ระเบียบข้อบังคับที่เข้มงวดใน 81 จังหวัด เพื่อสร้างบรรยากาศการเรียนรู้ที่ปราศจากการรบกวนของหน้าจอ",
          "สมาร์ทโฟนของนักเรียนจะต้องถูกเก็บไว้ในตู้ล็อกเกอร์ที่ปลอดภัยก่อนเริ่มคาบเรียนแรก และจะได้รับคืนหลังเลิกเรียนเท่านั้น",
          "ครูผู้สอนถูกสั่งห้ามใช้สมาร์ทโฟนระหว่างการสอนเพื่อส่งเสริมการมีปฏิสัมพันธ์กับนักเรียนอย่างเต็มที่",
          "จำกัดการใช้กลุ่มแชทส่งการบ้านที่ไม่ได้มาตรฐานเพื่อลดความเหนื่อยล้าทางดิจิทัลของนักเรียนในยามค่ำคืน",
          "เปิดตัวหลักสูตรสุขภาวะดิจิทัลเพื่อสร้างภูมิคุ้มกันในการใช้เทคโนโลยีอย่างมีวินัย"
        ],
        readTime: "5 นาที",
        tags: ["ตุรกี", "การศึกษา", "ห้ามใช้โทรศัพท์", "สุขภาวะดิจิทัล", "ห้องเรียน", "นโยบาย"]
      }
    }
  },

  // --- HABER 3 ---
  {
    id: "3",
    date: "2026-08-24",
    source: "European Commission & The Guardian",
    sourceUrl: "https://ec.europa.eu",
    featured: false,
    catKey: "gov",
    data: {
      tr: {
        slug: "avrupa-birligi-dsa-tiktok-bagimlilik-yapan-tasarim-sorusturmasi",
        title: "Avrupa Birliği'nden TikTok'a 'Bağımlılık Yapan Tasarım' Yaptırımı: Sonsuz Kaydırma ve Görev Ödülleri İptal Edildi",
        summary: "Avrupa Komisyonu, Dijital Hizmetler Yasası (DSA) kapsamında TikTok hakkında yürüttüğü bağımlılık yapıcı tasarım soruşturmasında, platformun 'TikTok Lite Görev ve Ödül' sistemini AB genelinde kalıcı olarak yasaklattı. Sonsuz kaydırma için zorunlu mola sistemleri gündemde.",
        content: [
          "Avrupa Birliği Komisyonu, gençlerin ve çocukların zihinsel esenliğini korumak amacıyla teknoloji devlerine yönelik denetimlerini sıkılaştırıyor. Komisyon, TikTok'un kullanıcıları ekranda tutmak için tasarladığı mekanizmaları mercek altına aldı.",
          "Yapılan resmi incelemeler sonucunda, kullanıcıları video izledikçe puan ve para ödülüyle ödüllendiren 'TikTok Lite Rewards' sisteminin kumar benzeri dopamin bağımlılığı yarattığı tespit edildi. TikTok, AB yaptırımlarından kaçınmak için bu ödül programını tüm Avrupa Birliği ülkelerinde kalıcı olarak geri çektiğini taahhüt etti.",
          "Avrupa Komisyonu'nun yayımladığı ön raporda; sonsuz kaydırma (infinite scroll), otomatik video oynatma (autoplay) ve agresif anlık bildirimlerin kullanıcıların özdenetimini felç ettiği ve Dijital Hizmetler Yasası'na aykırı olduğu resmen bildirildi.",
          "AB yetkilileri, platformların algoritmik olarak ekran başında geçirilen süreyi artırma stratejilerine karşı küresel cironun %6'sına varan ağır para cezaları ve zorunlu 'ekran süresi kalkanları' getirmeye hazırlanıyor."
        ],
        readTime: "5 dk",
        tags: ["Avrupa Birliği", "TikTok", "DSA", "Sonsuz Kaydırma", "Regülasyon", "Dijital Hizmetler"]
      },
      en: {
        slug: "eu-dsa-tiktok-addictive-design-investigation-lite-rewards-ban",
        title: "European Union Crackdown on TikTok: TikTok Lite Addictive Rewards Permanently Withdrawn Under DSA",
        summary: "Under the Digital Services Act (DSA), the European Commission enforced the permanent withdrawal of TikTok Lite's addictive reward scheme across the EU. Regulators are now advancing formal findings targeting infinite scroll and autoplay mechanisms.",
        content: [
          "The European Commission is intensifying enforcement against behavioral manipulation in Big Tech apps under the Digital Services Act (DSA), specifically targeting mechanics designed to compel relentless screen usage.",
          "Following formal proceedings, TikTok submitted legally binding commitments to permanently withdraw its 'Task and Reward' programme across the entire European Union. The Commission had warned that paying users dopamine points for continuous video scrolling posed toxic addiction risks akin to gambling.",
          "EU regulators also published preliminary findings stating that core user interface mechanics — including infinite scroll, autoplay loops, and push notification triggers — violate the DSA by undermining user self-regulation.",
          "Tech platforms operating in the European Union face fines of up to 6% of global turnover and mandatory screen time interrupters if addictive design patterns are not remediated."
        ],
        readTime: "5 min",
        tags: ["European Union", "TikTok", "DSA", "Infinite Scroll", "Digital Services Act", "Regulation"]
      },
      es: {
        slug: "ue-dsa-tiktok-investigacion-diseno-adictivo-lite-rewards",
        title: "La Unión Europea frena a TikTok: retirada definitiva de las recompensas adictivas de TikTok Lite bajo la DSA",
        summary: "Bajo la Ley de Servicios Digitales (DSA), la Comisión Europea forzó la retirada permanente del programa de recompensas de TikTok Lite en toda la UE, mientras investiga los mecanismos de desplazamiento infinito y reproducción automática.",
        content: [
          "La Comisión Europea intensificó sus sanciones contra las prácticas de diseño adictivo en plataformas tecnológicas.",
          "Tras la apertura de expedientes sancionadores, TikTok se comprometió formalmente a retirar de forma permanente en la UE su programa 'TikTok Lite Rewards', que incentivaba el consumo compulsivo de vídeos a cambio de puntos.",
          "Los reguladores europeos señalaron que el desplazamiento infinito y las notificaciones agresivas vulneran la autonomía del usuario y violan la legislación comunitaria.",
          "Las empresas que no eliminen patrones oscuros y diseños adictivos se enfrentan a multas de hasta el 6% de su facturación mundial."
        ],
        readTime: "5 min",
        tags: ["Unión Europea", "TikTok", "DSA", "Desplazamiento infinito", "Regulación", "Servicios digitales"]
      },
      fr: {
        slug: "ue-dsa-tiktok-enquete-design-addictif-lite-rewards",
        title: "Union européenne : retrait définitif du système addictif TikTok Lite dans le cadre du DSA",
        summary: "Sous la pression de la Commission européenne et du Règlement sur les services numériques (DSA), TikTok a retiré définitivement son programme de récompenses TikTok Lite dans l'UE. Le défilement infini est désormais dans le collimateur.",
        content: [
          "La Commission européenne accentue sa lutte contre les mécanismes addictifs des géants de la tech qui captent l'attention des jeunes.",
          "Face à la menace de lourdes sanctions, TikTok a pris l'engagement juridique de retirer définitivement son système 'TikTok Lite Rewards' dans toute l'Union européenne.",
          "Les instances de régulation soulignent que le défilement infini et la lecture automatique court-circuitent la volonté des utilisateurs et constituent une infraction au DSA.",
          "Les plateformes encourent des sanctions financières pouvant atteindre 6 % de leur chiffre d'affaires mondial."
        ],
        readTime: "5 min",
        tags: ["Union européenne", "TikTok", "DSA", "Défilement infini", "Réglementation", "Services numériques"]
      },
      de: {
        slug: "eu-dsa-tiktok-ermittlung-suchtdesign-lite-rewards-verbot",
        title: "EU-Verfahren gegen TikTok: 'TikTok Lite Rewards' unter dem Digital Services Act dauerhaft gestoppt",
        summary: "Die EU-Kommission hat im Rahmen des Digital Services Act (DSA) den dauerhaften Rückzug des suchtfördernden Belohnungssystems von TikTok Lite durchgesetzt. Auch Endlos-Scrollen steht unter behördlicher Prüfung.",
        content: [
          "Die Europäische Kommission verschärft ihr Vorgehen gegen manipulative und suchterzeugende Benutzeroberflächen im Internet.",
          "TikTok hat sich rechtlich bindend verpflichtet, das Belohnungssystem von 'TikTok Lite', das Nutzer für ununterbrochenes Videoschauen mit Punkten entlohnte, in der gesamten EU einzustellen.",
          "Die EU-Behörden stuften Funktionen wie Endlos-Scrollen und automatische Wiedergabe als Gefahr für die mentale Selbstkontrolle ein.",
          "Bei weiteren Verstößen drohen Plattformen Bußgelder von bis zu 6 % ihres weltweiten Jahresumsatzes."
        ],
        readTime: "5 Min.",
        tags: ["Europäische Union", "TikTok", "DSA", "Endlos-Scrollen", "Regulierung", "Digital Services Act"]
      },
      pt: {
        slug: "ue-dsa-tiktok-investigacao-design-viciante-lite-rewards",
        title: "União Europeia barra TikTok: sistema viciante do TikTok Lite é permanentemente banido sob a DSA",
        summary: "Sob a Lei de Serviços Digitais (DSA), a Comissão Europeia determinou o encerramento definitivo do programa de recompensas do TikTok Lite na UE. Mecanismos de rolagem infinita também estão sob investigação.",
        content: [
          "A Comissão Europeia aumentou a fiscalização sobre designs aditivos que prendem a atenção de crianças e jovens.",
          "O TikTok assumiu compromisso vinculativo de retirar o 'TikTok Lite Rewards' de todos os países da União Europeia após alertas sobre riscos de dependência dopaminérgica.",
          "Relatórios preliminares da UE apontam que a rolagem infinita e a reprodução automática violam as normas de proteção ao consumidor.",
          "As empresas que descumprirem as regras enfrentam multas de até 6% do faturamento global."
        ],
        readTime: "5 min",
        tags: ["União Europeia", "TikTok", "DSA", "Rolagem infinita", "Regulação", "Serviços digitais"]
      },
      it: {
        slug: "ue-dsa-tiktok-indagine-design-dipendenza-lite-rewards",
        title: "Unione Europea contro TikTok: ritirato definitivamente il programma a premi di TikTok Lite",
        summary: "In conformità con il Digital Services Act (DSA), la Commissione Europea ha ottenuto il ritiro permanente del sistema a punti di TikTok Lite in tutta l'UE. Nel mirino anche lo scorrimento infinito.",
        content: [
          "La Commissione Europea prosegue l'azione di vigilanza contro i meccanismi ingannevoli e assuefacenti delle piattaforme online.",
          "TikTok si è formalmente impegnata a ritirare in via definitiva nell'UE il sistema 'TikTok Lite Rewards', che premiava gli utenti per la visione continua di video.",
          "Le autorità europee hanno evidenziato come autoplay e scrolling infinito ostacolino l'autocontrollo degli utenti.",
          "Le sanzioni previste dal DSA per i trasgressori possono raggiungere il 6% del fatturato mondiale."
        ],
        readTime: "5 min",
        tags: ["Unione Europea", "TikTok", "DSA", "Scrolling infinito", "Regolamentazione", "Servizi digitali"]
      },
      ar: {
        slug: "eu-dsa-tiktok-investigation-addictive-design-lite-rewards",
        title: "الاتحاد الأوروبي يعاقب تيك توك: إلغاء مكافآت 'تيك توك لايت' الإدمانية بموجب قانون الخدمات الرقمية",
        summary: "بموجب قانون الخدمات الرقمية (DSA)، فرضت المفوضية الأوروبية سحب نظام المكافآت المسبب للإدمان من تيك توك لايت نهائياً في الاتحاد الأوروبي، وتواصل التحقيق في التمرير اللانهائي.",
        content: [
          "كثفت المفوضية الأوروبية إجراءاتها ضد آليات الإدمان السلوكي في التطبيقات الرقمية لحماية الصحة النفسية للمستخدمين.",
          "التزمت تيك توك قانونياً بسحب برنامج المكافآت الذي كان يمنح نقاطاً مقابل مواصلة مشاهدة مقاطع الفيديو في جميع دول الاتحاد الأوروبي.",
          "أكد تقرير المفوضية أن التمرير اللانهائي والتشغيل التلقائي يسلوبان المستخدمين القدرة على التحكم الذاتي في وقت الشاشة.",
          "تواجه الشركات المخالفة غرامات تصل إلى 6% من إجمالي الإيرادات العالمية السنوية."
        ],
        readTime: "5 دقائق",
        tags: ["الاتحاد الأوروبي", "تيك توك", "DSA", "التمرير اللانهائي", "تنظيم رقمي", "الخدمات الرقمية"]
      },
      id: {
        slug: "uni-eropa-dsa-tiktok-penyelidikan-desain-adiktif-lite-rewards",
        title: "Uni Eropa Tindak TikTok: Program Hadiah Adiktif TikTok Lite Resmi Ditarik Permanen",
        summary: "Berdasarkan Digital Services Act (DSA), Komisi Eropa memberlakukan penarikan permanen skema hadiah adiktif TikTok Lite di seluruh UE. Mekanisme infinite scroll kini masuk dalam penyelidikan lanjutan.",
        content: [
          "Komisi Eropa memperketat pengawasan terhadap manipulasi perilaku pada aplikasi teknologi besar demi melindungi kesehatan mental generasi muda.",
          "TikTok menyetujui komitmen mengikat secara hukum untuk menghentikan program 'TikTok Lite Rewards' di seluruh Uni Eropa.",
          "Regulator Uni Eropa menegaskan bahwa fitur infinite scroll dan pemutaran otomatis melemahkan kontrol diri pengguna.",
          "Platform yang melanggar ketentuan DSA terancam denda hingga 6% dari pendapatan global."
        ],
        readTime: "5 mnt",
        tags: ["Uni Eropa", "TikTok", "DSA", "Infinite Scroll", "Regulasi", "Layanan Digital"]
      },
      fil: {
        slug: "eu-dsa-tiktok-imbestigasyon-nakakahumaling-na-disenyo-lite-rewards",
        title: "European Union Ipinagbawal ang TikTok Lite Rewards Dahil sa Nakakahumaling na Disenyo",
        summary: "Sa ilalim ng Digital Services Act (DSA), ipinatupad ng European Commission ang permanenteng pag-alis sa rewards system ng TikTok Lite sa buong EU dahil sa panganib ng adiksyon sa screen.",
        content: [
          "Pinaigting ng European Commission ang pagpapatupad ng mga patakaran laban sa manipulative design ng mga social media app.",
          "Pumayag ang TikTok na tuluyang tanggalin ang programang nagbibigay ng pabuya kapalit ng tuluy-tuloy na panonood ng video.",
          "Ayon sa mga opisyal ng EU, ang infinite scroll at autoplay ay sumisira sa kakayahan ng mga kabataan na magkontrol ng kanilang oras.",
          "Maaaring magmulta ng hanggang 6% ng global turnover ang mga kompanyang lumalabag sa DSA."
        ],
        readTime: "5 min",
        tags: ["European Union", "TikTok", "DSA", "Infinite Scroll", "Regulasyon", "Digital Services Act"]
      },
      th: {
        slug: "eu-dsa-tiktok-addictive-design-investigation-lite-rewards",
        title: "สหภาพยุโรปสั่งแบนระบบสะสมแต้ม TikTok Lite ถาวร ชี้เป็นดีไซน์สร้างการเสพติดหน้าจอ",
        summary: "ภายใต้กฎหมาย Digital Services Act (DSA) คณะกรรมาธิการยุโรปได้สั่งให้ TikTok ถอนระบบแจกรางวัลของ TikTok Lite ออกจากสหภาพยุโรปอย่างถาวร พร้อมตรวจสอบระบบ Infinite Scroll และ Autoplay",
        content: [
          "คณะกรรมาธิการยุโรปยกระดับการตรวจสอบกลไกการออกแบบแอปพลิเคชันที่สร้างการเสพติดพฤติกรรมในเยาวชน",
          "TikTok ได้ยอมรับข้อผูกพันทางกฎหมายในการยกเลิกโปรแกรม 'Task and Reward' ในทุกประเทศสมาชิกสหภาพยุโรปอย่างถาวร",
          "หน่วยงานกำกับดูแลของสหภาพยุโรปชี้ว่า การเลื่อนฟีดแบบไร้ที่สิ้นสุดและการเล่นวิดีโออัตโนมัติบั่นทอนการควบคุมตนเองของผู้ใช้งาน",
          "แพลตฟอร์มเทคโนโลยีที่ฝ่าฝืนอาจถูกปรับสูงสุดถึง 6% ของรายได้รวมทั่วโลก"
        ],
        readTime: "5 นาที",
        tags: ["สหภาพยุโรป", "TikTok", "DSA", "Infinite Scroll", "การกำกับดูแล", "Digital Services Act"]
      }
    }
  },

  // --- HABER 4 ---
  {
    id: "4",
    date: "2026-08-25",
    source: "Reuters & ABC News Australia",
    sourceUrl: "https://www.reuters.com",
    featured: false,
    catKey: "gov",
    data: {
      tr: {
        slug: "avustralya-16-yas-alti-sosyal-medya-yasagi",
        title: "Avustralya'dan Tarihi Karar: 16 Yaş Altına Sosyal Medya Tamamen Yasaklanıyor",
        summary: "Avustralya Federal Parlamentosu, 16 yaşından küçük çocukların TikTok, Instagram, X ve Snapchat gibi platformlara erişimini engelleyen dönüm noktası niteliğindeki yasa tasarısını kabul etti. İhlal eden teknoloji devlerine 50 milyon dolara varan ağır para cezaları öngörülüyor.",
        content: [
          "Avustralya, çocukların ve gençlerin ruh sağlığını korumak amacıyla dünya çapında emsal teşkil edecek bir karara imza attı. Federal hükümet tarafından sunulan yasa tasarısı, 16 yaşın altındaki bireylerin sosyal medya hesabı açmasını ve mevcut hesaplarını kullanmasını yasaklıyor.",
          "Yasa; TikTok, Instagram, Facebook, Snapchat, X (eski Twitter) ve Reddit gibi büyük platformları doğrudan kapsıyor. Platformların, kullanıcıların yaşını doğrulamak için 'makul adımları' atması zorunlu kılınırken, yaş doğrulamasını ihlal eden teknoloji şirketlerine 50 milyon Avustralya dolarına varan yaptırımlar uygulanacak.",
          "Avustralya Başbakanı yaptığı açıklamada şunları kaydetti: 'Sosyal medya çocuklarımıza zarar veriyor ve artık buna bir sınır koyma zamanı geldi. Ebeveynlerin çocuklarını dijital tuzaklardan korumak için tek başlarına verdikleri bu orantısız savaşı sonlandırıyoruz. Devlet olarak sorumluluk alıyoruz.'",
          "Uzmanlar, yasanın küresel ölçekte bir domino etkisi yaratacağını ve İngiltere, Norveç, İtalya gibi ülkelerin de benzer yaş sınırlandırmalarını yürürlüğe koymak için yasa hazırlıklarını hızlandırdığını belirtiyor."
        ],
        readTime: "4 dk",
        tags: ["Avustralya", "Yasa", "Sosyal Medya Yasağı", "16 Yaş Sınırı", "TikTok", "Instagram"]
      },
      en: {
        slug: "australia-under-16-social-media-ban-legislation",
        title: "Australia Passes Landmark Law: Complete Social Media Ban for Under-16s",
        summary: "The Australian Federal Parliament has approved historic legislation prohibiting children under 16 from accessing platforms like TikTok, Instagram, X, and Snapchat, imposing hefty fines of up to $50 million on tech giants that fail to enforce age verification.",
        content: [
          "Australia has made a precedent-setting decision to protect children and adolescents from the mental health harms of excessive screen time and algorithmic addiction. The federal bill prohibits individuals under the age of 16 from holding social media accounts.",
          "The law directly encompasses platforms including TikTok, Instagram, Facebook, Snapchat, X, and Reddit. Tech platforms must implement robust age verification mechanisms or face fines of up to 50 million Australian dollars.",
          "The Australian Prime Minister stated: 'Social media is doing harm to our kids and I'm calling time on it. We are stepping in to support parents in this unbalanced battle against predatory tech design.'",
          "Experts project this legislation will trigger a global ripple effect, prompting nations like the UK, Norway, and Italy to fast-track similar statutory age curbs."
        ],
        readTime: "4 min",
        tags: ["Australia", "Legislation", "Social Media Ban", "Under-16", "Youth Safety", "Policy"]
      },
      es: {
        slug: "australia-ley-prohibicion-redes-sociales-menores-16",
        title: "Australia aprueba una ley histórica: prohibición total de redes sociales para menores de 16 años",
        summary: "El Parlamento australiano aprobó una legislación histórica que prohíbe el acceso a redes sociales como TikTok, Instagram y Snapchat a menores de 16 años, con multas de hasta 50 millones de dólares para las tecnológicas que incumplan.",
        content: [
          "Australia sentó un precedente internacional para proteger la salud mental juvenil frente a la adicción algorítmica y el tiempo excesivo de pantalla.",
          "La normativa abarca TikTok, Instagram, Facebook, Snapchat, X y Reddit, exigiendo sistemas eficaces de verificación de edad bajo sanción de hasta 50 millones de dólares australianos.",
          "El Primer Ministro australiano afirmó que es hora de poner límites al daño que las redes causan en la infancia.",
          "Especialistas prevén que esta medida acelerará leyes similares en Europa y otros continentes."
        ],
        readTime: "4 min",
        tags: ["Australia", "Legislación", "Prohibición redes sociales", "Menores de 16", "Seguridad juvenil", "Normativa"]
      },
      fr: {
        slug: "australie-loi-interdiction-reseaux-sociaux-moins-16-ans",
        title: "Australie : vote historique d'une loi interdisant les réseaux sociaux aux moins de 16 ans",
        summary: "Le Parlement australien a voté une loi historique interdisant l'accès aux réseaux sociaux aux moins de 16 ans, assortie d'amendes pouvant atteindre 50 millions de dollars pour les plateformes défaillantes.",
        content: [
          "L'Australie a adopté une décision pionnière pour préserver la santé mentale des mineurs face aux algorithmes addictifs.",
          "La loi vise directement TikTok, Instagram, Snapchat, X et Reddit, imposant des contrôles d'âge stricts sous peine de sanctions financières massives.",
          "Le Premier ministre australien a déclaré que l'État prenait ses responsabilités pour soutenir les familles face aux dérives du numérique.",
          "Cette initiative suscite un vif intérêt international et pourrait inspirer d'autres démocraties occidentales."
        ],
        readTime: "4 min",
        tags: ["Australie", "Législation", "Interdiction réseaux sociaux", "Moins de 16 ans", "Jeunesse", "Politique"]
      },
      de: {
        slug: "australien-gesetz-social-media-verbot-unter-16",
        title: "Australien beschließt historisches Gesetz: Social-Media-Verbot für unter 16-Jährige",
        summary: "Das australische Parlament hat ein richtungsweisendes Gesetz verabschiedet, das Kindern unter 16 Jahren die Nutzung von TikTok, Instagram und Co. untersagt. Bei Verstößen drohen Tech-Konzernen Strafen von bis zu 50 Millionen Dollar.",
        content: [
          "Australien setzt mit einem weltweiten Präzedenzfall ein deutliches Zeichen zum Schutz der mentalen Gesundheit von Jugendlichen.",
          "Plattformen wie TikTok, Instagram, Facebook und Snapchat müssen wirksame Altersverifikationen einführen oder riskieren Bußgelder bis zu 50 Millionen AUD.",
          "Der Premierminister betonte, dass Eltern im Kampf gegen suchtfördernde Algorithmen staatliche Unterstützung brauchen.",
          "Experten erwarten, dass europäische Länder wie Großbritannien und Norwegen zeitnah ähnliche Altersgrenzen prüfen werden."
        ],
        readTime: "4 Min.",
        tags: ["Australien", "Gesetzgebung", "Social-Media-Verbot", "Jugendschutz", "Altersgrenze", "Politik"]
      },
      pt: {
        slug: "australia-lei-proibicao-redes-sociais-menores-16",
        title: "Austrália aprova lei histórica: proibição de redes sociais para menores de 16 anos",
        summary: "O Parlamento Federal da Austrália aprovou lei que impede menores de 16 anos de usar TikTok, Instagram, Snapchat e X, prevendo multas de até 50 milhões de dólares para empresas que não verificarem a idade.",
        content: [
          "A Austrália aprovou uma das medidas mais rigorosas do mundo para combater os malefícios do excesso de tempo de tela em adolescentes.",
          "A legislação obriga as grandes plataformas a implementarem checagem de idade confiável, sob pena de pesadas sanções financeiras.",
          "O Primeiro-Ministro declarou que o Estado está assumindo a responsabilidade de proteger as crianças das armadilhas algorítmicas.",
          "Analistas preveem que a lei australiana acelerará projetos semelhantes em diversos outros países."
        ],
        readTime: "4 min",
        tags: ["Austrália", "Legislação", "Proibição redes sociais", "Menores de 16", "Proteção infantil", "Política"]
      },
      it: {
        slug: "australia-legge-divieto-social-media-under-16",
        title: "Australia: approvata la storica legge sul divieto dei social media per gli under 16",
        summary: "Il Parlamento australiano ha approvato una legge storica che vieta l'accesso ai social media ai minori di 16 anni, introducendo sanzioni fino a 50 milioni di dollari per le piattaforme che non verificano l'età.",
        content: [
          "L'Australia compie un passo pionieristico a livello globale per contrastare i danni dell'iperconnessione sullo sviluppo psicologico dei ragazzi.",
          "Le piattaforme come TikTok, Instagram e Snapchat dovranno bloccare gli account dei minori di 16 anni con rigorosi controlli di verifica anagrafica.",
          "Il Primo Ministro ha ribadito l'impegno del governo a sostenere i genitori nella tutela del tempo e della mente dei propri figli.",
          "La misura è considerata un modello di riferimento per le future normative europee."
        ],
        readTime: "4 min",
        tags: ["Australia", "Legislazione", "Divieto social media", "Under 16", "Tutela minori", "Politica"]
      },
      ar: {
        slug: "australia-under-16-social-media-ban-legislation",
        title: "أستراليا تقر قانوناً تاريخياً: حظر وسائل التواصل الاجتماعي تماماً لمن هم دون سن 16",
        summary: "وافق البرلمان الأسترالي على تشريع تاريخي يمنع الأطفال دون سن 16 من استخدام منصات مثل تيك توك وإنستغرام، مع فرض غرامات تصل إلى 50 مليون دولار على الشركات المخالفة.",
        content: [
          "اتخذت أستراليا خطوة تاريخية تعد الأولى من نوعها عالمياً لحماية الصحة النفسية للأطفال من أضرار الشاشات وإدمان الخوارزميات.",
          "يشمل القانون منصات تيك توك وإنستغرام وفيسبوك وسناب شات وX، ويفرض عليها اتخاذ إجراءات صارمة للتحقق من العمر تحت طائلة غرامات مالية ضخمة.",
          "صرح رئيس الوزراء الأسترالي بأن وسائل التواصل تضر بالأطفال وقد حان الوقت لفرض حدود واضحة.",
          "يتوقع الخبراء أن يؤدي هذا القرار إلى تبني دول أخرى مثل بريطانيا والنرويج لقوانين مماثلة."
        ],
        readTime: "4 دقائق",
        tags: ["أستراليا", "قانون", "حظر التواصل الاجتماعي", "دون سن 16", "حماية الأطفال", "تشريع"]
      },
      id: {
        slug: "australia-undang-undang-larangan-media-sosial-di-bawah-16",
        title: "Australia Sahkan Undang-Undang Bersejarah: Larangan Total Media Sosial untuk Usia di Bawah 16 Tahun",
        summary: "Parlemen Australia menyetujui undang-undang yang melarang anak di bawah 16 tahun mengakses TikTok, Instagram, dan Snapchat, dengan denda hingga 50 juta dolar bagi platform yang gagal memverifikasi usia.",
        content: [
          "Australia membuat keputusan terobosan untuk melindungi kesehatan mental anak dan remaja dari dampak buruk kecanduan algoritma.",
          "Undang-undang ini mewajibkan platform besar seperti TikTok dan Instagram memverifikasi usia pengguna dengan ancaman denda hingga 50 juta AUD.",
          "Perdana Menteri Australia menyatakan bahwa pemerintah hadir untuk mendukung orang tua menghadapi tekanan teknologi digital.",
          "Banyak negara lain kini mempelajari langkah Australia untuk menerapkan batas usia serupa."
        ],
        readTime: "4 mnt",
        tags: ["Australia", "Undang-Undang", "Larangan Media Sosial", "Di Bawah 16 Tahun", "Keamanan Remaja", "Kebijakan"]
      },
      fil: {
        slug: "australia-batas-pagbabawal-social-media-wala-pang-16",
        title: "Ipinasa ng Australia ang Batas na Nagbabawal sa Social Media para sa Wala Pang 16 Anyos",
        summary: "Inaprubahan ng Parliyamento ng Australia ang batas na nagbabawal sa mga bata na wala pang 16 anyos sa TikTok, Instagram, at Snapchat, na may multang hanggang $50 milyon para sa mga lalabag.",
        content: [
          "Nagtala ang Australia ng pandaigdigang pamantayan sa pagprotekta sa mental health ng kabataan laban sa labis na screen time.",
          "Sakop ng batas ang TikTok, Instagram, Snapchat, X, at Reddit, at inaatasan ang mga ito na magpatupad ng age verification.",
          "Sinabi ng Punong Ministro ng Australia na kailangan nang tuldukan ang labis na impluwensya ng social media sa mga bata.",
          "Inaasahang susundan ng iba pang mga bansa ang nasabing hakbang."
        ],
        readTime: "4 min",
        tags: ["Australia", "Batas", "Bawal ang Social Media", "Wala pang 16", "Proteksyon sa Kabataan", "Polisiya"]
      },
      th: {
        slug: "australia-under-16-social-media-ban-legislation",
        title: "ออสเตรเลียผ่านกฎหมายประวัติศาสตร์ สั่งแบนการใช้โซเชียลมีเดียในเด็กอายุต่ำกว่า 16 ปี",
        summary: "รัฐสภาออสเตรเลียผ่านร่างกฎหมายครั้งประวัติศาสตร์ ห้ามเด็กอายุต่ำกว่า 16 ปีเข้าถึงแพลตฟอร์มอย่าง TikTok, Instagram, X และ Snapchat พร้อมกำหนดโทษปรับบริษัทยักษ์ใหญ่ด้านเทคโนโลยีสูงสุด 50 ล้านดอลลาร์",
        content: [
          "ออสเตรเลียสร้างบรรทัดฐานใหม่ระดับโลกในการปกป้องสุขภาพจิตของเด็กและเยาวชนจากผลกระทบของการเสพติดอัลกอริทึมและหน้าจอ",
          "กฎหมายครอบคลุมแพลตฟอร์มหลัก เช่น TikTok, Instagram, Facebook และ Snapchat โดยกำหนดให้ต้องมีระบบยืนยันอายุที่รัดกุม",
          "นายกรัฐมนตรีออสเตรเลียระบุว่า ถึงเวลาแล้วที่รัฐต้องยื่นมือเข้ามาช่วยเหลือผู้ปกครองในการปกป้องลูกหลานจากเทคโนโลยีที่ไร้การควบคุม",
          "ผู้เชี่ยวชาญคาดการณ์ว่ากฎหมายนี้จะจุดประกายให้หลายประเทศในยุโรปเร่งผลักดันมาตรการจำกัดอายุในลักษณะเดียวกัน"
        ],
        readTime: "4 นาที",
        tags: ["ออสเตรเลีย", "กฎหมาย", "แบนโซเชียลมีเดีย", "ต่ำกว่า 16 ปี", "ความปลอดภัยของเยาวชน", "นโยบาย"]
      }
    }
  },

  // --- HABER 5 ---
  {
    id: "5",
    date: "2026-08-21",
    source: "The New York Times & US Surgeon General Advisory",
    sourceUrl: "https://www.nytimes.com",
    featured: false,
    catKey: "science",
    data: {
      tr: {
        slug: "abd-genel-cerrahi-sosyal-medya-uyari-etiketi-cagrisi",
        title: "ABD Genel Cerrahı'ndan Tarihi Çağrı: Sosyal Medyaya 'Sigara Benzeri' Sağlık Uyarı Etiketi Gelmeli",
        summary: "ABD Genel Cerrahı (Surgeon General) Dr. Vivek Murthy, sosyal medya platformlarının gençlerin ruh sağlığı üzerindeki yıkıcı etkilerini tütün ürünlerine benzeterek, tüm platformlara zorunlu sağlık uyarı etiketi konulması için Kongre'ye acil çağrıda bulundu.",
        content: [
          "Amerika Birleşik Devletleri Genel Cerrahı Dr. Vivek Murthy, The New York Times'ta yayımlanan tarihi makalesinde, sosyal medyanın ergenlerde anksiyete, depresyon ve beden algısı bozukluğu üzerindeki kanıtlanmış zararlarına dikkat çekti.",
          "Murthy, 'Sosyal medya, gençlerin ruh sağlığı için acil bir krizdir. Tıpkı tütün ve alkol ürünlerinde olduğu gibi, sosyal medya uygulamalarını açan her kullanıcının karşısına bu platformların ruh sağlığına zarar verebileceğini belirten resmi bir cerrahi uyarı etiketi çıkmalıdır' ifadelerini kullandı.",
          "Makalede paylaşılan verilere göre, günde 3 saatten fazla sosyal medyada vakit geçiren ergenlerin depresyon ve anksiyete semptomları yaşama riski iki katına çıkıyor. Ancak günümüzde ABD'li gençlerin günlük ortalama sosyal medya kullanım süresi 4,8 saati bulmuş durumda.",
          "Genel Cerrah ayrıca okulların tamamen telefonsuz alanlar haline getirilmesini ve ebeveynlerin akşam yemekleri ile uyku saatlerinde evde ekran kullanımına kesin sınırlar koymasını tavsiye etti."
        ],
        readTime: "5 dk",
        tags: ["ABD", "Surgeon General", "Ruh Sağlığı", "Uyarı Etiketi", "Anksiyete", "Depresyon"]
      },
      en: {
        slug: "us-surgeon-general-warning-label-social-media",
        title: "US Surgeon General Calls for Tobacco-Style Warning Labels on Social Media Platforms",
        summary: "US Surgeon General Dr. Vivek Murthy urged Congress to mandate tobacco-style warning labels on social media apps, citing empirical evidence linking extensive screen use to adolescent depression, anxiety, and sleep fragmentation.",
        content: [
          "In a landmark op-ed in The New York Times, US Surgeon General Dr. Vivek Murthy called on lawmakers to establish mandatory health warning labels across all social media platforms.",
          "Comparing algorithmic addiction to tobacco and public road hazards, Dr. Murthy stressed that adolescents who spend over three hours daily on social media face double the risk of experiencing clinical depression and severe anxiety symptoms.",
          "Current data indicates American adolescents spend an average of 4.8 hours per day across entertainment apps, crowding out restorative sleep, physical movement, and genuine human connection.",
          "The advisory recommended nationwide phone-free schools, alongside firm parental boundaries restricting screens during dinner and before bedtime."
        ],
        readTime: "5 min",
        tags: ["USA", "Surgeon General", "Mental Health", "Warning Labels", "Screen Time", "Public Health"]
      },
      es: {
        slug: "cirujano-general-eeuu-etiqueta-advertencia-redes-sociales",
        title: "El Cirujano General de EE. UU. pide etiquetas de advertencia sanitaria en redes sociales",
        summary: "El Dr. Vivek Murthy instó al Congreso a exigir advertencias sanitarias en las redes sociales, similares a las del tabaco, ante la evidencia de daños en la salud mental de los jóvenes.",
        content: [
          "En un artículo histórico en The New York Times, el Cirujano General de EE. UU., Dr. Vivek Murthy, alertó sobre la crisis de salud mental que enfrentan los adolescentes debido a las redes sociales.",
          "Murthy propuso que cada vez que se abra una aplicación social, aparezca una advertencia formal sobre el riesgo de ansiedad y depresión.",
          "Los datos muestran que más de 3 horas diarias de uso duplican el riesgo de problemas psicológicos en menores.",
          "También recomendó convertir las escuelas en espacios sin teléfonos y restringir las pantallas en las horas de sueño."
        ],
        readTime: "5 min",
        tags: ["EEUU", "Cirujano General", "Salud mental", "Advertencias", "Tiempo de pantalla", "Salud pública"]
      },
      fr: {
        slug: "chirurgien-general-usa-avertissement-sanitaire-reseaux-sociaux",
        title: "États-Unis : le médecin général en chef réclame des avertissements sanitaires sur les réseaux sociaux",
        summary: "Le Dr Vivek Murthy appelle le Congrès américain à imposer des messages d'avertissement sanitaire sur les applications sociales, à l'instar des paquets de cigarettes, pour protéger la santé mentale des jeunes.",
        content: [
          "Dans une tribune retentissante parue dans The New York Times, le Dr Vivek Murthy a qualifié l'impact des réseaux sociaux sur les adolescents d'urgence sanitaire majeure.",
          "Il préconise l'affichage systématique d'avertissements sanitaires rappelant les risques avérés d'anxiété et de dépression liés à une utilisation excessive.",
          "Les études révèlent qu'au-delà de 3 heures par jour sur ces plateformes, le risque de détresse psychologique double chez les jeunes.",
          "Le rapport préconise également des écoles sans smartphones et des soirées sans écrans à la maison."
        ],
        readTime: "5 min",
        tags: ["États-Unis", "Santé mentale", "Avertissement sanitaire", "Temps d'écran", "Adolescents", "Santé publique"]
      },
      de: {
        slug: "us-gesundheitsbehoerde-warnhinweise-soziale-medien",
        title: "US-Gesundheitsbeauftragter fordert Tabak-Warnhinweise für Social-Media-Plattformen",
        summary: "Dr. Vivek Murthy fordert den US-Kongress auf, verpflichtende Warnhinweise auf Social-Media-Apps einzuführen, ähnlich wie bei Tabakwaren, um auf Gefahren für die Psyche von Jugendlichen hinzuweisen.",
        content: [
          "In einem vielbeachteten Beitrag in der New York Times schlug der oberste US-Gesundheitsarzt Dr. Vivek Murthy Alarm bezüglich der mentalen Belastung von Teenagern durch digitale Plattformen.",
          "Er forderte offizielle Warnetiketten, die beim Öffnen von Social-Media-Apps über Risiken wie Depressionen und Schlafstörungen aufklären.",
          "Studien zeigen, dass mehr als 3 Stunden tägliche Bildschirmzeit das Risiko für Angstzustände verdoppelt.",
          "Zusätzlich empfahl er smartphonefreie Schulen und bildschirmfreie Schlafzimmer."
        ],
        readTime: "5 Min.",
        tags: ["USA", "Gesundheit", "Warnhinweise", "Mentale Gesundheit", "Bildschirmzeit", "Prävention"]
      },
      pt: {
        slug: "cirurgiao-geral-eua-rotulo-aviso-redes-sociais",
        title: "Cirurgião-Geral dos EUA defende rótulos de advertência de saúde nas redes sociais",
        summary: "O Dr. Vivek Murthy pediu ao Congresso americano a obrigatoriedade de alertas de saúde nas redes sociais semelhantes aos do cigarro, apontando os riscos do uso excessivo de telas para os adolescentes.",
        content: [
          "Em artigo no The New York Times, o Cirujano-Geral dos EUA alertou para a crise urgente de saúde mental entre adolescentes provocada pelo uso descontrolado de mídias digitais.",
          "Ele defendeu a inclusão de avisos formais sobre os riscos de ansiedade e depressão em todas as plataformas sociais.",
          "Estudos apontam que jovens com mais de 3 horas diárias de uso têm o dobro de probabilidade de apresentar sintomas depressivos.",
          "A recomendação reforça a necessidade de escolas livres de celulares e noites sem telas."
        ],
        readTime: "5 min",
        tags: ["EUA", "Saúde mental", "Avisos de saúde", "Tempo de tela", "Adolescência", "Saúde pública"]
      },
      it: {
        slug: "chirurgo-generale-usa-etichetta-avviso-social-media",
        title: "USA: il chirurgo generale chiede avvertenze sanitarie obbligatorie sui social media",
        summary: "Il dottor Vivek Murthy esorta il Congresso a introdurre avvisi sui rischi per la salute mentale simili a quelli del tabacco su tutte le app social.",
        content: [
          "Sul New York Times, il massimo responsabile della salute pubblica statunitense ha denunciato i pericoli dell'iperconnessione sullo sviluppo psicologico degli adolescenti.",
          "Murthy propone l'introduzione di avvertimenti espliciti all'apertura delle applicazioni riguardo ai rischi di depressione e ansia.",
          "Superare le 3 ore quotidiane di utilizzo raddoppia il rischio di disturbi dell'umore nei giovani.",
          "Viene raccomandata la totale esclusione degli smartphone dalle aule scolastiche e durante le ore notturne."
        ],
        readTime: "5 min",
        tags: ["USA", "Salute mentale", "Avvertenze sanitarie", "Tempo di schermo", "Prevenzione", "Salute pubblica"]
      },
      ar: {
        slug: "us-surgeon-general-warning-label-social-media",
        title: "الجراح العام الأمريكي يدعو لوضع تحذيرات صحية على وسائل التواصل مثل علب السجائر",
        summary: "دعا الدكتور فيفيك مورتي الكونغرس الأمريكي لفرض تحذيرات صحية إلزامية على تطبيقات التواصل الاجتماعي، محذراً من تأثيرها السلبي على الصحة النفسية للمراهقين.",
        content: [
          "في مقال لافت بصحيفة نيويورك تايمز، شدد الجراح العام الأمريكي على أن وسائل التواصل تشكل أزمة طارئة للصحة النفسية للشباب.",
          "اقترح مورتي وضع ملصق تحذيري رسمي يوضح مخاطر الاكتئاب والقلق الناتجة عن الإفراط في استخدام المنصات.",
          "تظهر الدراسات أن قضاء أكثر من 3 ساعات يومياً على وسائل التواصل يضاعف مخاطر الاضطرابات النفسية لدى المراهقين.",
          "أوصى التقرير بجعل المدارس بيئات خالية تماماً من الهواتف ووضع قيود حازمة على الشاشات في أوقات النوم."
        ],
        readTime: "5 دقائق",
        tags: ["أمريكا", "الجراح العام", "الصحة النفسية", "ملصق تحذيري", "وقت الشاشة", "صحة عامة"]
      },
      id: {
        slug: "ahli-bedah-umum-as-label-peringatan-media-sosial",
        title: "Ahli Bedah Umum AS Serukan Label Peringatan Bahaya pada Media Sosial Mirip Produk Tembakau",
        summary: "Dr. Vivek Murthy mendesak Kongres AS untuk mewajibkan label peringatan kesehatan pada aplikasi media sosial guna melindungi remaja dari risiko depresi dan kecemasan akibat layar.",
        content: [
          "Dalam tulisan di The New York Times, Ahli Bedah Umum AS menyoroti krisis kesehatan mental remaja akibat paparan media sosial.",
          "Ia mengusulkan adanya peringatan resmi tentang bahaya kecanduan dan gangguan kecemasan setiap kali aplikasi dibuka.",
          "Penggunaan lebih dari 3 jam sehari terbukti melipatgandakan risiko gejala depresi pada remaja.",
          "Direkomendasikan agar sekolah bebas dari ponsel dan keluarga menerapkan batasan ketat menjelang tidur."
        ],
        readTime: "5 mnt",
        tags: ["AS", "Kesehatan Mental", "Label Peringatan", "Waktu Layar", "Remaja", "Kesehatan Publik"]
      },
      fil: {
        slug: "us-surgeon-general-babala-kalusugan-social-media",
        title: "US Surgeon General Nanawagan ng Health Warning Labels sa Social Media",
        summary: "Hinimok ni Dr. Vivek Murthy ang Kongreso ng US na maglagay ng health warning labels sa social media apps, katulad ng sa sigarilyo, dahil sa epekto nito sa mental health ng kabataan.",
        content: [
          "Sa isang artikulo sa The New York Times, nagbabala ang US Surgeon General tungkol sa krisis sa kalusugan ng isip dulot ng social media.",
          "Iminungkahi niya ang sapilitang babala sa screen na nagpapaalala sa mga panganib ng depression at anxiety.",
          "Ayon sa datos, ang paggamit ng higit sa 3 oras bawat araw ay nagdodoble sa panganib ng mental health issues sa kabataan.",
          "Iminumungkahi rin ang phone-free schools at mga limitasyon sa paggamit ng screen sa gabi."
        ],
        readTime: "5 min",
        tags: ["USA", "Surgeon General", "Mental Health", "Warning Labels", "Screen Time", "Public Health"]
      },
      th: {
        slug: "us-surgeon-general-warning-label-social-media",
        title: "แพทย์ใหญ่สหรัฐฯ เสนอติดป้ายเตือนสุขภาพบนโซเชียลมีเดีย คล้ายฉลากบนซองบุหรี่",
        summary: "นพ. วิเวก เมอร์ธี เรียกร้องให้สภาคองเกรสออกกฎหมายบังคับติดป้ายเตือนอันตรายต่อสุขภาพจิตบนแอปโซเชียลมีเดีย หลังพบหลักฐานชัดเจนว่าการใช้หน้าจอมากเกินไปส่งผลให้เยาวชนซึมเศร้าและวิตกกังวล",
        content: [
          "ในบทความบน The New York Times แพทย์ใหญ่แห่งสหรัฐอเมริกาได้เน้นย้ำถึงวิกฤตสุขภาพจิตในกลุ่มวัยรุ่นจากการเสพติดแอปพลิเคชัน",
          "นพ. เมอร์ธี เสนอให้มีข้อความเตือนอย่างเป็นทางการก่อนเปิดใช้งานแอป เพื่อเตือนสติผู้ใช้ถึงความเสี่ยงต่อภาวะซึมเศร้า",
          "ข้อมูลชี้ว่า การใช้โซเชียลมีเดียเกินวันละ 3 ชั่วโมงเพิ่มความเสี่ยงต่อปัญหาสุขภาพจิตเป็นเท่าตัว",
          "พร้อมทั้งเสนอให้โรงเรียนเป็นพื้นที่ปลอดโทรศัพท์ และให้ครอบครัวกำหนดเวลาพักหน้าจอก่อนนอน"
        ],
        readTime: "5 นาที",
        tags: ["สหรัฐฯ", "แพทย์ใหญ่", "สุขภาพจิต", "ป้ายเตือนสุขภาพ", "เวลาหน้าจอ", "สาธารณสุข"]
      }
    }
  },

  // --- HABER 6 ---
  {
    id: "6",
    date: "2026-08-19",
    source: "South Korea Ministry of Gender Equality & Yonhap News",
    sourceUrl: "https://en.yna.co.kr",
    featured: false,
    catKey: "science",
    data: {
      tr: {
        slug: "guney-kore-ekran-ve-oyun-bagimliligi-kamplari",
        title: "Güney Kore'den Devlet Eliyle 'Dijital Detoks': Gençler İçin Akıllı Telefon ve İnternet Arınma Merkezleri",
        summary: "Güney Kore Cinsiyet Eşitliği ve Aile Bakanlığı, günde 6 saatten fazla ekran karşısında kalan ergenler için ülke genelinde ücretsiz yatılı 'Akıllı Telefon Detoks Kampları' işletiyor. Kamplarda telefonlar tamamen toplanırken sanat terapisi ve doğa aktiviteleri uygulanıyor.",
        content: [
          "Dünyanın en yüksek internet ve akıllı telefon penetrasyonuna sahip ülkelerinden biri olan Güney Kore, dijital bağımlılığı resmi bir halk sağlığı krizi olarak tanımlayarak dünyada benzersiz bir devlet modeli uyguluyor.",
          "Bakanlık verilerine göre, ülkedeki ortaokul ve lise öğrencilerinin yaklaşık %20'si akıllı telefonlarını ellerinden bırakamadıklarında şiddetli yoksunluk belirtileri ve öfke patlamaları yaşıyor.",
          "Hükümet tarafından fonlanan özel detoks kamplarında gençler 1 ila 4 hafta boyunca hiçbir ekrana ve telefona erişmeden konaklıyor. Bu süre zarfında gençlere zaman yönetimi, gerçek hayatta yüz yüze iletişim ve duygusal regülasyon becerileri kazandırılıyor.",
          "Kamp direktörleri, dijital detoksun ilk 3 gününde gençlerin yoğun kaygı yaşadığını, ancak birinci haftadan sonra uyku kalitelerinin düzeldiğini, dikkat sürelerinin uzadığını ve gerçek sosyal bağlar kurmaya başladıklarını belirtiyor."
        ],
        readTime: "5 dk",
        tags: ["Güney Kore", "Dijital Detoks", "Rehabilitasyon", "Akıllı Telefon Bağımlılığı", "Gençlik"]
      },
      en: {
        slug: "south-korea-state-funded-smartphone-detox-camps",
        title: "South Korea Expands State-Funded Youth Smartphone Detox Camps Amid Screen Crisis",
        summary: "South Korea's Ministry of Gender Equality and Family operates nationwide residential 'Smartphone Detox Camps' for adolescents spending over 6 hours daily on screens, offering screen-free cognitive rehabilitation and outdoor therapy.",
        content: [
          "Recognizing digital dependency as an urgent public health priority, South Korea has developed world-first government-funded residential treatment facilities for digital addiction.",
          "Government health assessments identified that nearly 20% of middle and high school students exhibit severe withdrawal symptoms and emotional dysregulation when separated from mobile devices.",
          "In these immersive 1 to 4-week camps, electronic devices are completely prohibited. Teenagers participate in mindfulness, physical sports, and behavioral therapy to recalibrate dopamine sensitivity.",
          "Clinicians report that after an initial 72-hour withdrawal hurdle, participants demonstrate marked improvements in sleep cycles, sustained attention spans, and genuine face-to-face peer communication."
        ],
        readTime: "5 min",
        tags: ["South Korea", "Digital Detox", "Rehabilitation", "Screen Addiction", "Youth", "Public Health"]
      },
      es: {
        slug: "corea-del-sur-campamentos-estatales-desintoxicacion-digital",
        title: "Corea del Sur amplía sus campamentos estatales de desintoxicación de smartphones para jóvenes",
        summary: "El gobierno surcoreano gestiona campamentos residenciales gratuitos para adolescentes que pasan más de 6 horas diarias frente a las pantallas, combinando terapia conductual y actividades al aire libre.",
        content: [
          "Corea del Sur trata la adicción digital como un problema prioritario de salud pública mediante centros estatales de rehabilitación.",
          "Los datos oficiales indican que casi el 20% de los estudiantes experimentan síntomas de abstinencia severos sin sus teléfonos.",
          "Durante estancias de 1 a 4 semanas sin pantallas, los jóvenes aprenden autorregulación emocional y habilidades sociales en el mundo real.",
          "Los terapeutas destacan que tras los primeros tres días, el sueño y la capacidad de concentración mejoran notablemente."
        ],
        readTime: "5 min",
        tags: ["Corea del Sur", "Desintoxicación digital", "Rehabilitación", "Adicción a pantallas", "Juventud", "Salud"]
      },
      fr: {
        slug: "coree-du-sud-camps-publics-sevrage-smartphones",
        title: "Corée du Sud : des camps publics de sevrage numérique pour soigner l'addiction aux smartphones",
        summary: "Le ministère sud-coréen de la Famille finance des séjours d'immersion sans écrans pour les jeunes passant plus de 6 heures par jour sur leur téléphone, axés sur la thérapie comportementale et la reconnexion au réel.",
        content: [
          "Pionnière dans la prise en charge de l'hyperconnexion, la Corée du Sud gère des centres de sevrage financés par l'État.",
          "Près de 20 % des adolescents du pays présenteraient des signes d'angoisse ou d'irritabilité en cas de privation d'écran.",
          "Durant ces séjours de 1 à 4 semaines, tout appareil connecté est banni, au profit d'activités physiques et d'ateliers de gestion du temps.",
          "Les spécialistes constatent un rétablissement rapide du sommeil et de la concentration dès la fin de la première semaine."
        ],
        readTime: "5 min",
        tags: ["Corée du Sud", "Sevrage numérique", "Reconquête de l'attention", "Santé publique", "Adolescence", "Thérapie"]
      },
      de: {
        slug: "suedkorea-staatliche-smartphone-detox-camps",
        title: "Südkorea baut staatliche Smartphone-Detox-Camps für Jugendliche aus",
        summary: "Südkoreas Ministerium für Familie betreibt kostenlose stationäre Entzugscamps für Jugendliche mit mehr als 6 Stunden täglicher Bildschirmzeit, um gesunde Verhaltensmuster wiederherzustellen.",
        content: [
          "Südkorea stuft übermäßige Smartphone-Nutzung als ernste gesundheitliche Herausforderung ein und bietet staatlich finanzierte Entzugsprogramme an.",
          "Rund 20 % der Schüler zeigen deutliche Entzugserscheinungen, wenn sie keinen Zugriff auf ihr Smartphone haben.",
          "In den mehrwöchigen Camps ohne jegliche Bildschirme erlernen Jugendliche Zeitmanagement und zwischenmenschliche Interaktion neu.",
          "Ärzte berichten von signifikanten Verbesserungen des Schlafs und der Aufmerksamkeitsspanne nach wenigen Tagen Abstinenz."
        ],
        readTime: "5 Min.",
        tags: ["Südkorea", "Digital Detox", "Entzugscamp", "Bildschirmsucht", "Jugend", "Gesundheit"]
      },
      pt: {
        slug: "coreia-do-sul-acampamentos-estatais-detox-digital",
        title: "Coreia do Sul expande acampamentos públicos de 'detox digital' para jovens",
        summary: "O Ministério da Família sul-coreano oferece centros de acolhimento gratuitos para jovens com mais de 6 horas diárias de tela, focando em reabilitação cognitiva sem dispositivos eletrônicos.",
        content: [
          "A Coreia do Sul criou um modelo pioneiro de tratamento governamental para a dependência extrema de smartphones.",
          "Estudos revelam que cerca de 20% dos estudantes secundaristas enfrentam crises de ansiedade quando privados do celular.",
          "Nos acampamentos de 1 a 4 semanas, os jovens ficam sem telas e realizam atividades esportivas e de terapia comportamental.",
          "Especialistas relatam recuperação visível do sono e aumento no foco após os primeiros dias de desintoxicação."
        ],
        readTime: "5 min",
        tags: ["Coreia do Sul", "Detox digital", "Reabilitação", "Vício em celulares", "Juventude", "Saúde pública"]
      },
      it: {
        slug: "corea-del-sud-campi-statali-disintossicazione-digitale",
        title: "Corea del Sud: ampliati i campi statali di disintossicazione da smartphone per i giovani",
        summary: "Il Ministero della Famiglia sudcoreano finanzia strutture residenziali per ragazzi con oltre 6 ore di utilizzo quotidiano dello schermo, con programmi di rieducazione all'attenzione senza tecnologia.",
        content: [
          "La Corea del Sud affronta la dipendenza digitale come emergenza sanitaria, offrendo percorsi riabilitativi interamente a carico dello Stato.",
          "Circa un quinto degli studenti mostra sintomi di astinenza e irritabilità in assenza di connessione.",
          "Nei campi residenziali di diverse settimane i dispositivi sono vietati e si lavora sul recupero delle relazioni reali e dell'equilibrio emotivo.",
          "I medici confermano benefici immediati sui ritmi circadiani e sulla lucidità mentale già dopo pochi giorni."
        ],
        readTime: "5 min",
        tags: ["Corea del Sud", "Digital Detox", "Riabilitazione", "Dipendenza da schermo", "Giovani", "Salute"]
      },
      ar: {
        slug: "south-korea-state-funded-smartphone-detox-camps",
        title: "كوريا الجنوبية تتوسع في مخيمات الديتوكس الرقمي الحكومية لعلاج إدمان الهواتف لدى الشباب",
        summary: "تدير وزارة الأسرة في كوريا الجنوبية مخيمات علاجية مجانية للمراهقين الذين يقضون أكثر من 6 ساعات يومياً أمام الشاشات لمساعدتهم على التخلص من الإدمان الرقمي.",
        content: [
          "تعتبر كوريا الجنوبية إدمان الهواتف قضية صحية عامة وتوفر مراكز حكومية متخصصة للتخلص من السموم الرقمية.",
          "تظهر الإحصاءات أن 20% من الطلاب يعانون من أعراض انسحاب وتوتر عند ابتعادهم عن أجهزتهم الذكية.",
          "يقضي المشاركون في المخيمات من أسبوع إلى 4 أسابيع دون أي شاشات لممارسة الرياضة وتعلم مهارات التواصل الواقعي.",
          "يؤكد المشرفون تحسن جودة النوم وزيادة القدرة على التركيز بشكل ملحوظ بعد الأسبوع الأول من العلاج."
        ],
        readTime: "5 دقائق",
        tags: ["كوريا الجنوبية", "ديتوكس رقمي", "إعادة تأهيل", "إدمان الهواتف", "الشباب", "صحة عامة"]
      },
      id: {
        slug: "korea-selatan-kamp-detoks-ponsel-didanai-negara",
        title: "Korea Selatan Perluas Kamp 'Detoks Digital' yang Didanai Negara untuk Remaja Pecandu Layar",
        summary: "Kementerian Kesetaraan Gender dan Keluarga Korea Selatan mengoperasikan kamp rehabilitasi tanpa layar bagi remaja dengan waktu layar lebih dari 6 jam sehari untuk memulihkan fokus dan interaksi sosial.",
        content: [
          "Korea Selatan menjadi pelopor penanganan kecanduan smartphone melalui fasilitas terapi rawat inap yang dibiayai penuh oleh pemerintah.",
          "Sekitar 20% pelajar di negara tersebut mengalami gejala penarikan diri dan kecemasan tinggi saat dijauhkan dari perangkat digital.",
          "Selama 1 hingga 4 minggu tanpa gawai, para remaja dilatih mengelola waktu dan membangun kembali relasi tatap muka.",
          "Pakar melaporkan pemulihan drastis pada pola tidur dan ketajaman fokus setelah masa adaptasi awal."
        ],
        readTime: "5 mnt",
        tags: ["Korea Selatan", "Detoks Digital", "Rehabilitasi", "Kecanduan Layar", "Remaja", "Kesehatan"]
      },
      fil: {
        slug: "south-korea-mga-kamp-detox-smartphone-pinondohan-ng-estado",
        title: "South Korea Pinalawak ang Smartphone Detox Camps para sa mga Kabataan",
        summary: "Nagpapatakbo ang South Korea ng mga libreng residential detox camp para sa mga kabataang gumugugol ng higit 6 na oras sa screen, upang tulungang maibalik ang normal na focus at tulog.",
        content: [
          "Kinikilala ng South Korea ang digital addiction bilang isang public health concern at nagpopondo ng mga pasilidad para sa rehabilitasyon.",
          "Halos 20% ng mga mag-aaral ang nakakaranas ng matinding withdrawal symptoms kapag nawalan ng cellphone.",
          "Sa loob ng 1 hanggang 4 na linggo nang walang anumang screen, sumasailalim ang mga kabataan sa outdoor activities at behavioral therapy.",
          "Ayon sa mga therapist, bumubuti ang tulog at atensyon ng mga kalahok pagkatapos ng ilang araw na walang gadget."
        ],
        readTime: "5 min",
        tags: ["South Korea", "Digital Detox", "Rehabilitasyon", "Screen Addiction", "Kabataan", "Kalusugan"]
      },
      th: {
        slug: "south-korea-state-funded-smartphone-detox-camps",
        title: "เกาหลีใต้ขยายค่าย 'ดีท็อกซ์ดิจิทัล' ที่รัฐสนับสนุน เพื่อบำบัดเยาวชนติดสมาร์ทโฟน",
        summary: "กระทรวงความเสมอภาคทางเพศและครอบครัวของเกาหลีใต้เปิดค่ายบำบัดแบบพักค้างสำหรับเยาวชนที่ใช้หน้าจอเกินวันละ 6 ชั่วโมง เพื่อฟื้นฟูสุขภาพจิตและฝึกทักษะการใช้ชีวิตแบบไร้หน้าจอ",
        content: [
          "เกาหลีใต้กำหนดให้การเสพติดหน้าจอเป็นวาระสาธารณสุขเร่งด่วน โดยจัดตั้งศูนย์บำบัดพฤติกรรมที่ได้รับการสนับสนุนงบประมาณจากรัฐบาล",
          "ผลสำรวจพบว่านักเรียนมัธยมเกือบ 20% มีอาการหงุดหงิดและวิตกกังวลรุนแรงเมื่อต้องอยู่ห่างจากสมาร์ทโฟน",
          "เยาวชนจะเข้าร่วมค่ายเป็นเวลา 1 ถึง 4 สัปดาห์โดยไม่มีการใช้อุปกรณ์อิเล็กทรอนิกส์ เน้นกิจกรรมกลางแจ้งและการปรับพฤติกรรม",
          "ผู้เชี่ยวชาญระบุว่า วงจรการนอนหลับและสมาธิของเด็กฟื้นตัวดีขึ้นอย่างเห็นได้ชัดหลังผ่านช่วงสัปดาห์แรก"
        ],
        readTime: "5 นาที",
        tags: ["เกาหลีใต้", "ดีท็อกซ์ดิจิทัล", "การบำบัด", "การเสพติดหน้าจอ", "เยาวชน", "สาธารณสุข"]
      }
    }
  },

  // --- HABER 7 ---
  {
    id: "7",
    date: "2026-08-18",
    source: "UNESCO Global Education Monitoring Report",
    sourceUrl: "https://www.unesco.org",
    featured: false,
    catKey: "school",
    data: {
      tr: {
        slug: "unesco-kuresel-egitim-raporu-okullarda-telefon-yasagi",
        title: "UNESCO Küresel Eğitim Raporu: Okullarda Akıllı Telefon Yasağı Akademik Başarıyı ve Odaklanmayı Artırıyor",
        summary: "UNESCO tarafından yayımlanan Küresel Eğitim İzleme Raporu, sınıflarda ve okullarda akıllı telefonların yasaklanmasının dikkat dağınıklığını azalttığını, siber zorbalığı düşürdüğünü ve öğrencilerin sınav başarılarını anlamlı derecede yükselttiğini ortaya koydu.",
        content: [
          "Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü (UNESCO), dünya genelindeki okul sistemlerini incelediği kapsamlı raporunda, kontrolsüz teknoloji ve ekran kullanımının öğrenme süreçlerine ciddi zararlar verdiğini vurguladı.",
          "Rapora göre, tek bir bildirim veya mesajın ardından bir öğrencinin tekrar ders konusuna tam odaklanabilmesi ortalama 20 dakika sürüyor. Telefonların sınıfta açık hatta sadece masanın üzerinde bulunması dahi bilişsel kapasiteyi ve çalışma belleğini olumsuz etkiliyor.",
          "UNESCO Raporu, her 4 ülkeden 1'inin okullarda akıllı telefon kullanımını tamamen yasakladığını veya kısıtladığını belirtiyor. Fransa, İtalya, Hollanda ve Finlandiya'nın ardından birçok Avrupa ülkesi ve Asya devleri de ulusal düzeyde yasaklama kararları alıyor.",
          "UNESCO Direktörü, 'Dijital teknolojiler öğrenmeyi destekleyebilir ancak asla yüz yüze insan etkileşiminin ve derin dikkatin yerini alamaz. Çocuklarımıza odaklanmayı yeniden öğretmek zorundayız' çağrısında bulundu."
        ],
        readTime: "4 dk",
        tags: ["UNESCO", "Okul Yasakları", "Eğitim", "Akademik Başarı", "Dikkat Dağınıklığı"]
      },
      en: {
        slug: "unesco-global-education-report-smartphone-bans-schools",
        title: "UNESCO Global Education Report Endorses Smartphone Bans to Restore Academic Focus",
        summary: "UNESCO's Global Education Monitoring Report highlights empirical evidence showing that banning smartphones in schools improves cognitive retention, reduces cyberbullying, and boosts test scores across diverse education systems.",
        content: [
          "UNESCO has issued a definitive global advisory urging education ministries to enact clear, binding boundaries on digital devices in classrooms.",
          "Research synthesized in the report reveals that it takes students up to 20 minutes to regain full cognitive momentum after a single digital interruption or notification buzz.",
          "Currently, one in four countries has enacted complete or partial smartphone bans in primary and secondary schools, including the Netherlands, France, Italy, and Finland.",
          "The Director of UNESCO emphasized: 'Technology should support learning, but can never substitute for sustained attention and human pedagogy.'"
        ],
        readTime: "4 min",
        tags: ["UNESCO", "School Bans", "Education", "Cognitive Focus", "Academic Success", "Global Policy"]
      },
      es: {
        slug: "unesco-informe-educacion-global-prohibicion-celulares-escuelas",
        title: "Informe Global de la UNESCO: la prohibición de celulares en escuelas eleva el rendimiento académico",
        summary: "El informe de la UNESCO demuestra que restringir los teléfonos inteligentes en las aulas disminuye la distracción, frena el ciberacoso y mejora significativamente los resultados escolares.",
        content: [
          "La UNESCO advirtió sobre el impacto perjudicial del uso descontrolado de pantallas en el aprendizaje y la concentración escolar.",
          "El informe revela que un alumno tarda hasta 20 minutos en recuperar el foco tras recibir una notificación en su teléfono.",
          "Uno de cada cuatro países ya prohíbe o restringe los dispositivos móviles en las escuelas primarias y secundarias.",
          "La organización recalca la necesidad de proteger el aula como un espacio de interacción humana y concentración profunda."
        ],
        readTime: "4 min",
        tags: ["UNESCO", "Prohibición escolar", "Educación", "Rendimiento académico", "Concentración", "Políticas"]
      },
      fr: {
        slug: "unesco-rapport-mondial-education-interdiction-smartphones-ecoles",
        title: "Rapport mondial de l'UNESCO : l'interdiction des smartphones à l'école améliore les résultats scolaires",
        summary: "L'UNESCO souligne dans son rapport mondial que l'éloignement des smartphones en classe réduit la dispersion cognitive et améliore sensiblement les capacités d'apprentissage des élèves.",
        content: [
          "L'UNESCO appelle les gouvernements à encadrer strictement l'usage des technologies en milieu scolaire pour préserver l'attention des élèves.",
          "Les données démontrent qu'une seule notification nécessite près de 20 minutes pour retrouver une concentration optimale.",
          "Près d'un pays sur quatre applique désormais des restrictions ou des interdictions de smartphones dans les établissements scolaires.",
          "L'organisation rappelle que la technologie ne doit pas supplanter l'écoute active et la pédagogie directe."
        ],
        readTime: "4 min",
        tags: ["UNESCO", "Éducation", "Interdiction smartphone", "Concentration", "Apprentissage", "Rapport"]
      },
      de: {
        slug: "unesco-weltbildungsbericht-smartphone-verbote-schulen",
        title: "UNESCO-Weltbildungsbericht: Smartphone-Verbote an Schulen steigern Lernerfolg und Konzentration",
        summary: "Der weltweite Bildungsbericht der UNESCO belegt, dass Verbote von Mobiltelefonen im Unterricht Ablenkungen minimieren, Cybermobbing senken und Noten verbessern.",
        content: [
          "Die UNESCO warnt vor den negativen Folgen unkontrollierter Bildschirmnutzung auf die kognitiven Fähigkeiten von Schülern.",
          "Laut Bericht dauert es nach einer einzigen Smartphone-Unterbrechung bis zu 20 Minuten, bis Lernende wieder voll fokussiert sind.",
          "Weltweit hat bereits jedes vierte Land Smartphone-Beschränkungen an Schulen eingeführt.",
          "Die Organisation fordert klare Richtlinien zum Schutz des ungestörten Lernens."
        ],
        readTime: "4 Min.",
        tags: ["UNESCO", "Bildung", "Smartphone-Verbot", "Lernerfolg", "Fokus", "Weltbericht"]
      },
      pt: {
        slug: "unesco-relatorio-global-educacao-proibicao-celulares-escolas",
        title: "Relatório Global da UNESCO: proibição de celulares nas escolas melhora o rendimento dos alunos",
        summary: "O relatório de monitoramento da UNESCO comprova que restringir smartphones em sala de aula reduz distrações, diminui o bullying virtual e eleva o desempenho acadêmico.",
        content: [
          "A UNESCO destacou que o uso irrestrito de telas prejudica a assimilação de conteúdo e a memória de trabalho dos estudantes.",
          "Dados do relatório mostram que leva até 20 minutos para um aluno recuperar o foco após uma notificação no celular.",
          "Atualmente, um em cada quatro países já adota restrições ao uso de smartphones no ambiente escolar.",
          "A entidade enfatiza a importância de proteger as salas de aula como espaços de concentração plena."
        ],
        readTime: "4 min",
        tags: ["UNESCO", "Proibição nas escolas", "Educação", "Foco cognitivo", "Desempenho", "Políticas"]
      },
      it: {
        slug: "unesco-rapporto-globale-istruzione-divieto-smartphone-scuole",
        title: "Rapporto globale UNESCO: vietare gli smartphone a scuola aumenta concentrazione e voti",
        summary: "Il rapporto globale dell'UNESCO evidenzia che il divieto dei telefoni in classe riduce la distrazione, combatte il bullismo online e migliora i risultati nelle prove scolastiche.",
        content: [
          "L'UNESCO esorta i governi a stabilire limiti netti alla presenza di dispositivi digitali nelle aule scolastiche.",
          "Secondo lo studio, uno studente impiega circa 20 minuti per riconquistare la massima concentrazione dopo una singola interruzione digitale.",
          "Un paese su quattro nel mondo ha già introdotto divieti parziali o totali di smartphone nelle scuole.",
          "L'agenzia ONU ricorda che la tecnologia non può sostituire la relazione educativa umana."
        ],
        readTime: "4 min",
        tags: ["UNESCO", "Scuola", "Divieto cellulari", "Apprendimento", "Concentrazione", "Rapporto"]
      },
      ar: {
        slug: "unesco-global-education-report-smartphone-bans-schools",
        title: "تقرير اليونسكو العالمي للتعليم: حظر الهواتف في المدارس يرفع التحصيل الدراسي والتركيز",
        summary: "أكد تقرير اليونسكو العالمي أن حظر الهواتف الذكية داخل الفصول يقلل من التشتت ويحد من التنمر الإلكتروني ويرفع درجات الطلاب بشكل ملحوظ.",
        content: [
          "دعت منظمة اليونسكو وزارات التعليم حول العالم إلى وضع قيود واضحة وصارمة على استخدام الأجهزة الرقمية في الفصول.",
          "بين التقرير أن الطالب يستغرق نحو 20 دقيقة لإعادة التركيز الكامل في الدرس بعد تلقي إشعار واحد على هاتفه.",
          "تطبق دولة من بين كل 4 دول حول العالم حالياً حظراً كاملاً أو جزئياً على الهواتف في المدارس.",
          "أكدت المديرة العامة للمنظمة أن التكنولوجيا يجب أن تخدم التعليم دون الإخلال بمهارات الانتباه والتفاعل البشري."
        ],
        readTime: "4 دقائق",
        tags: ["اليونسكو", "حظر الهواتف", "التعليم", "التحصيل الدراسي", "التركيز", "تقرير"]
      },
      id: {
        slug: "unesco-laporan-pendidikan-global-larangan-smartphone-sekolah",
        title: "Laporan Pendidikan Global UNESCO: Larangan Smartphone di Sekolah Tingkatkan Prestasi dan Fokus Siswa",
        summary: "Laporan Pemantauan Pendidikan Global UNESCO membuktikan bahwa pembatasan ponsel pintar di ruang kelas menurunkan distraksi, menekan cyberbullying, dan mendongkrak nilai ujian.",
        content: [
          "UNESCO menyerukan pentingnya batasan tegas terhadap penggunaan gawai di ruang kelas demi menjaga kualitas pembelajaran.",
          "Penelitian menunjukkan siswa membutuhkan waktu hingga 20 menit untuk memulihkan fokus penuh setelah terganggu satu notifikasi ponsel.",
          "Saat ini, satu dari empat negara telah memberlakukan larangan smartphone di sekolah dasar dan menengah.",
          "UNESCO menegaskan bahwa teknologi tidak boleh menggantikan esensi interaksi manusia dan daya fokus mendalam."
        ],
        readTime: "4 mnt",
        tags: ["UNESCO", "Larangan Sekolah", "Pendidikan", "Fokus Belajar", "Prestasi", "Laporan Global"]
      },
      fil: {
        slug: "unesco-pandaigdigang-ulat-sa-edukasyon-pagbabawal-smartphone-paaralan",
        title: "Ulat ng UNESCO: Pagbabawal ng Smartphone sa Paaralan, Nagpapataas ng Grado at Pokus ng Estudyante",
        summary: "Ipinakita sa Global Education Monitoring Report ng UNESCO na ang pagbabawal ng cellphone sa klase ay nagpapababa ng distraction at nagpapataas ng academic achievement.",
        content: [
          "Hinimok ng UNESCO ang mga bansa na magpatupad ng malinaw na limitasyon sa paggamit ng digital devices sa silid-aralan.",
          "Ayon sa ulat, umaabot sa 20 minuto bago muling makuha ng estudyante ang buong pokus matapos makatanggap ng isang notification.",
          "Isa sa bawat apat na bansa ang nagpatupad na ng smartphone bans sa mga paaralan.",
          "Binigyang-diin ng UNESCO na hindi dapat palitan ng teknolohiya ang personal na pagtuturo at malalim na atensyon."
        ],
        readTime: "4 min",
        tags: ["UNESCO", "Bawal ang Phone", "Edukasyon", "Pokus sa Klase", "Akademikong Tagumpay", "Ulat"]
      },
      th: {
        slug: "unesco-global-education-report-smartphone-bans-schools",
        title: "รายงานการศึกษาระดับโลกของ UNESCO ชี้การแบนสมาร์ทโฟนในโรงเรียนช่วยเพิ่มผลการเรียนและสมาธิ",
        summary: "รายงานติดตามผลการศึกษาของ UNESCO เผยหลักฐานเชิงประจักษ์ว่าการห้ามใช้โทรศัพท์ในห้องเรียนช่วยลดการเสียสมาธิ ป้องกันการกลั่นแกล้งบนโลกออนไลน์ และยกระดับผลคะแนนสอบ",
        content: [
          "UNESCO ออกคำแนะนำระดับโลกเรียกร้องให้กระทรวงศึกษาธิการทั่วโลกกำหนดขอบเขตการใช้อุปกรณ์ดิจิทัลในห้องเรียนอย่างชัดเจน",
          "งานวิจัยระบุว่า นักเรียนต้องใช้เวลาเฉลี่ยถึง 20 นาทีในการดึงสมาธิกลับมาสู่บทเรียนหลังจากการแจ้งเตือนบนมือถือเพียงครั้งเดียว",
          "ปัจจุบัน 1 ใน 4 ของประเทศทั่วโลกได้ประกาศใช้มาตรการห้ามใช้สมาร์ทโฟนในโรงเรียนระดับประถมและมัธยม",
          "ผู้อำนวยการ UNESCO ย้ำว่า เทคโนโลยีควรสนับสนุนการเรียนรู้ แต่ต้องไม่ทำลายสมาธิและปฏิสัมพันธ์ระหว่างผู้สอนกับผู้เรียน"
        ],
        readTime: "4 นาที",
        tags: ["UNESCO", "การแบนโทรศัพท์", "การศึกษา", "สมาธิในการเรียน", "ผลการเรียน", "นโยบายระดับโลก"]
      }
    }
  },

  // --- HABER 8 ---
  {
    id: "8",
    date: "2026-08-16",
    source: "CAC (Cyberspace Administration of China) & BBC News",
    sourceUrl: "https://www.cac.gov.cn",
    featured: false,
    catKey: "gov",
    data: {
      tr: {
        slug: "cin-kucukler-modu-gece-ekran-karartma-yasasi",
        title: "Çin'den 'Küçükler Modu' Yasası: Reşit Olmayanlara Gece 22:00'den Sonra İnternet ve Ekran Tamamen Kapanıyor",
        summary: "Çin Siber Güvenlik İdaresi (CAC), tüm akıllı cihaz ve uygulama üreticilerine 18 yaş altı kullanıcılar için 'Küçükler Modu'nu zorunlu kıldı. Gece 22:00 ile 06:00 arasında cihazlar internete erişemiyor; yaş grubuna göre günlük maksimum kullanım 40 dakika ile 2 saat arasında sınırlandırılıyor.",
        content: [
          "Çin hükümeti, genç nüfusta hızla yayılan miyopi, uyku bozuklukları ve dijital bağımlılıkla mücadele etmek amacıyla dünyanın en katı cihaz tabanlı sınırlandırma kurallarını yürürlüğe koydu.",
          "Yeni siber güvenlik mevzuatına göre, ülkede satılan tüm akıllı telefonlar, tabletler ve işletim sistemleri yerleşik bir 'Küçükler Modu' (Minor Mode) barındırmak zorunda. Bu mod aktif olduğunda:",
          "- 8 yaş altı çocuklar günde en fazla 40 dakika,",
          "- 8-16 yaş arası çocuklar günde en fazla 1 saat,",
          "- 16-18 yaş arası gençler günde en fazla 2 saat ekran süresi kullanabiliyor.",
          "- Gece 22:00 ile sabah 06:00 saatleri arasında ise reşit olmayanların cihazları acil durum aramaları ve ebeveyn onaylı eğitim araçları hariç tüm internet ve oyun erişimine tamamen kapatılıyor.",
          "Düzenleme, bireylerin kendi iradeleriyle koyamadığı sınırların sistem seviyesinde işletim sistemi ve cihaz kalkanlarıyla korunması gerektiğinin dünyadaki en radikal örneği olarak değerlendiriliyor."
        ],
        readTime: "5 dk",
        tags: ["Çin", "Küçükler Modu", "CAC", "Gece Ekran Yasağı", "Siber Güvenlik"]
      },
      en: {
        slug: "china-minor-mode-nighttime-screen-blackout-law",
        title: "China Mandates 'Minor Mode': Automatic Nighttime Screen Blackouts and Hard Time Limits for Youths",
        summary: "China's Cyberspace Administration (CAC) enforced mandatory 'Minor Mode' settings across all smartphones and operating systems, enforcing nighttime internet blackouts from 10 PM to 6 AM and capping screen time between 40 minutes and 2 hours daily based on age.",
        content: [
          "To combat severe myopia rates, sleep deprivation, and algorithmic compulsion among adolescents, Chinese authorities rolled out systemic operating system mandates.",
          "Under the regulations, all smartphones, tablets, and apps sold in the country must integrate an unbypassable 'Minor Mode'. When engaged:",
          "- Children under 8 are restricted to a maximum of 40 minutes per day.",
          "- Children aged 8 to 16 are capped at 1 hour daily.",
          "- Adolescents aged 16 to 18 receive up to 2 hours of access.",
          "- Between 10:00 PM and 6:00 AM, devices automatically restrict online access, barring emergency calls and approved educational utilities.",
          "The policy represents the world's most comprehensive deployment of systemic, OS-level boundaries to override behavioral addictive hooks."
        ],
        readTime: "5 min",
        tags: ["China", "Minor Mode", "Screen Curfew", "CAC", "Regulation", "Digital Health"]
      },
      es: {
        slug: "china-modo-menores-ley-apagon-pantalla-nocturno",
        title: "China impone el 'Modo Menores': apagón nocturno de pantallas y límites estrictos de tiempo",
        summary: "La Administración del Ciberespacio de China obligó a fabricantes a integrar el 'Modo Menores', cortando el acceso a internet entre las 22:00 y las 06:00 y limitando el uso diario a un máximo de 2 horas.",
        content: [
          "China implementó normas pioneras a nivel de sistema operativo para frenar la miopía, el insomnio y la adicción digital en menores.",
          "El 'Modo Menores' obligatorio establece un tope de 40 minutos para menores de 8 años, 1 hora para niños de 8 a 16 años y 2 horas para jóvenes de 16 a 18 años.",
          "Entre las 22:00 y las 06:00, los dispositivos bloquean el acceso a internet y juegos de manera automática.",
          "La medida ilustra la necesidad de barreras estructurales a nivel de sistema para controlar el tiempo de pantalla."
        ],
        readTime: "5 min",
        tags: ["China", "Modo Menores", "Apagón nocturno", "Regulación", "Tiempo de pantalla", "Ciberseguridad"]
      },
      fr: {
        slug: "chine-mode-mineurs-loi-couvre-feu-ecrans-nuit",
        title: "Chine : mise en place obligatoire du « Mode mineurs » avec couvre-feu nocturne et plafonds stricts",
        summary: "L'Administration du cyberespace chinois impose un « Mode mineurs » sur tous les appareils : coupure automatique d'Internet entre 22h et 6h et temps d'écran plafonné entre 40 minutes et 2 heures par jour selon l'âge.",
        content: [
          "Pour lutter contre les troubles du sommeil et la dépendance aux écrans chez les jeunes, la Chine a instauré des limites intégrées directement aux systèmes d'exploitation.",
          "Le dispositif bride l'utilisation quotidienne à 40 minutes pour les moins de 8 ans, 1 heure pour les 8-16 ans et 2 heures pour les 16-18 ans.",
          "Durant la nuit (de 22h00 à 06h00), les applications et l'accès au réseau sont totalement désactivés, hors appels d'urgence.",
          "Cette politique illustre l'efficacité des barrières techniques strictes pour pallier l'insuffisance de la seule volonté individuelle."
        ],
        readTime: "5 min",
        tags: ["Chine", "Mode mineurs", "Couvre-feu numérique", "Réglementation", "Temps d'écran", "Sommeil"]
      },
      de: {
        slug: "china-minderjaehrigen-modus-naechtliche-bildschirmsperre",
        title: "China verordnet 'Minderjährigen-Modus': Nächtliche Bildschirmsperre und strikte Zeitlimits",
        summary: "Chinas Cyberspace-Behörde verpflichtet Hersteller zur Integration eines 'Minderjährigen-Modus': Internetabschaltung von 22:00 bis 06:00 Uhr sowie tägliche Obergrenzen von 40 Minuten bis 2 Stunden.",
        content: [
          "Zur Eindämmung von Kurzsichtigkeit und digitaler Abhängigkeit bei Jugendlichen hat China verbindliche Systemvorgaben eingeführt.",
          "Der Modus begrenzt die Nutzungszeit auf 40 Minuten für Kinder unter 8 Jahren, 1 Stunde für 8-16-Jährige und maximal 2 Stunden für 16-18-Jährige.",
          "Nachts werden Geräte für Online-Dienste und Spiele automatisch gesperrt, um ungestörten Schlaf zu sichern.",
          "Die Regulierung gilt weltweit als das konsequenteste Beispiel für systemische Grenzen auf Betriebssystemebene."
        ],
        readTime: "5 Min.",
        tags: ["China", "Minderjährigen-Modus", "Nachtabschaltung", "Regulierung", "Bildschirmsperre", "Schlaf"]
      },
      pt: {
        slug: "china-modo-menores-lei-bloqueio-noturno-telas",
        title: "China torna obrigatório o 'Modo Menores': bloqueio noturno de telas e limites rígidos de uso",
        summary: "A autoridade de cibersegurança da China exigiu a inclusão de um 'Modo Menores' em todos os smartphones, desligando a internet das 22h às 6h e limitando o tempo diário de acordo com a faixa etária.",
        content: [
          "O governo chinês promulgou regras sistêmicas em nível de sistema operacional para proteger o sono e a saúde visual dos jovens.",
          "Os limites variam de 40 minutos diários para menores de 8 anos até 2 horas para adolescentes de 16 a 18 anos.",
          "No período das 22h às 6h, o acesso à internet e a jogos fica completamente bloqueado.",
          "A medida demonstra a eficácia de travas técnicas rígidas para combater a compulsão digital."
        ],
        readTime: "5 min",
        tags: ["China", "Modo Menores", "Bloqueio noturno", "Regulação", "Tempo de tela", "Cibersegurança"]
      },
      it: {
        slug: "cina-modalita-minori-legge-blocco-notturno-schermi",
        title: "Cina: 'Modalità Minori' obbligatoria con coprifuoco notturno e limiti di tempo per gli schermi",
        summary: "L'autorità cinese per il cyberspazio ha imposto la 'Modalità Minori' su tutti i dispositivi mobili: spegnimento della rete dalle 22:00 alle 06:00 e utilizzo giornaliero limitato tra 40 minuti e 2 ore.",
        content: [
          "Per contrastare disturbi del sonno e miopia giovanile, la Cina ha implementato vincoli hardware e software a livello nazionale.",
          "Il sistema limita l'uso a 40 minuti sotto gli 8 anni, 1 ora tra 8 e 16 anni e massimo 2 ore per i ragazzi tra 16 e 18 anni.",
          "Durante le ore notturne l'accesso ai giochi e ai social viene interrotto automaticamente.",
          "La misura evidenzia l'importanza di barriere tecniche solide per superare la vulnerabilità dell'autocontrollo."
        ],
        readTime: "5 min",
        tags: ["Cina", "Modalità Minori", "Coprifuoco schermi", "Regolamentazione", "Sonno", "Salute digitale"]
      },
      ar: {
        slug: "china-minor-mode-nighttime-screen-blackout-law",
        title: "الصين تلزم الأجهزة الذكية بـ 'وضع القاصرين': إطفاء ليلي للشاشات وقيود زمنية صارمة",
        summary: "ألزمت إدارة الفضاء الإلكتروني الصينية الشركات بدمج 'وضع القاصرين' لقطع الإنترنت بين 10 مساءً و6 صباحاً وتقييد وقت الشاشة اليومي بين 40 دقيقة وساعتين حسب العمر.",
        content: [
          "أقرت الصين لوائح مشددة على مستوى أنظمة التشغيل لمكافحة قصر النظر واضطرابات النوم والإدمان الرقمي لدى الأطفال.",
          "يحدد النظام 40 دقيقة كحد أقصى لمن هم دون 8 سنوات، وساعة واحدة للأعمار بين 8 و16 عاماً، وساعتين لمن هم بين 16 و18 عاماً.",
          "تُغلق الأجهزة تلقائياً عن الإنترنت والألعاب من الساعة العاشرة مساءً حتى السادسة صباحاً.",
          "يعد هذا الإجراء النموذج الأبرز عالمياً لفرض حدود نظامية تتجاوز الاعتماد على الإرادة الفردية وحدها."
        ],
        readTime: "5 دقائق",
        tags: ["الصين", "وضع القاصرين", "حظر ليلي", "الأمن السيبراني", "تنظيم رقمي", "وقت الشاشة"]
      },
      id: {
        slug: "china-mode-anak-dibawah-umur-pemadaman-layar-malam-hari",
        title: "China Wajibkan 'Mode Anak di Bawah Umur': Pemadaman Layar Malam Hari dan Batas Waktu Ketat",
        summary: "Badan Siber China (CAC) mewajibkan produsen smartphone memasang 'Mode Anak', mematikan internet dari pukul 22.00 hingga 06.00 serta membatasi waktu layar harian antara 40 menit hingga 2 jam.",
        content: [
          "Pemerintah China menerapkan aturan ketat pada sistem operasi gawai untuk menekan miopia dan kecanduan digital pada anak.",
          "Mode ini membatasi pemakaian 40 menit untuk usia di bawah 8 tahun, 1 jam untuk usia 8-16 tahun, dan 2 jam untuk usia 16-18 tahun.",
          "Pukul 22.00 hingga 06.00, seluruh akses internet dan game dinonaktifkan secara otomatis.",
          "Regulasi ini menjadi rujukan global pentingnya batas sistemik untuk melindungi jam tidur dan fokus generasi muda."
        ],
        readTime: "5 mnt",
        tags: ["China", "Mode Anak", "Pemadaman Malam", "Regulasi", "Waktu Layar", "Kesehatan"]
      },
      fil: {
        slug: "china-minor-mode-batas-blackout-sa-gabi-ng-screen",
        title: "China Ipinag-utos ang 'Minor Mode': Nighttime Screen Blackout at Mahigpit na Limitasyon sa Oras",
        summary: "Ipinatupad ng Cyberspace Administration ng China ang 'Minor Mode' sa lahat ng gadget: walang internet mula 10 PM hanggang 6 AM at limitadong 40 minuto hanggang 2 oras na paggamit bawat araw.",
        content: [
          "Upang labanan ang sleep deprivation at digital addiction sa kabataan, nagpatupad ang China ng batas sa operating system level.",
          "Nalilimitahan ang paggamit sa 40 minuto para sa wala pang 8 anyos, 1 oras para sa 8-16 anyos, at 2 oras para sa 16-18 anyos.",
          "Awtomatikong napuputol ang internet access mula 10:00 ng gabi hanggang 6:00 ng umaga.",
          "Ipinapakita nito ang kahalagahan ng teknikal na proteksyon upang maiwasan ang walang humpay na pag-scroll."
        ],
        readTime: "5 min",
        tags: ["China", "Minor Mode", "Screen Curfew", "Regulasyon", "Digital Health", "Batas"]
      },
      th: {
        slug: "china-minor-mode-nighttime-screen-blackout-law",
        title: "จีนบังคับใช้ 'Minor Mode' สั่งตัดอินเทอร์เน็ตช่วงกลางคืนและจำกัดเวลาหน้าจอในเยาวชน",
        summary: "สำนักงานบริหารไซเบอร์สเปซแห่งประเทศจีน (CAC) บังคับให้ผู้ผลิตอุปกรณ์ติดตั้ง 'โหมดผู้เยาว์' ตัดการเชื่อมต่ออินเทอร์เน็ตระหว่างเวลา 22:00 - 06:00 น. และจำกัดเวลาใช้งานวันละ 40 นาทีถึง 2 ชั่วโมงตามช่วงอายุ",
        content: [
          "เพื่อแก้ไขปัญหาสายตาสั้น การอดนอน และการเสพติดแอปพลิเคชันในเยาวชน ทางการจีนได้ออกกฎหมายควบคุมระดับระบบปฏิบัติการของอุปกรณ์",
          "โหมดผู้เยาว์กำหนดให้เด็กอายุต่ำกว่า 8 ปีใช้งานได้ไม่เกิน 40 นาทีต่อวัน อายุ 8-16 ปีใช้งานได้ 1 ชั่วโมง และอายุ 16-18 ปีใช้งานได้ไม่เกิน 2 ชั่วโมง",
          "ในช่วงเวลา 22:00 น. ถึง 06:00 น. อุปกรณ์จะตัดการเข้าถึงอินเทอร์เน็ตและเกมโดยอัตโนมัติ",
          "นโยบายนี้เป็นตัวอย่างระดับโลกในการใช้ระบบควบคุมเพื่อสร้างวินัยดิจิทัลอย่างมีประสิทธิภาพ"
        ],
        readTime: "5 นาที",
        tags: ["จีน", "โหมดผู้เยาว์", "เคอร์ฟิวหน้าจอ", "การกำกับดูแล", "สุขภาพดิจิทัล", "กฎหมาย"]
      }
    }
  },

  // --- HABER 9 ---
  {
    id: "9",
    date: "2026-08-14",
    source: "BBC News & The Guardian",
    sourceUrl: "https://www.bbc.com",
    featured: false,
    catKey: "gov",
    data: {
      tr: {
        slug: "ingiltere-ve-norvec-algoritmik-akislara-kisitlama",
        title: "İngiltere ve Norveç'ten Yeni Düzenleme: Sonsuz Kaydırma ve Bağımlılık Yapan Algoritmik Akışlar Hedefte",
        summary: "İngiltere Medya Denetleme Kurumu (Ofcom) ve Norveç Hükümeti, sosyal medya platformlarının 'sonsuz kaydırma' (infinite scroll), otomatik video oynatma ve dopamin tuzakları içeren öneri algoritmalarını çocuklar için zorunlu olarak kapatmasını talep eden yeni güvenlik standartlarını duyurdu.",
        content: [
          "Avrupa genelinde dijital bağımlılıkla mücadele yeni bir aşamaya geçti. İngiltere ve Norveç hükümetleri, platformların kullanıcıyı saatlerce ekranda tutmak için tasarladığı 'davranışsal kancaları' doğrudan hedef alan yasal yönergeleri açıkladı.",
          "Yeni kurallara göre; 18 yaş altı kullanıcılar için varsayılan olarak sonsuz kaydırma özellikleri kapatılacak, gece saatlerinde gelen bildirimler engellenecek ve algoritmik 'Sizin İçin' akışları yerine kronolojik akışlar sunulacak.",
          "Norveç Başbakanı, 'Teknoloji devleri dünyanın en iyi psikologları ve yazılımcılarıyla çocuklarımızın dikkatini çalmak için algoritmalar tasarlıyor. Buna karşı bireysel irade yetersiz kalıyor; sistemik sınırlar koymak zorundayız' dedi.",
          "Düzenlemenin ihlali durumunda şirketlerin küresel cirolarının %10'una varan cezalarla karşılaşabileceği uyarısı yapıldı."
        ],
        readTime: "4 dk",
        tags: ["İngiltere", "Norveç", "Sonsuz Kaydırma", "Algoritma", "Ofcom", "Dijital Bağımlılık"]
      },
      en: {
        slug: "uk-norway-curb-infinite-scroll-and-addictive-algorithms",
        title: "UK and Norway Unveil Strict Measures to Curb Infinite Scroll and Predatory Feeds for Minors",
        summary: "UK regulator Ofcom alongside Norwegian authorities announced aggressive safety codes compelling social media platforms to turn off infinite scroll, autoplay loops, and algorithmic recommendation engines by default for under-18s.",
        content: [
          "Governments across Northern Europe are targeting the root software architecture that drives compulsive screen habits in teenagers.",
          "Under the joint regulatory framework, tech companies must disable infinite scrolling feeds and restrict late-night push notification loops for youth accounts.",
          "Platforms will be required to offer chronological, distraction-free feeds by default, returning autonomy to users.",
          "The Prime Minister of Norway stated: 'Tech giants deploy behavioral psychology to extract youth attention for commercial gain. We must establish robust statutory boundaries.'"
        ],
        readTime: "4 min",
        tags: ["UK", "Norway", "Infinite Scroll", "Algorithms", "Ofcom", "Digital Safety"]
      },
      es: {
        slug: "reino-unido-noruega-frenan-desplazamiento-infinito-algoritmos",
        title: "Reino Unido y Noruega exigen desactivar el desplazamiento infinito y algoritmos adictivos para menores",
        summary: "El regulador británico Ofcom y el gobierno noruego anunciaron códigos de seguridad para desactivar por defecto el desplazamiento infinito, la reproducción automática y los algoritmos adictivos en menores de 18 años.",
        content: [
          "Los reguladores del norte de Europa apuntan directamente a la arquitectura de software diseñada para atrapar la atención de los jóvenes.",
          "Las nuevas normas obligan a desactivar el desplazamiento infinito y las notificaciones nocturnas en cuentas de menores.",
          "Las plataformas deberán ofrecer por defecto muros cronológicos sin recomendaciones algorítmicas adictivas.",
          "Las autoridades advirtieron que la voluntad individual no basta frente a diseños concebidos para generar dependencia."
        ],
        readTime: "4 min",
        tags: ["Reino Unido", "Noruega", "Desplazamiento infinito", "Algoritmos", "Ofcom", "Seguridad digital"]
      },
      fr: {
        slug: "royaume-uni-norvege-frein-defilement-infini-algorithmes",
        title: "Royaume-Uni et Norvège : vers l'interdiction du défilement infini et des flux prédateurs pour les mineurs",
        summary: "Le régulateur britannique Ofcom et les autorités norvégiennes imposent la désactivation par défaut du scroll infini et des algorithmes de recommandation comportementaux pour les moins de 18 ans.",
        content: [
          "Les gouvernements européens ciblent désormais les pièges comportementaux intégrés dans les applications sociales.",
          "Les plateformes devront désactiver par défaut le défilement continu et bloquer les alertes push nocturnes destinées aux adolescents.",
          "Le flux chronologique redeviendra la norme pour limiter la captation algorithmique de l'attention.",
          "Le Premier ministre norvégien a rappelé la nécessité d'opposer des règles claires aux stratégies de monétisation de l'attention."
        ],
        readTime: "4 min",
        tags: ["Royaume-Uni", "Norvège", "Scroll infini", "Algorithmes", "Ofcom", "Sécurité numérique"]
      },
      de: {
        slug: "uk-norwegen-beschraenkung-endlos-scrollen-algorithmen",
        title: "Großbritannien und Norwegen schränken Endlos-Scrollen und manipulative Feeds für Minderjährige ein",
        summary: "Die britische Ofcom und die norwegische Regierung verpflichten Online-Plattformen, Endlos-Scrollen und algorithmische Empfehlungen für Minderjährige standardmäßig zu deaktivieren.",
        content: [
          "Europäische Aufsichtsbehörden nehmen die softwarebasierten Mechanismen ins Visier, die Jugendliche dauerhaft am Bildschirm halten.",
          "Für Nutzer unter 18 Jahren müssen automatisches Weiterscrollen und nächtliche Benachrichtigungen standardmäßig abgeschaltet werden.",
          "Plattformen sind aufgefordert, übersichtliche, chronologische Feeds bereitzustellen.",
          "Verstöße können mit empfindlichen Geldbußen von bis zu 10 % des weltweiten Jahresumsatzes geahndet werden."
        ],
        readTime: "4 Min.",
        tags: ["Großbritannien", "Norwegen", "Endlos-Scrollen", "Algorithmen", "Ofcom", "Jugendschutz"]
      },
      pt: {
        slug: "reino-unido-noruega-freiam-rolagem-infinita-algoritmos",
        title: "Reino Unido e Noruega anunciam freio na rolagem infinita e algoritmos aditivos para menores",
        summary: "A agência reguladora britânica Ofcom e o governo norueguês exigem que as redes sociais desativem por padrão a rolagem infinita, a reprodução automática e os algoritmos predatórios para menores de 18 anos.",
        content: [
          "Governos do norte da Europa atacam a raiz do design de aplicativos que gera uso compulsivo em jovens.",
          "Pelas novas diretrizes, o feed infinito e notificações durante a noite serão desativados por padrão para menores.",
          "As plataformas devem priorizar feeds cronológicos sem manipulação comportamental.",
          "As autoridades afirmam que limites sistêmicos são cruciais para defender o foco da juventude."
        ],
        readTime: "4 min",
        tags: ["Reino Unido", "Noruega", "Rolagem infinita", "Algoritmos", "Ofcom", "Segurança digital"]
      },
      it: {
        slug: "regno-unito-norvegia-freno-scorrimento-infinito-algoritmi",
        title: "Regno Unito e Norvegia: stop a scorrimento infinito e algoritmi predatori per i minori",
        summary: "L'autorità britannica Ofcom e il governo norvegese impongono la disattivazione predefinita di scrolling infinito, autoplay e feed algoritmici per gli utenti under 18.",
        content: [
          "I regolatori europei intervengono sulle architetture software che alimentano la dipendenza da smartphone.",
          "Le aziende tecnologiche dovranno disattivare lo scorrimento continuo e le notifiche notturne per gli adolescenti.",
          "Viene richiesta l'adozione di feed cronologici lineari per restituire il controllo del tempo agli utenti.",
          "Il governo norvegese ha sottolineato la necessità di proteggere i giovani dalla manipolazione dell'attenzione."
        ],
        readTime: "4 min",
        tags: ["Regno Unito", "Norvegia", "Scorrimento infinito", "Algoritmi", "Ofcom", "Sicurezza digitale"]
      },
      ar: {
        slug: "uk-norway-curb-infinite-scroll-and-addictive-algorithms",
        title: "بريطانيا والنرويج تلزمان المنصات بإلغاء التمرير اللانهائي والخوارزميات الإدمانية للقاصرين",
        summary: "أعلنت هيئة تنظيم الإعلام البريطانية (أوفكوم) وحكومة النرويج عن معايير سلامة تلزم منصات التواصل بتعطيل التمرير اللانهائي والتشغيل التلقائي افتراضياً لمن هم دون 18 عاماً.",
        content: [
          "تستهدف الحكومات في شمال أوروبا البنية البرمجية التي تسبب الاستخدام القهري للهواتف الذكية بين المراهقين.",
          "توجب القواعد الجديدة إيقاف ميزات التمرير غير المحدود والإشعارات الليلية لحسابات القاصرين تلقائياً.",
          "يتعين على الشركات تقديم تدفقات محتوى زمنية خالية من الإغراءات الخوارزمية.",
          "أكد رئيس وزراء النرويج أن حماية انتباه الأطفال تتطلب وضع حواجز قانونية واضحة أمام عمالقة التكنولوجيا."
        ],
        readTime: "4 دقائق",
        tags: ["بريطانيا", "النرويج", "التمرير اللانهائي", "خوارزميات", "أوفكوم", "أمان رقمي"]
      },
      id: {
        slug: "inggris-norwegia-batasi-gulir-tanpa-batas-dan-algoritma-adiktif",
        title: "Inggris dan Norwegia Tindak Fitur Gulir Tanpa Batas dan Algoritma Adiktif untuk Pengguna di Bawah Umur",
        summary: "Regulator Inggris Ofcom dan otoritas Norwegia mewajibkan platform media sosial menonaktifkan fitur infinite scroll, putar otomatis, dan rekomendasi adiktif secara default untuk remaja.",
        content: [
          "Pemerintah di Eropa Utara menargetkan arsitektur perangkat lunak yang memicu kecanduan layar pada remaja.",
          "Perusahaan teknologi diwajibkan mematikan infinite scroll dan notifikasi larut malam untuk akun di bawah 18 tahun.",
          "Platform harus menyediakan feed kronologis standar yang tidak memanipulasi perhatian pengguna.",
          "Perdana Menteri Norwegia menegaskan pentingnya batas regulasi untuk mengimbangi kecanggihan algoritma."
        ],
        readTime: "4 mnt",
        tags: ["Inggris", "Norwegia", "Infinite Scroll", "Algoritma", "Ofcom", "Keamanan Digital"]
      },
      fil: {
        slug: "uk-norway-paglilimita-infinite-scroll-at-nakakahumaling-na-algorithm",
        title: "UK at Norway Ipinag-utos ang Pag-alis ng Infinite Scroll at Addictive Algorithms para sa Kabataan",
        summary: "Inanunsyo ng Ofcom ng UK at gobyerno ng Norway ang mga alituntunin na nag-aatas sa social media na i-off ang infinite scroll, autoplay, at algorithmic recommendation para sa mga menor de edad.",
        content: [
          "Pinupuntirya ng mga regulator sa Europe ang software features na nagdudulot ng compulsive phone use sa kabataan.",
          "Dapat i-disable ng mga app ang infinite scrolling at late-night push notifications para sa mga user na wala pang 18 anyos.",
          "Inaatasan ang mga platform na ibalik ang chronological feed.",
          "Binigyang-diin ng pamahalaan ng Norway na kailangan ng statutory boundaries upang protektahan ang atensyon ng kabataan."
        ],
        readTime: "4 min",
        tags: ["UK", "Norway", "Infinite Scroll", "Algorithms", "Ofcom", "Digital Safety"]
      },
      th: {
        slug: "uk-norway-curb-infinite-scroll-and-addictive-algorithms",
        title: "สหราชอาณาจักรและนอร์เวย์สั่งปิดฟีเจอร์เลื่อนฟีดไม่สิ้นสุดและอัลกอริทึมดูดเวลาสำหรับผู้เยาว์",
        summary: "Ofcom หน่วยงานกำกับดูแลของอังกฤษร่วมกับรัฐบาลนอร์เวย์ ประกาศมาตรฐานความปลอดภัยบังคับให้แพลตฟอร์มโซเชียลมีเดียปิดระบบ Infinite Scroll, Autoplay และอัลกอริทึมแนะนำเนื้อหาเป็นค่าเริ่มต้นสำหรับผู้ใช้อายุต่ำกว่า 18 ปี",
        content: [
          "รัฐบาลในยุโรปเหนือกำลังพุ่งเป้าไปที่โครงสร้างซอฟต์แวร์ที่กระตุ้นให้เกิดพฤติกรรมการติดหน้าจอในกลุ่มวัยรุ่น",
          "กฎระเบียบใหม่กำหนดให้ปิดการเลื่อนฟีดแบบไม่มีที่สิ้นสุดและการแจ้งเตือนยามดึกสำหรับบัญชีผู้เยาว์โดยอัตโนมัติ",
          "แพลตฟอร์มจะต้องแสดงผลเนื้อหาตามลำดับเวลาปกติเพื่อคืนความเป็นอิสระในการควบคุมเวลาให้กับผู้ใช้",
          "นายกรัฐมนตรีนอร์เวย์เน้นย้ำว่า การจำกัดการทำงานของอัลกอริทึมเป็นสิ่งจำเป็นเพื่อปกป้องสมาธิของเยาวชน"
        ],
        readTime: "4 นาที",
        tags: ["สหราชอาณาจักร", "นอร์เวย์", "Infinite Scroll", "อัลกอริทึม", "Ofcom", "ความปลอดภัยดิจิทัล"]
      }
    }
  },

  // --- HABER 10 ---
  {
    id: "10",
    date: "2026-08-10",
    source: "Cambridge University Press & Nature Neuroscience",
    sourceUrl: "https://www.cam.ac.uk",
    featured: false,
    catKey: "science",
    data: {
      tr: {
        slug: "oxford-cambridge-kisa-video-ve-dopamin-arastirmasi",
        title: "Oxford ve Cambridge Nörobilim Araştırması: Kısa Videolar (Reels/Shorts) Beynin Odaklanma Eşiğini Düşürüyor",
        summary: "Önde gelen nörobilimcilerin yürüttüğü kapsamlı beyin görüntüleme çalışması, 60 saniyenin altındaki hızlı video tüketiminin beynin prefrontal korteksindeki derin odaklanma ağlarını zayıflattığını ve 'dopamin toleransını' yükselttiğini kanıtladı.",
        content: [
          "Cambridge ve Oxford üniversitelerinden araştırmacıların ortaklaşa yürüttüğü ve 1.800 katılımcının fMRI taramalarıyla incelendiği araştırma, TikTok, Instagram Reels ve YouTube Shorts formatlarının beyin biyokimyası üzerindeki etkilerini gözler önüne serdi.",
          "Araştırmanın başyazarı, 'Kısa videolar beyne her 10-15 saniyede bir öngörülemez bir ödül (dopamin patlaması) sunuyor. Bu durum beynin ödül sistemini aşırı uyararak, kitap okumak, ders çalışmak veya tek bir işle uğraşmak gibi düşük dopaminli ama yüksek değerli aktivitelere karşı tahammülsüzlük yaratıyor' dedi.",
          "Çalışma, günde 2 saatten fazla kısa video tüketen bireylerde dikkat süresinin ortalama %40 oranında kısaldığını ve görev tamamlama sırasındaki bilişsel yorgunluğun çok daha erken başladığını gösterdi.",
          "Uzmanlar, bu döngüyü kırmak için uygulamalara net günlük süre sınırları konulmasını ve 'davranışsal sürtünme' yaratan araçların kullanılmasını en etkili yöntem olarak öneriyor."
        ],
        readTime: "5 dk",
        tags: ["Oxford", "Cambridge", "Nörobilim", "Kısa Video", "Dopamin", "Odaklanma"]
      },
      en: {
        slug: "oxford-cambridge-short-form-video-dopamine-study",
        title: "Oxford & Cambridge Neuroscience Study: Short-Form Videos Erode Deep Focus and Elevate Dopamine Thresholds",
        summary: "A landmark neuroimaging study by Cambridge and Oxford researchers demonstrates that consuming rapid, sub-60-second video clips weakens prefrontal cortex attention networks and creates neurochemical intolerance for low-dopamine tasks.",
        content: [
          "A collaborative fMRI study conducted across 1,800 participants by neuroscientists at Oxford and Cambridge investigated the cognitive footprint of short-form algorithmic video streams (TikTok, Reels, Shorts).",
          "Researchers observed that micro-rewards delivered every few seconds hyper-stimulate dopamine pathways, recalibrating the baseline threshold required to sustain focus on long-form, high-value tasks like reading, deep work, or complex study.",
          "Participants consuming over two hours of short-form video daily demonstrated an average 40% decline in sustained attention span and reported accelerated cognitive fatigue during problem-solving tests.",
          "Neuroscientists concluded that applying hard temporal barriers and introducing intentional behavioral friction remain the most potent defenses against attentional erosion."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neuroscience", "Short-Form Video", "Dopamine", "Deep Focus"]
      },
      es: {
        slug: "oxford-cambridge-estudio-videos-cortos-dopamina",
        title: "Estudio de Oxford y Cambridge: los vídeos cortos erosionan la concentración y alteran la dopamina",
        summary: "Una investigación neurocientífica demuestra que el consumo habitual de vídeos de menos de 60 segundos debilita las redes de atención de la corteza prefrontal y reduce la tolerancia a tareas que requieren concentración prolongada.",
        content: [
          "Científicos de las universidades de Oxford y Cambridge evaluaron mediante resonancia magnética a 1.800 voluntarios para analizar el impacto de TikTok, Reels y Shorts en el cerebro.",
          "Los estímulos impredecibles cada pocos segundos hiperestimulan el circuito de recompensa, dificultando actividades como leer o estudiar.",
          "Quienes consumen más de 2 horas diarias de vídeos cortos experimentaron una reducción del 40% en su capacidad de atención sostenida.",
          "Los neurocientíficos recomiendan fijar límites estrictos de tiempo para restaurar el equilibrio dopaminérgico."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neurociencia", "Vídeos cortos", "Dopamina", "Concentración"]
      },
      fr: {
        slug: "oxford-cambridge-etude-videos-courtes-dopamine",
        title: "Étude Oxford et Cambridge : les vidéos courtes érodent la concentration et saturent la dopamine",
        summary: "Une vaste étude d'imagerie cérébrale menée par Oxford et Cambridge prouve que la consommation rapide de micro-vidéos affaiblit le cortex préfrontal et nuit gravement à la capacité d'attention soutenue.",
        content: [
          "Des chercheurs d'Oxford et Cambridge ont analysé les scanners fMRI de 1 800 personnes pour mesurer les effets des formats courts (TikTok, Reels, Shorts) sur la biochimie cérébrale.",
          "Les décharges répétées de dopamine toutes les 15 secondes créent une accoutumance qui rend les tâches lentes (lecture, travail de fond) difficiles à soutenir.",
          "L'étude mesure une perte de 40 % de la durée d'attention chez les utilisateurs réguliers de plus de 2 heures par jour.",
          "Les spécialistes préconisent des limites strictes d'utilisation et des barrières comportementales pour préserver le cerveau."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neurosciences", "Vidéos courtes", "Dopamine", "Concentration"]
      },
      de: {
        slug: "oxford-cambridge-kurzvideo-dopamin-studie",
        title: "Oxford- & Cambridge-Studie: Kurzvideos schwächen Tiefenkonzentration und verändern Dopaminhaushalt",
        summary: "Eine neurowissenschaftliche Studie von Forschern aus Oxford und Cambridge belegt, dass der Konsum von Videos unter 60 Sekunden die neuronalen Aufmerksamkeitsnetzwerke im Stirnhirn schwächt.",
        content: [
          "Gemeinsame fMRT-Untersuchungen von 1.800 Teilnehmern zeigen, wie Formate wie TikTok, Reels und Shorts das Belohnungszentrum des Gehirns überstimulieren.",
          "Unvorhersehbare Belohnungen im Sekundentakt führen zu einer Dopamintoleranz, die Tätigkeiten wie Lesen oder konzentriertes Lernen erschwert.",
          "Bei mehr als zwei Stunden täglichem Kurzvideokonsum sank die Aufmerksamkeitsspanne im Schnitt um 40 %.",
          "Forscher empfehlen feste Zeitlimits und gezielte Nutzungsbarrieren, um die neuronale Regeneration zu fördern."
        ],
        readTime: "5 Min.",
        tags: ["Oxford", "Cambridge", "Neurowissenschaft", "Kurzvideos", "Dopamin", "Fokus"]
      },
      pt: {
        slug: "oxford-cambridge-estudo-videos-curtos-dopamina",
        title: "Estudo de Oxford e Cambridge: vídeos curtos corroem a capacidade de foco e elevam tolerância à dopamina",
        summary: "Pesquisa em neuroimagem de Cambridge e Oxford comprova que o consumo frequente de vídeos com menos de 60 segundos enfraquece o córtex pré-frontal e dificulta tarefas de foco profundo.",
        content: [
          "Pesquisadores de Oxford e Cambridge analisaram exames de 1.800 participantes para avaliar os impactos de formatos como TikTok, Reels e Shorts.",
          "Estímulos imprevisíveis a cada 15 segundos sobrecarregam os receptores de dopamina, gerando impaciência para atividades complexas como ler ou estudar.",
          "O uso diário superior a 2 horas resultou em uma queda média de 40% na capacidade de atenção contínua.",
          "Os cientistas recomendam o estabelecimento de limites temporais rígidos para restaurar a concentração."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neurociência", "Vídeos curtos", "Dopamina", "Foco profundo"]
      },
      it: {
        slug: "oxford-cambridge-studio-video-brevi-dopamina",
        title: "Studio di Oxford e Cambridge: i video brevi erodono la concentrazione e alterano la dopamina",
        summary: "Uno studio di neuroimaging condotto da Oxford e Cambridge dimostra che la fruizione rapida di video sotto i 60 secondi indebolisce le reti di attenzione della corteccia prefrontale.",
        content: [
          "I ricercatori hanno esaminato 1.800 soggetti tramite risonanza magnetica funzionale per verificare l'effetto di TikTok, Reels e Shorts sulla biochimica cerebrale.",
          "Le continue scariche di dopamina ogni pochi secondi assuefanno il sistema di ricompensa, rendendo intollerabili le attività a bassa stimolazione come lo studio.",
          "La ricerca evidenzia un calo del 40% nella capacità di concentrazione prolungata in chi consuma oltre 2 ore di video brevi al giorno.",
          "Gli esperti consigliano di imporre limiti orari precisi e barriere all'accesso per proteggere le funzioni cognitive."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neuroscienze", "Video brevi", "Dopamina", "Concentrazione"]
      },
      ar: {
        slug: "oxford-cambridge-short-form-video-dopamine-study",
        title: "دراسة من أكسفورد وكامبريدج: مقاطع الفيديو القصيرة تضعف التركيز العميق وترفع عتبة الدوبامين",
        summary: "أثبتت دراسة تصوير عصبي أجراها باحثون من جامعتي كامبريدج وأكسفورد أن استهلاك مقاطع الفيديو التي تقل مدتها عن 60 ثانية يضعف شبكات الانتباه في القشرة الجبهية ويزيد من تشتت العقل.",
        content: [
          "أجرى باحثون من أكسفورد وكامبريدج مسحاً بالرنين المغناطيسي لـ 1800 مشارك لفحص تأثير مقاطع تيك توك وريلز وشورتس على كيمياء الدماغ.",
          "وجد الباحثون أن الجرعات السريعة من الدوبامين كل 15 ثانية تصيب نظام المكافأة بالإفراط، مما يخلق صعوبة بالغة في التركيز على القراءة أو العمل الجاد.",
          "سجل المشاركون الذين يشاهدون مقاطع الفيديو القصيرة لأكثر من ساعتين يومياً انخفاضاً بنسبة 40% في قدرتهم على التركيز المتواصل.",
          "أوصى علماء الأعصاب بوضع حدود زمنية حاسمة للتطبيقات لإعادة تنظيم مستويات الانتباه في الدماغ."
        ],
        readTime: "5 دقائق",
        tags: ["أكسفورد", "كامبريدج", "علم الأعصاب", "فيديو قصير", "دوبامين", "تركيز"]
      },
      id: {
        slug: "oxford-cambridge-penelitian-video-pendek-dopamin",
        title: "Penelitian Oxford & Cambridge: Video Berdurasi Pendek Kikis Fokus Mendalam dan Picu Toleransi Dopamin",
        summary: "Penelitian pencitraan otak oleh ilmuwan Cambridge dan Oxford membuktikan bahwa konsumsi video cepat di bawah 60 detik melemahkan jaringan atensi pada korteks prefrontal.",
        content: [
          "Studi fMRI terhadap 1.800 partisipan oleh ilmuwan Oxford dan Cambridge mengungkap dampak biologis format video TikTok, Reels, dan Shorts pada otak.",
          "Stimulasi berulang setiap belasan detik membebani sistem dopamin sehingga menurunkan daya tahan saat membaca atau belajar.",
          "Partisipan yang menonton video pendek lebih dari 2 jam sehari mengalami penurunan rentang konsentrasi rata-rata sebesar 40%.",
          "Peneliti menyarankan penerapan batasan waktu tegas pada aplikasi untuk memulihkan fungsi atensi kognitif."
        ],
        readTime: "5 mnt",
        tags: ["Oxford", "Cambridge", "Neurosains", "Video Pendek", "Dopamin", "Fokus Mendalam"]
      },
      fil: {
        slug: "oxford-cambridge-pag-aaral-maikling-video-at-dopamine",
        title: "Pag-aaral ng Oxford at Cambridge: Ang Maikling Video ay Sumisira sa Malalim na Pokus ng Utak",
        summary: "Ipinakita sa pag-aaral ng mga neuroscientist sa Cambridge at Oxford na ang panonood ng mga video na wala pang 60 segundo ay nagpapahina sa prefrontal cortex at nagdudulot ng dopamine resistance.",
        content: [
          "Sinuri ng mga mananaliksik ang fMRI scans ng 1,800 kalahok upang alamin ang epekto ng TikTok, Reels, at Shorts sa utak.",
          "Ang mabilis na dopamine spikes tuwing ilang segundo ay nagpapahirap sa utak na magpokus sa mga gawaing tulad ng pag-aaral o pagbabasa.",
          "Bumaba ng 40% ang sustained attention span ng mga indibidwal na gumugugol ng higit sa 2 oras sa maiikling video bawat araw.",
          "Inirerekomenda ng mga eksperto ang paglalagay ng mahigpit na limitasyon sa oras ng paggamit ng mga app."
        ],
        readTime: "5 min",
        tags: ["Oxford", "Cambridge", "Neuroscience", "Maikling Video", "Dopamine", "Malalim na Pokus"]
      },
      th: {
        slug: "oxford-cambridge-short-form-video-dopamine-study",
        title: "งานวิจัยจาก Oxford & Cambridge ชี้วิดีโอสั้นบั่นทอนสมาธิขั้นลึกและเพิ่มเกณฑ์ความทนทานต่อโดปามีน",
        summary: "งานวิจัยด้านประสาทวิทยาโดยทีมนักวิจัยจาก Cambridge และ Oxford พิสูจน์ให้เห็นว่าการดูคลิปวิดีโอสั้นต่ำกว่า 60 วินาทีบ่อยครั้ง ส่งผลให้เครือข่ายสมาธิในสมองส่วนหน้าอ่อนแอลง",
        content: [
          "การตรวจสแกนสมองด้วย fMRI ในกลุ่มตัวอย่าง 1,800 คน เผยให้เห็นผลกระทบของคลิปสั้น (TikTok, Reels, Shorts) ต่อชีวเคมีในสมอง",
          "การกระตุ้นโดปามีนซ้ำๆ ทุก 15 วินาทีทำให้ระบบการให้รางวัลของสมองทำงานหนักเกินไป ส่งผลให้หมดความอดทนในการอ่านหนังสือหรือทำงานที่ต้องใช้สมาธิต่อเนื่อง",
          "ผู้ที่ดูวิดีโอสั้นเกินวันละ 2 ชั่วโมงมีช่วงความสนใจลดลงเฉลี่ยถึง 40% และเกิดความล้าทางสมองเร็วขึ้นอย่างชัดเจน",
          "นักประสาทวิทยาแนะนำให้จำกัดเวลาการใช้งานแอปพลิเคชันอย่างเข้มงวดเพื่อฟื้นฟูโครงข่ายสมาธิของสมอง"
        ],
        readTime: "5 นาที",
        tags: ["Oxford", "Cambridge", "ประสาทวิทยา", "วิดีโอสั้น", "โดปามีน", "สมาธิขั้นลึก"]
      }
    }
  }
];

const langs = ['tr', 'en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'id', 'fil', 'th'];

for (const lang of langs) {
  const list = newsArticles.map((article) => {
    const d = article.data[lang];
    const cat = categories[lang][article.catKey];
    return {
      id: article.id,
      slug: d.slug,
      title: d.title,
      summary: d.summary,
      content: d.content,
      source: article.source,
      sourceUrl: article.sourceUrl,
      category: cat,
      date: article.date,
      readTime: d.readTime,
      featured: article.featured,
      tags: d.tags
    };
  });

  const fileName = lang === 'tr' ? 'haberler.json' : `news-${lang}.json`;
  const filePath = path.join(outDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
  console.log(`Generated ${fileName} with ${list.length} articles.`);
}
