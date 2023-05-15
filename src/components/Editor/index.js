'use strict';

import React, { useReducer } from "react";
import editorReducer from "@/reducer";
import EditorContext from "@/components/Editor/editorContext";
import useWindowWidth from "@/components/Editor/useWindowWidth";
import DekstopStructure from "@/components/Editor/DekstopStructure";
import MobileStructure from "@/components/Editor/MobileStructure";
import initialState from "@/reducer/state";

const Editor = () => {
  const [state, dispatch] = useReducer(editorReducer, initialState, () => initialState);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
        {isMobile ? <MobileStructure/> : <DekstopStructure/>}
    </EditorContext.Provider>

  )
};


export default Editor;
