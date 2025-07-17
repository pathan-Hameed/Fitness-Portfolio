import React from "react";
import "./FitnessLandingPage.css";
import fitness from "../assets/fitness.jpg";
import alex from "../assets/alexcoach.jpg";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import CardComponent from "../components/cardComponent/CardComponent.jsx";
import PriceCard from "../components/priceCard/PriceCard.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function FitnessLandingPage() {
  return (
    <div className="container">
      {/* hero-section */}
      <div className="hero-section">
        <img src={fitness} alt="fitness img" className="hero-img" />
        <div className="hero-content">
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>
            Personalized fitness coaching to help you lose weight, gain muscle,
            and build confidence.
          </p>
          <a href="#contact" className="btn">
            Get Started
          </a>
        </div>
      </div>

      {/* about-section  */}
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

      {/* services section  */}
      <div className="service-section">
        <h2>Programs I Offer</h2>
        <div className="services">
          <div className="card">
            <h3>Fat Loss</h3>
            <p>High-intensity training + meal plans to burn stubborn fat.</p>
          </div>
          <div className="card">
            <h3>Muscle Gain</h3>
            <p>
              Build lean muscle through strength training & progressive
              overload.
            </p>
          </div>
          <div className="card">
            <h3>Online Coaching</h3>
            <p>
              Workout with me from anywhere. Weekly check-ins & real-time
              tracking.
            </p>
          </div>
        </div>
      </div>

      {/* testimonials  */}
      <div  className="testimonials">
      <h2>What My Clients Say</h2>
      <Testimonials />
      </div>

      {/* before and after section  */}
      <div className="result-section">
        <h2>The Real Results</h2>
        <CardComponent />
      </div>

      {/* pricing section  */}
      <div className="price-section">
        <PriceCard />
      </div>

      {/* contact section  */}
      <div className="contact-section" id="contact">
        <h2>Start Your Fitness Journey</h2>
        <p>Let's work together to achieve your fitness goals.</p>
        <a href="mailto:hameed.learner@gmail.com" className="btn">
          Email Me
        </a>
      </div>

      {/* footer section  */}
      <Footer />
    </div>
  );
}
