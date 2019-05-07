import React from 'react';

const MovieCard = props => {
  const { movie } = props;

  return (
    <div className="movie-card">
      <img
        src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + movie.poster_path}
        alt={movie.title + ' poster'}
        className="movie-card-poster"
      />
      <div className="movie-card-content">
        <header>
          <h3>{movie.title}</h3>
          <p className="movie-card-date">{movie.release_date}</p>
        </header>
        <p className="movie-card-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
