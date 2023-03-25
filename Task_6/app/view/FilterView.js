class FilterView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.innerHTML = `
    <div class="main__filter">
    <button class="button button_primary button_icon" type="button">
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
      class="button button__filter-reset button_icon button_disabled"
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
    `;
  }
}
