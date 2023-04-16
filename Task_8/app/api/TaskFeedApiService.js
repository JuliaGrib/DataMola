class TaskFeedApiService {
  constructor(url) {
    this.url = url;
  }

  getUserProfile() {
    const method = 'GET';
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const opt = {
      method,
      headers,
    };

    return fetch(`${this.url}/api/user/myProfile`, opt)
      .finally(() => showLoader())
      .then((response) => {
        removeLoader();
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          localStorage.clear();
          taskController.createLoginView();
        }
      })
      .catch((error) => {
        taskController.createErrorPageView();
      });
  }

  setLogin(login, password) {
    const headers = new Headers();
    const method = 'POST';
    headers.append('Content-Type', 'application/json');
    const user = {
      login,
      password,
    };

    const opt = {
      method,
      headers,
      body: JSON.stringify(user),
    };

    return fetch(`${this.url}/api/auth/login`, opt)
      .finally(() => console.log('задержка'))
      .then((response) => response.json())
      .catch((error) => {
        taskController.createErrorPageView();
      });
  }

  getTasks(skip = 0, top = 10, status) {
    return fetch(
      `${this.url}/api/tasks?skip=${skip}&top=${top}&status=${status}`
    )
      .finally(() => showLoader())
      .then((response) => {
        removeLoader();
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        removeLoader();
        taskController.createErrorPageView();
      });
  }

  getTask(id) {
    return fetch(`${this.url}/api/tasks/${id}`)
      .finally(() => console.log('задержка'))
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        taskController.createErrorPageView();
      });
  }

  getAllUsers() {
    return fetch(`${this.url}/api/user/allUsers`)
      .finally(() => showLoader())
      .then((response) => {
        removeLoader();
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        removeLoader();
        taskController.createErrorPageView();
      });
  }

  getAllTasks() {
    return fetch(`${this.url}/api/tasks`)
      .finally(() => showLoader())
      .then((response) => {
        removeLoader();
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        removeLoader();
        taskController.createErrorPageView();
      });
  }

  addTask(task) {
    const method = 'POST';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const opt = {
      method,
      headers,
      body: JSON.stringify(task),
    };

    return fetch(`${this.url}/api/tasks`, opt)
      .finally(() => console.log('задержка'))
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          localStorage.clear();
          taskController.createLoginView();
        }
      })
      .catch((error) => {
        console.error(error);
        taskController.createErrorPageView();
      });
  }

  saveEditTask(id, task) {
    const method = 'PATCH';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const opt = {
      method,
      headers,
      body: JSON.stringify(task),
    };

    return fetch(`${this.url}/api/tasks/${id}`, opt)
      .finally(() => console.log('задержка'))
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          console.log(response);
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        console.error(error);
        taskController.createErrorPageView();
      });
  }

  removeTask(id) {
    const method = 'DELETE';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    const opt = {
      method,
      headers,
    };

    return fetch(`${this.url}/api/tasks/${id}`, opt)
      .finally(() => console.log('задержка'))
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        taskController.createErrorPageView();
      });
  }

  addTaskComment(id, text) {
    const method = 'POST';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const mes = {
      text,
    };

    const opt = {
      method,
      headers,
      body: JSON.stringify(mes),
    };

    return fetch(`${this.url}/api/tasks/${id}/comments`, opt)
      .finally(() => console.log('задержка'))
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          console.log(response);
          taskController.createErrorPageView();
        }
      })
      .catch((error) => {
        console.error(error);
        taskController.createErrorPageView();
      });
  }
}
