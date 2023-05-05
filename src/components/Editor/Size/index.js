'use strict';
import React, { useContext, useEffect } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Size = () => {
  const { state, dispatch } = useContext(EditorContext)
  const { TextActions, SizeActions } = state;

  const calculate = (text, option) => {
    const { cost, height } = option;
    const heightFactor = height * 0.2;

    const char = text.replace(/[\s\n]/g, "").length * cost;
    const space = (text.match(/(?<=\S) (?=\S)/g) || []).length * (cost / 2);
    const newLine = (text.match(/\n/g) || []).length * (cost * 0.15) * heightFactor;

    return char + space + newLine;
  };

  return (
    <section>
      {Object.entries(SizeActions.option).map(([key, option]) => {
        const price = calculate(TextActions.value, option);

        return (
          <div
            key={key}
            onClick={() => dispatch({ type: 'SizeActions_selectSize', key })}
          >
            <div>
              <p>{option.name}</p>
              <p>{Math.round(price)}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Size;
