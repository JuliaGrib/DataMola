// taskController.createFilterView();

// const mainView = new MainView('main');
// generateMainView();

// const filterView = new FilterView('main__wrapper');
// const taskFeedView = new TaskFeedView('desk');
// const taskView = new TaskView('main');

// generateFilterAndTask();

const userCollection = new UserCollection(users);
// userCollection.restore();

// const loginView = new LoginView('main');
// loginView.display();
// const loginController = new LoginController();
// loginController.createListenner();

const tasks = new TaskCollection(tasksDB);
const taskController = new TaskController('header__nav', 'main');
taskController.createHeaderView(tasks.user);
const filterController = new FilterController();
// taskController.createMainView();
taskController.createLoginView();
