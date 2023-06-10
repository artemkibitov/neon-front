export const createOrderData = ({ OrderModel, BackboardModel, SignModel }) => {
  const sign = {
    width: SignModel.getSelectedSizeOption().totalSize.width,
    height: SignModel.getSelectedSizeOption().totalSize.height,
    light_color: SignModel.getSelectedLightOption().title,
    size: SignModel.getSelectedSizeOption().name,
    waterproof: SignModel.getWaterproof() ? SignModel.getWaterproofPrice() : 0,
  };
  const backboard = {
    backboard_style: BackboardModel.getSelectedStyle().title,
    backboard_color: BackboardModel.getSelectedColor().title,
  };
  const order = {
    name: OrderModel.getName(),
    lastname: OrderModel.getLastName(),
    phone_number: OrderModel.getPhone(),
    city: OrderModel.getCity(),
    total: OrderModel.getTotal(),
    custom: OrderModel.getCustom(),
    img: OrderModel.getHash(),
    order_hash: OrderModel.getHash(),
  }

  return {
    ...sign,
    ...backboard,
    ...order,
  }
};

export const createCustomOrder = ({ OrderModel }) => {
  return {
    name: OrderModel.getName(),
    lastname: OrderModel.getLastName(),
    phone_number: OrderModel.getPhone(),
    city: OrderModel.getCity(),
    total: OrderModel.getTotal(),
    custom: OrderModel.getCustom(),
    img: OrderModel.getProductImage(),
    order_hash: OrderModel.getHash()
  }
}
