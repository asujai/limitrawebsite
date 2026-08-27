# İşlem Geçmişi

## [2026-08-27 23:53] - Resmi ve Teyitli Haber/Makale Arşivinin Zenginleştirilmesi

* **Model:** Antigravity
* **Etkilenen Dosyalar:**
  - `[GÜNCELLENDİ]` `src/data/haberler.json` (10 adet resmi ve güncel haber)
  - `[GÜNCELLENDİ]` `src/data/news-en.json` (10 adet İngilizce resmi haber)
  - `[GÜNCELLENDİ]` `public/sitemap.xml` (Yeni haber slug'ları eklendi)
  - `[GÜNCELLENDİ]` `SON_DURUM.md`
  - `[GÜNCELLENDİ]` `ISLEM_GECMISI.md`
* **Yapılan İşlem:** 
  1. Meta'nın ABD'deki 50 eyalete ödediği 17.1 milyar dolarlık bağımlılık tasarımı uzlaşması ve zorunlu ekran kısıtlamaları haberi eklendi.
  2. Türkiye MEB'in 81 ile gönderdiği okullarda telefon yasağı ve dijital bağımlılıkla mücadele genelgesi eklendi.
  3. AB Komisyonu'nun DSA kapsamında TikTok Lite ödül sistemini yasaklatması ve bağımlılık yapıcı tasarım soruşturması eklendi.
  4. Güney Kore'nin devlet destekli dijital detoks kampları ve Çin'in gece ekran karartma 'Küçükler Modu' yasası eklendi.
  5. Toplam 10 resmi haber Türkçe ve İngilizce olarak dinamik rotalara bağlandı.
* **Doğrulama:** `npm run build` çalıştırıldı, 53 sayfanın tamamı 0 hata ile statik olarak derlendi.
* **Bilinen Sorunlar:** Yok
* **Sonraki Öneri:** Düzenli olarak dünya basınında çıkan yeni resmi regülasyonların `src/data/haberler.json` dosyasına eklenmesi.

## [2026-08-27 23:45] - Limitra App Block Marka Revizyonu ve Dünya Basını Haber Portalı Ekleme

* **Model:** Antigravity
* **Etkilenen Dosyalar:**
  - `[YENİ]` `src/data/haberler.json`
  - `[YENİ]` `src/data/news-en.json`
  - `[YENİ]` `src/pages/haberler/index.astro`
  - `[YENİ]` `src/pages/haberler/[slug].astro`
  - `[YENİ]` `src/pages/en/news/index.astro`
  - `[YENİ]` `src/pages/en/news/[slug].astro`
  - `[YENİ]` `AGENTS.md`
  - `[YENİ]` `SON_DURUM.md`
  - `[YENİ]` `ISLEM_GECMISI.md`
  - `[GÜNCELLENDİ]` `src/components/Navigation.astro`
  - `[GÜNCELLENDİ]` `src/components/Footer.astro`
  - `[GÜNCELLENDİ]` `src/components/HomePage.astro`
  - `[GÜNCELLENDİ]` `src/layouts/Layout.astro`
  - `[GÜNCELLENDİ]` `src/pages/limitra.astro`
  - `[GÜNCELLENDİ]` `src/pages/en/limitra.astro`
  - `[GÜNCELLENDİ]` `src/pages/sss.astro`
  - `[GÜNCELLENDİ]` `src/pages/en/sss.astro`
  - `[GÜNCELLENDİ]` `public/sitemap.xml`
  - `[GÜNCELLENDİ]` `public/llms.txt`
* **Yapılan İşlem:** 
  1. Web sitesi genelinde ürün adı **"Limitra App Block"** olarak güncellendi.
  2. Dünya basınından ekran süresi, sosyal medya zararları, devlet yasakları ve bilimsel araştırmaları içeren haber veri modeli ve Türkçe/İngilizce haber sayfaları oluşturuldu.
  3. Kategori bazlı filtreleme, manşet öne çıkarma ve detaylı dinamik haber sayfaları (`/haberler/[slug]` ve `/en/news/[slug]`) tasarlandı.
  4. Ana sayfaya en son dünya haberlerini gösteren vitrin bölümü eklendi.
  5. Menü ve alt bilgiye haber linkleri ve dil eşleme yönlendirmesi entegre edildi.
* **Doğrulama:** `npm run build` çalıştırıldı, 45 sayfanın tamamı 0 hata ile statik olarak derlendi.
* **Bilinen Sorunlar:** Yok
* **Sonraki Öneri:** Düzenli haber paylaşımı için `src/data/haberler.json` üzerinden yeni haber girişleri yapılması.
