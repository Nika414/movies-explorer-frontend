/* eslint-disable no-debugger */
/* eslint-disable no-use-before-define */
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
  const jwt = localStorage.getItem('jwt');
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ jwt });
  const [loggedIn, setLoggedIn] = useState(currentUser.jwt && true);
  const [isLoginSucceed, setIsLoginSucceed] = useState(undefined);
  const [isRegisterSucceed, setIsRegisterSucceed] = useState(undefined);
  const [isChangingSucceed, setIsChangingSucceed] = useState(undefined);
  const location = useLocation();
  const isHeaderRequired = location.pathname !== routeName.pageNotFound;
  const isFooterRequired = (location.pathname === routeName.main || location.pathname === routeName.movies
    || location.pathname === routeName.moviesSav);

  const api = new MainApi(options, jwt);
  const authApi = new AuthApi(options);

  useEffect(() => {
    if (jwt) {
      api.getCurrentUser().then((res) => {
        setCurrentUser({ ...currentUser, ...res });
      });
    }
  }, [jwt]);

  function handleLogin(password, email) {
    authApi.login(password, email).then((res) => res.json())
      .then((res) => {
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
  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
  }

  function handleRegister(name, password, email) {
    authApi.register(name, password, email)
      .then((res) => {
        if (res.status === 200) {
          setIsRegisterSucceed(true);
        } else {
          setIsRegisterSucceed(false);
        }
        res.json();
      })
      .catch((error) => {
        console.log(error.code);
        setIsRegisterSucceed(false);
      });
  }

  function handleProfileChange(data) {
    api.changeProfile(data)
      .then((res) => {
        setIsChangingSucceed(true);
        setCurrentUser({ ...currentUser, name: res.name, email: res.email });
      })
      .catch((err) => { setIsChangingSucceed(false); console.log(err); });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        {' '}
        {isHeaderRequired && (<Header loggedIn={loggedIn} location={location.pathname} />)}
        <Switch>
          <Route exact path={routeName.register}>
            <Register onRegister={handleRegister} isRegisterSucceed={isRegisterSucceed} />
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
            <Profile
              onLogout={handleLogout}
              onProfileChange={handleProfileChange}
              isChangingSucceed={isChangingSucceed}
            />
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
