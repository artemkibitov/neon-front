import React from "react";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";
import Size from "@/components/Editor/Size";
import Waterproof from "@/components/Editor/Waterproof";
import PowerAdapter from "@/components/Editor/PowerAdapter";
import Backboard from "@/components/Editor/Backboard";
import PriceForm from "@/components/Editor/PriceForm";

const DekstopStructure = () => (
  <div className={"flex lg:flex-row flex-col mt-8 mx-auto shadow"}>
    <div className={'flex flex-col w-1/2'}>
      <ControlPanel/>
      <Size/>
      <Waterproof/>
      <PowerAdapter/>
      <Backboard/>
      <PriceForm isMobile={false}/>
    </div>
    <div className={'h-80 w-full'}>
      <RenderView isMobile={false}/>
    </div>
  </div>
);

export default DekstopStructure;
