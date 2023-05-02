﻿'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class TextActions extends AbstractActions {
  value = 'твій надпис';
  position = 'left';

  constructor(defaultKey = 'text') {
    super(defaultKey);
  }

  changeValue(state, { type, ...rest }) {
    this.value = this._destructFirstValue(rest);

    return this.updateState(
      this._defaultKey,
      state,
      {
        value: this.value
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

  getInitialState() {
    const [value, position] = [this.value, this.position]

    return { value, position };
  }

}

export default TextActions;
