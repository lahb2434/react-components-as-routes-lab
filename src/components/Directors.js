import React from 'react';
import { directors } from '../data';

const director = () => {
  return directors.map(director => 
    <div>
      <h4>{director.name}</h4>
      <label>movies:</label>
      <ul>
        {director.movies.map(movie => <li>{movie}</li> )}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {director()}
    </div>
  );
}

export default Directors
