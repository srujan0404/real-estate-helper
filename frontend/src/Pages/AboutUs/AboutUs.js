import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-wrapper">
      <div className="container flex-center about-container">
        <div className="about-left">
          <h1 className="main-heading">About Us</h1>
          <p className="description-text">
            We are committed to providing the best real estate services to our
            customers. Our mission is to make finding your perfect home a
            hassle-free experience.
          </p>
        </div>
        <div className="about-right">
          <div className="image-container">
            <img src="./about-us.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
