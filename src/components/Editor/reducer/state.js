'use strict';
import TextActions from "@/components/Editor/reducer/actions/instances/TextActions";
import SizeActions from "@/components/Editor/reducer/actions/instances/SizeActions";
import actions from "@/components/Editor/reducer/actions/instances";

const text = actions.text.getInitialState();

const initialState = {
  text,
  size: actions.size.getInitialState(text.value),
  price: actions.price.getInitialValue(),
};

export default initialState;
