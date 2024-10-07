// src/components/PageHeading.js
import React from 'react';
import './PageHeading.css'; // Ensure this file is created for styles

const PageHeading = ({ title, highlight, className }) => {
  return (
    <h2 className={`page-heading ${className}`}>
      {title.split(' ').map((word, index) => {
        if (word === highlight) {
          return (
            <span key={index} className="page-heading-highlight">
              {/* Check if the highlighted word is "EAMSQUARE" and split it */}
              {word === 'EAMSQUARE' ? (
                <>
                  <span className="primary-color">eam</span>
                  <span className="secondary-color">square </span>
                </>
              ) : (
                <span className="page-heading-one">{word}</span>
              )}
            </span>
          );
        }
        return <span key={index}>{word} </span>;
      })}
    </h2>
  );
};

export default PageHeading;
