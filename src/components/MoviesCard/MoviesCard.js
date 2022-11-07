import './MoviesCard.css';

import movieCover from '../../images/movie-cover.jpg';

import React from 'react';
import { Route } from 'react-router-dom';

function MoviesCard() {
  const [isLiked, setLiked] = React.useState(false);

  return (
    <article className='movie-card'>
      <img src={movieCover} alt='обложка фильма' className='movie-card__cover' />
      <div className='movie-card__block'>
        <h2 className='movie-card__block-name'>33 слова о дизайне</h2>
        <Route exact path='/movies'>
          <button className={`movie-card__block-button movie-card__block-button_type_like ${isLiked && 'movie-card__block-button_type_like_active'}`} aria-label='Добавить в избранное' onClick={() => setLiked(!isLiked)} />
        </Route>
        <Route exact path='/saved-movies'>
          <button className='movie-card__block-button movie-card__block-button_type_delete' aria-label='Удалить из избранного' />
        </Route>
      </div>
      <p className='movie-card__duration'>1ч42м</p>
    </article>
  )
}

export default MoviesCard;