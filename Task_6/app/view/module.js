class View {
  _id;
  _nodeElem;
  constructor(id) {
    try {
      if (!(Helper.isValidTypeId(id) && Helper.isEmptyStr(id))) {
        throw new Error(ERRORS.onlyString);
      }
      this.containerSelector = id;
      this.nodeElem = document.querySelector(`.${this.containerSelector}`);

      if (!Helper.isHtmlNode(this.nodeElem)) {
        throw new Error(ERRORS.nodeElemNotFound);
      }
    } catch (error) {
      console.error(error);
    }
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get nodeElem() {
    return this._nodeElem;
  }

  set nodeElem(value) {
    this._nodeElem = value;
  }
}
