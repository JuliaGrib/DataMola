const tasks = new TaskCollection(tasksDB);
const headerView = new HeaderView('header__nav');
const taskFeedView = new TaskFeedView('desk');
const taskView = new TaskView('main');

setCurrentUser('');
taskFeedView.display(tasks.myCollection, tasks.user);
