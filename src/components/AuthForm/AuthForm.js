import React from 'react';
import './AuthForm.css';

function AuthForm({ FormTypeLogin, onSubmit, formData }) {

  const { values, handleChange, errors, isValid, resetForm, isServerLoadingData } = formData;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className='auth-form' onSubmit={onSubmit} noValidate >

      {!FormTypeLogin && (

        <label className='auth-form__label' htmlFor='name'>
          Имя
          <input
            className={`auth-form__input ${errors.name && 'auth-form__input_has_error'}`}
            required
            minLength='2'
            maxLength='30'
            name='name'
            type='text'
            placeholder='Имя'
            onChange={handleChange}
            value={values.name}
            autoComplete='disabled'
            disabled={isServerLoadingData}
          />
          <span className='auth-form__error'>{errors.name}</span>
        </label>
      )}

      <label className='auth-form__label' htmlFor='email'>
        Почта
        <input
          className={`auth-form__input ${errors.email && 'auth-form__input_has_error'}`}
          required
          name='email'
          type='email'
          placeholder='Почта'
          onChange={handleChange}
          value={values.email}
          autoComplete='disabled'
          disabled={isServerLoadingData}
        />
      </label>
      <span className='auth-form__error'>{errors.email}</span>

      <label className='auth-form__label' htmlFor='password'>
        Пароль
        <input
          className={`auth-form__input ${errors.password && 'auth-form__input_has_error'}`}
          required
          name='password'
          type='password'
          minLength='1'
          placeholder='Пароль'
          onChange={handleChange}
          value={values.password}
          autoComplete='disabled'
          disabled={isServerLoadingData}
        />
        <span className='auth-form__error'>{errors.password}</span>
      </label>

      <button type='submit' className={`auth-form__submit-button ${FormTypeLogin ? 'auth-form__submit-button_type_signin' : 'auth-form__submit-button_type_signup'}`} disabled={!isValid}>{FormTypeLogin ? 'Войти' : 'Зарегестрироваться'}</button>
    </form>
  );
}

export default AuthForm;