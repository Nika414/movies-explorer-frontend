import { useState } from 'react';
import { getStorage } from '../../utils/functions';

export default function FilterCheckbox({ onClick, savedMovies }) {
  const [checked, setChecked] = useState(savedMovies ? getStorage('saved-movies_checkbox') || false : getStorage('movies_checkbox') || false);
  function handleCheckBoxClick() {
    onClick(!checked);
    setChecked(!checked);
    localStorage.setItem(`${savedMovies ? 'saved-movies' : 'movies'}_checkbox`, !checked);
  }

  return (
    <form className="filter-checkbox" method="post">
      <label htmlFor="filter-checkbox_input" className="filter-checkbox__label">
        <input onChange={handleCheckBoxClick} type="checkbox" className={`filter-checkbox__input ${checked ? 'filter-checkbox__input_checked' : ''}`} id="filter-checkbox_input" />
        <span className="filter-checkbox__customized-checkbox" />
        Короткометражки
      </label>
    </form>
  );
}
