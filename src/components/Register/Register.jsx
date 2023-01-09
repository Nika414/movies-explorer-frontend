import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form" method="post">
        <label className="form__label" htmlFor="name">
          Имя
          <input className="form__input" id="name" />
          <span className="form__error">Test</span>
        </label>
        <label className="form__label" htmlFor="email">
          E-mail
          <input className="form__input" id="email" />
          <span className="form__error"> Test </span>
        </label>
        <label className="form__label" htmlFor="password">
          Пароль
          <input className="form__input" id="password" />
          <span className="form__error"> Test </span>
        </label>
        <button className="form__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <span className="register__span">
        Уже зарегистрированы?
        <Link to="/sign-in"> Войти</Link>
      </span>
    </div>
  );
}
