function generateMainView() {
  mainView.display();
}

function generateFilterAndTask() {
  filterView.display(tasks.user);
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function generateMain() {
  generateMainView();
  generateFilterAndTask();
}

function setCurrentUser(user) {
  try {
    if (!Helper.isValidTypeId(user)) {
      throw new Error(ERRORS.onlyString);
    }
    tasks.user = user;
    headerView.display(tasks.user);
    filterView.display(tasks.user);
    taskFeedView.display(filterController.filterTasks(), tasks.user);
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
    taskFeedView.display(filterController.filterTasks(), tasks.user);
  } catch (error) {
    console.error(error);
  }
}

function showTask(id) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }

    if (!tasks.user) {
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

    taskFeedView.display(filterController.filterTasks(), tasks.user);
  } catch (error) {
    console.error(error);
  }
}

function addComment(id, text) {
  try {
    if (!Helper.isValidTypeId(id)) {
      throw new Error(ERRORS.onlyString);
    }

    const mainNode = document.querySelector(HTML_CLASS.main);
    tasks.addComment(id, text);

    if (mainNode.classList.contains('main__template_task-page')) {
      showTask(id);
    }
    if (main.classList.contains('main__template_task')) {
      taskFeedView.display(filterController.filterTasks(), tasks.user);
    }
  } catch (error) {
    console.error(error);
  }
}

function addTask(obj) {
  tasks.add(
    obj.name,
    obj.description,
    obj.assignee,
    obj.status,
    obj.priority,
    obj.isPrivate
  );
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function showMoreToDo() {
  filterController.pageToDo += PAGE_LENGTH.count;
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function showMoreInProgress() {
  filterController.pageInProgress += PAGE_LENGTH.count;
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function showMoreComplete() {
  filterController.pageComplete += PAGE_LENGTH.count;
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function getFeed(obj) {
  filterController.params = obj;
  filterView.display(tasks.user);
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function createKanban() {
  taskFeedView.position = TASK_VIEW.kanban;
  filterView.display(tasks.user);
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}

function createTable() {
  taskFeedView.position = TASK_VIEW.table;
  filterView.display(tasks.user);
  taskFeedView.display(filterController.filterTasks(), tasks.user);
}
