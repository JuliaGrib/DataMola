class HeaderView extends View {
  constructor(id) {
    super(id);
  }

  display(user) {
    user === ''
      ? (this.nodeElem.innerHTML = this._unauthorizedUser())
      : (this.nodeElem.innerHTML = this._authorizedUser(user));
  }

  _authorizedUser(user) {
    return `
    <div class="header__user">
    <div class="user-icon">
      ${ICONS.icon_user}
      <span class="user-icon__name">${user}</span>
    </div>
    <div class="settings">
      <a class="settings__link" href="#">
      ${ICONS.icon__settings}
      </a>
    </div>
  </div>
  <span class="header__line"></span>
  <div class="logout">
    <a class="link logout-btn" href="#">Log out </a>
  </div>
  <div class="burger">
      ${ICONS.icon__burger}
  </div>
  ${this._burgerMenu()}
  `;
  }

  _burgerMenu() {
    return `
    <div class="menu">
    <div class="menu__content">
      <div class="menu__info">
        <div class="menu__wrapper">
          <div class="menu__header">
            <div class="user-icon">
              <svg
                class="user-icon__img"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9.75C17 10.9435 16.5259 12.0881 15.682 12.932C14.8381 13.7759 13.6935 14.25 12.5 14.25C11.3065 14.25 10.1619 13.7759 9.31802 12.932C8.47411 12.0881 8 10.9435 8 9.75C8 8.55653 8.47411 7.41193 9.31802 6.56802C10.1619 5.72411 11.3065 5.25 12.5 5.25C13.6935 5.25 14.8381 5.72411 15.682 6.56802C16.5259 7.41193 17 8.55653 17 9.75Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 12.75C0.5 9.5674 1.76428 6.51516 4.01472 4.26472C6.26516 2.01428 9.3174 0.75 12.5 0.75C15.6826 0.75 18.7348 2.01428 20.9853 4.26472C23.2357 6.51516 24.5 9.5674 24.5 12.75C24.5 15.9326 23.2357 18.9848 20.9853 21.2353C18.7348 23.4857 15.6826 24.75 12.5 24.75C9.3174 24.75 6.26516 23.4857 4.01472 21.2353C1.76428 18.9848 0.5 15.9326 0.5 12.75ZM12.5 2.25C10.5227 2.25011 8.58555 2.80854 6.9116 3.86104C5.23766 4.91354 3.89492 6.41732 3.03795 8.19929C2.18097 9.98127 1.84458 11.969 2.0675 13.9337C2.29042 15.8985 3.06358 17.7603 4.298 19.305C5.363 17.589 7.7075 15.75 12.5 15.75C17.2925 15.75 19.6355 17.5875 20.702 19.305C21.9364 17.7603 22.7096 15.8985 22.9325 13.9337C23.1554 11.969 22.819 9.98127 21.9621 8.19929C21.1051 6.41732 19.7623 4.91354 18.0884 3.86104C16.4145 2.80854 14.4773 2.25011 12.5 2.25Z"
                />
              </svg>
              <span class="user-icon__name">Julia Grib</span>
            </div>
            <span class="menu__close">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </div>
          <hr class="line line_dashed" />
        </div>
        <div class="menu__wrapper">
          <nav class="menu__nav">
            <ul class="menu__list">
              <li class="menu__elem">
                <a href="./user.html" class="link link_icon link_account"
                  >Account settings</a
                >
              </li>
              <li class="menu__elem">
                <a href="./user.html" class="link link_icon link_logout"
                  >Log out</a
                >
              </li>
            </ul>
          </nav>
          <hr class="line line_dashed" />
        </div>
        <div class="menu__tools">
          <div class="language">
            <svg
              class="language__icon"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14.375C11.7969 14.375 14.875 11.2969 14.875 7.5C14.875 3.70313 11.7969 0.625 8 0.625M8 14.375C4.20313 14.375 1.125 11.2969 1.125 7.5C1.125 3.70313 4.20313 0.625 8 0.625M8 14.375C9.875 14.375 10.5 11.25 10.5 7.5C10.5 3.75 9.875 0.625 8 0.625M8 14.375C6.125 14.375 5.5 11.25 5.5 7.5C5.5 3.75 6.125 0.625 8 0.625M1.75 10H14.25M1.75 5H14.25"
                stroke="currentColor"
              />
            </svg>
            <span class="language__item"> English </span>
            <ul class="list list_block">
              <li class="list_language-en">English</li>
              <li class="list_language-ru">Русский</li>
            </ul>
          </div>
          <div class="theme">
            <label class="theme__label">
              <input class="theme__radio" type="radio" name="theme" checked />
              <span class="theme__cirle"></span>
            </label>
            <label class="theme__label">
              <input class="theme__radio" type="radio" name="theme" />
              <span class="theme__cirle theme__cirle_black"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="menu__footer">
        <div class="menu__wrapper">
          <hr class="line line_dashed" />
          <ul class="list list_menu">
            <li class="list__elem">do.</li>
            <li class="list__elem">Julia Grib</li>
            <li class="list__elem">
              <a class="link link_menu" href="mailto:yulgrib@gmail.com"
                >yulgrib@gmail.com</a
              >
            </li>
            <li class="list__elem">
              <time datetime="2023.02.23">23.02.2023</time>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
  }

  _unauthorizedUser() {
    return `
    <div class="header__login">
    <a class="link registration" href="#">Sign up</a>
    <button class="button button_primary login" type="button">
      Log in
    </button>
  </div>
  `;
  }

  addEvents(user) {
    if (user) {
      const settingsIcon = document.querySelector('.settings__icon');
      const logoutBtn = document.querySelector('.logout-btn');
      const burgerBtn = document.querySelector('.burger');
      console.log(burgerBtn);

      settingsIcon.addEventListener('click', () => {
        taskController.createUserPage();
      });
      logoutBtn.addEventListener('click', () => {
        taskController.saveUser();
        setCurrentUser('');
      });
    } else {
      const regBtn = document.querySelector('.registration');
      const loginBtn = document.querySelector('.login');

      regBtn.addEventListener('click', () => {
        taskController.createRegistrationView();
      });
      loginBtn.addEventListener('click', () => {
        taskController.createLoginView();
      });
    }
  }
}
