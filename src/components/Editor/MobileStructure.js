import React from "react";
import RenderView from "@/components/Editor/RenderView";
import ControlPanel from "@/components/Editor/ControlPanel";
import Size from "@/components/Editor/Size";
import Waterproof from "@/components/Editor/Waterproof";
import PowerAdapter from "@/components/Editor/PowerAdapter";
import Backboard from "@/components/Editor/Backboard";

const MobileStructure = () => (
  <div className={"flex flex-col mt-8 lg:w-9/12 mx-auto shadow"}>

    <ControlPanel/>
    <RenderView isMobile={true}/>
    <Size/>
    <Waterproof/>
    <PowerAdapter/>
    <Backboard/>
  </div>
);

export default MobileStructure;
