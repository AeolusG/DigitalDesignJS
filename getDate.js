import getWeekNum from "./modules/getWeekNum";

const arrOfWeekDays = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const arrOfMonths = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const getDateInfo = (date) => {
  if (typeof date !== "string") {
    return "Sorry, but the data is invalid";
  }
  const dateArr = date.split(".");
  if (dateArr[1] > 12 || dateArr[0] > 31) {
    return "Sorry, but the data is invalid";
  }

  const converted = date.split(".").reverse().join(".");
  const dateInfo = new Date(converted);

  const year = dateInfo.getFullYear().toString();

  const indexOfDay = dateInfo.getDay();
  const weekDay = arrOfWeekDays[indexOfDay];

  const indexOfMonth = dateInfo.getMonth();
  const month = arrOfMonths[indexOfMonth];

  const day = +date.split(".")[0];

  const weekNum = getWeekNum(day);

  return `${weekDay}, ${weekNum} ${month} ${year} года`;
};

export default getDateInfo;
