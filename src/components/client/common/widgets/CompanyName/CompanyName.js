// src/components/CompanyName/CompanyName.js
import React from 'react';
import './CompanyName.css'; // Make sure to create this CSS file for styles

const CompanyName = ({ type = 'logo' }) => {
  const styles = {
    heading: {
      fontSize: 'inherit',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '24px',
      textTransform: 'capitalize',
    },
    logo: {
      fontSize: '36px',
      textTransform: 'uppercase',
    },
    footer_logo: {
        fontSize: 'inherit',
        textTransform: 'uppercase',
      },
  };

  return (
    <span className="company-name" style={styles[type]}>
      <span className="company-name-secondary">EAM</span>
      <span className="company-name-primary">SQUARE</span>
    </span>
  );
};

export default CompanyName;
