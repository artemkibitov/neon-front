import AbstractActions from "@/components/Editor/reducer/actions/instances/AbstractActions";

class PriceActions extends AbstractActions {
  _sizeActions;
  _textActions;
  _price;

  constructor(sizeActions, textActions, defaultKey = 'price') {
    super(defaultKey);

    this._sizeActions = sizeActions;
    this._textActions = textActions;
  }

  total(state) {

  }

  eachOption(state, {type, _state}) {
    if (!state) state = _state;

  }

  getInitialValue() {
    return 1;
  }
}

export default PriceActions;
