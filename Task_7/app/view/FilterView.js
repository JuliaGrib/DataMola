class FilterView extends View {
  constructor(id) {
    super(id);
  }

  display(user) {
    this.nodeElem.innerHTML = `
    <div class="main__filter">
    <button class="button button_add ${
      user === '' ? 'button_disabled' : 'button_primary'
    } button_icon" type="button">
      <span class="button__text">Add Task</span>
      ${ICONS.icon_add_task}
    </button>
    <div class="filter">
      <div class="filter__elem filter-assingee">
        <span class="filter__text">Assignee</span>
        ${ICONS.icon_filter_arrow}
        <div class="filter-popup filter-assingee__popup">
            ${this._setAssignee()}
        </div>
      </div>
      <div class="filter__elem">
        <span class="filter__text">Date</span>
        ${ICONS.icon_filter_arrow}
      </div>
      <div class="filter__elem filter-priority">
        <span class="filter__text">Priority</span>
        ${ICONS.icon_filter_arrow}
        <div class="filter-popup filter-priority__popup">
        ${this._setPriotity()}
        </div>
      </div>
      <div class="filter__elem filter-private">
        <span class="flter__text">Privacy</span>
        ${ICONS.icon_filter_arrow}
        <div class="filter-popup filter-private__popup">
        ${this._setPrivacy()}
        </div>
      </div>
    </div>
    <button
      class="button button_secondary button_icon button_filter"
      type="reset"
      disabled
    >
    ${ICONS.icon_filter_reset}
    </button>
    <button
      class="button button__filter-reset button_icon button_disabled"
      type="reset"
    >
    ${ICONS.icon_filter_reset_mob}
    </button>
    <input
      class="input input_search"
      type="search"
      placeholder="Search"
      id="search"
    />
    <div class="position">
      <a href="#" class="icon ${
        taskController.taskFeedView.position === TASK_VIEW.kanban
          ? 'icon_active'
          : ''
      }">
      ${ICONS.icon_kanban}
      </a>
      <a href="#" class="icon ${
        taskController.taskFeedView.position === TASK_VIEW.table
          ? 'icon_active'
          : ''
      }">    
      ${ICONS.icon_table}
      </a>
    </div>

  </div>
    `;

    this._setDisabled(user);
    this._addEvents();
  }

  _setAssignee() {
    let assigneeNodes = '';

    const assignees = JSON.parse(localStorage.userCollection).map(
      ({ login }) => login
    );
    assignees.forEach((elem) => {
      assigneeNodes += `
      <div>
        <input type="checkbox" id="${elem}" name="assignee" class="input_filter-assignee" value="${elem}">
        <label for="${elem}">${elem}</label>
      </div>
      `;
    });
    return assigneeNodes;
  }

  _setPriotity() {
    let priorityNodes = '';
    const priorities = Object.values(TASK_PRIORITY);
    priorities.forEach((elem) => {
      priorityNodes += `
      <div>
        <input class="input_filter-priority" type="checkbox" id="${elem}" name="priority" value="${elem}">
        <label for="${elem}">${elem}</label>
      </div>
      `;
    });
    return priorityNodes;
  }

  _setPrivacy() {
    let privacyNodes = '';
    const privats = Object.values(TASK_PRIVATE);
    privats.forEach((elem) => {
      privacyNodes += `
      <div>
        <input class="input_filter-priority" type="checkbox" id="${elem}" name="priority" value="${elem}">
        <label for="${elem}">${elem}</label>
      </div>
      `;
    });
    return privacyNodes;
  }

  _setDisabled(user) {
    const buttonAdd = document.querySelector('.button_add');
    user === '' ? (buttonAdd.disabled = true) : (buttonAdd.disabled = false);
  }

  _addEvents() {
    const buttonAdd = document.querySelector('.button_add');
    buttonAdd.addEventListener('click', () => {
      this._showPopup();
    });
  }

  _showPopup() {
    return `
    
    
  </div>
    `;
  }

  _addEvents() {
    const addBtn = document.querySelector('.button_add');
    addBtn.addEventListener('click', () => {
      taskController.createPopupView();
    });
    const settings = {};
    const filterAssignee = document.querySelector('.filter-assingee');
    const filterAssigneeMenu = document.querySelector(
      '.filter-assingee__popup'
    );
    const filterAssigneeValues = document.querySelectorAll(
      '.input_filter-assignee'
    );

    filterAssignee.addEventListener('click', () => {
      filterAssigneeMenu.classList.toggle('filter_block');
    });

    let assigneeChecked = [];

    filterAssigneeValues.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.checked === true) {
          assigneeChecked.push(elem.value);
        } else if (elem.checked === false) {
          assigneeChecked.splice(assigneeChecked.indexOf(elem.value), 1);
        }
        settings.assignee = assigneeChecked;
        taskController.getFeed(settings);
      });
    });

    const filterPriority = document.querySelector('.filter-priority');
    const filterPriorityMenu = document.querySelector(
      '.filter-priority__popup'
    );
    filterPriority.addEventListener('click', () => {
      filterPriorityMenu.classList.toggle('filter_block');
    });

    const filterPrivate = document.querySelector('.filter-private');
    const filterPrivateMenu = document.querySelector('.filter-private__popup');
    filterPrivate.addEventListener('click', () => {
      filterPrivateMenu.classList.toggle('filter_block');
    });

    const filterPrivateValues = document.querySelectorAll(
      '.input_filter-priority'
    );

    let privacyChecked = [];

    filterPrivateValues.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.checked === true) {
          privacyChecked.push(elem.value === 'Public' ? false : true);
        } else if (elem.checked === false) {
          privacyChecked.splice(
            privacyChecked.indexOf(elem.value === 'Public' ? false : true),
            1
          );
        }
        settings.isPrivate = privacyChecked;
        taskController.getFeed(settings);
      });
    });

    const tableBtn = document.querySelector('.table-view');
    tableBtn.addEventListener('click', () => {
      taskController.createTable();
    });

    const kanbanBtn = document.querySelector('.kanban-view');
    kanbanBtn.addEventListener('click', () => {
      taskController.createKanban();
    });

    // const resetFilter = document.querySelector('.button__filter-reset');
    // resetFilter.addEventListener('click', () => {
    //   (settings.assignee = []), (settings.priority = []);
    // });
  }
}

// button button__filter-reset button_icon button_disabled
