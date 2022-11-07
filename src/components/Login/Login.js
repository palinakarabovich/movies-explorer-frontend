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
      <label className='login__label' for='email'>E-mail</label>
      <input className='login__input' name='email' id='email' type='email' />
      <label className='login__label' for='password'>Пароль</label>
      <input className='login__input' name='password' id='password' type='password' />
      <button className='login__button_type_signin' aria-label='Войти' onClick={() => history.push('/movies')}>Войти</button>
      <p className='login__info'>Ещё не зарегистрированы?<Link to='/signup' className='login__link content__link-style'>Регистрация</Link></p>
    </section>
  )
}

export default Login;