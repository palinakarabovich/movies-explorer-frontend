import React from 'react';
import './SearchForm.css'
import { PAGE_SAVED_MOVIES } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SearchForm({ searchValue, setSearchValue, checkboxIsChecked, setCheckboxChecked, page }) {

  const [isInputDisabled, setInputDisabled] = React.useState(false);
  const { savedMovies } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (page === PAGE_SAVED_MOVIES && savedMovies.length === 0) {
      setInputDisabled(true);
    } else {
      setInputDisabled(false);
    }
  }, [savedMovies]);

  React.useEffect(() => {
    localStorage.setItem(`searchInput${page}`, searchValue);
    localStorage.setItem(`checkboxState${page}`, checkboxIsChecked);
  }, [searchValue, checkboxIsChecked]);

  const onClickCheckBox = () => {
    if (!isInputDisabled) {
      setCheckboxChecked(!checkboxIsChecked)
    }
  }

  return (
    <section className='search-form'>
      <div className='search-form__block'>
        <input type='text' id='search-input' name='search-input' placeholder={`${isInputDisabled ? 'Add some movies to favourites first' : 'Movie...'}`} className='search-form__block-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} disabled={isInputDisabled} />
        {searchValue && <button className='search-form__block-button search-form__block-button_type_clean' aria-label='Clear' onClick={() => setSearchValue('')} />}
        <button className='search-form__block-button search-form__block-button_type_search' value='Поиск' aria-label='Search' disabled={isInputDisabled}>Search</button>
      </div>
      <div className='search-form__checkbox-group'>
        <input className='search-form__checkbox-group-input' type='checkbox' id='checkbox-input' name='checkbox-input' />
        <label className={`search-form__checkbox-group-label search-form__checkbox-group-label_type_slider ${checkboxIsChecked && 'search-form__checkbox-group-label_type_slider_checked'}`} htmlFor='checkbox-input' onClick={onClickCheckBox} />
        <label className='search-form__checkbox-group-label search-form__checkbox-group-label_type_caption' htmlFor='checkbox-input' onClick={onClickCheckBox} >Short films</label>
      </div>
    </section>
  )
}

export default SearchForm;