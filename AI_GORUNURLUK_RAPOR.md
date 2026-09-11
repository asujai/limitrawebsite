# Web Sitesi Değişiklik Raporu — AI Görünürlük Çalışması (11 Eylül 2026)

Bu rapor, `gardiyan2` oturumundan web sitesi reposuna (`C:\Users\abdul\lmitraweb`) yapılan değişiklikleri tam olarak listeler. Web sitesi projesinde açılacak oturumun buradan devam etmesi için yazıldı.

## 0. Olay özeti ve mevcut durum

| Saat (TR) | Olay |
|---|---|
| 20:55 | `npm run build` 448 sayfa, 0 hata; `check:links` OK (yerelde) |
| 21:02 | Commit `4a12f27` (kod), push edildi |
| 21:03 | İlk deploy denemesi: paket yüklendi, nginx conf scp adımı Windows ters bölü hatasıyla düştü; **sunucu load 14,5** (bu sırada henüz hiçbir şey değişmemişti) |
| 21:08 | İkinci deploy: sürüm `20260911-210843` yayına alındı, nginx conf değişti, `nginx -t` OK |
| 21:09–21:12 | Canlı doğrulama: tüm yeni sayfalar 200, bot UA'ları 200 (ana sayfa 9,7 sn — yavaş) |
| 21:20 | Commit `1b4a715` (dokümanlar), push edildi |
| 21:28 | SSH ile bakıldı: load 13,7 ama **CPU %99 boşta, iowait 0, D-state süreç yok, trafik dakikada 2-5 istek** |
| 21:30+ | Site ve SSH tamamen yanıtsız. **Aynı VPS'teki `muhasebe.limitra.online` de yanıtsız.** Ping cevap veriyor (100-600 ms jitter), TCP bağlantısı kurulmuyor |
| 21:33 | Arka plana "SSH dönünce önceki sürüme geri al + eski nginx conf'u geri yükle" betiği kondu |

**Yorum:** Belirti (tüm VPS'in aynı anda yanıtsız kalması, ping var/TCP yok, süreç yükü yokken load 14) `SON_DURUM.md`'de daha önce kayıtlı Cenuta VPS donmasıyla aynı. nginx conf değişikliği (`if` + `access_log if=`) veya statik HTML sayfaları bir makineyi kilitleyemez; ancak deploy (tar açma + eski sürüm silme, 1 vCPU'da) donmayı tetiklemiş olabilir — kanıtlayamıyorum, zaman çakışması var. **Çözüm: Cenuta paneli → VPS yeniden başlat.** Ayağa kalkınca betik siteyi `20260909-091920` sürümüne (deploy öncesi) geri alacak.

**Geri alma sonrası site = 11 Eylül 21:08 öncesiyle birebir aynı** (eski nginx conf dahil).

## 1. Repo'da kalan değişiklikler (commit'ler GitHub'a push edildi)

Kod repoda duruyor; canlıda değil. Web sitesi oturumu şu iki yoldan birini seçmeli:
- **A) Devam:** Değişiklikleri incele, VPS stabil olunca yeniden deploy et.
- **B) Geri al:** `git revert 1b4a715 4a12f27` (iki commit) — repo da eski haline döner.

### Commit `4a12f27` — kod (34 dosya)

