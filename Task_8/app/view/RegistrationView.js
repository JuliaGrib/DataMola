class RegistrationView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    const header = document.querySelector('.header');
    Helper.setBackgroundRegistration(header, '.background');

    this.nodeElem.className = 'main';
    this.nodeElem.innerHTML = this._setHTML();
    this.addEvents();
  }

  _setHTML() {
    return `
    <div class="container">
      <div class="main_autorization">
        <div class="main__descr">
          <h1 class="title title_autorization">Kanban</h1>
          <p class="title subtitle_autorization">for task be done</p>
        </div>
        <div class="enter">
          <div class="enter__header">
            <h2 class="title title_enter">Sign up</h2>
            <p class="enter__text">
              Have account?
              <a class="link link_enter link_enter_login" href="#">Log in</a> or
              continue
              <a class="link link_enter link_enter_continue" href="#"
                >without authorization</a
              >
            </p>
          </div>
          <form>
            <div class="container__form-four">
              <div class="form-elem form-elem_user form-elem_icon">
                <label class="label label_login" for="login">Login*</label>
                <input
                  class="input input_default"
                  type="text"
                  id="login"
                  placeholder="Enter your login"
                  required
                />
                <span class="input_icon-svg">
                <svg class="login-info login-info_login"${ICONS.icon__form_info}</svg>
                  <div class="input-messages">Only latin letters</div>
                </span>
                <div class="input__message input__message-login"></div>
              </div>
              <div class="form-elem form-elem_user form-elem_icon">
                <label class="label label_name" for="name">Name*</label>
                <input
                  class="input input_name input_default"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  maxlength="${MAX_LENGTH.name}"
                />
                <span class="input_icon-svg">
                  <svg class="login-info_name"${ICONS.icon__form_info}</svg>
                  </svg>
                  <div class="input-messages-name">Max length ${MAX_LENGTH.name}</div>
                </span>
                <div class="input__message input__message-name"></div>
              </div>
              <div class="form-elem form-elem_user form-elem_icon">
                <label class="label label_password" for="password">Password*</label>
                <input
                  class="input input_default "
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
                <span class="input_icon-svg">
                  <svg class="password"
                  ${ICONS.icon__form_password}
                  </svg>
                </span>
                <div class="input__message input__message-password"></div>
              </div>
              <div class="form-elem form-elem_user form-elem_icon">
                <label class="label label_repeat-password" for="repeat_password"
                  >Repeat password*</label
                >
                <input
                  class="input input_default"
                  type="password"
                  id="repeat_password"
                  placeholder="Repeat your password"
                  required
                />
                <span class="input_icon-svg">
                  <svg class="password-repeat"
                  ${ICONS.icon__form_password}
                  </svg>
                </span>
                <div class="input__message input__message-repeat-password"></div>
              </div>
              <div class="enter__avatar">
                <span class="enter__subtitle">Choose avatar</span>
                <div class="enter__wrap">
                  <div class="enter__avatar-elem enter__avatar-elem_checked">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div class="enter__avatar-elem">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div class="enter__avatar-elem">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div class="enter__avatar-elem">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.625 11.25C20.625 12.7418 20.0324 14.1726 18.9775 15.2275C17.9226 16.2824 16.4918 16.875 15 16.875C13.5082 16.875 12.0774 16.2824 11.0225 15.2275C9.96763 14.1726 9.375 12.7418 9.375 11.25C9.375 9.75816 9.96763 8.32742 11.0225 7.27252C12.0774 6.21763 13.5082 5.625 15 5.625C16.4918 5.625 17.9226 6.21763 18.9775 7.27252C20.0324 8.32742 20.625 9.75816 20.625 11.25Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 1.875C12.5283 1.87513 10.1069 2.57318 8.0145 3.8888C5.92207 5.20442 4.24366 7.08414 3.17243 9.31161C2.10121 11.5391 1.68072 14.0238 1.95937 16.4797C2.23802 18.9356 3.20447 21.2629 4.7475 23.1937C6.07875 21.0487 9.00938 18.75 15 18.75C20.9906 18.75 23.9194 21.0469 25.2525 23.1937C26.7955 21.2629 27.762 18.9356 28.0406 16.4797C28.3193 14.0238 27.8988 11.5391 26.8276 9.31161C25.7563 7.08414 24.0779 5.20442 21.9855 3.8888C19.8931 2.57318 17.4717 1.87513 15 1.875Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="enter__avatar">
                <span class="enter__subtitle">Or upload your photo</span>
                <button class="button button_icon" type="button">
                  <span class="button__text">Upload</span>
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3V0H5V3H8V5H5V8H3V5H0V3H3ZM6 9V6H9V3H16L17.83 5H21C22.1 5 23 5.9 23 7V19C23 20.1 22.1 21 21 21H5C3.9 21 3 20.1 3 19V9H6ZM13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13C8 15.76 10.24 18 13 18ZM9.8 13C9.8 14.77 11.23 16.2 13 16.2C14.77 16.2 16.2 14.77 16.2 13C16.2 11.23 14.77 9.8 13 9.8C11.23 9.8 9.8 11.23 9.8 13Z"
                      fill="#333333"
                    />
                  </svg>
                </button>
              </div>
              <button class="button button_disabled button__form_reg" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      `;
  }

  addEvents() {
    const background = document.querySelector('.background');
    const linkLogin = document.querySelector('.link_enter_login');
    const linkContinue = document.querySelector('.link_enter_continue');
    const loginLabel = document.querySelector('.label_login');
    const loginInput = document.querySelector('#login');
    const nameLabel = document.querySelector('.label_name');
    const nameInput = document.querySelector('#name');
    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');
    const passwordRepeatLabel = document.querySelector(
      '.label_repeat-password'
    );
    const passwordRepeatInput = document.querySelector('#repeat_password');
    const errorMessageLogin = document.querySelector('.input__message-login');
    const errorMessageName = document.querySelector('.input__message-name');
    const errorMessagePassword = document.querySelector(
      '.input__message-password'
    );
    const errorMessageRepeatPassword = document.querySelector(
      '.input__message-repeat-password'
    );
    const buttonSubmit = document.querySelector('.button__form_reg');
    const form = document.querySelector('form');
    const passwordIcon = document.querySelector('.password');
    const passwordRepeat = document.querySelector('.password-repeat');

    linkLogin.addEventListener('click', () => {
      taskController.createLoginView();
    });

    linkContinue.addEventListener('click', () => {
      taskController.createMainView();
      background.remove();
    });

    loginInput.addEventListener('input', () => {
      Helper.removeSpaceInput(loginInput);
      Helper.addInputMessage([errorMessageLogin, ERRORS.emptyMessage]);
      if (!(loginInput.value && Helper.checkLatinLetters(loginInput.value))) {
        Helper.addInputView(
          [loginLabel, HTML_CLASS.input.labelError],
          [loginInput, HTML_CLASS.input.inputError]
        );
        Helper.removeInputView(
          [loginLabel, HTML_CLASS.input.labelValidate],
          [loginInput, HTML_CLASS.input.inputValidate]
        );
        Helper.addInputMessage([
          errorMessageLogin,
          ERRORS.loginValidateMessage,
        ]);
        return;
      }
      Helper.addInputView(
        [loginLabel, HTML_CLASS.input.labelValidate],
        [loginInput, HTML_CLASS.input.inputValidate]
      );
      Helper.removeInputView(
        [loginLabel, HTML_CLASS.input.labelError],
        [loginInput, HTML_CLASS.input.inputError]
      );
      Helper.addInputMessage([errorMessageLogin, ERRORS.emptyMessage]);
    });

    nameInput.addEventListener('input', () => {
      Helper.removeSpaceInput(nameInput);
      Helper.addInputMessage([errorMessageName, ERRORS.emptyMessage]);
      if (!(nameInput.value.length && Helper.isValidName(nameInput.value))) {
        Helper.addInputView(
          [nameLabel, HTML_CLASS.input.labelError],
          [nameInput, HTML_CLASS.input.inputError]
        );
        Helper.removeInputView(
          [nameLabel, HTML_CLASS.input.labelValidate],
          [nameInput, HTML_CLASS.input.inputValidate]
        );
        Helper.addInputMessage([errorMessageName, ERRORS.nameValidateMessage]);
        return;
      }
      Helper.addInputView(
        [nameLabel, HTML_CLASS.input.labelValidate],
        [nameInput, HTML_CLASS.input.inputValidate]
      );
      Helper.removeInputView(
        [nameLabel, HTML_CLASS.input.Error],
        [nameInput, HTML_CLASS.input.Error]
      );
      Helper.addInputMessage([errorMessageName, ERRORS.emptyMessage]);
    });

    passwordIcon.addEventListener('click', () => {
      Helper.changePasswordIcon(passwordInput, passwordIcon);
    });

    passwordRepeat.addEventListener('click', () => {
      Helper.changePasswordIcon(passwordRepeatInput, passwordRepeat);
    });

    addEventListener('input', (event) => {
      Helper.removeSpaceInput(passwordInput, passwordRepeatInput);
      if (
        event.target.id === 'password' ||
        event.target.id === 'repeat_password'
      ) {
        if (passwordInput.value !== passwordRepeatInput.value) {
          Helper.addInputView(
            [passwordLabel, HTML_CLASS.input.labelError],
            [passwordInput, HTML_CLASS.input.inputError],
            [passwordRepeatLabel, HTML_CLASS.input.labelError],
            [passwordRepeatInput, HTML_CLASS.input.inputError]
          );
          Helper.removeInputView(
            [passwordLabel, HTML_CLASS.input.labelValidate],
            [passwordInput, HTML_CLASS.input.inputValidate],
            [passwordRepeatLabel, HTML_CLASS.input.labelValidate],
            [passwordRepeatInput, HTML_CLASS.input.inputValidate]
          );
          Helper.addInputMessage([
            errorMessagePassword,
            ERRORS.passwordNotValidate,
          ]);
          Helper.addInputMessage([
            errorMessageRepeatPassword,
            ERRORS.passwordNotValidate,
          ]);
        } else if (
          passwordInput.value === passwordRepeatInput.value &&
          passwordInput.value &&
          passwordRepeatInput.value
        ) {
          Helper.addInputView(
            [passwordLabel, HTML_CLASS.input.labelValidate],
            [passwordInput, HTML_CLASS.input.inputValidate],
            [passwordRepeatLabel, HTML_CLASS.input.labelValidate],
            [passwordRepeatInput, HTML_CLASS.input.inputValidate]
          );
          Helper.removeInputView(
            [passwordLabel, HTML_CLASS.input.labelError],
            [passwordInput, HTML_CLASS.input.inputError],
            [passwordRepeatLabel, HTML_CLASS.input.labelError],
            [passwordRepeatInput, HTML_CLASS.input.inputError]
          );
          Helper.addInputMessage([errorMessagePassword, ERRORS.emptyMessage]);
          Helper.addInputMessage([
            errorMessageRepeatPassword,
            ERRORS.emptyMessage,
          ]);
        }
      }
    });

    addEventListener('keyup', () => {
      if (
        loginInput.value &&
        Helper.checkLatinLetters(loginInput.value) &&
        nameInput.value.length &&
        Helper.isValidName(nameInput.value) &&
        passwordInput.value === passwordRepeatInput.value &&
        passwordInput.value &&
        passwordRepeatInput.value
      ) {
        buttonSubmit.disabled = false;
        buttonSubmit.className = HTML_CLASS.button.buttonRegActive;
        return;
      }
      buttonSubmit.className = HTML_CLASS.button.buttonRegDisabled;
      buttonSubmit.disabled = true;
    });

    form.addEventListener('submit', () => {
      let addUser = taskController.userCollection.add(
        loginInput.value,
        passwordInput.value,
        passwordRepeatInput.value,
        nameInput.value
      );
      if (addUser) {
        taskController.userCollection.saveUser(
          taskController.userCollection.userCollection.at(-1)
        );
        taskController.userCollection.save(
          taskController.userCollection.userCollection
        );
        setCurrentUser(loginInput.value);
        background.remove();
        return;
      }
      Helper.addInputView(
        [loginLabel, HTML_CLASS.input.labelError],
        [loginInput, HTML_CLASS.input.inputError]
      );
      Helper.removeInputView(
        [loginLabel, HTML_CLASS.input.labelValidate],
        [loginInput, HTML_CLASS.input.inputValidate]
      );
      Helper.addInputMessage([errorMessageLogin, ERRORS.userAlreadyExists]);
      buttonSubmit.className = HTML_CLASS.button.buttonRegDisabled;
      buttonSubmit.disabled = true;
    });
  }
}
