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
      <div class="filter__elem filter-date">
        <span class="filter__text">Date</span>
        ${ICONS.icon_filter_arrow}
        <div class="filter-popup filter-date__popup">
        <span class="filter__title">Date from</span>
        <input class="day-from" type="date" />
        <span class="filter__title">Date to</span>
        <input class="day-to" type="date" />
    </div>
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
      type="reset" disabled
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
        <input class="input_filter-private" type="checkbox" id="${elem}" name="priority" value="${elem}">
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
      this._closeAllpopup();
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

    const filterPriorityValues = document.querySelectorAll(
      '.input_filter-priority'
    );

    let priorityChecked = [];

    filterPriorityValues.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.checked === true) {
          priorityChecked.push(elem.value);
        } else if (elem.checked === false) {
          priorityChecked.splice(priorityChecked.indexOf(elem.value), 1);
        }
        settings.priority = priorityChecked;
        taskController.getFeed(settings);
      });
    });

    const filterPrivate = document.querySelector('.filter-private');
    const filterPrivateMenu = document.querySelector('.filter-private__popup');
    filterPrivate.addEventListener('click', () => {
      filterPrivateMenu.classList.toggle('filter_block');
    });

    const filterPrivateValues = document.querySelectorAll(
      '.input_filter-private'
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

    const searchInput = document.querySelector('.input_search');
    searchInput.addEventListener('input', () => {
      settings.name = searchInput.value;
      settings.description = searchInput.value;
      taskController.getFeed(settings);
    });

    const tableBtn = document.querySelector('.table-view');
    tableBtn.addEventListener('click', () => {
      taskController.createTable();
    });

    const kanbanBtn = document.querySelector('.kanban-view');
    kanbanBtn.addEventListener('click', () => {
      taskController.createKanban();
    });

    const dayFrom = document.querySelector('.day-from');
    dayFrom.addEventListener('input', () => {
      settings.dateFrom = new Date(dayFrom.value).getTime();
      taskController.getFeed(settings);
    });

    const dayTo = document.querySelector('.day-to');
    dayTo.addEventListener('input', () => {
      settings.dateTo = new Date(dayTo.value).getTime();
      taskController.getFeed(settings);
    });

    const filterDate = document.querySelector('.filter-date');
    const filterDateMenu = document.querySelector('.filter-date__popup');

    filterDate.addEventListener('click', (event) => {
      if (
        event.target.className === 'filter-text' ||
        event.target.className === 'filter__elem filter-date' ||
        event.target.className === 'filter__text'
      ) {
        filterDateMenu.classList.toggle('filter_block');
      }
    });

    const resetBtn = document.querySelector('.button__filter-reset');

    addEventListener('click', () => {
      if (Object.values(filterController.params).flat().length) {
        resetBtn.disabled = false;
        resetBtn.classList =
          'button button__filter-reset button_icon button_secondary';
      } else {
        resetBtn.disabled = true;
        resetBtn.classList =
          'button button__filter-reset button_icon button_disabled';
      }
    });

    resetBtn.addEventListener('click', () => {
      filterController.params = {};
      taskController.taskFeedView.display(
        filterController.filterTasks(),
        taskController.tasks.user
      );
      this._closeAllpopup();
    });
  }

  _closeAllpopup() {
    const popups = document.querySelectorAll('.filter-popup');
    popups.forEach((elem) => elem.classList.remove('filter_block'));
  }
}
