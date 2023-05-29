'use strict';
import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import SvgLight from "@/components/Editor/ControlPanel/SwitchingTabs/Color/SvgLight";

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
    <div className="flex flex-wrap justify-around bg-slate-800 text-sm p-2 rounded-xl text-center font-bold">
      {lightOption.map(([i, { key, background, title, value, textShadow }]) => (
        <div
          className="flex flex-col items-center justify-center cursor-pointer w-1/4 text-xs rounded-md font-md text-stone-50
           transition-colors duration-300"
          key={key}
          onClick={() => selectColor(key)}
        >
          <SvgLight color={background} shadow={textShadow} isActive={selected.key === key}/>
          <div className="w-full h-12 text-center">
            <p
              className="capitalize f-montse pt-4"
              style={{ fontSize: '10px' }}
            >
              {title}
            </p>
          </div>
        </div>
      ))}
      {/* Add empty placeholders to fill the remaining spaces */}
      {lightOption.length % 4 !== 0 &&
        Array.from(
          { length: (4 - (lightOption.length % 4)) },
          (_, index) => (
            <div key={`placeholder-${index}`} className="w-1/4"></div>
          )
        )
      }
    </div>
  );
};

export default Color;
