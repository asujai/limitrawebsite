# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-09-05)
- Web sitesi 11 dilli küresel bir platform olarak kullanıcının Cenuta VPS'inde (`89.252.153.119`) Nginx üzerinden aktiftir. Netlify artık canlı yayın bağımlılığı değildir; yalnızca geri dönüş kopyası olarak korunmaktadır.
- Porkbun DNS kayıtları `limitra.online` ve `www.limitra.online` için VPS IP'sine yönlendirilmiştir. `www` ve HTTP istekleri canonical `https://limitra.online` adresine 301 ile gider.
- Let's Encrypt sertifikası `limitra.online` ve `www.limitra.online` alanlarını kapsar; 28 Kasım 2026 tarihine kadar geçerlidir ve Certbot tarafından yenilenebilir.
- Play Console ile birebir senkronize yeni 512×512 PNG Limitra ikonu (`public/logo.png`) kaynak kodda ve canlı sitede tüm alanlara uygulanmıştır.
- Haber portalı ve arşivi 11 dilde (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`) toplam **27 doğrulanmış haber ve makaleyle** yayındadır (yeni eklenen: Norveç'ten Tarihi Adım: Sosyal Medya Yaş Sınırı 16'ya Çıkıyor, Algoritmaların Çocukluk Üzerindeki Egemenliğine Son Veriliyor, ID: 27).
- `npm run build` ile 366 statik sayfa 0 hata ile derlendi.
- `npm run check:links` ile tüm iç bağlantılar doğrulandı.

## Son Yapılan İşlem
- **İşlem:** Norveç Başbakanı Jonas Gahr Støre hükümeti ve Çocuk ve Aile Bakanlığı tarafından büyük teknoloji şirketlerinin bağımlılık mimarisine ve algoritmalarına karşı sosyal medyada asgari yaş sınırını 16'ya yükselten, akran baskısını önlemek için yaş sınırını takvim yılına bağlayan, Kişisel Veriler Yasası ile 16 yaş altındakilerin ticari profillenmesini ve algoritmik manipülasyonunu yasaklayan tarihi yasa tasarısı 11 dilde (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`) ID: 27 olarak eklendi. `scripts/generate-sitemap.mjs` ve `public/sitemap.xml` güncellendi, 366 statik sayfa 0 hata ile derlendi, tüm iç bağlantılar test edildi ve VPS yayınına hazırlandı.
- **Model:** Antigravity

## Mimari Not — Çok Dilli Rotalama ve Haber Sistemi
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurulmaz.
- `SECTION_LANGS`: `news` bölümü 11 dilde tam aktiftir (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`). Diğer bölümler (`guides`, `contact`, `legal`) `tr` ve `en` olarak çalışır ve eksik dillerde `resolveUrl` güvenli bir şekilde İngilizce sürüme düşer.
- `buildUrl` yalnızca gerçekten var olan sayfayı döner; `hreflang` etiketleri bu sayede 11 dilde hatasız üretilir.
- Haber slug'ları 11 dilde yerel kelimelerle oluşturulmuştur; ortak `id` alanı üzerinden diller arası kesintisiz eşleşir.

## Doğrulama
- `npm run build` → 366 sayfa, 0 hata.
- `npm run check:links` → "OK - kirik ic baglanti yok."
- Sitemap ↔ üretilen sayfalar tam uyumlu.
- Canlı ana sayfa, 11 dil rotası, TR/EN haber sayfaları, sitemap ve robots dosyası VPS IP'sinden 200 döndü.
- Canlı `/logo.png` → 200 ve 250.139 bayt; ana sayfada `/logo.png` 6 kez, `/logo.jpg` 0 kez kullanılıyor.
- HTTP → HTTPS ve `www` → apex yönlendirmeleri 301 ile doğrulandı.
- TLS sertifikası Let's Encrypt tarafından verildi; CN `limitra.online`, son geçerlilik 28 Kasım 2026.
- Mevcut `https://muhasebe.limitra.online` sitesi geçiş sonrasında 200 döndü.
- Porkbun yetkili DNS'i ile 1.1.1.1, 8.8.8.8 ve 9.9.9.9 çözümleyicileri apex ve `www` için `89.252.153.119` adresini döndürdü.

## Günlük Haber Ekleme İş Akışı
Kullanıcı yeni bir haber veya konu paylaştığında:
1. Haber içeriği araştırılıp resmi/teyitli kaynaklarla detaylandırılır.
2. 11 dilin haber JSON dosyalarına (`src/data/haberler.json` ve `src/data/news-{en,es,fr,de,pt,it,ar,id,fil,th}.json`) aynı ortak `id` ile eklenir (en yeni haber listenin en başına gelir).
3. `public/sitemap.xml` güncellenir.
4. `npm run build` ile 0 hata doğrulanır.
5. `npm run check:links` ile kırık bağlantı olmadığı teyit edilir.
6. `git push origin main` ile kaynak kod GitHub'a gönderilir.
7. `npm run deploy:vps` ile derleme ve bağlantı kontrolü yeniden çalıştırılır; çıktı VPS'e atomik biçimde gönderilir ve son 5 sürüm geri dönüş için korunur.

## Bilinen Sorunlar
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) bilgi merkezi, iletişim ve hukuki sayfaların çevirisi henüz eklenmedi. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel, hedef sayfa İngilizce olur.
- `public/og-limitra.png` sosyal paylaşım görseli eski uygulama arayüzünü gösteriyor.
- Cenuta VPS daha önce yüksek yük altında SSH/HTTP yanıtı vermeyi durdurdu ve panelden normal yeniden başlatma gerektirdi. Yeniden başlatma sonrasında düşük yükle kararlı çalıştı; tekrar ederse sağlayıcıya destek kaydı açılmalı veya daha güvenilir bir barındırma katmanı değerlendirilmelidir.

## Yol Haritası / Sıradaki İş
- VPS kararlılığını izlemek; yanıt vermeme durumu tekrar ederse Cenuta destek kaydına saatler, yük değerleri ve ağ kesintisi kanıtlarıyla başvurmak.
- Netlify kopyasını şimdilik acil DNS geri dönüş noktası olarak korumak.
- İhtiyaç halinde `public/og-limitra.png` sosyal paylaşım görselinin (Open Graph) yeni marka kimliğiyle güncellenmesi.
- Yeni günlük haber ve içerik akışının sürdürülmesi.
