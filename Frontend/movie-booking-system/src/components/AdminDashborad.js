import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import bookingService from '../services/bookingService';
import './styles.css';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchMoviesAndBookings = async () => {
      try {
        const moviesData = await movieService.getMovies();
        setMovies(moviesData);
        const bookingsData = await bookingService.getAllBookings();
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching movies or bookings', error);
      }
    };
    fetchMoviesAndBookings();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <p>{movie.showtimes.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Bookings</h2>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <p>User ID: {booking.userId}</p>
              <p>Movie ID: {booking.movieId}</p>
              <p>Seats: {booking.seats.join(', ')}</p>
              <p>Showtime: {booking.showtime}</p>
              <p>Booking Time: {booking.bookingTime}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
