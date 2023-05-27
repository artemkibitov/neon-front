export const createOrderData = ({ OrderModel, BackboardModel, SignModel }) => {
  const sign = {
    width: SignModel.getSelectedSizeOption().totalSize.getWidth(),
    height: SignModel.getSelectedSizeOption().totalSize.getHeight(),
    light_color: SignModel.getSelectedLight(),
    size: SignModel.getSelectedStyle().getSize(),
    waterproof: SignModel.getWaterproof() ? SignModel.getWaterproofPrice() : 0,
  };
  const backboard = {
    backboard_style: BackboardModel.getSelectedStyle(),
    backboard_color: BackboardModel.getSelectedColor(),
  };
  const order = {
    name: OrderModel.getName(),
    lastname: OrderModel.getLastName(),
    phone_number: OrderModel.getPhone(),
    city: OrderModel.getCity(),
    total: OrderModel.getTotal(),
    custom: OrderModel.getCustom(),
    img: OrderModel.getProductImage(),
  }

  return {
    ...sign,
    ...backboard,
    ...order
  }
};

export const createCustomOrder = ({ OrderModel }) => {
  return {
    name: OrderModel.getName(),
    last_name: OrderModel.getLastName(),
    phone_number: OrderModel.getPhone(),
    city: OrderModel.getCity(),
    total: OrderModel.getTotal(),
    custom: OrderModel.getCustom(),
    img: OrderModel.getProductImage(),
  }
}
