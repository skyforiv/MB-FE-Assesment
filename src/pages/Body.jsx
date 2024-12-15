import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./character-list/CharacterList";
import { getCharacters } from "../services/RickandMortyService";
import About from "./about/About";

const Body = () => {
  // Karakterlerin durumunu tutan state: yükleme, hata ve sonuçlar için
  const [characterState, setCharacterState] = useState({
    loading: false,
    error: {},
    result: { results: [] },
  });

  // Favori listeyi tutan state
  const [favoriteList, setFavoriteList] = useState([]);

  // Favori listeyi local storagedan günceller
  const updateFavoriteList = () => {
    const localFavorites = localStorage.getItem("favorites");
    const favorites = JSON.parse(localFavorites) || []; // JSON formatını parse et ve varsayılan boş dizi ata
    setFavoriteList(favorites);
  };

  useEffect(() => {
    getCharactersAsync(); // API'dan karakterleri alır
    updateFavoriteList(); // Favori listeyi başlatır
    // Local storage güncellemelerini dinler
    window.addEventListener("localDataStorage", updateFavoriteList);

    // Event listenerı kaldırır
    return () => {
      window.removeEventListener("localDataStorage", updateFavoriteList);
    };
  }, []);

  // API'den karakterleri asenkron getir
  const getCharactersAsync = async () => {
    const result = await getCharacters(); // API isteği
    setCharacterState({
      error: result.error, // Hata varsa kaydet
      result: result.result, // Sonuçları kaydet
      loading: result.loading, // Yükleme durumu
    });
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<CharacterList key={1} characterState={characterState} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/favoriteCharacters"
          element={
            <CharacterList
              key={2}
              characterState={{
                loading: false, // Favori listede yükleme yok
                error: null, // Favori listede hata yok
                result: { results: favoriteList }, // Favori karakterler listesi
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Body;