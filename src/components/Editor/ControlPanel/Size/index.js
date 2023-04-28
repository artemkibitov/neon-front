'use strict';
import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Size = () => {
  const {state, dispatch} = useContext(EditorContext)
  const { size } = state;

  console.log(size);

};

export default Size;
