import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map (movie => {
            return <div>{movie.title}: {movie.time} {movie.genres}</div>
          })
        }
    </div>
  );
};

export default Movies;
