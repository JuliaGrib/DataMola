class FilterController {
  _pageToDO = 0;
  _pageInProgress = 0;
  _pageComplete = 0;

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

  _filterToDo(params) {
    return tasks.getPage(this._pageToDO, 10, params);
  }

  _filterInProgress(params) {
    return tasks.getPage(this._pageInProgress, 10, params);
  }

  _filterComplete(params) {
    return tasks.getPage(this._pageComplete, 10, params);
  }

  filterTasks() {
    const toDoArr = this._filterToDo({ status: 'To Do' });
    const inProgressArr = this._filterInProgress({ status: 'In progress' });
    const completeArr = this._filterComplete({ status: 'Complete' });
    return [...toDoArr, ...inProgressArr, ...completeArr];
  }
}
