import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Login({ onSubmit, isSubmitSucceed, isSubmitFinished }) {
  return (
    <Auth buttonText="Войти" login onSubmit={onSubmit} isSubmitFinished={isSubmitFinished} isSubmitSucceed={isSubmitSucceed} selector="form__button_place_login" spanText="Ещё не зарегистрированы?" mainText="Рады видеть!" linkText=" Регистрация" link={routeName.register} />
  );
}
