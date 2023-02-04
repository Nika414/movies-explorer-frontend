import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Register({ onRegister, isRegisterSucceed }) {
  return (
    <Auth buttonText="Зарегистрироваться" isRegisterSucceed={isRegisterSucceed} onRegister={onRegister} selector="form__button_place_register" spanText="Уже зарегистрированы?" mainText="Добро пожаловать!" linkText=" Войти" link={routeName.login} />
  );
}
