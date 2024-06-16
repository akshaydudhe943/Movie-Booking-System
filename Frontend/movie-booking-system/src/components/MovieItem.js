import React, { useState } from 'react';
import SeatSelection from './SeatSelection';
import './styles.css';

const MovieItem = ({ movie }) => {
  const [showtime, setShowtime] = useState(null);

  return (
    <li>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <div>
        <h4>Showtimes</h4>
        {movie.showtimes.map((st, index) => (
          <button key={index} onClick={() => setShowtime(st)}>
            {st}
          </button>
        ))}
      </div>
      {showtime && <SeatSelection movieId={movie.id} showtime={showtime} />}
    </li>
  );
};

export default MovieItem;
