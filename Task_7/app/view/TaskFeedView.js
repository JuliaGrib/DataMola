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

  display(tasks, user) {
    if (this._position === 'kanban') {
      this.nodeElem.innerHTML = `
      <div class="container">
          <div class="desk__wrap">
              <section class="col">
                  <h2 class="title title_col">${TASK_STATUS.toDo}</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.toDo),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more button_show-more-to-do" type="button">
                  Show more
                  </button>
              </section>
              <section class="col">
                  <h2 class="title title_col">${TASK_STATUS.inProgress}</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.inProgress),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more button_show-more-in-progress" type="button">
                  Show more
                  </button>
              </section>
              <section class="col">
                  <h2 class="title title_col">${TASK_STATUS.complete}</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.complete),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more button_show-more-complete" type="button">
                  Show more
                  </button>
              </section>
          </div>
      </div>
      `;
      this._addEvents();
    }
    if (this._position === 'table') {
      this.nodeElem.innerHTML = `
      
      <div class="container">
        <div class="desk-list">
          <div class="desk-list__col">
            <h2 class="title title_col">${TASK_STATUS.toDo}</h2>
            <div class="table">           
              <div class="table__content">
                <span class="table__header table__title">Title</span>
                <span class="table__header table__description"
                  >Description</span
                >
                <span class="table__header table__date">Date</span>
                <span class="table__header table__assignee">Assignee</span>
                <span class="table__header table__priority">Priority</span>
                <span class="table__header table__status">Status</span>
                <span class="table__header table__comments">Comments</span>
                <span class="table__header table__privacy">Privacy</span>
                <span class="table__header table__tools">Tools</span>
                ${this._createTableCard(tasks, TASK_STATUS.toDo, user)}
              </div>

              </div>
            </div>
            <button class="button button_show-more button_show-more-to-do" type="button">
            Show more
          </button>
          </div>
          <div class="desk-list__col">
            <h2 class="title title_col">${TASK_STATUS.inProgress}</h2>
            <div class="table">
              <div class="table__content">
                <span class="table__header table__title">Title</span>
                <span class="table__header table__description"
                  >Description</span
                >
                <span class="table__header table__date">Date</span>
                <span class="table__header table__assignee">Assignee</span>
                <span class="table__header table__priority">Priority</span>
                <span class="table__header table__status">Status</span>
                <span class="table__header table__comments">Comments</span>
                <span class="table__header table__privacy">Privacy</span>
                <span class="table__header table__tools">Tools</span>
                ${this._createTableCard(tasks, TASK_STATUS.inProgress, user)}
              </div>
            </div>
            <button class="button button_show-more button_show-more-in-progress" type="button">
            Show more
          </button>
          </div>
          <div class="desk-list__col">
            <h2 class="title title_col">${TASK_STATUS.complete}</h2>
            <div class="table">
            <div class="table__content">
            <span class="table__header table__title">Title</span>
            <span class="table__header table__description"
              >Description</span
            >
            <span class="table__header table__date">Date</span>
            <span class="table__header table__assignee">Assignee</span>
            <span class="table__header table__priority">Priority</span>
            <span class="table__header table__status">Status</span>
            <span class="table__header table__comments">Comments</span>
            <span class="table__header table__privacy">Privacy</span>
            <span class="table__header table__tools">Tools</span>
            ${this._createTableCard(tasks, TASK_STATUS.complete, user)}
          </div>
            </div>
            <button class="button button_show-more button_show-more-complete" type="button">
            Show more
          </button>
          </div>
        </div>
      </div>
      `;
      this._addEventsTable();
    }
  }

  _createTableCard(tasks, statusTask, user) {
    console.log(statusTask);
    let cardNodes = '';
    tasks
      .filter(({ status }) => status === statusTask)
      .forEach(
        ({
          id,
          name,
          description,
          createdAt,
          assignee,
          priority,
          status,
          comments,
          isPrivate,
        }) => {
          cardNodes += `
                <span class="table__elem table__title"
                >${name}</span
              >
              <span class="table__elem table__description"
                >${description}</span
              >
              <span class="table__elem table__date"
                ><time datetime="${createdAt}">${new Date(
            createdAt
          ).toDateString()}</time></span
              >
              <span class="table__elem table__assignee">${assignee}</span>
              <div class="table__elem table__priority">
                <span class="priority priority_${priority.toLowerCase()}">${priority}</span>
              </div>
              <span class="table__elem table__status">${status}</span>
              <div class="table__elem table__comments">
                <div class="card__comments">
                  ${ICONS.icon_com}
                  <span class="card__comment-count">${comments.length}</span>
                </div>
              </div>
              <span class="table__elem table__privacy">${Helper.isPrivate(
                isPrivate
              )}</span>
              <div class="table__elem table__tools">
                <div class="card__tools" id="${id}">
                  <a href="#" class="icon icon_change">
                  ${ICONS.icon_change}
                  </a>
                  <a href="#" class="icon icon_del">
                  ${ICONS.icon_del}
                  </a>
                </div>
              </div>
          `;
        }
      );

    return cardNodes;
  }

  _filterStatusTasks(tasks, statusTask) {
    return tasks.filter(({ status }) => status === statusTask);
  }

  _createTasks(tasks, user) {
    let tasksNode = '';
    tasks.forEach((task) => (tasksNode += this._makeCard(task, user)));

    return tasksNode;
  }

  _makeCard(task, user) {
    return `
    <article class="card" >
    <div class="card__header">
        <span class="priority priority_${task.priority.toLowerCase()}">
            ${task.priority}
        </span>
        <div class="card__tools" id="${task.id}">
            ${this._cardTools(user, task)}
        </div>
    </div>
    <div class="card__info">
        <h3 class="title title_card">${task.name}</h3>
        <p class="card__desc">
          ${task.description}
        </p>
        <div class="card__additional">
            <span class="card__assignee">
              ${task.assignee}
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

  _cardTools(user, task) {
    return !user
      ? ''
      : `<a href="#" class="icon icon_change"> ${ICONS.icon_change} </a> ${
          taskController.tasks.user === task.assignee
            ? `<a href="#" class="icon icon_del"> ${ICONS.icon_del} </a>`
            : ''
        }`;
  }

  _addEvents() {
    const showMoreToDo = document.querySelector('.button_show-more-to-do');
    showMoreToDo.addEventListener('click', () => {
      taskController.showMoreToDo();
    });

    const showMoreInProgress = document.querySelector(
      '.button_show-more-in-progress'
    );
    showMoreInProgress.addEventListener('click', () => {
      taskController.showMoreInProgress();
    });

    const showMoreComplete = document.querySelector(
      '.button_show-more-complete'
    );
    showMoreComplete.addEventListener('click', () => {
      taskController.showMoreComplete();
    });

    const deskNode = document.querySelector('.desk__wrap');
    deskNode.addEventListener('click', (event) => {
      if (
        event.target.className.animVal === 'icon-change' ||
        event.target.className === 'icon icon_change'
      ) {
        taskController.showTask(event.target.parentNode.parentNode.id);
      }
      if (
        event.target.className.animVal === 'icon-del' ||
        event.target.className === 'icon icon_del'
      ) {
        taskController.createResetView(
          'delTaskDesk',
          event.target.parentNode.parentNode.id,
          true
        );
      }
    });
  }

  _addEventsTable() {
    const desk = document.querySelector('.desk');
    desk.addEventListener('click', (event) => {
      console.log(event.target);
      if (
        event.target.className.animVal === 'icon-change' ||
        event.target.className === 'icon icon_change'
      ) {
        taskController.showTask(event.target.parentNode.parentNode.id);
      }
      if (
        event.target.className.animVal === 'icon-del' ||
        event.target.className === 'icon icon_del'
      ) {
        taskController.removeTask(event.target.parentNode.parentNode.id);
      }
    });
  }
}
