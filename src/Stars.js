// Stars.js

import React, { useState } from 'react';
import './Stars.css'; // Import the CSS file

const Stars = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="stars">
      <span>Rating: {rating} stars</span>
      <button onClick={() => setRating(1)}>1</button>
      <button onClick={() => setRating(2)}>2</button>
      <button onClick={() => setRating(3)}>3</button>
      <button onClick={() => setRating(4)}>4</button>
      <button onClick={() => setRating(5)}>5</button>
    </div>
  );
};

export default Stars;
