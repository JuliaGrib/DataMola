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
    try {
      if (Object.keys(com).length !== MAX_LENGTH.com) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      if (
        Helper.validateCommentValue('_id', com.id) ||
        Helper.validateCommentValue('description', com.text) ||
        Helper.validateCommentValue('_createdAt', com.createdAt) ||
        Helper.validateCommentValue('assignee', com.author)
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
