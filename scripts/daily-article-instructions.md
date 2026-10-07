# Limitra Günlük Makale, Rehber ve Bilimsel Çözüm Üretim Yönergeleri

Limitra web sitesinin rehber ve makaleler bölümünü günlük olarak güncelle.

## GÜNLÜK YAYIN KİLİDİ (KESİNLİKLE İLK ADIMDA KONTROL ET)
İşleme başlamadan önce İLK OLARAK `src/data/haberler.json` dosyasını oku.
- Bugünün tarihi ile `category: "Ekran Süresi Kontrolü"` veya `category: "Bilim & Sağlık"` olan son makalenin tarihi aynıysa (yani bugün için zaten bir makale/rehber yayınlanmışsa):
  KESİNLİKLE yeni bir makale üretme, dosyaları değiştirme, build alma, commit atma ve deploy yapma.
  "Bugünün makalesi zaten mevcut olduğu için yeni içerik üretilmedi." diyerek görevi hemen başarıyla sonlandır. Makale yoksa veya atlandıysa bile bu oturumun sonucunu (üretildi / atlandı / hata) tek satırla `ISLEM_GECMISI.md`'ye yaz.
- Yalnızca bugünün tarihiyle eşleşen bir makale/rehber henüz yoksa yeni içerik hazırlama sürecine devam et.

## ÖNCE PROJEYİ İNCELE
Her çalışmada önce mevcut projeyi ve https://limitra.online/ sitesinin yapısını incele:
- Limitra ekosisteminin iki ürününü anla:
  1. **Limitra Social** (`com.limitra.socialprototype`): Ücretsiz, UID ile arkadaş ekleyip karşılıklı limit ve kullanım sürelerini şeffaf görme (akran sorumluluğu) sağlayan uygulama.
  2. **Limitra App Block** (`com.gardiyan.app`): Seçilen uygulamalara süre limiti ve saat aralığına göre engelleme, uygulama içi zaman çizelgesi kaydı ve tamamen çevrimdışı gizlilik sağlayan minimalist uygulama.
- Mevcut makale yapısını (`src/data/haberler.json` ve 10 yerel dil dosyası `news-*.json`), kategorileri, URL/slug düzenini ve içerik formatını koru.
- Projede aktif olarak desteklenen 11 dili/i18n locale'lerini tespit et (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`).
- Daha önce yayınlanan tüm içerikleri (`id`, `title`, `slug`) kontrol et ve işlenmiş bir konuyu veya çok benzer bir çalışmayı tekrar yazma.

## İÇERİK TEMASI VE KAYNAK HAVUZU
Her gün Limitra'nın problem alanıyla (ekran bağımlılığı, dikkat dağınıklığı, erteleme, dopamin yorgunluğu, dijital ebeveynlik) doğrudan ilişkili, okuyucuya **somut bir çözüm, düşünsel derinlik veya kanıtlanmış bir protokol** sunan 1 adet yeni makale hazırla.

Uygun İçerik Türleri:
1. **Çözüm Protokolü / Pratik Kılavuz:**
   - Örn. BJ Fogg davranış modeli (Tetikleyici, Motivasyon, Beceri / Sürtünme), Roy Baumeister ego tükenmesi ve karar yorgunluğu, Gloria Mark 23 dakika dikkat bölünmesi kuralı, Pomodoro ve ultradian ritimler, dopamin orucu / dopamin sıfırlama protokolü.
2. **Bilimsel Araştırma ve Laboratuvar Bulgusu:**
   - Örn. UT Austin "Brain Drain" (telefonun masada ters durması bile bilişsel kapasiteyi düşürür), UPenn 30 dakika sosyal medya kısıtlama klinik deneyi, JAMA Pediatrics ekran süresi meta-analizleri, fMRI ile kanıtlanmış dikkat ağı (DMN - Default Mode Network) değişimleri.
3. **Saygın Kitaplardan Çözüm ve Analizler:**
   - Cal Newport (*Deep Work*, *Digital Minimalism*), Dr. Anna Lembke (*Dopamine Nation*), Jonathan Haidt (*The Anxious Generation*), James Clear (*Atomic Habits*), Johann Hari (*Stolen Focus*), Matthew Walker (*Why We Sleep*), Nir Eyal (*Indistractable*), Sherry Turkle (*Alone Together*), Chris Bailey (*Hyperfocus*).
4. **Gerçek Hayat Hikayeleri ve Vaka İncelemeleri:**
   - Silikon Vadisi mühendislerinin kendi evlerinde ekran yasağı koyması (Steve Jobs, Bill Gates, Chamath Palihapitiya), dumbphone (akılsız telefon) hareketine geçen profesyonellerin dönüşümü, sosyal medyayı 30 gün bırakan gençlerin anksiyete ve uyku metriklerindeki somut değişimler.
5. **Stoacı ve Klasik Felsefe ile Modern Nörobilim Kesişimi:**
   - Epiktetos ve Marcus Aurelius'un dikkat ve irade prensiplerinin modern algoritmik tuzaklara karşı nasıl zihinsel direnç oluşturduğu.

## DOĞRULUK KURALLARI — KESİNLİKLE İHLAL ETME
Yayınlanan hiçbir bilgi tahmin, kurgu veya uydurma olamaz.

