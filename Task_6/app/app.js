const mainView = new MainView('main');
mainView.display();
const filterView = new FilterView('main__filter');
filterView.display();

const tasks = new TaskCollection(tasksDB);
const headerView = new HeaderView('header__nav');
headerView.display(tasks.user);
const taskFeedView = new TaskFeedView('desk');
const taskView = new TaskView('main');

taskFeedView.display(tasks.myCollection, tasks.user);

let objTestForAddTask = {
  name: 'Test',
  description: 'TestDescr',
  assignee: 'Misha',
  status: 'To Do',
  priority: 'Hight',
  isPrivate: true,
};
