class UserEditPageView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    const user = JSON.parse(localStorage.user);
    this.nodeElem.className = 'main main__template_user';
    this.nodeElem.innerHTML = `
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
          <a href="#" class="icon icon_del">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7956 5 19V7H4V4H8.5L9.5 3H13.5L14.5 4H19V7H18V19ZM6 7V19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7H6ZM18 6V5H14L13 4H10L9 5H5V6H18ZM8 9H9V19H8V9ZM14 9H15V19H14V9Z"
              />
            </svg>
          </a>
        </div>
      </aside>
      <div class="user__info">
        <div class="user__header">
          <h2 class="title title_h2">General information</h2>
          <a href="#" class="icon icon_change">
          <svg class="close-edit" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2844 14.2156C15.4252 14.3578 15.5042 14.5498 15.5042 14.75C15.5042 14.9501 15.4252 15.1422 15.2844 15.2843C15.141 15.423 14.9494 15.5004 14.75 15.5004C14.5506 15.5004 14.359 15.423 14.2156 15.2843L8.00001 9.05935L1.78438 15.2843C1.64103 15.423 1.44942 15.5004 1.25001 15.5004C1.0506 15.5004 0.858988 15.423 0.715632 15.2843C0.574796 15.1422 0.495789 14.9501 0.495789 14.75C0.495789 14.5498 0.574796 14.3578 0.715632 14.2156L6.94063 7.99997L0.715632 1.78435C0.596035 1.63862 0.534916 1.45363 0.544164 1.26534C0.553411 1.07705 0.632364 0.89893 0.765665 0.765629C0.898966 0.632328 1.07708 0.553375 1.26537 0.544128C1.45366 0.53488 1.63866 0.595999 1.78438 0.715596L8.00001 6.9406L14.2156 0.715596C14.3614 0.595999 14.5464 0.53488 14.7346 0.544128C14.9229 0.553375 15.101 0.632328 15.2344 0.765629C15.3677 0.89893 15.4466 1.07705 15.4559 1.26534C15.4651 1.45363 15.404 1.63862 15.2844 1.78435L9.05938 7.99997L15.2844 14.2156Z"/>
          </svg>
          
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
              <span class="input_icon-svg">
                <svg"
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
              </span>
              <div class="input__message input__message-login"></div>
            </div>
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label label_name" for="name">Name*</label>
              <input
                class="input input_user"
                type="text"
                id="name"
                value="${user.name}"
                placeholder="Enter your name"
                requared
              />
              <span class="input_icon-svg">
                <svg class="login-info_name"
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
                <div class="input-messages-name">Max length 100</div>
              </span>
              
              <div class="input__message input__message-name"></div>
            </div>
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label label_password" for="password">Password*</label>
              <input
                class="input input_user"
                type="password"
                id="password"
                value="${user.password}"
                requared
              />
              <span class="input_icon-svg">
                <svg class="password"
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
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label label_repeat-password" for="repeat_password"
                >Repeat password*</label
              >
              <input
                class="input input_user"
                type="password"
                id="repeat_password"
                value="${user.password}"
                requared
              />
              <span class="input_icon-svg">
                <svg class="password-repeat"
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
    this._addEvents();
  }

  _addEvents() {
    const nameLabel = document.querySelector('.label_name');
    const nameInput = document.querySelector('#name');
    const errorMessageName = document.querySelector('.input__message-name');
    const nameVal = nameInput.value;

    nameInput.addEventListener('keyup', () => {
      if (!(nameInput.value.length && Helper.isValidName(nameInput.value))) {
        Helper.changeStatusInput(
          nameLabel,
          nameInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
        errorMessageName.innerHTML = 'Значение не валидное';
      } else if (nameVal === nameInput.value) {
        Helper.changeStatusInput(
          nameLabel,
          nameInput,
          'label_validate',
          'input_validate',
          'label_error',
          'input_error'
        );
        errorMessageName.innerHTML = 'Значения повторяются';
      } else {
        Helper.changeStatusInput(
          nameLabel,
          nameInput,
          'label_error',
          'input_error',
          'label_validate',
          'input_validate'
        );
        errorMessageName.innerHTML = '';
      }
    });

    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');
    const errorMessagePassword = document.querySelector(
      '.input__message-password'
    );
    const passwordVal = passwordInput.value;

    const passwordRepeatLabel = document.querySelector(
      '.label_repeat-password'
    );
    const passwordRepeatInput = document.querySelector('#repeat_password');
    const errorMessageRepeatPassword = document.querySelector(
      '.input__message-repeat-password'
    );

    const buttonSubmit = document.querySelector('.button_save');
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
        buttonSubmit.className = 'button button__form_reg button_primary';
      } else {
        buttonSubmit.className = 'button button__form_reg button_disabled';
        buttonSubmit.disabled = true;
      }
    });

    const resetBtn = document.querySelector('.button_reset');

    addEventListener('input', (event) => {
      resetBtn.disabled = false;
      resetBtn.className = 'button button_reset button_primary';

      if (
        event.target.id === 'password' ||
        event.target.id === 'repeat_password'
      ) {
        if (passwordInput.value === passwordRepeatInput.value) {
          Helper.changeStatusInput(
            passwordLabel,
            passwordInput,
            'label_error',
            'input_error',
            'label_validate',
            'input_validate'
          );
          errorMessagePassword.innerHTML = '';
          Helper.changeStatusInput(
            passwordRepeatLabel,
            passwordRepeatInput,
            'label_error',
            'input_error',
            'label_validate',
            'input_validate'
          );
          errorMessageRepeatPassword.innerHTML = '';
        } else {
          Helper.changeStatusInput(
            passwordRepeatLabel,
            passwordRepeatInput,
            'label_validate',
            'input_validate',
            'label_error',
            'input_error'
          );
          errorMessageRepeatPassword.innerHTML = 'Пароли не совпадают';
          Helper.changeStatusInput(
            passwordLabel,
            passwordInput,
            'label_validate',
            'input_validate',
            'label_error',
            'input_error'
          );
          errorMessagePassword.innerHTML = 'Значение повторяется';
        }
      }
    });

    resetBtn.addEventListener('click', (event) => {
      event.preventDefault();
      taskController.createResetView('editUser');
    });

    const form = document.querySelector('form');

    form.addEventListener('submit', () => {
      const userLocal = JSON.parse(localStorage.user);
      const isUserChange = taskController.userCollection.changeUser(
        userLocal.id,
        nameInput.value,
        passwordInput.value,
        passwordRepeatInput.value
      );

      if (isUserChange) {
        localStorage.user = JSON.stringify(
          taskController.userCollection.findUser(userLocal.id)
        );
        taskController.userCollection.save();
        taskController.createUserPage();
      }
    });

    const backMain = document.querySelector('.back');
    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });

    const passwordIcon = document.querySelector('.password');
    const passwordRepeat = document.querySelector('.password-repeat');
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

    passwordRepeat.addEventListener('click', () => {
      if (passwordRepeatInput.type === 'password') {
        passwordRepeatInput.type = 'text';
        passwordRepeat.innerHTML = `
        <svg class="icon-password" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 14.0769C14.5541 14.0769 18.0608 12.0277 19.8649 9C18.0608 5.97231 14.5541 3.92308 10.5 3.92308C6.44595 3.92308 2.93919 5.97231 1.13514 9C2.93919 12.0277 6.44595 14.0769 10.5 14.0769ZM10.5 3C15.1216 3 19.1149 5.44615 21 9C19.1149 12.5538 15.1216 15 10.5 15C5.87838 15 1.88514 12.5538 0 9C1.88514 5.44615 5.87838 3 10.5 3ZM10.5 4.84615C13.0338 4.84615 15.0608 6.69231 15.0608 9C15.0608 11.3077 13.0338 13.1538 10.5 13.1538C7.96622 13.1538 5.93919 11.3077 5.93919 9C5.93919 6.69231 7.96622 4.84615 10.5 4.84615ZM10.5 5.76923C9.5592 5.76923 8.65693 6.10961 7.99168 6.7155C7.32643 7.32139 6.9527 8.14315 6.9527 9C6.9527 9.85685 7.32643 10.6786 7.99168 11.2845C8.65693 11.8904 9.5592 12.2308 10.5 12.2308C11.4408 12.2308 12.3431 11.8904 13.0083 11.2845C13.6736 10.6786 14.0473 9.85685 14.0473 9C14.0473 8.14315 13.6736 7.32139 13.0083 6.7155C12.3431 6.10961 11.4408 5.76923 10.5 5.76923Z" fill="#808080"/>
      </svg>
        `;
      } else if (passwordRepeatInput.type === 'text') {
        passwordRepeatInput.type = 'password';
        passwordRepeat.innerHTML = `
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

    const closeEdit = document.querySelector('.close-edit');
    closeEdit.addEventListener('click', () => {
      taskController.createUserPage();
    });
  }
}
