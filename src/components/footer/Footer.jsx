import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="rick-and-morty-footer">
      <div className="footer-container">
        <div className="footer-text">
          <h2>Welcome to the Rick and Morty Universe!</h2>
          <p>
            Massive Bioinformatics Front-end Assesment
          </p>
        </div>

        <div className="spaceship-container">
          <img
            src="/img/spaceship.png" 
            alt="spaceship"
            className="spaceship"
          />
        </div>

        <div className="characters">
          <img
            src="/img/morty.webp" 
            alt="Morty"
            className="character morty"
          />

          <img
            src="/img/rick.webp" 
            alt="Rick"
            className="character rick"
          />
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 - Designed by <span>Çağlar Numanoğlu</span>
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/skyforiv"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
