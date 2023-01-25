import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

export default function SavedMovies() {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList savedMovies />
      <ShowMoreButton />
    </>
  );
}
