import React, { useState } from 'react';
import "./CharacterRow.css";

const CharacterRow = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  const { id, name, status, species, gender, image, origin, location, episode } = props;

  const isOpenRender = () => {
    return (
        
        <div className="table-row-details">
          <div className="details-content">
            <p><strong>Orijin:</strong> {origin.name}</p>
            <p><strong>Konum:</strong> {location.name}</p>
            <p><strong>Bölüm Sayısı:</strong> {episode.length}</p>
          </div>
        </div>
       
    );
  }

  return (
    <>
      <div  className={`table-row ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="table-cell">
          <img src={image} alt={name} className="character-image" />
        </div>
        <div className="table-cell">{name}</div>
        <div className="table-cell">{status}</div>
        <div className="table-cell">{species}</div>
        <div className="table-cell">{gender}</div>
      </div>
      {isOpen && isOpenRender() }
    </>

  );
};

export default CharacterRow;