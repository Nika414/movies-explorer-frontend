import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Login({ onLogin, isLoginSucceed }) {
  return (
    <Auth buttonText="Войти" onLogin={onLogin} isLoginSucceed={isLoginSucceed} selector="form__button_place_login" spanText="Ещё не зарегистрированы?" mainText="Рады видеть!" linkText=" Регистрация" link={routeName.register} />
  );
}
