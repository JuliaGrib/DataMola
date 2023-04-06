const createUl = (arr) => {
  try {
    if (!VALIDATE.isValidateList(arr)) {
      throw new Error(ERROR.childrenNotvalidate);
    }

    let liElements = '';

    arr.forEach((node) => {
      if (!VALIDATE.isValidateStr(node.value)) {
        throw new Error(ERROR.valueListNotValidate);
      }
      liElements += `<li>${node.value}</li>`;

      if (!node.children) {
        return node.value;
      }

      liElements += createUl(node.children);
    });

    return `<ul>${liElements}</ul>`;
  } catch (error) {
    console.error(error);
    return false;
  }
};
