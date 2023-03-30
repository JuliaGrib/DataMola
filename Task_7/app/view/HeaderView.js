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
      <a class="settings__link" href="user.html">
      ${ICONS.icon__settings}
      </a>
    </div>
  </div>
  <span class="header__line"></span>
  <div class="logout">
    <a href="login.html" class="link"> Log out </a>
  </div>
  <div class="burger">
      ${ICONS.icon__burger}
  </div>`;
  }

  _unauthorizedUser() {
    return `
    <div class="header__login">
    <a class="link" href="./registration.html">Sign up</a>
    <button class="button button_primary" type="button">
      Log in
    </button>
  </div>
  `;
  }
}
