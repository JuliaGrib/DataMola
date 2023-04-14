class ResetView extends View {
  constructor(id) {
    super(id);
  }

  display(elem, id) {
    this.nodeElem.insertAdjacentHTML(
      'beforeend',
      `<div class="reset__background">
      <div class="reset">
            <p class="reset__mes">Reset all?</p>
            <div class="reset__btns">
                <button class="button button_secondary button_cancel">Cancel</button>
                <button class="button button_primary button_reset-true">Reset</button>
            </div>
        </div>
      </div>
    `
    );
    this._addEvents(elem, id);
  }

  _addEvents(elem, id) {
    const resetView = document.querySelector('.reset__background');
    const cancelBtn = document.querySelector('.button_cancel');
    const resetBtn = document.querySelector('.button_reset-true');

    cancelBtn.addEventListener('click', () => {
      resetView.remove();
    });

    resetBtn.addEventListener('click', () => {
      switch (elem) {
        case 'addTask':
          resetView.remove();
          const popup = document.querySelector('.popup__background');
          popup.remove();
          taskController.createPopupView();
          break;
        case 'editTask':
          resetView.remove();
          taskController.editTask(id);
          break;
        case 'editUser':
          resetView.remove();
          taskController.createUserEditPage();
          break;
      }
    });
  }
}
