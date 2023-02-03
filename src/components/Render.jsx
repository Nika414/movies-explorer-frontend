import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';

export default function Render({
  isLoading, cards, isError, onCardClick, visible, loadingFinished, savedMovies,
}) {
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
