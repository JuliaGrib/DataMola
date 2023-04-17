const taskController = new TaskController('header__nav', 'main');
const filterController = new FilterController();
const api = new TaskFeedApiService('http://169.60.206.50:7777');

taskController.createHeaderView();
taskController.createMainView();

setTheme();
