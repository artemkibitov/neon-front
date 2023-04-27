'use strict';
import actionProxy from './actions';

const editorReducer = (state, action) => {
  if (typeof actionProxy[action.type] === 'function') {
    try {
      return actionProxy[action.type](state, action);
    } catch (e) {
      throw new Error(e)
    }
  }

  return state;
};

export default editorReducer;
