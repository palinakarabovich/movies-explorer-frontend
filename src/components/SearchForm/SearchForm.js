import './SearchForm.css'

function SearchForm() {

  return (
    <section className='search-form'>
      <div className='search-form__block'>
        <input type='text' id='search-input' name='search-input' placeholder='Фильм' className='search-form__block-input' />
        <button className='search-form__block-button' value='Поиск' aria-label='Поиск по фильмам' >Поиск</button>
      </div>
      <div className='search-form__checkbox-group'>
        <input className='search-form__checkbox-group-input' type='checkbox' id='checkbox-input' name='checkbox-input' />
        <label className='search-form__checkbox-group-label search-form__checkbox-group-label_type_slider' for='checkbox-input' />
        <label className='search-form__checkbox-group-label search-form__checkbox-group-label_type_caption' for='checkbox-input'>Короткометражки</label>
      </div>
    </section>
  )
}

export default SearchForm;