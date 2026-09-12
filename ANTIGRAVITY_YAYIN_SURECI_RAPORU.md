# Antigravity Yayın Süreci Teşhis Raporu

* **Hazırlayan:** Claude — 2026-09-12
* **Muhatap:** Antigravity (günlük haber sidecar'ı `webierik` + manuel görevler)
* **Soru:** "Her şeyi tamamladım" deniyor ama canlıda görünmüyor. Neden?
* **Kısa cevap:** Deploy adımı **isteğe bağlı** sayılıyor ve "tamamlandı" kararı **canlı doğrulama olmadan** veriliyor. Ayrıca günlük zamanlayıcı yalnızca Antigravity uygulaması açıkken çalışıyor; tetiklense bile 11 Eylül oturumu hiç içerik üretmedi.

---

## 1. Kanıtlar

### 1a. Commit var, deploy yok (bugün)
| Zaman | Olay | Kaynak |
|-------|------|--------|
| 12 Eyl 19:16 | `e6852b8 [antigravity] fix: apply mobile experience report fixes…` commit'lendi | `git log` |
| 12 Eyl 19:30 | ISLEM_GECMISI kaydı: *"Sonraki Öneri: **İstenirse** `git push` ve `npm run deploy:vps` ile dağıtım yapılabilir"* | `ISLEM_GECMISI.md` |
| 12 Eyl ~19:18 | Canlı `/` JSON-LD hâlâ `"price":"29.99","priceCurrency":"TRY"` | Claude `curl` |
| 12 Eyl 19:20 | Claude `npm run deploy:vps` → sürüm `20260912-192034`; canlı USD/0.49 | VPS `releases/` |

→ Antigravity görevi "kod + commit" olarak tanımladı; kullanıcıya "tamamlandı" dedi, deploy'u kullanıcı onayına bıraktı. Kullanıcı ise "tamamlandı" = "canlıda görünüyor" bekliyor.

### 1b. Deploy ertelendi, hiç yapılmadı (ID 32)
| Zaman | Olay |
|-------|------|
| 6 Eyl 07:04 | ID 31 deploy edildi → VPS `20260906-070441` ✔ |
| 6 Eyl 09:18 | ID 32 commit `813d9e6`. Kayıt: *"VPS SSH banner exchange zaman aşımı verdi; panelden yeniden başlatma sonrasında deploy edilecek"* |
| 6–8 Eyl | **Hiç release yok.** ID 32 üç gün boyunca canlıya çıkmadı |
| 9 Eyl 09:19 | ID 33 ile birlikte deploy → `20260909-091920` |

→ Ertelenen deploy için takip mekanizması yok; "sonra yapılacak" notu unutuldu.

### 1c. Günlük haber boşlukları
`haberler.json` son 8 kayıt: 09-09 (33), 09-06 (32, 31), 09-05 (30, 29, 28, 27, 26).
**7, 8, 10, 11, 12 Eylül'de haber yok.** 5 Eylül'de 5 haber var (üst üste).

### 1d. Sidecar zamanlayıcısı süreç-bağımlı
`~/.gemini/antigravity/sidecar_data/webierik/logs/`:
```
09-09 09:14  Triggering agentapi … conversation e66bd416  → ID 33 üretildi ✔
09-09 21:58  Scheduler started  (Next: 09-10 06:00 UTC)
09-10 13:16  Scheduler started  ← 09-10 penceresi kaçtı (uygulama kapalıydı)
09-11 22:00  Triggering agentapi … conversation 4631e459  → HİÇ ÇIKTI YOK (commit yok, haber yok)
09-12 05:12  shutting down … 12:41 / 13:56 / 14:34 / 15:09 dört kez yeniden başladı
```
* Zamanlayıcı Antigravity uygulamasının içinde çalışıyor; uygulama kapalıysa saat geçince atlanıyor, "kaçırılan görevi telafi et" mantığı yok.
* 11 Eylül 22:00 tetiği **başarıyla** ateşlendi ama sohbet hiçbir şey üretmedi (ne commit, ne ISLEM_GECMISI kaydı). Olası neden: yeni sohbet kullanıcı onayı/etkileşim bekleyip zaman aşımına uğradı ya da kilit mantığı yanlış "bugün zaten var" dedi. Log dışında iz yok → **sidecar oturumları kendi sonuç kaydını bırakmalı** (bkz. §3.4).

### 1e. Sidecar prompt'unda deploy adımı yok
`sidecar.json` prompt'u: *"Değişikliklerden sonra **mümkünse** mevcut build/test işlemlerini çalıştır."* Deploy, push ve canlı doğrulama hiç geçmiyor (yalnızca kilit bölümünde "deploy yapma" olarak olumsuz). `AGENTS.md` madde 3'te deploy var ama prompt AGENTS.md'ye atıf yapmıyor.

### 1f. Push da yapılmıyor
`origin/main` = `22fa0b9` (12 Eyl 04:43). Sonraki 4 commit (Antigravity `e6852b8` dahil) GitHub'a gitmedi.

---

## 2. Kök nedenler (öncelik sırası)

1. **"Bitti" tanımı yanlış.** Bitti = commit. Olması gereken: bitti = canlıda HTTP 200 + içerik doğrulandı.
2. **Deploy koşullu/isteğe bağlı** ifade ediliyor ("istenirse", "mümkünse"). Haber görevinde AGENTS.md zorunlu diyor ama sidecar prompt'u demiyor; haber dışı görevlerde hiçbir kural yok.
3. **Ertelenen deploy takipsiz.** SSH hatası → "sonra" → unutuldu.
4. **Zamanlayıcı uygulamaya bağlı.** Antigravity kapalıysa gün atlanıyor; telafi yok.
5. **Sidecar oturumu sessiz ölüyor.** Başarısız/boş oturum hiçbir kayıt bırakmıyor, kimse fark etmiyor.

---

## 3. Antigravity'nin yapacakları

### 3.1 AGENTS.md — "Tamamlanma Tanımı" (tüm görevler için)
`AGENTS.md`'ye ekle:
```
## Tamamlanma Tanımı (Definition of Done) — her görev için zorunlu
Bir görev ancak şu 5 adım geçtiğinde "tamamlandı" denir; aksi hâlde raporda
"KISMİ — deploy bekliyor" yazılır ve bloke eden neden belirtilir:
1. npm run build  → 0 hata
2. npm run check:links → OK
3. git commit + git push origin main
4. npm run deploy:vps → "Yayin tamamlandi" satırı ve sürüm numarası
5. npm run check:live → "Canli site guncel." (canlı URL HTTP 200 + fiyat şeması)
Deploy hata verirse (SSH timeout, load > 3.0): en fazla 3 kez, 2'şer dakika arayla
tekrar dene; yine olmazsa SON_DURUM.md "Bilinen Sorunlar"a "DEPLOY BEKLİYOR: <sürüm/commit>"
satırı yaz. Bu satır varken başlayan her oturum ÖNCE bekleyen deploy'u yapar.
```

### 3.2 Sidecar prompt'u (`~/.gemini/config/sidecars/webierik/sidecar.json`, `args[3]`)
"TEKNİK UYGULAMA" bölümündeki *"mümkünse build/test"* cümlesini şu blokla değiştir:
```
YAYIN (ZORUNLU, SIRAYLA — atlanamaz):
1. npm run build (0 hata)   2. npm run check:links   3. npm run sitemap
4. git add -A && git commit -m "[antigravity] feat: <haber> (ID <n>)" && git push origin main
5. npm run deploy:vps  → çıktıda "Yayin tamamlandi" görülmeden devam etme
6. npm run check:live  → "Canli site guncel." görülmeden görevi bitirme
7. ISLEM_GECMISI.md + SON_DURUM.md güncelle; kayıtta deploy sürüm numarasını yaz.
Bu 7 adımdan biri başarısızsa görev TAMAMLANMAMIŞTIR; nedenini SON_DURUM.md
"Bilinen Sorunlar"a yaz ve "KISMİ" olarak raporla.
Kullanıcıdan onay bekleme; bu görev tam otonomdur.
```
Ayrıca kilit bölümüne ekle: *"Haber yoksa bile bu oturumun sonucunu (üretildi / atlandı / hata) tek satırla `ISLEM_GECMISI.md`'ye yaz."* → sessiz ölüm biter.

### 3.3 Zamanlayıcı yedeği (Windows Görev Zamanlayıcı)
Sidecar Antigravity kapalıyken çalışmıyor. Mevcut `scripts/check-daily-news.ps1 -AutoTrigger` zaten telafi yapıyor; onu Windows'ta bağımsız zamanla:
```powershell
$act = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File C:\Users\abdul\lmitraweb\scripts\check-daily-news.ps1 -AutoTrigger"
$trg = @( (New-ScheduledTaskTrigger -Daily -At 22:30), (New-ScheduledTaskTrigger -Daily -At 09:30) )
Register-ScheduledTask -TaskName "Limitra-Gunluk-Haber-Telafi" -Action $act -Trigger $trg -Description "Sidecar kaçırdıysa haber görevini tetikler"
```
22:30 = sidecar 22:00'yi kaçırdıysa; 09:30 = gece de olmadıysa sabah telafi. Betik zaten "bugün haber varsa çık" diyor, çift üretim olmaz. (`agentapi` PATH'te olmalı; değilse tam yol yaz.)

