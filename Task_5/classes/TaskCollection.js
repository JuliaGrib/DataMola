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

  addAll(arr) {
    const notValidArr = [];
    this.myCollection = arr.filter((task) => {
      if (Task.validateTask(task)) {
        return true;
      } else {
        notValidArr.push(task);
      }
    });

    Helper.showMessages(INFO.notValidateTask, String(notValidArr.length));
    console.log(notValidArr);
    return notValidArr;
  }

  clear() {
    this.myCollection = [];
    Helper.showMessages(INFO.clearCollection);
  }

  _findTaskById(id) {
    return this._myCollection.find((task) => task.id === id);
  }

  _isValidUserInTask(id) {
    return this.getTask(id).assignee === this.user;
  }

  get(id) {
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

  remove(taskId) {
    try {
      if (!Helper.isValidTypeId(taskId)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!this._findTaskById(taskId)) {
        throw new Error(ERRORS.taskNotFound);
      }

      if (!this._isValidUserInTask(taskId)) {
        throw new Error(ERRORS.userValidation);
      }

      const initLength = this._myCollection.length;
      this.myCollection = this._myCollection.filter(({ id, assignee }) => {
        if (!(taskId === id && assignee === this.user)) {
          return true;
        }
      });

      if (initLength === this._myCollection.length) {
        throw new Error(ERRORS.taskNotDel);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
