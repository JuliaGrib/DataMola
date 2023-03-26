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
                  <h2 class="title title_col">To do</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.toDo),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more" type="button">
                  Show more
                  </button>
              </section>
              <section class="col">
                  <h2 class="title title_col">In progress</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.inProgress),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more" type="button">
                  Show more
                  </button>
              </section>
              <section class="col">
                  <h2 class="title title_col">Complete</h2>
                  <div class="col__content">
                      <div class="col__wrap">
                      ${this._createTasks(
                        this._filterStatusTasks(tasks, TASK_STATUS.complete),
                        user
                      )}
                      </div>
                  </div>
                  <button class="button button_show-more" type="button">
                  Show more
                  </button>
              </section>
          </div>
      </div>
      `;
    }
    if (this._position === 'table') {
      this.nodeElem.innerHTML = `
      
      <div class="container">
        <div class="desk-list">
          <div class="desk-list__col">
            <h2 class="title title_col">To do</h2>
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
                ${this._createTableCard(tasks, 'To Do', user)}
              </div>

              </div>
            </div>
            <button class="button button_show-more" type="button">
            Show more
          </button>
          </div>
          <div class="desk-list__col">
            <h2 class="title title_col">In progress</h2>
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
                ${this._createTableCard(tasks, 'In progress', user)}
              </div>
            </div>
            <button class="button button_show-more" type="button">
            Show more
          </button>
          </div>
          <div class="desk-list__col">
            <h2 class="title title_col">Complete</h2>
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
            ${this._createTableCard(tasks, 'Complete', user)}
          </div>
            </div>
            <button class="button button_show-more" type="button">
            Show more
          </button>
          </div>
        </div>
      </div>
      `;
    }
  }

  _createTableCard(tasks, statusTask, user) {
    let cardNodes = '';
    tasks
      .filter(({ status }) => status === statusTask)
      .forEach(
        ({
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
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.32227 7.5C3.32227 4.73858 5.56084 2.5 8.32227 2.5V2.5C11.0837 2.5 13.3223 4.73858 13.3223 7.5V10.6818C13.3223 11.686 12.5082 12.5 11.5041 12.5H8.32227C5.56084 12.5 3.32227 10.2614 3.32227 7.5V7.5Z"
                      stroke="#333333"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.44727 6.875L10.1973 6.875"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.32227 9.375H10.1973"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="card__comment-count">${comments.length}</span>
                </div>
              </div>
              <span class="table__elem table__privacy">${Helper.isPrivate(
                isPrivate
              )}</span>
              <div class="table__elem table__tools">
                <div class="card__tools">
                  <a href="#" class="icon icon_change">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.71 8.04L17.37 10.37L13.62 6.62L15.96 4.29C16.35 3.9 17 3.9 17.37 4.29L19.71 6.63C20.1 7 20.1 7.65 19.71 8.04ZM3 17.25L13.06 7.18L16.81 10.93L6.75 21H3V17.25ZM16.62 5.04L15.08 6.58L17.42 8.92L18.96 7.38L16.62 5.04ZM15.36 11L13 8.64L4 17.66V20H6.34L15.36 11Z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="icon icon_del">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8623 19C18.8623 19.7956 18.5462 20.5587 17.9836 21.1213C17.421 21.6839 16.658 22 15.8623 22H8.8623C8.06666 22 7.30359 21.6839 6.74098 21.1213C6.17838 20.5587 5.8623 19.7956 5.8623 19V7H4.8623V4H9.3623L10.3623 3H14.3623L15.3623 4H19.8623V7H18.8623V19ZM6.8623 7V19C6.8623 19.5304 7.07302 20.0391 7.44809 20.4142C7.82316 20.7893 8.33187 21 8.8623 21H15.8623C16.3927 21 16.9014 20.7893 17.2765 20.4142C17.6516 20.0391 17.8623 19.5304 17.8623 19V7H6.8623ZM18.8623 6V5H14.8623L13.8623 4H10.8623L9.8623 5H5.8623V6H18.8623ZM8.8623 9H9.8623V19H8.8623V9ZM14.8623 9H15.8623V19H14.8623V9Z"
                      />
                    </svg>
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
    <article class="card">
    <div class="card__header">
        <span class="priority priority_${task.priority.toLowerCase()}">
            ${task.priority}
        </span>
        <div class="card__tools">
            ${this._cardTools(user)}
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

  _cardTools(user) {
    return user === ''
      ? ''
      : `<a href="#" class="icon icon_change">
    ${ICONS.icon_change}
</a>
<a href="#" class="icon icon_del">
    ${ICONS.icon_del}
</a>`;
  }
}
