class Comment {
  id;
  createdAt;
  author;

  constructor(id, text, date, author) {
    this.id = id;
    this.text = text;
    this.createdAt = date;
    this.author = author;
  }

  get id() {
    return this.id;
  }

  set id(value) {
    this.id = value;
  }

  get createdAt() {
    return thiscreatedAt;
  }

  set createdAt(value) {
    thiscreatedAt = value;
  }

  get author() {
    return this.author;
  }

  set author(value) {
    this.author = value;
  }

  static validateComment(com) {
    try {
      if (Object.keys(com).length !== MAX_LENGTH.com) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      if (Helper.validateComment(com)) {
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
