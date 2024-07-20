import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="contact-us" className="contact-wrapper">
      <div className="container flex-center contact-container">
        {/* Left side */}
        <div className="flex-col-start contact-left">
          <h2 className="highlight-text">Contact Us</h2>
          <h1 className="main-heading">Easy to contact us</h1>
          <p className="description-text">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          <div className="grid contact-modes">
            {/* First row */}
            <ContactMode
              icon={<MdCall size={25} />}
              title="Call"
              detail="021 123 145 14"
              buttonText="Call now"
            />
            <ContactMode
              icon={<BsFillChatDotsFill size={25} />}
              title="Chat"
              detail="021 123 145 14"
              buttonText="Chat now"
            />

            {/* Second row */}
            <ContactMode
              icon={<BsFillChatDotsFill size={25} />}
              title="Video Call"
              detail="021 123 145 14"
              buttonText="Video Call now"
            />
            <ContactMode
              icon={<HiChatBubbleBottomCenter size={25} />}
              title="Message"
              detail="021 123 145 14"
              buttonText="Message now"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="contact-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactMode = ({ icon, title, detail, buttonText }) => (
  <div className="contact-mode">
    <div className="mode-header">
      <div className="icon">{icon}</div>
      <div className="mode-detail">
        <h3 className="mode-title">{title}</h3>
        <p className="mode-text">{detail}</p>
      </div>
    </div>
    <button className="mode-button">{buttonText}</button>
  </div>
);

export default Contact;
