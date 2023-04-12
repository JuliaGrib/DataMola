class User {
  id;
  login;
  password;
  name;

  constructor(id, login, password, name) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.name = name;
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
    return this.id;
  }

  set id(value) {
    this.id = value;
  }

  get login() {
    return this.login;
  }

  set login(value) {
    this.login = value;
  }

  get password() {
    return this.password;
  }

  set password(value) {
    this.password = value;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }
}
