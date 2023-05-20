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

const createActions = () => {
  const actionContainer = new Container();

  actionContainer
    .add("TextActions", TextActions, TextModel)
    .add("SignActions", SignActions, SignModel,
      { textActions: "TextActions", optionFactory: SignOptions }
    )
    .add('BackboardActions', BackboardActions, BackboardModel,
      { optionFactory: BackboardOption }
    )
    .init();

  return actionContainer;
};

const actionContainer = createActions();

export default actionContainer;
