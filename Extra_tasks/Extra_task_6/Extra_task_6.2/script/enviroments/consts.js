const ERROR = {
  titleNotValidate: 'Тайтл не оч',
  listNotValidate: 'Лист не оч',
  valueListNotValidate:
    'Я конечно не эксперт, но по моему тут должны быть только string',
  valueNotValidate: 'value not validate',
  childrenNotvalidate: 'Children должен быть или [] или null',
};

const VALIDATE = {
  isValidateStr: (str) => typeof str === 'string' && str.trim(),
  isValidateList: (arr) => Array.isArray(arr) && arr.length,
};
