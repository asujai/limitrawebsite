# Limitra Uygulama Özellikleri ve Tanıtım Kuralları

Bu belge, Limitra App Block ve Limitra Social uygulamalarının kod tabanlarında doğrulanmış resmi özellik envanterini ve içerik üretiminde uyulması zorunlu kuralları belirler.

---

## 1. Limitra App Block (`com.gardiyan.app`)
**Repo:** `C:\Users\abdul\gardiyan2`

1. **Uygulama Başına Günlük Süre Limiti:** Seçilen uygulamalara bağımsız olarak günlük kullanım süresi limiti belirlenir; süre dolduğunda uygulama engellenir.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\data\local\entity\RestrictedAppEntity.kt` ve `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\ui\screens\SetupTargetScreen.kt`*
2. **Saat Aralığına Göre Engelleme:** Kullanıcı belirli bir saat aralığı (ör. 22:00–06:00) seçebilir ve hedef uygulamalar yalnızca bu saatlerde engellenir. Ayrı bir "Gece Kilidi" butonu/adı yoktur; bu bir zaman aralığı ayarıdır.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\data\model\RestrictionSchedule.kt` ve `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\ui\screens\SetupTargetScreen.kt`*
3. **Uygulama İçi Zaman Çizelgesi ve Olay Kaydı:** Limit ihlalleri, kilit tetiklenmeleri ve izin değişiklikleri yerel veritabanında zaman damgasıyla saklanır; kullanıcı veya ebeveyn bunu çocuğun kendi telefonunda açıp geriye dönük inceleyebilir.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\data\local\entity\StatusLogEntity.kt` ve `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\ui\screens\ProfileScreen.kt`*
4. **Sistem Üzeri Kilit Ekranı:** Süre dolduğunda veya kısıtlı saat aralığında hedef uygulamanın üzerine Stoacı metinler içeren kilit kartı bindirilir.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\service\BlockOverlayService.kt`*
5. **Geri Tuşu ve Son Uygulamalar Direnci:** Kilit ekranı aktifken erişilebilirlik servisi aracılığıyla geri tuşu ve son uygulamalar menüsüyle kilidi baypas etme girişimleri engellenir.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\service\AppBlockAccessibilityService.kt`*
6. **Tamamen Çevrimdışı Çalışma (Sıfır Ağ Erişimi):** Uygulama `INTERNET` iznine sahip değildir ve Android manifest seviyesinde ağ izinleri kaldırılmıştır; hiçbir veri dışarı aktarılmaz.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\AndroidManifest.xml`*
7. **Zincir ve Disiplin Takibi:** Kurallara uyulan günler ardışık disiplin zinciri ve başarı rozetleriyle takip edilir.
   - *kaynak: kod `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\data\achievements\Achievements.kt` ve `C:\Users\abdul\gardiyan2\app\src\main\java\com\gardiyan\app\ui\components\DisciplineChain.kt`*

---

## 2. Limitra Social (`com.limitra.socialprototype`)
**Repo:** `C:\Users\abdul\limitrasocial`

1. **UID ile Arkadaş Ekleme:** Benzersiz kullanıcı kimliği (UID) paylaşılarak karşılıklı arkadaşlık bağlantısı kurulur.
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\java\com\limitra\socialprototype\social\ui\friends\FriendsScreen.kt`*
2. **Akran Sorumluluğu ve Şeffaf Takip:** Eklenen arkadaşların belirledikleri uygulama limitleri ve gün içindeki kullanım süreleri profil ekranında karşılıklı görüntülenir.
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\java\com\limitra\socialprototype\social\ui\friends\FriendProfileScreen.kt`*
3. **1 Uygulama Ücretsiz Kısıtlama:** Ücretsiz planda 1 uygulama için süre limiti tanımlanabilir; daha fazla uygulama için Pro abonelik gerekir (sitede fiyat yazılmaz).
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\java\com\limitra\socialprototype\billing\BillingManager.kt`*
4. **Saat Aralığına Göre Engelleme:** Seçilen uygulamalar için günün belirli saat aralıklarında engelleme penceresi ayarlanabilir.
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\java\com\limitra\socialprototype\data\model\RestrictionSchedule.kt`*
5. **Uygulama İçi Zaman Çizelgesi (Timeline):** Gerçekleşen engellemeler ve log kayıtları zaman çizelgesi arayüzünde tarih filtreleriyle incelenebilir.
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\java\com\limitra\socialprototype\ui\screens\TimelineScreen.kt`*
6. **11 Dilde Yerelleştirilmiş Arayüz:** Uygulama arayüzü 11 dili (TR, EN, ES, FR, DE, PT, IT, AR, ID, FIL, TH) tam olarak destekler.
   - *kaynak: kod `C:\Users\abdul\limitrasocial\app\src\main\res\values`*

---

## 3. Yazılmayacaklar (Kesinlikle Yasak Olan İddialar)

1. **Uzaktan Ebeveyn Kontrolü:** "Ailenize kendi telefonunuzdan limit koyun", "çocuğunuzu uzaktan takip edin/kilitleyin" gibi ifadeler kesinlikle kullanılamaz. Ebeveyn denetimi yalnızca çocuğun kendi cihazında uygulama içi kayıt ekranı açılarak yerel olarak yapılabilir.
2. **Cihaz Geneli Toplam Süre Kilidi:** "Tüm telefonun süresini günde 30 dakikaya kilitleyin" gibi ifadeler yasaktır. Limitler uygulama bazlıdır (uygulama başına süre limiti).
3. **Aşılmaz / Kırılamaz İddiaları:** "Aşılmaz kalkan", "kırılamaz zırh", "%100 tavizsiz kilit" gibi abartılı mutlak iddialar yasaktır. Doğru ifade: "kapatılır veya atlanırsa uygulama içi kayıtta görünür".
4. **Tıbbi / Sağlık Tedavi İddiaları:** Limitra için herhangi bir tıbbi tedavi, klinik teşhis, DEHB iyileştirme veya yüzde bazlı başarı/kurtulma garantisi verilemez.
5. **Uzaktan Arkadaş Ekranı Kilitleme:** Limitra Social için "arkadaşınız süresi dolunca sizin telefonunuzu kilitler" gibi ifadeler yasaktır; yalnızca kullanım ve limit süreleri karşılıklı görünür.
6. **Fiyat Rakamları:** Sitede ve içeriklerde hiçbir para birimi ve fiyat rakamı yazılamaz.
7. **Yapay ve Agresif Pazarlama Dili:** "Cebinize getirir", "algoritmaların insafına bırakmayın", "koruma ekosistemi", ünlem işaretleri ve emir kipiyle dolu yapmacık metinler yazılamaz.
