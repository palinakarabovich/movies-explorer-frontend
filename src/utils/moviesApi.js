import { API_MOVIE_URL } from '../utils/constants';

export const getMovies = () => {
  return fetch(API_MOVIE_URL).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};
