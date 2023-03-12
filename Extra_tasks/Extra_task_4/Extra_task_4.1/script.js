"use strict";

const findMaxSubArray = (arr) => {
  if (!Array.isArray(arr)) {
    return "Переданное значение не массив";
  }

  let current = 0;
  let result = 0;

  arr.forEach((elem) => {
    current = Math.max(0, current + elem);
    result = Math.max(result, current);
  });

  return result;
};
