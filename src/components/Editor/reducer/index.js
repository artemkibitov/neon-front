'use strict';

import {priceFolding} from "@/components/Editor/reducer/util";

const editorReducer = (state, action) => {
  switch (action.type) {
    case 'change_text': {
      return {
        ...state,
        text: action.text
      };
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
