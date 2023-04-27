'use strict';

export default class BaseActions {
  _defaultKey = '';

  constructor(defaultKey = '') {
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

  _destructFirstValue(object) {
    return Object.values(object).at(0);
  }
}
