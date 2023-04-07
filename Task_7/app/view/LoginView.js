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
    if (!document.querySelector('.background')) {
      header.insertAdjacentHTML(
        'beforebegin',
        '<div class="background"></div>'
      );
    }

    const elemNode = document.querySelector('.main');
    elemNode.innerHTML = `
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
                    <svg class="login-info login-info_login" 
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 1C7.24566 1 5.08365 1.89553 3.48959 3.48959C1.89553 5.08365 1 7.24566 1 9.5C1 11.7543 1.89553 13.9163 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1ZM9 5V7H10V5H9ZM9 9V14H10V9H9Z"
                        fill="#808080"
                      />
                    </svg>
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
                    <svg class="icon-password" 
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54014 0.71L2.25014 0L19.0001 16.75L18.2901 17.46L14.9501 14.11C13.5801 14.68 12.0801 15 10.5001 15C5.94014 15 2.00014 12.35 0.140137 8.5C1.11014 6.5 2.63014 4.83 4.50014 3.68L1.54014 0.71ZM10.5001 14C11.7901 14 13.0301 13.77 14.1701 13.34L13.0501 12.21C12.3201 12.71 11.4501 13 10.5001 13C8.00014 13 6.00014 11 6.00014 8.5C6.00014 7.55 6.29014 6.68 6.79014 5.95L5.24014 4.41C3.56578 5.38547 2.18961 6.79968 1.26014 8.5C3.04014 11.78 6.50014 14 10.5001 14ZM19.7401 8.5C17.9601 5.22 14.5001 3 10.5001 3C9.35014 3 8.23014 3.19 7.19014 3.53L6.41014 2.75C7.68014 2.26 9.06014 2 10.5001 2C15.0601 2 19.0001 4.65 20.8601 8.5C19.9514 10.3858 18.5439 11.987 16.7901 13.13L16.0701 12.4C17.6001 11.44 18.8701 10.1 19.7401 8.5ZM10.5001 4C13.0001 4 15.0001 6 15.0001 8.5C15.0001 9.32 14.7801 10.08 14.4001 10.74L13.6601 10C13.8801 9.54 14.0001 9.04 14.0001 8.5C14.0001 7.57174 13.6314 6.6815 12.975 6.02513C12.3186 5.36875 11.4284 5 10.5001 5C9.96014 5 9.46014 5.12 9.00014 5.34L8.26014 4.6C8.92014 4.22 9.68014 4 10.5001 4ZM7.00014 8.5C7.00014 9.42826 7.36889 10.3185 8.02526 10.9749C8.68164 11.6313 9.57188 12 10.5001 12C11.1701 12 11.7901 11.81 12.3201 11.5L7.50014 6.68C7.19014 7.21 7.00014 7.83 7.00014 8.5Z"
                        fill="#808080"
                      />
                    </svg>
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

  addEvents() {
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
      background.remove();
    });

    linkContinue.addEventListener('click', () => {
      taskController.createMainView();
      background.remove();
    });

    passwordIcon.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.innerHTML = `
        <svg class="icon-password" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 14.0769C14.5541 14.0769 18.0608 12.0277 19.8649 9C18.0608 5.97231 14.5541 3.92308 10.5 3.92308C6.44595 3.92308 2.93919 5.97231 1.13514 9C2.93919 12.0277 6.44595 14.0769 10.5 14.0769ZM10.5 3C15.1216 3 19.1149 5.44615 21 9C19.1149 12.5538 15.1216 15 10.5 15C5.87838 15 1.88514 12.5538 0 9C1.88514 5.44615 5.87838 3 10.5 3ZM10.5 4.84615C13.0338 4.84615 15.0608 6.69231 15.0608 9C15.0608 11.3077 13.0338 13.1538 10.5 13.1538C7.96622 13.1538 5.93919 11.3077 5.93919 9C5.93919 6.69231 7.96622 4.84615 10.5 4.84615ZM10.5 5.76923C9.5592 5.76923 8.65693 6.10961 7.99168 6.7155C7.32643 7.32139 6.9527 8.14315 6.9527 9C6.9527 9.85685 7.32643 10.6786 7.99168 11.2845C8.65693 11.8904 9.5592 12.2308 10.5 12.2308C11.4408 12.2308 12.3431 11.8904 13.0083 11.2845C13.6736 10.6786 14.0473 9.85685 14.0473 9C14.0473 8.14315 13.6736 7.32139 13.0083 6.7155C12.3431 6.10961 11.4408 5.76923 10.5 5.76923Z" fill="#808080"/>
      </svg>
        `;
      } else if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        passwordIcon.innerHTML = `
        <svg class="icon-password" 
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.54014 0.71L2.25014 0L19.0001 16.75L18.2901 17.46L14.9501 14.11C13.5801 14.68 12.0801 15 10.5001 15C5.94014 15 2.00014 12.35 0.140137 8.5C1.11014 6.5 2.63014 4.83 4.50014 3.68L1.54014 0.71ZM10.5001 14C11.7901 14 13.0301 13.77 14.1701 13.34L13.0501 12.21C12.3201 12.71 11.4501 13 10.5001 13C8.00014 13 6.00014 11 6.00014 8.5C6.00014 7.55 6.29014 6.68 6.79014 5.95L5.24014 4.41C3.56578 5.38547 2.18961 6.79968 1.26014 8.5C3.04014 11.78 6.50014 14 10.5001 14ZM19.7401 8.5C17.9601 5.22 14.5001 3 10.5001 3C9.35014 3 8.23014 3.19 7.19014 3.53L6.41014 2.75C7.68014 2.26 9.06014 2 10.5001 2C15.0601 2 19.0001 4.65 20.8601 8.5C19.9514 10.3858 18.5439 11.987 16.7901 13.13L16.0701 12.4C17.6001 11.44 18.8701 10.1 19.7401 8.5ZM10.5001 4C13.0001 4 15.0001 6 15.0001 8.5C15.0001 9.32 14.7801 10.08 14.4001 10.74L13.6601 10C13.8801 9.54 14.0001 9.04 14.0001 8.5C14.0001 7.57174 13.6314 6.6815 12.975 6.02513C12.3186 5.36875 11.4284 5 10.5001 5C9.96014 5 9.46014 5.12 9.00014 5.34L8.26014 4.6C8.92014 4.22 9.68014 4 10.5001 4ZM7.00014 8.5C7.00014 9.42826 7.36889 10.3185 8.02526 10.9749C8.68164 11.6313 9.57188 12 10.5001 12C11.1701 12 11.7901 11.81 12.3201 11.5L7.50014 6.68C7.19014 7.21 7.00014 7.83 7.00014 8.5Z"
          fill="#808080"
        />
      </svg>
        `;
      }
    });

    loginInput.addEventListener('input', () => {
      errorMessageLogin.innerHTML = '';
      if (
        !(loginInput.value.length && Helper.checkLatinLetters(loginInput.value))
      ) {
        Helper.changeStatusInput(
          loginLabel,
          loginInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          loginLabel,
          loginInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    passwordInput.addEventListener('input', () => {
      if (
        !(
          passwordInput.value.length &&
          Helper.isValidPassword(passwordInput.value)
        )
      ) {
        Helper.changeStatusInput(
          passwordLabel,
          passwordInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
      } else {
        Helper.changeStatusInput(
          passwordLabel,
          passwordInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
      }
    });

    addEventListener('keyup', () => {
      errorMessagePassword.innerHTML = '';
      if (
        loginInput.classList.contains('input_validate') &&
        passwordInput.classList.contains('input_validate')
      ) {
        buttonSubmit.disabled = false;
        buttonSubmit.className = 'button button_form button_primary';
      } else {
        buttonSubmit.className = 'button button_form button_disabled';
        buttonSubmit.disabled = true;
      }
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
      } else {
        Helper.changeStatusInput(
          passwordLabel,
          passwordInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
        Helper.changeStatusInput(
          loginLabel,
          loginInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
        errorMessageLogin.innerHTML = ERRORS.loginError;
        errorMessagePassword.innerHTML = ERRORS.loginError;
        buttonSubmit.className = 'button button_form button_disabled';
        buttonSubmit.disabled = true;
      }
    });
  }
}
