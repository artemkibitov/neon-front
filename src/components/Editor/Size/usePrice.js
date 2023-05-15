const usePrice = (SignModel, TextModel) => {
  return (key) => {
    const priceOption = SignModel.priceOption.get(key);

    if (!TextModel.firstInput || TextModel.chars < 1) return priceOption.cost;

    return priceOption.price;
  };
};

export default usePrice;
