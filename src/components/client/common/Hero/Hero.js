import React, { useState } from "react";  
import Slider from "react-slick";
import "./Hero.css";
import carousel1 from "../../../../assets/images/carousel/carousel-1.jpg";
import carousel2 from "../../../../assets/images/carousel/carousel-2.jpg";
import carousel3 from "../../../../assets/images/carousel/carousel-3.jpg";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    &#8249;
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    &#8250;
  </button>
);

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-carousel">
        <div className="carousel-item">
          <img src={carousel1} alt="Slide 1" />
          <div className={`carousel-caption ${activeSlide === 0 ? 'animate' : ''}`}>
            <h2>Building Your Vision</h2>
            <p>We turn ideas into reality with precision and quality.</p>
            <button className="button">View Projects</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} alt="Slide 2" />
          <div className={`carousel-caption ${activeSlide === 1 ? 'animate' : ''}`}>
            <h2>Innovative Designs</h2>
            <p>Modern solutions for efficient construction projects.</p>
            <button className="button">Explore Services</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel3} alt="Slide 3" />
          <div className={`carousel-caption ${activeSlide === 2 ? 'animate' : ''}`}>
            <h2>Your Trusted Partner</h2>
            <p>Providing reliable civil construction solutions worldwide.</p>
            <button className="button">Contact Us</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
