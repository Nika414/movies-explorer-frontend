/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, path, loggedIn }) => (
  <Route path={path}>
    {() => (loggedIn ? children : <Redirect to="/signup" />)}
  </Route>

);

export default ProtectedRoute;
