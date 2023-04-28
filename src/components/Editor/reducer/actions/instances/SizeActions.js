'use strict';
import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";
import SizeFactory from "@/components/Editor/reducer/actions/instances/SizeFactory";

class SizeActions extends AbstractActions {
  _sizeFactory;
  variants;
  selected;

  constructor(defaultKey = 'size') {
    super(defaultKey);
    this._sizeFactory = new SizeFactory();
  }

  selectSize(state, {type, ...rest}) {
    const selected = this._destructFirstValue(rest);

    return this.updateState(this._defaultKey, state, {selected});
  }


  getInitialState() {
    if (typeof this.variants === 'undefined' || !Object.keys(this.variants).length) {
      this._createSizeVariants()._setSize()
    }

    return {
      variants: this.variants,
      selected: this.selected,
    }
  }

  _createSizeVariants() {
    this.variants = SizeFactory.createDefaultValue();

    return this;
  }

  _setSize(key = 's') {
    if (!Object.hasOwn(this.variants, key)) throw new TypeError('this.variants is not has key');

    this.selected = this.variants[key];

    return this;
  }

}

export default SizeActions;
