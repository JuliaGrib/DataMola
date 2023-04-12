class LoginView {
  _id;
  constructor(id) {
    this.id = id;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  display() {
    const header = document.querySelector('.header');
    const elemNode = document.querySelector('.main');
    Helper.setBackgroundRegistration(header, '.background');
    elemNode.innerHTML = this._setHTML();
    this._addEvents();
  }

  _setHTML() {
    return `
    <div class="container">
    <div class="main__wrap main_autorization">
      <section class="main__descr">
        <h1 class="title title_autorization">Kanban</h1>
        <p class="title subtitle_autorization">for task be done</p>
      </section>
      <section class="enter">
        <div class="enter__header">
          <h2 class="title title_enter">Log in</h2>
          <p class="enter__text">
            Don’t have an account?
            <a class="link link_enter link_enter-registration" href="#"
              >Create your account</a
            >
            or
            <a class="link link_enter link_enter-continue" href="#">continue</a>
            without authorization
          </p>
        </div>
        <form>
          <div class="container__form-two">
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
            <div class="form-elem form-elem_icon">
              <label class="label label_password" for="password">Password*</label>
              <input
                class="input input_default"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <span class="input_icon-svg">
              <svg class="icon-password" ${ICONS.icon__form_password}</svg>
              </span>
              <div class="input__message input__message-password"></div>
            </div>
            <button class="button button_disabled button_form" type="submit" disabled >
              Log in
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
    `;
  }

  _addEvents() {
    const background = document.querySelector('.background');
    const form = document.querySelector('form');
    const loginLabel = document.querySelector('.label_login');
    const loginInput = document.querySelector('#login');
    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');
    const buttonSubmit = document.querySelector('.button_form');
    const errorMessageLogin = document.querySelector('.input__message-login');
    const errorMessagePassword = document.querySelector(
      '.input__message-password'
    );
    const passwordIcon = document.querySelector('.icon-password');
    const linkRegistration = document.querySelector('.link_enter-registration');
    const linkContinue = document.querySelector('.link_enter-continue');

    linkRegistration.addEventListener('click', () => {
      taskController.createRegistrationView();
    });

    linkContinue.addEventListener('click', () => {
      taskController.createMainView();
      background.remove();
    });

    loginInput.addEventListener('input', () => {
      Helper.removeSpaceInput(loginInput);
      Helper.addInputMessage([errorMessageLogin, ERRORS.emptyMessage]);
      if (
        !(loginInput.value.length && Helper.checkLatinLetters(loginInput.value))
      ) {
        Helper.addInputView(
          [loginLabel, HTML_CLASS.input.labelError],
          [loginInput, HTML_CLASS.input.inputError]
        );
        Helper.addInputMessage([
          errorMessageLogin,
          ERRORS.loginValidateMessage,
        ]);
        return;
      }
      Helper.removeInputView(
        [loginLabel, HTML_CLASS.input.labelError],
        [loginInput, HTML_CLASS.input.inputError]
      );
      Helper.addInputMessage([errorMessageLogin, ERRORS.emptyMessage]);
    });

    passwordInput.addEventListener('input', () => {
      Helper.removeSpaceInput(passwordInput);
      if (
        !(
          passwordInput.value.length &&
          Helper.isValidPassword(passwordInput.value)
        )
      ) {
        Helper.addInputView(
          [passwordLabel, HTML_CLASS.input.labelError],
          [passwordInput, HTML_CLASS.input.inputError]
        );
        Helper.addInputMessage([errorMessagePassword, ERRORS.emptyPassword]);
        return;
      }
      Helper.removeInputView(
        [passwordLabel, HTML_CLASS.input.labelError],
        [passwordInput, HTML_CLASS.input.inputError]
      );
      Helper.addInputMessage([errorMessagePassword, ERRORS.emptyMessage]);
    });

    passwordIcon.addEventListener('click', () => {
      Helper.changePasswordIcon(passwordInput, passwordIcon);
    });

    addEventListener('keyup', () => {
      if (
        passwordInput.value.length &&
        Helper.isValidPassword(passwordInput.value) &&
        loginInput.value.length &&
        Helper.checkLatinLetters(loginInput.value)
      ) {
        buttonSubmit.disabled = false;
        buttonSubmit.className = HTML_CLASS.button.buttonLoginActive;
        return;
      }
      buttonSubmit.className = HTML_CLASS.button.buttonLoginDisabled;
      buttonSubmit.disabled = true;
    });

    form.addEventListener('submit', () => {
      const loginValues = {
        login: loginInput.value,
        password: passwordInput.value,
      };

      if (taskController.userCollection.hasUser(loginValues) instanceof User) {
        taskController.saveUser(
          taskController.userCollection.hasUser(loginValues)
        );
        setCurrentUser(
          taskController.userCollection.hasUser(loginValues).login
        );
        background.remove();
        return;
      }
      Helper.addInputView(
        [loginLabel, HTML_CLASS.input.labelError],
        [loginInput, HTML_CLASS.input.inputError],
        [passwordLabel, HTML_CLASS.input.labelError],
        [passwordInput, HTML_CLASS.input.inputError]
      );
      Helper.addInputMessage(
        [errorMessageLogin, ERRORS.loginError],
        [errorMessagePassword, ERRORS.loginError]
      );
      buttonSubmit.className = HTML_CLASS.button.buttonLoginDisabled;
      buttonSubmit.disabled = true;

      addEventListener(
        'input',
        () => {
          Helper.removeInputView(
            [loginLabel, HTML_CLASS.input.labelError],
            [loginInput, HTML_CLASS.input.inputError],
            [passwordLabel, HTML_CLASS.input.labelError],
            [passwordInput, HTML_CLASS.input.inputError]
          );
          Helper.addInputMessage(
            [errorMessageLogin, ERRORS.emptyMessage],
            [errorMessagePassword, ERRORS.emptyMessage]
          );
          buttonSubmit.disabled = false;
          buttonSubmit.className = HTML_CLASS.button.buttonLoginActive;
        },
        { once: true }
      );
    });
  }
}