### 3.4 Sidecar oturumu iz bırakmalı
`check-daily-news.ps1` sonuna ekle: tetikleme sonrası 30 dk bekleyip `npm run check:live` çalıştır; hâlâ FAIL ise `SON_DURUM.md`'ye "HABER TETİKLENDİ AMA CANLIDA YOK — <tarih>" yaz. Böylece 11 Eylül'deki gibi boş oturumlar görünür olur.

### 3.5 Hemen yapılacak (bugün)
1. `git push origin main` (4 commit bekliyor).
2. 12 Eylül haberi: bugün 22:00 sidecar'ı bekleme; `check-daily-news.ps1 -AutoTrigger` ile şimdi üret, §3.2'deki 7 adımı uygula, `npm run check:live` ile bitir.
3. 11 Eylül boş oturumunun (`4631e459`) sohbet geçmişine bak; neden çıktı üretmediğini ISLEM_GECMISI'ne tek cümleyle yaz.

---

## 4. Claude'un bu raporla birlikte eklediği araç
* `scripts/check-live.mjs` + `npm run check:live`: `haberler.json[0]` slug'ının canlıda 200 döndüğünü ve canlı JSON-LD fiyatının `schema.ts` ile eşleştiğini kontrol eder; canlı gerideyse çıkış kodu 1 ve "deploy gerekli" mesajı. Şu an: **OK / Canli site guncel.**

## 5. Kabul kriteri
Bir hafta boyunca her gün: `haberler.json[0].date == bugün` **ve** `npm run check:live` OK. Bunlardan biri bozulursa SON_DURUM.md'de nedeni yazılı olmalı; "sessiz" gün olmamalı.
