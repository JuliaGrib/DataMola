class LoginController {
  createListenner() {
    const loginLabel = document.querySelector('.label_login');
    const loginInput = document.querySelector('#login');

    const passwordLabel = document.querySelector('.label_password');
    const passwordInput = document.querySelector('#password');

    const buttonSubmit = document.querySelector('.button_form');

    loginInput.addEventListener('keyup', () => {
      if (
        !(loginInput.value.length && Helper.checkLatinLetters(loginInput.value))
      ) {
        loginLabel.classList.remove('label_validate');
        loginInput.classList.remove('input_validate');
        loginLabel.classList.add('label_error');
        loginInput.classList.add('input_error');
      } else {
        loginLabel.classList.remove('label_error');
        loginInput.classList.remove('input_error');
        loginLabel.classList.add('label_validate');
        loginInput.classList.add('input_validate');
      }
    });

    passwordInput.addEventListener('keyup', () => {
      if (
        !(
          passwordInput.value.length &&
          Helper.isValidPassword(passwordInput.value)
        )
      ) {
        passwordLabel.classList.remove('label_validate');
        passwordInput.classList.remove('input_validate');
        passwordLabel.classList.add('label_error');
        passwordInput.classList.add('input_error');
      } else {
        passwordLabel.classList.remove('label_error');
        passwordInput.classList.remove('input_error');
        passwordLabel.classList.add('label_validate');
        passwordInput.classList.add('input_validate');
      }
    });

    addEventListener('keyup', () => {
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
  }
}
