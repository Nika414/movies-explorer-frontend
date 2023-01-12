import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Register() {
  return (
    <Auth buttonText="Зарегистрироваться" selector="register__button" spanText="Уже зарегистрированы?" mainText="Добро пожаловать!" linkText=" Войти" link={routeName.login}>
      <label className="form__label" htmlFor="name">
        Имя
        <input className="form__input" id="name" />
        <span className="form__error">Test</span>
      </label>
    </Auth>
  );
}
