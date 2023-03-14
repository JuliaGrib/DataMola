"use strict";

const LENGTH_VAL = {
  minArr: 1,
  maxArr: 30000,
  minElem: 0,
  maxElem: 10000,
};

const ERROR = {
  arrLength: `Длина массива должна быть больше ${LENGTH_VAL.minArr} и меньше ${LENGTH_VAL.maxArr}.`,
  elemLength: `Элемент массива может быть больше ${LENGTH_VAL.minElem} и меньше ${LENGTH_VAL.maxElem}.`,
};

const maxProfit = (arr) => {
  try {
    if (arr.length <= LENGTH_VAL.minArr || arr.length >= LENGTH_VAL.maxArr) {
      throw new Error(ERROR.arrLength);
    }

    let res = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= LENGTH_VAL.minElem || arr[i] >= LENGTH_VAL.maxElem) {
        throw new Error(ERROR.elemLength);
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
