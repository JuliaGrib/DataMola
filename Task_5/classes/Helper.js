class Helper {
  static checkerArray(arr) {
    return typeof arr !== 'object' && arr === null && Array.isArray(arr);
  }

  static isValidTypeId(id) {
    return typeof id === 'string';
  }
}
