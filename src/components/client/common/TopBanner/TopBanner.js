import React from "react";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMobileAlt, FaGlobe } from "react-icons/fa";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="banner-item">
        <FaClock /> Mon - Fri: 9 AM - 5 PM
      </div>
      <div className="numbers">
        <div className="contact-number">
          <FaPhoneAlt />
          <span className="contact-link" onClick={() => window.location.href = 'tel:+914812962568'}>
            +91 481-2962568
          </span>
        </div>
        <div className="contact-number">
          <FaMobileAlt />
          <span className="contact-link" onClick={() => window.location.href = 'tel:+919846288295'}>
            +91 9846288295
          </span>
        </div>
        <div className="contact-number">
          <FaMobileAlt />
          <span className="contact-link" onClick={() => window.location.href = 'tel:+918078773021'}>
            +91 8078773021
          </span>
        </div>
      </div>
      <div className="banner-item email-web">
        <FaEnvelope />
        <span className="contact-link" onClick={() => window.location.href = 'mailto:info@eamsquare.com'}>
          info@eamsquare.com
        </span>
      </div>
      <div className="banner-item email-web">
        <FaGlobe />
        <span className="contact-link" onClick={() => window.location.href = 'https://eamsquare.in/'}>
        www.eamsquare.com
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
