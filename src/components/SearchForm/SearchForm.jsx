export default function SearchForm() {
  return (
    <form className="search-form" method="post">
      <input type="text" className="search-form__input" placeholder="Фильм" required />
      <button type="submit" className="search-form__button">Найти</button>
    </form>
  );
}
