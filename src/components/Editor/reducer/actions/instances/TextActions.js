'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';

  constructor(defaultKey = 'text') {
    super(defaultKey);
  }

  changeValue(state, { value }) {
    this.setValue(value);

    return this.updateState(
      this._defaultKey,
      state,
      {
        value: this.getValue(),
      }
    );
  }

  changePosition(state, { type, ...rest }) {
    this.setPosition(this._destructFirstValue(rest));

    return this.updateState(
      this._defaultKey,
      state,
      {
        position: this.getPosition(),
      }
    );
  }

  initialState() {
    const [value, position] = [this.value, this.position]

    return { value, position };
  }

}

export default TextActions;
