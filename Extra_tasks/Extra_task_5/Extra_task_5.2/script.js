'use sctict';

const ERROR = {
  lengthNotValidate:
    'Ожидается 1 или 2 аргумента, как написано в задаче, так что не надо пихать больше/меньше!',
};

function add(a, b) {
  try {
    return arguments.length === 2
      ? a + b
      : arguments.length === 1
      ? (val) => val + a
      : new Error(ERROR.lengthNotValidate);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function sub(a, b) {
  try {
    return arguments.length === 2
      ? a - b
      : arguments.length === 1
      ? (val) => val - a
      : new Error(ERROR.lengthNotValidate);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function mul(a, b) {
  try {
    return arguments.length === 2
      ? a * b
      : arguments.length === 1
      ? (val) => val * a
      : new Error(ERROR.lengthNotValidate);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function div(a, b) {
  try {
    return arguments.length === 2
      ? a / b
      : arguments.length === 1
      ? (val) => val / a
      : new Error(ERROR.lengthNotValidate);
  } catch (error) {
    console.error(error);
    return false;
  }
}

function pipe(...arg) {
  return function (val) {
    for (let i = 0; i < arg.length; i++) {
      val = arg[i](val);
    }
    return val;
  };
}

let a = add(1, 2);
console.log(a);

let b = mul(a, 10);
console.log(b);

let sub1 = sub(1);
let c = sub1(b);
console.log(c);

let d = mul(sub(a, 1))(c);
console.log(d);

let doSmth = pipe(add(d), sub(c), mul(b), div(a));
let result = doSmth(0);
console.log(result);

let x = pipe(add(1), mul(2))(3);
console.log(x);
