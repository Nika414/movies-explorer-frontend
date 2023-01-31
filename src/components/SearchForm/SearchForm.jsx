import { useState } from 'react';

export default function SearchForm({ onClick }) {
  const [query, setQuery] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSerach(e) {
    e.preventDefault();
    onClick(query);
  }

  return (
    <form className="search-form" method="get">
      <input type="text" value={query} onChange={handleQueryChange} className="search-form__input" placeholder="Фильм" required />
      <button type="submit" onClick={handleSerach} className="search-form__button">Найти</button>
      {!query && (<span className="search-form__error">Нужно ввести ключевое слово</span>)}
    </form>
  );
}
