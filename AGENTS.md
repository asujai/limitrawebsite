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
   - `npm run deploy:vps` çalıştırılarak doğrulanmış statik çıktı atomik biçimde `89.252.153.119` üzerindeki canlı siteye gönderilir.
4. Her işlem sonrası `SON_DURUM.md` ve `ISLEM_GECMISI.md` güncellenmelidir.

## Tamamlanma Tanımı (Definition of Done) — her görev için zorunlu

Bir görev ancak şu 5 adım geçtiğinde "tamamlandı" denir; aksi hâlde raporda "KISMİ — deploy bekliyor" yazılır ve bloke eden neden belirtilir:
1. `npm run build` → 0 hata
2. `npm run check:links` → OK
3. `git commit` + `git push origin main`
4. `npm run deploy:vps` → "Yayin tamamlandi" satırı ve sürüm numarası
5. `npm run check:live` → "Canli site guncel." (canlı URL HTTP 200 + fiyat şeması)

Deploy hata verirse (SSH timeout, load > 3.0): en fazla 3 kez, 2'şer dakika arayla tekrar dene; yine olmazsa `SON_DURUM.md` "Bilinen Sorunlar"a "DEPLOY BEKLİYOR: <sürüm/commit>" satırı yaz. Bu satır varken başlayan her oturum ÖNCE bekleyen deploy'u yapar.

