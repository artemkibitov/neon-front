import React, { useContext, useEffect, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import html2canvas from "html2canvas";
import CheckoutLink from "@/components/CheckoutLink";
import usePostApi from "@/components/hooks/usePostApi";
import SvgHLineYellow400 from "@/components/SVG/svg-h-line-yellow-400";

const PriceForm = ({isMobile = true}) => {
  const { state } = useContext(EditorContext);
  const { OrderModel } = state;
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveImage = async (hash, router, href) => {
    setIsLoading(true);

    if (!state.TextModel.getFirstInput()) {
      OrderModel.setCustom(true);
      return Promise.resolve(true);
    }

    const wrapElement = document.getElementById('render');
    const clone = await wrapElement.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.zIndex = 1;

    wrapElement.appendChild(clone);

    clone.querySelector(".bottom-handle")?.remove();
    clone.querySelector(".right-handle")?.remove();

    try {
      return html2canvas(clone).then((res) => {
        OrderModel.setCustom(false);
        OrderModel.setProductImage(res.toDataURL('image/jpeg', .8))
      });
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <div className={'mt-4 mx-2 text-stone-50 relative'}>
      <div className={'relative z-10'}>
        <div className={'bg-slate-800 p-1 rounded-md text-center my-1 overflow-hidden'}>
          <p className={'text-red-400 font-bold relative z-10'}>Термінове замовлення доступне при оформленні</p>
        </div>
        <div className={'flex flex-row font-bold justify-center items-center px-2 py-3 rounded-md bg-slate-800'}>
          <SvgHLineYellow400 width={100} height={100} zIndex={1} top={isMobile ? 0 : 15} left={isMobile ? 0 : -5} rotate={isMobile ? 0 : -15} position={'absolute'}/>

          <p>Разом з вибраними опціями:</p>
          <p className={'text-emerald-500 text-2xl mx-2'}>{state.OrderModel.total}</p>
        </div>
        <div className={'bg-emerald-600 font-bold text-2xl text-center rounded-md p-4 my-2'}>
          {
            isLoading ?
              <div className='spinner mx-auto'></div> :
              <CheckoutLink href="/checkout" isCustom={OrderModel.getCustom()} callback={handleSaveImage}
                            OrderModel={OrderModel}>
                <span>Замовити</span>
              </CheckoutLink>
          }
        </div>
      </div>
    </div>
  )
}

export default PriceForm;
