'use strict';
import actionProxy from './actions';
import actionContainer from "@/components/Editor/reducer/actions/instances";

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
