'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";
import SizeFactory from "@/components/Editor/reducer/actions/instances/SizeFactory";

class SizeActions extends AbstractActions {
  _sizeFactory;
  option;
  selected;

  constructor(sizeFactory, defaultKey = 'size') {
    super(defaultKey);
    this._sizeFactory = sizeFactory;
  }

  selectSize(state, { type, ...rest }) {
    const selected = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, { selected });
  }

  setOptionTotal(state, key, total) {
    this.option[key].total = total;

    this.updateState(this._defaultKey, state, { option: this.option })
  }

  calculateSize(state, { text }) {
    const char = text.replace(/[\s\n]/g, "").length * cost;
    const space = (text.match(/(?<=\S) (?=\S)/g) || []).length * (cost / 2);
    const newLine = (text.match(/\n/g) || []).length * (cost * 0.15) * heightFactor;
  }

  calculatePrice(state, { type, ...rest }) {
    const { cost, height } = option;
    const heightFactor = height * 0.2;

    const char = text.replace(/[\s\n]/g, "").length * cost;
    const space = (text.match(/(?<=\S) (?=\S)/g) || []).length * (cost / 2);
    const newLine = (text.match(/\n/g) || []).length * (cost * 0.15) * heightFactor;

    return char + space + newLine;
  }

  getOption() {
    return this.option;
  }

  getSelected() {
    return this.selected;
  }

  getInitialState(text = '') {
    if (typeof this.variants === 'undefined' || !Object.keys(this.variants).length) {
      this._createSizeOptions(text)._selectOption();
    }

    console.dir(this.option);
    const [option, selected] = [this.option, this.selected];

    return { option, selected }
  }

  _createSizeOptions(text = '') {
    this.option = this._sizeFactory.createDefaultValue(text);

    return this;
  }

  _selectOption(key = 'm') {
    if (!Object.hasOwn(this.option, key)) throw new TypeError(`variants is not has key: ${key}`);

    this.selected = this.option[key];

    return this;
  }
}

export default SizeActions;
