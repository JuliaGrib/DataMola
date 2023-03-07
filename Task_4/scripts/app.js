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
      if (
        !(typeof task === "object" && task !== null && !Array.isArray(task))
      ) {
        throw new Error(ERRORS.taskNotObject);
      }

      if (Object.keys(task).length === 0) {
        throw new Error(ERRORS.emptyObject);
      }

      const validateObjKeys = Object.keys(validateObj).sort();
      const taskKeys = Object.keys(task).sort();

      if (validateObjKeys.length !== taskKeys.length) {
        return false;
      }

      for (let i = 0; i < validateObjKeys.length; i++) {
        if (validateObjKeys[i] !== taskKeys[i]) {
          return false;
        }
      }

      for (key in task) {
        if (!validateObj[key](task[key])) {
          return false;
        }
      }
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
  };
})();