Kesinlikle:
- Uydurma alıntı, hayali yazar/uzman veya sahte kitap ismi üretme.
- Gerçekleşmemiş bir deneyi veya araştırmayı olmuş gibi yazma.
- Bir araştırmanın örneklem büyüklüğünü veya bulgusunu abartma; korelasyonu mutlak nedensellik gibi gösterme.
- İstatistik, yıl, oran, yüzde veya kişi sayısı uydurma.
- Tıbbi kesin tanı ve tedavi vaadinde bulunma; psikiyatri ve nöroloji literatürünün sınırlarını koru.
- Limitra hakkında abartılı, mucizevi veya kanıtlanamayacak sağlık iddialarında bulunma.
- Tıklama tuzağı (clickbait) başlık kullanma.

Bir bilgi güvenilir akademik veya editoryal kaynaklarla doğrulanamıyorsa o bilgiyi KULLANMA.

## İÇERİK KALİTESİ VE FORMAT
- **Uzunluk ve Derinlik:** Yüzeysel genel tavsiyeler ("az telefona bakın") kesinlikle yasaktır. Mekanizmayı (nörobiyolojik veya psikolojik neden), araştırmayı (yazar, yıl, kurum) ve uygulanabilir adım adım protokolü içeren zengin 4-6 paragraflık derinlikli bir metin yaz.
- **Limitra Entegrasyonu:** Atıf için LİMİTRA'YA ATIF KURALLARI bölümüne uy.
- **Kategori:** Pratik rehberler `Ekran Süresi Kontrolü` (screen) kategorisine girer ve rehber bölümünde otomatik görünür; genel bilimsel analizler `Bilim & Sağlık` (science) kategorisinde yer alır.
- **ID Belirleme:** `src/data/haberler.json` içindeki en büyük sayısal ID'yi bul ve `+1` vererek string olarak ata.
- **Slug:** Kısa, temiz, Türkçe karakter içermeyen SEO dostu slug (örn. `cal-newport-dijital-minimalizm-30-gun-protokolu`).

## LİMİTRA'YA ATIF KURALLARI
- Uygulama özellikleri yalnız `scripts/limitra-ozellikler.md` dosyasından alınır. Orada olmayan özellik yazılmaz; "Yazılmayacaklar" listesine uyulur.
- Atıf metnin son paragrafında, 1–2 sakin cümleyle yapılır. Yalnız konuya en uygun TEK uygulama ve TEK özellik anılır. İki uygulamayı birlikte zorla anmak yasaktır.
- Atıf, metinde anlatılan sorunun somut bir adımına bağlanır (örn. gece kaydırma → saat aralığına göre engelleme; ebeveyn takibi → uygulama içi kayıt ekranı; arkadaşla hedef → Social'da arkadaşın limitini görme).
- Yasak kelime ve kalıplar: aşılmaz, kırılamaz, tavizsiz, zırh, kalkan, "cebinize getirir", "insafına bırakmayın", "ekosistem", "%100", ünlem ve emir yağmuru. Sağlık, tedavi ve başarı oranı iddiası yasaktır.
- Haberlerde (yasa, dava, rapor) ton daha da hafiftir. Örnek: "Benzer bir sınırı kendi telefonunda kurmak isteyenler için Limitra App Block, seçtiğin uygulamalara belirli saatlerde erişimi kapatmayı sağlıyor."
- Konuyla doğal bir bağ kurulamıyorsa uygulama anılmaz. Sayfanın altındaki ürün kutusu tanıtımı zaten yapıyor.
- Atıf cümlesi her dilde yerel ve doğal yazılır. Uygulama adları çevrilmez: "Limitra App Block", "Limitra Social".

## ÇEVİRİLER (11 DİL EŞZAMANLI)
Ana içerik hazırlandıktan sonra projede desteklenen 11 dile eksiksiz çevir:
Her dilde `content` o dile tamamen çevrilir; İngilizce gövdeyle yetinmek yasaktır.
- Türkçe (`src/data/haberler.json`)
- İngilizce (`src/data/news-en.json`)
- İspanyolca (`src/data/news-es.json`)
- Fransızca (`src/data/news-fr.json`)
- Almanca (`src/data/news-de.json`)
- Portekizce (`src/data/news-pt.json`)
- İtalyanca (`src/data/news-it.json`)
- Arapça (`src/data/news-ar.json` - RTL)
- Endonezce (`src/data/news-id.json`)
- Filipince (`src/data/news-fil.json`)
- Tayca (`src/data/news-th.json`)

Tüm dillerde:
- `id`, `date`, `source`, `sourceUrl` birebir aynı kalmalıdır.
- `title`, `summary`, `content`, `slug`, `category`, `readTime`, `tags` o dile doğal ve akıcı şekilde yerelleştirilmelidir.

## TEKNİK UYGULAMA VE YAYIN (ZORUNLU, SIRAYLA)
1. `npm run build` (0 hata ile tamamlanmalı)
2. `npm run check:links` (Kırık iç bağlantı olmamalı)
3. `npm run check:lang` (0 sorun olmadan devam yok)
4. `npm run sitemap` (Site haritası yeni içerikle güncellenmeli)
5. `git add -A && git commit -m "[antigravity] feat: <makale başlığı> (ID <n>)" && git push origin main`
6. `npm run deploy` (Cloudflare Workers Static Assets yayını, Current Version ID alınmalı)
7. `npm run check:live` ("Canli site guncel." çıktısı ve canlıda 200 HTTP kodu görülmeli)
8. `ISLEM_GECMISI.md` ve `SON_DURUM.md` güncellenmeli.
