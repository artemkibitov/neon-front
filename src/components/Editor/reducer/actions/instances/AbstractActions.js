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
        if (typeof propName === 'string' && propName.startsWith('get')) {
          const actionName = propName.slice(3) + 'Actions';
          return this._proxy?.getAction(actionName);
        }
        return Reflect.get(target, propName, receiver);
      },
    };
  }


  _destructFirstValue(object) {
    return Object.values(object).at(0);
  }
}
