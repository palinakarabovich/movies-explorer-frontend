import React from 'react';
import './AuthForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation'

function AuthForm({ FormTypeLogin, onSubmit }) {

  const { values, handleChange, errors, isValid, resetForm, isServerLoadingData } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    !FormTypeLogin
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit} noValidate >

      {!FormTypeLogin && (

        <label className='auth-form__label' htmlFor='name'>
          Name
          <input
            className={`auth-form__input ${errors.name && 'auth-form__input_has_error'}`}
            required
            minLength='2'
            maxLength='30'
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleChange}
            value={values.name}
            autoComplete='disabled'
            disabled={isServerLoadingData}
          />
          <span className='auth-form__error'>{errors.name}</span>
        </label>
      )}

      <label className='auth-form__label' htmlFor='email'>
        Email
        <input
          className={`auth-form__input ${errors.email && 'auth-form__input_has_error'}`}
          required
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
          value={values.email}
          autoComplete='disabled'
          pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
          disabled={isServerLoadingData}
        />
      </label>
      <span className='auth-form__error'>{errors.email}</span>

      <label className='auth-form__label' htmlFor='password'>
        Password
        <input
          className={`auth-form__input ${errors.password && 'auth-form__input_has_error'}`}
          required
          name='password'
          type='password'
          minLength='1'
          placeholder='Password'
          onChange={handleChange}
          value={values.password}
          autoComplete='disabled'
          disabled={isServerLoadingData}
        />
        <span className='auth-form__error'>{errors.password}</span>
      </label>

      <button type='submit' className={`auth-form__submit-button ${FormTypeLogin ? 'auth-form__submit-button_type_signin' : 'auth-form__submit-button_type_signup'}`} disabled={!isValid}>{FormTypeLogin ? 'Sign in' : 'Sign up'}</button>
    </form>
  );
}

export default AuthForm;