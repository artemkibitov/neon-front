'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";
import actions from "@/components/Editor/reducer/actions/instances";
import actionContainer from "@/components/Editor/reducer/actions/instances";

const initialState = {
  TextActions: actionContainer.getAction("TextActions").initialState(),
  size: actionContainer.getAction("SizeActions").initialState(),
  price: actionContainer.getAction("PriceActions").initialState(),
};

export default initialState;
