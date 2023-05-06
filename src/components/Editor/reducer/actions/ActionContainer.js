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

  addAction(actionName, ActionClass, dependencies = {}) {
    this._actions.set(actionName, {
      Class: ActionClass,
      dependencies,
    });
  }

  initActions() {
    this._actionInstances = {};
    for (const actionName of this._actions.keys()) {
      const { Class, dependencies } = this._actions.get(actionName);
      const dependencyInstances = {};
      for (const [key, value] of Object.entries(dependencies)) {
        dependencyInstances[key] = this._actionInstances[value];
      }
      this._actionInstances[actionName] = new Class({ container: this, ...dependencyInstances });
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
