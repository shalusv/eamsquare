import React, { useState } from "react";
import "./MoreButton.css";

const MoreButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`more-button ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i className={`fas fa-long-arrow-alt-right ${hovered ? 'arrow-icon' : ''}`}>→</i>
    </div>
  );
};

export default MoreButton;
