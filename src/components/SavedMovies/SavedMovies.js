import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterMoviesDuration } from '../../utils/moviesFiltration';
import { SHORTFILM_DURATION, PAGE_SAVED_MOVIES } from '../../utils/constants';

import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({ handleDelete, isMoviesLoaded, setMoviesLoaded, isServerLoadingData }) {

  const [searchValue, setSearchValue] = React.useState('');
  const [checkboxIsChecked, setCheckboxChecked] = React.useState(false);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const { savedMovies } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setSortedMovies(savedMovies);
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
  );
}

export default SavedMovies;
