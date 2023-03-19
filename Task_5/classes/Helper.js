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
      const initComLength = arrCom.length;
      const validateCommnets = arrCom.filter((com) =>
        Comment.validateComment(com)
      );

      return initComLength === validateCommnets.length ? true : false;
    }
  }

  static generateId(arr) {
    const taskIds = arr.map((task) => Number(task.id)).sort((a, b) => a - b);
    return String(taskIds.at(-1) + 1);
  }

  static sortKeysInObj(obj) {
    return Object.keys(obj).sort();
  }

  static validateCommentValue(key, value) {
    return !validateObj[key](value);
  }
}
