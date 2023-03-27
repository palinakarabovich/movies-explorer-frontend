export const filterMovies = (movies, input) => {
  return movies.filter((movie) => movie.nameEN.toLowerCase().includes(input.toLowerCase())
    || movie.nameEN.toLowerCase().includes(input.toLowerCase()));
};

export const filterMoviesDuration = (movies, input, duration) => {
  const sortedMovies = filterMovies(movies, input);
  return sortedMovies.filter((movie) => movie.duration < duration);
};