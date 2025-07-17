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
        <h2>Meet Coach Alex</h2>
        <p>
          I'm Alex, a certified personal trainer with 8+ years of experience.{" "}
          <br />
          <br />I help busy professionals and students build strong, healthy
          bodies through custom plans and consistent support.
        </p>
        <ul className="proofs">
          <li>NASM Certified</li>
          <li>Online Coaching Available</li>
          <li>Tailored Diet + Workout Plans</li>
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
