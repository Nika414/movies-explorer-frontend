import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

export default function Auth({
  buttonText,
  selector,
  spanText,
  mainText,
  linkText,
  link,
  onLogin,
  isLoginSucceed,
  login,
  onRegister,
  isRegisterSucceed,
}) {
  return (
    <section className="auth">
      <h3 className="auth__title">{mainText}</h3>
      <AuthForm
        isRegisterSucceed={isRegisterSucceed}
        login={login}
        buttonText={buttonText}
        selector={selector}
        isLoginSucceed={isLoginSucceed}
        onLogin={onLogin}
        onRegister={onRegister}
      />
      <span className="auth__span">
        { spanText }
        <Link className="auth__link" to={link}>{linkText}</Link>
      </span>
    </section>
  );
}
