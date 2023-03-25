class TaskFeedView extends View {
  constructor(id) {
    super(id);
  }

  display(tasks, user) {
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
