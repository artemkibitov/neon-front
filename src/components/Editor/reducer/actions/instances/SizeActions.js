'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class SizeActions extends AbstractActions {
  _container;
  _sizeFactory;
  _priceActions;
  _textActions;

  selected = null;
  option = {};

  constructor({ container, sizeFactory, textActions, priceActions }) {
    super('SizeActions');

    this._container = container;
    this._sizeFactory = sizeFactory;
    this._textActions = textActions;
    this._priceActions = priceActions;
  }

  selectSize(state, { type, key }) {
    const selected = this.getOption(key);

    this.setSelected(selected);

    return this.updateState(this._defaultKey, state, { selected });
  }

  calculateSizeState(state) {
    this._calculateSize();

    return this._updateSizeState(state, { option: this.option });
  }


  setOptionTotal(state, key, total) {
    this.option[key].total = total;

    this.updateState(this._defaultKey, state, { option: this.option })
  }

  initialState() {
    if (typeof this.variants === 'undefined' || !Object.keys(this.variants).length) {
      this._createSizeOptions()
        ._calculateSize()
        ._selectOption();
    }

    return {
      option: this.option,
      selected: this.selected
    };
  }

  getOption(key) {
    if (!key || !this.option.hasOwnProperty(key)) {
      return this.option;
    }

    return this.option[key];
  }

  writeOption(key, option) {
    this.option[key] = option;

    return this;
  }

  _calculateSize() {
    const text = this._textActions.getValue();
    const lines = text.split('\n');
    const maxLineLength = lines.reduce((maxLength, line) => Math.max(maxLength, line.length), 0);

    for (const key in this.getOption()) {
      const option = this.getOption(key);
      const { length, height, space, heightSpace } = option;

      option.signLength.length = Math.floor(maxLineLength * length + maxLineLength * space);
      option.signLength.height = Math.floor(lines.length * height + (lines.length - 1) * heightSpace);

      this.writeOption(key, option);
    }

    return this;
  }

  _updateSizeState(state, updates) {
    return this.updateState(this._defaultKey, state, { updates })
  }

  _createSizeOptions() {
    console.log(this);
    this.setOption(this._sizeFactory.createDefaultValue(this._textActions.getValue()));

    return this;
  }

  _selectOption(key = 'm') {
    if (!Object.hasOwn(this.getOption(), key)) throw new TypeError(`variants is not has key: ${key}`);

    this.setSelected(this.getOption()[key]);

    return this;
  }
}

export default SizeActions;
