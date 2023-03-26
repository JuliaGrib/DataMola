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
      <div class="filter__elem">
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
      <div class="filter__elem">
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
      </div>
      <div class="filter__elem">
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
    `;
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
}