**Yeni dosyalar**
| Dosya | Ne |
|---|---|
| `src/data/schema.ts` | Tek kaynak: SITE_URL, STORE_URL, sürüm 1.2.1, fiyat ₺29,99, kısa tanım (tr/en), ana sayfa cevap paragrafı, JSON-LD grafı (`baseGraph`) |
| `src/data/product-pages.ts` | Fiyatlandırma, karşılaştırma tablosu, 5 rakip alternatifi ve değişiklik günlüğü içerikleri (tr+en) |
| `src/components/ProductPage.astro` | Ürün sayfaları için ortak iskelet (H1 + cevap paragrafı + tablo stilleri). **Not:** `<style is:global>` kullanır; `.article-page/.article-body` sınıfları gizlilik/kullanım sayfalarıyla çakışır — o sayfalarda görsel kayma olup olmadığı kontrol edilmeli |
| `src/components/PricingPage.astro`, `ComparePage.astro`, `AlternativePage.astro`, `ChangelogPage.astro` | Sayfa bileşenleri |
| `src/pages/fiyatlandirma.astro`, `karsilastirma.astro`, `degisiklik-gunlugu.astro`, `[rakip]-alternatifi.astro` | TR rotalar (rakip: stayfree, appblock, yourhour, digital-wellbeing, forest) |
| `src/pages/en/pricing.astro`, `compare.astro`, `changelog.astro`, `[rival]-alternative.astro` | EN rotalar |
| `public/llms-full.txt` | ~3.500 kelimelik tam ürün bağlamı (tr+en) |
| `public/af08a9126d05005c92660ae5e9a0e707.txt`, `.indexnow-key` | IndexNow anahtarı (herkese açık olması normal) |
| `scripts/indexnow.mjs` | Sitemap URL'lerini IndexNow'a gönderir (`npm run indexnow`) — şu an 403: Bing site doğrulaması beklemede |
| `scripts/ai-bot-report.ps1` | VPS'teki AI bot logunu özetler (`npm run report:bots`) |
| `scripts/gorunurluk.py` | Haftalık AI cevap motoru ölçümü; API anahtarı yok, çalışmıyor |

