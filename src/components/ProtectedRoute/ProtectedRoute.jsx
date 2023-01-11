import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routeName } from '../../utils/constants';

const ProtectedRoute = ({ children, path, loggedIn }) => (
  <Route path={path}>
    {() => (loggedIn ? children : <Redirect to={routeName.login} />)}
  </Route>
);

export default ProtectedRoute;
