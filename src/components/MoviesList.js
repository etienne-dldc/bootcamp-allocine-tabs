import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = props => {
  const { moviesArray } = props;

  return (
    <div className="movies-list">
      {moviesArray.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
