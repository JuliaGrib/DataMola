class UserController {
  setUser(obj) {
    try {
      if (!obj) {
        throw new Error(ERRORS.invalidValue);
      }

      if (!findUser(obj.login)) {
        throw new Error('Пользователь не найден');
      }

      const user = findUser(obj.login);

      if (obj.password === user.password) {
        tasks.user = obj.login;
      }

      console.log('Пользователь успешно изменен');
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
