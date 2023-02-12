import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  cards, isError, savedMovies, onCardClick, visible,
}) {
  return (
    <ul className="movies-card-list">
      { isError ? (
        <span className="movies__error">
          Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </span>
      ) : (cards && (cards.slice(0, visible)
        .map((card) => (
          <MoviesCard
            savedMovies={savedMovies}
            key={card.id || card._id}
            card={card}
            onDelete={onCardClick}
            onLike={onCardClick}
          />
        ))
      )) }
    </ul>
  );
}
