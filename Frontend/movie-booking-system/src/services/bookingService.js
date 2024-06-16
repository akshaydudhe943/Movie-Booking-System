import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/bookings/";

const bookSeats = (booking) => {
  return axios.post(API_URL, booking, { headers: authHeader() });
};

const getBookings = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getAllBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default {
  bookSeats,
  getBookings,
  getAllBookings
};
