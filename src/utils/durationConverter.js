export const convertFilmDuration = ( duration ) => {
  return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
}