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

  static isEmptyArray(arr) {
    return Array.isArray(arr) && !arr.length;
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

      const strResult = str
        .split('')
        .filter((letter) => LATIN_LETTERS.includes(letter.toLowerCase()))
        .join('');

      return strResult === str;
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
      const strResult = str
        .split('')
        .filter((letter) => KIRILL_LETTERS.includes(letter.toLowerCase()))
        .join('');
      return strResult === str;
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

      if (str.length > MAX_LENGTH.invalidName) {
        throw new Error(ERRORS.notValidNameLength);
      }

      const strResult = str
        .split('')
        .filter(
          (letter) =>
            KIRILL_LETTERS.includes(letter.toLowerCase()) ||
            LATIN_LETTERS.includes(letter.toLowerCase())
        )
        .join('');
      return strResult === str;
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

  static changeStatusInput(
    nodeLabel,
    nodeInput,
    removeLabel,
    removeInput,
    addLabel,
    addInput
  ) {
    nodeLabel.classList.remove(removeLabel);
    nodeInput.classList.remove(removeInput);
    nodeLabel.classList.add(addLabel);
    nodeInput.classList.add(addInput);
  }
  static changeStatusInputOnly(nodeInput, removeInput, addInput) {
    nodeInput.classList.remove(removeInput);
    nodeInput.classList.add(addInput);
  }

  static changePasswordIcon(nodeElem, nodeIconElem) {
    switch (nodeElem.type) {
      case PASSWORD_TYPES.password:
        nodeElem.type = PASSWORD_TYPES.text;
        nodeIconElem.innerHTML = `<svg class="icon-password" ${ICONS.icon__form_show_pqssword}</svg>`;
        break;
      case PASSWORD_TYPES.text:
        nodeElem.type = PASSWORD_TYPES.password;
        nodeIconElem.innerHTML = `<svg class="icon-password" ${ICONS.icon__form_password}</svg>`;
        break;
    }
  }

  static setBackgroundRegistration(node, classNode) {
    if (!document.querySelector(classNode)) {
      node.insertAdjacentHTML('beforebegin', '<div class="background"></div>');
    }
  }

  static addInputView(...args) {
    args.forEach((elem) => elem[0].classList.add(elem[1]));
  }

  static removeInputView(...args) {
    args.forEach((elem) => elem[0].classList.remove(elem[1]));
  }

  static addInputMessage(...args) {
    args.forEach((elem) => (elem[0].innerHTML = elem[1]));
  }

  static removeSpaceInput(...args) {
    args.forEach((elem) => (elem.value = elem.value.replace(/\s/, '')));
  }

  static setUserLocal(login, token) {
    localStorage.setItem('login', login);
    localStorage.setItem('token', token);
  }
}
