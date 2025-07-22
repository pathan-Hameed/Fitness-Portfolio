import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./contactbutton.css";

const ContactButton = () => {
  return (
    <div className="contact-button-container">
      <a
        href="mailto:you@example.com?subject=Portfolio Inquiry"
        className="contact-button"
      >
        <FaEnvelope className="contact-icon" />
      </a>
    </div>
  );
};

export default ContactButton;