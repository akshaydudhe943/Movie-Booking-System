import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password
  })
  .then(response => {
    console.log("Registration successful:", response.data);
    return response.data;
  })
  .catch(error => {
    console.error("Registration failed:", error);
    throw error; // rethrow the error to handle it in the caller component
  });
};

const login = (email, password) => {
  return axios.post(API_URL + "login", {
    email,
    password
  })
  .then(response => {
    console.log("Login successful:", response.data);
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
  .catch(error => {
    console.error("Login failed:", error);
    throw error; // rethrow the error to handle it in the caller component
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
