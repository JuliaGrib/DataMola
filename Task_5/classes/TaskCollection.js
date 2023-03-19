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
    try {
      if (value === this._user) {
        throw new Error(ERRORS.sameName);
      }
      if (!value.trim().length) {
        throw new Error(ERRORS.invalidValue);
      }

      this._user = value;
      Helper.showMessages(INFO.userChange);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  get myCmyCollection() {
    return this._myCollection;
  }

  set myCollection(value) {
    this._myCollection = value;
  }

  addAll(arr) {
    const notValidTasks = [];
    this.myCollection = arr.filter((task) => {
      if (Task.validateTask(task)) {
        return true;
      } else {
        notValidTasks.push(task);
      }
    });

    Helper.showMessages(INFO.notValidateTask, String(notValidTasks.length));
    console.log(notValidTasks);
    return notValidTasks;
  }

  clear() {
    this.myCollection = [];
    Helper.showMessages(INFO.clearCollection);
  }

  _isValidateUser() {
    return Boolean(this.user);
  }

  _findTaskById(id) {
    return this._myCollection.find((task) => task.id === id);
  }

  _isValidUserInTask(id) {
    return this.get(id).assignee === this.user;
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

      Helper.showMessages(INFO.removeSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getPage(skip = 0, top = 10, filterConfig) {
    try {
      if (
        typeof skip !== 'number' ||
        typeof top !== 'number' ||
        !isFinite(skip) ||
        !isFinite(top)
      ) {
        throw new Error(ERRORS.invalidValue);
      }

      let result = [...this.myCmyCollection].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );

      for (const key in filterConfig) {
        result = result.filter((elem) => {
          if (key === KEYS.name || key === KEYS.description) {
            return elem[key]
              .toLowerCase()
              .includes(filterConfig[key].toLowerCase());
          }
          if (
            key === KEYS.assignee ||
            key === KEYS.status ||
            key === KEYS.priority
          ) {
            return elem[key].toLowerCase() === filterConfig[key].toLowerCase();
          }
          if (key === KEYS.isPrivate) {
            return elem[key] === filterConfig[key];
          }
          if (key === KEYS.dateFrom) {
            let date = new Date(filterConfig[key]);
            date.setHours(TIME.dayStart, TIME.dayStart, TIME.dayStart);
            return Date.parse(elem.createdAt) >= Date.parse(date);
          }
          if (key === KEYS.dateTo) {
            let date = new Date(filterConfig[key]);
            date.setHours(TIME.dayEndHour, TIME.dayEndMin, TIME.dayEndMin);
            return Date.parse(elem.createdAt) <= Date.parse(date);
          }
        });
      }

      return result.splice(skip, top);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  add(name, description, assignee, status, priority, isPrivate) {
    try {
      if (!this._isValidateUser()) {
        throw new Error(ERRORS.userValidation);
      }
      if (!validateObj.name(name)) {
        throw new Error(ERRORS.nameNotValidate);
      }
      if (!validateObj.description(description)) {
        throw new Error(ERRORS.descriptionNotValidate);
      }
      if (!assignee) {
        throw new Error(ERRORS.assigneeEmpty);
      }
      if (!validateObj.status(status)) {
        throw new Error(ERRORS.statusNotValidate);
      }
      if (!validateObj.priority(priority)) {
        throw new Error(ERRORS.priorityNotValidate);
      }
      if (!validateObj.isPrivate(isPrivate)) {
        throw new Error(ERRORS.isPrivateNotValidate);
      }

      const task = new Task(
        Helper.generateId(this._myCollection),
        name,
        description,
        new Date(),
        assignee,
        status,
        priority,
        isPrivate,
        []
      );

      this._myCollection.push(task);

      Helper.showMessages(INFO.addSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  edit(
    id,
    name = null,
    description = null,
    assignee = null,
    status = null,
    priority = null,
    isPrivate = false
  ) {
    try {
      if (!this._isValidateUser()) {
        throw new Error(ERRORS.userValidation);
      }
      if (arguments.length <= 1) {
        throw new Error(ERRORS.countAgrumentsNotValidate);
      }

      if (!Helper.isValidTypeId(id)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!this._findTaskById(id)) {
        throw new Error(ERRORS.taskNotFound);
      }

      if (!this._isValidUserInTask(id)) {
        throw new Error(ERRORS.userValidation);
      }

      const task = this.get(id);

      if (name) {
        if (!validateObj.name(name)) {
          throw new Error(ERRORS.nameNotValidate);
        }
        task.name = name;
      }

      if (description) {
        if (!validateObj.description(description)) {
          throw new Error(ERRORS.descriptionNotValidate);
        } else {
          task.description = description;
        }
      }

      if (assignee) {
        if (!validateObj.description(assignee)) {
          throw new Error(ERRORS.assigneeEmpty);
        } else {
          task.assignee = assignee;
        }
      }

      if (status) {
        if (!validateObj.description(status)) {
          throw new Error(ERRORS.statusNotValidate);
        } else {
          task.status = status;
        }
      }

      if (priority) {
        if (!validateObj.description(priority)) {
          throw new Error(ERRORS.priorityNotValidate);
        } else {
          task.priority = priority;
        }
      }

      if (isPrivate) {
        if (!validateObj.description(isPrivate)) {
          throw new Error(ERRORS.isPrivateNotValidate);
        } else {
          task.isPrivate = isPrivate;
        }
      }

      Helper.showMessages(INFO.editSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  addComment(idTask, text) {
    try {
      if (!this._isValidateUser()) {
        throw new Error(ERRORS.userValidation);
      }
      if (!Helper.isValidTypeId(idTask) || !this._findTaskById(idTask)) {
        throw new Error(ERRORS.taskNotFound);
      }

      if (!validateObj.description(text)) {
        throw new Error(ERRORS.descriptionNotValidate);
      }

      const com = new Comment(
        String(new Date().valueOf()),
        text,
        new Date(),
        this.user
      );

      if (!Comment.validateComment(com)) {
        throw new Error(ERRORS.valuesNotValidate);
      }

      this._findTaskById(idTask).comments.push(com);

      Helper.showMessages(INFO.addCommentSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
