class TaskFeedApiService {
  constructor(url) {
    this.url = url;
  }

  getTasks(status) {
    return fetch(`${this.url}/api/tasks?status=${status}`);
  }
}

// async _getApiTasks(status) {
//   return await fetch(`${this.url}/api/tasks?status=${status}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((tasks) => tasks);
// }

// async getTasks(status) {
//   return await this._getApiTasks(status);
// }

// getApiTasks(status) {
//   return fetch(`${this.url}/api/tasks?status=${status}`).then((response) =>
//     response.json()
//   );
// }

// async getTasksApi(status) {
//   const result = await fetch(`${this.url}/api/tasks?status=${status}`).then(
//     (response) => response.json()
//   );
//   return result;
// }

// async getTasks(status) {
//   const response = await fetch(`${this.url}/api/tasks?status=${status}`);
//   const dataTasks = await response.json();
//   return dataTasks;
// }
