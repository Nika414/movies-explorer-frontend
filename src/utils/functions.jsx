import { regExpEn, regExpRu } from './constants';

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

function setStorage(name, items) {
  localStorage.setItem(name, JSON.stringify(items));
}

function getStorage(name) {
  JSON.parse(localStorage.getItem(name));
}

export {
  handleFilter, handleShortcutsFilter, setStorage, getStorage,
};
