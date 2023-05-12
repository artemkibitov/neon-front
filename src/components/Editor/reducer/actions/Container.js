export default class Container {
  constructor() {
    this._actions = new Map();
    this._dependencies = new Map();
    this._models = new Map();
  }

  add(name, ActionClass, ModelClass, dependencies = {}) {
    if (this._actions.has(name)) {
      throw new Error(`Action with name "${name}" already exists`);
    }

    const modelInstance = new ModelClass();

    this._actions.set(name, ActionClass);
    this._dependencies.set(name, dependencies);
    this._models.set(name, modelInstance);

    return this;
  }

  getAction(name) {
    return this._actions.get(name);
  }

  init() {
    const visited = new Set();

    const initializeAction = (name) => {
      if (visited.has(name)) {
        return;
      }

      visited.add(name);

      const ActionClass = this._actions.get(name);
      const modelInstance = this._models.get(name);
      const dependencies = this._dependencies.get(name);

      const resolvedDependencies = {};

      for (const [depName, depValue] of Object.entries(dependencies)) {
        if (this._actions.has(depValue)) {
          initializeAction(depValue);
          resolvedDependencies[depName] = this._actions.get(depValue);
        } else {
          resolvedDependencies[depName] = depValue;
        }
      }

      const actionInstance = new ActionClass(modelInstance, { ...resolvedDependencies, container: this });

      this._actions.set(name, actionInstance);
    };

    for (const name of this._actions.keys()) {
      initializeAction(name);
    }

    return this;
  }
}
