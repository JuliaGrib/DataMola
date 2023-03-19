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

  static checkCommentsArray(com) {
    if (Array.isArray(com) && com.length === 0) {
      return true;
    }
    if (Array.isArray(com) && com.length > 0) {
      const commLength = com.length;
      com = com.filter((com) => Comment.validateComment(com));

      return commLength === com.length ? true : false;
    }
  }
}
