import React, { memo, useState } from "react";
import Editor from "@/components/Editor";
import SvgHLineYellow400 from "@/components/SVG/svg-h-line-yellow-400";
import SvgEllips from "@/components/SVG/svg-ellips";
import SvgVLine from "@/components/SVG/svg-v-line";
import SvgHLineRed from "@/components/SVG/svg-h-line-red";

export default function Index() {
  return (
    <>
      <div className={'relative z-20'}>
        <div className={'bg-slate-800 w-full py-2 relative z-10'}>
          <h1 className={'text-white f-montse font-bold text-stone-50 text-4xl text-center'}>Neoner</h1>
        </div>
        <SvgVLine width={100} height={100} position={'absolute'} right={15} top={0} rotate={90} zIndex={0} />
        <SvgVLine width={100} height={100} position={'absolute'} left={-15} top={5} rotate={190} zIndex={0} />
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
          {/* <div>
            <p>Cлідкуйте за нами в соціальних мережах</p>
            <div className={'flex flex-row justify-center mx-auto items-center w-1/3'}>
              <div style={{ backgroundColor: '#009ee2' }}>
                <div className={'p-12 bg-no-repeat bg-cover'}
                  style={{ backgroundImage: 'url(/th-349437498.jpg)' }}></div>
              </div>
              <div>
                <div className={'p-12 bg-no-repeat bg-cover'}
                  style={{ backgroundImage: 'url(/th-4240280022.jpg)' }}></div>
              </div>
            </div>
          </div> */}
          <div>
            <p>Підписуйся на нас у соціальних мережах</p>
            <div className='flex flex-row justify-center'>
              <a href='https://www.instagram.com/'>
                <div className='p-12 social-media-icon social-icon-telegram'></div>
              </a>
              <a href='https://www.instagram.com/'>
                <div className='p-12 social-media-icon social-icon-instagram'></div>
              </a>
              <a href='https://www.instagram.com/'>
                <div className='p-12 social-media-icon social-icon-tiktok'></div>
              </a>
            </div>
          </div>

          {/* <div className='lg:hidden flex flex-col align-center items-center mx-2 justify-center'>
            <p className='text-left text-md md:text-xl md:text-center text-slate-800 f-raleway'>
              Ми можемо виготовити, яскраву та стильну вивіску, за дизайном вашого прототипу
              <span className='my-0.5 block'>(логітип вашого бренду, складного малюнка, тощо)</span>
              та втілити будь-яке ваше бачення.
            </p>
            <div className={'bg-slate-800 drop-shadow-xl text-stone-50 my-2 px-2 p-1 flex items-center justify-center  h-24 rounded-md'}>
              <h4 className='font-bold text-green-400 text-xl'>Тисни для замовлення <span className='inline-block'>особистого дизайну</span></h4>
            </div>
          </div> */}

          <div className='relative left-0 lg:hidden mt-4 p-2 block w-full rounded-xl w-full'>
            <div className='relative left-0 z-30 flex flex-col align-center items-center justify-between w-full h-full'>
              <p className='text-center text-md md:text-xl text-white font-bold f-raleway'>
                Ми можемо виготовити, яскраву та стильну вивіску, за дизайном вашого прототипу
                <span className='my-0.5 block'>(логітип вашого бренду, складного малюнка, тощо)</span>
                та втілити будь-яке ваше бачення.
              </p>
              <CheckoutLink href='/checkout'>
                <div className={'bg-blue-600 w-80 drop-shadow-xl text-white my-2 px-2 p-1 flex items-center justify-center  h-24 rounded-md'}>
                  <h4 className='font-bold text-center text-xl'>Замовити дизаiн за властним прототипом</h4>
                </div>
              </CheckoutLink>
            </div>
            <div className='w-full h-full absolute left-0 top-0 z-1'>
              <div className='absolute neon-works bg-cover bg-repeat-x w-full h-full z-1' style={{ backgroundImage: 'url(/bg2-min.jpg)' }} />
              <div className='absolute bg-stone-950 w-full h-full opacity-80 z-10' />
            </div>
          </div>
        </section>
        <SvgHLineRed width={100} height={100} position={'absolute'} left={-45} rotate={90} top={125} zIndex={1} />

        <Editor />
      </div>
    </>
  )
    ;
}
