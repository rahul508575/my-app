import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Top Address and Phone Bar */}
      <div className="navbar-top">
        <div className="navbar-address">
          <img src="/flag.png" alt="USA Flag" className="icon" />
          <span>12100 Ford Rd. Suite 372, Farmers Branch, Texas 75234</span>
        </div>
        <div className="navbar-phone">
          <img src="/india.png" alt="India Flag" className="icon" />
          <span>+91 (999) 053-7631</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar-main">
        <div className="logo">
          <img src="/logo.png" alt="EDS Logo" />
        </div>
        <ul className="nav-links">
          <li>THE COMPANY</li>
          <li>DEVELOPMENT ▾</li>
          <li>DIGITAL MARKETING ▾</li>
          <li>PORTFOLIO</li>
          <li>PACKAGES</li>
          <li>CONTACT US</li>
        </ul>
        <button className="audit-button">FREE SITE AUDIT</button>
      </nav>
    </>
  );
};

export default Navbar;
