# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-09-11)
- **Yapay zekâ ve arama görünürlüğü (GEO/AEO) hedefli eklemeler tamamlandı (Antigravity, 11 Eylül 22:15):** Web sitesi sıfırlanmadan mevcut Astro SSG mimarisi korunarak raporda önceliklendirilen kritik sayfalar (`/nedir`, `/nasil-calisir`, `/agent-discovery` ve İngilizce karşılıkları: `/en/what-is-limitra`, `/en/how-it-works`, `/en/agent-discovery`) eklendi.
- **Makine-okunur keşif yüzeyleri:** `public/.well-known/agent-card.json` (A2A uyumlu), `public/llms.txt` ve `public/llms-full.txt` dosyaları güncellendi.
- **SEO & Structured Data:** Her sayfaya otomatik hiyerarşik `BreadcrumbList` JSON-LD şeması eklendi.
- **Dağıtım güvenliği (Deploy hardening):** `scripts/deploy-vps.ps1` betiğine deploy öncesi SSH ile `cat /proc/loadavg` yük kontrolü (load > 3.0 durdurma koruması) ve arka planda hafifletilmiş sürüm temizliği eklendi.
- **Kanonik ürün adı:** "Limitra App Block" (JSON-LD `alternateName` ile Play başlıkları bağlı). `src/data/schema.ts` tek kaynak (sürüm, fiyat, kısa tanım).
- Web sitesi 11 dilli küresel bir platform olarak kullanıcının Cenuta VPS'inde (`89.252.153.119`) Nginx üzerinden aktiftir.
- Toplam üretilen sayfa sayısı: 454 statik sayfa, 0 hata, kırık iç bağlantı yok.

## Son Yapılan İşlem
- **İşlem:** Kullanıcının verdiği Limitra Görünürlük Raporu (`ai-gorunurluk-playbook.md` ve `AI_GORUNURLUK.md`) incelendi. Web sitesini yeniden oluşturmadan mevcut mimari korunarak görünürlüğü artıracak temel eklemeler yapıldı:
  1. `/nedir` ve `/en/what-is-limitra`: Kategori tanımı, hedef kitle pasajları, geleneksel yöntemlerden farklar ve stoacı ilkeler.
  2. `/nasil-calisir` ve `/en/how-it-works`: 4 aşamalı koruma döngüsü, UsageStats uzlaştırması (teknik iddia: ≤10 sn tolerans), izinler ve gizlilik şeffaflık tablosu, teknik SSS.
  3. `/agent-discovery` ve `/en/agent-discovery`: Yapay zeka sistemleri ve otonom ajanlar için doğrulanmış ürün referans fihristi.
  4. `public/.well-known/agent-card.json`: A2A uyumlu ajan kimlik kartı.
  5. `Layout.astro`: Google Rich Results ve AI botları için otomatik BreadcrumbList JSON-LD şeması.
  6. `Footer.astro`: Yeni sayfaların alt menüye ve iç bağlantı ağına entegrasyonu.
  7. `deploy-vps.ps1`: VPS deploy öncesi yük kontrolü ve hafifletilmiş temizleme mekanizması.
- **Model:** Antigravity

## Mimari Not — Çok Dilli Rotalama ve Haber Sistemi
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurulmaz.
- `SECTION_LANGS`: `news` bölümü 11 dilde tam aktiftir (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`). Diğer bölümler (`guides`, `contact`, `legal`, `product`) `tr` ve `en` olarak çalışır ve eksik dillerde `resolveUrl` güvenli bir şekilde İngilizce sürüme düşer.
- `buildUrl` yalnızca gerçekten var olan sayfayı döner; `hreflang` etiketleri bu sayede 11 dilde hatasız üretilir.
- Haber slug'ları 11 dilde yerel kelimelerle oluşturulmuştur; ortak `id` alanı üzerinden diller arası kesintisiz eşleşir.

## Doğrulama
- `npm run build` → 454 sayfa, 0 hata.
- `npm run check:links` → "OK - kirik ic baglanti yok."
- Sitemap ↔ üretilen sayfalar tam uyumlu (452 URL).
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
