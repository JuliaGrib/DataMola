"use strict";

const maxProfit = (arr) => {
  if (arr.length < 1 || arr.length >= 3 * 10 ** 4) {
    return `Длина массива должна быть больше 1 и меньше 30 000. Сейчас длина массива составляет ${arr.length}`;
  }

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] >= 10 ** 4) {
      return `Элемент массива может быть больше нуля и меньше 10 000. Элемент массива равен ${arr[i]}`;
    }
    if (arr[i] < arr[i + 1]) {
      res += arr[i + 1] - arr[i];
    }
  }

  return res;
};
