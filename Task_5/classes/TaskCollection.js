class TaskCollection {
  _user = 'Julia';

  constructor(db) {
    this._myCollection = db.map(
      (elem) =>
        new Task(
          elem.id,
          elem.name,
          elem.description,
          elem.createdAt,
          elem.assignee,
          elem.status,
          elem.priority,
          elem.isPrivate,
          elem.comments
        )
    );
    this.addAll(this._myCollection);
  }

  _findTaskById(id) {
    return this._myCollection.find((task) => task.id === id);
  }

  getTask(id) {
    try {
      if (!Helper.isValidTypeId(id)) {
        throw new Error(ERRORS.invalidValue);
      }

      const task = this._findTaskById(id);

      if (!task) {
        throw new Error(ERRORS.taskNotFound);
      }

      return task;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  addAll(arr) {
    const notValidArr = [];
    this._myCollection = arr.filter((task) => {
      if (Task.validateTask(task)) {
        return true;
      } else {
        notValidArr.push(task);
      }
    });

    console.log(notValidArr);
    return notValidArr;
  }

  clear() {
    this.myCollection = [];
    Helper.showMessages(INFO.clearCollection);
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get myCmyCollection() {
    return this._myCollection;
  }

  set myCollection(value) {
    this._myCollection = value;
  }
}
