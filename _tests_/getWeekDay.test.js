import getWeekNum from "../modules/getWeekNum";

test("getWeekNum", () => {
  expect(getWeekNum(5)).toEqual("1 неделя");
  expect(getWeekNum(10)).toEqual("2 неделя");
  expect(getWeekNum(32)).toEqual("Sorry, but data is invalid");
});
