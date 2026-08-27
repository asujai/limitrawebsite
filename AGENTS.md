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
   - `git add .`, `git commit` ve `git push origin main` komutları çalıştırılarak Netlify canlı yayınına anında gönderilir.
4. Her işlem sonrası `SON_DURUM.md` ve `ISLEM_GECMISI.md` güncellenmelidir.
