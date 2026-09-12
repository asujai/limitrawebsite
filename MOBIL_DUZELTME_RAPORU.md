# Mobil Deneyim ve Fiyat Düzeltme Raporu

* **Hazırlayan:** Claude — 2026-09-12
* **Uygulayacak:** Antigravity
* **Kapsam:** limitra.online mobil görünüm (375px, Android Chrome) + fiyat gösteriminin ₺29,99 → $0.49'a çevrilmesi
* **Ölçüm yöntemi:** Canlı site, 375×812 mobil emülasyon, DOM `getBoundingClientRect` ölçümleri. Rakamlar aşağıda; tahmin değil.

---

## 0. Özet (öncelik sırası)

| # | Sorun | Etki | Dosya |
|---|-------|------|-------|
| 1 | Üst bar mobilde taşıyor: hamburger ekran dışına itiliyor, "App Block" rozeti 2 satıra kırılıyor, indir butonu 2-3 satır | KRİTİK | `src/components/Navigation.astro` |
| 2 | Fiyat her yerde ₺29,99; sitenin küresel hedefi için $0.49 olmalı | KRİTİK | `src/data/schema.ts` + türevleri |
| 3 | Mobil menü: hamburger X'e dönmüyor, dil/indir menüde yok, dışarı tıklayınca/Esc ile kapanmıyor, arka plan kilidi çalışmıyor (`body.nav-open` ölü CSS) | YÜKSEK | `Navigation.astro`, `global.css` |
| 4 | Geniş tablolar (karşılaştırma 7 sütun = 787px, nasıl-çalışır 4 sütun = 840px) yatay kaydırılıyor ama kaydırma ipucu/yapışkan ilk sütun yok | ORTA | `ProductPage.astro`, `HowItWorksPage.astro` |
| 5 | Küçük dokunma alanları: footer linkleri 17px, "Oku →" 21px, kicker linkler 24px (hedef ≥44px) | ORTA | `Footer.astro`, `HomePage.astro`, `NewsIndex.astro` |
| 6 | Haberler sayfasında 65 adet <13px metin (`cat-pill` 11.5px, `source-tag` 12px) | DÜŞÜK | `NewsIndex.astro` |
| 7 | Hero telefon mockup'ı 520px altında 570px yükseklik + orbit halkaları viewport dışına taşıyor (`overflow-x:hidden` ile gizleniyor ama boşluk yaratıyor) | DÜŞÜK | `HomePage.astro` |

---

## 1. Üst bar (Navigation) — KRİTİK

### Ölçüm (375px, TR ana sayfa)
```
container: left 12 → right 363 (351px kullanılabilir)
brand     : 71px genişlik  → "Limitra" + "App Block" rozeti 2 satıra kırıldı
nav-actions: left 131 → right 398  (container'ı 35px aşıyor)
download  : 124×61px (2 satır: "Uygulamayı / indir")
menu-toggle: left 373 → right 398 (container'ın 10px dışında, ekran kenarına yapışık)
header yüksekliği: 95px (hedef ≈ 64px)
```
EN'de daha kötü: indir butonu 83px (3 satır "Get the / app / ↗"). AR'de aynı sorun sol tarafta (`toggle: 8→31`).

### Kök neden
`Navigation.astro` `@media (max-width: 900px)` bloğu yalnızca `.nav-list`'i gizliyor. `.nav-actions` içindeki 3 öğe (dil dropdown + indir butonu + hamburger) 375px'e sığmıyor; `flex` küçültme yapamadığı için `.brand` sıkışıp rozet alta düşüyor, hamburger dışarı taşıyor.

### Yapılacaklar (`src/components/Navigation.astro`)

1. **Rozet ve marka tek satır:**
   ```css
   .brand { flex-shrink: 0; white-space: nowrap; }
   ```
2. **Mobilde indir butonunu üst bardan kaldır, menünün içine taşı** (veya sadece ikon yap). Önerilen: `@media (max-width: 900px) { .nav-actions .download-link { display: none; } }` ve mobil menü listesine tam genişlik "Google Play'den indir" butonu ekle.
3. **Dil seçiciyi küçült:** mobilde bayrak + kod yeterli, `padding: .35rem .55rem; font-size: .8rem`. Alternatif: mobil menü içine taşı.
4. **Hamburger her zaman container içinde kalsın:** `.nav-actions { flex-shrink: 0; }`, `.nav-container { gap: .75rem; }` (mobilde), `.menu-toggle { margin-inline-start: 0; min-width: 44px; min-height: 44px; display:flex; align-items:center; justify-content:center }`.
5. **Header yüksekliği:** mobilde `min-height: 3.75rem` (60px), sticky header ekranın %12'sini kaplamasın.
6. **Kabul kriteri:** 360px'de header tek satır, tüm öğeler `container` sınırı içinde, yükseklik ≤ 64px; TR/EN/AR/DE (en uzun `getApp` etiketleri) üçünde de doğrulanacak.

