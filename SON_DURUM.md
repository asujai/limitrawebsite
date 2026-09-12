# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-09-12)
- **Mobil deneyim ve fiyat düzeltmeleri tamamlandı (Antigravity, 12 Eylül):** `MOBIL_DUZELTME_RAPORU.md` raporundaki 7 bölümün tamamı uygulandı:
  1. Üst bar taşması çözüldü (brand ve badge tek satır, flex-shrink koruması).
  2. Fiyat tüm sitede, JSON-LD şemalarında ve AI manifestolarında ₺29,99'dan $0.49'a (USD) çekildi (`APP_PRICE = '0.49'`).
  3. Mobil menüye hamburger -> X animasyonu, body scroll kilidi (`body.nav-open`), dışarı tıklama / Esc ile kapanma ve tam genişlik indirme butonu eklendi.
  4. Geniş tablolara yapışkan ilk sütun (`position: sticky; left: 0;`), dokunmatik kaydırma ve üst başlık eklendi (RTL uyumlu).
  5. Footer ve ana sayfa buton/linklerine ≥44px dokunma alanları sağlandı.
  6. Haber kartlarındaki küçük tipografiler ≥12.8px (0.8rem) seviyesine çıkarıldı.
  7. Mobilde hero üst boşluğu, görsel taşmaları ve mükerrer lead paragrafı optimize edildi.
- **Yapay zekâ ve arama görünürlüğü (GEO/AEO) sayfaları devrede:** `/nedir`, `/nasil-calisir`, `/agent-discovery` ve İngilizce karşılıkları aktif.
- **Makine-okunur keşif yüzeyleri:** `public/.well-known/agent-card.json`, `public/llms.txt` ve `public/llms-full.txt` güncel ($0.49 fiyatlı).
- **SEO & Structured Data:** Her sayfada BreadcrumbList ve SoftwareApplication ($0.49 USD Offer) JSON-LD grafı.
- Toplam üretilen sayfa sayısı: 454 statik sayfa, 0 hata, kırık iç bağlantı yok.

## Son Yapılan İşlem
- **İşlem:** Claude tarafından hazırlanan `MOBIL_DUZELTME_RAPORU.md` eksiksiz uygulandı. Fiyat kanonik tek kaynak üzerinden $0.49 USD yapıldı; Navigation taşmaları, mobil menü davranışı, dokunma hedefleri, tablolar ve hero mobil görünümü optimize edildi.
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
- Canlı ana sayfa, 11 dil rotası, TR/EN/ES haber sayfaları, yeni eklenen ürün sayfaları (`/nedir/`, `/nasil-calisir/`, `/agent-discovery/`, `/fiyatlandirma/`, `/en/what-is-limitra/`, `/en/how-it-works/`), `.well-known/agent-card.json`, `llms.txt`, sitemap ve robots dosyaları VPS'te 200 ile doğrulandı (canlı sürüm `20260911-221400`). Sunucu yük ortalaması 0.43 ile kararlı.
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
- **Yayın süreci açığı (12 Eylül):** Antigravity görevleri commit'leyip deploy'u atlıyor; sidecar 7/8/10/11/12 Eylül haberlerini üretmedi. Teşhis ve düzeltme planı: `ANTIGRAVITY_YAYIN_SURECI_RAPORU.md`. Her görev sonunda `npm run check:live` zorunlu.
- (Çözüldü 12 Eylül) Mobil üst bar taşması ve TRY fiyat: canlı sürüm `20260912-192034` ile giderildi.
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) bilgi merkezi, iletişim ve hukuki sayfaların çevirisi henüz eklenmedi. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel, hedef sayfa İngilizce olur.
- `public/og-limitra.png` sosyal paylaşım görseli eski uygulama arayüzünü gösteriyor.
- Cenuta VPS daha önce yüksek yük altında SSH/HTTP yanıtı vermeyi durdurdu ve panelden normal yeniden başlatma gerektirdi. Yeniden başlatma sonrasında düşük yükle kararlı çalıştı; tekrar ederse sağlayıcıya destek kaydı açılmalı veya daha güvenilir bir barındırma katmanı değerlendirilmelidir.

## Yol Haritası / Sıradaki İş
- **Öncelik 0 (Antigravity):** `ANTIGRAVITY_YAYIN_SURECI_RAPORU.md` §3.5 — push, bugünün haberi + deploy + check:live; ardından §3.1-3.4.
- Doğrulanan mobil ve fiyat düzeltmelerinin canlı VPS ortamına dağıtılması (`npm run deploy:vps`).
- VPS kararlılığını izlemek; yanıt vermeme durumu tekrar ederse Cenuta destek kaydına saatler, yük değerleri ve ağ kesintisi kanıtlarıyla başvurmak.
- Netlify kopyasını şimdilik acil DNS geri dönüş noktası olarak korumak.
- İhtiyaç halinde `public/og-limitra.png` sosyal paylaşım görselinin (Open Graph) yeni marka kimliğiyle güncellenmesi.
- Yeni günlük haber ve içerik akışının sürdürülmesi.
