export default function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Вероника!</h2>
      <form className="profile__form" method="post">
        <label className="profile__form_label" htmlFor="name">
          <span className="profile__form_span">Имя</span>
          <input className="profile__form_input" id="name" defaultValue="Вероника" />
          <span className="profile__form_error">Test</span>
        </label>
        <label className="profile__form_label" htmlFor="email">
          <span className="profile__form_span">E-mail</span>
          <input type="email" className="profile__form_input" id="email" defaultValue="test@test.ru" />
          <span className="profile__form_error"> Test </span>
        </label>
        <button className="profile__button profile__button_type_submit" type="submit">
          Редактировать
        </button>
        <button className="profile__button profile__button_type_exit" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}
