// src/components/Testimonial/Testimonial.js
import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial-box">Testimonial 1</div>
        <div className="testimonial-box">Testimonial 2</div>
        <div className="testimonial-box">Testimonial 3</div>
      </div>
    </section>
  );
};

export default Testimonial;
