class UserCollection {
  constructor() {
    try {
      const db = this.restore();

      this._userCollection = db.map(
        (elem) => new User(elem.id, elem.login, elem.password, elem.name)
      );

      this.addAll(this._userCollection);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  get userCollection() {
    return this._userCollection;
  }

  set userCollection(value) {
    this._userCollection = value.map(
      (elem) => new User(elem.id, elem.login, elem.password, elem.name)
    );
  }

  addAll(arr) {
    const notValidUsers = [];
    this._userCollection = arr.filter((user) => {
      if (User.validateUser(user)) {
        return true;
      } else {
        notValidUsers.push(user);
      }
    });

    return notValidUsers;
  }

  add(login, password, repeatPassword, name) {
    try {
      if (!arguments) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!USER_VALIDATE.login(login)) {
        throw new Error('Логин не тот');
      }

      if (this._hasLogin(login)) {
        throw new Error('Такой пользователь уже существует!');
      }

      if (!USER_VALIDATE.password(password)) {
        throw new Error('Пароль пустой');
      }

      if (password !== repeatPassword) {
        throw new Error('Пароль не совпадает');
      }

      if (!USER_VALIDATE.name(name)) {
        throw new Error('Имя не комильфо');
      }

      const user = new User(
        Helper.generateId(this._userCollection),
        login,
        password,
        name
      );

      this._userCollection.push(user);
      this.save();

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  changeUser(id, nameVal, password, repeatPassword) {
    try {
      if (!arguments) {
        throw new Error(ERRORS.invalidValue);
      }

      const userCurrent = this.findUser(id);
      if (USER_VALIDATE.name(nameVal)) {
        userCurrent.name = nameVal;
      }
      if (USER_VALIDATE.password(password)) {
        if (password === repeatPassword) {
          userCurrent.password = password;
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  findUser(idCur) {
    try {
      if (!idCur) {
        throw new Error(ERRORS.invalidValue);
      }
      if (!Helper.isString(idCur)) {
        throw new Error(ERRORS.invalidValue);
      }

      const user = this._userCollection.find(({ id }) => {
        return id === idCur;
      });

      if (!user) {
        throw new Error(ERRORS.userNotFound);
      }

      return user;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  hasUser(obj) {
    return this._userCollection.filter(
      ({ login, password }) => login === obj.login && password === obj.password
    )[0];
  }

  _hasLogin(loginNew) {
    return Boolean(
      this._userCollection.filter(({ login }) => login === loginNew).length
    );
  }

  restore() {
    try {
      if (!localStorage.getItem('userCollection')) {
        localStorage.userCollection = JSON.stringify(usersDB);
        return usersDB;
      } else {
        return JSON.parse(localStorage.userCollection);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  save() {
    localStorage.userCollection = JSON.stringify(this._userCollection);
  }

  saveUser(objUser) {
    try {
      if (!objUser) {
        localStorage.removeItem('user');
        taskController.tasks.user = '';
      }
      localStorage.user = JSON.stringify(objUser);
    } catch (error) {
      console.error(error);
    }
  }
}
