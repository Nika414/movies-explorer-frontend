/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { useState } from 'react';

export default function FilterCheckbox({ onClick, savedMovies }) {
  const [checked, setChecked] = useState(savedMovies ? JSON.parse(localStorage.getItem('saved-movies_checkbox')) || false : JSON.parse(localStorage.getItem('movies_checkbox')) || false);
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
