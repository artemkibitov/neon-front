'use strict';
import { text } from '@/components/Editor/ControlPanel/SwitchingTabs/Text/data';
import data from "@/components/Editor/ControlPanel/Size/data";
import { priceFolding } from "@/components/Editor/reducer/util";

const initialEditorState = (state) => {
  state.text = state.text.length === 0 ? text : state.text;
  state.size = state.size ?? data.medium;
  state.cost = priceFolding(state) ?? 0;

  return state;
}

export default initialEditorState;
