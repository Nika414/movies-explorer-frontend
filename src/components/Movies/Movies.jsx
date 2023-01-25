import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

export default function Movies() {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <ShowMoreButton />
    </>
  );
}
