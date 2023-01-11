/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Switch, Route, useLocation, Redirect,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import { routeName } from '../../utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  const isHeaderRequired = location.pathname !== routeName.pageNotFound;
  const isFooterRequired = (location.pathname === routeName.main || location.pathname === routeName.movies
    || location.pathname === routeName.moviesSav);

  return (
    <div className="App">
      {' '}
      {isHeaderRequired && (<Header loggedIn={loggedIn} location={location.pathname} />)}
      <Switch>
        <Route exact path={routeName.register}>
          <Register />
        </Route>
        <Route exact path={routeName.login}>
          <Login />
        </Route>
        <Route exact path={routeName.main}>
          <Main />
        </Route>
        <ProtectedRoute exact path={routeName.movies} loggedIn={loggedIn}>
          <Movies />
        </ProtectedRoute>
        <ProtectedRoute exact path={routeName.moviesSav} loggedIn={loggedIn}>
          <SavedMovies />
        </ProtectedRoute>
        <ProtectedRoute exact path={routeName.profile} loggedIn={loggedIn}>
          <Profile />
        </ProtectedRoute>
        <Route path={routeName.pageNotFound}>
          <PageNotFound />
        </Route>
        <Route path="*">
          <Redirect to={routeName.pageNotFound} />
        </Route>
      </Switch>
      {(isFooterRequired) && (<Footer />)}
    </div>
  );
}

export default App;
