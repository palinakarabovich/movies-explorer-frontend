import '../Main/Main.css';
import './Register.css';

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Register({ onRegistration, isServerLoadingData }) {

  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;
  const { loggedIn } = React.useContext(CurrentUserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    onRegistration(name, email, password);
    formWithValidation.resetForm();
  };

  return (
    <>
      {loggedIn
        ? <Redirect to='/' />
        : (
          <section className='register'>
            <Logo />
            <h2 className='register__title'>Добро пожаловать!</h2>
            <AuthForm
              onSubmit={submitHandler}
              formData={formWithValidation}
              isServerLoadingData={isServerLoadingData}
            />
            <p className='register__info'>
              Уже зарегистрированы?
              <Link className='register__link content__link-style' to='/signin'>Войти</Link>
            </p>
          </section>)
      }
    </>
  );
}

export default Register;