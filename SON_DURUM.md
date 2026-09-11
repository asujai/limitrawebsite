# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-09-11)
- **Yapay zekâ görünürlüğü (GEO/AEO) uygulandı (Claude, 11 Eylül 21:20):** her sayfada JSON-LD (Organization/WebSite/SoftwareApplication), ana sayfa cevap bloğu, SSS 27 soru + FAQPage, tr+en 16 yeni ürün sayfası (/fiyatlandirma, /karsilastirma, 5× rakip-alternatifi, /degisiklik-gunlugu), llms.txt yeniden yazıldı + llms-full.txt, robots.txt bot bazlı, nginx AI bot logu, IndexNow anahtarı. Durum tablosu ve kullanıcı eylemleri: `AI_GORUNURLUK.md`.
- **Kanonik ürün adı:** "Limitra App Block" (JSON-LD `alternateName` ile Play başlıkları bağlı). `src/data/schema.ts` tek kaynak (sürüm, fiyat, kısa tanım).
- Web sitesi 11 dilli küresel bir platform olarak kullanıcının Cenuta VPS'inde (`89.252.153.119`) Nginx üzerinden aktiftir.
- Günlük haber otomasyonu (`webierik` sidecar) gece 22:00'ye (`0 22 * * *`) ayarlandı.
- Prompt'a Günlük Yayın Kilidi (Idempotency Guard) eklenerek üst üste haber atılması kalıcı olarak engellendi.
- Haber durum kontrolü ve telafi için `scripts/check-daily-news.ps1` ve `npm run check:news` eklendi.
- Canlı yayında toplam 33 doğrulanmış haber ve makale mevcuttur (en son haber: DSÖ Ergen Raporu, ID: 33).

## Son Yapılan İşlem
- **İşlem:** Günlük haber otomasyonundaki geçmiş aksaklıkların (üst üste atma ve gün atlama) kök nedeni tespit edildi. Sidecar prompt'una `src/data/haberler.json` üzerinden tarih kontrolü yapan Idempotency Guard (Günlük Yayın Kilidi) eklendi; böylece cron hatası veya çift tetiklemede dahi aynı gün 2. haberin üretilmesi engellendi. Kullanıcının saati 22:00'ye (`0 22 * * *`) alması sonrasında zamanlayıcı doğrulandı (bu gece 22:00 TR). Kaçırılan günler için `scripts/check-daily-news.ps1` ve `npm run check:news` eklendi.
- **Model:** Antigravity

## Mimari Not — Çok Dilli Rotalama ve Haber Sistemi
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurulmaz.
- `SECTION_LANGS`: `news` bölümü 11 dilde tam aktiftir (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`). Diğer bölümler (`guides`, `contact`, `legal`) `tr` ve `en` olarak çalışır ve eksik dillerde `resolveUrl` güvenli bir şekilde İngilizce sürüme düşer.
- `buildUrl` yalnızca gerçekten var olan sayfayı döner; `hreflang` etiketleri bu sayede 11 dilde hatasız üretilir.
- Haber slug'ları 11 dilde yerel kelimelerle oluşturulmuştur; ortak `id` alanı üzerinden diller arası kesintisiz eşleşir.

## Doğrulama
- `npm run build` → 432 sayfa, 0 hata.
- `npm run check:links` → "OK - kirik ic baglanti yok."
- Sitemap ↔ üretilen sayfalar tam uyumlu (33 makale, 11 dil, toplam 430 URL).
- Canlı ana sayfa, 11 dil rotası, TR/EN/ES haber sayfaları (yeni eklenen ID 33 dahil: `/haberler/dso-avrupa-raporu-ergenlerde-problemli-sosyal-medya-ve-oyun-bagimliligi-artisi/`, `/en/news/...`, `/es/news/...`), sitemap ve robots dosyası VPS IP'sinden (`89.252.153.119`) 200 döndü (sürüm `20260909-091920`).
- Canlı `/logo.png` → 200 ve 250.139 bayt.
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
- IndexNow Bing site doğrulaması beklemede (anahtar dosyası çekildi, 403 döndü); Bing Webmaster Tools kaydı yapılmadı — 90 günde bingbot yalnız 6 istek. Kullanıcı eylemi: `AI_GORUNURLUK.md` §1.
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) bilgi merkezi, iletişim ve hukuki sayfaların çevirisi henüz eklenmedi. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel, hedef sayfa İngilizce olur.
- `public/og-limitra.png` sosyal paylaşım görseli eski uygulama arayüzünü gösteriyor.
- Cenuta VPS daha önce yüksek yük altında SSH/HTTP yanıtı vermeyi durdurdu ve panelden normal yeniden başlatma gerektirdi. Yeniden başlatma sonrasında düşük yükle kararlı çalıştı; tekrar ederse sağlayıcıya destek kaydı açılmalı veya daha güvenilir bir barındırma katmanı değerlendirilmelidir.

## Yol Haritası / Sıradaki İş
- VPS kararlılığını izlemek; yanıt vermeme durumu tekrar ederse Cenuta destek kaydına saatler, yük değerleri ve ağ kesintisi kanıtlarıyla başvurmak.
- Netlify kopyasını şimdilik acil DNS geri dönüş noktası olarak korumak.
- İhtiyaç halinde `public/og-limitra.png` sosyal paylaşım görselinin (Open Graph) yeni marka kimliğiyle güncellenmesi.
- Yeni günlük haber ve içerik akışının sürdürülmesi.
