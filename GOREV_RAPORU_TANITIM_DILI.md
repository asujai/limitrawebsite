# Görev Raporu: İçerik Hataları, Otomasyon Kuralları ve Tanıtım Dili

Hazırlayan: Antigravity (2026-10-08). Uygulayacak model bu dosyayı baştan sona okusun, aşamaları **sırayla** yapsın. Bitince en alttaki "Sonuç raporu" bölümünü doldursun; iş daha sonra yüksek modele kontrol ettirilecek.

Proje: `C:\Users\abdul\lmitraweb` (Astro, statik, Cloudflare). Önce `AGENTS.md` ve `SON_DURUM.md` oku.

## Değişmez kurallar

- İçeriklerdeki gerçek bilgilere (tarih, sayı, kişi, kurum, kaynak) dokunma. Tek istisna: Aşama 1.3.
- Uygulamalara özellik uydurma. Yalnız `scripts/limitra-ozellikler.md` (Aşama 1.1'de oluşacak) içindeki özellikler yazılabilir.
- Sitede fiyat rakamı yazılmaz.
- Shell PowerShell: `&&` çalışmaz, komutları `;` ile ayır.
- Otomasyonları (sidecar) etkinleştirme veya kapatma.
- `ISLEM_GECMISI.md` dosyasında başka modellerin kayıtlarına dokunma; kendi kaydını en üste ekle.
- Her aşama sonunda `npm run build` ve `npm run check:links` çalıştır. Hata varsa sonraki aşamaya geçme.

Veri dosyaları: Türkçe `src/data/haberler.json`, diğer diller `src/data/news-{en,es,fr,de,pt,it,ar,id,fil,th}.json`. Her öğe aynı `id` ile 11 dilde bulunur. Metin gövdesi `content` alanında, paragraf dizisi olarak durur.

---

## AŞAMA 1: Hataları düzelt

### 1.1 Özellik listesini oluştur: `scripts/limitra-ozellikler.md`

İki uygulama:
- **Limitra App Block** (`com.gardiyan.app`), repo: `C:\Users\abdul\gardiyan2`
- **Limitra Social** (`com.limitra.socialprototype`), repo: `C:\Users\abdul\limitrasocial`

Kullanıcının beyan ettiği özellikler (2026-10-08):
1. **Saat aralığına göre engelleme:** Kullanıcı bir saat aralığı belirler (örneğin 22:00–06:00) ve seçtiği uygulamalar yalnızca bu saatlerde engellenir. Uygulamada "Gece Kilidi" adında ayrı bir düğme **yok**; bu bir saat aralığı ayarıdır. Metinlerde "Gece Kilidi (Curfew) özelliği" diye özel ad kullanma; "belirlediğin saat aralığında (ör. 22:00–06:00) seçtiğin uygulamaları engelleyebilirsin" de.
2. **Uygulama içi zaman çizelgesi / kayıt:** Uygulama içinde, hangi anda ne yapıldığını gösteren bir zaman göstergesi var. Limit ihlali, limitin atlanması, uygulamanın kapatılıp açılması gibi olaylar burada görünür. Ebeveyn bunu **çocuğun telefonunda** açıp kontrol edebilir; çocuk ebeveyni kandıramaz.
   - **Yok:** Ebeveyn kendi telefonundan çocuğun telefonunu uzaktan yönetemez veya izleyemez. "Uzaktan ebeveyn kontrolü", "ailenize kendi telefonunuzdan limit koyun" gibi ifadeler yasak.

Yapılacaklar:
- a) Bu iki özelliğin **hangi uygulamada** (App Block, Social ya da ikisinde) olduğunu kodda doğrula. Arama önerisi (her iki repoda):
  `Get-ChildItem -Recurse -Include *.ts,*.tsx,*.kt,*.java -Path <repo> -Exclude node_modules | Select-String -Pattern "schedule|zamanla|startTime|endTime|timeline|zaman ?çizelge|history|log|bypass|ihlal" -List`
  (`node_modules`, `android/build` klasörlerini sonuçlardan ele.)
