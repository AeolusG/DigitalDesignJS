import getDateInfo from "../getDate";

test("getDateInfo", () => {
  expect(getDateInfo("01.01.2022")).toEqual(
    "Суббота, 1 неделя Января 2022 года"
  );
  expect(getDateInfo("15.12.2021")).toEqual(
    "Среда, 3 неделя Декабря 2021 года"
  );
  expect(getDateInfo("09.15.1998")).toEqual("Sorry, but the data is invalid");
  expect(getDateInfo(5)).toEqual("Sorry, but the data is invalid");
});
