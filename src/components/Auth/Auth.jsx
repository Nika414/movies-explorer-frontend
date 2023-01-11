import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

export default function Auth({
  children, buttonText, selector, spanText, mainText, linkText, link,
}) {
  return (
    <section className="auth">
      <h3 className="auth__title">{mainText}</h3>
      <AuthForm buttonText={buttonText} selector={selector}>
        {children}
      </AuthForm>
      <span className="auth__span">
        { spanText }
        <Link className="auth__link" to={link}>{linkText}</Link>
      </span>
    </section>
  );
}
