import axios from 'axios';

export async function fetchData(url, config = {}) {
  let loading = true;
  let error = null;
  let result = null;

  try {
    const response = await axios.get(url, config);
    // Başarılı istek
    result = response.data;
    loading = false;
    error = null;
  } catch (err) {
    // Hata durumunda
    loading = false;
    error = err;
    result = null;
  }

  return { loading, error, result };
}