'use strict';

import React, {useReducer} from "react";
import initialEditorState from "@/components/Editor/reducer/initial";
import editorReducer from "@/components/Editor/reducer";
import CPState from "@/components/Editor/reducer/state";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";
import EditorContext from "@/components/Editor/editorContext";
import useWindowWidth from "@/components/Editor/useWindowWidth";
import DekstopComp from "@/components/Editor/DekstopStructure";
import MobileComp from "@/components/Editor/MobileStructure";
import DekstopStructure from "@/components/Editor/DekstopStructure";
import MobileStructure from "@/components/Editor/MobileStructure";
import initialState from "@/components/Editor/reducer/state";

const Editor = () => {
  const [state, dispatch] = useReducer(editorReducer, initialState);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <EditorContext.Provider value={{state, dispatch}}>

      {isMobile ? <MobileStructure /> : <DekstopStructure />}

    </EditorContext.Provider>
  )
};

export default Editor;
