/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { options } from '../../utils/constants';
import MainApi from '../../utils/MainApi';

export default function MoviesCardList({ savedMovies, cards, visible }) {
  const api = new MainApi(options);
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    if (savedMovies) {
      api.getSavedCards().then((res) => setSavedCards(res));
    }
  }, []);

  function handleDelete(cardId) {
    const newCards = savedCards.filter((item) => item._id !== cardId);
    setSavedCards(newCards);
  }

  return (
    <ul className="movies-card-list">
      { !savedMovies ? (cards && (cards.slice(0, visible)
        .map((card) => (<MoviesCard savedMovies={savedMovies} key={card.id} card={card} />))
      )) : (savedCards && (savedCards.slice(0, visible)
        .map((savedCard) => (
          <MoviesCard
            savedMovies={savedMovies}
            key={savedCard.movieId}
            card={savedCard}
            onDelete={handleDelete}
          />
        ))
      )) }
    </ul>
  );
}
