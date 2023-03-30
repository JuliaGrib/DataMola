class Helper {
  static checkerArray(arr) {
    return typeof arr !== 'object' && arr === null && Array.isArray(arr);
  }

  static isString(str) {
    return typeof str === 'string';
  }

  static isEmptyStr(str) {
    return str.trim().length;
  }

  static showMessages(mes, count = null) {
    console.log('%c%s', 'color: green; font-weight: bold', mes, count || '');
  }

  static checkCommentsArray(arrCom) {
    if (Array.isArray(arrCom) && !arrCom.length) {
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

  static checkLatinLetters(str) {
    try {
      if (!Helper.isString(str)) {
        throw new Error(ERRORS.onlyString);
      }
      return str.split('').filter((letter) => LATIN_LETTERS.includes(letter))
        .length;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static checkKirillLetters(str) {
    try {
      if (!Helper.isString(str)) {
        throw new Error(ERRORS.onlyString);
      }
      return str.split('').filter((letter) => KIRILL_LETTERS.includes(letter))
        .length;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static isValidName(str) {
    try {
      if (!Helper.isString(str)) {
        throw new Error(ERRORS.onlyString);
      }

      if (!Helper.isEmptyStr(str)) {
        throw new Error(ERRORS.emptyStr);
      }

      if (str.length > 101) {
        throw new Error(ERRORS.notValidNameLength);
      }

      return Boolean(
        !str
          .split('')
          .filter(
            (letter) =>
              !KIRILL_LETTERS.includes(letter) &&
              !LATIN_LETTERS.includes(letter)
          ).length
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static isValidPassword(value) {
    try {
      if (!value) {
        throw new Error(ERRORS.invalidValue);
      }
      if (Array.isArray(value)) {
        throw new Error(ERRORS.invalidValue);
      }

      if (typeof value === 'object') {
        throw new Error(ERRORS.invalidValue);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
