import Actions from "@/reducer/actions/Actions";

class SignActions extends Actions {
  constructor(signModel, { textActions, optionFactory, container }) {
    super(signModel, container);
    this._textActions = textActions;
    this._optionFactory = optionFactory;
  }

  init(sizeOptionData, priceOptionData, selected = 'm') {
    const signModel = this.initialState();

    const sizeOption = this._optionFactory(sizeOptionData);
    const priceOption = this._optionFactory(priceOptionData);

    signModel.setSizeOption(sizeOption);
    signModel.setPriceOption(priceOption);
    signModel.setSelected(selected);

    this.calculate();

    return this.initialState();
  }

  calculate() {
    const size = this.calculateSize();

    return this.initialState();
  }

  calculateSize() {
    const textModel = this._textActions.initialState();

    const maxLineLength = textModel.getMaxLineLength();
    const emptyLines = textModel.getEmptyLines();
    const nonEmptyLines = textModel.getNonEmptyLines();

    this.initialState().getSizeOption().forEach(value => {
      const { width, height, space, lineSpace } = value;

      const nonEmptyLineHeight = nonEmptyLines > 1 ?
        nonEmptyLines * height + (nonEmptyLines - 1) * lineSpace :
        nonEmptyLines * height;

      const emptyLineHeight = (emptyLines > 0) ? emptyLines * lineSpace : 0;

      const totalHeight = nonEmptyLineHeight + emptyLineHeight;

      value.totalSize.width = Math.floor(maxLineLength * width + maxLineLength * space);
      value.totalSize.height = totalHeight < 0 ? 0 : totalHeight;
    });

    return this.initialState();
  }

  selectOption(key) {
    const signModel = this.initialState();

    if (signModel.getSizeOption().has(key)) signModel.setSelected(key)

    return this.initialState();
  }

  calculatePrice() {
    const textModel = this._textActions.initialState();


  }
}

export default SignActions;
