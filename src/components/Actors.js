import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const generateActors = () => {
    return actors.map(actor => {
      return( 
        <div>
          <h2>{actor.name}</h2>
          <p>
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </p>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {generateActors()}
    </div>
  );
};

export default Actors;