- b) Kodda doğrulayamazsan özelliği "kullanıcı beyanı, hangi uygulamada olduğu doğrulanmadı" diye işaretle ve Aşama 3'te bu özelliği hangi uygulamaya ait olduğunu söylemeden anma. Sonuç raporuna da yaz.
- c) Beyin notlarından bilinen diğer özellikler (`C:\Users\abdul\Beyin\knowledge\projeler\limitra\limitra.md` ve `limitra-social.md`). Bunları da kodda kısaca teyit et:
  - App Block: seçilen uygulamalara **uygulama başına** günlük süre limiti; süre dolunca kilit ekranı; geri tuşu/son uygulamalar menüsüyle kilidi aşmaya direnç; tamamen çevrimdışı çalışma (internet izni yok); seri/disiplin takibi.
  - Social: UID ile arkadaş ekleme; arkadaşların limitlerini ve kullanım sürelerini görme; ücretsiz kullanımda 1 uygulamaya kısıtlama (fiyat yazma); 11 dil arayüz.
- d) Dosyaya ayrıca **"Yazılmayacaklar"** listesi ekle:
  - uzaktan ebeveyn kontrolü,
  - "tüm telefonun toplam süresini X dakikaya kilitle" (kod tüm uygulamalar için toplam limit desteklemiyorsa),
  - "aşılmaz / kırılamaz / %100 engeller" gibi mutlak iddialar (doğrusu: "kapatılırsa kayıtta görünür"),
  - Limitra için herhangi bir sağlık, tedavi veya başarı yüzdesi iddiası,
  - Social için "süre dolunca arkadaşın ekranı kilitler" (kodda yoksa).

Dosya biçimi: iki başlık (App Block / Social). Her maddede tek cümlelik özellik açıklaması ve `kaynak: kod <dosya yolu>` ya da `kaynak: kullanıcı beyanı`. Sonunda "Yazılmayacaklar" listesi.

### 1.2 Ekran Süresi Kontrolü bölümü ID aralığına sabitlenmiş (önemli hata)

Rehber sayfaları sabit ID aralıklarıyla süzülüyor: `57–76` ve `88–97`. Sonuç:
- Otomasyonun ekleyeceği yeni bir "Ekran Süresi Kontrolü" makalesi (ID 100 ve sonrası) rehber bölümünde **görünmez**,
- ve "Dünya Basını" haber listesine karışır.

Düzeltme: ID aralığı yerine **kategoriye göre** süz.
- Etkilenen dosyaları bul: `Get-ChildItem -Recurse src,scripts -Include *.astro,*.ts,*.mjs | Select-String -Pattern ">= 57|>= 88|<= 97|< 57|> 97"`
  En azından şunlar: `src/components/ScreenTimeIndex.astro`, `src/components/NewsIndex.astro`, 11 adet `src/pages/**/screen-time-control/[slug].astro` ve `src/pages/ekran-suresi-kontrolu/[slug].astro`, gerekiyorsa `scripts/generate-sitemap.mjs` ve `src/data/routes.ts`.
- Her dildeki "Ekran Süresi Kontrolü" kategori adı `scripts/translations-news.mjs` içinde `categoryMap.screen` altında. Bu eşlemeyi tek bir yerde tut (örneğin `src/data/categories.ts` içine `SCREEN_CATEGORY: Record<lang,string>` koy) ve bütün süzgeçler oradan okusun.
- Önce kontrol et: 30 rehberin (57–76, 88–97) 11 dilin hepsinde `category` değeri `categoryMap.screen[lang]` ile birebir aynı mı? Farklı olanları düzelt. Kategori değeri ekran rehberi olmayan hiçbir öğede bu değer olmamalı.
- `ScreenTimeIndex.astro` içindeki sabit "30" sayıları ("30 pratik rehber", "30 Uygulamalı Protokol" vb.) içerik arttıkça yanlış olur. Sayıyı `guides.length` ile dinamik yap ya da metinden çıkar.
- Doğrulama: build sonrasında `dist/ekran-suresi-kontrolu/` altında 30 rehber klasörü olmalı; `dist/haberler/index.html` içinde rehber başlıkları yer almamalı. URL'ler değişmemeli: build öncesi ve sonrası `dist` içindeki sayfa listesini karşılaştır.

