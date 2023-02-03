/* eslint-disable no-console */
const routeName = {
  main: '/',
  pageNotFound: '/404',
  movies: '/movies',
  moviesSav: '/saved-movies',
  profile: '/profile',
  login: '/sign-in',
  register: '/sign-up',
};

const options = {
  baseUrl: 'https://api.nomoreparties.co',
  beatfilmUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  mainUrl: 'https://api.mmovies-explorer.nomoredomains.club/',
};

const regExpRu = /[а-яА-ЯЁё]/g;
const regExpEn = /[a-z]/g;

export {
  routeName, options, regExpRu, regExpEn,
};
