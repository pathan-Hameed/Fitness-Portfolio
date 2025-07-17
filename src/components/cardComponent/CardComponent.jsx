import React from "react";
import "./CardComponent.css";
import alex from "../../assets/alexcoach.jpg";
import before2 from "../../assets/before2.jpg";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CardComponent = () => {
  const cardSliderSettings = {
    dots: false,
    arrows: true, // enable left/right arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1, // show 1 card at a time
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      name: "Ravi",
      story:
        "Lost 8kg in 10 weeks with custom training & diet. His transformation is a testament to dedication and personalized coaching.",
      before: before2,
      after: alex,
    },
    {
      name: "Neha",
      story:
        "Built strength & confidence with our 12-week program. Her journey shows the power of consistent effort and support.",
      before: before2,
      after: alex,
    },
    {
      name: "Rahul",
      story:
        "Rahul improved posture and stamina with a smart routine. With a strong mindset and guidance, he turned things around in 3 months.",
      before: before2,
      after: alex,
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...cardSliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="custom-card">
              <div className="card-image">
                <Slider
                  dots={false}
                  arrows={false}
                  infinite={true}
                  autoplay={true}
                  autoplaySpeed={3000}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  pauseOnHover={false}
                >
                  <div>
                    <img src={testimonial.before} alt="Before" />
                  </div>
                  <div>
                    <img src={testimonial.after} alt="After" />
                  </div>
                </Slider>
              </div>
              <div className="card-content">
                <h3>{testimonial.name}’s Transformation</h3>
                <p>{testimonial.story}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
