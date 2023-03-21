function createCalendar(elem, year, month) {
  const firstDay = getFirstDay(getMonth(year, month));
  const lastDay = getLastDay(year, month);
  const firstDayWeek = getfirstDayWeek(getMonth(year, month));
  const lastDayWeek = getLastDayWeek(year, month);
  const firstPlugArray = makePlugArray('', firstDayWeek - 1);
  const lastPlugArray = makePlugArray('', 7 - lastDayWeek);

  const datesArray = [];

  for (let i = firstDay; i <= lastDay; i++) {
    datesArray.push(i);
  }

  const resultArray = generateMonthArray(
    firstPlugArray,
    datesArray,
    lastPlugArray
  );

  let tableRows = ``;
  let tableCols = ``;

  for (let i = 0; i <= resultArray.length; i++) {
    if (i % 7 === 0 && i !== 0) {
      tableRows += `<tr>${tableCols}</tr>`;
      tableCols = '';
    }
    tableCols += `<td>${resultArray[i]}</td>`;
  }

  const resultTable =
    HTML_ELEMENTS.tableStart +
    HTML_ELEMENTS.tableHead +
    tableRows +
    HTML_ELEMENTS.tableEnd;

  elem.innerHTML = resultTable;
}
