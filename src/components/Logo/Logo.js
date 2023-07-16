import './Logo.css';

import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';
import React from 'react';

function Logo() {

  return (
    <div>
      <NavLink to='/movies-explorer-frontend/'><img src={logo} alt='логотип' className='logo__pic' /></NavLink>
    </div>
  );
}

export default Logo;