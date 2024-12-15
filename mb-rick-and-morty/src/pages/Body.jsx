import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./character-list/CharacterList";
import { getCharacters } from "../services/RickandMortyService";

const Body = () => {
  const [characterState, setCharacterState] = useState({
    loading: false,
    error: {},
    result: { results: [] },
  });

  const [favoriteList, setFavoriteList] = useState([]);

  const updateFavoriteList = () => {
    const localFavorites = localStorage.getItem("favorites");
    const favorites = JSON.parse(localFavorites) || [];
    setFavoriteList(favorites);
  };

  useEffect(() => {
    getCharactersAsync();
    updateFavoriteList();
    window.addEventListener("localDataStorage", updateFavoriteList);

    return () => {
      window.removeEventListener("localDataStorage", updateFavoriteList);
    };
  }, []);

  const getCharactersAsync = async () => {
    const result = await getCharacters();
    setCharacterState({
      error: result.error,
      result: result.result,
      loading: result.loading,
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
          path="/favoriteCharacters"
          element={
            <CharacterList
              key={2}
              characterState={{
                loading: false,
                error: null,
                result: { results: favoriteList },
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Body;
