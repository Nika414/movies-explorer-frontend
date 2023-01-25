export default function AuthForm({ buttonText, selector, children }) {
  return (
    <form className="form" method="post">
      {children}
      <label className="form__label" htmlFor="email">
        E-mail
        <input type="email" className="form__input" id="email" />
        <span className="form__error"> Test </span>
      </label>
      <label className="form__label" htmlFor="password">
        Пароль
        <input type="password" className="form__input" id="password" />
        <span className="form__error"> Test </span>
      </label>
      <button className={`form__button ${selector}`} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
