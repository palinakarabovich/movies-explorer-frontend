import '../Main/Main.css';
import './Profile.css';

import React from 'react';

import { Link } from 'react-router-dom';

function Profile() {

  const [userName, setUserName] = React.useState('Виталий');
  const [userEmail, setUserEmail] = React.useState('test@test.test');
  const [isEditMode, setEditMode] = React.useState(false);

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <ul className='ptrofile__info content__list-style'>
        <li className='profile__info-field'>Имя
          <span>{isEditMode ? (<input type='text' className='profile__info-field_active' value={userName} onChange={(e) => setUserName(e.target.value)} />) : (`${userName}`)} </span>
        </li>
        <li className='profile__info-field'>Email
          <span>{isEditMode ? (<input type='email' className='profile__info-field_active' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />) : (`${userEmail}`)} </span>
        </li>
      </ul>
      <button className='profile__button profile__button_type_edit' onClick={() => setEditMode(!isEditMode)}>
        {isEditMode ? 'Cохранить' : 'Редактировать'}
      </button>
      <Link exact to='/' className='content__link-style'> <button className='profile__button profile__button_type_sign-out'>Выйти из аккаунта</button></Link>
    </section>
  );
}

export default Profile;