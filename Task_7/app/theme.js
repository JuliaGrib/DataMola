const html = document.querySelector('html');
const theme = document.querySelector('.theme');

function setTheme() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'theme-light');
  } else {
    html.classList.add(localStorage.getItem('theme'));
  }
  document.querySelectorAll(
    `.${localStorage.getItem('theme')}`
  )[1].checked = true;
}

theme.addEventListener('click', (event) => {
  if (event.target.className === 'theme__cirle theme__cirle_black') {
    html.classList.remove('theme-light');
    html.classList.add('theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  } else if (event.target.className === 'theme__cirle theme__cirle_white') {
    html.classList.remove('theme-dark');
    html.classList.add('theme-light');
    localStorage.setItem('theme', 'theme-light');
  }
});
