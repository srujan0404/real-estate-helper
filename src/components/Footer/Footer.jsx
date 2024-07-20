import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="paddings inner-width flex-center footer-container">
        <div className="flex-col-start footer-left">
          <img src="./logo2.png" alt="Homyz Logo" className="footer-logo" />
          <p className="secondary-text">
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        <div className="flex-col-start footer-right">
          <h2 className="primary-text">Information</h2>
          <p className="secondary-text">145 New York, FL 5467, USA</p>
          <nav className="flex-center footer-menu">
            <a href="#property">Property</a>
            <a href="#services">Services</a>
            <a href="#product">Product</a>
            <a href="#about-us">About Us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
