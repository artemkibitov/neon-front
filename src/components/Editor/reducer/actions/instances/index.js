'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";

const actions = {
    text: new TextActions(),
    size: new SizeActions(),
};

export default actions;
