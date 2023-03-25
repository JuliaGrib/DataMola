function setCurrentUser(user) {
  try {
    if (!Helper.isValidTypeId(user)) {
      throw new Error(ERRORS.onlyString);
    }
    tasks.user = user;
    headerView.display(tasks.user);
  } catch (error) {
    console.error(error);
  }
}

function removeTask(id) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }
    tasks.remove(id);
    taskFeedView.display(tasks.myCollection);
  } catch (error) {
    console.error(error);
  }
}

function showTask(id) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }
    taskView.display(tasks.get(id));
  } catch (error) {
    console.error(error);
  }
}

function editTask(id, obj) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }

    tasks.edit(
      id,
      obj.name || null,
      obj.description || null,
      obj.assignee || null,
      obj.status || null,
      obj.priority || null,
      obj.isPrivate || null
    );

    taskFeedView.display(tasks.myCollection);
  } catch (error) {
    console.error(error);
  }
}
