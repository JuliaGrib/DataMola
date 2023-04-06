class UserController {
  setUser(obj) {
    try {
      if (!obj) {
        throw new Error(ERRORS.invalidValue);
      }

      const user = userCollection.findUser(obj.login);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  registrationUser(obj) {
    try {
      if (!obj) {
        throw new Error(ERRORS.invalidValue);
      }

      userCollection.add(obj.login, obj.password, obj.repeatPassword, obj.name);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  changeUser(obj) {
    try {
      if (!obj) {
        throw new Error(ERRORS.invalidValue);
      }

      userCollection.changeUser(obj.name, obj.password, obj.repeatPassword);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  exitUser() {
    setCurrentUser('');
  }
}
