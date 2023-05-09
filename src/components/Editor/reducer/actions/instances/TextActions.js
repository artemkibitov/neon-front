'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';
  // charState = {
  //   chars: 0,
  //   spaces: 0,
  //   newLines: 0,
  // };

  constructor() {
    super('TextActions');
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

  // setCharState({chars, spaces, newLines}) {
  //
  // }
  //
  // setCharStateChars(value) {
  //   this.charState.chars = value || this.charState.chars;
  //
  //   return this;
  // }
  //
  // setCharStateSpaces(value) {
  //
  // }
  //
  // countChars() {
  //   const matches = this.value.match(/\S/g);
  //   return matches ? matches.length : 0;
  // }
  //
  // countSpaces() {
  //   const matches = this.value.match(/ /g);
  //   return matches ? matches.length : 0;
  // }
  //
  // countNewLines() {
  //   const matches = this.value.match(/\n/g);
  //   return matches ? matches.length : 0;
  // }

  initialState() {
    const [value, position] = [this.value, this.position]

    return { value, position };
  }

}

export default TextActions;
