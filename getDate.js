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

const getDayInfo = (date) => {
  // прописываю несколько guard expressions, чтобы избежать ошибок
  if (typeof date !== "string") {
    return "Sorry, but the data is invalid";
  }
  const dateArr = date.split(".");
  if (dateArr[1] > 12 || dateArr[0] > 31) {
    return "Sorry, but the data is invalid";
  }

  // Перевожу входные данные в нужный для работы с объектом Date формат
  const converted = date.split(".").reverse().join(".");
  const dateInfo = new Date(converted);

  const year = dateInfo.getFullYear().toString();
  // Так как метод getDay() возвращает число, использую его в качестве индекса
  const indexOfDay = dateInfo.getDay();
  const weekDay = arrOfWeekDays[indexOfDay];
  // Такая же логика для работы с методом getMonth(), как описанная выше
  const indexOfMonth = dateInfo.getMonth();
  const month = arrOfMonths[indexOfMonth];
  // "+" для того, чтобы перевести значение константы из строкового формата в числовой
  const day = +date.split(".")[0];

  const weekNum = getWeekNum(day);

  return `${weekDay}, ${weekNum} ${month} ${year} года`;
};

console.log(getDayInfo("14.10.2022"));

export default getDayInfo;
