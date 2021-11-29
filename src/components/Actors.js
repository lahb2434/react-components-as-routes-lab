import React from 'react';
import { actors } from '../data';

const actor = () => {
  return actors.map(actor => 
    <div>
      <h4>{actor.name}</h4>
      <label>movies:</label>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li> )}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actor()}
    </div>
  );
};

export default Actors;
