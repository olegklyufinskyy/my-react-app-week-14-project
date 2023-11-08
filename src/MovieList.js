

import React from 'react';
import Movie from './Movie';

const moviesData = [
  {
    id: 1,
    title: 'The Fall of the House of Usher',
    movieLink: 'https://www.imdb.com/title/tt15567174/?ref_=tt_mv_close',
    image: 'https://i.ytimg.com/vi/MCAkuQTv6xY/maxresdefault.jpg',
    synopsis: 'This is the synopsis of Movie 1',
  },
  {
    id: 2,
    title: 'Movie 2',
    image: 'movie2.jpg',
    synopsis: 'This is the synopsis of Movie 2',
  },
  
];

const MovieList = () => {

  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          image={movie.image}
          synopsis={movie.synopsis}
        />
      ))}
    </div>
  );
};

export default MovieList;
