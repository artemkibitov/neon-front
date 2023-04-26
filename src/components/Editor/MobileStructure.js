import React from "react";
import RenderView from "@/components/Editor/RenderView";
import ControlPanel from "@/components/Editor/ControlPanel";

const MobileStructure = () => (
  <div className={"flex flex-col mt-8 lg:w-9/12 mx-auto shadow"}>

    <ControlPanel/>
    <RenderView/>
  </div>
);

export default MobileStructure;
