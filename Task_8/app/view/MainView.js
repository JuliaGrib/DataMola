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
    <div class="desk">
      <div class="container">
        <div class="desk__wrap">
          <section class="col">
            <h2 class="title title_col">${TASK_STATUS.toDo}</h2>
            <div class="col__content">
                <div class="col__wrap to-do">
                </div>
            </div>
            <button class="button button_show-more button_show-more-to-do" type="button" data-show="10">
              Show more
            </button>
          </section>

          <section class="col">
          <h2 class="title title_col">${TASK_STATUS.inProgress}</h2>
            <div class="col__content">
                <div class="col__wrap in-progress">
                </div>
            </div>
            <button class="button button_show-more button_show-more-in-progress" type="button" data-show="10">
              Show more
            </button>
          </section>
          <section class="col">
          <h2 class="title title_col">${TASK_STATUS.complete}</h2>
          <div class="col__content">
              <div class="col__wrap complete">
              </div>
          </div>
          <button class="button button_show-more button_show-more-complete" type="button" data-show="10">
            Show more
          </button>
        </section>
      </div>
    </div>

    `;
  }
}
