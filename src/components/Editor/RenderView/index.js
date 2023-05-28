import React, { useContext, useEffect, useRef } from "react";
import EditorContext from "@/components/Editor/editorContext";
import NeonText from "@/components/Editor/RenderView/NeonText";

const RenderView = ({ isMobile }) => {
  const wrapElementRef = useRef();
  const neonTextRef = useRef();
  const resetRef = useRef();

  return (
    <div id={'render'}
         ref={wrapElementRef}
         style={{ overflow: "hidden" }}
         className={"neon-bg w-full bg-stone-950 relative flex justify-center  items-center"}>
      <NeonText ref={neonTextRef} isMobile={isMobile} parentElement={wrapElementRef} reset={resetRef}/>

    </div>
  );
};

export default RenderView;
