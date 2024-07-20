import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Homyz helped me find the perfect home!",
    image: "./john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "The service was exceptional and very professional.",
    image: "./jane-smith.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="inner-width flex-center testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
