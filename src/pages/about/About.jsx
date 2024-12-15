import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Proje Hakkında</h1>
      <div className="about-card">
        <p className="about-description">
          Bu proje, <strong>Rick and Morty API</strong> ile etkileşimli çalışan bir React frontend uygulamasıdır. Uygulama, bir tablo içerisinde veri sunumunun yanı sıra filtreleme, sıralama ve sayfalama gibi özelliklere sahiptir. Kullanıcılar, bir karakterin detaylarını görüntüleyebilir ve favorilere ekleyebilir.
        </p>
        <p className="about-description">
          Ek olarak, kullanıcılar grid ve satır görünümü arasında geçiş yaparak karakterleri farklı layoutlarda görüntüleyebilir. Proje tamamen sıfırdan oluşturulmuş bir tablo bileşeni kullanmaktadır.
        </p>
        <h2 className="about-subtitle">Teknik Detaylar</h2>
        <ul className="about-list">
          <li><strong>Framework/Kütüphane:</strong> React JS</li>
          <li><strong>State Yönetimi:</strong> React State Hook</li>
          <li><strong>Stil:</strong> CSS</li>
          <li><strong>API:</strong> Rick and Morty API</li>
        </ul>
        <p className="about-description">
          Proje ile ilgili tüm detaylar ve rapor, aşağıdaki bağlantıda bulunan GitHub repository'sinde yer almaktadır.
        </p>
        <a
          href="https://github.com/skyforiv/MB-FE-Assesment"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository'sine Göz Atın
        </a>
      </div>
    </div>
  );
};

export default About;