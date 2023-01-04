import Logo from '../../images/logo.png';

export default function Navigation() {
  return (
    <nav className="navigation">
      <img src={Logo} alt="Лого" className="navigation__logo" />
      <ul className="navigation__list">
        <li className="navigation__button navigation__button_registration"><a href="#">Регистрация</a></li>
        <li className="navigation__button navigation__button_login"><a href="#">Войти</a></li>
      </ul>
    </nav>
  );
}
