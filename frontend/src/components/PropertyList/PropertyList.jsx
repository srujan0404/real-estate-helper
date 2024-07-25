import React from "react";
import "./PropertyList.css";

const properties = [
  {
    id: 1,
    image: "./property1.jpg",
    name: "Luxury Apartment",
    location: "New York, USA",
    price: "$1,000,000",
  },
  {
    id: 2,
    image: "./property2.jpg",
    name: "Modern Villa",
    location: "Los Angeles, USA",
    price: "$900,000",
  }
];

const PropertyList = () => {
  return (
    <section className="property-list">
      <div className="inner-width property-list-container">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <div className="property-info">
              <h3 className="property-name">{property.name}</h3>
              <p className="property-location">{property.location}</p>
              <p className="property-price">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