---

## 2. Fiyat: ₺29,99 → $0.49 — KRİTİK

### Tek kaynak
`src/data/schema.ts:7` → `export const APP_PRICE_TRY = '29.99';`
Bu sabit `product-pages.ts` (`priceTr`, `priceEn`) ve JSON-LD `offers` bloğunu besliyor. Ancak **HERO_ANSWER** (`schema.ts:17-18`), **`sss.astro:55`**, **`en/sss.astro:55`**, **`product-pages.ts:343, 515, 549`** ve **`public/llms*.txt`** fiyatı elle yazmış — sabitten beslenmiyor.

### Yapılacaklar

1. `schema.ts`:
   ```ts
   export const APP_PRICE = '0.49';
   export const APP_PRICE_CURRENCY = 'USD';
   export const APP_PRICE_LABEL = '$0.49';
   ```
   `APP_PRICE_TRY` kaldır (grep ile 0 referans kalmalı). JSON-LD `offers`: `price: APP_PRICE, priceCurrency: APP_PRICE_CURRENCY`.
2. `product-pages.ts:6-7` → `priceTr = priceEn = APP_PRICE_LABEL` ('$0.49'). Satır 21 `'Fiyat (Türkiye)'` → `'Fiyat'`, satır 55 `'Price (Türkiye)'` → `'Price'`. Satır 99/123 `"in Türkiye"` ifadelerini kaldır. Satır 343, 515, 549'daki elle yazılmış `₺29,99` / `₺29.99`'u sabitle değiştir.
3. `schema.ts:17-18` HERO_ANSWER: TR "Google Play'de $0.49 tek seferlik ödemeyle sunulur", EN "sold on Google Play as a $0.49 one-time purchase" — "in Türkiye, local pricing elsewhere" ibaresini kaldır.
4. `src/pages/sss.astro:55`, `src/pages/en/sss.astro:55` → sabitten al ya da metni `$0.49` yap.
5. `public/llms.txt:9`, `public/llms-full.txt:90,139,222,309,358,441` → `$0.49`. ("Türkiye" vurgusu kaldırılsın; "Google Play yerel para biriminde gösterebilir" notu kalabilir.)
6. Pricing `notes` (product-pages.ts:43, 77): "Diğer ülkelerde fiyat yerel para biriminde gösterilir" → "Google Play, fiyatı ülkenize göre yerel para biriminde gösterebilir; USD referans fiyatı $0.49'dur."
7. **Doğrulama:** `grep -rn "29[,.]99\|₺\|TRY\|Türkiye" src public` → yalnızca haber JSON'larındaki tarih/ID eşleşmeleri kalmalı. `npm run build` sonrası `dist/index.html` içindeki JSON-LD'de `"price":"0.49","priceCurrency":"USD"` görülmeli. Google Rich Results Test ile `SoftwareApplication` şeması geçmeli.

> Not: Play Console'daki gerçek USD fiyatının $0.49 olduğunu kullanıcı teyit etti; Play'de farklıysa `APP_PRICE` tek noktadan değişir.

---

## 3. Mobil menü davranışı — YÜKSEK

Mevcut: hamburger → `header.nav-open` → `.nav-list` header altına absolute açılıyor (5 link, 31px yükseklikte satırlar).

Eksikler ve düzeltmeler (`Navigation.astro`):

1. **Hamburger → X animasyonu yok** (`toggleSpans: none`). Ekle:
   ```css
   .nav-open .menu-toggle span:nth-child(1){transform:translateY(.55rem) rotate(45deg)}
   .nav-open .menu-toggle span:nth-child(2){opacity:0}
   .nav-open .menu-toggle span:nth-child(3){transform:translateY(-.55rem) rotate(-45deg)}
   ```
2. **Arka plan kaydırma kilidi çalışmıyor:** `global.css:66` `body.nav-open { overflow:hidden }` var ama JS sınıfı `header`'a ekliyor. JS'te `document.body.classList.toggle('nav-open', isOpen)` ekle.
3. **Dışarı tıklama / Escape ile kapanma yok.** `document.addEventListener('click', …)` ve `keydown` → `Escape` ekle.
4. **Menü öğeleri 31px** → `padding: .75rem 0; min-height: 44px; width: 100%`.
5. **Menüye ekle:** tam genişlik "Google Play'den indir" `.btn-primary` ve (istenirse) dil listesi. Böylece üst bardan kaldırılan öğeler kaybolmaz.
6. Menü ekran yüksekliğini aşarsa: `max-height: calc(100dvh - 4rem); overflow-y: auto`.

