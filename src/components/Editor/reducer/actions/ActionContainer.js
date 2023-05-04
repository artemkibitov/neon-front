class ActionContainer {
  _actions;
  _actionInstances;

  constructor() {
    this._actions = new Map();

    return new Proxy(this, {
      get: (target, propName, receiver) => {
        if (typeof propName === 'string' && propName !== 'constructor') {
          if (Reflect.has(target, propName)) {
            return Reflect.get(target, propName, receiver);
          } else {
            const operation = propName.slice(0, 3);
            const actionName = propName.slice(3);

            switch (operation) {
              case 'get':
                if (target._actionInstances && target._actionInstances[actionName]) {
                  return () => target.getAction(actionName);
                }
                break;
              case 'has':
                if (target._actionInstances) {
                  return () => actionName in target._actionInstances;
                }
                break;
            }
          }
        }
        return undefined;
      },
    });
  }

  addAction(actionName, ActionClass, dependencies = []) {
    const paramNames = this._getParameterNames(ActionClass);
    const requiresContainer = paramNames.includes('container');

    this._actions.set(actionName, {
      Class: ActionClass,
      dependencies,
      requiresContainer,
    });
  }

  initActions() {
    this._actionInstances = {};
    for (const actionName of this._actions.keys()) {
      const { Class, dependencies, requiresContainer } = this._actions.get(actionName);
      const dependencyInstances = dependencies.map((dep) => this._actionInstances[dep]);
      const args = requiresContainer ? [this, ...dependencyInstances] : dependencyInstances;
      this._actionInstances[actionName] = new Class(...args);
    }
  }

  getAction(actionName) {
    return this._actionInstances[actionName];
  }

  _getParameterNames(func) {
    const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    const ARGUMENT_NAMES = /(?:constructor|function)\s*[^\(]*\(\s*([^\)]*)\)/m;

    const fnStr = func.toString().replace(STRIP_COMMENTS, '');
    const result = ARGUMENT_NAMES.exec(fnStr);
    if (result === null) {
      return [];
    }
    const args = result[1].split(',').map((arg) => arg.trim());
    return args.filter((arg) => arg !== '');
  }
}

export default ActionContainer;
