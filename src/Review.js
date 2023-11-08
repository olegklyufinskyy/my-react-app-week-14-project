// Review.js

import React from 'react';
import './Review.css'; // Import the CSS file

const Review = ({ text }) => {
  return (
    <div className="review">
      <p>{text}</p>
    </div>
  );
};

export default Review;
