'use strict';

import React, { useReducer } from "react";
import editorReducer from "@/reducer";
import EditorContext from "@/components/Editor/editorContext";
import useWindowWidth from "@/components/Editor/useWindowWidth";
import DekstopStructure from "@/components/Editor/DekstopStructure";
import MobileStructure from "@/components/Editor/MobileStructure";
import initialState from "@/reducer/state";

const Editor = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 821;

  return (
    <>
      {isMobile ? <MobileStructure/> : <DekstopStructure/>}
    </>
  )
};


export default Editor;
