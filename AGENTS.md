# Limitra Web Sitesi - Ajan ve Rol Kuralları

Bu depo, **Limitra App Block** (Android uygulama engelleyici ve dijital disiplin aracı) için Astro tabanlı statik web sitesini barındırır.

## Model Görev Dağılımı ve Roller

- **Claude:** Backend, mimari, SEO altyapısı, deployment ve karmaşık yapılandırmalar.
- **Codex:** Teşhis, hata ayıklama, testler ve kod analizi.
- **Antigravity:** UI/UX, Astro bileşenleri, stil/tema, haber & içerik modülleri ve görsel düzenlemeler.

## Proje Özel Kuralları

1. Web sitesinde ürün adı tutarlı olarak **Limitra App Block** olarak kullanılır.
2. Türkçe ve İngilizce iki dilli yapı korunmalıdır (`/` ve `/en`).
3. **Günlük Haber Yükleme Protokolü:** Kullanıcı günlük olarak yeni bir haber, konu başlığı veya link paylaştığında:
   - Haber resmi ve teyitli kaynaklarla detaylandırılır.
   - `src/data/haberler.json` (TR) ve `src/data/news-en.json` (EN) dosyalarına en güncel tarihle eklenir.
   - `public/sitemap.xml` dosyasına yeni slug'lar işlenir.
   - `npm run build` ile derleme doğrulanır.
   - `git add .`, `git commit` ve `git push origin main` ile kaynak kod GitHub'a gönderilir.
   - `npm run deploy` çalıştırılarak site derlenir ve Cloudflare'e (Workers statik varlıklar, proje `limitra`) yüklenir.
4. Her işlem sonrası `SON_DURUM.md` ve `ISLEM_GECMISI.md` güncellenmelidir.

## Tamamlanma Tanımı (Definition of Done) — her görev için zorunlu

Bir görev ancak şu 5 adım geçtiğinde "tamamlandı" denir; aksi hâlde raporda "KISMİ — deploy bekliyor" yazılır ve bloke eden neden belirtilir:
1. `npm run build` → 0 hata
2. `npm run check:links` → OK
3. `git commit` + `git push origin main`
4. `npm run deploy` → "Current Version ID" satırı (Cloudflare sürüm kimliği)
5. `npm run check:live` → "Canli site guncel." (canlı URL HTTP 200 + fiyat şeması)

Deploy hata verirse (ağ veya Cloudflare oturumu; oturum düştüyse `npx wrangler login`): en fazla 3 kez tekrar dene; yine olmazsa `SON_DURUM.md` "Bilinen Sorunlar"a "DEPLOY BEKLİYOR: <sürüm/commit>" satırı yaz. Bu satır varken başlayan her oturum ÖNCE bekleyen deploy'u yapar.


## Barındırma (2026-10-04'ten itibaren)

- Site Cloudflare'de, Workers statik varlıklar olarak yayınlanır (`wrangler.jsonc`, proje adı `limitra`, sunucu kodu yok). Cenuta VPS (`89.252.153.119`) emekliye ayrıldı; `scripts/deploy-vps.ps1` ve `deploy/nginx-limitra.conf` yalnız arşivdir.
- Site saf statik kalır: `astro.config.mjs` içine `@astrojs/cloudflare` adaptörü veya `output: hybrid/server` ekleme. Wrangler bunu kendiliğinden önerebilir; reddet.
- Önbellek ve içerik türü kuralları `public/_headers`, bulunamayan sayfa `public/404.html`.
- Yapay zekâ botları Cloudflare panelinde (Güvenlik → AI bot politikaları) Arama/Ajan/Eğitim üçü de "İzin ver"; Bot Fight Mode, AI Labyrinth ve Bot Tercihi Senkronizasyonu (managed robots.txt) kapalı. Bunları açma.
- `www` → kök yönlendirmesi Cloudflare Redirect Rule ile yapılır; HTTPS zorunluluğu "Always Use HTTPS" ile açık.
