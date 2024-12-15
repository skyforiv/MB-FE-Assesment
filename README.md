**Canlı Demo:** [Rick and Morty Uygulaması](https://mb-fe-assesment.vercel.app)

# Proje Raporu

## Genel Bakış
Bu proje, Rick and Morty API ile etkileşimli çalışan bir frontend React uygulamasıdır. Uygulama, bir tablo içerisinde veri sunumunun yanı sıra filtreleme, sıralama ve sayfalama gibi özelliklere sahiptir. Ayrıca tablodan seçilen bir karakterin detaylarını gösterebilme ve favorilere ekleme özelliği sunmaktadır. Kullanıcı Grid ve Row layoutları arasında geçiş yapabilmektedir, böylelikle karakterler satır halinde veya kart olarak görüntülenebilmektedir.

### Ekstra Özellikler
Projede istenilen gereksinimlerde favori ve layout geçişleri bulunmamaktaydı ancak bunlar eklenmiştir. Projede hazır tablo componenti kullanılmamıştır.

---

## Ana Özellikler

### Filtreleme:
- Çok kriterli filtreleme (isim, durum veya tür bazında).
- Kullanıcı dostu metin giriş alanları ve düğmeler aracılığıyla filtreleme.

### Sıralama:
- Dinamik sıralama seçenekleri (isme veya diğer özelliklere göre sıralama).

### Sayfalama:
- Ayarlanabilir sayfa boyutları (20, 50, 100 sonuç).
- Verileri hızlı ve verimli şekilde işleme.

### Detay Görünümü:
- Tablo satırına tıklandığında, seçilen karakterin detaylı bilgileri tablonun altında gösterilir.

### Hata Yönetimi:
- Filtreleme sonrası veri bulunamaması durumunda kullanıcıya uygun bir mesaj gösterilir.
- API hataları ve yükleme durumları için geri bildirimler sağlanır.

### Responsive Tasarım:
- Mobil cihazlarla uyumlu, tamamen responsive bir arayüz.

---

## Ekran Görüntüleri

<img src="https://github.com/user-attachments/assets/c60caf89-3b49-42a2-b417-fb554c7f98f7" width="500" />
<img src="https://github.com/user-attachments/assets/442d8ba6-d64d-4518-bf18-283e66b049be" width="500" />
<img src="https://github.com/user-attachments/assets/3b5f648b-5a84-41ca-8bf0-3ba1e6702c1e" height="500" />


## Teknik Detaylar
- **Framework/Kütüphane:** React JS
- **State Yönetimi:** React State Hook
- **Style:** CSS
- **API:** Rick and Morty API
- **Deployment:** Vercel
  - **Uygulama adresi:** [https://mb-fe-assesment.vercel.app/](https://mb-fe-assesment.vercel.app/)

---

## Proje Yapısı
```bash
src/
├── components/       
├── pages/            
├── services/              
└── App.js           
```

---

## Kullanım Talimatları

1. **Repository'i klonlayın:**
   ```bash
   git clone https://github.com/skyforiv/MB-FE-Assesment.git
   cd MB-FE-Assesment
   ```

2. **Dependencies yükleyin:**
   ```bash
   npm install
   ```

3. **Development ortamını başlatın:**
   ```bash
   npm start
   ```
   - Uygulama, [http://localhost:3000](http://localhost:3000) adresinde kullanılabilir olacaktır.

4. **Prod için build alın:**
   ```bash
   npm run build
   ```

---

## Deployment
Bu proje Vercel üzerinde deploy edilmiştir. Canlı uygulamaya [https://mb-fe-assesment.vercel.app/](https://mb-fe-assesment.vercel.app/) üzerinden erişebilirsiniz.

---

## Kod Kalitesi ve Best Practices

### Clean Code:
- Modüler ve tekrar kullanılabilir componentler.
- Karmaşık fonksiyonlar için yorum satırları.

### Hata Yönetimi:
- API hataları ve boş durumlar için geri bildirimler.
- Anlamlı hata mesajları.

### Testler:
- Yanlış API cevapları, geçersiz filtreler gibi uç durumlar için manuel testler yapılmıştır.

---

## Proje Değerlendirme

### Functional Requirements
- **Tablo ve Grid Fonksiyonları:**
  - API'den alınan verilerin bir tablo veya grid görünümünde listelenmesi.
  - Kullanıcının tablo ve grid arasında geçiş yapabilmesi.
  - Verilerin filtrelenebilmesi (isim, durum, tür vb.).
  - Verilerin isme veya diğer özelliklere göre sıralanabilmesi.
  - Tablo ve grid görünümlerinde sayfalama desteği eklenmesi.

- **Detay Görünümü:**
  - Kullanıcı bir satıra tıkladığında seçilen karakterin detaylarını göstermesi.

- **Favori Sistemi:**
  - Kullanıcıların karakterleri favorilere ekleyip çıkarabilmesi.
  - Favori listesi, kullanıcı oturumu boyunca saklanmalı.

- **Hata Yönetimi:**
  - API'den veri alınamazsa, kullanıcıya hata mesajı gösterilmesi.
  - Filtreleme sonrası sonuç bulunamazsa, uygun bir bilgi mesajı sunulması.
  - Favorilere ekleme/çıkarma işlemleri sırasında hata oluşursa kullanıcı bilgilendirilmesi.

### Non-Functional Requirements
- **Performans:**
  - Tüm verilerin paralel isteklerle yüklenmesi sayesinde hızlı bir deneyim sağlanması.
  - 250'den fazla veriyi verimli bir şekilde filtreleme, sıralama ve görüntüleme.

- **Kullanılabilirlik:**
  - Arayüzün her cihazda (mobil, tablet, masaüstü) düzgün çalışması.
  - Grid ve tablo görünümünün arasında kolay geçiş yapılabilmesi.

- **Hata Dayanıklılığı:**
  - Hata durumlarında sistemin çökmeden çalışmaya devam etmesi ve kullanıcıya bilgi verilmesi.

- **Bakım Kolaylığı:**
  - Modüler bileşenler ile kolay genişletilebilir yapı.

- **Favori Yönetimi:**
  - Favorilerin kullanıcının oturumu boyunca korunması.

---

## Use Cases

### Use Case 1: Verileri Görüntüleme
- **Adı:** Verileri Görüntüleme
- **Amaç:** Kullanıcıların API'den gelen verileri tablo veya grid görünümünde hızlı bir şekilde görüntülemesini sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, internet bağlantısına sahip olmalıdır.
  - API, istekleri yanıt verebilir durumda olmalıdır.
- **Senaryo:**
  1. Kullanıcı, uygulamayı başlatır.
  2. Sistem, paralel istekler kullanarak API'den verileri çeker.
  3. API, mevcut verileri JSON formatında döner.
  4. Sistem, alınan verileri tablo veya grid görünümünü uygun şekilde işler.
  5. Kullanıcı, tüm karakterlerin listelendiği tablo veya grid görünümünü görür.
- **Alternatif Akışlar:**
  - **A1:** API yanıt vermez: “Oops bir hata oluştu.” mesajı görülür.
  - **A2:** Veri bulunamaz: “No results found.” mesajı görülür.
- **Sonuç:** Kullanıcı, karakter verilerini başarıyla görüntüler.

---

### Use Case 2: Verileri Filtreleme
- **Adı:** Verileri Filtreleme
- **Amaç:** Kullanıcıların belirli kriterlere göre verileri filtrelemesini sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, verilerin listelendiği bir tablo veya grid görünümünü görmelidir.
  - Filtreleme için geçerli kriterler kullanılabilir olmalıdır (isim, gender, status).
- **Senaryo:**
  1. Kullanıcı, filtrelemek istediği kriteri seçer (isim alanına bir değer girer).
  2. Sistem, kullanıcının girdiği kriteri işler ve uygun bir sorgu oluşturur.
  3. API, filtreleme kriterlerine uygun sonuçları döner.
  4. Sistem, dönen sonuçları işler ve tablo veya grid görünümünü günceller.
  5. Kullanıcı, filtreleme kriterine uygun sonuçları görüntüler.
- **Alternatif Akışlar:**
  - **A1:** Filtreleme sonucu veri bulunamaz: “No results found.” mesajı gösterilir.
- **Sonuç:** Kullanıcı, istedikleri kriterlere göre verileri filtreler.

---

### Use Case 3: Verileri Sıralama
- **Adı:** Verileri Sıralama
- **Amaç:** Kullanıcıların verileri artan veya azalan sırada sıralamasını sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, tablo veya grid görünümünde verileri görmelidir.
- **Senaryo:**
  1. Kullanıcı, sıralama yapılacak bir sütunu seçer (isim sütunu).
  2. Sistem, kullanıcının seçimine göre sıralama düzenini belirler.
  3. Sistem, verileri sıralar ve tablo veya grid görünümünü günceller.
- **Sonuç:** Kullanıcı, verileri istedikleri kritere göre sıralar.

---

## Use Case 4: Sayfalama

- **Adı:** Sayfalama
- **Amaç:** Kullanıcıların büyük veri setini sayfalara bölerek kolayca görüntülemesini sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, tablo veya grid görünümünü kullanıyor olmalıdır.
  - Veri seti, belirli bir sayfa boyutunu aşmalıdır.
- **Senaryo:**
  1. Kullanıcı, sayfa boyutunu seçer (her sayfada 20 sonuç gibi).
  2. Sistem, seçilen sayfa boyutuna göre verileri böler ve ilk sayfayı görüntüler.
  3. Kullanıcı, bir sonraki veya önceki sayfaya geçmek için navigasyon düğmelerini kullanır.
  4. Sistem, kullanıcının seçtiği sayfanın verilerini gösterir.
  5. Kullanıcı, istediği sayfanın içeriğini görüntüler.

- **Sonuç:** Kullanıcı, büyük veri setini sayfalara bölerek kolayca görüntüler.

---

## Use Case 5: Karakter Detay Görüntüleme

- **Adı:** Karakter Detay Görüntüleme
- **Amaç:** Kullanıcının seçtiği bir karakterin detaylarını görüntülemesini sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, tablo veya grid görünümünde karakter listesini görmelidir.
- **Senaryo:**
  1. Kullanıcı, görmek istediği karakterin satırına/objesine tıklar.
  2. Sistem, karakterin detay bilgilerini tabloda veya grid görünümünün altında gösterir.
  3. Kullanıcı, karakter hakkında detaylı bilgileri (name, species, status, location) görür.

- **Sonuç:** Kullanıcı, istediği karakterin detaylı bilgilerine erişir.

---

## Use Case 6: Favori Yönetimi

- **Adı:** Favori Yönetimi
- **Amaç:** Kullanıcının karakterleri favorilere ekleyip çıkarmasını sağlamak.
- **Ana Aktör:** Kullanıcı
- **Ön Koşullar:**
  - Kullanıcı, tablo veya grid görünümünde karakter listesini görmelidir.
- **Senaryo:**
  1. Kullanıcı, bir karakteri favorilere eklemek için pasif olan "Yıldız" butonuna tıklar.
  2. Sistem, favori durumunu local olarak günceller ve kullanıcının favori listesini günceller.
  3. Kullanıcı, karakterin favorilere eklendiğini görür.
  4. Kullanıcı, bir karakteri favorilerden çıkarmak için aktif olan sarı renkli "Yıldız" butonuna tıklar.
  5. Sistem, favori durumu lokalde günceller.

- **Sonuç:** Kullanıcı, favorilere ekleme ve çıkarma işlemlerini başarıyla tamamlar.
