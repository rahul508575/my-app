import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">TG</div>
      <ul className="nav-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <a href="#contact" className="contact-btn">Contact Me</a>
    </nav>
  );
};

export default Navbar;
