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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  const isHeaderRequired = location.pathname !== '/404';
  const isFooterRequired = (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies');

  return (
    <div className="App">
      {' '}
      {isHeaderRequired && (<Header loggedIn={loggedIn} location={location.pathname} />)}
      <Switch>
        <Route exact path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
          <Movies />
        </ProtectedRoute>
        <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
          <SavedMovies />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
          <Profile />
        </ProtectedRoute>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      {(isFooterRequired) && (<Footer />)}
    </div>
  );
}

export default App;