### 1.3 ID 99 kaynak ve iddia düzeltmesi

ID 99 (Sophie Leroy, "Attention Residue") yazılırken web doğrulaması yapılmadı.
- Kaynak: Leroy, S. (2009). "Why is it so hard to do my work? The challenge of attention residue when switching between work tasks." *Organizational Behavior and Human Decision Processes*, 109(2), 168–181. Beklenen DOI: `10.1016/j.obhdp.2009.04.002`.
- Web'de doğrula (`search_web` / `read_url_content`, sayfa engelliyse Firecrawl). Doğruysa 11 dilde `sourceUrl` alanını `https://doi.org/10.1016/j.obhdp.2009.04.002` yap ve `source` alanını `Sophie Leroy (2009), Organizational Behavior and Human Decision Processes & Cal Newport (Deep Work)` olarak güncelle.
- Makalenin özetini oku. Metindeki deney tarifi ("kelime tamamlama ve analitik karar verme testleri") özetle uyuşmuyorsa, 11 dilde bu cümleyi özetin söylediği kadarına indir. Yeni bilgi ekleme.

### 1.4 ID 45 bozuk son paragraf

ID 45'in son paragrafında metin yarıda kesilip `"Limitra App Block ile (Gece Kilidi) Yatakta, ..."` diye devam ediyor. 11 dilin hepsinde kontrol et. Bozuk birleşimi düzelt; paragrafın Limitra kısmı Aşama 3 kurallarıyla yeniden yazılacak.

### 1.5 Dokuz dilde İngilizce kalan gövdeler (en büyük iş)

40 öğede `es, fr, de, pt, it, ar, id, fil, th` dosyalarındaki `content` alanı İngilizce (başlık ve özet yerel dilde). Toplam 40 × 9 = 360 kayıt. Tespit:

```
node -e "const fs=require('fs');const en=JSON.parse(fs.readFileSync('src/data/news-en.json','utf8'));for(const l of ['es','fr','de','pt','it','ar','id','fil','th']){const d=JSON.parse(fs.readFileSync('src/data/news-'+l+'.json','utf8'));const ids=d.filter(a=>{const e=en.find(x=>x.id===a.id);return e&&a.content[0]===e.content[0]}).map(a=>a.id);console.log(l,ids.length,ids.join(','))}"
```

Yöntem:
- Kaynak metin olarak İngilizce `content` kullan, Türkçe ile karşılaştırarak anlamı koru. Sayı, tarih, isim ve kurum adlarını değiştirme. Çeviri o dilde doğal okunmalı; Arapça RTL.
- **Son paragraf Limitra paragrafıysa onu çevirme**, olduğu gibi bırak; Aşama 3'te 11 dilde yeniden yazılacak. Böylece aynı paragraf iki kez çevrilmez.
- Çevirileri öğe başına bir dosyada topla: `scripts/translations/body-<id>.json`, biçim `{ "es": ["p1","p2",...], "fr": [...], ... }`. Paragraf sayısı İngilizce ile aynı olmalı (son paragraf hariç tutulduysa bir eksik).
- Uygulama betiği `scripts/apply-body-translations.mjs`: her `body-<id>.json` dosyasını okusun ve ilgili dil dosyasında yalnız `content` alanını değiştirsin; hariç tutulan son paragrafı korusun. Betik tekrar çalıştırılabilir olmalı (idempotent). Örnek çekirdek:

```js
import fs from 'node:fs'; import path from 'node:path';
const dir = 'scripts/translations';
for (const f of fs.readdirSync(dir).filter(x => /^body-\d+\.json$/.test(x))) {
  const id = f.match(/\d+/)[0]; const tr = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const [lang, paras] of Object.entries(tr)) {
    const fp = `src/data/news-${lang}.json`; const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const item = data.find(x => x.id === id); if (!item) throw new Error(`${lang} ${id} yok`);
    const keepLast = paras.length === item.content.length - 1;
    item.content = keepLast ? [...paras, item.content.at(-1)] : paras;
    fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf8');
  }
}
```

