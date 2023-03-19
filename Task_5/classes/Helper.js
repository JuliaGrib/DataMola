class Helper {
  static checkerArray(arr) {
    return typeof arr !== 'object' && arr === null && Array.isArray(arr);
  }

  static isValidTypeId(id) {
    return typeof id === 'string';
  }

  static showMessages(mes, count = null) {
    console.log('%c%s', 'color: green; font-weight: bold', mes, count || '');
  }

  static checkCommentsArray(arrCom) {
    if (Array.isArray(arrCom) && arrCom.length === 0) {
      return true;
    }
    if (Array.isArray(arrCom) && arrCom.length > 0) {
      const commLength = arrCom.length;
      arrCom = arrCom.filter((com) => Comment.validateComment(com));

      return commLength === arrCom.length ? true : false;
    }
  }
}
