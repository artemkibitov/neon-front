import React from "react";
import ControlPanel from "@/components/Editor/ControlPanel";
import RenderView from "@/components/Editor/RenderView";
import Size from "@/components/Editor/Size";
import Waterproof from "@/components/Editor/Waterproof";
import PowerAdapter from "@/components/Editor/PowerAdapter";
import Backboard from "@/components/Editor/Backboard";
import PriceForm from "@/components/Editor/PriceForm";

const DekstopStructure = () => (
  <div className={"flex lg:flex-row justify-around flex-col mt-8 mx-auto"}>
    <div className={'flex flex-col w-2/5 xl:w-2/6 ml-2 shadow-xl shadow-slate-800'}>
      <ControlPanel/>
      <Size/>
      <Waterproof/>
      <PowerAdapter/>
      <Backboard/>
      <PriceForm isMobile={false}/>
    </div>
    <div className={'h-96 w-full lg:w-7/12'}>
      <RenderView isMobile={false}/>
    </div>
  </div>
);

export default DekstopStructure;
