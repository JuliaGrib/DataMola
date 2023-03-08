const moduleTasks = (function () {
  const user = "Julia Grib";

  function isValidTypeId(id) {
    return typeof id === "string";
  }

  function findTaskById(id) {
    return tasks.find((task) => task.id === id);
  }

  function getTask(id) {
    try {
      if (!isValidTypeId(id)) {
        throw new Error(ERRORS.invalidValue);
      }

      const task = findTaskById(id);

      if (!task) {
        throw new Error(ERRORS.taskNotFound);
      }

      return task;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  function removeTask(taskId) {
    try {
      if (!isValidTypeId(taskId)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!findTaskById(taskId)) {
        throw new Error(ERRORS.taskNotFound);
      }

      const initLength = tasks.length;
      tasks = tasks.filter(({ id, assignee }) => {
        if (!(taskId === id && assignee === user)) {
          return true;
        }
      });

      if (initLength === tasks.length) {
        throw new Error(ERRORS.taskNotDel);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function validateTask(task) {
    try {
      if (typeof task !== "object" && task === null && Array.isArray(task)) {
        throw new Error(ERRORS.taskNotObject);
      }

      const validateObjKeys = Object.keys(validateObj).sort();
      const taskKeys = Object.keys(task).sort();

      if (!taskKeys.length) {
        throw new Error(ERRORS.emptyObject);
      }

      if (validateObjKeys.length !== taskKeys.length) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      for (let i = 0; i < validateObjKeys.length; i++) {
        if (validateObjKeys[i] !== taskKeys[i]) {
          throw new Error(ERRORS.keysNotValidate);
        }
      }

      for (key in task) {
        if (!validateObj[key](task[key])) {
          throw new Error(ERRORS.valuesNotValidate);
        }
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function CreateTask(
    name,
    description,
    assignee,
    status,
    priority,
    isPrivate
  ) {
    (this.id = "55"),
      (this.name = name),
      (this.description = description),
      (this.assignee = assignee),
      (this.createdAt = new Date()),
      (this.status = status),
      (this.priority = priority),
      (this.isPrivate = isPrivate),
      (this.comments = []);
  }

  function addTask(name, description, assignee, status, priority, isPrivate) {
    try {
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

      let task = new CreateTask(
        name,
        description,
        assignee,
        status,
        priority,
        isPrivate
      );

      tasks.push(Object.assign({}, task));

      return true;
    } catch (error) {
      console.error(error);
      false;
    }
  }

  return {
    getTask,
    removeTask,
    validateTask,
    addTask,
  };
})();
