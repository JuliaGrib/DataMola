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
