import React from "react";
import "./HeroSection.css";
import './Navbar.css';


const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Choose a service to get started.</h1>
        <div className="search-bar">
          <input type="text" id="serviceSearch" placeholder="Search for a service (e.g. 'cleaning')" onChange={searchService} />
          <button><span role="img" aria-label="search">🔍</span></button>
        </div>
      </div>
    </section>
  );
};

const searchService = (e) => {
  const query = e.target.value.toLowerCase();
  const services = document.querySelectorAll(".service-box");
  services.forEach((box) => {
    const service = box.innerText.toLowerCase();
    box.style.display = service.includes(query) ? "block" : "none";
  });
};

export default HeroSection;