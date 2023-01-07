export default function Navigation({ loggedIn, location }) {
  return (
    <nav>
      {loggedIn && location === '/movies' ? (
        <ul className="navigation__list">
          <li className="navigation__wrapper">
            <button type="button" className="navigation__button navigation__button_loggedin navigation__button_movies">Фильмы</button>
          </li>
          <li className="navigation__wrapper">
            <button type="button" className="navigation__button navigation__button_loggedin navigation__button_saved-movies">Сохраненные фильмы</button>
          </li>
          <li className="navigation__wrapper">
            <button type="button" className="navigation__button navigation__button_loggedin navigation__button_account">
              Аккаунт
              <svg className="navigation__button navigation__button_loggedin navigation__button_account-img" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                <path fill="#000" fillRule="evenodd" d="M7.43 7.967a3.751 3.751 0 1 0-2.861 0A8.614 8.614 0 0 0 .809 9.58l1.38 1.839A6.317 6.317 0 0 1 6 10.149c1.432 0 2.75.473 3.81 1.27l1.382-1.839A8.614 8.614 0 0 0 7.43 7.967Z" clipRule="evenodd" />
              </svg>

            </button>

          </li>
        </ul>
      ) : (
        <ul className="navigation__list">
          <li className="navigation__wrapper"><button type="button" className="navigation__button navigation__button_registration">Регистрация</button></li>
          <li className="navigation__wrapper"><button type="button" className="navigation__button navigation__button_login">Войти</button></li>
        </ul>
      )}

    </nav>
  );
}
