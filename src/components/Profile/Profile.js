import '../Main/Main.css';
import './Profile.css';

import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, onLogout, isServerLoadingData }) {

  const { user } = React.useContext(CurrentUserContext);
  const [userName, setUserName] = React.useState(user.name);
  const [userEmail, setUserEmail] = React.useState(user.email);
  const [isEditMode, setEditMode] = React.useState(false);
  const [isButtonDisabled, setButtonDisabled] = React.useState(false)

  const onEditProfileClick = () => {
    setEditMode(!isEditMode)
    if (!isEditMode) {
      setButtonDisabled(true);
    }
    if (isEditMode) {
      onUpdateUser(userName, userEmail);
    }
  }

  React.useEffect(() => {
    if (userName === user.Name || userEmail === user.Email) {
      setButtonDisabled(true);
    }
    else {
      setButtonDisabled(false);
    }
  }, [userName, userEmail])

  React.useEffect(() => {
    if (!isEditMode){
      setUserName(user.name);
      setUserEmail(user.email);
    }
  },[isEditMode])

  return (
    <section className='profile'>
      <h2 className='profile__title'>Hi, {user.name}!</h2>
      <ul className='ptrofile__info content__list-style'>
        <li className='profile__info-field'>Name
          <span>{isEditMode ? (<input type='text' className='profile__info-field_active' value={userName} disabled={isServerLoadingData} onChange={(e) => setUserName(e.target.value)} />) : (`${user.name}`)} </span>
        </li>
        <li className='profile__info-field'>Email
          <span>{isEditMode ? (<input type='email' className='profile__info-field_active' value={userEmail} disabled={isServerLoadingData} onChange={(e) => setUserEmail(e.target.value)} />) : (`${user.email}`)} </span>
        </li>
      </ul>
      <button className='profile__button profile__button_type_edit' onClick={onEditProfileClick} disabled={isButtonDisabled}>
        {isEditMode ? 'Save' : 'Edit'}
      </button>
      <button className='profile__button profile__button_type_sign-out' onClick={onLogout}>Sign out</button>
    </section>
  );
}

export default Profile;