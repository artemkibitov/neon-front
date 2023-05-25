'use strict';
export const createOrderData = ({ OrderModel, BackboardModel, SignModel , img = ''}) => {
  const sign = {
    width: SignModel.getSelectedSizeOption().totalSize.width,
    height: SignModel.getSelectedSizeOption().totalSize.height,
    light_color: SignModel.selectedLight,
    size: SignModel.getSelectedStyle().size,
    waterproof: SignModel.waterproof ? SignModel.waterproofPrice : 0,
  };
  const backboard = {
    backboard_style: BackboardModel.getSelectedStyle(),
    backboard_color: BackboardModel.getSelectedColor(),
  };
  const order = {
    ...OrderModel,
    lastname: OrderModel.lastName,
    phone_number: OrderModel.phone,
  }

  return {
    ...sign,
    ...backboard,
    ...order,
    img,
  }
};

export const createCustomOrder = ({ OrderModel }) => {
  return {
    ...OrderModel,
    last_name: OrderModel.lastName,
    phone_number: OrderModel.phone,
  }
}
