'use strict';
import BaseActions from "@/components/Editor/reducer/actions/instances/BaseActions";

class TextActions extends BaseActions {
  static structure;

  static {
    TextActions.structure = {
      value: 'твій надпис',
      position: 'left',
    }
  }

  constructor(defaultKey = 'text') {
    super(defaultKey);
  }

  changeValue(state, { type, ...rest }) {
    const value = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, { value });
  }

  changePosition(state, { type, ...rest }) {
    const position = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, { position });
  }
}

export default TextActions;
