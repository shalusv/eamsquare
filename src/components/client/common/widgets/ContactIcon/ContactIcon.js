// src/components/ContactIcon.js
import React from 'react';
import { FaCommentDots } from 'react-icons/fa'; // Importing an icon from react-icons
import { Link, useLocation } from 'react-router-dom';
import './ContactIcon.css'; // Ensure this file is created for styles

const ContactIcon = () => {
  const location = useLocation(); // To access the current location

  const handleClick = () => {
    // Delay the scroll action to allow the navigation to complete
    setTimeout(() => {
      const element = document.getElementById('message');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Adjust the timeout duration as needed
  };

  return (
    <div className="contact-icon-container">
      <Link to="/contact" className="contact-icon" onClick={handleClick}>
        <FaCommentDots size={20} color="#ffffff" /> {/* Adjust the size and color */}
      </Link>
    </div>
  );
};

export default ContactIcon;
