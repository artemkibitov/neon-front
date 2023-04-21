'use strict';
import React, {useContext} from "react";
import EditorContext from "@/components/Editor/editorContext";

const Text = () => {
  const {dispatch} = useContext(EditorContext)

  const changeText = (e) => {
    const text = e.target.value;
    const type = 'change_text';

    dispatch({ type, text });
  };

  return (
    <textarea
      className="resize-none"
      name="neon-text"
      onChange={changeText}
      id="neon-text-input"
      cols="30"
      rows="10"
    />
  );
};

export default Text;
