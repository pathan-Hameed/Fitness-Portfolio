import React from "react";
import "./FitnessLandingPage.css";
import fitness from "../assets/fitness.jpg";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import CardComponent from "../components/cardComponent/CardComponent.jsx";
import PriceCard from "../components/priceCard/PriceCard.jsx";
import Footer from "../components/footer/Footer.jsx";
import About from "../components/about/About.jsx";
import Offer from "../components/offerservice/Offer.jsx";
import ContactButton from "../components/contact/ContactButton.jsx";

export default function FitnessLandingPage() {
  return (
    <div className="container">
      {/* hero-section */}
      <div className="hero-section">
        <img src={fitness} alt="fitness img" className="hero-img" />
        <div className="hero-content">
          <h1>Transform Your Body, Transform Your Life</h1>
          <p>
            <i>
              Personalized fitness coaching to help you lose weight, gain
              muscle, and build confidence.
            </i>
          </p>
          <a href="#contact" className="btn">
            Get Started
          </a>
          <ContactButton />
        </div>
      </div>

      {/* about-section  */}
      <About />

      {/* services section  */}
      <Offer />

      {/* testimonials  */}
      <Testimonials />

      {/* before and after section  */}
      <CardComponent />

      {/* pricing section  */}
      <div className="price-section">
        <PriceCard />
      </div>

      {/* contact section  */}
      <div className="contact-section" id="contact">
        <h2>Start Your Fitness Journey</h2>
        <p>Let's work together to achieve your fitness goals.</p>
        <a href="mailto:hameed.learner@gmail.com">
          <button className="btn">Email Me</button>
        </a>
      </div>

      {/* footer section  */}
      <Footer />
    </div>
  );
}
