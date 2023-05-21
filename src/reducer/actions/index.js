'use strict';
import TextActions from "@/reducer/actions/Editor/Text/TextActions";
import Container from "@/reducer/Core/Container/Container";
import { Text as TextModel } from "@/reducer/actions/Editor/Text/Model/Text";
import { Sign as SignModel } from "@/reducer/actions/Editor/Sign/Model/Sign";
import SignActions from "@/reducer/actions/Editor/Sign/SignActions";
import SignOptions from "@/reducer/actions/Editor/Sign/Factory/SignOptions";
import BackboardActions from "@/reducer/actions/Editor/Backboard/BackboardActions";
import { Backboard as BackboardModel } from "@/reducer/actions/Editor/Backboard/Model/Backboard";
import BackboardOption from "@/reducer/actions/Editor/Backboard/Factory/BackboardOptions";
import OrderActions from "@/reducer/actions/Editor/Order/OrderActions";
import { Order as OrderModel } from "@/reducer/actions/Editor/Order/Model/Order";

const createActions = () => {
  const actionContainer = new Container();

  actionContainer
    .add("TextActions", TextActions, TextModel)
    .add("SignActions", SignActions, SignModel,
      { textActions: "TextActions", OrderActions: 'OrderActions', optionFactory: SignOptions }
    )
    .add('BackboardActions', BackboardActions, BackboardModel,
      { OrderActions: 'OrderActions', optionFactory: BackboardOption }
    )
    .add('OrderActions', OrderActions, OrderModel,
      { SignActions: "SignActions", BackboardActions: "BackboardActions" })
    .init();

  return actionContainer;
};

const actionContainer = createActions();

export default actionContainer;
