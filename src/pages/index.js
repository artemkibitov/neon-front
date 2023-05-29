import React, { memo, useState } from "react";
import Editor from "@/components/Editor";
import SvgHLineYellow400 from "@/components/SVG/svg-h-line-yellow-400";
import SvgEllips from "@/components/SVG/svg-ellips";
import SvgVLine from "@/components/SVG/svg-v-line";
import SvgHLineRed from "@/components/SVG/svg-h-line-red";

export default function Index() {
  return (
    <>
      <div className={'relative'}>
        <div className={'bg-slate-800 w-full py-2 relative z-10'}>
          <h1 className={'text-white f-montse font-bold text-stone-50 text-4xl text-center'}>Neoner</h1>
        </div>
        <SvgVLine width={100} height={100} position={'absolute'} right={15} top={0} rotate={90} zIndex={0}/>
        <SvgVLine width={100} height={100} position={'absolute'} left={-15} top={5} rotate={190} zIndex={0}/>
      </div>
      <div className={"container mx-auto overflow-hidden"}>
        <section className={"mx-auto py-4 text-center tracking-wider relative z-10"}>
          <div className={'relative'}>
            <h2 className={"f-montse text-3xl font-bold text-red-400 f-oswald"}>
              Створи свою власну <span className={'inline-block'}>неонову вивіску</span>
            </h2>
          </div>
          <p className={"f-montse text-blue-400 text-2xl font-medium font-medium mt-2"}>
            А про якість подбаємо ми
          </p>
          <div>
            <p>слідкуйте за нами в соціальних мережах</p>
            {/*<div className={'flex flex-row justify-center mx-auto items-center w-1/3'}>*/}
            {/*  <div style={{backgroundColor: '#009ee2'}}>*/}
            {/*    <div className={'p-12 bg-no-repeat bg-cover'}*/}
            {/*         style={{ backgroundImage: 'url(/th-349437498.jpg)' }}></div>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <div className={'p-12 bg-no-repeat bg-cover'}*/}
            {/*         style={{ backgroundImage: 'url(/th-4240280022.jpg)' }}></div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          {/*<SvgHLineRed width={100} height={100} position={'absolute'} left={-35} rotate={90} top={100} zIndex={-1}/>*/}
        </section>

        <Editor/>
      </div>
    </>
  )
    ;
}
