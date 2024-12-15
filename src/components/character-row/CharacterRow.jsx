import React, { useState } from "react";
import "./CharacterRow.css";
import FavoriteButton from "../favorite-button/FavoriteButton";

const CharacterRow = (props) => {
  // Açılır/kapanır detay satırı için state yönetimi
  const [isOpen, setIsOpen] = useState(false);

  // Props'tan alınan karakter verileri
  const { id, name, status, species, gender, image, origin, location, episode } = props;

  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "status-alive";
      case "Dead":
        return "status-dead";
      case "unknown":
        return "status-unknown";
      default:
        return "";
    }
  };

  // Satır açıldığında gösterilecek detayları oluşturan fonksiyon
  const isOpenRender = () => {
    return (
      <div className="table-row-details">
        <div className="details-column">
          <img src={image} alt={name} />
        </div>
        <div className="details-column">
          <p>{name}</p>
        </div>
        <div className="details-column">
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Species:</strong> {species}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Origin:</strong> {origin.name}</p>
          <p><strong>Location:</strong> {location.name}</p>
          <p><strong>Episode Count:</strong> {episode.length}</p>
        </div>
      </div>
    );
  };

  const characterData = { id, name, status, species, gender, image, origin, location, episode };

  return (
    <>
      <div
        className={`table-row ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="table-cell first-cell">
          <i
            className={`fas fa-chevron-right ${isOpen ? " rotate" : ""} expand-icon`}
            onClick={(e) => {
              e.stopPropagation(); // Tıklamanın üst seviyeye taşınmasını engelle
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Satırı Kapat" : "Satırı Aç"}
            aria-label={isOpen ? "Satırı Kapat" : "Satırı Aç"}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsOpen(!isOpen); // Klavyeden Enter ile aç/kapat
            }}
          ></i>
          <img src={image} alt={name} className="character-image" />
        </div>

        <div className="table-cell table-cell__id">{id}</div>
        <div className="table-cell table-cell__name">{name}</div>
        <div className="table-cell">
          <p className={`${getStatusClass(status)}`}>{status}</p>
        </div>
        <div className="table-cell">{species}</div>
        <div className="table-cell">
          {gender}
          <FavoriteButton id={id} characterData={characterData} />
        </div>
      </div>

      {isOpen && isOpenRender()}
    </>
  );
};

export default CharacterRow;