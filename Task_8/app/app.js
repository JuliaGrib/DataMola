const taskController = new TaskController('header__nav', 'main');
const filterController = new FilterController();
const api = new TaskFeedApiService('http://169.60.206.50:7777');

taskController.createHeaderView();
taskController.createMainView();

setTheme();

function showLoader() {
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforebegin', '<div class="lds-dual-ring"></div>');
}

function removeLoader() {
  document.querySelector('.lds-dual-ring').remove();
}
