import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    feedback: "Amazing service! I found the perfect home thanks to their help.",
    image: "./testimonial1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    feedback: "Very professional and dedicated team. Highly recommended!",
    image: "./testimonial2.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h1 className="title">What Our Clients Say</h1>
        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h2 className="testimonial-name">{testimonial.name}</h2>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
