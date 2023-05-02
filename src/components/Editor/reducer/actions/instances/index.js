'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";
import SizeFactory from "@/components/Editor/reducer/actions/instances/SizeFactory";
import PriceActions from "@/components/Editor/reducer/actions/instances/PriceActions";

const createActions = () => {
  const sizeFactory = new SizeFactory();

  const text = new TextActions();
  const size = new SizeActions(sizeFactory);
  const price = new PriceActions(size, text);

  return { text, size, price };
};

const actions = createActions();

export default actions;
