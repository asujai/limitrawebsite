# Limitra Günlük Haber ve Makale Üretim Yönergeleri

Limitra web sitesinin haberler ve makaleler bölümünü günlük olarak güncelle.

## GÜNLÜK YAYIN KİLİDİ (KESİNLİKLE İLK ADIMDA KONTROL ET)
İşleme başlamadan önce İLK OLARAK `src/data/haberler.json` dosyasını oku ve en üstteki (en son yayınlanan) haberin `date` değerini kontrol et.
- Bugünün tarihi ile bu haberin tarihi aynıysa (yani bugün için zaten bir haber yayınlanmışsa):
  KESİNLİKLE yeni bir haber/makale üretme, dosyaları değiştirme, build alma, commit atma ve VPS'e deploy yapma.
  "Bugünün haberi zaten mevcut olduğu için yeni içerik üretilmedi." diyerek görevi hemen başarıyla sonlandır. Haber yoksa veya atlandıysa bile bu oturumun sonucunu (üretildi / atlandı / hata) tek satırla `ISLEM_GECMISI.md`'ye yaz.
- Yalnızca en son haberin tarihi bugünden daha eskiyse (yani bugün henüz haber yayınlanmamışsa) yeni içerik hazırlama sürecine devam et.

## ÖNCE PROJEYİ İNCELE
Her çalışmada önce mevcut projeyi ve https://limitra.online/ sitesinin yapısını incele:
- Limitra'nın ne yaptığını, hedef kitlesini ve ürünün gerçek özelliklerini anla.
- Mevcut haber/makale yapısını, kategorileri, URL/slug düzenini ve içerik formatını koru.
- Projede aktif olarak desteklenen tüm dilleri/i18n locale'lerini tespit et. Dil listesini tahmin etme veya sabit kabul etme (`tr`, `en`, `es`, `fr`, `de`, `pt`, `it`, `ar`, `id`, `fil`, `th`).
- Daha önce yayınlanan içerikleri kontrol et ve aynı haberi veya çok benzer bir makaleyi tekrar yayınlama.

## GÜNLÜK İÇERİK SEÇİMİ
Her gün Limitra'nın alanıyla doğrudan ilişkili, okuyucuya gerçek değer sağlayan 1 adet yeni içerik hazırla.

Öncelikli konular:
- Ekran süresi
- Akıllı telefon ve sosyal medya kullanımı
- Dijital bağımlılık / problemli dijital kullanım
- Dikkat ve odaklanma
- Dijital iyi oluş
- Uyku ve ekran kullanımı
- Çocuklar ve gençlerin teknoloji kullanımı
- Okullarda telefon kullanımı
- Sosyal medya platformlarıyla ilgili yeni düzenlemeler
- Ülkelerin dijital kullanım ve sosyal medya politikaları
- Bilimsel araştırmalar ve akademik çalışmalar
- Uygulama sınırlama ve dijital disiplin yöntemleri
- Android ve mobil cihazlardaki dijital sağlık gelişmeleri

Öncelikle son günlerde ortaya çıkan gerçek ve önemli bir gelişme olup olmadığını araştır.
Gerçek ve yayınlanmaya değer güncel bir gelişme varsa HABER oluştur.
O gün yeterince önemli ve doğrulanabilir yeni bir gelişme yoksa sırf günlük içerik yayınlamak için haber uydurma. Bunun yerine bilimsel kaynaklara ve güvenilir verilere dayanan, zamandan bağımsız ve faydalı bir MAKALE/REHBER oluştur.

## DOĞRULUK KURALLARI — KESİNLİKLE İHLAL ETME
Yayınlanan hiçbir bilgi tahmin, kurgu veya uydurma olamaz.

Kesinlikle:
- Sahte haber üretme.
- Gerçekleşmemiş bir olayı gerçekleşmiş gibi yazma.
- Kanun teklifini yürürlüğe girmiş yasa gibi gösterme.
- Planlanan bir uygulamayı başlamış gibi anlatma.
- Bir araştırmanın sonucunu olduğundan güçlü gösterme.
- Korelasyonu nedensellik olarak sunma.
- İstatistik, tarih, para miktarı, yüzde, kişi sayısı veya araştırma sonucu uydurma.
- Olmayan kurum açıklaması, uzman görüşü veya alıntı üretme.
- Kaynakta bulunmayan bir bilgiyi kaynağa atfetme.
- Tıklama almak için başlığı sansasyonelleştirme.
- Limitra'nın gerçekte sahip olmadığı özellikleri varmış gibi gösterme.
- Limitra hakkında kanıtlanamayacak başarı, sağlık veya davranış değişikliği iddiaları oluşturma.

Bir bilgi güvenilir şekilde doğrulanamıyorsa o bilgiyi KULLANMA.
Bir haberin temel iddiası doğrulanamıyorsa o haberi YAYINLAMA ve başka bir konu seç.

## ARAŞTIRMA VE KAYNAK KURALLARI
İçeriği yazmadan önce internetten araştırma yap.

Kaynaklarda şu sırayı tercih et:
1. Resmî devlet / kamu kurumları
2. Üniversiteler ve akademik kurumlar
3. Hakemli bilimsel çalışmalar ve araştırmanın orijinal yayını
4. Uluslararası kuruluşlar
5. Şirketlerin kendi resmî açıklamaları
6. Reuters, AP, BBC gibi güvenilir haber kuruluşları
7. Diğer güvenilir ve editoryal denetime sahip yayınlar

