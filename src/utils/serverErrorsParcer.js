export const parceServerErrors = (status) => {
  if (status === '400' || status === '401' ||  status ===  '403' ||  status ===  '404') {
    return `Кажется, что с данными что-то не так, либо у вас недостаточно прав :( Код ошибки: ${status}`
  } else if (status === '409') {
    return `Пользователь с таким эмейлом уже существует. Код ошибки: ${status}`;
  } else {
    return `Ошибка сервера. Попробуйте еще раз. Код ошибки: ${status}`
  };
}