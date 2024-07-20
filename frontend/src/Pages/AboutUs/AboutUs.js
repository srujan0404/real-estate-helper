import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1 className="title">About Us</h1>
        <p className="description">
          We are a company dedicated to finding the best properties for our
          customers. Our vision is to make every person find the perfect place
          to live.
        </p>
        <div className="team">
          <h2 className="team-title">Meet Our Team</h2>
          {/* Add Team component here if needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
