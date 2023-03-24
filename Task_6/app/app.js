const tasks = new TaskCollection(tasksDB);
const headerView = new HeaderView('header__nav');

function setCurrentUser(user) {
  console.log((tasks.user = user));
  headerView.display(tasks.user);
}

setCurrentUser('');
