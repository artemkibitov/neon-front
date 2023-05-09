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

  sizeTotal(option) {
    this._textActions.getValue().length
  }

  initialState() {
  }
}

export default PriceActions;
