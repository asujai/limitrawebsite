# Proje Son Durumu

## Genel Bilgiler
- **Proje Adı:** Limitra Web (Limitra App Block)
- **Teknoloji:** Astro 4.16, SSG (Static Site Generation), Vanilla CSS
- **Canlı Adres / Alan Adı:** `https://limitra.online` (Canonical)
- **Paket / App ID:** `com.gardiyan.app` (Google Play: Limitra App Block)
- **Desteklenen Diller (11 Dil):** Türkçe (`/`), İngilizce (`/en`), İspanyolca (`/es`), Fransızca (`/fr`), Almanca (`/de`), Portekizce (`/pt`), İtalyanca (`/it`), Arapça (`/ar` - RTL), Endonezce (`/id`), Filipince (`/fil`), Tayca (`/th`).

## Güncel Durum (2026-08-28)
- Web sitesi 11 dilli küresel bir platforma dönüştürüldü.
- `src/data/translations.ts` ile tüm diller için arama motoru optimizasyonuna (SEO) uygun anahtar kelimeler ve metinler hazırlandı.
- Navbar'a tüm dilleri listeleyen bayraklı ve yerel isimli modern açılır dil seçici (Dropdown) eklendi.
- Arapça için otomatik `dir="rtl"` sağdan sola yerleşim desteği entegre edildi.
- Görsel ve mockup bileşenlerinin estetiği korunarak metin alanları 11 dilde lokalize edildi.
- 10 adet teyitli ve resmi dünya basını haber arşivi sisteme işlendi.
- `sitemap.xml` 11 dilin tüm rotalarını kapsayacak şekilde güncellendi.
- `npm run build` ile 80 statik sayfa 0 hata ile derlendi.

## Son Yapılan İşlem
- **İşlem:** 11 dilli yapının hata denetimi ve düzeltmesi — 239 kırık iç bağlantı, koyu zeminde
  görünmeyen marka/başlık metinleri, sayfaya özel olmayan hreflang, eksik sitemap girişleri ve
  yalnızca TR/EN olan arayüz metinleri giderildi.
- **Model:** Claude

## Mimari Not — çok dilli rotalama
- Tüm iç bağlantılar `src/data/routes.ts` üzerinden üretilir. Bileşenlerde elle URL kurmayın.
- `FULL_CONTENT_LANGS` (şu an `tr`, `en`) tam içeriğe sahip dilleri belirtir. Diğer diller yalnızca
  ana sayfa, `/limitra` ve `/sss` sayfalarına sahiptir; eksik bölümlerde `resolveUrl` İngilizce
  sürüme düşer. Bir dile yeni bölüm eklenirse yalnızca bu listeyi/`buildUrl`'i güncellemek yeter.
- `buildUrl` yalnizca gerçekten var olan sayfayı döner; `hreflang` etiketleri bundan üretilir.
- Haber slug'ları TR ve EN'de farklıdır; ortak `id` alanı üzerinden eşleştirilir.

## Doğrulama
- `npm run build` → 80 sayfa, 0 hata.
- `dist/` bağlantı taraması: kırık iç bağlantı 239 → 0.
- Sitemap ↔ üretilen sayfalar karşılaştırıldı; yalnızca bilinçli dışarıda bırakılan `cleanscan` sayfaları kaldı.
- Derlenen CSS ve HTML üzerinden marka renkleri, CTA başlıkları, `lang`/`dir` ve 11 dilin mockup metinleri teyit edildi.

## Günlük Haber Ekleme İş Akışı
Kullanıcı yeni bir haber veya konu paylaştığında:
1. Haber içeriği araştırılıp resmi kaynaklarla zenginleştirilir.
2. `src/data/haberler.json` (TR) ve `src/data/news-en.json` (EN) dosyalarına eklenir.
3. `public/sitemap.xml` güncellenir.
4. `npm run build` ile 0 hata doğrulanır.
5. `git push origin main` yapılarak Netlify üzerinden anında canlıya alınır.

## Bilinen Sorunlar
- 9 yeni dilde (es, fr, de, pt, it, ar, id, fil, th) haber arşivi, bilgi merkezi, iletişim ve hukuki
  sayfaların çevirisi yok. Bağlantılar kırık değil; İngilizce sürüme düşer. Menü etiketi yerel,
  hedef sayfa İngilizce olur.
- Son denetimde tarayicıda görsel doğrulama yapılmadı; kontroller kod ve derlenmiş çıktı üzerinden yürütüldü.