**Değiştirilen dosyalar**
| Dosya | Değişiklik |
|---|---|
| `src/layouts/Layout.astro` | `jsonLd?: object\|object[]` prop'u; her sayfada `<script type="application/ld+json">` ile Organization + WebSite + SoftwareApplication grafı |
| `src/components/HomePage.astro` | H1 altına `<p class="hero-answer">` (yalnız tr/en; `HERO_ANSWER`) + 1 satır CSS |
| `src/components/Footer.astro` | "Ürün" grubuna Fiyatlandırma / Karşılaştırma / Değişiklik günlüğü linkleri |
| `src/data/routes.ts` | `SECTION_LANGS.product`, `ALTERNATIVE_SLUGS`, PageKey'e `pricing/compare/changelog/alternative`, `parsePath`/`buildUrl`/`routes` genişletildi (hreflang bu sayede otomatik) |
| `src/pages/sss.astro`, `src/pages/en/sss.astro` | 12 → 27 soru; FAQPage JSON-LD gövdeden `Layout jsonLd` prop'una taşındı |
| `public/robots.txt` | `User-agent: *` yerine 18 bot bloğu (hepsi Allow) + sitemap |
| `public/llms.txt` | Baştan yazıldı (`#play-store-link` placeholder'ı giderildi) |
| `public/sitemap.xml` | 430 → 446 URL; `scripts/generate-sitemap.mjs`'e 16 yeni URL ve `today=2026-09-11` |
| `deploy/nginx-limitra.conf` | (1) AI bot UA'ları için `set $ai_bot` + `access_log /var/log/nginx/limitra-ai-bots.log combined if=$ai_bot`; (2) `location ~ ^/(llms\.txt\|llms-full\.txt)$` → text/plain, 1 saat cache |
| `scripts/deploy-vps.ps1` | Yeni adım 4b: nginx conf'u VPS'e kopyalar, `cmp` farklıysa `.bak` alıp uygular, `nginx -t` düşerse geri yükler. **Windows OpenSSH scp ters bölü hatası** için yol düz bölüye çevrildi |
| `package.json` | `indexnow`, `report:bots`, `sitemap` script'leri |

### Commit `1b4a715` — dokümanlar
`AI_GORUNURLUK.md` (durum tablosu + kullanıcı eylem listesi), `SON_DURUM.md`, `ISLEM_GECMISI.md` güncellendi.

## 2. Sunucuda yapılan (repo dışı) değişiklikler

| Nerede | Ne | Geri alma |
|---|---|---|
| `/var/www/limitra/current` → `releases/20260911-210843` | Yeni sürüm | Betik `20260909-091920`'ye döndürüyor |
| `/etc/nginx/sites-available/limitra.conf` | Yukarıdaki iki blok | `.bak` dosyasından geri yükleniyor |
| `/var/log/nginx/limitra-ai-bots.log` | Yeni log dosyası (7 satır) | Zararsız, silinebilir |
| `/tmp/limitra-20260911-210248.tar.gz` | İlk başarısız deploy'dan kalan paket (~5 MB) | `rm` ile silinebilir |

## 3. Google Play tarafında yapılan (web sitesinden bağımsız, geri alınmadı)

`gpc listings update` ile canlıda:
- en-US tam açıklama: "Limitra AppBlock is engineered" → "Limitra App Block is engineered"; sona "Website: https://limitra.online — FAQ, pricing, changelog and comparisons…" satırı
- tr-TR tam açıklama: sona "Web sitesi: https://limitra.online — SSS, fiyatlandırma, değişiklik günlüğü ve … karşılaştırmaları." satırı

Site geri alınınca bu satırların işaret ettiği /fiyatlandirma vb. sayfalar **yok** olacak; metin yine de anlamlı (ana sayfa linki). İstenirse `gardiyan2/metadata/*/full_description.txt` dosyalarındaki son satır silinip `gpc listings update` tekrar çalıştırılır.

## 4. Web sitesi oturumu için öneri sırası

1. VPS'i Cenuta panelinden yeniden başlat; `uptime` ile load'un normale döndüğünü gör; `https://limitra.online` ve `https://muhasebe.limitra.online` 200 döndüğünü doğrula.
2. Geri alma betiğinin çalıştığını `readlink /var/www/limitra/current` ile teyit et (`20260909-091920` olmalı).
3. `git log --oneline -3` ile `4a12f27` ve `1b4a715`'i gör; A (devam) ya da B (revert) kararı.
4. A seçilirse: yerelde `npm run build && npm run preview` ile /fiyatlandirma, /karsilastirma, /sss, /gizlilik-politikasi (global stil çakışması kontrolü) sayfalarını gözle; sonra **düşük yük saatinde** `npm run deploy:vps` (PowerShell'den). Deploy'u tetiklemeden önce `uptime` load < 1 olsun.
5. Deploy betiğindeki eski sürüm temizleme (`find … | xargs rm -rf`) 1 vCPU'da I/O yükü yaratıyor; ayrı bir adıma alınması veya gece çalıştırılması düşünülebilir.
6. Kalan kullanıcı işleri (Bing Webmaster, GSC, entity kayıtları, YouTube): `AI_GORUNURLUK.md`.

## 5. Dersler (bir daha olmaması için)

- Web sitesi işi web sitesi projesinden yürütülmeli; `gardiyan2` oturumundan çapraz repo değişikliği yapıldı, kullanıcının çalışma düzenine aykırıydı.
- Kapsam: kullanıcı playbook'u "kullanacağız" diye verdi; ben tüm fazları tek seferde uyguladım. Doğrusu: değişiklik listesini rapor olarak sunup deploy için ayrıca onay almak.
- Bu VPS'te deploy öncesi `uptime` kontrolü zorunlu; load > 2 ise deploy yapılmamalı.

— Claude, 2026-09-11 21:40

## 6. Güncelleme — 21:43

- Sunucu **yeniden başlatılmadan** kendiliğinden toparladı (uptime 12 gün). Geri alma betiği çalıştı: `current → releases/20260909-091920`, eski nginx conf geri yüklendi, `nginx -t` OK.
- Canlı: `/` 200 (0,45 sn), `/sss/` 200, `/fiyatlandirma/` 404 (beklenen — eski sürüm), `muhasebe.limitra.online` 200, robots.txt eski hali.
- Donma sırasında sunucuda ne çalışıyordu? Toparladıktan hemen sonra: CPU %97 boşta, iowait 0, D-state süreç yok, docker konteyner yok, pm2'de yalnız muhasebedemo (%0,7 CPU). Load 17,7 → 10,8 düşüşte; yani load, donma süresince bekleyen süreçlerin artığı, sürmekte olan bir iş değil. Bu, sorunun makine içinde değil hipervizör/sağlayıcı tarafında olduğunu gösterir. `/tmp`'deki artık paket silindi.
- Cenuta'ya destek kaydı için kanıt: 11 Eylül 21:03–21:42 (TR) arası, ping var / TCP yok, iki site birden yanıtsız, süreç yükü sıfır.