- 5'er öğelik partilerle ilerle; her partiden sonra tespit komutunu yeniden çalıştır.
- Kalıcı koruma: `scripts/check-content-lang.mjs` ekle. Bu betik, `en` dışındaki dillerde `content[0]` İngilizce ile aynı olan öğe bulursa listeleyip `process.exit(1)` ile çıksın. `package.json` içine `"check:lang": "node scripts/check-content-lang.mjs"` ekle. Aşama 1 sonunda bu kontrol 0 sorunla geçmeli.

---

## AŞAMA 2: Otomasyon yönergelerini güncelle

Dosyalar: `scripts/daily-news-instructions.md` (22:00 haber) ve `scripts/daily-article-instructions.md` (12:00 makale).

1. İkisine de aşağıdaki bölümü aynen ekle:

```markdown
## LİMİTRA'YA ATIF KURALLARI
- Uygulama özellikleri yalnız `scripts/limitra-ozellikler.md` dosyasından alınır. Orada olmayan özellik yazılmaz; "Yazılmayacaklar" listesine uyulur.
- Atıf metnin son paragrafında, 1–2 sakin cümleyle yapılır. Yalnız konuya en uygun TEK uygulama ve TEK özellik anılır. İki uygulamayı birlikte zorla anmak yasaktır.
- Atıf, metinde anlatılan sorunun somut bir adımına bağlanır (örn. gece kaydırma → saat aralığına göre engelleme; ebeveyn takibi → uygulama içi kayıt ekranı; arkadaşla hedef → Social'da arkadaşın limitini görme).
- Yasak kelime ve kalıplar: aşılmaz, kırılamaz, tavizsiz, zırh, kalkan, "cebinize getirir", "insafına bırakmayın", "ekosistem", "%100", ünlem ve emir yağmuru. Sağlık, tedavi ve başarı oranı iddiası yasaktır.
- Haberlerde (yasa, dava, rapor) ton daha da hafiftir. Örnek: "Benzer bir sınırı kendi telefonunda kurmak isteyenler için Limitra App Block, seçtiğin uygulamalara belirli saatlerde erişimi kapatmayı sağlıyor."
- Konuyla doğal bir bağ kurulamıyorsa uygulama anılmaz. Sayfanın altındaki ürün kutusu tanıtımı zaten yapıyor.
- Atıf cümlesi her dilde yerel ve doğal yazılır. Uygulama adları çevrilmez: "Limitra App Block", "Limitra Social".
```

2. `daily-article-instructions.md` içindeki "Limitra Entegrasyonu" maddesini sil (içinde "kalkan / aşılmaz" geçen eski talimat); yerine "Atıf için LİMİTRA'YA ATIF KURALLARI bölümüne uy." yaz.
3. İki dosyanın "ÇEVİRİLER" bölümüne şunu ekle: "Her dilde `content` o dile tamamen çevrilir; İngilizce gövdeyle yetinmek yasaktır."
4. İki dosyanın teknik yayın adımlarında `npm run check:links` adımından sonra `npm run check:lang` ekle (0 sorun olmadan devam yok).
5. `daily-article-instructions.md` içinde kategori kuralını netleştir: pratik rehberler `Ekran Süresi Kontrolü` kategorisine girer ve Aşama 1.2 sayesinde rehber bölümünde otomatik görünür.

---

## AŞAMA 3: Mevcut içeriklerde yapmacık tanıtım dilini düzelt

Kapsam: Limitra geçen 77 öğe ve ID 1–22 (şu an Limitra hiç geçmiyor).

1. Aday listesi:
   `node -e "const d=require('./src/data/haberler.json');for(const a of d){const i=a.content.findIndex(p=>/limitra/i.test(p));console.log(a.id,a.category,i<0?'YOK':(i===a.content.length-1?'son':'ORTA:'+i))}"`
   Paragraf ortasında Limitra geçen öğeyi (en az bir tane var) de ele al.
