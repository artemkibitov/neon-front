'use strict';

import React, { useReducer } from "react";
import initialEditorState from "@/components/Editor/reducer/initial";
import editorReducer from "@/components/Editor/reducer";
import CPState from "@/components/Editor/reducer/state";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";

export default function Editor() {
  const [controlPanelState, controlPanelReducer] = useReducer(
    editorReducer,
    CPState,
    initialEditorState
  );

  return (
    <div>
      <ControlPanel editorReducer={ controlPanelReducer }/>
      <RenderView lightText={ controlPanelState.text }/>
    </div>
  )
}
