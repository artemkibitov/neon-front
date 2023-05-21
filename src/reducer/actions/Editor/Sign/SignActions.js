import Actions from "@/reducer/Core/Actions/Actions";

class SignActions extends Actions {
  constructor(signModel, { textActions, optionFactory, OrderActions ,container }) {
    super(signModel, container);
    this._textActions = textActions;
    this._optionFactory = optionFactory;
    this._orderActions = OrderActions;
  }

  init(
    sizeOptionData,
    priceOptionData,
    powerAdapterData,
    lightOptionData,
    selected = 'm',
    selectedLight = 'cyan'
  ) {
    const signModel = this.initialState();

    const sizeOption = this._optionFactory(sizeOptionData);
    const priceOption = this._optionFactory(priceOptionData);
    const powerAdapter = this._optionFactory(powerAdapterData);
    const lightOption = this._optionFactory(lightOptionData);

    signModel.setSizeOption(sizeOption)
      .setPriceOption(priceOption)
      .setSelected(selected)
      .setPowerAdapter(powerAdapter)
      .setLightOption(lightOption)
      .setSelectedLight(selectedLight);

    this.calculate();

    return this.initialState();
  }

  calculate() {
    this.calculateSize();
    this.calculatePrice();

    return this.initialState();
  }

  selectLight(key) {
    const signModel = this.initialState();

    if (signModel.getLightOption().has(key)) signModel.setSelectedLight(key);

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
    this.waterproofPrice();
    this._orderActions.calculateTotal()

    return this.initialState();
  }

  calculatePrice() {
    const textModel = this._textActions.initialState();
    const priceOption = this.initialState().getPriceOption();

    const char = textModel.getChars();
    const spaces = textModel.getSpaces();
    const emptyLines = textModel.getEmptyLines();
    const nonEmptyLines = textModel.getNonEmptyLines() - 1;

    priceOption.forEach(value => {
      const { cost, space, lineSpace } = value;

      const charCost = char * cost;
      const spaceCost = spaces * (cost / space);
      const emptyLineCoast = emptyLines * (cost / lineSpace);
      const nonEmptyLineCoast = nonEmptyLines * (cost / lineSpace);
      const price = charCost + spaceCost + emptyLineCoast + nonEmptyLineCoast;

      value.price = Math.round(price);
    });

    this.waterproofPrice();

    return this.initialState();
  }

  waterproofPrice(percent = 20) {
    const { price } = this.initialState().getSelectedPriceOption();

    this.initialState()
      .setWaterproofPrice(Math.round(price * percent / 100));

    return this.initialState();
  }

  selectWaterproof(value = false) {
    this.initialState().setWaterproof(value);
    this._orderActions.calculateTotal();

    return this.initialState();
  }
}

export default SignActions;
