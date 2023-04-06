const taskController = new TaskController('header__nav', 'main');
const filterController = new FilterController();

taskController.createHeaderView(taskController.tasks.user);
taskController.createMainView();
