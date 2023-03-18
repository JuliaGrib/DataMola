class Comment {
  _id;
  _createdAt;
  _author;

  constructor(id, text, date, author) {
    this.id = id;
    this.text = text;
    this.createdAt = date;
    this.author = author;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  static validateComment(com) {
    console.log(com);
    try {
      if (!Object.keys(com).length) {
        return true;
      }

      if (Object.keys(com).length !== MAX_LENGTH.com) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      if (
        !validateObj._id(com.id) ||
        !validateObj.description(com.text) ||
        !validateObj._createdAt(com.createdAt) ||
        !validateObj.assignee(com.author)
      ) {
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
