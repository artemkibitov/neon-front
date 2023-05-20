export default class Actions {
  _container = null;
  _model = null;

  constructor(model, container) {
    if (new.target === Actions) {
      throw new TypeError("You cannot create an instance of an abstract class");
    }

    this._container = container;
    this._model = model;
  }

  initialState() {
    return this._model;
  }
}
