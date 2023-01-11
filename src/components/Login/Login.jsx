import Auth from '../Auth/Auth';
import { routeName } from '../../utils/constants';

export default function Login() {
  return (
    <Auth buttonText="Войти" selector="login__button" spanText="Ещё не зарегистрированы?" mainText="Рады видеть!" linkText=" Регистрация" link={routeName.register} />
  );
}
