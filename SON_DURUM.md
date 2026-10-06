# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra Social + Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.limitra.socialprototype` (Limitra Social, ücretsiz, sitede önde) ve `com.gardiyan.app` (Limitra App Block, çevrimdışı/gizlilik seçeneği)
- **Tasarım sistemi:** Newsreader (başlık) + Manrope (arayüz); kâğıt `#f7f6f2`, mürekkep `#0e1726`, kobalt `#2d5be3`. App Block bölümleri gece paleti (espresso `#12100e` + altın `#d4a55a`). Token'lar `src/styles/global.css`.
- **Fiyat kuralı:** Sitede fiyat rakamı gösterilmez (kullanıcı kararı, 2026-10-03). JSON-LD'deki App Block teklifi (`0.49 USD`) yalnız yapılandırılmış veri ve `check:live` için korunur; Social düğümü ondan sonra gelmelidir.
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).
## Güncel Durum (2026-10-06)
- **Haber 20 Klasöründeki 20 Yeni İçerik 11 Dilde Entegre Edildi (Antigravity, 6 Ekim):**
  - Kullanıcının `haber20/Untitled.md` ("Limitra İçerik Zenginleştirme Planı: 20 Doğrulanmış Haber ve Yazı") çalışması temel alınarak; 10 yeni Dünya Basını haberi (IDs 78-87) ve 10 yeni Ekran Süresi Kontrolü rehberi (IDs 88-97) 11 dilde eşzamanlı olarak üretildi ve yayına alındı.
  - Ekran Süresi Kontrolü rehber havuzu 20'den 30'a genişletildi (`ScreenTimeIndex.astro`, `[slug].astro` filtreleri ve sitemap güncellendi).
  - Toplam 1,499 statik sayfa 0 hata ile derlendi, sitemap 1,497 URL ile yenilendi (`npm run check:links` OK).

## Güncel Durum (2026-10-05)
- **Kaliforniya SB 976 Yasası ile Reşit Olmayanlara Algoritmik Akış ve Gece Bildirim Yasağı Haberi 11 Dilde Yayında (Antigravity, 5 Ekim):**
  - Kaliforniya Valisi Gavin Newsom tarafından onaylanan ve Eyalet Senatörü Nancy Skinner tarafından hazırlanan SB 976 ("Protecting Our Kids from Social Media Addiction Act") yasası detaylandırıldı. Yasa; sosyal medya devlerinin veli onayı olmadan reşit olmayanlara algoritmik tavsiye akışı sunmasını yasaklıyor, kronolojik akışı ve varsayılan gizlilik ayarlarını zorunlu kılıyor, okul saatlerinde (08:00-15:00) ve uyku saatlerinde (00:00-06:00) bildirim gönderilmesini engelliyor.
  - 11 dilde (TR, EN, ES, FR, DE, PT, IT, AR, ID, FIL, TH) eşzamanlı olarak üretildi (ID 77).
  - 1,169 statik sayfa 0 hata ile derlendi, sitemap 1,167 URL ile güncellendi (`npm run check:links` OK).
  - Cloudflare'e yüklendi (Sürüm ID: `6dfc70be-61fa-4da5-ba09-bd9305d4c582`) ve canlıda doğrulandı (`npm run check:live` OK).

## Güncel Durum (2026-10-04)
- **20 Ekran Süresi Kontrolü Rehberi, Ayrı Üst Menü Mimarisi ve Çift Ürünlü CTA Revizyonu (Antigravity, 4 Ekim):**
  - Kullanıcının talebi doğrultusunda "Ekran Süresi Kontrolü" dünya basınından (`/haberler`) tamamen ayrıldı. Üst navigasyon barında (`Navigation.astro`) 11 dilde birinci sınıf ana başlık olarak yerini aldı (`/ekran-suresi-kontrolu` ve `/[lang]/screen-time-control`).
  - Toplam 20 kapsamlı, derinlemesine bilimsel rehber (IDs 57-76) üretilerek 11 dilde eşzamanlı bağlandı (Sabah Kortizolü, Hayalet Titreşim, Siyah-Beyaz ekran, Gloria Mark 23 dakika kuralı, tuvalette telefon, TikTok mikro-ödül kumarhane mimarisi, ergen ekran sözleşmesi, masada telefon Brain Drain, sıkılma ve DMN, UPenn 30 dk klinik deneyi, phubbing, dijital demans, dumbphone minimalist akımı, BJ Fogg davranışsal sürtünme). Yerel sınav terimlerinden kaçınıldı.
  - Asimetrik ve boşluklu CTA alanı kaldırıldı; yerine hem Limitra Social hem de Limitra App Block için yan yana dengeli, boşluksuz ve estetik çift ürünlü kart bileşeni (`DualProductCTA.astro`) entegre edildi.
  - 1,158 sayfa 0 hata ile derlendi, sitemap 1,156 URL ile yenilendi (`npm run check:links` OK).

