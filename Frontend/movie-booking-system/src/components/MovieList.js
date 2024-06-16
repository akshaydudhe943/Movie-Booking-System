import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import './styles.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieService.getMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Available Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.showtimes.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
