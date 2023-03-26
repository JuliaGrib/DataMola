class MainView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.className = 'main main__template_task';
    this.nodeElem.innerHTML = `
    <div class="container">
    <div class="main__tools">
      <div class="main__title">
        <h1 class="title title_main">My tasks</h1>
        <a href="#" class="icon icon_change">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.71 8.04L17.37 10.37L13.62 6.62L15.96 4.29C16.35 3.9 17 3.9 17.37 4.29L19.71 6.63C20.1 7 20.1 7.65 19.71 8.04ZM3 17.25L13.06 7.18L16.81 10.93L6.75 21H3V17.25ZM16.62 5.04L15.08 6.58L17.42 8.92L18.96 7.38L16.62 5.04ZM15.36 11L13 8.64L4 17.66V20H6.34L15.36 11Z"
            />
          </svg>
        </a>
      </div>
      <div class="main__wrapper">
        </div>
      </div>
    </div>
  </div>
  <div class="desk"></div>
    `;
  }
}
