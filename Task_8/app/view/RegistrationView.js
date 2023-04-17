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
      let info = {
        login: loginInput.value,
        userName: nameInput.value,
        password: passwordInput.value,
        retypedPassword: passwordRepeatInput.value,
        photo: logoBase64,
      };

      taskController.regUser(info, passwordInput.value);
      background.remove();
    });
  }
}
