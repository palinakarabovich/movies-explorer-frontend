import '../Main/Main.css';
import './Footer.css';

import { Route } from 'react-router-dom';

function Footer() {

  const endPoints = ['/movies-explorer-frontend/movies', '/movies-explorer-frontend/saved-movies', '/movies-explorer-frontend/']

  return (
    <Route exact path={endPoints}>
      <footer className='footer'>
        <p className='footer__caption'>Educational project Yandex.Precticum х BeatFilm.</p>
        <div className='footer__content'>
          <p className='footer__content-year'>&copy; {(new Date()).getFullYear()}</p>
          <ul className='footer__content-list content__list-style'>
            <li className='footer__content-list-node'><a href='https://practicum.yandex.ru/' className='footer__content-list-link content__link-style' target='_blank'>Yandex.Practicum</a></li>
            <li className='footer__content-list-node'><a href='https://github.com/' className='footer__content-list-link content__link-style' target='_blank'>Github</a></li>
          </ul>
        </div>
      </footer>
    </Route>
  )
}

export default Footer;