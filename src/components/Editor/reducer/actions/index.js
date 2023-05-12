'use strict';
import TextActions from "@/components/Editor/reducer/actions/Editor/Text/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/Editor/Size/SizeActions";
import Container from "@/components/Editor/reducer/actions/Container";
import { Text as TextModel } from "@/components/Editor/reducer/actions/Editor/Text/Model/Text";
import { Size as SizeModel } from "@/components/Editor/reducer/actions/Editor/Size/Model/Size";
import createOptionsFactory from "@/components/Editor/reducer/actions/Editor/SignOptions/OptionsFactory";
import sizeOptionFactory from "@/components/Editor/reducer/actions/Editor/SignOptions/sizeOptionFactory";
import { sizeOptionsData } from "@/components/Editor/reducer/actions/Editor/SignOptions/data";
import OptionsFactory from "@/components/Editor/reducer/actions/Editor/SignOptions/OptionsFactory";

const createActions = () => {
  const actionContainer = new Container();

  actionContainer
    .add("TextActions", TextActions, TextModel)
    .add("SizeActions", SizeActions, SizeModel,
      { textActions: "TextActions", optionFactory: OptionsFactory }
    )
    .init();

  return actionContainer;
};

const actionContainer = createActions();

export default actionContainer;
