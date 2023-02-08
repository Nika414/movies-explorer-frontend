import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import MoviesApi from '../../utils/MoviesApi';
import {
  options, cardsAmount, cardsToAdd,
} from '../../utils/constants';
import {
  handleFilter, handleShortcutsFilter,
} from '../../utils/functions';
import Render from '../Render';
import MainApi from '../../utils/MainApi';

export default function Movies() {
  const jwt = localStorage.getItem('jwt');
  const cardsLS = JSON.parse(localStorage.getItem('movies')) || [];
  const [cards, setCards] = useState(cardsLS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [visible, setVisible] = useState(cardsAmount);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const api = new MoviesApi(options);
  const mainApi = new MainApi(options, jwt);
  const checkbox = JSON.parse(localStorage.getItem('movies_checkbox'));

  function handleSearch() {
    if (cards.length === 0) {
      setIsLoading(true);
      Promise.all([mainApi.getSavedCards(), api.getCards()])
        .then(([savedCards, beatFilmCards]) => {
          const savedCardsIds = savedCards.map((item) => ({ id: item.movieId, _id: item._id }));
          const res = beatFilmCards.map((item) => {
            const findedIndex = savedCardsIds.findIndex((savedItem) => savedItem.id === item.id);
            if (findedIndex !== -1) {
              item.saved = true;
              item._id = savedCardsIds[findedIndex]._id;
              return item;
            }
            return item;
          });
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
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 768) {
      setVisible((prevValue) => prevValue + cardsToAdd);
    } else { setVisible((prevValue) => prevValue + cardsAmount); }
  }

  function handleShortcuts(filterOn) {
    setCards(handleShortcutsFilter(handleFilter(cardsLS, false), filterOn));
  }

  function onCardClick(id, newId) {
    const newCards = cardsLS.map((item) => {
      if (item.id === id && !item.saved) {
        item._id = newId;
        item.saved = true;
        return item;
      } if (item.id === id && item.saved) {
        item._id = newId;
        item.saved = false;
        return item;
      } return item;
    });
    localStorage.setItem('movies', JSON.stringify(newCards));
    setCards(handleShortcutsFilter(handleFilter(newCards, false), checkbox));
  }

  return (
    <section className="movies">
      <SearchForm onClick={handleSearch} />
      <FilterCheckbox onClick={handleShortcuts} />
      <Render
        isLoading={isLoading}
        cards={cards}
        isError={isError}
        onCardClick={onCardClick}
        visible={visible}
        loadingFinished={loadingFinished}
        savedMovies={false}
      />
      {cards.length > visible && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
