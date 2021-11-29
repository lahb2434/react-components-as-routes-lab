import React from 'react';
import { movies } from '../data';

const movie = () => {
  return movies.map(movie => 
    <div>
      <h4>{movie.title}</h4>
      <p>{movie.time}</p>
      <label>genres:</label>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li> )}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movie()}
    </div>
  );
};

export default Movies;
