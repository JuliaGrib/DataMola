class FilterController {
  _params = {};

  get params() {
    return this._params;
  }

  set params(value) {
    this._params = value;
  }

  setFilter(tasks) {
    if (!Object.keys(this.params).length) {
      return tasks;
    }
    console.log(this.params);
    for (const key in this.params) {
      tasks = tasks.filter((elem) => {
        if (key === KEYS.assignee) {
          if (Array.isArray(this.params[key]) && this.params[key].length) {
            return this.params[key].includes(elem[key].userName);
          } else if (
            Array.isArray(this.params[key]) &&
            !this.params[key].length
          ) {
            return elem;
          }
        }
        if (key === KEYS.dateFrom) {
          if (isNaN(this.params[key])) {
            return elem;
          } else {
            let date = new Date(this.params[key]);
            date.setHours(TIME.dayStart, TIME.dayStart, TIME.dayStart);
            return Date.parse(elem.createdAt) >= Date.parse(date);
          }
        }
        if (key === KEYS.dateTo) {
          if (isNaN(this.params[key])) {
            return elem;
          } else {
            let date = new Date(this.params[key]);
            date.setHours(TIME.dayEndHour, TIME.dayEndMin, TIME.dayEndMin);
            return Date.parse(elem.createdAt) <= Date.parse(date);
          }
        }
        if (key === KEYS.priority) {
          if (Array.isArray(this.params[key]) && this.params[key].length) {
            return this.params[key].includes(elem[key]);
          } else if (
            Array.isArray(this.params[key]) &&
            !this.params[key].length
          ) {
            return elem;
          }
        }
        if (key === KEYS.isPrivate) {
          if (Array.isArray(this.params[key]) && this.params[key].length) {
            return this.params[key].includes(elem[key]);
          } else if (
            Array.isArray(this.params[key]) &&
            !this.params[key].length
          ) {
            return elem;
          }
        }
      });
    }
    return tasks;
  }
}
