'use strict';

export default class AbstractActions {
  _defaultKey = '';
  _proxy;

  constructor(defaultKey = '', proxy) {
    if (new.target === AbstractActions) {
      throw new TypeError('You cannot create an instance of an abstract class');
    }

    this._defaultKey = defaultKey;
    this._proxy = proxy;
    return new Proxy(this, this._createProxyHandler(proxy));
  }

  updateState(key, state, updates) {
    return {
      ...state,
      [key]: {
        ...state[key],
        ...updates,
      },
    };
  }

  initialize(proxyInstance) {
    this._proxy = proxyInstance;
  }

  static getInitialState() {
    return {};
  }

  _createProxyHandler() {
    return {
      get: (target, propName, receiver) => {
        if (typeof propName === 'string') {
          const operation = propName.slice(0, 3);
          const propertyName = propName.slice(3).charAt(0).toLowerCase() + propName.slice(4);
          const [get, set] = ['get', 'set'];

          if (operation === get || operation === set) {
            if (propName in target) {
              return Reflect.get(target, propName, receiver);
            } else if (propertyName in target) {
              switch (operation) {
                case get:
                  return () => target[propertyName];
                case set:
                  return (value) => {
                    target[propertyName] = value;
                  };
              }
            } else {
              console.warn(`Neither method "${propName}" nor property "${propertyName}" exists in the target object.`);
              return () => undefined;
            }
          }
        }
        return Reflect.get(target, propName, receiver);
      },
    };
  }


  _destructFirstValue(object) {
    return Object.values(object).at(0);
  }
}
