'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";
import SizeFactory from "@/components/Editor/reducer/actions/instances/SizeFactory";

class SizeActions extends AbstractActions {
  _sizeFactory;
  _priceActions;
  _textActions;

  selected = null;
  option = {};

  constructor({ container, sizeFactory, textActions }) {
    super('SizeActions');

    this.container = container;
    this._sizeFactory = sizeFactory;
    this._textActions = textActions;
  }

  selectSize(state, { type, key }) {
    const selected = this.getOption(key);

    this.setSelected(selected);

    return this.updateState(this._defaultKey, state, { selected });
  }

  getOption(key) {
    if (!key || !this.option.hasOwnProperty(key)) {
      return this.option;
    }

    return this.option[key];
  }

  setOptionTotal(state, key, total) {
    this.option[key].total = total;

    this.updateState(this._defaultKey, state, { option: this.option })
  }

  calculateSize(state, { ...rest }) {
    const text = this._textActions.getValue();

    console.log(text);

    return this.updateState(this._defaultKey, state);
  }

  initialState() {
    if (typeof this.variants === 'undefined' || !Object.keys(this.variants).length) {
      this._createSizeOptions()._selectOption();
    }

    const [option, selected] = [this.option, this.selected];

    return { option, selected }
  }

  _createSizeOptions() {
    console.log(this);
    // const text = this.container.hasTextActions() ? this.container.getTextActions().getValue() : '';
    this.setOption(this._sizeFactory.createDefaultValue());

    console.log(this.getOption());
    return this;
  }

  _selectOption(key = 'm') {
    console.log(this);
    if (!Object.hasOwn(this.getOption(), key)) throw new TypeError(`variants is not has key: ${key}`);

    this.setSelected(this.getOption()[key]);

    return this;
  }
}

export default SizeActions;
