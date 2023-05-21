'use strict';
import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Color = () => {
  const { state, dispatch } = useContext(EditorContext);
  const { SignModel } = state;
  const lightOption = Array.from(SignModel.getLightOption());
  const selected = SignModel.getSelectedLightOption();

  const selectColor = (key) => dispatch({
    type: 'SignActions',
    method: 'selectLight',
    payload: { key },
  })

  return (
    <div className={'flex flex-row flex-wrap justify-center text-sm text-center font-bold'}>
      {
        lightOption.map(([i, { key, background, title, textColor }]) => (
          <div
            className={'w-28 h-12 p-1 mx-0.5 rounded-md flex flex-row items-center my-1 justify-center transition-colors duration-300'}
            key={key}
            onClick={() => selectColor(key)}
            style={{
              backgroundColor: key === selected.key ? 'transparent' : background,
              boxShadow: key === selected.key ? background + ' 0px 0px 10px' : 'none'
            }}>
            <span className={'capitalize ' + (key === selected.key ? 'text-neutral-900' : textColor)}>{title}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Color;
