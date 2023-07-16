import './Header.css';

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const location = useLocation();
  const [isLogo, setLogo] = React.useState(true);

  React.useEffect(() => {
    if (!location.pathname.includes('signin') && !location.pathname.includes('signup')) {
      setLogo(true);
      console.log('true')
    } else {
      setLogo(false);
      console.log('false')
    }
  }, [location])

  return (

    <header className='header'>
      <Logo isLogo={isLogo} />
      <Navigation isLogo={isLogo} />
    </header>
  )
}

export default Header;