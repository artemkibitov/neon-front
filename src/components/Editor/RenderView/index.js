import React, { useContext, useEffect, useRef } from "react";
import EditorContext from "@/components/Editor/editorContext";
import NeonText from "@/components/Editor/RenderView/NeonText";
import Link from 'next/link';
import CheckoutLink from '@/components/CheckoutLink';

const RenderView = ({ isMobile }) => {
  const wrapElementRef = useRef();
  const neonTextRef = useRef();
  const resetRef = useRef();

  return (
    <>
      <div id={'render'}
        ref={wrapElementRef}
        style={{ overflow: "hidden" }}
        className={"neon-bg w-full bg-stone-950 relative flex justify-center  items-center"}>
        <NeonText ref={neonTextRef} isMobile={isMobile} parentElement={wrapElementRef} reset={resetRef} />
      </div>
      <div className='relative mt-4 p-2 hidden lg:block w-full rounded-xl w-full'>
        <div className='relative z-30 lg:flex flex-col align-center items-center justify-between w-full h-full'>
          <p className='text-center text-md md:text-xl text-white font-bold f-raleway'>
            Ми можемо виготовити, яскраву та стильну вивіску, за дизайном вашого прототипу
            <span className='my-0.5 block'>(логітип вашого бренду, складного малюнка, тощо)</span>
            та втілити будь-яке ваше бачення.
          </p>
          <CheckoutLink href='/checkout' className={'bg-blue-600 w-80 drop-shadow-xl text-white my-2 px-2 p-1 flex items-center justify-center  h-24 rounded-md'}>
            <h4 className='font-bold text-center text-xl'>Замовити дизаiн за властним прототипом</h4>
          </CheckoutLink>
        </div>
        <div className='w-full h-full absolute top-0 z-1'>
          <div className='absolute neon-works  bg-repeat-x w-full h-full z-1' style={{ backgroundImage: 'url(/bg2-min.jpg)' }} />
          <div className='absolute bg-stone-950 w-full h-full opacity-70 z-10' />
        </div>
      </div>
    </>
  );
};

export default RenderView;
