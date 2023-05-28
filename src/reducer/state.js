'use strict';
import actionContainer from "@/reducer/actions";
import defaultTextData from "@/reducer/actions/Editor/Text/data";
import {
  sizeOptionsData,
  priceOptionsData,
  powerAdapterData,
  lightColorData
} from "@/reducer/actions/Editor/Sign/Data/OptionsData";
import {backboardStyle, backboardColor} from "@/reducer/actions/Editor/Backboard/Data/BackboardData";

const getUserHash = async () => await createUserHash();
const initialState = {
  TextModel: actionContainer.getAction("TextActions").init(defaultTextData()),
  SignModel: actionContainer.getAction("SignActions")
    .init(sizeOptionsData, priceOptionsData, powerAdapterData, lightColorData),
  BackboardModel: actionContainer.getAction('BackboardActions').init(backboardStyle, backboardColor),
  OrderModel: actionContainer.getAction('OrderActions').init(),
};

export default initialState;
