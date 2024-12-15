import { fetchData } from "./FetchService";

export async function getCharacters(params) {
  const config = {
    params: {
      page: 1,
    },
  };

  try {
    // İlk sayfayı fetch et
    const { error, loading, result } = await fetchData(
      "https://rickandmortyapi.com/api/character",
      config
    );

    const results = [];

    if (result) {
      // İlk sayfanın sonuçlarını ekle
      results.push(...result.results);
      const totalPages = result.info.pages;

      // Diğer sayfaları fetch etmek için promise listesi oluştur
      const resultPromises = [];
      for (let page = 2; page <= totalPages; page++) {
        resultPromises.push(
          fetchData(`https://rickandmortyapi.com/api/character`, {
            params: { page },
          })
        );
      }

      try {
        // Tüm sayfaları paralel olarak fetch et
        const otherResults = await Promise.all(resultPromises);

        // Her bir sayfanın sonuçlarını results listesine ekle
        otherResults.forEach((o) => {
          if (o.error) {
            // Herhangi bir hata oluşursa, ana hatayı güncelle
            // Burada ilk hatayı döndürüyoruz, 
            throw o.error;
          }
          if (o.result && o.result.results) {
            results.push(...o.result.results);
          }
        });
      } catch (err) {
        // Hata durumunda hata bilgisi ile dön
        return { error: err, loading: false, results };
      }
    }
    return { error, loading, result: { results, info: result.info } };
  } catch (err) {
    // Hata durumunda hata bilgisi ile dön
    return { error: err, loading: false, result: { results: [], info: {} } };
  }
}
