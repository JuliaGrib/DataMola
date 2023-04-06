function setCurrentUser(user) {
  try {
    if (!Helper.isString(user)) {
      throw new Error(ERRORS.onlyString);
    }
    taskController.tasks.user = user;
    taskController.createHeaderView(taskController.tasks.user);
    taskController.createMainView();
  } catch (error) {
    console.error(error);
  }
}
