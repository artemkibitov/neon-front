import React from "react";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";

const DekstopStructure = () => (
  <div className={"flex lg:flex-row flex-col mt-8 lg:w-9/12 mx-auto shadow"}>
    <ControlPanel/>
    <RenderView isMobile={false}/>
  </div>
);

export default DekstopStructure;
