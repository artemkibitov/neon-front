'use strict';

export default class AbstractActions {
  _defaultKey = '';
  _proxy;

  constructor(defaultKey = '') {
    if (new.target === AbstractActions) {
      throw new TypeError('You cannot create an instance of an abstract class');
    }

    this._defaultKey = defaultKey;
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

  _destructFirstValue(object) {
    return Object.values(object).at(0);
  }
}
