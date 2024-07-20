import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <p className="description">
          Feel free to reach out to us through the form below.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
