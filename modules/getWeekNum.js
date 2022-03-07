// определяю функцию, позволяющую получить номер недели, исходя из числа месяца
function getWeekNum(num) {
  //прописываю guard expression на случай неправильных входных данных
  if (num > 31) {
    return "Sorry, but data is invalid";
  }
  if (num > 0 && num < 8) {
    return "1 неделя";
  } else if (num > 7 && num < 15) {
    return "2 неделя";
  } else if (num > 14 && num < 22) {
    return "3 неделя";
  } else {
    return "4 неделя";
  }
}

export default getWeekNum;
