/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function AuthForm({
  buttonText, selector, children, onLogin, isLoginSucceed,
}) {
  const {
    register,
    reset,
    formState: { errors, isValid },
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
    onLogin(data.password, data.email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" method="post">
      {children}
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

          {(errors?.password?.message) || (isLoginSucceed === false && 'Неправильный логин или пароль')}

        </span>
      </label>
      <button className={`form__button ${selector} ${isValid ? '' : 'form__button_inactive'}`} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
