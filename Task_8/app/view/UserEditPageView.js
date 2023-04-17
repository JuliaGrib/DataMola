class UserEditPageView extends View {
  constructor(id) {
    super(id);
  }

  display(user) {
    this.nodeElem.className = 'main main__template_user';
    this.nodeElem.innerHTML = this._setHTML(user);
  }

  _setHTML(user) {
    return `
    <div class="container">
    <div class="main__wrap main__wrap_user">
      <div class="back">
        <svg
          class="back__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#333333"
          />
        </svg>
        <a  class="link back__text" href="#"> My tasks </a>
      </div>
      <h1 class="title title_h1">Account settings</h1>
    </div>
  </div>
  <div class="container">
    <section class="user">
      <aside class="user__photo">
        <img
          class="user__img"
          src="./assets/img/images/user.webp"
          alt="User photo"
          loading="lazy"
        />
        <div class="user__photo-tools">
          <a href="./user_edit.html" class="icon icon_change">
            ${ICONS.icon_change}
          </a>
          <a href="#" class="icon icon_del">
            ${ICONS.icon_del}
          </a>
        </div>
      </aside>
      <div class="user__info">
        <div class="user__header">
          <h2 class="title title_h2">General information</h2>
          <a href="#" class="icon icon_change">
            ${ICONS.icon_close_edit}
          </a>
        </div>
        <form>
          <div class="container__form-four container__form_user">
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label" for="login">Login*</label>
              <input
                class="input input_disabled"
                type="text"
                id="login"
                value="${user.login}"
                placeholder="Enter your login"
                disabled
              />
            </div>
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label label_name" for="name">Name*</label>
              <input
                class="input input_user"
                type="text"
                id="name"
                value="${user.userName}"
                placeholder="Enter your name"
                requared
                maxlenght="${MAX_LENGTH.name}"
              />
              <span class="input_icon-svg">
                <svg class="login-info_name"
                  ${ICONS.icon__form_info}
                </svg>
                <div class="input-messages-name">Max length ${MAX_LENGTH.name}</div>
              </span>
              
              <div class="input__message input__message-name"></div>
            </div>
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label label_password" for="password">Password*</label>
              <input
                class="input input_user"
                type="password"
                id="password"

                requared
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
                class="input input_user"
                type="password"
                id="repeat_password"

                requared
              />
              <span class="input_icon-svg">
                <svg class="password-repeat"
                ${ICONS.icon__form_password}
                </svg>
              </span>

              <div class="input__message input__message-repeat-password"></div>
            </div>
            <div class="form__btn">
              <button class="button button_reset button_disabled" type="reset" disabled>
                Reset
              </button>
              <button class="button button_save button_disabled" type="submit" disabled>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
          `;
  }

  addEvents() {
    const nameLabel = document.querySelector('.label_name');
    const nameInput = document.querySelector('#name');
    const errorMessageName = document.querySelector('.input__message-name');
    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');
    const errorMessagePassword = document.querySelector(
      '.input__message-password'
    );
    const passwordRepeatLabel = document.querySelector(
      '.label_repeat-password'
    );
    const passwordRepeatInput = document.querySelector('#repeat_password');
    const errorMessageRepeatPassword = document.querySelector(
      '.input__message-repeat-password'
    );
    const passwordIcon = document.querySelector('.password');
    const passwordRepeat = document.querySelector('.password-repeat');
    const buttonSubmit = document.querySelector('.button_save');
    const resetBtn = document.querySelector('.button_reset');
    const form = document.querySelector('form');
    const backMain = document.querySelector('.back');

    const closeEdit = document.querySelector('.close-edit');

    nameInput.addEventListener('input', () => {
      Helper.removeSpaceInput(nameInput);
      Helper.addInputMessage([errorMessageName, ERRORS.emptyMessage]);
      if (!(nameInput.value && Helper.isValidName(nameInput.value))) {
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

    addEventListener('keyup', () => {
      if (
        (nameInput.classList.contains('input_validate') &&
          !passwordInput.classList.contains('input_error') &&
          !passwordRepeatInput.classList.contains('input_error')) ||
        (!nameInput.classList.contains('input_error') &&
          passwordInput.classList.contains('input_validate') &&
          passwordRepeatInput.classList.contains('input_validate'))
      ) {
        buttonSubmit.disabled = false;
        buttonSubmit.className = HTML_CLASS.button.buttonChangeUserInfoActive;
        return;
      }
      buttonSubmit.className = HTML_CLASS.button.buttonChangeUserInfoDisabled;
      buttonSubmit.disabled = true;
    });

    addEventListener('input', (event) => {
      resetBtn.disabled = false;
      resetBtn.className = HTML_CLASS.button.buttonResetChengeUserInfoActive;

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

    resetBtn.addEventListener('click', (event) => {
      event.preventDefault();
      taskController.createResetView('editUser');
    });

    form.addEventListener('submit', () => {
      const info = {
        userName: nameInput.value,
        password: passwordInput.value,
        retypedPassword: passwordRepeatInput.value,
        photo: logoBase64,
      };

      taskController.saveUserInfo('15', info);
    });

    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });

    passwordIcon.addEventListener('click', () => {
      Helper.changePasswordIcon(passwordInput, passwordIcon);
    });

    passwordRepeat.addEventListener('click', () => {
      Helper.changePasswordIcon(passwordRepeatInput, passwordRepeat);
    });

    closeEdit.addEventListener('click', () => {
      taskController.createUserPage();
    });
  }
}
