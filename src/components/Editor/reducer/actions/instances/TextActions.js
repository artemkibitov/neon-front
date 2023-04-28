'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';

  constructor(defaultKey = 'text') {
    super(defaultKey);
  }

  changeValue(state, {type, ...rest}) {
    const value = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, {value});
  }

  changePosition(state, {type, ...rest}) {
    const position = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, {position});
  }

  getInitialState() {
    return {
      value: this.value,
      position: this.position,
    }
  }

}

export default TextActions;
