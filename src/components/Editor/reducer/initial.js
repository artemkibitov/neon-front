'use strict';
import data from "@/components/Editor/ControlPanel/Size/data";
import { priceFolding } from "@/components/Editor/reducer/util";

const initialEditorState = (state) => {
  state.size = state.size ?? data.medium;
  state.cost = priceFolding(state) ?? 0;

  return state;
};

export default initialEditorState;
