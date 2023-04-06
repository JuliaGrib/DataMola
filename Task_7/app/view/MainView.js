class MainView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.className = 'main main__template_task';
    this.nodeElem.innerHTML = `
    <div class="container">
    <div class="main__tools">
      <div class="main__title">
        <h1 class="title title_main">My tasks</h1>

      </div>
      <div class="main__wrapper">
        </div>
      </div>
    </div>
  </div>
  <div class="desk"></div>

    `;
  }
}
