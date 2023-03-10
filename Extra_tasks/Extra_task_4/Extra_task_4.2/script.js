"use strict";

const maxProfit = (arr) => {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      res += arr[i + 1] - arr[i];
    }
  }

  return res;
};
