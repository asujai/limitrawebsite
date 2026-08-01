# Limitra Web Sitesi İnceleme Raporu

## Genel değerlendirme

Mevcut site içerik açısından güçlü bir temele sahip: ürünün problemi, davranışsal yaklaşımı, gizlilik vaadi ve bilgi merkezi ayrıntılı biçimde anlatılıyor. Ancak ana sayfa ilk birkaç saniyede ürünü yeterince hızlı ve güvenilir biçimde açıklamıyor. Uzun metin blokları, görsellerdeki kalite sorunları ve zayıf görsel hiyerarşi, ziyaretçinin Google Play indirme kararına ulaşmasını zorlaştırıyor.

## Öncelikli sorunlar

### 1. Ürün görselleri güven kaybettiriyor

- Ana sayfadaki beş ekran görselinin her biri yaklaşık 4–4,7 MB; yalnızca bu karusel 20 MB'tan fazla veri taşıyor.
- Görsellerde “Limitro active”, “4s 36m” gibi hatalı ifadeler, yinelenen/göreli olarak yanlış gün sayıları ve bulanık metin alanları bulunuyor.
- Türkçe sayfada İngilizce ürün ekranları gösteriliyor; bu durum dil tutarlılığını bozuyor.
- Bazı ekranların en-boy oranları farklı. `object-fit: cover` kullanımı özellikle 2–5 numaralı görsellerde üst/alt bölümlerin kesilmesine neden olabiliyor.
- Büyük, metalik JPG logo; sade ve dijital ürün dilinden kopuk, küçük boyutta ayrıntılarını kaybediyor ve 233 KB ile gereksiz ağır.

### 2. İlk ekran mesajı uzun ve dolaylı

- Başlık dikkat çekici olsa da ürünün ne yaptığı ilk bakışta açık değil.
- Açıklama paragrafı ve iki farklı eylem çağrısı, ana hedef olan uygulama indirmeyi zayıflatıyor.
- Google Play bağlantısının çevresinde güveni destekleyen “Android”, “cihazda işleme”, “reklamsız” gibi hızlı kanıtlar görünmüyor.

### 3. Sayfa akışı metin ağırlıklı

- Problem, içgörü ve yaklaşım bölümleri art arda uzun paragraflar halinde geliyor.
- Özellik kartlarının görsel ayrımı düşük; site genelinde aynı krem/teal tonu tekrarlandığı için bölümler birbirine karışıyor.
- Ürünün üç adımda nasıl çalıştığı, ekran görüntülerinden önce hızlıca anlaşılmıyor.

### 4. Etkileşim ve erişilebilirlik sorunları

- Otomatik karusel, `prefers-reduced-motion` tercihini dikkate almıyor.
- Slayt değişiminde aktif görsel ekran okuyucuya bildirilmezken gizli slaytlar erişilebilirlik ağacında kalıyor.
- Mobil menü açıldığında sayfa kaydırması devam ediyor ve menü dışına tıklama/Escape ile kapanma davranışı yok.
- Klavye odak stilleri genel tasarımda belirgin değil.

### 5. Performans ve SEO ayrıntıları

- Google Fonts CSS içe aktarımı sayfa stil dosyası içinden yapılıyor; bu, ilk çizimi geciktirebilir.
- Varsayılan Open Graph görseli `/images/og-default.png` olarak tanımlı fakat depoda bu dosya yok.
- Canonical site adresi `https://limitra.app` iken paylaşılan canlı adres Netlify alan adı; gerçek üretim alan adı kararı netleştirilmeli.
- Görsellerde modern format, `srcset` ve boyut ipuçları yok; sayfa yükleme ve yerleşim kararlılığı iyileştirilebilir.

## Uygulanan tasarım yönü

- Ana mesaj “Kararını şimdi ver. Limitra sonra korusun.” ekseninde sadeleştirildi.
- Sorunlu karusel kaldırıldı; ürünün çalışma mantığını doğrudan sayfa içinde gösteren, hafif ve kontrollü bir arayüz kompozisyonu tasarlandı.
- Güven sinyalleri ilk ekrana taşındı: cihazda işleme, reklamsız deneyim ve Android odağı.
- Uzun anlatı; problem → üç adım → özellik kanıtı → gizlilik → bilgi merkezi → indirme akışına dönüştürüldü.
- Görsel dil; gece laciverti, elektrik mavisi ve sıcak açık zemin üzerine kuruldu. Böylece mevcut uygulama ekranlarındaki mavi tonlarla daha tutarlı ve daha modern bir ürün kimliği elde edildi.
- Mobil menü, klavye odağı, azaltılmış hareket tercihi ve dokunma hedefleri iyileştirildi.

## Sonraki öneriler

1. Uygulamanın gerçek cihazdan alınmış, Türkçe ve hatasız 3–4 ekran görüntüsünü hazırlayın.
2. Gerçek kullanıcı yorumu veya doğrulanabilir kullanım verisi oluştuğunda sosyal kanıt bölümü ekleyin; şimdilik uydurma istatistik/yorum kullanılmamalı.
3. Özel alan adı olarak `limitra.app` kullanılacaksa Netlify üzerinde bağlanmalı; değilse canonical ve sitemap canlı adresle eşitlenmeli.
4. Google Play mağaza açıklaması, ekran görüntüleri ve web sitesi aynı mesaj/renk sistemiyle güncellenmeli.
