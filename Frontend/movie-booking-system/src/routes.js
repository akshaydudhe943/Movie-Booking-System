import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MovieList from './components/MovieList';
import Booking from './components/Booking';
import AdminDashboard from './components/AdminDashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/movies" component={MovieList} />
      <Route path="/booking" component={Booking} />
      <Route path="/admin" component={AdminDashboard} />
    </Switch>
  </Router>
);

export default Routes;
