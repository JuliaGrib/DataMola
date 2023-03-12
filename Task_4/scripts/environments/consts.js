const ERRORS = {
  invalidValue: "Invalid value",
  taskNotFound: "Task not found",
  keyNotFound: "Missing required value",
  taskNotDel: "Task not removed",
  taskNotObject: "Value is not an object",
  emptyObject: "Object cannot be empty",
  nameNotValidate:
    "The name must be greater than zero and less than or exactly 100 characters",
  descriptionNotValidate:
    "Description must be greater than zero and less than or exactly 280 characters",
  assigneeEmpty: "Assignee cannot be empty",
  statusNotValidate: "Invalid status",
  priorityNotValidate: "Invalid priority",
  isPrivateNotValidate: "Invalid private",
  lengthNotValidate:
    "The number of properties in the object is not as expected",
  keysNotValidate: "Properties not found",
  valuesNotValidate: "Values not validated",
  countAgrumentsNotValidate: "Number of expected arguments does not match",
  sameName: "The entered name must not be the same as the previous one.",
  userValidation: "No rights to edit (User does not match)",
};

const TASK_STATUS = {
  toDo: "To Do",
  inProgress: "In progress",
  complete: "Complete",
};

const TASK_PRIORITY = {
  hight: "Hight",
  medium: "Medium",
  low: "Low",
};

const MAX_LENGTH = {
  name: 100,
  description: 280,
};

const KEYS = {
  name: "name",
  description: "description",
  assignee: "assignee",
  status: "status",
  priority: "priority",
  isPrivate: "isPrivate",
  dateFrom: "dateFrom",
  dateTo: "dateTo",
};

const validateObj = {
  id: (value) => typeof value === "string" && value.length !== 0,
  name: (value) =>
    typeof value === "string" &&
    value.length !== 0 &&
    value.length <= MAX_LENGTH.name,
  description: (value) =>
    typeof value === "string" &&
    value.length !== 0 &&
    value.length <= MAX_LENGTH.description,
  createdAt: (value) => value instanceof Date,
  assignee: (value) => typeof value === "string" && value.length !== 0,
  status: (value) =>
    typeof value === "string" &&
    (value === TASK_STATUS.toDo ||
      value === TASK_STATUS.inProgress ||
      value === TASK_STATUS.complete),
  priority: (value) =>
    typeof value === "string" &&
    (value === TASK_PRIORITY.hight ||
      value === TASK_PRIORITY.medium ||
      value === TASK_PRIORITY.low),
  isPrivate: (value) => typeof value === "boolean",
  comments: (value) => Array.isArray(value),
};
