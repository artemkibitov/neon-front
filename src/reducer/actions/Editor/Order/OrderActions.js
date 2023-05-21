import Actions from '@/reducer/Core/Actions/Actions';

class OrderActions extends Actions {
  _signActions;
  _backboardActions;

  constructor(orderModel, { SignActions, BackboardActions, container }) {
    super(orderModel, container);
    this._signActions = SignActions;
    this._backboardActions = BackboardActions;
  }

  init() {
    this.calculateTotal();

    return this.initialState();
  }

  calculateTotal() {
    const total = this._signTotal() + this._backboardTotal();

    this.initialState().setTotal(total);

    return this.initialState();
  }

  _signTotal() {
    const signModel = this._container.getAction('SignActions').initialState();

    const { price } = signModel.getSelectedPriceOption();
    const { waterproof, waterproofPrice } = signModel;

    if (!waterproof) return price;

    return price + waterproofPrice;
  }

  _backboardTotal() {
    const backboardModel = this._container.getAction('BackboardActions').initialState();


    const { price: style } = backboardModel.getSelectedStyle();
    const { price: color } = backboardModel.getSelectedColor();

    return style + color;
  }
}

export default OrderActions;
