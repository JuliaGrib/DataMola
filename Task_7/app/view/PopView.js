class PopView extends View {
  constructor(id) {
    super(id);
  }
  display() {
    this.nodeElem.insertAdjacentHTML(
      'beforeend',
      `<div class="popup">
    <div class="popup__header">
        <h4 class="title title_popup">Add task</h4>
        <a class="settings__link" href="#">
          <svg
            class="icon icon_close"
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.7307 28.1773C29.9478 28.3968 30.0696 28.6933 30.0696 29.0022C30.0696 29.3112 29.9478 29.6077 29.7307 29.8272C29.5097 30.0412 29.2143 30.1608 28.9069 30.1608C28.5995 30.1608 28.3041 30.0412 28.0831 29.8272L18.5006 20.2171L8.91822 29.8272C8.69722 30.0412 8.40182 30.1608 8.09439 30.1608C7.78697 30.1608 7.49157 30.0412 7.27057 29.8272C7.05344 29.6077 6.93164 29.3112 6.93164 29.0022C6.93164 28.6933 7.05344 28.3968 7.27057 28.1773L16.8674 18.5817L7.27057 8.98611C7.08619 8.76115 6.99196 8.47555 7.00622 8.18487C7.02048 7.8942 7.14219 7.61922 7.3477 7.41343C7.55321 7.20764 7.82781 7.08576 8.11808 7.07148C8.40836 7.0572 8.69357 7.15156 8.91822 7.33619L18.5006 16.9462L28.0831 7.33619C28.3077 7.15156 28.5929 7.0572 28.8832 7.07148C29.1735 7.08576 29.4481 7.20764 29.6536 7.41343C29.8591 7.61922 29.9808 7.8942 29.9951 8.18487C30.0093 8.47555 29.9151 8.76115 29.7307 8.98611L20.1338 18.5817L29.7307 28.1773Z"
            />
          </svg>
        </a>
      </div>
      <hr class="line line_dashed" />
      <form>
      <div class="popup__text">
        <div class="editor">
          <label class="label label_task-name" for="name">Task name*</label>
          <input
            class="input input_task-name input_editor editor_grey"
            type="text"
            id="name"
            required
          />
          <span class="editor__subtext editor__subtext-name">0/100</span>
        </div>
        <div class="editor">
          <label class="label label_task-desc" for="description">Description*</label>
          <textarea
            class="editor__text editor_grey editor_task-desc"
            name="description"
            id="description"
          ></textarea>
          <span class="editor__subtext editor_subtext-desc">0/280</span>
        </div>
      </div>
      <div class="popup__tools">
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
        <div class="task-tools">
          <span class="task-tools__title">Privacy</span>
          <div class="task-tools__wrapper">
            <input
              class="radio_privacy"
              type="radio"
              name="privacy"
              id="piblic"
              value="Public"
              checked
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
          <span class="task-tools__title">Priority*</span>
          <div class="task-tools__wrapper">
          <input
          class="radio_priority"
          type="radio"
          name="priority"
          id="hight"
          value="Hight"
          checked
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
        <div class="task-tools">
          <span class="task-tools__title">Status</span>
          <div class="task-tools__wrapper">
            <input
              class="radio_status"
              type="radio"
              name="status"
              id="to_do"
              value="To Do"
              checked
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
      </div>
      <div class="popup__btns">
        <button class="button button_disabled" type="reset">Reset</button>
        <button class="button button_form button_disabled" type="submit" disabled>
          Add task
        </button>
        </form>
      </div>
    `
    );
    this._addEvents();
  }

  _addEvents() {
    const taskNameLabel = document.querySelector('.label_task-name');
    const taskNameInput = document.querySelector('.input_task-name');
    const nameSubtext = document.querySelector('.editor__subtext-name');
    const iconClose = document.querySelector('.icon_close');
    const popup = document.querySelector('.popup');
    iconClose.addEventListener('click', () => {
      popup.remove();
    });

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

    const buttonSubmit = document.querySelector('.button_form');

    addEventListener('input', () => {
      if (
        taskNameInput.classList.contains('input_validate') &&
        taskDescInput.classList.contains('input_validate')
      ) {
        buttonSubmit.className = 'button button_primary button_submit';
        buttonSubmit.disabled = false;
      } else {
        buttonSubmit.className =
          'button button_secondary button_submit button_disabled';
        buttonSubmit.disabled = true;
      }
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

      const newTask = {
        name: taskNameInput.value,
        description: taskDescInput.value,
        assignee: optionsAssignee,
        status: status,
        priority: priority,
        isPrivate: privacy === 'Public' ? false : true,
      };

      popup.remove();
      taskController.addTask(newTask);
      taskController.tasks.save();
    });
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
}
