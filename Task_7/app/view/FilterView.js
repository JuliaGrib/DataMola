class FilterView extends View {
  constructor(id) {
    super(id);
  }

  display(user) {
    this.nodeElem.innerHTML = `
    <div class="main__filter">
    <button class="button ${
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
      class="button button__filter-reset button_icon ${
        Object.values(filterController.params).length
          ? 'button_secondary'
          : 'button_disabled'
      }"
      type="reset"
      disabled
    >
    ${ICONS.icon_filter_reset_mob}
    </button>
    <input
      class="input input_search"
      type="search"
      placeholder="Search"
      id="search"
    />
    <div class="filter-info">
      ${this._setParamsInInfo()}
    </div>
    <div class="position">
    <a href="main.html" class="icon ${
      taskFeedView.position === TASK_VIEW.kanban ? 'icon_active' : ''
    }">
    ${ICONS.icon_kanban}
    </a>
    <a href="main_list.html" class="icon ${
      taskFeedView.position === TASK_VIEW.table ? 'icon_active' : ''
    }">    
    ${ICONS.icon_table}
    </a>
  </div>
    `;
    this._setCheckBox();
  }

  _setParamsInInfo() {
    let paramsNodes = '';
    const paramsValues = Object.values(filterController.params).flat(Infinity);
    if (!paramsValues.length) {
      return paramsNodes;
    }

    paramsValues.forEach((elem) => {
      paramsNodes += `<div class="filter-info__elem">${elem}</div>`;
    });
    return (
      paramsNodes +
      `<div class="filter-info__elem">Reset ${ICONS.icon_filter_x}
    </div>`
    );
  }

  _setAssignee() {
    let assigneeNodes = '';
    const assignees = Array.from(
      new Set(tasks.myCollection.map(({ assignee }) => assignee))
    );

    assignees.forEach((elem) => {
      assigneeNodes += `
      <div>
        <input type="checkbox" id="${elem}" name="assignee">
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
        <input type="checkbox" id="${elem}" name="priority">
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
        <input type="checkbox" id="${elem}" name="priority">
        <label for="${elem}">${elem}</label>
      </div>
      `;
    });
    return privacyNodes;
  }

  _setCheckBox() {
    const paramsValues = Object.values(filterController.params).flat(Infinity);
    paramsValues.forEach(
      (elem) => (document.getElementById(elem).checked = true)
    );
  }
}
