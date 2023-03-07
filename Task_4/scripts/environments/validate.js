const TASK_STATUS = {
    toDo: 'To Do',
    inProgress: 'In progress',
    complete: 'Complete'
};

const TASK_PRIORITY = {
    hight: 'Hight',
    medium: 'Medium',
    low: 'Low'
}

const MAX_LENGTH = {
    name: 100,
    description: 280,
};

const validateObj = {
    id: (value) => (typeof value === 'string') && (value.length !== 0),
    name: (value) => (typeof value === 'string') && (value.length !== 0 && value.length <= MAX_LENGTH.name),
    description: (value) => (typeof value === 'string') && (value.length !== 0 && value.length <= MAX_LENGTH.description),
    createdAt: (value) => value instanceof Date,
    assignee: (value) => (typeof value === 'string') && (value.length !== 0),
    status: (value) => (typeof value === 'string') && (value === TASK_STATUS.toDo || value === TASK_STATUS.inProgress || value === TASK_STATUS.complete),
    priority: (value) => (typeof value === 'string') && (value === TASK_PRIORITY.hight || value === TASK_PRIORITY.medium || value === TASK_PRIORITY.low),
    isPrivate: (value) => (typeof value === 'boolean'),
    comments: (value) => Array.isArray(value),
};