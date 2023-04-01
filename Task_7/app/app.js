const tasks = new TaskCollection(tasksDB);
const mainView = new MainView('main');
generateMainView();
const headerView = new HeaderView('header__nav');
headerView.display(tasks.user);
const filterView = new FilterView('main__wrapper');

const taskFeedView = new TaskFeedView('desk');
const taskView = new TaskView('main');
const filterController = new FilterController();

generateFilterAndTask();

const objTestForAddTask = {
  name: 'Test',
  description: 'TestDescr',
  assignee: 'Misha',
  status: 'To Do',
  priority: 'Hight',
  isPrivate: true,
};

const userCollection = new UserCollection(users);
const userController = new UserController();
console.log(userCollection);

userCollection.add('test', 123, 123, 'sd');
console.log(userCollection);
