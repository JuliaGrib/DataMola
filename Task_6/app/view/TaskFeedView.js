class TaskFeedView extends View {
  constructor(id) {
    super(id);
  }

  display(tasks) {
    this.nodeElem.innerHTML = `
    <div class="container">
        <div class="desk__wrap">
            <section class="col">
                <h2 class="title title_col">To do</h2>
                <div class="col__content">
                    <div class="col__wrap">
                    ${this._createTask(this._filterStatusTasks(tasks, 'To Do'))}
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
                    ${this._createTask(
                      this._filterStatusTasks(tasks, 'In progress')
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
                    ${this._createTask(
                      this._filterStatusTasks(tasks, 'Complete')
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

  _createTask(tasks) {
    let tasksNode = '';
    tasks.forEach((task) => (tasksNode += this._makeCard(task)));
    return tasksNode;
  }

  _makeCard(task) {
    // console.log(String(obj.createdAt).slice(0, 15));
    return `
    <article class="card">
    <div class="card__header">
        <span class="priority priority_${task.priority.toLowerCase()}">
            ${task.priority}
        </span>
        <div class="card__tools">
            <a href="#" class="icon icon_change">
                ${ICONS.icon_change}
            </a>
            <a href="#" class="icon icon_del">
                ${ICONS.icon_del}
            </a>
        </div>
    </div>
    <div class="card__info">
        <h3 class="title title_card">${task.name}</h3>
        <p class="card__descr">
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
            ${String(task.createdAt).slice(0, 15)}</time>
        </span>
        <span class="card__status">
            ${task.status}
        </span>
    </div>
</article>
      `;
  }
}
