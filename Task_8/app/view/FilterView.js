class FilterView extends View {
  constructor(id) {
    super(id);
  }

  display(users) {
    this.nodeElem.innerHTML = `
    <div class="main__filter">
    <button class="button button_add ${
      localStorage.getItem('login') ? 'button_primary' : 'button_disabled'
    } button_icon" type="button">
      <span class="button__text">Add Task</span>
      ${ICONS.icon_add_task}
    </button>
    <div class="filter">
      <div class="filter__elem filter-assingee">
        <span class="filter__text">Assignee</span>
        ${ICONS.icon_filter_arrow}
        ${this._filterAssignnee(users)}
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
  </div>
    `;
    this._addEvent();
    this._setDisabled();
  }

  _setDisabled() {
    const user = localStorage.getItem('login');
    const buttonAdd = document.querySelector('.button_add');
    user ? (buttonAdd.disabled = false) : (buttonAdd.disabled = true);
  }

  _filterAssignnee(users) {
    return `
    <div class="filter-popup filter-assingee__popup">
    ${this._setAssignee(users)}
      </div>
    `;
  }

  _setAssignee(users) {
    let assigneeNodes = '';

    users.forEach(({ id, userName }) => {
      assigneeNodes += `
      <div class="filter-assignee__elem">
        <input type="checkbox" id="${id}" name="assignee" class="input_filter-assignee" value="${userName}">
        <label for="${userName}">${userName}</label>
      </div>
      `;
    });
    return assigneeNodes;
  }

  _addEvent() {
    const mobFilter = document.querySelector('.button_filter');
    const filterAssignee = document.querySelector('.filter-assingee');
    const filterAssigneeMenu = document.querySelector(
      '.filter-assingee__popup'
    );
    const filterAssigneeValues = document.querySelectorAll(
      '.input_filter-assignee'
    );

    const dayFrom = document.querySelector('.day-from');
    const dayTo = document.querySelector('.day-to');
    const filterDate = document.querySelector('.filter-date');
    const filterDateMenu = document.querySelector('.filter-date__popup');
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
    const filterPrivate = document.querySelector('.filter-private');
    const filterPrivateMenu = document.querySelector('.filter-private__popup');
    const filterPrivateValues = document.querySelectorAll(
      '.input_filter-private'
    );
    const addBtn = document.querySelector('.button_add');
    let settings = {};
    let assigneeChecked = [];
    let priorityChecked = [];
    let privacyChecked = [];

    filterDate.addEventListener('click', (event) => {
      if (
        event.target.className === 'filter-text' ||
        event.target.className === 'filter__elem filter-date' ||
        event.target.className === 'filter__text'
      ) {
        filterDateMenu.classList.toggle('filter_block');
      }
    });

    filterAssignee.addEventListener('click', () => {
      filterAssigneeMenu.classList.toggle('filter_block');
    });

    mobFilter.addEventListener('click', () => {
      filterAssigneeMenu.classList.toggle('filter_block');
    });

    filterAssigneeValues.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.checked === true) {
          assigneeChecked.push(elem.value);
        } else if (elem.checked === false) {
          assigneeChecked.splice(assigneeChecked.indexOf(elem.value), 1);
        }
        settings.assignee = assigneeChecked;
        console.log(settings);
        filterController.params = settings;
        taskController.createColumns();
      });
    });
    console.log(settings);

    dayFrom.addEventListener('input', () => {
      settings.dateFrom = new Date(dayFrom.value).getTime();
      filterController.params = settings;
      taskController.createColumns();
    });

    dayTo.addEventListener('input', () => {
      settings.dateTo = new Date(dayTo.value).getTime();
      filterController.params = settings;
      taskController.createColumns();
    });

    filterPriorityValues.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.checked === true) {
          priorityChecked.push(elem.value);
        } else if (elem.checked === false) {
          priorityChecked.splice(priorityChecked.indexOf(elem.value), 1);
        }
        settings.priority = priorityChecked;
        filterController.params = settings;
        taskController.createColumns();
      });
    });

    filterPrivate.addEventListener('click', () => {
      filterPrivateMenu.classList.toggle('filter_block');
    });

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
        filterController.params = settings;
        taskController.createColumns();
      });
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
      document
        .querySelectorAll(`input[type="checkbox"]`)
        .forEach((elem) => (elem.checked = false));
      filterController.params = {};
      settings = {};
      console.log(settings);
      taskController.createColumns();
      this._closeAllpopup();
    });

    addBtn.addEventListener('click', () => {
      taskController.createPopupView();
    });
  }

  _closeAllpopup() {
    const popups = document.querySelectorAll('.filter-popup');
    popups.forEach((elem) => elem.classList.remove('filter_block'));
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
}
