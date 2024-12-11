import { fetchData } from "./FetchService";



export async function getCharacters(params) {
    const config = {
      params
    };
    
    return await fetchData('https://rickandmortyapi.com/api/character', config);
}