---

## 4. Tablolar — ORTA

* `/karsilastirma`: 7 sütun, 787px. `/nasil-calisir`: 4 sütun, 840px. `.table-wrap { overflow-x:auto }` var (`ProductPage.astro:49`), taşma yok ama kullanıcı kaydırılabilir olduğunu anlamıyor.
* Yapılacak (`ProductPage.astro` + `HowItWorksPage.astro`):
  1. İlk sütun yapışkan: `th:first-child, td:first-child { position: sticky; left: 0; background: var(--surface); z-index:1 }`.
  2. Kaydırma ipucu: sağ kenara gradient (`.table-wrap::after`) veya küçük "← kaydır →" notu; `-webkit-overflow-scrolling: touch`.
  3. `table { min-width: 640px }` ile hücreler aşırı daralmasın; `td { white-space: nowrap }` yalnızca ilk sütunda.
  4. `caption`'ı tablonun üstünde, `text-align:left` ve `caption-side: top` ile göster.

---

## 5. Dokunma hedefleri — ORTA

Ölçülen (375px):

| Öğe | Yükseklik | Dosya |
|-----|-----------|-------|
| Footer ürün linkleri ("Limitra Nedir?", "SSS", …) | 17px | `Footer.astro` |
| Haber kartı "Oku →" | 21px | `NewsIndex.astro` / `HomePage.astro` |
| "Tüm rehberler →", "Tüm dünya haberleri →", "Tüm özellikleri incele →" | 24px | `HomePage.astro` |
| Hamburger | 22px | `Navigation.astro` |
| Dil butonu | 39px | `Navigation.astro` |

Düzeltme: mobilde link satırlarına `padding-block: .6rem` (veya `min-height: 44px; display:inline-flex; align-items:center`). Footer'da liste öğeleri arası `gap: .25rem` yerine link paddingi ile boşluk ver.

---

## 6. Küçük metinler — DÜŞÜK

`/haberler`: `.cat-pill` 11.52px (×33), `.source-tag` 12px (×32), `.cta-kicker` 12px. Mobilde alt sınır 12px, tercihen 13px. `font-size: .8rem` (12.8px) yapılabilir; `letter-spacing` küçültülerek genişlik korunur.

---

## 7. Hero mobil — DÜŞÜK

`HomePage.astro:648-655` (`max-width: 520px`): `.product-visual { min-height: 570px }` + `.phone-shell` 285px. Mobilde ilk ekranda 3 bölüm (badge, H1 42px, 2 paragraf, 2 buton) zaten viewport'u dolduruyor; telefon mockup'ı ikinci ekrana düşüyor ve 570px sabit yükseklik boş alan bırakıyor.

* `.hero-answer` (95 kelime) + `.hero-lead` mobilde art arda iki uzun paragraf → H1 altında sadece `.hero-answer`'ı bırak, `.hero-lead`'i mobilde gizle (`display:none` @520px) veya kısalt. `.hero-answer` SEO için kalmalı.
* `.product-visual` mobilde `min-height: auto`, `.orbit-one/two` 520px altında `display:none` (viewport dışına 448px taşıyor).
* `.hero { padding-top: 3.8rem }` → `2.5rem`.

---

## 8. Doğrulama planı (Antigravity için)

1. `npm run build` → 454 sayfa, 0 hata. `npm run check:links` → OK.
2. `npm run preview` + Chrome DevTools 360/375/414px: TR, EN, AR (RTL), DE ana sayfa; `/fiyatlandirma`, `/karsilastirma`, `/nasil-calisir`, `/haberler`, bir haber detayı.
3. Her sayfada konsolda: `document.documentElement.scrollWidth === innerWidth` ve `.nav-actions` sağ kenarı ≤ `.nav-container` sağ kenarı.
4. Lighthouse Mobile: "Tap targets", "Font sizes", "Content width" uyarıları 0.
5. `grep -rn "29[,.]99\|APP_PRICE_TRY\|Türkiye" src public` → beklenmeyen eşleşme yok.
6. Deploy: `npm run deploy:vps`; canlıda `/` ve `/en/` JSON-LD'de `"priceCurrency":"USD"` teyidi; `SON_DURUM.md` + `ISLEM_GECMISI.md` güncelle.

---

## Kapsam dışı (bilinçli)
* `public/og-limitra.png` eski görsel (SON_DURUM'da zaten kayıtlı).
* 9 dilde eksik çeviriler.
* Google Fonts render-blocking (`display=swap` var, kabul edilebilir).
