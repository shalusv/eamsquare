import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";
import "./Footer.css";
import logo from "../../../../assets/images/logo.png"; // Import your logo
import config from "../../../../config/config"; // Import your config

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset success message
    setErrorMessage(""); // Reset error message
    setIsLoading(true); // Set loading state to true

    try {
      // Send email to the backend
      const response = await axios.post(`${config.API_URL}/send-email`, {
        sender_email: email,
      });
      console.log(`${config.API_URL}/send-email`)

      if (response.status === 200) {
        setSuccessMessage("Thank you for subscribing! We'll keep you updated.");
        setEmail(""); // Clear the email input

        // Clear the success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("There was an issue sending your subscription. Please try again.");

        // Clear the error message after 3 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("There was an error sending your subscription. Please try again later.");

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsLoading(false); // Reset loading state after request completes
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <footer>
      <div className="footer-container">
        {/* Left Section: Logo and Addresses */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Eamsquare Logo" className="logo-transparent" />
          </div>
          <div className="footer-address">
            <div className="address-column">
              <p><strong>Corporate Office:</strong></p>
              <p>965/1, 1st Floor, Vijayam Arcade, Kovilpadam Road, Ettumanoor, Kottayam, Kerala - 686631</p>
            </div>
            <div className="address-column">
              <p><strong>Regional Office:</strong></p>
              <p>4/461 (Old 6/858-M), 2nd Floor, Suite 358, Valamkottil Towers, Judgemukku, Kakkanad, Ernakulam, Kerala - 682021</p>
            </div>
          </div>
        </div>

        {/* Center Section: Phone Numbers and Email */}
        <div className="footer-center">
          <div className="footer-contact">
            <div className="footer-numbers">
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <a href="tel:+914812962568">+91 481-2962568</a>
              </div>
              <div className="contact-item">
                <FaMobileAlt className="icon" />
                <a href="tel:+918078773021">+91 8078 773 021</a>
              </div>
              <div className="contact-item">
                <FaMobileAlt className="icon" />
                <a href="tel:+919846288295">+91 9846 288 295</a>
              </div>
            </div>
            <div className="footer-email-web">
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <a href="mailto:info@eamsquare.com">info@eamsquare.com</a>
              </div>
              <div className="contact-item">
                <FaGlobe className="icon" />
                <a href="http://eamsquare.com/" target="_blank" rel="noopener noreferrer">www.eamsquare.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Social Media and Email Subscription */}
        <div className="footer-right">
          <div className="subscribe-message">
            <p>Connect with us or Subscribe</p> {/* New message added */}
          </div>
          <form onSubmit={handleSubmit} className="email-subscribe">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress} // Enable Enter key submission
              placeholder="Enter your email"
              required
            />
            <button type="submit">
              <FaPaperPlane
                className={`icon ${isLoading ? "rotate" : ""}`} // Add rotate class when loading
              />
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="icon" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://linkedin.com/in/eamsquare" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icon" /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; 2024 EAMSQUARE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
