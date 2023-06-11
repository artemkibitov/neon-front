import { useContext, useCallback } from "react";
import usePostApi from "@/components/hooks/usePostApi";
import {createOrderData, createCustomOrder} from "@/components/util/createOrderData";

const useOrder = (context) => {
  const { state } = useContext(context);
  const { postData } = usePostApi();

  const sendOrder = useCallback(async (path) => {
    const data = state.OrderModel.getCustom() ?
      createCustomOrder({ ...state }) :
      createOrderData({ ...state });

    await postData(path, data);
  }, [state, postData]); 

  return { sendOrder };
};

export default useOrder;
