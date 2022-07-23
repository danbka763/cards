const monthArr = [
  "Янв.", "Фев.", "Мар.", "Апр.", "Мая" , "Июн.",
  "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."
];

export const getDate = (time) => {
  const date = new Date(time);

  const day     = date.getDate(),
        month   = monthArr[date.getMonth()],
        year    = date.getFullYear(),
        hours   = date.getHours(),
        minutes = date.getMinutes();

  return `${day} ${month} ${year} г. ${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }`;
};
