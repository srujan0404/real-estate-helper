import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">
          We’d love to hear from you! Reach out to us using the form below.
        </p>
        <form className="contact-form">
          <label htmlFor="name" className="contact-label">
            Name:
          </label>
          <input type="text" id="name" name="name" className="contact-input" />

          <label htmlFor="email" className="contact-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
          />

          <label htmlFor="message" className="contact-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-textarea"
          ></textarea>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
