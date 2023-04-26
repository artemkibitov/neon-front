'use strict';

import {priceFolding} from "@/components/Editor/reducer/util";

const editorReducer = (state, action) => {
  switch (action.type) {
    case 'change_text_value': {
      return {
        ...state,
        text: {
          position: state.text.position,
          value: action.text,
        }
      };
    }
    case 'change_text_position': {
      return {
        ...state,
        text: {
          position: action.position,
          value: state.text.value,
        }
      }
    }
    case 'select_size': {
      return {
        ...state,
        size: action.size,
        cost: priceFolding(state),
      };
    }
  }

  throw Error('unknown action' + action.type);
}

export default editorReducer;
