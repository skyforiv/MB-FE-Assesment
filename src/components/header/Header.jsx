import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Characters
        </NavLink>
        <NavLink
          to="/favoriteCharacters"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Favorite Characters
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          About Project
        </NavLink>
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