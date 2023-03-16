class Task {
  _id;
  _date;

  constructor(name, description, assignee, status, priority, isPrivate) {
    this.id = this._generateId();
    this.name = name;
    this.description = description;
    this.assignee = assignee;
    this.status = status;
    this.priority = priority;
    this.isPrivate = isPrivate;
    this.date = new Date();
    this.comment = [];
  }

  _generateId() {
    return String(new Date().getTime());
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  static validateTask(task) {
    try {
      if (typeof task !== 'object' && task === null && Array.isArray(task)) {
        throw new Error(ERRORS.taskNotObject);
      }

      const validateObjKeys = Object.keys(validateObj).sort();
      const taskKeys = Object.keys(task).sort();

      if (!taskKeys.length) {
        throw new Error(ERRORS.emptyObject);
      }

      if (validateObjKeys.length !== taskKeys.length) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      for (let i = 0; i < validateObjKeys.length; i++) {
        if (validateObjKeys[i] !== taskKeys[i]) {
          throw new Error(ERRORS.keysNotValidate);
        }
      }

      for (key in task) {
        if (!validateObj[key](task[key])) {
          throw new Error(ERRORS.valuesNotValidate);
        }
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
