'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";
import CharStateFactory from "@/components/Editor/reducer/actions/instances/Text/CharStateFactory";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';
  charState = null;

  constructor() {
    super('TextActions');
    this.charState = CharStateFactory.create(this.value);
  }

  changeValue(state, { value }) {
    this.setValue(value);
    this.charState.count(this.getValue());

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
    const [value, position, charState] = [this.value, this.position, this.charState];

    return { value, position, charState};
  }
}

export default TextActions;
