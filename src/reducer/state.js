'use strict';
import actionContainer from "@/reducer/actions";
import defaultTextData from "@/reducer/actions/Editor/Text/data";
import { sizeOptionsData, priceOptionsData, powerAdapterData } from "@/reducer/actions/Editor/Sign/Data/OptionsData";
import {backboardStyle, backboardColor} from "@/reducer/actions/Editor/Backboard/Data/BackboardData";

const initialState = {
  TextModel: actionContainer.getAction("TextActions").init(defaultTextData()),
  SignModel: actionContainer.getAction("SignActions").init(sizeOptionsData, priceOptionsData, powerAdapterData),
  BackboardModel: actionContainer.getAction('BackboardActions').init(backboardStyle, backboardColor),
};

export default initialState;
