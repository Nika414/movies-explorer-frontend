import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../CurrentUserContext';

export default function Profile({ onLogout, onProfileChange, isChangingSucceed }) {
  const contextValue = useContext(CurrentUserContext);

  const {
    register,
    reset,
    formState: {
      errors, isValid, isDirty,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });

  useEffect(() => {
    reset({ name: contextValue.currentUser.name, email: contextValue.currentUser.email });
  }, [contextValue.currentUser, reset]);

  function handleLogOut() {
    onLogout();
  }

  function onSubmit(data) {
    onProfileChange(data);
    reset({ keepValues: true });
  }

  return (
    <main className="profile">
      <h3 className="profile__title">
        Привет,
        {' '}
        {contextValue.currentUser.name}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="profile__form" method="post">
        <label className="profile__form-label" htmlFor="name">
          <span className="profile__form-span">Имя</span>
          <input
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов',
              },
            })}
            className="profile__form-input"
            id="name"
          />
          <span className={`profile__form-error ${errors?.name && 'profile__form-error_active'
          }`}
          >
            {errors?.name?.message}
          </span>
        </label>
        <label className="profile__form-label" htmlFor="email">
          <span className="profile__form-span">E-mail</span>
          <input
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: 'Введите e-mail',
              },
            })}
            type="email"
            className="profile__form-input"
            id="email"
          />
          <span className={`profile__form-error ${errors?.email && 'profile__form-error_active'
          }`}
          >
            {errors?.email?.message}
          </span>
        </label>
        <span className={`profile__form-error-submit ${isChangingSucceed && 'profile__form-error-submit_success'}`}>
          {isChangingSucceed === false && 'Произошла ошибка, попробуйте еще раз'}
          {isChangingSucceed === true && 'Данные успешно обновлены'}
        </span>
        <button className={`profile__button profile__button_type_submit ${isValid && isDirty ? '' : 'profile__button_inactive'}`} type="submit">
          Редактировать
        </button>
        <button onClick={handleLogOut} className="profile__button profile__button_type_exit" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}
