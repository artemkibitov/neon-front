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

  total(state) {

  }

  eachOption(state, {type, _state}) {
    if (!state) state = _state;

  }

  calculate(state, { type, option }) {
    const { cost, height } = option;
    const heightFactor = height * 0.2;

    const char = text.replace(/[\s\n]/g, "").length * cost;
    const space = (text.match(/(?<=\S) (?=\S)/g) || []).length * (cost / 2);
    const newLine = (text.match(/\n/g) || []).length * (cost * 0.15) * heightFactor;

    return char + space + newLine;
  }

  initialState() {
  }
}

export default PriceActions;
