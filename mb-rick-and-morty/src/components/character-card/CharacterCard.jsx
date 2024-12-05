import React from 'react';
import "./CharacterCard.css"

const CharacterCard = (props) => {
    const { name, status, species, image, origin, location } = props;

  return (
    <div className="character-card">
      <div className="character-card__media">
        <img src={image} alt={name} />
      </div>
      <div className="character-card__content">
        <h2 className="character-card__title">{name}</h2>
        <p className="character-card__info">
          <span className="character-card__label">Durum:</span> {status}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Tür:</span> {species}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Orijin:</span> {origin.name}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Konum:</span> {location.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;