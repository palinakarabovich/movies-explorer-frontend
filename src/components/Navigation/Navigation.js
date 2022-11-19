import '../Main/Main.css'
import './Navigation.css';
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation() {

  const endPoints = ['/movies', '/saved-movies', '/profile', '/'];
  const { loggedIn } = React.useContext(CurrentUserContext);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <Switch>
      {
        loggedIn && <Route path={endPoints}>
          <div className={`nav-logged-in__background ${isMenuOpen && 'nav-logged-in_open'}`}></div>
          <button className='nav-logged-in__button nav-logged-in__button_type_menu-icon' aria-label='меню' onClick={() => setMenuOpen(true)}></button>
          <nav className='nav-logged-in nav-logged-in_type_full-screen'>
            <div className='nav-logged-in__pages'>
              <NavLink to="/movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style'>Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style'>Сохраненные фильмы</NavLink>
            </div>
            <div className='nav-logged-in__account'>
              <Link to="/profile" className='nav-logged-in__account-link nav-logged-in__account-link_type_account content__link-style'>Аккаунт</Link>
              <Link to="/profile"><div className='nav-logged-in__account-pic'></div></Link>
            </div>
          </nav>

          <nav className={`nav-logged-in nav-logged-in_type_burger-menu ${isMenuOpen && 'nav-logged-in_open'}`}>
            <button className="nav-logged-in__button nav-logged-in__button_type_close" aria-label='Закрыть меню' onClick={() => setMenuOpen(false)} />
            <div className='nav-logged-in__pages'>
              <NavLink exact to="/" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Главная</NavLink>
              <NavLink to="/movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Сохраненные фильмы</NavLink>
            </div>
            <div className='nav-logged-in__account'>
              <Link to="/profile" className='nav-logged-in__account-link nav-logged-in__account-link_type_account content__link-style'>Аккаунт</Link>
              <Link to="/profile"><div className='nav-logged-in__account-pic'></div></Link>
            </div>
          </nav>
        </Route>
      }

      {
        !loggedIn &&
        <Route exact path='/'>
          <nav className='nav-not-logged-in'>
            <Link to='/signup' className='nav-not-logged-in__button nav-not-logged-in__button_type_sign-up content__link-style' aria-label='Регистрация' >{'Регистрация'}</Link>
            <Link to='/signin' className='nav-not-logged-in__button nav-not-logged-in__button_type_sign-in content__link-style' aria-label='Войти'>{'Войти'}</Link>
          </nav>
        </Route>
      }

    </Switch>
  );
}

export default Navigation;