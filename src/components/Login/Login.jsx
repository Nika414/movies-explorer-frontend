import Auth from '../Auth/Auth';

export default function Login() {
  return (
    <Auth buttonText="Войти" selector="login__button" spanText="Ещё не зарегистрированы?" mainText="Рады видеть!" linkText=" Регистрация" link="/sign-up" />
  );
}
