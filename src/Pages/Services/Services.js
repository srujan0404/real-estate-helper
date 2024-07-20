import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="container">
        <h1 className="title">Our Services</h1>
        <div className="services-list">
          <div className="service">
            <h2 className="service-title">Property Management</h2>
            <p className="service-description">
              We manage properties efficiently and effectively.
            </p>
          </div>
          <div className="service">
            <h2 className="service-title">Real Estate Consulting</h2>
            <p className="service-description">
              Get expert advice on buying and selling properties.
            </p>
          </div>
          {/* Add more services as needed */}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
