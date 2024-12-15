import React, { useState, useEffect } from "react";
import "./FavoriteButton.css";

const FavoriteButton = ({ id, characterData }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Component yüklendiğinde favori durumunu kontrol eder
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorite = favorites.find((item) => item.id === id);
    if (favorite) {
      setIsFavorite(true); // Eğer karakter favorilerdeyse durum güncellenir
    }
  }, [id]);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); 
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Eğer karakter zaten favorilerdeyse, çıkarılır
      const updatedFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false); // Favori durumu kaldırılır
    } else {
      // Eğer karakter favorilerde değilse, eklenir
      const newFavorite = { ...characterData };
      if (favorites.filter(f => f.id === id)?.length === 0) // Çift eklemeyi engeller
        favorites.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true); // Favori durumu aktif edilir
    }

    // Favoriler güncellenince diğer bileşenlere bilgi verir
    // fFavori sayfasına geçince yenilemeden favorilerin görünmesi için
    window.dispatchEvent(new Event("localDataStorage"));
  };

  return (
    <button
      className={`favorite-button ${isFavorite ? "favorited" : ""}`} 
      onClick={handleFavoriteClick}
      title={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"} 
      aria-label={isFavorite ? "Favorilerden Kaldır" : "Favorilere Ekle"} 
    >
      <i className={`fas ${isFavorite ? "fa-star" : "far fa-star"}`}></i> {/* İkon favori durumuna göre değişir */}
    </button>
  );
};

export default FavoriteButton;