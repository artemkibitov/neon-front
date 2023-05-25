import { useCallback, useContext } from "react";
import { createCustomOrder, createOrderData } from "@/components/OrderButton/util";

const useOrder = (context, img = '') => {
  const { state } = useContext(context);

  const data = state.OrderModel.custom ?
    createCustomOrder({ ...state }) :
    createOrderData({ ...state, img });

  const sendOrder = useCallback(async (path) => {
    const response = await fetch(`${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }, []);

  return { sendOrder };
};

export default useOrder;
