import axios from 'axios';

const API_URL = "http://localhost:8080/api/movies/";

const getMovies = () => {
  return axios.get(API_URL);
};

export default {
  getMovies
};
