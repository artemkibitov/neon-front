'use strict';
import actionContainer from "@/reducer/actions";
import sizeOptionsData from "@/reducer/actions/Editor/Size/data";
import defaultTextData from "@/reducer/actions/Editor/Text/data";
import { priceOptionsData } from "@/reducer/actions/Editor/Sign/data";

const initialState = {
  TextModel: actionContainer.getAction("TextActions").init(defaultTextData()),
  SignModel: actionContainer.getAction("SignActions").init(sizeOptionsData, priceOptionsData),
};

export default initialState;
