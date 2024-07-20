import React from "react";
import "./PropertyDetailsPage.css";

const PropertyDetailsPage = ({ property }) => {
  return (
    <section className="property-details-page">
      <div className="container">
        <h1 className="title">{property.title}</h1>
        <div className="property-images">
          {property.images.map((image, index) => (
            <img
              src={image}
              alt={`Property ${index}`}
              key={index}
              className="property-image"
            />
          ))}
        </div>
        <div className="property-info">
          <h2 className="info-heading">Details</h2>
          <p className="info-description">{property.description}</p>
          <div className="info-features">
            {property.features.map((feature, index) => (
              <span key={index} className="feature">
                {feature}
              </span>
            ))}
          </div>
          <div className="info-price">
            <h2 className="price">${property.price}</h2>
            <button className="button">Contact for More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
