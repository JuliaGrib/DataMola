const taskController = new TaskController('header__nav', 'main');
const filterController = new FilterController();
const api = new TaskFeedApiService('http://169.60.206.50:7777');

taskController.createHeaderView(taskController.tasks.user);
taskController.createMainView();

setTheme();

// api.getApiTasks(1).then((tasks) => console.log(tasks));

// console.log(api.getApiTasks(1).then((tasks) => tasks));

// const test = api.getTasksApi(1);
// console.log(test);
