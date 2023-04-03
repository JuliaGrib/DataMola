class TaskController {
  constructor(header, main) {
    this.headerView = new HeaderView(header);
    this.mainView = new MainView(main);
    this.filterView = null;
    this.taskFeedView = null;
    this.taskView = new TaskView(main);
    this.taskEditView = new TaskEditView(main);
    this.loginView = new LoginView(main);
    this.registrationView = new RegistrationView(main);
    this.userPageView = new UserPageView(main);
    this.userEditPageView = new UserEditPageView(main);
  }

  createHeaderView(user) {
    this.headerView.display(user);
    this.headerView.addEvents(user);
  }

  createMainView() {
    this.mainView.display();
    this.filterView = new FilterView('main__wrapper');
    this.filterView.display(tasks.user);
    this.taskFeedView = new TaskFeedView('desk');
    this.taskFeedView.display(filterController.filterTasks(), tasks.user);
  }

  createLoginView() {
    this.loginView.display(tasks.user);
    this.loginView.addEvents();
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

      if (!tasks.user) {
        throw new Error(ERRORS.userValidation);
      }

      if (tasks.get(id).assignee !== tasks.user) {
        throw new Error(ERRORS.userValidation);
      }

      this.taskView.display(tasks.get(id));
    } catch (error) {
      console.error(error);
    }
  }

  editTask() {
    this.taskEditView.display();
  }

  createUserPage() {
    this.userPageView.display();
  }

  createUserEditPage() {
    this.userEditPageView.display();
  }
}
