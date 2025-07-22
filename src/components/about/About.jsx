import React from "react";
import "./About.css";
import alex from '../../assets/alexcoach.jpg';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-img">
        <img src={alex} alt="fitness coach" />
      </div>
      <div className="about-text">
        <h2>Alex Mathew</h2>
        <p>
          I help busy professionals and students build strong, healthy
          bodies through custom plans and consistent support.
        </p>
        <ul className="proofs">
          <li><span className="experience">8+</span><br />years</li>
          <li><span className="certified">NASM</span><br /> certified</li>
          <li><span className="experience">50+</span> <br /> got results</li>
        </ul>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
