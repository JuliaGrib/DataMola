const tasks = new TaskCollection(tasksDB);
const headerView = new HeaderView('header__nav');
const taskFeedView = new TaskFeedView('desk');

setCurrentUser('');
taskFeedView.display(tasks.myCollection);
