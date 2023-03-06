const validateObj = {
    id: (value) => (typeof value === 'string') && (value.length !== 0),
    name: (value) => (typeof value === 'string') && (value.length !== 0 && value.length <= 100),
    description: (value) => (typeof value === 'string') && (value.length !== 0 && value.length <= 280),
    createdAt: (value) => value instanceof Date,
    assignee: (value) => (typeof value === 'string') && (value.length !== 0),
    status: (value) => (typeof value === 'string') && (value === 'To Do' || value === 'In progress' || value === 'Complete'),
    priority: (value) => (typeof value === 'string') && (value === 'Hight' || value === 'Medium' || value === 'Low'),
    isPrivate: (value) => (typeof value === 'boolean'),
    comments: (value) => Array.isArray(value),
}