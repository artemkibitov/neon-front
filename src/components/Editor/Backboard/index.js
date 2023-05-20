import React, { useContext, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import BackboardStyle from "@/components/Editor/Backboard/backboardStyle";
import BackboardColor from "@/components/Editor/Backboard/backboardColor";

const Backboard = () => {
  const { state, dispatch } = useContext(EditorContext);
  const { BackboardModel } = state;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={'mt-4 mx-2'}>
        <BackboardStyle BackboardModel={BackboardModel} dispatch={dispatch}/>
        <BackboardColor BackboardModel={BackboardModel} dispatch={dispatch}/>
      </div>

    </>
  )
};

export default Backboard;
