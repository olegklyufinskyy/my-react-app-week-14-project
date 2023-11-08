


import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ title, image, synopsis, movieLink }) => {
   

  return (
    <div className="movie">
      <a href={movieLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <h2 className="movie-title">{title}</h2>
      <p className="movie-synopsis">{synopsis}</p>
      <Stars />
      <ReviewList />
      <ReviewForm />
    </div>
  );
};

export default Movie;
