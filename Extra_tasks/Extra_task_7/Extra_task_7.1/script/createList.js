const createList = (title, list) => {
  try {
    if (!VALIDATE.isValidateStr(title)) {
      throw new Error(ERROR.titleNotValidate);
    }
    if (!VALIDATE.isValidateList(list)) {
      throw new Error(ERROR.listNotValidate);
    }

    document.body.innerHTML = `
      <h2>${title}</h2>
      ${createUl(list) || ERROR.valueNotValidate}
      `;
  } catch (error) {
    console.error(error);
    return false;
  }
};
