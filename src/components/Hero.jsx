import React from 'react';
import './Hero.css';
import men from '../assets/men.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="left-section">
        <p className="intro">Hi, I am</p>
        <h1 className="name">Tomasz Gajda</h1>
        <p className="role">Front-end Developer / UI Designer</p>
        <div className="social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="right-section">
        <img src={men} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
