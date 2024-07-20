import React from "react";
import "./PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  return (
    <section className="privacy-policy-page">
      <div className="container">
        <h1 className="title">Privacy Policy</h1>
        <p className="intro">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your information.
        </p>
        <div className="policy-sections">
          <div className="policy-section">
            <h2 className="section-title">Information Collection</h2>
            <p className="section-content">
              We collect information from you when you visit our website,
              register for an account, or contact us.
            </p>
          </div>
          <div className="policy-section">
            <h2 className="section-title">Use of Information</h2>
            <p className="section-content">
              We use your information to provide and improve our services,
              communicate with you, and for other purposes as described.
            </p>
          </div>
          <div className="policy-section">
            <h2 className="section-title">Data Security</h2>
            <p className="section-content">
              We implement appropriate measures to protect your data from
              unauthorized access, alteration, or destruction.
            </p>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
