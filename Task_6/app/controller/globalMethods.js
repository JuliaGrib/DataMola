function setCurrentUser(user) {
  tasks.user = user;
  headerView.display(tasks.user);
}

function removeTask(id) {
  tasks.remove(id);
  taskFeedView.display(tasks.myCollection);
}
