const getMonth = (year, month) => new Date(year, month - 1);
const getFirstDay = (date) => date.getDate();
const getLastDay = (year, month) => new Date(year, month, 0).getDate();
const getfirstDayWeek = (date) => date.getDay() || 7;
const getLastDayWeek = (year, month) => new Date(year, month, 0).getDay() || 7;
const makePlugArray = (elem, count) => new Array(count).fill(elem);
const generateMonthArray = (first, dates, last) => first.concat(dates, last);
