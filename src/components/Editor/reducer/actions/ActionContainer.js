class ActionContainer {
  _actions;

  constructor() {
    this._actions = new Map();
  }

  addAction(actionName, actionClass, dependencies = []) {
    const actionInstance = new actionClass();
    this._actions.set(actionName, actionInstance);

    const proxyInstance = new Proxy(
      actionInstance,
      {
        get: (target, prop, receiver) => {
          if (prop.startsWith('get')) {
            const dependencyName = prop.slice(3);
            const dependentAction = this.getAction(dependencyName);
            return () => dependentAction;
          }

          return Reflect.get(target, prop, receiver);
        },
    });

    for (const dependency of dependencies) {
      const dependentAction = this.getAction(dependency);
      if (dependentAction && actionInstance.initialize) {
        actionInstance.initialize(proxyInstance);
      }
    }
  }

  getAction(actionName) {
    return this._actions.get(actionName);
  }
}

export default ActionContainer;
