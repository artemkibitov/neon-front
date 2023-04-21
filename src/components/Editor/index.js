'use strict';

import React, { useReducer } from "react";
import initialEditorState from "@/components/Editor/reducer/initial";
import editorReducer from "@/components/Editor/reducer";
import CPState from "@/components/Editor/reducer/state";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";
import EditorContext from "@/components/Editor/editorContext";

const Editor = () => {
  const [state, dispatch] = useReducer(editorReducer, CPState, initialEditorState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      <ControlPanel />
      <RenderView />
    </EditorContext.Provider>
  )
};

export default Editor;
