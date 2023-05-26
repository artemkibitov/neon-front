import React, { useContext, useEffect, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import html2canvas from "html2canvas";
import CheckoutLink from "@/components/CheckoutLink";
import usePostApi from "@/components/hooks/usePostApi";

const PriceForm = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();
  const { OrderModel } = state;

  const handleSaveImage = async (hash, router, href) => {
    const wrapElement = document.getElementById('render');
    const clone = await wrapElement.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.zIndex = 1;

    wrapElement.appendChild(clone);

    clone.querySelector(".bottom-handle")?.remove();
    clone.querySelector(".right-handle")?.remove();

    try {
    const canvas = await html2canvas(clone);
    const img = canvas.toDataURL('image/png', 1.0);
    const path = '/image/save';
    const payload = { data: img, hash: OrderModel.getHash() };
     return await postApi.postData(path, payload);
    } catch (e) {
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
        <CheckoutLink href="/checkout" callback={handleSaveImage} OrderModel={OrderModel}>
          <span>Замовити</span>
        </CheckoutLink>
      </div>
    </div>
  )
}

export default PriceForm;
