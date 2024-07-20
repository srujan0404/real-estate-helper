import React from "react";
import "./PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  return (
    <section className="privacy-policy-page">
      <div className="content-container">
        <h1 className="title">Privacy Policy</h1>
        <p className="intro">
          We value your privacy. This Privacy Policy outlines how we collect,
          use, and safeguard your personal information.
        </p>
        <div className="policy-sections">
          {policyData.map((section, index) => (
            <div key={index} className="policy-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const policyData = [
  {
    title: "Information Collection",
    content:
      "We collect information when you visit our website, register for an account, or contact us directly.",
  },
  {
    title: "Use of Information",
    content:
      "Your information helps us provide and enhance our services, communicate with you, and fulfill other purposes as described.",
  },
  {
    title: "Data Security",
    content:
      "We implement robust measures to protect your data from unauthorized access, modification, or destruction.",
  },
  // Add more sections as needed
];

export default PrivacyPolicyPage;
