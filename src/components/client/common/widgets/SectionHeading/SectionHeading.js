import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ title }) => {
  return (
    <div className="section-heading">
      <div className="line"></div>
      <div className="heading-text">
        <h2>{title}</h2>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SectionHeading;
