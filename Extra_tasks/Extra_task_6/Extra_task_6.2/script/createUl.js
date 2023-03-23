const createUl = (arr) => {
  try {
    if (!VALIDATE.isValidateList(arr)) {
      throw new Error(ERROR.childrenNotvalidate);
    }

    let sum = '';

    arr.forEach((node) => {
      if (!VALIDATE.isValidateStr(node.value)) {
        throw new Error(ERROR.valueListNotValidate);
      }
      sum += `<li>${node.value}</li>`;

      if (!node.children) {
        return node.value;
      }

      sum += createUl(node.children);
    });

    let ul = `<ul>${sum}</ul>`;

    return ul;
  } catch (error) {
    console.error(error);
    return false;
  }
};
