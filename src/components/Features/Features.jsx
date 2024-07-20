import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="inner-width flex-center features-container">
        <div className="feature">
          <img src="./feature1.png" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>Description of feature 1.</p>
        </div>
        <div className="feature">
          <img src="./feature2.png" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>Description of feature 2.</p>
        </div>
        <div className="feature">
          <img src="./feature3.png" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>Description of feature 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
