import React from "react";
import SectionHeading from "../../common/widgets/SectionHeading/SectionHeading";
import MoreButton from "../../common/widgets/MoreButton/MoreButton"; // Import the MoreButton
import "./About.css";

const About = () => {
  const backgroundImage = require("../../../../assets/images/about/about-home.jpg");

  return (
    <section
      className="about section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SectionHeading title="About Us" />
      <div className="about-content">
        <p>
          Welcome to Eamsqaure Pvt Ltd – Your Trusted Construction Solutions Partner. Established in 2018 in Cochin, Kerala, Eamsqaure Pvt Ltd specializes in delivering top-tier construction services. We focus on architectural drawing, structural design, soil investigation, landscaping, and offering expert engineering and contracting services. With our expansion into Ettumanoor, Kottayam in 2024, we are committed to shaping durable and innovative structures while ensuring client satisfaction in every project.
        </p>
        <a href="/about" className="arrow-link">
          <MoreButton />
        </a>
      </div>
    </section>
  );
};

export default About;
