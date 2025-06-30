import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="title-box">ABOUT ME</div>
      <p className="about-text">
        Nulla in velit a mauris rhoncus gravida. Nulla congue nulla vel sem tristique, sed luctus urna varius.
      </p>

      <div className="explore-wrapper">
        <div className="line"></div>
        <button className="explore-btn">EXPLORE</button>
        <div className="line"></div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>DESIGN</h3>
          <p>I can design the best UI/UX for your app and website using Figma, XD, and best UI practices.</p>
        </div>
        <div className="feature-card">
          <h3>DEVELOPMENT</h3>
          <p>I can build front-end code using React JS, HTML/CSS, and make your UI come alive.</p>
        </div>
        <div className="feature-card">
          <h3>MAINTENANCE</h3>
          <p>I can update the features, fix bugs, and keep your site performing smoothly post-launch.</p>
        </div>
      </div>

      <div className="bottom-btn">
        <div className="title-box">SKILLS</div>
      </div>
    </section>
  );
};

export default About;
