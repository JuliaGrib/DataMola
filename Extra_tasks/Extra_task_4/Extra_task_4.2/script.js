"use strict";

const LENGTH_VAL = {
  minArr: 1,
  maxArr: 30000,
  minElem: 0,
  maxElem: 10000,
};

const maxProfit = (arr) => {
  try {
    if (arr.length <= LENGTH_VAL.minArr || arr.length >= LENGTH_VAL.maxArr) {
      throw new Error(
        `Длина массива должна быть больше 1 и меньше 30 000. Сейчас длина массива составляет ${arr.length}`
      );
    }

    let res = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= LENGTH_VAL.minElem || arr[i] >= LENGTH_VAL.maxElem) {
        throw new Error(
          `Элемент массива может быть больше нуля и меньше 10 000. Элемент массива равен ${arr[i]}`
        );
      }
      if (arr[i] < arr[i + 1]) {
        res += arr[i + 1] - arr[i];
      }
    }

    return res;
  } catch (error) {
    console.error(error);
  }
};
