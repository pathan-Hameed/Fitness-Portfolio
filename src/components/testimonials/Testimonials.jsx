import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import alex from "../../assets/alexcoach.jpg";

const testimonial = [
  {
    img: alex,
    quote:
      "Alex’s coaching changed my life. I lost 12kg in 4 months and feel more confident than ever!",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // shows 2 at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // mobile view
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
            <img src={t.img} alt="profile" className="testimonial-img" />
            <blockquote>{t.quote}</blockquote>
            <p className="testimonial-name">{t.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
