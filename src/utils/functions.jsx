import Preloader from '../components/Preloader/Preloader';
import MoviesCardList from '../components/MoviesCardList/MoviesCardList';
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
function renderCardlist(
  isLoading,
  cards,
  isError,
  onCardClick,
  visible,
  loadingFinished,
  savedMovies,
) {
  if (isLoading) {
    return <Preloader />;
  } if (cards.length === 0 && loadingFinished) {
    return (<span className="movies__error">Ничего не найдено</span>);
  } return (
    <MoviesCardList
      savedMovies={savedMovies}
      cards={cards}
      isError={isError}
      onCardClick={onCardClick}
      visible={visible}
    />
  );
}
function setStorage(name, cards) {
  localStorage.setItem(name, JSON.stringify(cards));
}
export {
  handleFilter, handleShortcutsFilter, renderCardlist, setStorage,
};
