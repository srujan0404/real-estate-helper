import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* First row */}
            <div className="flexStart row">
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
            </div>

            {/* Second row */}
            <div className="flexStart row">
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
        </div>

        {/* Right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactMode = ({ icon, title, detail, buttonText }) => (
  <div className="flexColCenter mode">
    <div className="flexStart">
      <div className="flexCenter icon">{icon}</div>
      <div className="flexColStart detail">
        <span className="primaryText">{title}</span>
        <span className="secondaryText">{detail}</span>
      </div>
    </div>
    <div className="flexCenter button">{buttonText}</div>
  </div>
);

export default Contact;
