import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import MainApi from '../../utils/MainApi';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import {
  options,
} from '../../utils/constants';
import {
  handleFilter, handleShortcutsFilter,
} from '../../utils/functions';
import Render from '../Render';

export default function SavedMovies() {
  const jwt = localStorage.getItem('jwt');
  const api = new MainApi(options, jwt);
  const [savedCardsLS, setSavedCardsLS] = useState([]);
  const [savedCards, setSavedCards] = useState(savedCardsLS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visible, setVisible] = useState(4);
  const checkbox = JSON.parse(localStorage.getItem('saved-movies_checkbox'));

  function handleShortcuts(filterOn) {
    setSavedCards(handleShortcutsFilter(handleFilter(savedCardsLS, true), filterOn));
  }

  useEffect(() => {
    setIsLoading(true);
    api.getSavedCards()
      .then((res) => {
        localStorage.setItem('saved__movies', JSON.stringify(res));
        setSavedCardsLS(JSON.parse(localStorage.getItem('saved__movies')));
        setSavedCards(handleShortcutsFilter(handleFilter(res, true), checkbox));
      })
      .catch((err) => { console.log(err); setIsError(true); })
      .finally(() => setIsLoading(false));
  }, []);

  function onDelete(cardId) {
    const newCards = savedCards.filter((item) => item._id !== cardId);
    localStorage.setItem('saved__movies', JSON.stringify(newCards));
    setSavedCards(newCards);
    const newMainCards = JSON.parse(localStorage.getItem('movies')).map((item) => {
      if (item._id === cardId && item.saved) {
        item.saved = false;
      } return item;
    });
    localStorage.setItem('movies', JSON.stringify(newMainCards));
  }

  function handleMoreCards() {
    setVisible((prevValue) => prevValue + 4);
  }

  function handleSearch() {
    setSavedCards(handleShortcutsFilter(handleFilter(savedCardsLS, true), checkbox));
  }

  return (
    <section className="movies">
      <SearchForm onClick={handleSearch} savedMovies />
      <FilterCheckbox onClick={handleShortcuts} savedMovies />
      <Render
        isLoading={isLoading}
        cards={savedCards}
        isError={isError}
        onCardClick={onDelete}
        visible={visible}
        loadingFinished
        savedMovies
      />
      {savedCards.length > visible && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
