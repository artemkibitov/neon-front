import React, { useContext, useState, useEffect } from "react";
import EditorContext from "@/components/Editor/editorContext";
import Link from "next/link";
import html2canvas from "html2canvas";
import CheckoutLink from "@/components/CheckoutLink";

const PriceForm = () => {
  const { state } = useContext(EditorContext);
  const { OrderModel } = state;
  const [imageSaved, setImageSaved] = useState(false);

  const handleLinkClick = async (hash) => {
    const wrapElement = document.getElementById('render')
    const clone = await wrapElement.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.zIndex = 1;

    wrapElement.appendChild(clone);

    clone.querySelector(".bottom-handle")?.remove();
    clone.querySelector(".right-handle")?.remove();

    if (!OrderModel.getHash().length) OrderModel.setHash();

    if (!imageSaved) {
      html2canvas(clone).then(async canvas => {
        const img = canvas.toDataURL('image/png', 1.0);

        fetch(process.env.API_HOST + '/api/image/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: img,
            hash,
          })
        })
          .then(res => console.log(res))
          .catch(e => console.error(e));

        // const image = canvas.toDataURL("image/png");
        // localStorage.setItem('snapshotImage', image);
        // setImageSaved(true);
        // Выполнение перехода по ссылке после сохранения фотографии
        // window.location.href = '/checkout';
      });
    } else {
      // Если фотография уже сохранена, выполняем переход по ссылке
      // window.location.href = '/checkout';
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
        <CheckoutLink OrderModel={OrderModel} callback={handleLinkClick} href="/checkout">
          <span>Замовити</span>
        </CheckoutLink>
      </div>
    </div>
  )
}

export default PriceForm;
