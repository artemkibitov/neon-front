const useOrder = (context) => {
  const { state } = useContext(context);
  const { postData } = usePostApi();

  const sendOrder = useCallback(async (path) => {
    const data = state.OrderModel.getCustom() ?
      createCustomOrder({ ...state }) :
      createOrderData({ ...state });

    // Use postData to send the order data
    await postData(path, data);
  }, [state, postData]); // Add postData to the dependency array

  return { sendOrder };
};
