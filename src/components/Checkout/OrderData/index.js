import React, { useContext, useEffect } from 'react';
import EditorContext from '@/components/Editor/editorContext';
import { createOrderData } from '@/components/util/createOrderData';

const OrderData = () => {
  const { state } = useContext(EditorContext);
  const { OrderModel, SignModel, BackboardModel } = state;

  const selectedSign = SignModel.getSelectedSizeOption();
  const selectedLight = SignModel.getSelectedLightOption().title;

  const data = {
    'Висота': selectedSign.height + ' см.',
    'Ширина': selectedSign.width + ' см.',
    'Колір неону': selectedLight,
    'Потужність блоку живлення': SignModel.getPowerAdapter().get(selectedSign.key).adapter + ' ват\\г',
    'Стиль підкладки для неону': BackboardModel.getSelectedStyle().title,
    'Колір підкладки': BackboardModel.getSelectedColor().title,
    'Тип використання': SignModel.getWaterproofPrice() > 0 ? 'Для зовнішнього і всередині приміщення' : 'Лише всередині приміщення',
    'Сума вашого замовлення': OrderModel.getTotal()
  };

  if (state.OrderModel.getCustom()) {
    return (
      <div className='relative'>
        <div
          className={'p-60 neon-works bg-cover bg-repeat-x'}
          style={{ backgroundImage: `url(/bg2-min.jpg)` }}
        />
        <div className='absolute bottom-0 bg-slate-800 w-full py-4 text-center bg-opacity-70'>
          <p className='text-slate-50 font-bold'>Зробимо для вас яскравий стиль</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className='flex justify-center'>
          <div className='p-40 bg-cover bg-no-repeat' style={{backgroundImage: `url(${OrderModel.productImage})`}} />
        </div>
        <div className='bg-stone-200 rounded-lg md:p-2 md:mt-2'>
          <p className='text-center text-xl'>Параметри вашого замовлення</p>
          <div className='flex flex-col py-2'>
            {Object.keys(data).map((item, index) => (
              <div key={index} className={`flex align-center py-1`}>
                <p className='text-slate-950'><span>{item}:</span><span className='pl-2'>{data[item]}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default OrderData;
