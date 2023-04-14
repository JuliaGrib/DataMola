class TaskEditView extends View {
  constructor(id) {
    super(id);
  }

  display(id) {
    const task = taskController.tasks.get(id);

    this.nodeElem.className = 'main main__template_task-page';
    this.nodeElem.innerHTML = `
    <div class="container">
    <div class="main__content">
      <div class="back">
        <svg
          class="back__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#333333"
          />
        </svg>
        <a href="./main.html" class="link back__text"> My tasks </a>
      </div>
    </div>
  </div>
  <div class="container">
    <section class="task-block task-block_edit">
    <form>
      <div class="task-block__content">
        <div class="task-block__header">
        <div class="task-tools">
          <span class="task-tools__title">Priority*</span>
          <div class="task-tools__wrapper">
          <input
          class="radio_priority"
          type="radio"
          name="priority"
          id="hight"
          value="Hight"
        />
        <label
          for="hight"
          class=""
          >Hight</label
        >
        <input
          class="radio_priority"
          type="radio"
          name="priority"
          id="medium"
          value="Medium"
        />
        <label
          for="medium"
          class=""
          >Medium</label
        >
        <input
          class="radio_priority"
          type="radio"
          name="priority"
          id="low"
          value="Low"
        />
        <label for="complete" class=""
          >Low</label
        >
          </div>
        </div>
          <div class="task-block__tools">
            <a class="icon icon_change">
            <svg class="close-edit" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2844 14.2156C15.4252 14.3578 15.5042 14.5498 15.5042 14.75C15.5042 14.9501 15.4252 15.1422 15.2844 15.2843C15.141 15.423 14.9494 15.5004 14.75 15.5004C14.5506 15.5004 14.359 15.423 14.2156 15.2843L8.00001 9.05935L1.78438 15.2843C1.64103 15.423 1.44942 15.5004 1.25001 15.5004C1.0506 15.5004 0.858988 15.423 0.715632 15.2843C0.574796 15.1422 0.495789 14.9501 0.495789 14.75C0.495789 14.5498 0.574796 14.3578 0.715632 14.2156L6.94063 7.99997L0.715632 1.78435C0.596035 1.63862 0.534916 1.45363 0.544164 1.26534C0.553411 1.07705 0.632364 0.89893 0.765665 0.765629C0.898966 0.632328 1.07708 0.553375 1.26537 0.544128C1.45366 0.53488 1.63866 0.595999 1.78438 0.715596L8.00001 6.9406L14.2156 0.715596C14.3614 0.595999 14.5464 0.53488 14.7346 0.544128C14.9229 0.553375 15.101 0.632328 15.2344 0.765629C15.3677 0.89893 15.4466 1.07705 15.4559 1.26534C15.4651 1.45363 15.404 1.63862 15.2844 1.78435L9.05938 7.99997L15.2844 14.2156Z"/>
          </svg>
            </a>
          </div>
        </div>
        <div class="editor">
          <label class="label label_task-name" for="task_name">Task name*</label>
          <input
            class="input input_editor input_task-name"
            type="text"
            id="task_name"
            required
            value="${task.name}"
          />
          <span class="editor__subtext editor__subtext-name">${
            task.name.length
          }/100</span>
        </div>
        <div class="editor">
          <label class="label label_task-desc" for="description">Description*</label>
          <textarea
            class="editor__text editor_task-desc"
            name="description"
            id="description"
          >${task.description}</textarea>
          <span class="editor__subtext editor_subtext-desc">${
            task.description.length
          }/280</span>
        </div>
        <div class="task-block__options">
        <div class="task-tools">
          <span class="task-tools__title">Privacy</span>
          <div class="task-tools__wrapper">
            <input
              class="radio_privacy"
              type="radio"
              name="privacy"
              id="piblic"
              value="Public"
            />
            <label
              for="piblic"
              class=""
              >Public</label
            >
            <input
              class="radio_privacy"
              type="radio"
              name="privacy"
              id="privacy"
              value="Privacy"
            />
            <label for="privacy" class=""
              >Privacy</label
            >
          </div>
        </div>
        <div class="task-tools">
          <span class="task-tools__title">Status</span>
          <div class="task-tools__wrapper">
            <input
              class="radio_status"
              type="radio"
              name="status"
              id="to_do"
              value="To Do"
            />
            <label
              for="to_do"
              class=""
              >To Do</label
            >
            <input
              class="radio_status"
              type="radio"
              name="status"
              id="in_progress"
              value="In progress"
            />
            <label
              for="in_progress"
              class=""
              >In progress</label
            >
            <input
              class="radio_status"
              type="radio"
              name="status"
              id="complete"
              value="Complete"
            />
            <label for="complete" class=""
              >Complete</label
            >
          </div>
        </div>
        <div class="task-tools">
          <span class="task-tools__title">Assignee*</span>
          <div class="task-tools__wrapper">
            <div class="selection">
    
            <select class="task_assignee">
            ${this._setOptions()}
            </select>
            </div>
          </div>
        </div>

        </div>
        <div class="task-block__btn">
          <button class="button button_reset button_disabled" type="reset" disabled>
            Reset
          </button>
          <button class="button button_secondary button_submit button_disabled" type="submit" disabled>Save</button>
        </div>
        </form>
    </section>
  </div>
      `;
    this._setChecked('.radio_priority', task, 'priority');
    this._setChecked('.radio_privacy', task, 'isPrivate');
    this._setChecked('.radio_status', task, 'status');
    this._setAssignee(task);
    this._addEvents(id);
  }

  _setOptions() {
    const usersNames = JSON.parse(localStorage.userCollection).map(
      ({ login }) => login
    );
    let options = '';
    usersNames.forEach(
      (elem) =>
        (options += `<option class="option_assignee" value="${elem}">${elem}</option>`)
    );
    return options;
  }

  _setChecked(nodeClass, task, val) {
    const collection = document.querySelectorAll(nodeClass);
    collection.forEach((elem) => {
      if (val === 'isPrivate') {
        const isPrivateValue = task[val] ? 'Public' : 'Privacy';
        if (elem.value === isPrivateValue) {
          elem.checked = true;
        }
      } else if (elem.value === task[val]) {
        elem.checked = true;
      }
    });
  }

  _setAssignee(task) {
    document.querySelectorAll('.task_assignee').value = task.assingee;
  }

  _addEvents(id) {
    const closeBtn = document.querySelector('.close-edit');
    closeBtn.addEventListener('click', () => {
      taskController.showTask(id);
    });

    const taskNameLabel = document.querySelector('.label_task-name');
    const taskNameInput = document.querySelector('.input_task-name');
    const nameSubtext = document.querySelector('.editor__subtext-name');

    taskNameInput.addEventListener('input', () => {
      nameSubtext.innerHTML = `${taskNameInput.value.length}/100`;
      if (taskNameInput.value.length <= 100) {
        Helper.changeStatusInput(
          taskNameLabel,
          taskNameInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
      if (
        taskNameInput.value.length === 0 ||
        taskNameInput.value.length > 101
      ) {
        Helper.changeStatusInput(
          taskNameLabel,
          taskNameInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      }
    });

    const taskDescLabel = document.querySelector('.label_task-desc');
    const taskDescInput = document.querySelector('.editor_task-desc');
    const descSubtext = document.querySelector('.editor_subtext-desc');

    taskDescInput.addEventListener('input', () => {
      descSubtext.innerHTML = `${taskDescInput.value.length}/280`;
      if (taskDescInput.value.length <= 280) {
        Helper.changeStatusInput(
          taskDescLabel,
          taskDescInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
      if (
        taskDescInput.value.length === 0 ||
        taskDescInput.value.length > 281
      ) {
        Helper.changeStatusInput(
          taskDescLabel,
          taskDescInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      }
    });

    const buttonSubmit = document.querySelector('.button_submit');
    const resetBtn = document.querySelector('.button_reset');

    addEventListener('input', () => {
      resetBtn.disabled = false;
      resetBtn.className = 'button button_reset button_primary';
      if (
        (taskNameInput.classList.contains('input_validate') &&
          taskDescInput.classList.contains('input_validate')) ||
        (taskNameInput.classList.contains('input_validate') &&
          !taskDescInput.classList.contains('input_error')) ||
        (!taskNameInput.classList.contains('input_error') &&
          taskDescInput.classList.contains('input_validate'))
      ) {
        buttonSubmit.className = 'button button_primary button_submit';
        buttonSubmit.disabled = false;
      } else {
        buttonSubmit.className =
          'button button_secondary button_submit button_disabled';
        buttonSubmit.disabled = true;
      }
    });

    resetBtn.addEventListener('click', () => {
      taskController.createResetView('editTask', id);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
      const radioPriority = document.querySelectorAll('.radio_priority');
      let priority;
      for (let i = 0; i < radioPriority.length; i++) {
        if (radioPriority[i].checked === true) {
          priority = radioPriority[i].value;
        }
      }

      const radioStatus = document.querySelectorAll('.radio_status');
      let status;
      for (let i = 0; i < radioStatus.length; i++) {
        if (radioStatus[i].checked === true) {
          status = radioStatus[i].value;
        }
      }

      const radioPrivacy = document.querySelectorAll('.radio_privacy');
      let privacy;
      for (let i = 0; i < radioPrivacy.length; i++) {
        if (radioPrivacy[i].checked === true) {
          privacy = radioPrivacy[i].value;
        }
      }

      let optionsAssignee = document.querySelector('.task_assignee').value;

      const editTask = {
        name: taskNameInput.value,
        description: taskDescInput.value,
        assignee: optionsAssignee,
        status: status,
        priority: priority,
        isPrivate: privacy === 'Public' ? false : true,
      };

      taskController.editTaskInPage(id, editTask);
      taskController.tasks.save();
    });
  }
}
