/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuButton from '../../images/menu.svg';
import closeButton from '../../images/close.svg';

export default function Navigation({ loggedIn, location }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const bttnSelector = 'navigation__button';

  function toggleMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div>
      {loggedIn && location !== '/' ? (
        <nav className={`nav ${menuOpen && 'nav_opened'}`}>
          <button onClick={closeMenu} type="button" className={`navigation__close-button ${menuOpen && 'navigation__close-button_opened'}`}>
            <img alt="Закрыть меню" src={closeButton} className="navigation__close-button_img" />
          </button>
          <ul className={`navigation__list navigation__list_place_movies ${menuOpen && 'navigation__list_place_movies_active'}`}>
            <li className="navigation__wrapper">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_loggedin ${bttnSelector}_main`}>
                <NavLink to="/">Главная</NavLink>
              </button>
            </li>
            <li className="navigation__wrapper">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_loggedin`}>
                <NavLink to="/movies">Фильмы</NavLink>
              </button>
            </li>
            <li className="navigation__wrapper">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_loggedin ${bttnSelector}_saved-movies`}>
                <NavLink to="/saved-movies">Сохраненные фильмы</NavLink>
              </button>
            </li>
            <li className="navigation__wrapper navigation__wrapper_account">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_loggedin ${bttnSelector}_account`}>
                <NavLink to="/profile">Аккаунт</NavLink>
                <svg className={`${bttnSelector} ${bttnSelector}_loggedin ${bttnSelector}_account-img`} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                  <path fill="#000" fillRule="evenodd" d="M7.43 7.967a3.751 3.751 0 1 0-2.861 0A8.614 8.614 0 0 0 .809 9.58l1.38 1.839A6.317 6.317 0 0 1 6 10.149c1.432 0 2.75.473 3.81 1.27l1.382-1.839A8.614 8.614 0 0 0 7.43 7.967Z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>
          <button onClick={toggleMenu} type="button" className={`navigation__menu_button ${menuOpen && 'menu_button__hidden'}`}>
            <img className="navigation__menu_img" src={menuButton} alt="Меню" />
          </button>
        </nav>
      ) : (
        <nav>
          <ul className="navigation__list">
            <li className="navigation__wrapper">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_registration`}>
                <NavLink to="/sign-up">Регистрация</NavLink>
              </button>
            </li>

            <li className="navigation__wrapper">
              <button type="button" className={`${bttnSelector} ${bttnSelector}_login`}>
                <NavLink to="/sign-in">Войти</NavLink>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
