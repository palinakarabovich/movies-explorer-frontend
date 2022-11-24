import '../Main/Main.css';
import './Register.css';

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Register({ onRegistration, isServerLoadingData }) {

  const { loggedIn } = React.useContext(CurrentUserContext);

  return (
    <>
      {loggedIn
        ? <Redirect to='/' />
        : (
          <section className='register'>
            <Logo />
            <h2 className='register__title'>Добро пожаловать!</h2>
            <AuthForm
              onSubmit={onRegistration}
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