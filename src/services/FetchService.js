import axios from "axios";

// API'dan veri çekmek için asenkron fonksiyon
export async function fetchData(url, config = {}) {
  // Init variables
  let loading = true; // Yükleme durumu
  let error = null;   // Hata durumunu tutar
  let result = null;  // API'dan dönen sonucu tutar

  try {
    // URL'e GET isteği gönder
    const response = await axios.get(url, config);
    // Başarılı istek durumu
    result = response.data; // API yanıtındaki veriler
    loading = false;        // Yükleme tamamlandı
    error = null;           // Hata yok
  } catch (err) {
    // Hata durumunda çalışır
    loading = false;        // Yükleme tamamlandı (hata olsa bile)
    error = err;            // Hata bilgisi kaydedilir
    result = null;          // Sonuç null yapılır
  }

  // Yükleme, hata ve sonucu döndür
  return { loading, error, result };
}