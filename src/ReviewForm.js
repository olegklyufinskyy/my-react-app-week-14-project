import React, { useState } from 'react';

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleReviewSubmit = () => {
    // Handle the submission of the review, e.g., add it to an array.
  };

  return (
    <div className="review-form">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;