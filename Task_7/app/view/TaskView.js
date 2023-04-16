class TaskView extends View {
  constructor(id) {
    super(id);
  }

  display(task) {
    this.nodeElem.className = 'main main__template_task-page';
    this.nodeElem.innerHTML = this._createBack() + this._createTask(task);
    this._addEvents();
  }

  _createTask(task) {
    return `
        <div class="container">
        <section class="task-block">
        <div class="task-block__content">
            <div class="task-block__header">
            <h1 class="title title_h1 title_task">${task.name}</h1>

            ${
              taskController.tasks.user === task.assignee
                ? `            <div class="task-block__tools" id="${task._id}">
            <a href="#" class="icon icon_change">
            ${ICONS.icon_change}
            </a>
            <a href="#" class="icon icon_del">
            ${ICONS.icon_del}
            </a>
        </div>`
                : ''
            }

            </div>
            <span class="priority priority_${task.priority.toLowerCase()} priority_task">
            ${task.priority}</span>
            <span class="task-block__date">
            <time datetime="${task.createdAt}">${new Date(
      task.createdAt
    ).toDateString()}</time>
            </span>
            <p class="task-block__text">
            ${task.description}
            </p>
            <div class="task-block__options">
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Privacy</span>
                <span class="task-block__desc">${Helper.isPrivate(
                  task.isPrivate
                )}</span>
            </div>
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Status</span>
                <span class="task-block__desc">${task.status}</span>
            </div>
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Assignee</span>
                <div class="user-icon">
                ${ICONS.icon_user}
                <span class="user-icon__name">${task.assignee}</span>
                </div>
            </div>

            </div>
            <hr class="line line_dashed" />
            <span class="task-block__comments">Comments</span>
            <div class="task-block__comment-wrap">
                    ${this._createComment(task.comments)}
            </div>
        </div>
        <form class="task-block__send" id="${task._id}">
            <input
            class="input input_editor input_send"
            type="text"
            id="name"
            placeholder="Write a comment..."
            />
            <button class="button button_disabled button_send" type="submit" disabled>Send</button>
        </form>
        </section>
    </div>
    `;
  }

  _createComment(comments) {
    let commentsNodes = '';
    comments.forEach((com) => {
      commentsNodes += `
        <div class="comment">
            <div class="comment__header">
                <div class="user-icon">
                ${ICONS.icon_user}
                    <span class="user-icon__name">${com.author}</span>
                </div>
            <div class="comment__time">
        <time datetime="${new Date(com.createdAt).toDateString()}">${new Date(
        com.createdAt
      ).toDateString()}</time>
            </div>
            <div class="comment__message">${com.text}</div>
        </div>
        </div>
        `;
    });
    return commentsNodes;
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

  _addEvents() {
    const backMain = document.querySelector('.back');
    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });

    if (document.querySelector('.task-block__tools')) {
      const tableTools = document.querySelector('.task-block__tools');
      tableTools.addEventListener('click', (event) => {
        if (
          event.target.className.animVal === 'icon-change' ||
          event.target.className === 'icon icon_change'
        ) {
          taskController.editTask(event.target.parentNode.parentNode.id);
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

    const inputSend = document.querySelector('.input_send');
    inputSend.addEventListener('input', () => {
      if (inputSend.value.length > 281) {
        Helper.changeStatusInputOnly(
          inputSend,
          'input_validate',
          'input_error'
        );
      } else if (inputSend.value.length === 0) {
        inputSend.className = 'input input_editor input_send';
      } else {
        Helper.changeStatusInputOnly(
          inputSend,
          'input_error',
          'input_validate'
        );
      }
    });

    const sendBtn = document.querySelector('.button_send');

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
      taskController.addComment(form.id, inputSend.value);
      taskController.task.save();
    });

    addEventListener('input', () => {
      if (inputSend.classList.contains('input_validate')) {
        sendBtn.disabled = false;
        sendBtn.className = 'button button_primary button_send';
      } else {
        sendBtn.disabled = true;
        sendBtn.className = 'button button_disabled button_send';
      }
    });
  }
}
