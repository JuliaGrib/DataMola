class FilterController {
  _pageToDO = 0;
  _pageInProgress = 0;
  _pageComplete = 0;
  _params = {};
  _filteredTasks = [];

  get pageToDo() {
    return this._pageToDO;
  }

  set pageToDo(value) {
    this._pageToDO = value;
  }

  get pageInProgress() {
    return this._pageInProgress;
  }

  set pageInProgress(value) {
    this._pageInProgress = value;
  }

  get pageComplete() {
    return this._pageComplete;
  }

  set pageComplete(value) {
    this._pageComplete = value;
  }

  get params() {
    return this._params;
  }

  set params(value) {
    this._params = value;
  }

  get filteredTasks() {
    return this._filteredTasks;
  }

  set filteredTasks(value) {
    this._filteredTasks = value;
  }

  filterParams() {
    this._filteredTasks = tasks.getPage(
      0,
      tasks.myCollection.length,
      this._params
    );
  }

  filterTasks() {
    this.filterParams();
    const toDoArr = this._filteredTasks
      .filter(({ status }) => status === 'To Do')
      .splice(this._pageToDO, 10);
    const inProgressArr = this._filteredTasks
      .filter(({ status }) => status === 'In progress')
      .splice(this._pageInProgress, 10);
    const completeArr = this._filteredTasks
      .filter(({ status }) => status === 'Complete')
      .splice(this._complete, 10);
    return [...toDoArr, ...inProgressArr, ...completeArr];
  }
}
