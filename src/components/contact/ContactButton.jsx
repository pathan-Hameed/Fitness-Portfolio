import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./contactbutton.css";

const ContactButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if user is on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIfMobile(); // Check on initial render
    window.addEventListener("resize", checkIfMobile); // Update on resize

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="contact-button-container">
  <a
    href={isMobile ? "tel:+1234567890" : "mailto:you@example.com?subject=Portfolio Inquiry"}
    className="contact-button"
  >
    {isMobile ? <FaPhone size={50} /> : <FaEnvelope size={100} />}
  </a>
</div>
  );
};

export default ContactButton;
