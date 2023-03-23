const isValueNumber = (n) => typeof n == 'number' && isFinite(n);
const isValuePositiveNumber = (n) => n > 0;
const isCorrectMonth = (month) => month > 0 && month < DAYS.maxMonth;
const getMonth = (year, month) => new Date(year, month - 1);
const getFirstDay = (date) => date.getDate();
const getLastDay = (year, month) => new Date(year, month, 0).getDate();
const getfirstDayWeek = (date) => date.getDay() || DAYS.lastDay;
const getLastDayWeek = (year, month) =>
  new Date(year, month, 0).getDay() || DAYS.lastDay;
const makePlugArray = (elem, count) => new Array(count).fill(elem);
const generateMonthArray = (first, dates, last) => first.concat(dates, last);
