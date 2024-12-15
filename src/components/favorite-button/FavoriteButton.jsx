import React, { useState, useEffect } from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ id, characterData }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorite = favorites.find((item) => item.id === id);
    if (favorite) {
      setIsFavorite(true);
    }
  }, [id]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      const newFavorite = { ...characterData };
      if (favorites.filter(f => f.id === id)?.length === 0)
        favorites.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }

    window.dispatchEvent(new Event("localDataStorage"));
  };

  return (
    <button
      className={`favorite-button ${isFavorite ? "favorited" : ""}`}
      onClick={handleFavoriteClick}
      title={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
      aria-label={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"}
    >
      <i className={`fas ${isFavorite ? "fa-star" : "far fa-star"}`}></i>
    </button>
  );
};

export default FavoriteButton;