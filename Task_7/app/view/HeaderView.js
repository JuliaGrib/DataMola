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
  </div>`;
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

      settingsIcon.addEventListener('click', () => {
        taskController.createUserPage();
      });
      logoutBtn.addEventListener('click', () => {
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
