import './Header.css';

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Route } from 'react-router-dom';

function Header() {
  const endPoints = ['/movies', '/saved-movies', '/', '/profile'];

  return (
    <Route exact path={endPoints}>
      <header className='header'>
        <Logo />
        <Navigation />
      </header>
    </Route>
  )
}

export default Header;