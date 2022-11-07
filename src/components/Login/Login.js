import '../Main/Main.css';
import './Login.css';

import Logo from '../Logo/Logo';

import { Link, useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <section className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <label className='login__form-label' for='email'>E-mail</label>
        <input className='login__form-input' name='email' id='email' type='email' placeholder='Email' required />
        <label className='login__form-label' for='password'>Пароль</label>
        <input className='login__form-input' name='password' id='password' type='password' placeholder='Пароль' required />
        <button className='login__form-button login__form-button_type_signin' type='submit' aria-label='Войти' onClick={() => history.push('/movies')}>Войти</button>
      </form>
      <p className='login__info'>Ещё не зарегистрированы?<Link to='/signup' className='login__link content__link-style'>Регистрация</Link></p>
    </section >
  )
}

export default Login;