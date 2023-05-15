'use strict';
import actionContainer from "@/reducer/actions";
import defaultTextData from "@/reducer/actions/Editor/Text/data";
import { sizeOptionsData, priceOptionsData } from "@/reducer/actions/Editor/Sign/Data/OptionsData";

const initialState = {
  TextModel: actionContainer.getAction("TextActions").init(defaultTextData()),
  SignModel: actionContainer.getAction("SignActions").init(sizeOptionsData, priceOptionsData),
};

export default initialState;
