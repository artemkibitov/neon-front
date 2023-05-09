import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class PriceActions extends AbstractActions {
  _sizeActions;
  _textActions;
  _sizeFactory;

  constructor({ sizeActions, textActions }) {
    super('PriceActions');

    this._sizeActions = sizeActions;
    this._textActions = textActions;
  }

  textCost(state) {
    const charState = this._textActions.getCharState();
    const option = this._sizeActions.getOption();
    const spaceFactor = 4;
    const {char, spaces, lines } = charState.getState();

    for (const key in option) {
      const { cost } = this._sizeActions.getOption(key);

      const spaceCost = Math.floor(spaces * cost / spaceFactor);
      const lineCost = Math.floor(lines * cost / spaceFactor);
      const chatCost = Math.floor(char * cost);

      const total = spaceCost + lineCost + chatCost;

      this._sizeActions.setOptionTotal(state, key, total);
    }

    return this.updateState(this._defaultKey, state, {});
  }

  initialState() {
  }
}

export default PriceActions;
