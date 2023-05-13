'use strict';
import Actions from "@/reducer/actions/Actions";

class SizeActions extends Actions {
  _textActions = null;

  constructor(sizeModel, { textActions, optionFactory, container }) {
    super(sizeModel, container);

    this._textActions = textActions;
    this._optionFactory = optionFactory;
  }

  init(optionData, selected = 'm') {
    const sizeModel = this.initialState();
    const option = this._optionFactory(optionData);

    sizeModel.setOption(option);
    sizeModel.setSelected(selected);

    this.calculate();

    return this.initialState();
  }

  selectOption(key) {
    const sizeModel = this.initialState();
    const option = sizeModel.getOption();

    if (option.has(key)) {
      sizeModel.setSelected(key);
    }

    return this.initialState();
  }

  // calculate() {
  //   const textModel = this._textActions.initialState();
  //   const sizeModel = this.initialState();
  //
  //   const lines = textModel.getLines();
  //   const maxLineLength = textModel.getMaxLineLength();
  //
  //   const emptyLines = textModel.getEmptyLines();
  //   const nonEmptyLines = textModel.getNonEmptyLines();
  //
  //   sizeModel.getOption().forEach(value => {
  //     const { width, height, space, lineSpace } = value;
  //
  //     let totalHeight = 0;
  //
  //     const nonEmptyLineHeight = nonEmptyLines > 1 ?
  //       nonEmptyLines * height + (nonEmptyLines - 1) * lineSpace :
  //       nonEmptyLines * height;
  //
  //     const emptyLineHeight = (emptyLines > 0) ? emptyLines * lineSpace : 0;
  //
  //     totalHeight = nonEmptyLineHeight + emptyLineHeight;
  //
  //     value.totalSize.width = Math.floor(maxLineLength * width + maxLineLength * space);
  //     value.totalSize.height = totalHeight < 0 ? 0 : totalHeight;
  //   });
  //
  //   return this.initialState();
  // }


  //
  // _updateSizeState(state, updates) {
  //   return this.updateState(this._defaultKey, state, { updates })
  // }
  //
  // _createSizeOptions() {
  //   console.log(this);
  //   this.setOption(this._sizeFactory.createDefaultValue(this._textActions.getValue()));
  //
  //   return this;
  // }
  //
  // _selectOption(key = 'm') {
  //   if (!Object.hasOwn(this.getOption(), key)) throw new TypeError(`variants is not has key: ${key}`);
  //
  //   this.setSelected(this.getOption()[key]);
  //
  //   return this;
  // }
}

export default SizeActions;
