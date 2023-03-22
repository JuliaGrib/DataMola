function createCalendar(elem, year, month) {
  try {
    if (!(elem instanceof HTMLElement)) {
      throw new Error(ERROR.HTMLelementNotValidate);
    }

    year = parseInt(year);
    month = parseInt(month);

    if (!(isValueNumber(year) && isValueNumber(month))) {
      throw new Error(ERROR.valueNotANumber);
    }

    if (!(isValuePositiveNumber(year) && isValuePositiveNumber(month))) {
      throw new Error(ERROR.notPositiveNumber);
    }

    if (!isCorrectMonth(month)) {
      throw new Error(ERROR.notCorrectMonth);
    }

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

    let tableRows = '';
    let tableCols = '';

    for (let i = 0; i <= resultArray.length; i++) {
      if (i % 7 === 0 && i !== 0) {
        tableRows += `<tr>${tableCols}</tr>`;
        tableCols = '';
      }
      tableCols += `<td class="table__day">${resultArray[i]}</td>`;
    }

    elem.innerHTML = `
    <table class="table">
      <thead class="table__head">
        <tr>
          <th class="table__title" colspan="7">${MONTH[month]}, ${year}</th>
        </tr>
        <tr>
        <th class="table__week">Mo</th>
        <th class="table__week">Tu</th>
        <th class="table__week">We</th>
        <th class="table__week">Th</th>
        <th class="table__week">Fr</th>
        <th class="table__week">Sa</th>
        <th class="table__week">Su</th>
      </tr>
      </thead>
      <tbody>
        ${tableRows}
        </tbody>
      </table>
      `;
  } catch (error) {
    console.error(error);
  }
}
