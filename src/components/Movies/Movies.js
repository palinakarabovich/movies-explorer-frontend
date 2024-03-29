import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'
import React from 'react';
import { filterMovies, filterMoviesDuration } from '../../utils/moviesFiltration';
import { SHORTFILM_DURATION, PAGE_ALL_MOVIES } from '../../utils/constants';

function Movies({ movies, handleLike, handleDelete, isMoviesLoaded, setMoviesLoaded, isServerLoadingData }) {

  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchInputMovies') || '');
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const isCheckboxChecked = localStorage.getItem('checkboxStateMovies') === 'true' ? true : false;
  const [checkboxIsChecked, setCheckboxChecked] = React.useState(isCheckboxChecked);

  React.useEffect(() => {
    if (searchValue !== '') {
      setMoviesLoaded(true);
      setSortedMovies((state) => state = filterMovies(movies, searchValue));
    } else {
      setSortedMovies(movies);
    }
    if (checkboxIsChecked) {
      setMoviesLoaded(true);
      setSortedMovies((state) => state = filterMoviesDuration(movies, searchValue, SHORTFILM_DURATION));
    }
  }, [searchValue, checkboxIsChecked, movies]);

  React.useEffect(() => {
    if (localStorage.getItem('searchInputMovies') === '') {
      setMoviesLoaded(false)
    }
  }, [movies]);

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
        page={PAGE_ALL_MOVIES} />

      <MoviesCardList
        movies={sortedMovies}
        handleLike={handleLike}
        handleDelete={handleDelete}
        isMoviesLoaded={isMoviesLoaded}
        searchValue={searchValue}
        page={PAGE_ALL_MOVIES} />
    </>
  )
}

export default Movies;