'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';

  constructor(defaultKey = 'text') {
    super(defaultKey);
  }

  changeValue(state, { type, value }) {
    // this.value = this._destructFirstValue(rest);

    return this.updateState(
      this._defaultKey,
      state,
      {
        value
      }
    );
  }

  changePosition(state, { type, ...rest }) {
    this.position = this._destructFirstValue(rest);

    return this.updateState(
      this._defaultKey,
      state,
      {
        position: this.position
      }
    );
  }

  initialState() {
    const [value, position] = [this.value, this.position]

    return { value, position };
  }

}

export default TextActions;
