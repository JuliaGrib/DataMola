"use sctict";

const moduleTasks = (function () {
  const user = {
    _name: "Julia Grib",

    get name() {
      return this._name;
    },

    set setName(value) {
      this._name = value;
    },
  };

  function isValidTypeId(id) {
    return typeof id === "string";
  }

  function findTaskById(id) {
    return tasks.find((task) => task.id === id);
  }

  function generateId() {
    const taskIds = tasks.map((task) => Number(task.id)).sort((a, b) => a - b);
    return String(taskIds.at(-1) + 1);
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
        if (!(taskId === id && assignee === user.name)) {
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

      const task = {
        id: generateId(),
        name,
        description,
        createdAt: new Date(),
        assignee,
        status,
        priority,
        isPrivate,
        comments: [],
      };

      tasks.push(task);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function editTask(
    id,
    name = null,
    description = null,
    assignee = null,
    status = null,
    priority = null,
    isPrivate = null
  ) {
    try {
      if (arguments.length <= 1) {
        throw new Error(ERRORS.countAgrumentsNotValidate);
      }

      if (!isValidTypeId(id)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!findTaskById(id)) {
        throw new Error(ERRORS.taskNotFound);
      }

      const task = getTask(id);

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

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function getTasks(skip = 0, top = 10, filterConfig) {
    try {
      if (
        typeof skip !== "number" ||
        typeof top !== "number" ||
        !isFinite(skip) ||
        !isFinite(top)
      ) {
        throw new Error(ERRORS.invalidValue);
      }

      let result = [...tasks].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );

      for (key in filterConfig) {
        result = result.filter((elem) => {
          if (key === KEYS.name || key === KEYS.description) {
            return elem[key]
              .toLowerCase()
              .includes(filterConfig[key].toLowerCase());
          }
          if (
            key === "assignee" ||
            key === "status" ||
            key === "priority" ||
            key === "isPrivate"
          ) {
            return elem[key] === filterConfig[key];
          }
          if (key === "dateFrom") {
            return Date.parse(elem.createdAt) >= Date.parse(filterConfig[key]);
          }
          if (key === "dateTo") {
            return Date.parse(elem.createdAt) <= Date.parse(filterConfig[key]);
          }
        });
      }

      return result.splice(skip, top);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function changeUser(usr) {
    try {
      if (usr === user.name) {
        throw new Error(ERRORS.sameName);
      }
      if (typeof usr !== "string" || usr.trim().length === 0) {
        throw new Error(ERRORS.invalidValue);
      }

      user.setName = usr;

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function validateComment(com) {
    try {
      if (typeof com !== "object" || com === null || Array.isArray(com)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!Object.keys(com).length) {
        return true;
      }

      if (Object.keys(com).length !== 4) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      if (
        !validateObj.id(com.id) ||
        !validateObj.description(com.text) ||
        !validateObj.createdAt(com.createdAt) ||
        !validateObj.assignee(com.author)
      ) {
        throw new Error(ERRORS.valuesNotValidate);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function addComment(idTask, text) {
    try {
      if (!isValidTypeId(idTask) || !findTaskById(idTask)) {
        throw new Error(ERRORS.taskNotFound);
      }

      if (!validateObj.description(text)) {
        throw new Error(ERRORS.descriptionNotValidate);
      }

      const com = {
        id: String(new Date().valueOf()),
        text,
        createdAt: new Date(),
        author: user.name,
      };

      findTaskById(idTask).comments.push(com);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return {
    getTask,
    removeTask,
    validateTask,
    addTask,
    editTask,
    getTasks,
    changeUser,
    validateComment,
    addComment,
  };
})();
