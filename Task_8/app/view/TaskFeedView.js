class TaskFeedView extends View {
  _position = 'kanban';
  constructor(id) {
    super(id);
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  display(tasks) {
    console.log(tasks);
  }
}
