import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

export default function Auth({
  buttonText,
  selector,
  spanText,
  mainText,
  linkText,
  link,
  login,
  isSubmitFinished,
  onSubmit,
  isSubmitSucceed,
}) {
  return (
    <section className="auth">
      <h3 className="auth__title">{mainText}</h3>
      <AuthForm
        isSubmitSucceed={isSubmitSucceed}
        login={login}
        buttonText={buttonText}
        selector={selector}
        onSubmit={onSubmit}
        isSubmitFinished={isSubmitFinished}
      />
      <span className="auth__span">
        { spanText }
        <Link className="auth__link" to={link}>{linkText}</Link>
      </span>
    </section>
  );
}
