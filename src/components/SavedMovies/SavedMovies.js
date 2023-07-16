import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterMoviesDuration } from '../../utils/moviesFiltration';
import { SHORTFILM_DURATION, PAGE_SAVED_MOVIES } from '../../utils/constants';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({ handleDelete, isMoviesLoaded, setMoviesLoaded, isServerLoadingData }) {

  const [searchValue, setSearchValue] = React.useState('');
  const [checkboxIsChecked, setCheckboxChecked] = React.useState(false);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const { savedMovies, loggedIn } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (loggedIn) {
      setSortedMovies(savedMovies);
    }
  }, [])

  React.useEffect(() => {
    if (searchValue !== '') {
      setMoviesLoaded(true);
      setSortedMovies((state) => state = filterMovies(savedMovies, searchValue));
    } else setSortedMovies(savedMovies);
    if (checkboxIsChecked) {
      setMoviesLoaded(true);
      setSortedMovies((state) => state = filterMoviesDuration(savedMovies, searchValue, SHORTFILM_DURATION));
    }
  }, [searchValue, checkboxIsChecked, savedMovies]);

  React.useEffect(() => {
    if (isServerLoadingData) {
      setMoviesLoaded(true);
    } else setMoviesLoaded(false);
  }, [sortedMovies]);

  return (
    <div className='saved-movies'>
      {
        loggedIn ?
          <>
            <SearchForm
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              checkboxIsChecked={checkboxIsChecked}
              setCheckboxChecked={setCheckboxChecked}
              page={PAGE_SAVED_MOVIES} />

            <MoviesCardList
              movies={sortedMovies}
              handleDelete={handleDelete}
              isMoviesLoaded={isMoviesLoaded}
              searchValue={searchValue}
              page={PAGE_SAVED_MOVIES} />
          </>
          : <div className='saved-movies__container'>
            <p className='saved-movies__container-text'>Use your account or create a new one to add and save your favorite movies.</p>
          <div className='saved-movies__container-buttons-group container-buttons-group'>
            <Link to='/movies-explorer-frontend/signup' className='container-buttons-group__button' aria-label='Sign up' >{'Sign up'}</Link>
            <Link to='/movies-explorer-frontend/signin' className='container-buttons-group__button' aria-label='Sign in'>{'Sign in'}</Link>
            </div>
          </div>

      }
    </div>
  );
}

export default SavedMovies;
