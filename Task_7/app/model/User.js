class User {
  _id;
  _login;
  _password;
  _name;

  constructor(id, login, password, name) {
    this._id = id;
    this._login = login;
    this._password = password;
    this._name = name;
  }

  static validateUser(user) {
    try {
      if (!user) {
        throw new Error(ERRORS.invalidValue);
      }
      if (Helper.checkerArray(user)) {
        throw new Error(ERRORS.taskNotObject);
      }
      const userKeys = Object.keys(user);
      const userValidKeys = Object.keys(USER_VALIDATE);
      console.log(user);

      if (!userKeys.length) {
        throw new Error(ERRORS.emptyObject);
      }

      if (userKeys.length !== userValidKeys.length) {
        throw new Error(ERRORS.lengthNotValidate);
      }

      for (let i = 0; i < userValidKeys.length; i++) {
        if (userValidKeys[i] !== userKeys[i]) {
          throw new Error(ERRORS.keysNotValidate);
        }
      }

      for (const key in user) {
        if (!USER_VALIDATE[key](user[key])) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error(error);
    }
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get login() {
    return this._login;
  }

  set login(value) {
    this._login = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
