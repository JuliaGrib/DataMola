"use strict";

const ERROR = {
  notArray: "Переданное значение не массив",
  emptyArray: "Массив не может быть пустым",
};

const findMaxSubArray = (arr) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error(ERROR.notArray);
    }
    if (!arr.length) {
      throw new Error(ERROR.emptyArray);
    }

    let current = 0;
    let result = 0;

    arr.forEach((elem) => {
      current = Math.max(0, current + elem);
      result = Math.max(result, current);
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
