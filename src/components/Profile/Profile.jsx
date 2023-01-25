import { useHistory } from 'react-router-dom';
import { routeName } from '../../utils/constants';

export default function Profile() {
  const history = useHistory();
  function handleLogOut() {
    history.push(routeName.login);
  }

  return (
    <main className="profile">
      <h3 className="profile__title">Привет, Вероника!</h3>
      <form className="profile__form" method="post">
        <label className="profile__form-label" htmlFor="name">
          <span className="profile__form-span">Имя</span>
          <input className="profile__form-input" id="name" defaultValue="Вероника" />
          <span className="profile__form-error">Test</span>
        </label>
        <label className="profile__form-label" htmlFor="email">
          <span className="profile__form-span">E-mail</span>
          <input type="email" className="profile__form-input" id="email" defaultValue="test@test.ru" />
          <span className="profile__form-error"> Test </span>
        </label>
        <button className="profile__button profile__button_type_submit" type="submit">
          Редактировать
        </button>
        <button onClick={handleLogOut} className="profile__button profile__button_type_exit" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}
