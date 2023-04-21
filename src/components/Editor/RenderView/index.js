import React, {useContext} from "react";
import EditorContext from "@/components/Editor/editorContext";

const RenderView = () => {
  const {state} = useContext(EditorContext);

  const textFormat = (text) => text.split('\n').map((line, i, arr) => (
      <React.Fragment key={i}>
        {line.length ? <p>{line}</p> : null}
        {i !== arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div>
      {textFormat(state.text)}
    </div>
  )
};

export default RenderView;
