import '../Main/Main.css';
import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies-list'>
      <ul className='movies-list__cards content__list-style'>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
      </ul>
      <button value='еще' className='movies-list__button movies-list__button_type_load' aria-label='Загрузить еще фильмы'>Еще</button>
    </section>
  )
};

export default MoviesCardList;