import React, { useState } from "react";
import axios from "axios";
import config from "../../config/config"; // Your config file for API URL
import "./Contact.css"; // Your CSS file
import PageHeading from "../../components/client/common/widgets/PageHeading/PageHeading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "", // Clear error message when user starts typing
    });
    document.getElementById(name + "-error")?.classList.remove("visible");
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  // Validate phone number (optional field)
  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Simple phone number validation for 10 digits
    return phone === "" || phoneRegex.test(phone); // If phone is empty, it's valid
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    // Phone validation (optional)
    if (!isValidPhone(formData.phone)) {
      errors.phone = "Enter a valid 10-digit mobile or nothing";
    }

    setFormErrors(errors); // Update form errors

    // Ensure the error messages are visible
    for (let errorField in errors) {
      document.getElementById(errorField + "-error")?.classList.add("visible");
    }

    return Object.keys(errors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${config.API_URL}/contact-email`, {
        name: formData.name,
        phone: formData.phone || null, // Send null if phone is not provided
        email: formData.email,
        message: formData.message || "", // Send empty string if no message
      });

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("There was an error sending your message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    < >
    <div id="message"></div>
    <div className="page-section page-margin">
      <PageHeading title="Contact us" highlight="us" />
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-item">
              <label htmlFor="name">Name<span className="required">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <p id="name-error" className={`valid-error ${formErrors.name ? 'visible' : ''}`}>{formErrors.name}</p>
            </div>
            <div className="form-item">
              <label htmlFor="email">Email<span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <p id="email-error" className={`valid-error ${formErrors.email ? 'visible' : ''}`}>{formErrors.email}</p>
            </div>
            <div className="form-item">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <p id="phone-error" className={`valid-error ${formErrors.phone ? 'visible' : ''}`}>{formErrors.phone}</p>
            </div>
            <div className="form-item full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="button-message-container">
            <button type="submit" className="form-submit-button" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            <div className="message-box">
              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Contact;
