class UserCollection {
  constructor(db) {
    try {
      if (!Helper.checkerArray(db)) {
        throw new Error(ERRORS.objectNotFound);
      }
      this._userCollection = db.map(
        (elem) => new User(elem.login, elem.password, elem.name)
      );

      this.addAll(this._userCollection);
    } catch (error) {
      console.error(ERRORS.emptyDB);
      return false;
    }
  }

  get userCollection() {
    return this._userCollection;
  }

  set userCollection(value) {
    this._userCollection = value;
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

      if (!USER_VALIDATE._login(login)) {
        throw new Error('Логин не тот');
      }

      if (this._hasLogin(login)) {
        throw new Error('Такой пользователь уже существует!');
      }

      if (!USER_VALIDATE._password(password)) {
        throw new Error('Пароль пустой');
      }

      if (password !== repeatPassword) {
        throw new Error('Пароль не совпадает');
      }

      if (!USER_VALIDATE._name(name)) {
        throw new Error('Имя не комильфо');
      }

      const user = new User(login, password, name);

      this._userCollection.push(user);

      Helper.showMessages(INFO.addSuccess);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  changeUser(name = null, password = null, repeatPassword = null) {
    try {
      if (!arguments) {
        throw new Error(ERRORS.invalidValue);
      }

      const user = findUser({ login: tasks.user });

      if (USER_VALIDATE._name(name)) {
        user.name = name;
      }
      if (USER_VALIDATE._password(password)) {
        if (password === repeatPassword) {
          user.password = password;
        }
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  findUser(loginCheck) {
    try {
      if (!loginCheck) {
        throw new Error(ERRORS.invalidValue);
      }

      return this._userCollection.filter(({ _login }) => _login === loginCheck);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  _hasLogin(loginNew) {
    return Boolean(
      this._userCollection.filter(({ login }) => login === loginNew).length
    );
  }
}
