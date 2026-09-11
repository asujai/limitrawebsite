# Yapay Zekâ Görünürlüğü (GEO/AEO) — Durum ve Yapılacaklar

Kaynak playbook: `~/Downloads/ai-gorunurluk-playbook.md`. Bu dosya Limitra App Block için uygulanan işleri, kanıtları ve kullanıcı eylemi gerektiren kalan adımları tutar.

## Değişkenler (kanonik)

```
SITE_URL       = https://limitra.online
SITE_ADI       = Limitra
UYGULAMA_ADI   = Limitra App Block   (Play başlıkları dil bazlı: "Limitra: Uygulama Engelleyici" / "Limitra: Focus App Blocker")
UYGULAMA_TURU  = Android (native Kotlin, minSdk 24 = Android 7.0+)
STORE_URL      = https://play.google.com/store/apps/details?id=com.gardiyan.app
FIYAT          = ₺29,99 tek seferlik (abonelik / IAP / reklam yok)
KISA_TANIM     = Limitra App Block, Android için aboneliksiz ve %100 çevrimdışı bir uygulama engelleyici ve ekran süresi sınırlayıcıdır; günlük limit dolduğunda seçilen uygulamayı gün sonuna kadar kilitler.
KATEGORI       = Android uygulama engelleyici ve ekran süresi sınırlayıcı
RAKIPLER       = StayFree, AppBlock (MobileSoft), YourHour, Digital Wellbeing (Google), Forest
FRAMEWORK      = Astro 4.16 SSG
HOSTING        = Cenuta VPS 89.252.153.119, nginx, `npm run deploy:vps`
BACKEND_VAR_MI = hayır (uygulama internet izni istemiyor) → Faz 4 (MCP/OpenAPI/agent-card) atlandı
DIL            = tr + en (yeni sayfalar), site 11 dil
```

