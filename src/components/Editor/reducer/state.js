'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";
import actions from "@/components/Editor/reducer/actions/instances";

const initialState = {
  text: actions.text.getInitialState(),
  size: actions.size.getInitialState(),
};

export default initialState;
