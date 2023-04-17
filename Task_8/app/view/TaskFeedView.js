class TaskFeedView extends View {
  _position = 'kanban';
  constructor(id) {
    super(id);
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  display(tasks, showNode) {
    this.nodeElem.innerHTML = this._createTasks(tasks);
    this._addEvents(showNode);
  }

  _createTasks(tasks) {
    let tasksNode = '';
    tasks.forEach((task) => (tasksNode += this._makeCard(task)));

    return tasksNode;
  }

  _makeCard(task) {
    return `
    <article class="card" >
    <div class="card__header">
        <span class="priority priority_${task.priority.toLowerCase()}">
            ${task.priority}
        </span>
        <div class="card__tools" id="${task.id}">
        ${this._cardTools(task)}
        </div>
    </div>
    <div class="card__info">
        <h3 class="title title_card">${task.name}</h3>
        <p class="card__desc">
          ${task.description}
        </p>
        <div class="card__additional">
            <span class="card__assignee">
              ${task.assignee.userName}
            </span>
            <span class="card__line"></span>
            <span class="card__privacy">
                ${Helper.isPrivate(task.isPrivate)}
            </span>
            <span class="card__line"></span>
            <div class="card__comments">
                  ${ICONS.icon_com}
                <span class="card__comment-count">
                  ${task.comments.length}
                </span>
            </div>
        </div>
    </div>
    <hr class="line line_dashed">
    <div class="card__footer">
        <span class="card__date">
            <time datetime="${task.createdAt}">
            ${new Date(task.createdAt).toDateString()}</time>
        </span>
        <span class="card__status">
            ${task.status}
        </span>
    </div>
</article>
      `;
  }

  _cardTools(task) {
    const user = localStorage.getItem('login');
    return !user
      ? ''
      : `<a href="#" class="icon icon_change"> ${ICONS.icon_change} </a> ${
          task.creator.login === user
            ? `<a href="#" class="icon icon_del"> ${ICONS.icon_del} </a>`
            : ''
        }`;
  }

  _addEvents(showNode) {
    const showMore = document.querySelector(showNode);
    const showMoreToDo = document.querySelector('.button_show-more-to-do');
    const showMoreInProgress = document.querySelector(
      '.button_show-more-in-progress'
    );
    const showMoreComplete = document.querySelector(
      '.button_show-more-complete'
    );
    showMore.addEventListener('click', () => {
      switch (showNode) {
        case '.button_show-more-to-do':
          showMoreToDo.dataset.show = +showMoreToDo.dataset.show + 10;
          taskController.createToDoColumn(0, showMoreToDo.dataset.show);
          break;
        case '.button_show-more-in-progress':
          showMoreInProgress.dataset.show =
            +showMoreInProgress.dataset.show + 10;
          taskController.createInProgressColumn(
            0,
            showMoreInProgress.dataset.show
          );
          break;
        case '.button_show-more-complete':
          showMoreComplete.dataset.show = +showMoreComplete.dataset.show + 10;
          taskController.createCompleteColumn(0, showMoreComplete.dataset.show);
          break;
      }
    });

    const deskNode = document.querySelector('.desk__wrap');
    deskNode.addEventListener('click', (event) => {
      if (
        event.target.className.animVal === 'icon-change' ||
        event.target.className === 'icon icon_change'
      ) {
        taskController.showTask(event.target.parentNode.parentNode.id);
        console.log(event);
      }
      if (
        event.target.className.animVal === 'icon-del' ||
        event.target.className === 'icon icon_del'
      ) {
        taskController.delTask(event.target.parentNode.parentNode.id);
        taskController.createMainView();
      }
    });
  }
}
