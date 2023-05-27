import React, { useContext, useEffect, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import html2canvas from "html2canvas";
import CheckoutLink from "@/components/CheckoutLink";
import usePostApi from "@/components/hooks/usePostApi";

const PriceForm = () => {
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
      console.log(e);
    }
  };

  return (
    <div className={'mt-4 mx-2'}>
      <div className={'bg-pink-400 p-1 rounded-md text-center my-1'}>
        <p className={'text-white text-sm'}>Термінове замовлення доступна при оформленні</p>
      </div>
      <div className={'flex flex-row justify-between items-center px-2 py-3 rounded-md bg-gray-300'}>
        <p>Разом з вибраними опціями:</p>
        <p className={'font-bold text-lg'}>{state.OrderModel.total}</p>
      </div>

      <div className={'bg-indigo-600 text-white font-bold text-2xl text-center rounded-md p-4 my-2'}>
        {
          isLoading ?
            <div className='spinner mx-auto'></div> :
            <CheckoutLink href="/checkout" isCustom={OrderModel.getCustom()} callback={handleSaveImage} OrderModel={OrderModel}>
              <span>Замовити</span>
            </CheckoutLink>
        }
      </div>
    </div>
  )
}

export default PriceForm;
