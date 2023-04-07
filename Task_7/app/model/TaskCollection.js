class TaskCollection {
  _user = this.restoreUser();
  _myCollection;
  constructor() {
    try {
      const db = this.restore();

      this._myCollection = db.map(
        (elem) =>
          new Task(
            elem.id || elem._id,
            elem.name,
            elem.description,
            elem.createdAt || elem._createdAt,
            elem.assignee,
            elem.status,
            elem.priority,
            elem.isPrivate,
            elem.comments
          )
      );

      this.addAll(this._myCollection);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  restore() {
    try {
      if (!localStorage.getItem('taskCollection')) {
        return tasksDB;
      } else {
        return JSON.parse(localStorage.taskCollection);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  save() {
    localStorage.taskCollection = JSON.stringify(this._myCollection);
  }

  restoreUser() {
    if (
      !localStorage.getItem('user') ||
      localStorage.getItem('user') === 'undefined'
    ) {
      return '';
    } else {
      return JSON.parse(localStorage.user).login;
    }
  }

  get user() {
    return this._user;
  }

  set user(value) {
    try {
      if (typeof value !== 'string') {
        throw new Error(ERRORS.invalidValue);
      }
      if (value === this._user && value !== '') {
        throw new Error(ERRORS.sameName);
      }

      this._user = value || '';
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  get myCollection() {
    return this._myCollection.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  }

  set myCollection(value) {
    this._myCollection = value;
  }

  addAll(arr) {
    const notValidTasks = [];

    // this.myCollection = arr.filter((task) => {
    //   if (Task.validateTask(task)) {
    //     return true;
    //   } else {
    //     notValidTasks.push(task);
    //   }
    // });
    return notValidTasks;
  }

  clear() {
    this.myCollection = [];
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
      if (!Helper.isString(id)) {
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
      if (!Helper.isString(taskId)) {
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

      let result = [...this._myCollection].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );

      for (const key in filterConfig) {
        result = result.filter((elem) => {
          if (key === KEYS.name) {
            if (elem[key] === '') {
              return elem;
            } else {
              return elem[key]
                .toLowerCase()
                .includes(filterConfig[key].toLowerCase());
            }
          }
          if (key === KEYS.description) {
            if (elem[key] === '') {
              return elem;
            } else {
              return elem[key]
                .toLowerCase()
                .includes(filterConfig[key].toLowerCase());
            }
          }
          if (
            key === KEYS.assignee ||
            key === KEYS.status ||
            key === KEYS.priority ||
            key === KEYS.isPrivate
          ) {
            if (Array.isArray(filterConfig[key]) && filterConfig[key].length) {
              return filterConfig[key].includes(elem[key]);
            } else if (
              Array.isArray(filterConfig[key]) &&
              !filterConfig[key].length
            ) {
              return elem;
            }
          }
          if (key === KEYS.dateFrom) {
            if (isNaN(filterConfig[key])) {
              return elem;
            } else {
              let date = new Date(filterConfig[key]);
              date.setHours(TIME.dayStart, TIME.dayStart, TIME.dayStart);
              return Date.parse(elem.createdAt) >= Date.parse(date);
            }
          }
          if (key === KEYS.dateTo) {
            if (isNaN(filterConfig[key])) {
              return elem;
            } else {
              let date = new Date(filterConfig[key]);
              date.setHours(TIME.dayEndHour, TIME.dayEndMin, TIME.dayEndMin);
              return Date.parse(elem.createdAt) <= Date.parse(date);
            }
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
        throw new Error(ERRORS.countArgumentsNotValidate);
      }

      if (!Helper.isString(id)) {
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

      if (isPrivate !== null) {
        if (!validateObj.description(isPrivate)) {
          throw new Error(ERRORS.isPrivateNotValidate);
        } else {
          task.isPrivate = isPrivate;
        }
      }

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
      if (!Helper.isString(idTask) || !this._findTaskById(idTask)) {
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

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
