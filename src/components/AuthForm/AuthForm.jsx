/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function AuthForm({
  buttonText, selector, onLogin, isLoginSucceed, login, onRegister, isRegisterSucceed,
}) {
  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });
  useEffect(() => {
    reset({ email: '', password: '' });
  }, [reset]);

  function onSubmit(data) {
    if (login) {
      onLogin(data.password, data.email);
    } else {
      onRegister(data.name, data.password, data.email);
      console.log('register');
    }
    reset({ keepValues: true });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" method="post">
      {!login && (
      <label className="form__label" htmlFor="name">
        Имя
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
          className="form__input"
          id="name"
          type="text"
        />
        <span className={`form__error ${errors?.name && 'form__error_active'
        }`}
        >
          {errors?.name?.message}

        </span>
      </label>
      )}
      <label className="form__label" htmlFor="email">
        E-mail
        <input
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: 'Введите e-mail',
            },
          })}
          type="email"
          className="form__input"
          id="email"
        />
        <span className={`form__error ${errors?.email && 'form__error_active'
        }`}
        >
          {errors?.email?.message}

        </span>
      </label>
      <label className="form__label" htmlFor="password">
        Пароль
        <input
          {...register('password', {
            required: 'Поле обязательно к заполнению',
          })}
          type="password"
          className="form__input"
          id="password"
        />
        <span className={`form__error ${errors?.password && 'form__error_active'
        }`}
        >
          {errors?.password?.message}
        </span>
      </label>
      <span className={`form__error-submit ${isRegisterSucceed && 'form__error-submit_success'}`}>
        {login && isLoginSucceed === false && !isDirty && 'Неправильный логин или пароль'}
        {!login && isRegisterSucceed === true && 'Вы успешно зарегистрировались!'}
        {!login && isRegisterSucceed === false && !isDirty && 'Произошла ошибка, попробуйте еще раз'}
      </span>
      <button className={`form__button ${selector} ${isValid ? '' : 'form__button_inactive'}`} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
