import React, { useContext, useRef } from "react";
import EditorContext from "@/components/Editor/editorContext";
import NeonText from "@/components/Editor/RenderView/NeonText";

const RenderView = ({ isMobile }) => {
  const wrapElementRef = useRef();
  const neonTextRef = useRef();

  return (
    <div id={'render'} ref={wrapElementRef} style={{overflow: "hidden"}} className={"neon-bg w-full bg-stone-950 relative"}>
      <NeonText ref={neonTextRef} isMobile={isMobile} parentElement={wrapElementRef} />
      <div className={"h-6"}></div>
    </div>
  );
};

export default RenderView;
