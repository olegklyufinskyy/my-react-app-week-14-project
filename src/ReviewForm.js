// ReviewForm.js

import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]); // Store reviews in state

  const handleReviewSubmit = () => {
    if (review) {
      // Create a new review object
      const newReview = { text: review, id: Date.now() };

      // Add the new review to the reviews array
      setReviews([...reviews, newReview]);

      // Clear the review input field
      setReview('');
    }
  };

  return (
    <div className="review-form">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={handleReviewSubmit}>Submit Review</button>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
