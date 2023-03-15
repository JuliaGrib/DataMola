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
  com: 4,
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

const HTML_ELEMENTS = {
  div: "div",
  span: "span",
  article: "article",
  h3: "h3",
  p: "p",
  a: "a",
  hr: "hr",
  time: "time",
};

const ICONS = {
  icon_change: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.71 8.04L17.37 10.37L13.62 6.62L15.96 4.29C16.35 3.9 17 3.9 17.37 4.29L19.71 6.63C20.1 7 20.1 7.65 19.71 8.04ZM3 17.25L13.06 7.18L16.81 10.93L6.75 21H3V17.25ZM16.62 5.04L15.08 6.58L17.42 8.92L18.96 7.38L16.62 5.04ZM15.36 11L13 8.64L4 17.66V20H6.34L15.36 11Z"></path></svg>`,
  icon_del: `<svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.8623 19C18.8623 19.7956 18.5462 20.5587 17.9836 21.1213C17.421 21.6839 16.658 22 15.8623 22H8.8623C8.06666 22 7.30359 21.6839 6.74098 21.1213C6.17838 20.5587 5.8623 19.7956 5.8623 19V7H4.8623V4H9.3623L10.3623 3H14.3623L15.3623 4H19.8623V7H18.8623V19ZM6.8623 7V19C6.8623 19.5304 7.07302 20.0391 7.44809 20.4142C7.82316 20.7893 8.33187 21 8.8623 21H15.8623C16.3927 21 16.9014 20.7893 17.2765 20.4142C17.6516 20.0391 17.8623 19.5304 17.8623 19V7H6.8623ZM18.8623 6V5H14.8623L13.8623 4H10.8623L9.8623 5H5.8623V6H18.8623ZM8.8623 9H9.8623V19H8.8623V9ZM14.8623 9H15.8623V19H14.8623V9Z"/></svg>`,
  icon_com: `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.32227 7.5C3.32227 4.73858 5.56084 2.5 8.32227 2.5V2.5C11.0837 2.5 13.3223 4.73858 13.3223 7.5V10.6818C13.3223 11.686 12.5082 12.5 11.5041 12.5H8.32227C5.56084 12.5 3.32227 10.2614 3.32227 7.5V7.5Z" stroke="#333333" stroke-width="1.5"></path><path d="M6.44727 6.875L10.1973 6.875" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.32227 9.375H10.1973" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path</svg>`,
};

const LINKS = {
  empty: "#",
};

const HTML_CLASS = {
  title: {
    title: "title",
    card: "title_card",
  },
  card: {
    card: "card",
    header: "card__header",
    tools: "card__tools",
    info: "card__info",
    descr: "card__descr",
    additional: "card__additional",
    assignee: "card__assignee",
    line: "card__line",
    privacy: "card__privacy",
    com: "card__comments",
    comCount: "card__comment-count",
    footer: "card__footer",
    date: "card__date",
    status: "card__status",
  },
  priority: "priority",
  icon: {
    icon: "icon",
    change: "icon_change",
    del: "icon_del",
  },
  line: {
    line: "line",
    dashed: "line_dashed",
  },
};

const validateObj = {
  _id: (value) => typeof value === "string" && value.length !== 0,
  name: (value) =>
    typeof value === "string" &&
    value.length !== 0 &&
    value.length <= MAX_LENGTH.name,
  description: (value) =>
    typeof value === "string" &&
    value.length !== 0 &&
    value.length <= MAX_LENGTH.description,
  _createdAt: (value) => value instanceof Date,
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
