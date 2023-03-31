class UserController {
  setUser(obj) {
    try {
      if (!obj) {
        throw new Error(ERRORS.invalidValue);
      }

      // if (!userCollection.findUser(obj.login)) {
      //   throw new Error('Пользователь не найден');
      // }

      const user = userCollection.findUser(obj.login);
      console.log(Object.keys(user));

      // if (obj.password !== user._password) {
      //   throw new Error('пароль неверный');
      // }

      // setCurrentUser(obj.login);
      // console.log('Пользователь изменен');
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
