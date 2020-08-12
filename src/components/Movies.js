import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const generateMovies = () => {
    return movies.map(movie => {
      return(
        <div>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres: 
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
          </p>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovies()}
    </div>
  );
};

export default Movies;
