import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Register({ onSubmit, isSubmitSucceed, isSubmitFinished }) {
  return (
    <Auth buttonText="Зарегистрироваться" isSubmitFinished={isSubmitFinished} isSubmitSucceed={isSubmitSucceed} onSubmit={onSubmit} selector="form__button_place_register" spanText="Уже зарегистрированы?" mainText="Добро пожаловать!" linkText=" Войти" link={routeName.login} />
  );
}
