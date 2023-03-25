function setCurrentUser(user) {
  try {
    if (!Helper.isValidTypeId(user)) {
      throw new Error(ERRORS.onlyString);
    }
    tasks.user = user;
    headerView.display(tasks.user);
    taskFeedView.display(tasks.myCollection, tasks.user);
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

    if (tasks.user === '') {
      throw new Error(ERRORS.userValidation);
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

function addComment(id, text) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }

    tasks.addComment(id, text);

    if (
      document
        .querySelector('main')
        .classList.contains('main__template_task-page')
    ) {
      showTask(id);
    }
    if (
      document.querySelector('main').classList.contains('main__template_task')
    ) {
      taskFeedView.display(tasks.myCollection, tasks.user);
    }
  } catch (error) {
    console.error(error);
  }
}
