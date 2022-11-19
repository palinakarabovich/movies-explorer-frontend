import '../Main/Main.css';
import './MoviesCardList.css'

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Loader from '../Loader/Loader';
import { DESKTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH, PAGE_SAVED_MOVIES, PAGE_ALL_MOVIES } from '../../utils/constants'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCardList({ movies, handleLike, handleDelete, isMoviesLoaded, searchValue, page }) {

  const [currentCount, setCurrentCount] = React.useState(0);
  const [extraRow, setExtraRow] = React.useState(3);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const { savedMovies } = React.useContext(CurrentUserContext);

  const getCount = (windowSize) => {
    if (windowSize >= DESKTOP_WIDTH) {
      return { first: 12, extra: 3 };
    } if (windowSize > MOBILE_WIDTH && windowSize <= TABLET_WIDTH) {
      return { first: 8, extra: 2 };
    }
    return { first: 5, extra: 2 };
  };

  const renderExtraRow = () => {
    const count = Math.min(movies.length, currentCount + extraRow);
    const extraMovies = movies.slice(currentCount, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCount(count);
  };

  const resizeHandler = () => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize));
  };

  const renderMore = () => renderExtraRow();

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  React.useEffect(() => {
    const windowSize = window.innerWidth;
    setExtraRow(getCount(windowSize).extra);
    const count = Math.min(movies.length, getCount(windowSize).first);
    setMoviesToRender(movies.slice(0, count));
    setCurrentCount(count);
  }, [movies]);

  return (
    <section className='movies-list'>
      {isMoviesLoaded
        ? (<Loader />)
        : searchValue === '' && page === PAGE_ALL_MOVIES
          ? <p className='movies-list__empty'>Воспользуйтесь поиском, чтобы найти фильмы :-) </p>
          : savedMovies.length === 0 && page === PAGE_SAVED_MOVIES
            ? (<p className='movies-list__empty'>Вы еще не добавили ни одного фильма в избранное</p>)
            : movies.length === 0
              ? (<p className='movies-list__empty'>Ничего не найдено</p>)
              : (<><ul className='movies-list__cards content__list-style'>
                {
                  moviesToRender.map((movie) => (<MoviesCard movie={movie} handleLike={handleLike} key={movie.id || movie._id} handleDelete={handleDelete} />))
                }
              </ul>
                {currentCount < movies.length && (<button value='еще' className='movies-list__button movies-list__button_type_load' aria-label='Загрузить еще фильмы' onClick={renderMore}>Еще</button>)}</>)
      }
    </section>
  );

}

export default MoviesCardList;