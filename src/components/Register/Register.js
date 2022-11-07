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
      <form className='register__form'>
        <label className='register__form-label' for='name'>Имя</label>
        <input className='register__form-input' name='name' id='name' type='text' placeholder='Имя' required minLength={2} maxLength={30} />
        <label className='register__form-label' for='email'>E-mail</label>
        <input className='register__form-input' name='email' id='email' type='email' placeholder='Email' required />
        <label className='register__form-label' for='password'>Пароль</label>
        <input className='register__form-input' name='password' id='password' type='password' placeholder='Пароль' required />
        <button className='register__form-button register__form-button_type_signup' type='submit' aria-label='Зарегистрироваться' onClick={() => history.push('/signin')}>Зарегистрироваться</button>
      </form>
      <p className='register__info'>Уже зарегистрированы?<Link to='/signin' className='register__link content__link-style'>Войти</Link></p>
    </section>
  )
}

export default Register;