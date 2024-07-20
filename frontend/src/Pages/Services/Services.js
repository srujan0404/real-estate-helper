import React from "react";
import "./ServicesPage.css";

const services = [
  {
    id: 1,
    title: "Property Management",
    description:
      "We manage properties efficiently and effectively, ensuring they are well-maintained and profitable.",
    icon: "🏢",
  },
  {
    id: 2,
    title: "Real Estate Consulting",
    description:
      "Get expert advice on buying, selling, and investing in real estate with our knowledgeable consultants.",
    icon: "🧑‍💼",
  },
  {
    id: 3,
    title: "Property Valuation",
    description:
      "Accurate and reliable property valuations to help you make informed decisions.",
    icon: "📈",
  },
  {
    id: 4,
    title: "Rental Services",
    description:
      "Comprehensive rental services including tenant screening and lease management.",
    icon: "🏠",
  },
  // Add more services as needed
];

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="container">
        <h1 className="title">Our Services</h1>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
  