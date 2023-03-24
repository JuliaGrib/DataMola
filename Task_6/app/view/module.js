class View {
  constructor(id) {
    this.containerSelector = id;
    this.nodeElem = document.querySelector(`.${this.containerSelector}`);
  }
}
