import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ savedMovies }) {
  return (
    <ul className="movies-card-list">
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
      <MoviesCard savedMovies={savedMovies} />
    </ul>
  );
}
