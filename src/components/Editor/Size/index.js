'use strict';
import React, { useContext, useEffect } from "react";
import EditorContext from "@/components/Editor/editorContext";

const Size = () => {
  const { state, dispatch } = useContext(EditorContext)
  const { SignModel } = state;

  const selectOption = (key) => {
    dispatch({
      type: 'SignActions',
      method: 'selectOption',
      payload: { key },
    });
  }

  return (
    <section>
      {
        Array.from(SignModel.getSizeOption()).map(([key, option]) => (
          <div key={key} onClick={() => selectOption(key)}>
            {option.name}
          </div>
        ))
      }
    </section>
  );
};

export default Size;
{/*{Object.entries(SizeModel.option).map(([key, option]) => (*/
}
{/*    <div*/
}
{/*      key={key}*/
}
{/*      onClick={() => dispatch({ type: 'SizeActions_selectSize', key })}*/
}
{/*    >*/
}
{/*      <div>*/
}
{/*        <p>{option.name}</p>*/
}
{/*        <p>{option.total}</p>*/
}
{/*      </div>*/
}
{/*    </div>*/
}
{/*  )*/
}
{/*)}*/
}
