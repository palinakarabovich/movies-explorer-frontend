import '../Main/Main.css'
import './Navigation.css';
import { Link, NavLink, Switch } from 'react-router-dom';
import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation() {

  const location = useLocation();
  const [isButtonsVisiable, setButtonsVisiable] = React.useState(true);

  React.useEffect(() => {
    if (!location.pathname.includes('signin')
      && !location.pathname.includes('signup')
      && !location.pathname.includes('saved-movies')
    ) {
      setButtonsVisiable(true);
    } else {
      setButtonsVisiable(false);
    }
  }, [location])

  // const endPoints = ['/movies-explorer-frontend/movies', '/movies-explorer-frontend/saved-movies', '/movies-explorer-frontend/profile', '/'];
  const { loggedIn } = React.useContext(CurrentUserContext);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <Switch>
      <>
        <div className={`nav-logged-in__background ${isMenuOpen && 'nav-logged-in_open'}`}></div>
        <button className='nav-logged-in__button nav-logged-in__button_type_menu-icon' aria-label='menu' onClick={() => setMenuOpen(true)}></button>
        <nav className='nav-logged-in nav-logged-in_type_full-screen'>
          <div className='nav-logged-in__pages'>
            <NavLink to="/movies-explorer-frontend/movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style'>Movies</NavLink>
            <NavLink to="/movies-explorer-frontend/saved-movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style'>Favorites movies</NavLink>
          </div>
          {
            loggedIn ?
              <div className='nav-logged-in__account'>
                <Link to="/movies-explorer-frontend/profile" className='nav-logged-in__account-link nav-logged-in__account-link_type_account content__link-style'>Profile</Link>
                <Link to="/movies-explorer-frontend/profile"><div className='nav-logged-in__account-pic'></div></Link>
              </div>
              : <nav className='nav-not-logged-in' style={{ visibility: `${isButtonsVisiable ? 'visible' : 'hidden'}` }}>
                <Link to='/movies-explorer-frontend/signup' className='nav-not-logged-in__button nav-not-logged-in__button_type_sign-up content__link-style' aria-label='Sign up' >{'Sign up'}</Link>
                <Link to='/movies-explorer-frontend/signin' className='nav-not-logged-in__button nav-not-logged-in__button_type_sign-in content__link-style' aria-label='Sign in'>{'Sign in'}</Link>
              </nav>
          }

        </nav>

        <nav className={`nav-logged-in nav-logged-in_type_burger-menu ${isMenuOpen && 'nav-logged-in_open'}`}>
          <button className="nav-logged-in__button nav-logged-in__button_type_close" aria-label='Close menu' onClick={() => setMenuOpen(false)} />
          <div className='nav-logged-in__pages'>
            {!loggedIn && <NavLink to="/movies-explorer-frontend/signin" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Sign in</NavLink>}
            <NavLink to="/movies-explorer-frontend/movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Movies</NavLink>
            <NavLink to="/movies-explorer-frontend/saved-movies" activeClassName='nav-logged-in__pages-link_active' className='nav-logged-in__pages-link content__link-style' onClick={() => setMenuOpen(false)}>Favorites movies</NavLink>
          </div>
          {
            loggedIn ?
              <div className='nav-logged-in__account'>
                <Link to="/movies-explorer-frontend/profile" className='nav-logged-in__account-link nav-logged-in__account-link_type_account content__link-style'>Profile</Link>
                <Link to="/movies-explorer-frontend/profile"><div className='nav-logged-in__account-pic'></div></Link>
              </div>
              : <div className='nav-logged-in__account'>
                <Link to="/movies-explorer-frontend/signup" className='nav-logged-in__account-link nav-logged-in__account-link_type_account content__link-style'>Sign up</Link>
              </div>
          }
        </nav>
      </>

    </Switch>
  );
}

export default Navigation;