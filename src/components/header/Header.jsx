import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Menü açılıp kapanma durumunu kontrol eden state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü durumunu değiştiren fonksiyon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <img
          src="/img/Rick_and_Morty.svg" 
          alt="Rick and Morty Logo" 
          className="header-logo" 
        />
      </div>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          Characters
        </Link>
        <Link to="/favoriteCharacters" className="nav-link">
          Favorite Characters
        </Link>
        <Link to="/about" className="nav-link">
          About Project
        </Link>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "rotate" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "rotate" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "rotate" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;