'use strict';
import React, { useContext, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Text = () => {
  const { state, dispatch } = useContext(EditorContext);
  const [areaPlaceholder, setAreaPlaceholder] = useState(
    'Введи свій текст тут\nНатисніть Enter/Return для переходу до нового рядка'
  );
  const [isFirstInput, setIsFirstInput] = useState(false);

  const resetPlaceholder = () => setAreaPlaceholder('');

  const processText = (text) => {
    const lines = text.split('\n').map(line => line.trim());
    const processedLines = lines.map(line => line.replace(/\s{2,}/g, ' '));

    return processedLines.join('\n');
  };

  const changeText = (e) => {
    const { value } = e.target;
    const processedText = processText(value);

    dispatch({
      type: 'TextActions',
      method: 'setValue',
      payload: { processedText },
    });

    dispatch({
      type: 'SignActions',
      method: 'calculate',
    });

    dispatch({
      type: 'OrderActions',
      method: 'calculateTotal'
    });

    if (value.length && !isFirstInput) {
      setIsFirstInput(true);

      dispatch({
        type: 'TextActions',
        method: 'firstInput',
        payload: { value: true }
      })
    }
  };

  return (
    <div className={"w-full h-36 box-content"}>
      <textarea
        className="resize-none text-center w-full h-full bg-slate-400 rounded-xl px-8 py-8
        scrollbar-thin scrollbar-thumb-gray-300 border border-gray-500 overflow-x-clip overflow-y-auto scrollbar-track-gray-100 text-gray-50"
        name="neon-text"
        placeholder={!isFirstInput ? areaPlaceholder : ''}
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
