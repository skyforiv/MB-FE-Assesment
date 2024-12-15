import { fetchData } from "./FetchService";

// Rick and Morty API'dan tüm karakterleri almak için asenkron fonksiyon
export async function getCharacters(params) {
  const config = {
    params: {
      page: 1,
    },
  };

  try {
    // İlk sayfayı API'dan fetch et
    const { error, loading, result } = await fetchData(
      "https://rickandmortyapi.com/api/character",
      config
    );

    const results = []; // Tüm karakterleri toplamak için bir array

    if (result) {
      // İlk sayfanın sonuçlarını toplama ekle
      results.push(...result.results);

      const totalPages = result.info.pages; // Toplam sayfa sayısını al

      // Diğer sayfaları fetch etmek için bir promise listesi oluştur
      const resultPromises = [];
      for (let page = 2; page <= totalPages; page++) {
        // Her sayfa için fetchData çağrısı eklenir
        resultPromises.push(
          fetchData(`https://rickandmortyapi.com/api/character`, {
            params: { page }, 
          })
        );
      }

      try {
        // Tüm sayfaları paralel olarak fetch et
        const otherResults = await Promise.all(resultPromises);

        // Her bir sayfanın sonuçlarını toplama ekle
        otherResults.forEach((o) => {
          if (o.error) {
            // Hata oluşursa, işlemi durdur ve hatayı döndür
            throw o.error;
          }
          if (o.result && o.result.results) {
            results.push(...o.result.results); // Başarılı sonuçları ekle
          }
        });
      } catch (err) {
        // Paralel isteklerde hata oluşursa, hata bilgisi ile dön
        return { error: err, loading: false, results };
      }
    }

    // Tüm sonuçları ve bilgi alanını döndür
    return { error, loading, result: { results, info: result.info } };
  } catch (err) {
    // Genel hata durumunda boş sonuç ve hata bilgisi döndür
    return { error: err, loading: false, result: { results: [], info: {} } };
  }
}