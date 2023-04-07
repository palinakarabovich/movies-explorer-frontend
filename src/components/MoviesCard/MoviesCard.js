import '../Main/Main'
import './MoviesCard.css';

import React from 'react';
import { Route } from 'react-router-dom';
import { SERVER__URL } from '../../utils/constants';
import { convertFilmDuration } from '../../utils/durationConverter';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ movie, handleLike, handleDelete }) {
  const [isLiked, setLiked] = React.useState(false);
  const { savedMovies } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setLiked((state) => state = savedMovies.some(m => m.movieId === movie.id));
  }, [savedMovies, movie]);

  const onLikeClick = () => {
    if (!isLiked) {
      handleLike(movie);
      setLiked(true);
    }
    if (isLiked) {
      handleDelete(savedMovies.find(m => m.movieId === movie.id))
    }
  }

  const onDeleteClick = () => {
    handleDelete(movie);
  }

  return (
    <article className='movie-card'>
      <a className='content__link-style' target='_blank' href={movie.trailerLink}>

        <Route exact path='/movies-explorer-frontend/movies'>
          <img src={`${SERVER__URL}${movie.image.url}`} alt={movie.nameEN} className='movie-card__cover' />
        </Route>

        <Route exact path='/movies-explorer-frontend/saved-movies'>
          <img src={`${movie.image}`} alt={movie.nameEN} className='movie-card__cover' />
        </Route>

      </a>

      <div className='movie-card__block'>
        <h2 className='movie-card__block-name'>{movie.nameEN}</h2>

        <Route exact path='/movies-explorer-frontend/movies'>
          <button className={`movie-card__block-button movie-card__block-button_type_like ${isLiked && 'movie-card__block-button_type_like_active'}`} aria-label='Add to favourites' onClick={onLikeClick} />
        </Route>

        <Route exact path='/movies-explorer-frontend/saved-movies'>
          <button className='movie-card__block-button movie-card__block-button_type_delete' aria-label='Delete from favoutites' onClick={onDeleteClick} />
        </Route>

      </div>
      <p className='movie-card__duration'>{convertFilmDuration(movie.duration)}</p>
    </article>
  )
}

export default MoviesCard;