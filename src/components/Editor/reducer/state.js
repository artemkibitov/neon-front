'use strict';
import actionContainer from "@/components/Editor/reducer/actions/instances";

const initialState = {
  TextActions: actionContainer.getAction("TextActions").initialState(),
  SizeActions: actionContainer.getAction("SizeActions").initialState(),
  PriceActions: actionContainer.getAction("PriceActions").initialState(),
};

export default initialState;