2. Her öğe için önce Türkçe, sonra İngilizce yeni son paragrafı yaz. Aşama 2'deki kurallar geçerli. Paragrafın Limitra'dan önceki kısmında gerçek bir konu kapanışı varsa onu koru, yalnız tanıtım cümlelerini değiştir.
3. Ardından aynı paragrafı diğer 9 dile çevir. Toplu uygulama için `scripts/translations/closing-<id>.json` (biçim `{ "tr": "...", "en": "...", ... }`) ve tüm dillerde `content` dizisinin son elemanını değiştiren bir betik kullan. ID 1–22 için kapanış **eklenirse** betik değiştirmek yerine sona ekleme yapmalı.
4. ID 1–22: yalnız doğal bir bağ varsa kısa bir kapanış ekle. Yoksa dokunma ve sonuç raporunda "bağ kurulamadı" diye listele.
5. Örnek dönüşümler:

   - KÖTÜ (ID 98): "Limitra ekosistemi, AB'nin hedeflediği bu koruma duvarını bugünden cebinize getirir: Limitra App Block ile kendinize ve ailenize günlük 1 saatlik tavizsiz kullanım tavanları belirleyebilir, Limitra Social ile ..."
   - İYİ: "Yasa yürürlüğe girene kadar sınırı kendisi koymak isteyen aileler için Limitra App Block, seçilen uygulamalara günlük süre limiti koymayı ve limit atlandığında bunu uygulama içindeki kayıtta görmeyi sağlıyor."

   - KÖTÜ (ID 72): "Kendi ruh sağlığınızı algoritmaların insafına bırakmayın. Limitra App Block'un katı kota sistemiyle günlük toplam sürenizi 30 dakikaya kilitleyerek ..."
   - İYİ: "Araştırmadaki 30 dakikalık sınırı denemek isteyenler, Limitra App Block'ta sosyal medya uygulamalarına uygulama başına günlük süre limiti koyarak başlayabilir."

6. Kontrol: Bitince 11 dilde yasak kelimeleri ara (her dilin karşılıklarıyla birlikte; TR için: `aşılmaz|kırılamaz|tavizsiz|zırh|kalkan|cebinize|insafına|ekosistem`). Sonuç 0 olmalı. "Yazılmayacaklar" listesindeki iddiaları da ara (uzaktan kontrol, toplam süre, %).

---

## Teknik doğrulama ve yayın (her aşama sonunda; yayın en sonda bir kez)

1. `npm run build` → 0 hata
2. `npm run check:links` → kırık bağlantı yok
3. `npm run check:lang` → 0 sorun
4. `npm run sitemap`
5. `git add -A; git commit -m "[<model>] fix: <aşama özeti>"; git push origin main` (her aşama ayrı commit)
6. Son aşamadan sonra: `npm run deploy` → çıktıda "Current Version ID" görülmeli
7. `npm run check:live` → "Canli site guncel."
8. `ISLEM_GECMISI.md` (en üste) ve `SON_DURUM.md` güncelle.

Bir adım başarısız olursa yayınlama. Nedenini sonuç raporuna yaz ve dur.

---

## Sonuç raporu (uygulayan model doldurur)

- Aşama 1.1, özellikler hangi uygulamada doğrulandı (dosya yolu ile):
- Aşama 1.2, değiştirilen dosyalar; rehber sayısı; URL listesi değişti mi:
- Aşama 1.3, DOI doğrulandı mı; değişen cümle:
- Aşama 1.4:
- Aşama 1.5, çevrilen öğe sayısı; `check:lang` sonucu:
- Aşama 2, değişen dosyalar:
- Aşama 3, yeniden yazılan öğe ID'leri; ID 1–22'den eklenenler / bağ kurulamayanlar:
- Yasak kelime taraması sonucu:
- Deploy sürüm ID'si; commit hash'leri:
- Kullanıcıya sorulması gereken açık konular:
