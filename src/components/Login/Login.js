import '../Main/Main.css';
import './Login.css';

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Login({ onLogin, isServerLoadingData }) {

  const { loggedIn } = React.useContext(CurrentUserContext);

  return (
    <>
      {loggedIn
        ? <Redirect to='/' />
        : (
          <section className='login'>
            <Logo />
            <h2 className='login__title'>Hice to see you!</h2>
            <AuthForm
              FormTypeLogin
              onSubmit={onLogin}
              isServerLoadingData={isServerLoadingData}
            />
            <p className='login__info'>
              Want to make an account? 
              <Link className='login__link content__link-style' to='/movies-explorer-frontend/signup'>Sign up</Link>
            </p>
          </section>
        )
      }
    </>
  );
}

export default Login;