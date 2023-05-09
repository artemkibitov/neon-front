'use strict';
import React, { useContext, useEffect } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Size = () => {
  const { state, dispatch } = useContext(EditorContext)
  const { TextActions, SizeActions } = state;

  return (
    <section>
      {Object.entries(SizeActions.option).map(([key, option]) => (
          <div
            key={key}
            onClick={() => dispatch({ type: 'SizeActions_selectSize', key })}
          >
            <div>
              <p>{option.name}</p>
              <p>{option.total}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Size;
