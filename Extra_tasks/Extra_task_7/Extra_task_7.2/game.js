const wrap = document.querySelector('.wrap');
const resultMes = document.querySelector('.result');

let arrNodesItems;
let arrValues;
let stopGame;

function startGame() {
  wrap.innerHTML = `
  <div class="cell" data-num="0"></div>
  <div class="cell" data-num="1"></div>
  <div class="cell" data-num="2"></div>

  <div class="cell" data-num="3"></div>
  <div class="cell" data-num="4"></div>
  <div class="cell" data-num="5"></div>

  <div class="cell" data-num="6"></div>
  <div class="cell" data-num="7"></div>
  <div class="cell" data-num="8"></div>
`;
  resultMes.innerHTML = '';
  arrNodesItems = document.querySelectorAll('[data-num]');
  arrValues = [null, null, null, null, null, null, null, null, null];
  stopGame = false;
}

function concat(a, b, c) {
  let result = arrValues[a] + arrValues[b] + arrValues[c];

  if (result === VALUES.winUser || result === VALUES.winBot) {
    return result;
  }

  switch (result) {
    case 'xxnull':
      return [VALUES.user, c];

    case 'xnullx':
      return [VALUES.user, b];

    case 'nullxx':
      return [VALUES.user, a];

    case 'oonull':
      return [VALUES.bot, c];

    case 'onullo':
      return [VALUES.bot, b];

    case 'nulloo':
      return [VALUES.bot, a];
  }
}

function changeColorAndStop(a, b, c) {
  arrNodesItems[a].classList.add('win');
  arrNodesItems[b].classList.add('win');
  arrNodesItems[c].classList.add('win');

  stopGame = true;
}

function checkWin() {
  let result;
  for (let i = 0; i < 3; i++) {
    result = concat(i, i + 3, i + 6);

    if (result === VALUES.winUser || result === VALUES.winBot) {
      changeColorAndStop(i, i + 3, i + 6);
      resultMes.innerHTML =
        result === VALUES.winUser ? VALUES.winMes : VALUES.loseMes;
    }
  }

  for (let i = 0; i <= 6; i += 3) {
    result = concat(i, i + 1, i + 2);

    if (result === VALUES.winUser || result === VALUES.winBot) {
      changeColorAndStop(i, i + 1, i + 2);
      resultMes.innerHTML =
        result === VALUES.winUser ? VALUES.winMes : VALUES.loseMes;
    }
  }

  result = concat(0, 4, 8);
  if (result === VALUES.winUser || result === VALUES.winBot) {
    changeColorAndStop(0, 4, 8);
    resultMes.innerHTML =
      result === VALUES.winUser ? VALUES.winMes : VALUES.loseMes;
  }

  result = concat(2, 4, 6);
  if (result === VALUES.winUser || result === VALUES.winBot) {
    changeColorAndStop(2, 4, 6);
    resultMes.innerHTML =
      result === VALUES.winUser ? VALUES.winMes : VALUES.loseMes;
  }
}

function botZero() {
  let result;
  for (let i = 0; i < 3; i++) {
    result = concat(i, i + 3, i + 6);

    if (CHECK.check(VALUES.bot)) {
      addNodeBot(result[1]);
      return;
    }
  }

  for (let i = 0; i <= 6; i += 3) {
    result = concat(i, i + 1, i + 2);

    if (CHECK.check(VALUES.bot)) {
      addNodeBot(result[1]);
      return;
    }
  }

  result = concat(0, 4, 8);
  if (CHECK.check(VALUES.bot)) {
    addNodeBot(result[1]);
    return;
  }

  result = concat(2, 4, 6);
  if (CHECK.check(VALUES.bot)) {
    addNodeBot(result[1]);
    return;
  }

  for (let i = 0; i < 3; i++) {
    result = concat(i, i + 3, i + 6);

    if (CHECK.check(VALUES.user)) {
      addNodeBot(result[1]);
      return;
    }
  }

  for (let i = 0; i <= 6; i += 3) {
    result = concat(i, i + 1, i + 2);

    if (CHECK.check(VALUES.user)) {
      addNodeBot(result[1]);
      return;
    }
  }

  result = concat(0, 4, 8);
  if (CHECK.check(VALUES.user)) {
    addNodeBot(result[1]);
    return;
  }

  result = concat(2, 4, 6);
  if (CHECK.check(VALUES.user)) {
    addNodeBot(result[1]);
    return;
  }

  const tempArr = [];

  for (let i = 0; i < 9; i++) {
    if (arrValues[i] === null) {
      tempArr.push(i);
    }
  }

  const randIndexTempArr = Math.floor(Math.random() * tempArr.length);

  const randNull = tempArr[randIndexTempArr];

  if (!arrNodesItems[randNull]) {
    stopGame === true;
    resultMes.innerHTML = VALUES.tryAgain;
  } else {
    addNodeBot(randNull);
  }
}

addEventListener('click', function (event) {
  if (stopGame === true) {
    return;
  }

  if (event.target.className === 'cell' && event.target.textContent === '') {
    event.target.classList.add('x');
    event.target.style.color = '#D9ADAD';
    event.target.innerHTML = VALUES.user;

    arrValues[event.target.dataset.num] = VALUES.user;
  } else {
    return;
  }

  checkWin();

  if (stopGame === true) {
    return;
  }

  botZero();

  checkWin();
});

function addNodeBot(elem) {
  arrNodesItems[elem].classList.add(VALUES.bot);
  arrNodesItems[elem].innerHTML = VALUES.bot;
  arrValues[elem] = VALUES.bot;
}
