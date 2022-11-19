import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <section className='movies-list'>
      <SearchForm />
      <ul className='movies-list__cards content__list-style'>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
      </ul>
    </section>
  )
}

export default SavedMovies;
