'use strict';
import TextActions from "@/reducer/actions/Editor/Text/TextActions";
import SizeActions from "@/reducer/actions/Editor/Size/SizeActions";
import Container from "@/reducer/actions/Container";
import { Text as TextModel } from "@/reducer/actions/Editor/Text/Model/Text";
import { Sign as SignModel } from "@/reducer/actions/Editor/Sign/Model/Sign";
import createOptionsFactory from "@/reducer/actions/Editor/Sign/Factory/OptionsFactory";
import sizeOptionFactory from "@/reducer/actions/Editor/SignOptions/sizeOptionFactory";
import { sizeOptionsData } from "@/reducer/actions/Editor/Sign/data";
import OptionsFactory from "@/reducer/actions/Editor/Sign/Factory/OptionsFactory";
import SignActions from "@/reducer/actions/Editor/Sign/SignActions";

const createActions = () => {
  const actionContainer = new Container();

  actionContainer
    .add("TextActions", TextActions, TextModel)
    .add("SignActions", SignActions, SignModel,
      { textActions: "TextActions", optionFactory: OptionsFactory }
    )
    .init();

  return actionContainer;
};

const actionContainer = createActions();

export default actionContainer;
