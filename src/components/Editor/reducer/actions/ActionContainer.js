class ActionContainer {
  _actions;
  _actionInstances;

  constructor() {
    this._actions = new Map();
  }

  addAction(actionName, ActionClass, dependencies = []) {
    this._actions.set(actionName, {
      Class: ActionClass,
      dependencies,
    });
  }

  initActions() {
    this._actionInstances = {};
    for (const actionName of this._actions.keys()) {
      const { Class, dependencies } = this._actions.get(actionName);
      const dependencyInstances = dependencies.map((dep) => this._actionInstances[dep]);
      this._actionInstances[actionName] = new Class(actionName, this, ...dependencyInstances);
    }
  }

  getAction(actionName) {
    return this._actionInstances[actionName];
  }
}

export default ActionContainer;
