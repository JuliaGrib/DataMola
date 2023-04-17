class ErrorPageView extends View {
  constructor(id) {
    super(id);
  }

  display() {
    this.nodeElem.innerHTML = this._createBack() + this._createInfo();
    this._addEvents();
  }

  _addEvents() {
    const backMain = document.querySelector('.back');
    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });
    const dino = document.getElementById('dino');
    const cactus = document.querySelector('.cactus');
    const resultGame = document.querySelector('.result-game');

    document.addEventListener('keydown', function (event) {
      if (!cactus.classList.contains('cactus_pause')) {
        cactus.classList = 'cactus cactus_move';
        resultGame.innerHTML = 'Press space to play';
        if (dino.classList != 'jump') {
          dino.classList.add('jump');
        }
        setTimeout(function () {
          dino.classList.remove('jump');
        }, 300);
      } else {
        cactus.classList = 'cactus';

        resultGame.innerHTML = 'Press space to play';
      }
    });

    let isAlive = setInterval(function () {
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
      );
      let cactusleft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')
      );

      if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 140) {
        resultGame.innerHTML = `You lose :P`;
        cactus.classList = 'cactus cactus_move cactus_pause';
      }
    }, 10);
  }

  _createBack() {
    return `
        <div class="container">
        <div class="main__content">
        <div class="back">
        ${ICONS.icon__back}
            <a class="link back__text" href="#" > My tasks </a>
        </div>
        </div>
    </div>
    `;
  }
  _createInfo() {
    return `
    <div class="container">
        <div class="error-info">
            <h1 class="title title_error">404</h1>
            <p class="error__text">Page not found!</p>
            <p class="result-game">Press space to play</p>
        </div>
        ${this._createGame()}
    </div>
    `;
  }

  _createGame() {
    return `
    <div class="game">
      <div id="dino"></div>
      <div class="cactus"></div>
    </div>
    `;
  }
}
