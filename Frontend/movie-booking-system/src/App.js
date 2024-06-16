import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MovieList from './components/MovieList';
import AuthService from './services/authService';

const App = () => {
  const isAuthenticated = AuthService.getCurrentUser();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {isAuthenticated && <Route path="/" element={<MovieList />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
