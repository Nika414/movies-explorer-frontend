/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import MoviesApi from '../../utils/MoviesApi';
import { options, regExpRu, regExpEn } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

export default function Movies() {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreVisible, setShowMoreVisible] = useState(true);
  const [visible, setVisible] = useState(12);
  const [isError, setIsError] = useState(false);
  const api = new MoviesApi(options);

  function handleSearch(query) {
    setIsLoading(true);
    setShowMoreVisible(false);
    api.getCards()
      .then((res) => {
        console.log(res);
        setCards(res.filter((item) => {
          let result;
          if (query.match(regExpRu)) {
            result = item.nameRU.toLowerCase().match(query.toLowerCase());
          }
          if (query.match(regExpEn)) {
            result = item.nameEN.toLowerCase().match(query.toLowerCase());
          }
          return result;
        }));
        // localStorage.setItem('cards', JSON.stringify(res));
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => { setIsLoading(false); setShowMoreVisible(true); });
  }

  function handleMoreCards() {
    setVisible((prevValue) => prevValue + 4);
  }

  return (
    <section className="movies">
      <SearchForm onClick={handleSearch} />
      <FilterCheckbox />
      {
        isLoading ? (<Preloader />)
          : isError ? (
            <span className="movies__error">
              Во время запроса произошла ошибка.
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз
            </span>
          )
            : <MoviesCardList visible={visible} cards={cards} />
      }
      {showMoreVisible && cards.length !== 0 && (<ShowMoreButton onClick={handleMoreCards} />)}
    </section>
  );
}
