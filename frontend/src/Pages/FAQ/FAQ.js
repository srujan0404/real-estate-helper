import React from "react";
import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "How do I start searching for a property?",
    answer:
      "You can start by using our search bar on the home page to find properties that match your criteria.",
  },
  {
    id: 2,
    question: "What types of properties do you offer?",
    answer:
      "We offer a wide range of properties including apartments, houses, and luxury villas.",
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