- **Barındırma Cloudflare'e taşındı (Claude, 4 Ekim akşam):** Cenuta VPS sağlayıcı kaynaklı CPU steal (%55-78) ve günlük 8-91 dk donmalar yüzünden emekliye ayrıldı. Site artık Cloudflare Workers statik varlıklar olarak yayında (`wrangler.jsonc`, proje `limitra`, `limitra.online` + `www` özel alan adı). DNS Porkbun'dan Cloudflare'e geçti (nameserver `cleo`/`kira.ns.cloudflare.com`); e-posta (Porkbun yönlendirme, Resend DKIM/SPF/DMARC) ve Google doğrulama kayıtları korundu. AI bot politikaları üç grupta da "İzin ver", Bot Fight Mode / AI Labyrinth / managed robots.txt kapalı, Always Use HTTPS açık, `www` → kök 301 Redirect Rule. Yeni yayın komutu `npm run deploy` (`deploy:vps` artık buna takma ad). `public/_headers` ve `public/404.html` eklendi. Bekleyen tüm commit'ler (Bilgi Merkezi rehberleri, haberler, mockup'lar) bu yayınla canlıya çıktı.
- **'Ekran Süresi Kontrolü' Yeni Kategorisi ve 6 Kapsamlı Uygulamalı Rehber 11 Dilde Entegre Edildi (Antigravity, 4 Ekim):**
  - Arama motoru ve yapay zekâ sorgu analizine dayanarak kullanıcıların en çok arattığı 6 kritik acı noktası (Instagram Reels/kısa video sonsuz kaydırması, sınav ve akademik odaklanma, çocukların tablet/öfke krizleri, gece intikam ertelemesi, yerleşik dijital dengenin iflası ve gerçekçi dopamin detoksu) için yeni "Ekran Süresi Kontrolü" (*Screen Time Control*) kategorisi açıldı.
  - Yerel sınav isimlerinden (YKS vb.) kaçınılarak global akademik standartlar (finaller, akademik projeler, yeterlilik sınavları) benimsendi.
  - 6 derinlemesine, kanıta dayalı (Skinner değişken oranlı ödül, UT Austin Brain Drain, Stanford Dr. Anna Lembke, Roy Baumeister ego tükenmesi) rehber 11 dilde eşzamanlı olarak üretildi (IDs 57-62).
  - Bilgi Merkezi ana sayfaları (`/bilgi-merkezi` ve `/en/bilgi-merkezi`), üst bölümde bu 6 rehberi öne çıkaran estetik kart ızgarasıyla zenginleştirildi; `NewsIndex.astro` filtre çubuğuna otomatik kategori sekmesi bağlandı.
  - 773 statik sayfa 0 hata ile derlendi, sitemap 771 URL ile yenilendi (`npm run check:links` OK).

- **Telefon Mockup'larına Gerçek Instagram & YouTube Vektör Logoları ve Akış Fotoğrafları Entegre Edildi (Antigravity, 4 Ekim):**
  - Hero ve Canlı Demo telefonlarındaki "I" harfleri resmi Instagram kamera SVG glifleriyle; App Block (Gece) telefonundaki "Y" harfi ise resmi YouTube play SVG ikonuyla değiştirildi.
  - Gönderi alanlarındaki yapay CSS renk gradyanları yerine sitenin tasarım paletine uyumlu, yüksek kaliteli ve optimize hafif (WebP) 6 adet gerçekçi fotoğraf ve profil avatarları bağlandı.
  - Gece bölümündeki YouTube telefonunun arkasına YouTube oynatıcı arayüzü (video küçük resmi, kırmızı ilerleme çubuğu, süre göstergesi ve kanal satırları) yerleştirilip üzerine buzlu cam (`backdrop-filter: blur(12px)`) kilit kartı oturtuldu.
  - "Birlikte hesap verebilirlik" arkadaş kartlarındaki Instagram, TikTok ve YouTube etiketlerinin yanına resmi mini marka SVG ikonları eklendi.
  - 707 sayfa 0 hata ile derlendi (`npm run check:links` OK).

- **Haber Kartı Ayırıcı Çizgisi ve Footer Hiyerarşisi Simetrisi Hizalandı (Antigravity, 4 Ekim):**
  - Haber kartlarının alt ayırıcı çizgisinin (`border-top`) uzun kaynakça metinleri yüzünden farklı yüksekliklere zıplaması sorunu çözüldü.
  - `.news-card .card-footer` `flex-wrap: nowrap; min-height: 52px; margin-top: auto;` ile kilitlendi. `.source-tag` tek satır ve taşma durumunda `text-overflow: ellipsis` ile sınırlandırıldı (`title={item.source}` ile erişilebilirlik korundu), `.read-link` sabitlendi.
  - Yan yana duran tüm kartların ayırıcı çizgileri ve "Oku →" bağlantıları milimetrik olarak aynı yatay doğrultuya hizalandı.
  - 707 sayfa 0 hata ile derlendi (`npm run check:links` OK).

- **Haber Kartı 'Oku' Bağlantısındaki Titreme ve Yazı Kaybolma Hatası Giderildi (Antigravity, 4 Ekim):**
  - Haber kartlarındaki `.read-link` ("Oku") bileşeninde `:hover` esnasında uygulanan dinamik `gap: 0.55rem` ve kart kenarındaki fare sınır osilasyonu giderildi.
  - Metin konumu sabit tutularak sadece ok simgesi GPU ivmeli `translateX(4px)` ile hareketlendirildi, kart sınırına `::after` tamponu eklenerek kesintisiz ve stabil bir hover deneyimi sağlandı.
  - 707 sayfa 0 hata ile derlendi (`npm run check:links` OK).

- **20 Derin Araştırma Makalesi (ID 37-56) ve Çift Ürün Tasarım Entegrasyonu (Antigravity, 4 Ekim):**
  - Kullanıcının ilettiği `Ekran Bağımlılığı Üzerine 20 Araştırma` çalışması temelinde 20 derin araştırma makalesi (Phubbing, Brain Drain, 23 Dakika Kuralı, Yalnızlık Salgını, Silikon Vadisi Paradoksu, Meta Facebook Files, Popcorn Brain, Hayalet Titreşim, Gece Ekranı/Melatonin, Dumbphone Devrimi, Technoference, Dijital Demans, Ekran Apnesi, UPenn 30 Dk Kuralı, İntikam Ertelemesi, Kaygılı Nesil/Haidt, Doomscrolling, Oxford Brain Rot, Text Neck, Hesap Verebilirlik Ortaklığı) 11 dilde eşzamanlı olarak üretildi (IDs 37-56).
  - Sitedeki haber şablonu (`NewsArticle.astro`) ve haber portalı (`NewsIndex.astro`), yeni çift ürün stratejisine (Limitra Social - arkadaşla ortak kilit / Limitra App Block - katı kural ve gizlilik) ve Newsreader/Manrope tipografi sistemine entegre edildi.
  - 707 statik sayfa 0 hata ile derlendi, sitemap 705 URL ile yenilendi (`npm run check:links` OK).

- **JAMA Pediatrics Küresel Şemsiye Derlemesi ve 3 Ekim Haberi (ID 36) (Antigravity, 3 Ekim):**
  - 64 ülkeden 2,8 milyondan fazla çocuğu ve 23 meta-analizi kapsayan dev şemsiye derleme 11 dilde eşzamanlı olarak eklendi. Ekran süresinin akademik başarı, dil gelişimi, dikkat eksikliği ve kaygı ile ilişkisi; ekran süresinin popülasyon düzeyinde değiştirilebilir bir risk faktörü oluşu aktarıldı.
  - 487 statik sayfa 0 hata ile derlendi, sitemap 485 URL ile yenilendi, VPS'e deploy edildi (sürüm `20261003-221728`) ve canlıda doğrulandı (`check:live` OK).

- **Site yeniden tasarımı: iki uygulama (Claude, 3 Ekim):**
  - Ana sayfa baştan yazıldı (`src/components/HomePage.astro`, metinler `src/data/home.ts`, 11 dil). Sıra: Social girişi (canlı sayaç → kilit ekranı animasyonu) → ziyaretçinin kaydırıp kilidi kendisinin tetiklediği demo → Social arkadaş ekranı → Stoacı sözler + ortak çekirdek → App Block "gece" bölümü (Yok defteri + gerçek manifest satırı) → karşılaştırma tablosu → SSS (FAQPage JSON-LD) → haberler + rehberler → son çağrı.
  - Gezinme: Limitra Social / App Block (ana sayfa çapaları) / Haberler / Rehberler / SSS; indirme düğmesi Social'a gider. Alt bilgi iki ürün grubuna ayrıldı, fiyatlandırma bağlantısı kaldırıldı.
  - Görünür tüm `$0.49` ifadeleri kaldırıldı (`product-pages.ts`, `sss.astro`, `en/sss.astro`, `schema.ts` HERO_ANSWER). `/fiyatlandirma` sayfası rakamsız duruyor.
  - JSON-LD: WebSite adı `Limitra`, Organization `sameAs` iki mağaza, yeni `#social-app` düğümü (ücretsiz).

- **Günlük Haber Otomasyon Sınır Düzeltmesi ve 2 Ekim Haberi (ID 35) (Antigravity, 2 Ekim):**
  - Otomasyon sisteminin Windows 8.191 karakter sınırına takılması (`cmd.exe` / `The command line is too long`) kalıcı olarak giderildi: Prompt `scripts/daily-news-instructions.md` dosyasına taşındı, `sidecar.json` ve `scripts/check-daily-news.ps1` dosya referansıyla çalışacak şekilde optimize edildi.
  - Windows Görev Zamanlayıcı'daki `Limitra-Gunluk-Haber-Telafi` görevinin pilde çalışma kısıtı kaldırıldı (`DisallowStartIfOnBatteries=False`) ve kaçırılan görevlerin uyanışta telafisi (`StartWhenAvailable=True`) açıldı.
  - 2 Ekim 2026 haberi (ID 35: Alabama ile TikTok arasında 100 milyon dolarlık uzlaşma; gece 00:00-06:00 curfew'u, 15 dk zorunlu mola ve kozmetik filtrelerin kaldırılması) 11 dilde eşzamanlı olarak eklendi.

- **CleanScan Yeni AdMob Kaydı (Codex, 20 Eylül):** `public/app-ads.txt`, mevcut `pub-7461910973649304` satırı korunarak CleanScan'in yeni AdMob hesabı `pub-6309165378311604` ile genişletildi. HTTP 200, `text/plain` ve yerel/canlı içerik eşleşmesi doğrulandı. AdMob'un eski sonucu tutmaması için `app-ads.txt` Nginx önbelleği ayrıca `no-cache/no-store` yapıldı.
- **app-ads.txt Entegrasyonu ve Canlı Doğrulama (Antigravity, 17 Eylül):** Google AdMob / AdSense reklam doğrulama dosyası `public/app-ads.txt` konumuna yerleştirildi, Nginx `text/plain; charset=utf-8` kuralı tanımlandı, `scripts/check-live.mjs` test aracına eklendi ve canlıya alındı.
- **Yayın Süreci Standartları ve Kalıcı Düzeltmeler Devrede (Antigravity, 12 Eylül):** Claude tarafından hazırlanan `ANTIGRAVITY_YAYIN_SURECI_RAPORU.md` doğrultusunda 5 adımlı Definition of Done (`AGENTS.md`), 7 adımlı otonom yayın akışı (`sidecar.json`), Windows Görev Zamanlayıcı (`Limitra-Gunluk-Haber-Telafi`) ve canlı yoklama sistemi entegre edildi.
- **12 Eylül Haberi (ID 34) 11 Dilde Eklendi:** Avustralya'nın 16 yaş altına sosyal medya yasağı ve teknoloji devlerine 50 milyon dolar ceza öngören Online Safety düzenlemesi tüm dillerde yayınlandı.
- **Mobil deneyim ve fiyat düzeltmeleri canlıda aktif:** Üst bar taşması, $0.49 USD fiyatı, hamburger menü, sticky tablolar ve Lighthouse dokunma hedefleri yayında.
- **Yapay zekâ ve arama görünürlüğü (GEO/AEO) sayfaları devrede:** `/nedir`, `/nasil-calisir`, `/agent-discovery` ve İngilizce karşılıkları aktif.
- **Makine-okunur keşif yüzeyleri:** `public/.well-known/agent-card.json`, `public/llms.txt`, `public/llms-full.txt` ve `public/app-ads.txt` güncel.
- **SEO & Structured Data:** Her sayfada BreadcrumbList ve SoftwareApplication ($0.49 USD Offer) JSON-LD grafı.
- Toplam üretilen sayfa sayısı: 1,499 statik sayfa, 0 hata, kırık iç bağlantı yok.

## Son Yapılan İşlem
- **İşlem:** Haber 20 klasöründeki 20 yeni içerik (IDs 78-97) 11 dilde hazırlanıp entegre edildi, rehber sayısı 30'a çıkarıldı ve canlıya alındı.
- **Model:** Antigravity
- **Sürüm / Deploy ID:** `aba081c5-8762-4a91-8eaf-d2c4fa380bab` (Cloudflare Workers Static Assets)
- **Doğrulama:** `npm run build` (1,499 sayfa / 0 hata), `npm run check:links` (OK), `npm run sitemap` (1,497 URL), `npm run deploy` (989 dosya yüklendi), `npm run check:live` ("Canli site guncel.").
- **Sonraki adım:** Yok.

## Mimari Not — Çok Dilli Rotalama ve Haber Sistemi
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurulmaz.
- `SECTION_LANGS`: `news` ve `screenTimeControl` bölümleri 11 dilde tam aktiftir (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`). Diğer bölümler (`guides`, `contact`, `legal`, `product`) `tr` ve `en` olarak çalışır ve eksik dillerde `resolveUrl` güvenli bir şekilde İngilizce sürüme düşer.
- `buildUrl` yalnızca gerçekten var olan sayfayı döner; `hreflang` etiketleri bu sayede 11 dilde hatasız üretilir.
- Haber ve rehber slug'ları 11 dilde yerel kelimelerle oluşturulmuştur; ortak `id` alanı üzerinden diller arası kesintisiz eşleşir.

## Doğrulama
- `npm run sitemap` → sitemap.xml güncellendi (1,497 URL).
- `npm run build` → 1,499 sayfa, 0 hata.
- `npm run check:links` → "OK - kirik ic baglanti yok."
- `npm run deploy` → Cloudflare sürümü `aba081c5-8762-4a91-8eaf-d2c4fa380bab`.
- `npm run check:live` → "Canli site guncel." (id 97, fiyat ve app-ads.txt doğrulandı).
- `git push origin main` → senkronize.

## Günlük Haber Ekleme İş Akışı
Kullanıcı yeni bir haber veya konu paylaştığında:
1. Haber içeriği araştırılıp resmi/teyitli kaynaklarla detaylandırılır.
2. 11 dilin haber JSON dosyalarına (`src/data/haberler.json` ve `src/data/news-{en,es,fr,de,pt,it,ar,id,fil,th}.json`) aynı ortak `id` ile eklenir (en yeni haber listenin en başına gelir).
3. `public/sitemap.xml` güncellenir (`npm run sitemap`).
4. `npm run build` ile 0 hata doğrulanır.
5. `npm run check:links` ile kırık bağlantı olmadığı teyit edilir.
6. `git commit` ve `git push origin main` ile kaynak kod GitHub'a gönderilir.
7. `npm run deploy` ile site derlenir ve Cloudflare'e yüklenir (çıktıda "Current Version ID"). Geri dönüş: `npx wrangler rollback`.
8. `npm run check:live` ile canlıda HTTP 200 ve fiyat doğrulanır.

## Bilinen Sorunlar
- (Çözüldü 12 Eylül) Yayın süreci açığı: DoD, 7 adımlı sidecar kuralı, Windows Görev Zamanlayıcı yedeği ve canlı doğrulama (`check:live`) ile kalıcı olarak giderildi.
- (Çözüldü 12 Eylül) Mobil üst bar taşması ve TRY fiyat: canlı sürüm `20260912-192034` ile giderildi.
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) bilgi merkezi, iletişim ve hukuki sayfaların çevirisi henüz eklenmedi. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel, hedef sayfa İngilizce olur.
- `public/og-limitra.png` sosyal paylaşım görseli eski uygulama arayüzünü gösteriyor.
- Cenuta VPS artık kullanılmıyor; kullanıcı aboneliği iptal edebilir. Nginx'in AI bot log raporu (`report:bots`) VPS'e bağlıydı; yerine Cloudflare panelindeki AI Crawl Control metrikleri kullanılacak.

## Yol Haritası / Sıradaki İş
- Günlük haber akışının Windows Görev Zamanlayıcı ve sidecar ile izlenmesi.
- `report:bots` betiğini Cloudflare AI Crawl Control verisine uyarlamak ya da emekliye ayırmak.
- Netlify kopyasını şimdilik acil DNS geri dönüş noktası olarak korumak.
- İhtiyaç halinde `public/og-limitra.png` sosyal paylaşım görselinin (Open Graph) yeni marka kimliğiyle güncellenmesi.
- Yeni günlük haber ve içerik akışının sürdürülmesi.
