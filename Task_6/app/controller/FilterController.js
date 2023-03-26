class FilterController {
  _pageToDO = PAGE_LENGTH.count;
  _pageInProgress = PAGE_LENGTH.count;
  _pageComplete = PAGE_LENGTH.count;
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
      .splice(PAGE_LENGTH.start, this._pageToDO);
    const inProgressArr = this._filteredTasks
      .filter(({ status }) => status === 'In progress')
      .splice(PAGE_LENGTH.start, this._pageInProgress);
    const completeArr = this._filteredTasks
      .filter(({ status }) => status === 'Complete')
      .splice(PAGE_LENGTH.start, this._pageComplete);
    return [...toDoArr, ...inProgressArr, ...completeArr];
  }
}
