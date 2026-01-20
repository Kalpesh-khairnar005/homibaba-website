import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">Homieebaba</a>
      <ul>
        <li><a href="#services">All Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;