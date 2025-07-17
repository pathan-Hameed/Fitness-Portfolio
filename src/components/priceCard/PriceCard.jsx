import React from "react";
import "./PriceCard.css";

const plans = [
  {
    title: "Basic Plan",
    price: "₹999/month",
    features: [
      "Custom Workout Plan",
      "Weekly Check-ins",
      "Chat Support",
      "Basic Diet Guidance",
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1999/month",
    features: [
      "Everything in Basic",
      "1-on-1 Weekly Coaching Call",
      "Advanced Nutrition Plan",
      "24/7 Support",
    ],
  },
];

export default function PriceCard() {
  return (
    <section className="pricing-section">
      <h2>Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
