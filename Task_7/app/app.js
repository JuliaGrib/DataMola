const tasks = new TaskCollection(tasksDB);
// const headerView = new HeaderView('header__nav');
// headerView.display(tasks.user);

const taskController = new TaskController('header__nav', 'main');
taskController.createHeaderView();
// taskController.createMainView();
// taskController.createFilterView();

// const mainView = new MainView('main');
// generateMainView();

// const filterView = new FilterView('main__wrapper');
// const taskFeedView = new TaskFeedView('desk');
// const taskView = new TaskView('main');
const filterController = new FilterController();
// generateFilterAndTask();

// const userCollection = new UserCollection(users);
// userCollection.restore();

// const loginView = new LoginView('main');
// loginView.display();
// const loginController = new LoginController();
// loginController.createListenner();
