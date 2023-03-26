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
      <svg
        width="17"
        height="16.8"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" fill="white" />
      </svg>
    </button>
    <div class="filter">
      <div class="filter__elem filter-assingee">
        <span class="filter__text">Assignee</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0.590027L6 5.17003L1.41 0.590027L0 2.00003L6 8.00003L12 2.00003L10.59 0.590027Z"
            fill="#333333"
          />
        </svg>

        <div class="filter-popup filter-assingee__popup">
            ${this._setAssignee()}
        </div>
      </div>
      <div class="filter__elem">
        <span class="filter__text">Date</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0.590027L6 5.17003L1.41 0.590027L0 2.00003L6 8.00003L12 2.00003L10.59 0.590027Z"
            fill="#333333"
          />
        </svg>
      </div>
      <div class="filter__elem filter-priority">
        <span class="filter__text">Priority</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0.590027L6 5.17003L1.41 0.590027L0 2.00003L6 8.00003L12 2.00003L10.59 0.590027Z"
            fill="#333333"
          />
        </svg>
        <div class="filter-popup filter-priority__popup">
        ${this._setPriotity()}
        </div>
      </div>
      <div class="filter__elem filter-private">
        <span class="flter__text">Privacy</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0.590027L6 5.17003L1.41 0.590027L0 2.00003L6 8.00003L12 2.00003L10.59 0.590027Z"
            fill="#333333"
          />
        </svg>
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
      <svg
        width="17"
        height="16.8"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.02076 16C6.73743 16 6.49976 15.9043 6.30776 15.713C6.11576 15.5217 6.02009 15.284 6.02076 15V9L0.220761 1.6C-0.0292387 1.26667 -0.0669053 0.916666 0.107761 0.55C0.282428 0.183333 0.586761 0 1.02076 0H15.0208C15.4541 0 15.7584 0.183333 15.9338 0.55C16.1091 0.916666 16.0714 1.26667 15.8208 1.6L10.0208 9V15C10.0208 15.2833 9.92476 15.521 9.73276 15.713C9.54076 15.905 9.30343 16.0007 9.02076 16H7.02076Z"
          fill="#333333"
        />
      </svg>
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
      <svg
        width="17"
        height="16.8"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7172 7.975L3.94633 0H15.8097C16.2157 0 16.508 0.183334 16.6866 0.55C16.8653 0.916667 16.8328 1.26667 16.5892 1.6L11.7172 7.975ZM14.4987 16L10.8 12.5714L10.9377 15C10.9377 15.2833 10.8441 15.521 10.657 15.713C10.4699 15.905 10.2387 16.0007 9.96326 16H8.01446C7.73838 16 7.50679 15.904 7.31971 15.712C7.13262 15.52 7.0394 15.2827 7.04005 15V8.825L0 1.29999L1.19364 2.45571e-05L15.4679 15C14.9257 15.5467 15.041 15.4533 14.4987 16Z"
          fill="white"
        />
      </svg>
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
      taskFeedView.position === 'kanban' ? 'icon_active' : ''
    }">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.25 4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H8.25C8.64782 21 9.02936 20.842 9.31066 20.5607C9.59196 20.2794 9.75 19.8978 9.75 19.5V15H14.25V16.5C14.25 16.8978 14.408 17.2794 14.6893 17.5607C14.9706 17.842 15.3522 18 15.75 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM8.25 19.5H4.5V12H8.25V19.5ZM8.25 10.5H4.5V6H8.25V10.5ZM14.25 13.5H9.75V6H14.25V13.5ZM19.5 16.5H15.75V12H19.5V16.5ZM19.5 10.5H15.75V6H19.5V10.5Z"
        />
      </svg>
    </a>
    <a href="main_list.html" class="icon ${
      taskFeedView.position === 'table' ? 'icon_active' : ''
    }">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 13.5C4.08333 13.5 3.72933 13.354 3.438 13.062C3.146 12.7707 3 12.4167 3 12C3 11.5833 3.146 11.2293 3.438 10.938C3.72933 10.646 4.08333 10.5 4.5 10.5C4.91667 10.5 5.27067 10.646 5.562 10.938C5.854 11.2293 6 11.5833 6 12C6 12.4167 5.854 12.7707 5.562 13.062C5.27067 13.354 4.91667 13.5 4.5 13.5ZM4.5 7.5C4.08333 7.5 3.72933 7.354 3.438 7.062C3.146 6.77067 3 6.41667 3 6C3 5.58333 3.146 5.22933 3.438 4.938C3.72933 4.646 4.08333 4.5 4.5 4.5C4.91667 4.5 5.27067 4.646 5.562 4.938C5.854 5.22933 6 5.58333 6 6C6 6.41667 5.854 6.77067 5.562 7.062C5.27067 7.354 4.91667 7.5 4.5 7.5ZM4.5 19.5C4.08333 19.5 3.72933 19.354 3.438 19.062C3.146 18.7707 3 18.4167 3 18C3 17.5833 3.146 17.2293 3.438 16.938C3.72933 16.646 4.08333 16.5 4.5 16.5C4.91667 16.5 5.27067 16.646 5.562 16.938C5.854 17.2293 6 17.5833 6 18C6 18.4167 5.854 18.7707 5.562 19.062C5.27067 19.354 4.91667 19.5 4.5 19.5ZM9 19C8.71667 19 8.47933 18.904 8.288 18.712C8.096 18.5207 8 18.2833 8 18C8 17.7167 8.096 17.4793 8.288 17.288C8.47933 17.096 8.71667 17 9 17H20C20.2833 17 20.5207 17.096 20.712 17.288C20.904 17.4793 21 17.7167 21 18C21 18.2833 20.904 18.5207 20.712 18.712C20.5207 18.904 20.2833 19 20 19H9ZM9 13C8.71667 13 8.47933 12.904 8.288 12.712C8.096 12.5207 8 12.2833 8 12C8 11.7167 8.096 11.479 8.288 11.287C8.47933 11.0957 8.71667 11 9 11H20C20.2833 11 20.5207 11.0957 20.712 11.287C20.904 11.479 21 11.7167 21 12C21 12.2833 20.904 12.5207 20.712 12.712C20.5207 12.904 20.2833 13 20 13H9ZM9 7C8.71667 7 8.47933 6.90433 8.288 6.713C8.096 6.521 8 6.28333 8 6C8 5.71667 8.096 5.479 8.288 5.287C8.47933 5.09567 8.71667 5 9 5H20C20.2833 5 20.5207 5.09567 20.712 5.287C20.904 5.479 21 5.71667 21 6C21 6.28333 20.904 6.521 20.712 6.713C20.5207 6.90433 20.2833 7 20 7H9Z"
        />
      </svg>
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
      `<div class="filter-info__elem">Reset <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.44408 7.86681C8.52037 7.94383 8.56316 8.04786 8.56316 8.15627C8.56316 8.26467 8.52037 8.3687 8.44408 8.44572C8.36643 8.5208 8.26264 8.56277 8.15463 8.56277C8.04661 8.56277 7.94283 8.5208 7.86518 8.44572L4.49838 5.07384L1.13158 8.44572C1.05393 8.5208 0.950143 8.56277 0.842129 8.56277C0.734115 8.56277 0.630327 8.5208 0.552676 8.44572C0.47639 8.3687 0.433594 8.26467 0.433594 8.15627C0.433594 8.04786 0.47639 7.94383 0.552676 7.86681L3.92455 4.50002L0.552676 1.13322C0.487894 1.05429 0.454788 0.954078 0.459797 0.852088C0.464806 0.750098 0.507572 0.653618 0.579777 0.581413C0.651982 0.509208 0.748462 0.466442 0.850452 0.461433C0.952442 0.456424 1.05265 0.48953 1.13158 0.554312L4.49838 3.92619L7.86518 0.554312C7.94411 0.48953 8.04432 0.456424 8.14631 0.461433C8.2483 0.466442 8.34478 0.509208 8.41698 0.581413C8.48919 0.653618 8.53195 0.750098 8.53696 0.852088C8.54197 0.954078 8.50886 1.05429 8.44408 1.13322L5.07221 4.50002L8.44408 7.86681Z" fill="#333333"/>
    </svg>
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
