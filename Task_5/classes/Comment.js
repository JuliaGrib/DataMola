class Comment {
  _id;
  _date;
  _author;

  constructor(idTask, text) {
    this.id = this._generateId();
    this.text = text;
    this.date = new Date();
    this.comment = [];
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

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  static validateComment(com) {
    try {
      if (!Helper.checkerArray(com)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!Object.keys(com).length) {
        return true;
      }

      if (Object.keys(com).length !== MAX_LENGTH.com) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      if (
        !validateObj.id(com.id) ||
        !validateObj.description(com.text) ||
        !validateObj.createdAt(com.createdAt) ||
        !validateObj.assignee(com.author)
      ) {
        throw new Error(ERRORS.valuesNotValidate);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
