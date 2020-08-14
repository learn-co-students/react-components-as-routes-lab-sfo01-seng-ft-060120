import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {
          actors.map (actor => {
            return <div>{actor.name}: {actor.movies.join("+")}</div>
          })
        }
    </div>
  );
};

export default Actors;
