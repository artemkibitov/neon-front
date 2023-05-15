import React from "react";
import RenderView from "@/components/Editor/RenderView";
import ControlPanel from "@/components/Editor/ControlPanel";
import Size from "@/components/Editor/Size";

const MobileStructure = () => (
  <div className={"flex flex-col mt-8 lg:w-9/12 mx-auto shadow"}>

    <ControlPanel/>
    <RenderView isMobile={true}/>
    <Size />
  </div>
);

export default MobileStructure;
