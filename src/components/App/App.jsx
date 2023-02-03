/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {
  Switch, Route, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import { CurrentUserContext } from '../CurrentUserContext';
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
import { options, routeName } from '../../utils/constants';
import MainApi from '../../utils/MainApi';
import AuthApi from '../../utils/Auth';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginSucceed, setIsLoginSucceed] = useState(true);
  const location = useLocation();
  const isHeaderRequired = location.pathname !== routeName.pageNotFound;
  const isFooterRequired = (location.pathname === routeName.main || location.pathname === routeName.movies
    || location.pathname === routeName.moviesSav);

  const api = new MainApi(options, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM');
  const authApi = new AuthApi(options);

  useEffect(() => {
    api.getCurrentUser().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  function handleLogin(password, email) {
    authApi.login(password, email).then((res) => {
      if (!res.token) {
        setIsLoginSucceed(false);
        throw new Error('Missing jwt');
      }
      localStorage.setItem('jwt', res.token);
      setIsLoginSucceed(true);
      setLoggedIn(true);
      history.push('/movies');
    })
      .catch((error) => {
        setIsLoginSucceed(false);
        console.log(error);
      });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        {' '}
        {isHeaderRequired && (<Header loggedIn={loggedIn} location={location.pathname} />)}
        <Switch>
          <Route exact path={routeName.register}>
            <Register />
          </Route>
          <Route exact path={routeName.login}>
            <Login onLogin={handleLogin} isLoginSucceed={isLoginSucceed} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
