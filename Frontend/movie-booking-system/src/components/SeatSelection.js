import React, { useState, useEffect } from 'react';
import bookingService from '../services/bookingService';
import './styles.css';

const SeatSelection = ({ movieId, showtime }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Fetch seats from server
    // Example: bookingService.getSeats(movieId, showtime).then(setSeats);
  }, [movieId, showtime]);

  const handleSeatClick = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = () => {
    const booking = {
      movieId,
      showtime,
      seats: selectedSeats,
    };
    bookingService.bookSeats(booking).then(response => {
      // Handle booking response
    });
  };

  return (
    <div>
      <h3>Select Seats for {showtime}</h3>
      <div className="seating-chart">
        {seats.map((seat, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button onClick={handleBooking}>Book Selected Seats</button>
    </div>
  );
};

export default SeatSelection;
