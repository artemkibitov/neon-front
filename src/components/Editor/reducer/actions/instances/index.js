'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/Text/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";
import SizeFactory from "@/components/Editor/reducer/actions/instances/SizeFactory";
import PriceActions from "@/components/Editor/reducer/actions/instances/PriceActions";
import ActionContainer from "@/components/Editor/reducer/actions/ActionContainer";

const createActions = () => {
  const actionContainer = new ActionContainer();

  actionContainer.addAction("TextActions", TextActions);

  actionContainer.addAction("SizeFactory", SizeFactory);

  actionContainer.addAction(
    "SizeActions",
    SizeActions,
    {
      textActions: "TextActions",
      sizeFactory: "SizeFactory",
    }
  );

  actionContainer.addAction("PriceActions", PriceActions, {
    sizeActions: "SizeActions",
    textActions: "TextActions",
  });

  actionContainer.initActions();

  return actionContainer;
};

const actionContainer = createActions();

export default actionContainer;
