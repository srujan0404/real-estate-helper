import React from "react";
import "./PropertyList.css";

const properties = [
  {
    id: 1,
    image: "./property1.jpg",
    name: "Property 1",
    location: "New York, USA",
    price: "$1,000,000",
  },
  {
    id: 2,
    image: "./property2.jpg",
    name: "Property 2",
    location: "Los Angeles, USA",
    price: "$900,000",
  },
];

const PropertyList = () => {
  return (
    <section className="property-list">
      <div className="inner-width flex-center property-list-container">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <div className="property-info">
              <h3>{property.name}</h3>
              <p>{property.location}</p>
              <p>{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
