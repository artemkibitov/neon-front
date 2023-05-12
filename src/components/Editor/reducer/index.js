'use strict';
import initialState from "@/components/Editor/reducer/state";
import actionContainer from "@/components/Editor/reducer/actions";

const editorReducer = (state = initialState, action) => {
  const modelName = action.type.replace("Actions", "Model");
  const actionInstance = actionContainer.getAction(action.type);

  if (!action.payload) action.payload = {};

  if (actionInstance && typeof actionInstance[action.method] === 'function') {
    try {
      const newState = actionInstance[action.method](...Object.values(action.payload));
      return {
        ...state,
        [modelName]: newState,
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  return state;
};


export default editorReducer;
