import { API_MAIN_URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${API_MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then((res) => checkResponse(res));
}

export const login = (email, password) => {
  return fetch(`${API_MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => checkResponse(res));
}

export const checkToken = () => {
  return fetch(`${API_MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  })
    .then((res) => checkResponse(res));
}

export const updateUser = (name, email) => {
  return fetch(`${API_MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then((res) => checkResponse(res));
}

export const saveMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  id,
}) => {
  return fetch(`${API_MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      country: country || 'no country',
      director,
      duration,
      year,
      description,
      image: `https://api.nomoreparties.co${image.url}`,
      trailerLink,
      nameRU: nameRU || 'no name',
      nameEN: nameEN || 'no name',
      thumbnail: `https://api.nomoreparties.co${image.url}`,
      movieId: id,
    })
  })
    .then((res) => checkResponse(res));
}

export const deleteMovie = (movieId) => {
  return fetch(`${API_MAIN_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => checkResponse(res));
}

export const getSavedMovies = () => {
  return fetch(`${API_MAIN_URL}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => checkResponse(res));
}

