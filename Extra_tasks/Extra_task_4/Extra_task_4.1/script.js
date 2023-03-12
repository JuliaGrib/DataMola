"use strict";

const findMaxSubArray = (arr) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Переданное значение не массив");
    }
    if (arr.length === 0) {
      throw new Error("Массив не может быть пустым");
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
