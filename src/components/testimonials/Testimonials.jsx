import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import alex from "../../assets/alexcoach.jpg";

const testimonial = [
  {
    img: alex,
    quote:
      "Alex's coaching changed my life. I lost 12kg in 4 months and feel more confident than ever!",
    name: "– Priya S.",
  },
  {
    img: alex,
    quote:
      "The online sessions are super convenient. His diet advice helped me stay consistent.",
    name: "– Ramesh V.",
  },
  {
    img: alex,
    quote: "His diet advice helped me stay consistent. Worth the Money",
    name: "– Karthik V.",
  },
];

export default function Testimonials() {
  const [expandedQuotes, setExpandedQuotes] = useState([]);

  const toggleQuote = (index) => {
    if (expandedQuotes.includes(index)) {
      setExpandedQuotes(expandedQuotes.filter((i) => i !== index));
    } else {
      setExpandedQuotes([...expandedQuotes, index]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <h2>What My Clients Say</h2>
      <Slider {...settings}>
        {testimonial.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div>
              <img src={t.img} alt="profile" className="testimonial-img" />
            </div>
            <div>
              <blockquote
                className={expandedQuotes.includes(index) ? "expanded" : ""}
                onClick={() => toggleQuote(index)}
              >
                {t.quote}
              </blockquote>
              <p className="testimonial-name">{t.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}