**İsim kararı (2026-09-11):** "Limitra" tek başına aramada kalabalık (Hindistan'da takviye markası, GitHub rate-limit kütüphaneleri, İngiltere finans brokeri, Roblox sitesi). Bu yüzden tüm makine-okunur yüzeylerde ve üçüncü taraf kayıtlarda **"Limitra App Block"** tam adı kullanılır; JSON-LD `alternateName` ile Play başlıkları bağlanır.

## Durum tablosu

| Faz | Madde | Durum | Kanıt |
|---|---|---|---|
| 0.1 | JS'siz render | ✅ | Astro SSG; `curl -A GPTBot` çıktısında `hero-answer` metni var |
| 0.2 | robots.txt bot bazlı | ✅ | 18 user-agent bloğu, sitemap referanslı |
| 0.3 | WAF engeli | ✅ | GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot → 200 |
| 0.4 | Sitemap | ✅ | 446 URL |
| 0.4 | Google Search Console | ❓ | Kullanıcı kontrol edecek (aşağıda) |
| 0.4 | **Bing Webmaster** | ❌ **Kullanıcı** | Log kanıtı: 90 günde Googlebot 11.186 istek, bingbot yalnız 6. ChatGPT araması Bing'e dayanır. |
| 0.4 | IndexNow | ⏳ | Anahtar `public/af08…e707.txt` yayında, Bing anahtarı çekti (157.55.39.48). Doğrulama sonrası `npm run indexnow` |
| 1.1 | ≤120 kelime cevap bloğu | ✅ | Ana sayfa (`HERO_ANSWER`), tüm yeni sayfalar (`ProductPage.lede`) |
| 1.2 | Soru-cevap sayfaları | ✅ | /sss 27 soru; /fiyatlandirma; /karsilastirma; 5× rakip-alternatifi; /degisiklik-gunlugu (tr+en = 16 sayfa) |
| 1.3 | Gerçek `<table>` + `<caption>` | ✅ | karşılaştırma, fiyat, changelog |
| 1.4 | JSON-LD | ✅ | Her sayfa: Organization + WebSite + SoftwareApplication; /sss FAQPage; changelog ItemList. Rich Results Test kullanıcı tarafından çalıştırılmalı: https://search.google.com/test/rich-results?url=https://limitra.online/sss |
| 1.5 | Yazar sinyali | ⏭ | Kullanıcı istemedi |
| 2.1 | llms.txt | ✅ | Yeniden yazıldı, placeholder link giderildi |
| 2.2 | llms-full.txt | ✅ | ~3.500 kelime, tr+en |
| 2.3-2.7 | agent-card / openapi / mcp / discovery | ⏭ | API yok; sahte yüzey yayınlanmadı |
| 3 | Üçüncü taraf entity kayıtları | ❌ **Kullanıcı** | Aşağıdaki liste |
| 5.1 | Kanonik uygulama sayfası | ✅ | /limitra + SoftwareApplication şeması |
| 5.2 | Play listing | ✅ | en-US "Limitra AppBlock" → "Limitra App Block"; tr-TR/en-US açıklamalarına site linki eklendi; canlıda doğrulandı |
| 5.3 | assetlinks.json | ⏭ | Manifest'te App Links yok; dosya anlamsız |
| 5.4 | Değişiklik günlüğü | ✅ | /degisiklik-gunlugu, /en/changelog |
| 6.1 | Bot logu | ✅ | nginx `limitra-ai-bots.log`; `npm run report:bots` |
| 6.2 | AI referral segmenti | ❌ **Kullanıcı** | GA/gtag'da referrer: chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com |
| 6.3 | gorunurluk.py | ⏸ | Script hazır (`scripts/gorunurluk.py`); API anahtarı yok |

## Baseline (2026-09-11)

- Web araması "Limitra app blocker android": **bahis yok, link yok**; sonuçlar Limitr, Limit, Limitly, AppBlock.
- Web araması "limitra.online": **site çıkmıyor**; "Limitra" başka markalara gidiyor.
- nginx 90 gün: GPTBot ~1.669, OAI-SearchBot 1.372, ChatGPT-User 1.168, Claude-User 2.177, ClaudeBot 541, Claude-SearchBot 551, PerplexityBot 557, Perplexity-User 1.089, Google-Extended 564, Applebot 1.176, Amazonbot 1.201, Bytespider 545, meta-external 517, CCBot 10, **bingbot 6**, Googlebot 11.186.
  - Yorum: AI botları siteyi zaten yoğun çekiyor (Faz 0 sağlam); sorun içerik/entity tarafındaydı (Faz 1-3). Bing tarafı boş.

## Kullanıcı eylemi gerektirenler (öncelik sırası)

### 1. Bing Webmaster Tools (30 dk, en yüksek etki)
1. https://www.bing.com/webmasters → Microsoft hesabıyla gir.
2. "Import from Google Search Console" varsa onu seç (GSC kayıtlıysa tek tık). Yoksa "Add site" → `https://limitra.online` → doğrulama yöntemi **XML dosyası** (BingSiteAuth.xml) seç, dosyayı bana ver; `public/` altına koyup deploy ederim.
3. Sitemaps → `https://limitra.online/sitemap.xml` gönder.
4. Ardından bana haber ver: `npm run indexnow` çalıştırırım.

### 2. Google Search Console
- https://search.google.com/search-console → `limitra.online` domain property var mı kontrol et. Yoksa DNS TXT doğrulaması (Porkbun) — TXT değerini bana ver, ya da HTML dosya yöntemi seç.
- Sitemap gönder; Rich Results Test'i /sss ve / için çalıştır.

### 3. Entity kayıtları (Faz 3.1) — hepsinde **birebir aynı** metin
```
Ad:      Limitra App Block
Tanım:   Limitra App Block, Android için aboneliksiz ve %100 çevrimdışı bir uygulama engelleyici ve ekran süresi sınırlayıcıdır; günlük limit dolduğunda seçilen uygulamayı gün sonuna kadar kilitler.
EN:      Limitra App Block is a subscription-free, 100% offline app blocker and screen time limiter for Android; when the daily limit runs out it locks the selected app until the end of the day.
URL:     https://limitra.online
Store:   https://play.google.com/store/apps/details?id=com.gardiyan.app
Fiyat:   One-time purchase (₺29.99 TR), no subscription
Kategori: Android app blocker / screen time
```
| Platform | Neden | Not |
|---|---|---|
| **AlternativeTo** — https://alternativeto.net/manage/add/ | "X alternatifi" sorularında AI'ların en çok çektiği kaynak | StayFree, AppBlock, YourHour, Forest, Digital Wellbeing'in alternatifi olarak işaretle |
| **Product Hunt** | Lansman + kalıcı entity sayfası | Tagline: "Offline, one-time-purchase app blocker for Android" |
| **Wikidata** — https://www.wikidata.org/wiki/Special:NewItem | Entity graph'a giriş; Wikipedia'dan çok daha kolay | instance of: mobile app (Q620615); platform: Android; developer: Limitra; official website |
| **GitHub** | Kod ürünlerinde yüksek ağırlık | Kaynak kapalıysa `limitra-app-block` adında public README-only repo (tanım + linkler) yeterli |
| **LinkedIn** ürün/şirket sayfası | Entity tutarlılığı | |
| **Crunchbase** (ücretsiz) | Entity | |
| **Uptodown / APKMirror / F-Droid** | Android dizinleri | Sadece ücretsiz sürüm varsa; ücretli için Uptodown sayfası açılabilir |
| Türkçe: **Webrazzi**, **Teknoseyir**, **DonanımHaber forum**, **Ekşi Sözlük** başlığı | Yerel kaynak bahsi | |

### 4. YouTube (Faz 3.2) — en güçlü tek sinyal
- M4 için zaten bekleyen 20-30 sn tanıtım videosu + 2-3 dk "nasıl çalışır" videosu.
- Başlık: "Limitra App Block — Android için aboneliksiz uygulama engelleyici (nasıl çalışır)"
- Açıklama: KISA_TANIM + https://limitra.online + Play linki. **Altyazı/transkript yükle.**
- Link Play Console'a `gpc listings patch --video` ile bağlanır.

### 5. Reddit / topluluk (Faz 3.3)
- r/androidapps, r/digitalminimalism, r/nosurf, r/productivity: "I built…" formatında dürüst gönderi (sınırları da yaz: web engelleme yok, iOS yok).
- Hacker News "Show HN".

### 6. Özgün veri (Faz 3.4)
- Öneri: Uygulama çevrimdışı olduğu için sunucu metriği yok. Bunun yerine **ölçülebilir teknik iddia** yayınla: "Erişilebilirlik akışı kesildiğinde UsageStats uzlaştırması ile süre kaçağı ≤10 sn" — yöntemle birlikte. Ya da 11 dilde Play'den anonim indirme/ülke dağılımı (Play Console'dan).

### 7. GA4 referral segmenti (Faz 6.2)
- gtag AW-18366719669 mevcut; GA4 property varsa "Traffic acquisition" raporunda session source = chatgpt.com | perplexity.ai | claude.ai | gemini.google.com | copilot.microsoft.com filtresi kaydet.

## Bakım

- Yeni sürüm çıkınca: `src/data/schema.ts` (APP_VERSION, APP_VERSION_DATE), `src/data/product-pages.ts` changelog, `public/llms.txt` + `llms-full.txt` sürüm satırları.
- Fiyat değişirse: `schema.ts` APP_PRICE_TRY (fiyat sayfası, karşılaştırma, SSS ve llms dosyaları buradan beslenir; SSS ve llms metinlerinde ₺29,99 elle yazılı — grep ile güncelle).
- Rakip tablosu: 3 ayda bir mağaza sayfalarından yeniden kontrol; `COMPARISON_DATE` güncelle.
- Haftalık: `npm run report:bots`; anahtar gelirse `python scripts/gorunurluk.py`.

— Claude, 2026-09-11
