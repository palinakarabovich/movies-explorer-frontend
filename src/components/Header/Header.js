import './Header.css';

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

  const location = useLocation();
  const [isLogoVisiable, setLogoVisiable] = React.useState(true);

  React.useEffect(() => {
    if (!location.pathname.includes('signin') && !location.pathname.includes('signup')) {
      setLogoVisiable(true);
    } else {
      setLogoVisiable(false);
    }
  }, [location])

  return (

    <header className='header'>
      {
        isLogoVisiable && <Logo />
      }
      <Navigation />
    </header>
  )
}

export default Header;