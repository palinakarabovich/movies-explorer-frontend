import './Logo.css';

import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Logo() {
  return (
    <NavLink to='/movies-explorer-frontend/'><img src={logo} alt='логотип' className='logo__pic' /></NavLink>
  );
}

export default Logo;