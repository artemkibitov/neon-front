'use strict';
import React, {useContext, useState} from "react";
import EditorContext from "@/components/Editor/editorContext";

const Text = () => {
  const {dispatch} = useContext(EditorContext)
  const [areaPlaceholder, setAreaPlaceholder] = useState(
    'Введи свій текст тут\nНатисніть Enter/Return для переходу до нового рядка'
  );

  const resetPlaceholder = () => setAreaPlaceholder('');
  const changeText = (e) => {
    const text = e.target.value;
    const type = 'text_changeValue';

    dispatch({type, text});
  };

  return (
    <div className={"w-11/12 h-36 box-content"}>
      <textarea
        className="resize-none text-center w-full h-full bg-gray-300 rounded-xl px-8 py-8
        scrollbar-thin scrollbar-thumb-gray-300 border border-gray-500 overflow-x-clip overflow-y-auto scrollbar-track-gray-100 text-gray-100"
        name="neon-text"
        placeholder={areaPlaceholder}
        onChange={changeText}
        onClick={resetPlaceholder}
        id="neon-text-input"
        cols="30"
        rows="10"
      />
    </div>
  );
};

export default Text;
