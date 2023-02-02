/* eslint-disable no-console */

import { useState } from 'react';

export default function SearchForm({ onClick, savedMovies }) {
  const [query, setQuery] = useState(savedMovies ? localStorage.getItem('saved-movies_query') || '' : localStorage.getItem('query') || '');

  function handleSearch(e) {
    e.preventDefault();
    onClick();
  }

  function handleQueryChange(e) {
    if (savedMovies) {
      localStorage.setItem('saved-movies_query', e.target.value);
      setQuery(e.target.value);
      handleSearch(e);
    } else {
      localStorage.setItem('query', e.target.value);
      setQuery(e.target.value);
    }
  }

  return (
    <form className="search-form" method="get">
      <input type="text" value={query} onChange={handleQueryChange} className="search-form__input" placeholder="Фильм" required />
      <button type="submit" onClick={handleSearch} className="search-form__button">Найти</button>
      {!query && (<span className="search-form__error">Нужно ввести ключевое слово</span>)}
    </form>
  );
}
