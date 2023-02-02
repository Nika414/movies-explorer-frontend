/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { options, handleFilter, handleShortcutsFilter } from '../../utils/constants';

export default function SavedMovies() {
  const api = new MainApi(options);
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
    api.getSavedCards().then((res) => {
      localStorage.setItem('saved__movies', JSON.stringify(res));
      setSavedCardsLS(JSON.parse(localStorage.getItem('saved__movies')));
      setSavedCards(handleShortcutsFilter(handleFilter(res, true), checkbox));
    }).catch((err) => { console.log(err); setIsError(true); })
      .finally(() => setIsLoading(false));
  }, []);

  function handleDelete(cardId) {
    const newCards = savedCards.filter((item) => item._id !== cardId);
    localStorage.setItem('saved__movies', JSON.stringify(newCards));
    setSavedCards(newCards);
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
      {
      isLoading ? (<Preloader />)
        : savedCards.length === 0
          ? (<span className="movies__error">Ничего не найдено</span>)
          : (
            <MoviesCardList
              savedMovies
              cards={savedCards}
              isError={isError}
              onDelete={handleDelete}
              visible={visible}
            />
          )
    }
      {savedCards.length > visible && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
