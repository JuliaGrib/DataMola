function setCurrentUser(user) {
  tasks.user = user;
  headerView.display(tasks.user);
}
