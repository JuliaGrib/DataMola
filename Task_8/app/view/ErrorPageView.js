class ErrorPageView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.innerHTML = this._createBack() + this._createInfo();
    this._addEvents();
  }

  _addEvents() {
    const backMain = document.querySelector('.back');
    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });
  }

  _createBack() {
    return `
        <div class="container">
        <div class="main__content">
        <div class="back">
        ${ICONS.icon__back}
            <a class="link back__text" href="#" > My tasks </a>
        </div>
        </div>
    </div>
    `;
  }
  _createInfo() {
    return `
    <div class="container">
        <div class="error-info">
            <h1 class="title title_error">404</h1>
            <p class="error__text">Page not found!</p>
        </div>
        ${this._createGame()}
    </div>
    `;
  }

  _createGame() {
    return `
    <div class="game">
    <div id="dino"></div>
    <div id="cactus"></div>
</div>
    `;
  }
}
