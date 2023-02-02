/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import MoviesApi from '../../utils/MoviesApi';
import {
  options, handleFilter, handleShortcutsFilter,
} from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

export default function Movies() {
  const cardsLS = JSON.parse(localStorage.getItem('movies')) || [];
  const [cards, setCards] = useState(cardsLS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visible, setVisible] = useState(4);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const api = new MoviesApi(options);
  const checkbox = JSON.parse(localStorage.getItem('saved-movies_checkbox'));

  function handleSearch() {
    if (cards.length === 0) {
      setIsLoading(true);
      api.getCards()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          setCards(handleShortcutsFilter(handleFilter(res, false), checkbox));
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          setLoadingFinished(true);
        });
    } else { setCards(handleShortcutsFilter(handleFilter(cardsLS, false), checkbox)); }
  }
  useEffect(() => {
    if (cards) {
      setCards(handleShortcutsFilter(handleFilter(cardsLS, false), checkbox));
    }
  }, []);

  function handleMoreCards() {
    setVisible((prevValue) => prevValue + 4);
  }

  function handleShortcuts(filterOn) {
    setCards(handleShortcutsFilter(handleFilter(cardsLS, false), filterOn));
  }

  return (
    <section className="movies">
      <SearchForm onClick={handleSearch} />
      <FilterCheckbox onClick={handleShortcuts} />
      {
        isLoading ? (<Preloader />)
          : cards.length === 0 && loadingFinished
            ? (<span className="movies__error">Ничего не найдено</span>) : (<MoviesCardList cards={cards} isError={isError} visible={visible} />)
      }
      {cards.length > visible && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
