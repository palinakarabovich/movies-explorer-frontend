import '../Main/Main.css';
import './Register.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../Logo/Logo';

function Register() {

  const history = useHistory();
  return (
    <section className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <label className='register__label' for='name'>Имя</label>
      <input className='register__input' name='name' id='name' type='text' />
      <label className='register__label' for='email'>E-mail</label>
      <input className='register__input' name='email' id='email' type='email' />
      <label className='register__label' for='password'>Пароль</label>
      <input className='register__input' name='password' id='password' type='password' />
      <button className='register__button register__button_type_signup' aria-label='Зарегистрироваться' onClick={() => history.push('/signin')}>Зарегистрироваться</button>
      <p className='register__info'>Уже зарегистрированы?<Link to='/signin' className='register__link content__link-style'>Войти</Link></p>
    </section>
  )
}

export default Register;