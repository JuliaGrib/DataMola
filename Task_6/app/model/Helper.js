class Helper {
  static checkerArray(arr) {
    return typeof arr !== 'object' && arr === null && Array.isArray(arr);
  }

  static isValidTypeId(id) {
    return typeof id === 'string';
  }

  static isEmptyStr(str) {
    return str.trim() !== '';
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

      return initComLength === validateCommnets.length;
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

  static validateComment(comment) {
    return (
      Helper.validateCommentValue('_id', comment.id) ||
      Helper.validateCommentValue('description', comment.text) ||
      Helper.validateCommentValue('_createdAt', comment.createdAt) ||
      Helper.validateCommentValue('assignee', comment.author)
    );
  }

  static checkerArray(arr) {
    return Boolean(Array.isArray(arr) && arr.length);
  }

  static isHtmlNode(node) {
    return node instanceof HTMLElement;
  }

  static isPrivate(value) {
    return value ? TASK_PRIVATE.private : TASK_PRIVATE.public;
  }
}
