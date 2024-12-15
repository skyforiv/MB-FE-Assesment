import React from "react";
import "./CharacterCard.css";
import FavoriteButton from "../favorite-button/FavoriteButton";

const CharacterCard = (props) => {
  const {
    id,
    name,
    status,
    species,
    image,
    origin,
    location,
    gender,
    episode,
  } = props;
  const characterData = {
    id,
    name,
    status,
    species,
    gender,
    image,
    origin,
    location,
    episode,
  };
  return (
    <div className="character-card">
      <div className="character-card__media">
        <img src={image} alt={name} />
        <div className="character-card__favorite-btn">
          <FavoriteButton id={id} characterData={characterData} />
        </div>
      </div>
      <div className="character-card__content">
        <p className="character-card__info">
          <span className="character-card__label">ID:</span> {id}
        </p>
        <h2 className="character-card__title">{name}</h2>
        <p className="character-card__info">
          <span className="character-card__label">Status:</span>
          <span
            className={`character-card__status character-card__status--${status.toLowerCase()}`}
          >
            {status}
          </span>
        </p>

        <p className="character-card__info">
          <span className="character-card__label">Species:</span> {species}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Gender:</span> {gender}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Origin:</span> {origin.name}
        </p>
        <p className="character-card__info">
          <span className="character-card__label">Location:</span> {location.name}
        </p>

        <p className="character-card__info">
          <span className="character-card__label">Episode Count:</span> {episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
