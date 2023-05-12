'use strict';
import actionContainer from "@/components/Editor/reducer/actions";
import sizeOptionsData from "@/components/Editor/reducer/actions/Editor/Size/data";

const initialState = {
  TextModel: actionContainer.getAction("TextActions").initialState(),
  SizeModel: actionContainer.getAction("SizeActions").init(sizeOptionsData),
  // PriceActions: actionContainer.getAction("PriceActions").initialState(),
};

export default initialState;
