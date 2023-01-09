import Auth from '../Auth/Auth';

export default function Register() {
  return (
    <Auth buttonText="Зарегистрироваться" spanText="Уже зарегистрированы?" mainText="Добро пожаловать!" linkText=" Войти" link="/sign-in">
      <label className="form__label" htmlFor="name">
        Имя
        <input className="form__input" id="name" />
        <span className="form__error">Test</span>
      </label>
    </Auth>

  );
}
