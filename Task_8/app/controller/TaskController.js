class TaskController {
  _userCollection;
  _tasks;
  filterView;
  tasksToDoView;
  tasksCompleteView;
  tasksInProgressView;

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
    this.resetView = new ResetView(main);
    this.errorPageView = new ErrorPageView(main);
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

  createHeaderView() {
    this.headerView.display();
    this.headerView.addEvents();
  }

  async createMainView() {
    this.mainView.display();
    this.filterView = new FilterView('main__wrapper');
    const users = await api.getAllUsers();
    this.filterView.display(users);
    this.createColumns();
  }

  createColumns() {
    this.createToDoColumn(0, 10);
    this.createInProgressColumn(0, 10);
    this.createCompleteColumn(0, 10);
  }

  async createToDoColumn(skip, top) {
    this.tasksToDoView = new TaskFeedView('to-do');
    const tasks = await api.getTasks(skip, top, 1);
    this.tasksToDoView.display(
      filterController.setFilter(tasks),
      '.button_show-more-to-do'
    );
  }

  async createInProgressColumn(skip, top) {
    this.tasksInProgressView = new TaskFeedView('in-progress');
    const tasks = await api.getTasks(skip, top, 2);
    this.tasksInProgressView.display(
      filterController.setFilter(tasks),
      '.button_show-more-in-progress'
    );
  }

  async createCompleteColumn(skip, top) {
    this.tasksCompleteView = new TaskFeedView('complete');
    const tasks = await api.getTasks(skip, top, 3);
    this.tasksCompleteView.display(
      filterController.setFilter(tasks),
      '.button_show-more-complete'
    );
  }

  async makeLogin(login, password) {
    const response = await api.setLogin(login, password);
    if (response.login) {
      Helper.setUserLocal(response.login, response.token);
      return true;
    } else {
      return false;
    }
  }

  createLoginView() {
    this.loginView.display(taskController.tasks.user);
  }
  createRegistrationView() {
    this.registrationView.display();
  }

  async showTask(id) {
    const task = await api.getTask(id);
    this.taskView.display(task);
  }

  async editTask(id) {
    const task = await api.getTask(id);
    const users = await api.getAllUsers();
    this.taskEditView.display(task, users);
  }

  async createUserPage() {
    const user = await api.getUserProfile();
    this.userPageView.display(user);
    this.userPageView.addEvents(user);
  }

  async createUserEditPage() {
    const user = await api.getUserProfile();
    this.userEditPageView.display(user);
    this.userEditPageView.addEvents(user);
  }

  async createPopupView() {
    const users = await api.getAllUsers();
    this.popView.display(users);
  }

  async addTaskPopup(task) {
    const response = await api.addTask(task);
  }

  async saveTask(id, task) {
    const response = await api.saveEditTask(id, task);
  }

  async addComment(id, text) {
    const response = await api.addTaskComment(id, text);
    taskController.showTask(id);
  }

  async saveUserInfo(id, info) {
    await api.saveEditUser(id, info);
  }

  async regUser(info, password) {
    const response = await api.registerUser(info);
    const user = await api.setLogin(response.login, password);
    Helper.setUserLocal(user.login, user.token);
    this.createHeaderView();

    this.createMainView();
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

  createResetView(elem, id = null, del = false) {
    this.resetView.display(elem, id, del);
  }

  createErrorPageView() {
    this.errorPageView.display();
  }

  async delTask(id) {
    const response = await api.removeTask(id);
    console.log(response);
  }
}
