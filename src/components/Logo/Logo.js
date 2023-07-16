import './Logo.css';

import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Logo({ isLogo }) {
  return (
    <div style={{ visibility: `${isLogo ? 'visible' : 'hidden'}` }}>
      <NavLink to='/movies-explorer-frontend/'><img src={logo} alt='логотип' className='logo__pic' /></NavLink>
    </div>
  );
}

export default Logo;