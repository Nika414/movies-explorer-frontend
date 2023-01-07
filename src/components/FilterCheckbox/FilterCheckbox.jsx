export default function FilterCheckbox() {
  return (
    <form className="filter-checkbox" method="post">
      <label htmlFor="filter-checkbox_input" className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" id="filter-checkbox_input" />
        <span className="form-checkbox__customized-checkbox" />
        <span>Короткометражки</span>
      </label>
    </form>
  );
}