Mümkün olduğunda bir haberin ana iddialarını birden fazla bağımsız kaynaktan doğrula.
Özellikle şu bilgileri tek tek kontrol et:
- Olayın tarihi
- Ülke/kurum
- Sayısal veriler
- Yasanın/düzenlemenin mevcut statüsü
- Araştırmanın kim tarafından yapıldığı
- Araştırmanın örneklem büyüklüğü ve temel sonucu
- Açıklamanın gerçekten söylenip söylenmediği

Eski bir haberi yeni olmuş gibi sunma. Olay tarihi ile yayın tarihini birbirine karıştırma.

## İÇERİK KALİTESİ
İçeriği başka sitelerden kopyalama.
Kaynaklardan bilgi edin ancak metni özgün olarak yaz.
Metin:
- İnsan tarafından yazılmış gibi doğal olmalı.
- Gereksiz yapay zekâ klişelerinden kaçınmalı.
- Bilgilendirici olmalı.
- Abartılı ve korku yaratan bir dil kullanmamalı.
- Okuyucuya somut bilgi vermeli.
- Gereksiz tekrar içermemeli.
- Salt SEO için anahtar kelime doldurmamalı.

Haberlerde haber dili kullan.
Rehber ve makalelerde açıklayıcı ve öğretici bir dil kullan.
Tıbbi veya psikolojik konularda kesin teşhis/tedavi iddiaları oluşturma. Bilimsel kaynak ne söylüyorsa sınırlarını koruyarak aktar.

## SEO
Her içerik için uygun şekilde:
- Özgün başlık
- SEO title
- Meta description
- Kısa ve anlamlı URL slug
- İçeriğe uygun kategori
- Yayın tarihi
- Tahmini okuma süresi
hazırla.

Başlık hem arama motoru açısından anlaşılır hem de gerçek içeriği doğru temsil eden bir başlık olsun. Clickbait kullanma.
Gerektiğinde Limitra'nın ilgili rehberlerine veya ana sayfasına doğal internal link ekle; fakat makaleyi Limitra reklamına dönüştürme.

## ÇEVİRİLER
Ana içerik tamamlandıktan ve doğruluğu kontrol edildikten sonra projede desteklenen TÜM dillere çevir.
Dil listesini kendin varsayma; repository içindeki mevcut locale/i18n yapısından tespit et (`haberler.json` ve `news-*.json` [en, es, fr, de, pt, it, ar, id, fil, th]).

Çeviriler:
- Anlam açısından ana metinle birebir tutarlı olmalı.
- Sayıları, tarihleri, kişi/kurum isimlerini ve bilimsel sonuçları değiştirmemeli.
- Kelime kelime mekanik çeviri yerine o dilde doğal okunmalı.
- Başlıklar da o dilde doğal ve SEO açısından anlamlı olmalı.
- Kurumların ve kanunların resmî isimlerini yanlış çevirmemeli.
- Kaynaklar bütün dil sürümlerinde aynı gerçek kaynakları göstermeli.
- Çeviri sırasında ana metne yeni iddia veya bilgi eklenmemeli.

## YAYINLAMADAN ÖNCE SON KONTROL
Her içerik için yayınlamadan önce aşağıdakileri kontrol et:
1. Ana iddia kaynaklarla doğrulanıyor mu?
2. Tarihler doğru mu?
3. Sayılar doğru mu?
4. Haber güncelmiş gibi yanlış sunulmuş mu?
5. Başlık metinden daha güçlü bir iddia içeriyor mu?
6. Kaynaklarda olmayan herhangi bir bilgi eklenmiş mi?
7. Var olmayan bir alıntı kullanılmış mı?
8. Bilimsel araştırmanın sonucu abartılmış mı?
9. Aynı veya çok benzer içerik daha önce yayınlanmış mı?
10. Tüm desteklenen dil sürümleri hazırlanmış mı?
11. Çevirilerde anlam veya veri değişmiş mi?
12. URL'ler ve internal linkler çalışıyor mu?
13. Site tasarımı ve mevcut içerik yapısı korunmuş mu?

## TEKNİK UYGULAMA VE YAYIN (ZORUNLU, SIRAYLA — atlanamaz)
1. `npm run build` (0 hata)
2. `npm run check:links` (kırık bağlantı yok)
3. `npm run sitemap`
4. `git add -A && git commit -m "[antigravity] feat: <haber başlığı> (ID <n>)" && git push origin main`
5. `npm run deploy:vps` → çıktıda "Yayin tamamlandi" görülmeden devam etme
6. `npm run check:live` → "Canli site guncel." görülmeden görevi bitirme
7. `ISLEM_GECMISI.md` + `SON_DURUM.md` güncelle; kayıtta deploy sürüm numarasını yaz.

Bu 7 adımdan biri başarısızsa görev TAMAMLANMAMIŞTIR; nedenini `SON_DURUM.md` "Bilinen Sorunlar"a yaz ve "KISMİ" olarak raporla.
Kullanıcıdan onay bekleme; bu görev tam otonomdur.
Haber yoksa veya atlandıysa bile bu oturumun sonucunu (üretildi / atlandı / hata) tek satırla `ISLEM_GECMISI.md`'ye yaz.

## EN ÖNEMLİ KURAL:
"Bugün mutlaka bir haber yayınlanmalı" düşüncesi doğruluğun önüne geçemez.
Güvenilir ve doğrulanabilir güncel haber bulunmuyorsa sahte veya zayıf bir haber üretmek yerine kaynaklı, kaliteli ve zamandan bağımsız bir makale/referans içeriği yayınla.
Doğruluk > içerik sayısı > SEO.
