import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings inner-width g-container">
        <div className="flex-col-center inner-container">
          <h1 className="primary-text">Get started with Homyz</h1>
          <p className="secondary-text">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </p>
          <a href="mailto:dharmassr@gmail.com" className="button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
