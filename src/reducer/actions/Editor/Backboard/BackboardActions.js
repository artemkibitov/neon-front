import Actions from "@/reducer/Core/Actions/Actions";

class BackboardActions extends Actions {
  _optionFactory;
  _orderActions;

  constructor(backboardModel, { OrderActions, optionFactory, container }) {
    super(backboardModel, container);
    this._optionFactory = optionFactory;
    this._orderActions = OrderActions;
  }

  init(stylesData, colorsData) {
    const backboardModel = this.initialState();

    const backboardStyles = this._optionFactory(stylesData);
    const backboardColors = this._optionFactory(colorsData);
    const defaultStyles = backboardStyles.entries().next().value[1].key;
    const defaultColors = backboardColors.entries().next().value[1].key;

    backboardModel.setStyles(backboardStyles)
      .setSelectedStyle(defaultStyles)
      .setColors(backboardColors)
      .setSelectedColor(defaultColors);

    return this.initialState();
  }

  selectStyle(key) {
    const backboardModel = this.initialState();
    const styles = backboardModel.getStyles();

    if (styles.has(key)) backboardModel.setSelectedStyle(key);

    return this.initialState();
  }

  selectColor(key) {
    const backboardModel = this.initialState();
    const colors = backboardModel.getColors();

    if (colors.has(key)) backboardModel.setSelectedColor(key);

    return this.initialState();
  }
}

export default BackboardActions;
