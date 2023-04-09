class TaskController {
  _userCollection;
  _tasks;
  filterView;
  taskFeedView;

  constructor(header, main) {
    this.userCollection = new UserCollection();
    this.tasks = new TaskCollection();
    this.headerView = new HeaderView(header);
    this.mainView = new MainView(main);
    this.taskView = new TaskView(main);
    this.taskEditView = new TaskEditView(main);
    this.loginView = new LoginView(main);
    this.registrationView = new RegistrationView(main);
    this.userPageView = new UserPageView(main);
    this.userEditPageView = new UserEditPageView(main);
    this.popView = new PopView(main);
  }

  set userCollection(value) {
    this._userCollection = value;
  }
  get userCollection() {
    return this._userCollection;
  }

  set tasks(value) {
    this._tasks = value;
  }
  get tasks() {
    return this._tasks;
  }

  restoreUserCollection() {
    this.userCollection.restore();
  }
  saveUser(value) {
    this.userCollection.saveUser(value);
  }

  restoreTaskCollection() {
    this.tasks.restore();
  }

  createHeaderView(user) {
    this.headerView.display(user);
    this.headerView.addEvents(user);
  }

  createMainView() {
    this.mainView.display();
    this.filterView = new FilterView('main__wrapper');
    this.taskFeedView = new TaskFeedView('desk');
    this.filterView.display(this.tasks.user);
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  createLoginView() {
    this.loginView.display(taskController.tasks.user);
  }
  createRegistrationView() {
    this.registrationView.display();
    this.registrationView.addEvents();
  }

  showTask(id) {
    try {
      if (!Helper.isString(id)) {
        throw new Error(ERRORS.onlyString);
      }

      if (!this.tasks.user) {
        throw new Error(ERRORS.userValidation);
      }

      this.taskView.display(this.tasks.get(id));
    } catch (error) {
      console.error(error);
    }
  }

  editTask(id) {
    try {
      if (!id) {
        throw new Error(ERRORS.invalidValue);
      }
      this.taskEditView.display(id);
    } catch (error) {
      console.error(error);
    }
  }

  createUserPage() {
    this.userPageView.display(taskController.tasks.user);
    this.userPageView.addEvents(taskController.tasks.user);
  }

  createUserEditPage() {
    this.userEditPageView.display();
    this.userEditPageView.addEvents();
  }

  createPopupView() {
    this.popView.display();
  }

  showMoreToDo() {
    filterController.pageToDo += PAGE_LENGTH.count;
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  showMoreComplete() {
    filterController.pageComplete += PAGE_LENGTH.count;
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  showMoreInProgress() {
    filterController.pageInProgress += PAGE_LENGTH.count;
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  addTask(obj) {
    this.tasks.add(
      obj.name,
      obj.description,
      obj.assignee,
      obj.status,
      obj.priority,
      obj.isPrivate
    );

    this.createMainView();
  }

  removeTask(id) {
    try {
      if (!Helper.isString(id)) {
        throw new Error(ERRORS.onlyString);
      }
      this.tasks.remove(id);
      this.createMainView();
    } catch (error) {
      console.error(error);
    }
  }

  createKanban() {
    this.taskFeedView.position = TASK_VIEW.kanban;
    this.filterView.display(this.tasks.user);
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  createTable() {
    this.taskFeedView.position = TASK_VIEW.table;
    this.filterView.display(this.tasks.user);
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  addComment(id, text) {
    try {
      if (!Helper.isString(id)) {
        throw new Error(ERRORS.onlyString);
      }

      this.tasks.addComment(id, text);
      this.showTask(id);
      this.tasks.save();
    } catch (error) {
      console.error(error);
    }
  }

  getFeed(obj) {
    filterController.params = obj;
    this.taskFeedView.display(filterController.filterTasks(), this.tasks.user);
  }

  editTaskInPage(id, obj) {
    try {
      if (!Helper.isString(id)) {
        throw new Error(ERRORS.onlyString);
      }

      this.tasks.edit(
        id,
        obj.name || null,
        obj.description || null,
        obj.assignee || null,
        obj.status || null,
        obj.priority || null,
        obj.isPrivate || null
      );

      this.tasks.save();
      this.showTask(id);
    } catch (error) {
      console.error(error);
    }
  }
}
