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

function handleFilter(cards, savedMovies) {
  const query = savedMovies ? localStorage.getItem('saved-movies_query') : localStorage.getItem('query') || '';
  return cards.filter((item) => {
    let result;
    if (!query) {
      result = cards;
    }
    if (query && query.match(regExpRu)) {
      result = item.nameRU.toLowerCase().match(query.toLowerCase());
    }
    if (query && query.match(regExpEn)) {
      result = item.nameEN.toLowerCase().match(query.toLowerCase());
    }
    return result;
  });
}

function handleShortcutsFilter(cards, filterOn) {
  if (filterOn) {
    return cards.filter((item) => item.duration < 40);
  }
  return cards;
}

export {
  routeName, options, regExpRu, regExpEn, handleFilter, handleShortcutsFilter,
};
