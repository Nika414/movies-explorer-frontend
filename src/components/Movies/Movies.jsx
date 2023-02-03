/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import MoviesApi from '../../utils/MoviesApi';
import {
  options,
} from '../../utils/constants';
import { handleFilter, handleShortcutsFilter, renderCardlist } from '../../utils/functions';

export default function Movies() {
  const cardsLS = JSON.parse(localStorage.getItem('movies')) || [];
  const [cards, setCards] = useState(cardsLS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visible, setVisible] = useState(4);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const api = new MoviesApi(options);
  const checkbox = JSON.parse(localStorage.getItem('movies_checkbox'));

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
  function onCardClick(id, newId) {
    const newCards = cardsLS.map((item) => {
      if (item.id === id && !item.saved) {
        item._id = newId;
        item.saved = true;
      } else {
        item._id = newId;
        item.saved = false;
      }
      return item;
    });
    console.log(newCards);
    localStorage.setItem('movies', JSON.stringify(newCards));
    setCards(handleShortcutsFilter(handleFilter(newCards, false), checkbox));
  }

  return (
    <section className="movies">
      <SearchForm onClick={handleSearch} />
      <FilterCheckbox onClick={handleShortcuts} />
      {
        renderCardlist(
          isLoading,
          cards,
          isError,
          onCardClick,
          visible,
          loadingFinished,
          false,
        )
      }
      {cards.length > visible && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
