# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-09-20)
- **CleanScan Yeni AdMob Kaydı (Codex, 20 Eylül):** `public/app-ads.txt`, mevcut `pub-7461910973649304` satırı korunarak CleanScan'in yeni AdMob hesabı `pub-6309165378311604` ile genişletildi. HTTP 200, `text/plain` ve yerel/canlı içerik eşleşmesi doğrulandı. AdMob'un eski sonucu tutmaması için `app-ads.txt` Nginx önbelleği ayrıca `no-cache/no-store` yapıldı.
- **app-ads.txt Entegrasyonu ve Canlı Doğrulama (Antigravity, 17 Eylül):** Google AdMob / AdSense reklam doğrulama dosyası `public/app-ads.txt` konumuna yerleştirildi, Nginx `text/plain; charset=utf-8` kuralı tanımlandı, `scripts/check-live.mjs` test aracına eklendi ve canlıya alındı.
- **Yayın Süreci Standartları ve Kalıcı Düzeltmeler Devrede (Antigravity, 12 Eylül):** Claude tarafından hazırlanan `ANTIGRAVITY_YAYIN_SURECI_RAPORU.md` doğrultusunda 5 adımlı Definition of Done (`AGENTS.md`), 7 adımlı otonom yayın akışı (`sidecar.json`), Windows Görev Zamanlayıcı (`Limitra-Gunluk-Haber-Telafi`) ve canlı yoklama sistemi entegre edildi.
- **12 Eylül Haberi (ID 34) 11 Dilde Eklendi:** Avustralya'nın 16 yaş altına sosyal medya yasağı ve teknoloji devlerine 50 milyon dolar ceza öngören Online Safety düzenlemesi tüm dillerde yayınlandı.
- **Mobil deneyim ve fiyat düzeltmeleri canlıda aktif:** Üst bar taşması, $0.49 USD fiyatı, hamburger menü, sticky tablolar ve Lighthouse dokunma hedefleri yayında.
- **Yapay zekâ ve arama görünürlüğü (GEO/AEO) sayfaları devrede:** `/nedir`, `/nasil-calisir`, `/agent-discovery` ve İngilizce karşılıkları aktif.
- **Makine-okunur keşif yüzeyleri:** `public/.well-known/agent-card.json`, `public/llms.txt`, `public/llms-full.txt` ve `public/app-ads.txt` güncel.
- **SEO & Structured Data:** Her sayfada BreadcrumbList ve SoftwareApplication ($0.49 USD Offer) JSON-LD grafı.
- Toplam üretilen sayfa sayısı: 465 statik sayfa, 0 hata, kırık iç bağlantı yok.

## Son Yapılan İşlem
- **İşlem:** CleanScan'in yeni AdMob yayıncı kimliği `pub-6309165378311604`, mevcut `pub-7461910973649304` kaydı korunarak `public/app-ads.txt` dosyasına eklendi; GitHub ve VPS'e yayınlandı. İki uygulama/hesap aynı geliştirici alan adında güvenle doğrulanabilecek.
- **Model:** Codex

## Mimari Not — Çok Dilli Rotalama ve Haber Sistemi
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurulmaz.
- `SECTION_LANGS`: `news` bölümü 11 dilde tam aktiftir (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`). Diğer bölümler (`guides`, `contact`, `legal`, `product`) `tr` ve `en` olarak çalışır ve eksik dillerde `resolveUrl` güvenli bir şekilde İngilizce sürüme düşer.
- `buildUrl` yalnızca gerçekten var olan sayfayı döner; `hreflang` etiketleri bu sayede 11 dilde hatasız üretilir.
- Haber slug'ları 11 dilde yerel kelimelerle oluşturulmuştur; ortak `id` alanı üzerinden diller arası kesintisiz eşleşir.

## Doğrulama
- `npm run build` → 465 sayfa, 0 hata (`dist/app-ads.txt` iki Google `DIRECT` kaydı içeriyor).
- `npm run check:links` → "OK - kirik ic baglanti yok."
- Sitemap ↔ üretilen sayfalar tam uyumlu (463 URL).
- `git push origin main` → senkronize.
- `npm run deploy:vps` → VPS atomik yayın (sürüm `20260917-000258`).
- `npm run deploy:vps` → `Yayin tamamlandi`, son sürüm `20260920-230834`.
- `npm run check:live` → canlı site güncel; app-ads.txt HTTP 200/text/plain, `no-cache/no-store` ve iki kayıtla eşleşiyor.

## Günlük Haber Ekleme İş Akışı
Kullanıcı yeni bir haber veya konu paylaştığında:
1. Haber içeriği araştırılıp resmi/teyitli kaynaklarla detaylandırılır.
2. 11 dilin haber JSON dosyalarına (`src/data/haberler.json` ve `src/data/news-{en,es,fr,de,pt,it,ar,id,fil,th}.json`) aynı ortak `id` ile eklenir (en yeni haber listenin en başına gelir).
3. `public/sitemap.xml` güncellenir (`npm run sitemap`).
4. `npm run build` ile 0 hata doğrulanır.
5. `npm run check:links` ile kırık bağlantı olmadığı teyit edilir.
6. `git commit` ve `git push origin main` ile kaynak kod GitHub'a gönderilir.
7. `npm run deploy:vps` ile derleme ve bağlantı kontrolü yeniden çalıştırılır; çıktı VPS'e atomik biçimde gönderilir ve son 5 sürüm geri dönüş için korunur.
8. `npm run check:live` ile canlıda HTTP 200 ve fiyat doğrulanır.

## Bilinen Sorunlar
- (Çözüldü 12 Eylül) Yayın süreci açığı: DoD, 7 adımlı sidecar kuralı, Windows Görev Zamanlayıcı yedeği ve canlı doğrulama (`check:live`) ile kalıcı olarak giderildi.
- (Çözüldü 12 Eylül) Mobil üst bar taşması ve TRY fiyat: canlı sürüm `20260912-192034` ile giderildi.
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) bilgi merkezi, iletişim ve hukuki sayfaların çevirisi henüz eklenmedi. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel, hedef sayfa İngilizce olur.
- `public/og-limitra.png` sosyal paylaşım görseli eski uygulama arayüzünü gösteriyor.
- Cenuta VPS daha önce yüksek yük altında SSH/HTTP yanıtı vermeyi durdurdu ve panelden normal yeniden başlatma gerektirdi. Yeniden başlatma sonrasında düşük yükle kararlı çalıştı; tekrar ederse sağlayıcıya destek kaydı açılmalı veya daha güvenilir bir barındırma katmanı değerlendirilmelidir.

## Yol Haritası / Sıradaki İş
- Günlük haber akışının Windows Görev Zamanlayıcı ve sidecar ile izlenmesi.
- VPS kararlılığını izlemek; yanıt vermeme durumu tekrar ederse Cenuta destek kaydına saatler, yük değerleri ve ağ kesintisi kanıtlarıyla başvurmak.
- Netlify kopyasını şimdilik acil DNS geri dönüş noktası olarak korumak.
- İhtiyaç halinde `public/og-limitra.png` sosyal paylaşım görselinin (Open Graph) yeni marka kimliğiyle güncellenmesi.
- Yeni günlük haber ve içerik akışının sürdürülmesi.
