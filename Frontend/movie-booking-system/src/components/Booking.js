import React, { useState } from 'react';
import bookingService from '../services/bookingService';
import './styles.css';

const Booking = () => {
  const [seats, setSeats] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [showtime, setShowtime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookingService.bookSeats({ movieId, showtime, seats });
      // Redirect to confirmation page
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie ID</label>
        <input type="text" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
      </div>
      <div>
        <label>Showtime</label>
        <input type="text" value={showtime} onChange={(e) => setShowtime(e.target.value)} />
      </div>
      <div>
        <label>Seats</label>
        <input type="text" value={seats} onChange={(e) => setSeats(e.target.value.split(','))} />
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default Booking;
