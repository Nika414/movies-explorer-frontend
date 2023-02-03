/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import MainApi from '../../utils/MainApi';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import {
  options,
} from '../../utils/constants';
import {
  handleFilter, handleShortcutsFilter, setStorage, getStorage,
} from '../../utils/functions';
import Render from '../Render';

export default function SavedMovies() {
  const api = new MainApi(options, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM');
  const [savedCardsLS, setSavedCardsLS] = useState([]);
  const [savedCards, setSavedCards] = useState(savedCardsLS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visible, setVisible] = useState(4);
  const checkbox = getStorage('saved-movies_checkbox');

  function handleShortcuts(filterOn) {
    setSavedCards(handleShortcutsFilter(handleFilter(savedCardsLS, true), filterOn));
  }

  useEffect(() => {
    setIsLoading(true);
    api.getSavedCards().then((res) => {
      setStorage('saved__movies', res);
      setSavedCardsLS(getStorage('saved__movies'));
      setSavedCards(handleShortcutsFilter(handleFilter(res, true), checkbox));
    }).catch((err) => { console.log(err); setIsError(true); })
      .finally(() => setIsLoading(false));
  }, []);

  function onDelete(cardId) {
    const newCards = savedCards.filter((item) => item._id !== cardId);
    setStorage('saved__movies', newCards);
    setSavedCards(newCards);
    const newMainCards = getStorage('movies').map((item) => {
      if (item._id === cardId && item.saved) {
        item.saved = false;
      } return item;
    });
    setStorage('movies', newMainCards);
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
