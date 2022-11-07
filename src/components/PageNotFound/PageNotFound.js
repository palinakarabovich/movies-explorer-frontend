import './PageNotFound.css'

import { useHistory } from 'react-router-dom';

function PageNotFound() {

  const history = useHistory();

  return (
    <div className='page-not-found'>
      <div className='page-not-found__block'>
        <h2 className='page-not-found__block-error-code'>404</h2>
        <p className='page-not-found__block-error-description'>Страница не найдена</p>
      </div>
      <button className='page-not-found__button page-not-found__button_type_back' onClick={() => history.goBack()}>Назад</button>
    </div >
  )
}

export default PageNotFound;