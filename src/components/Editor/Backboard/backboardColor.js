import React, { useState } from "react";
import { priceFormat } from "@/components/Editor/Backboard/priceFormat";
import ModalImage from "@/components/ModalImage";

const BackboardColor = ({ BackboardModel, dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backboardColors = BackboardModel.getColors();
  const selectedBackboardColors = BackboardModel.getSelectedColor();
  const colorBorder = (key) => key === selectedBackboardColors.key ? 'border-emerald-500' : 'border-black'

  const selectColor = (key) => {
    dispatch({
      type: 'BackboardActions',
      method: 'selectColor',
      payload: { key }
    });

    dispatch({
      type: 'OrderActions',
      method: 'calculateTotal',
    });
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={'flex flex-col py-2'}>
      <p className={'font-bold'}>Виберіть колір акрилової дошки</p>
      <div className={'flex flex-row text-sm justify-between w-full py-2'}>
        <p>
          <span className={'text-emerald-500 text-lg font-bold'}>{selectedBackboardColors.price === 0 ? ' ' : '+' + selectedBackboardColors.price + ' '}</span>
          {selectedBackboardColors.title}
          {selectedBackboardColors.description}
        </p>
        <p className={'underline text-blue-500 cursor-pointer'}
          onClick={handleOpenModal}>
          Дивитися фото
        </p>
        <ModalImage isOpen={isModalOpen} onClose={handleCloseModal} src={selectedBackboardColors.image}/>
      </div>
      <div className={'flex flex-row justify-around'}>
        {
          Array.from(backboardColors).map(([key, value]) => (
            <div
              key={value.key}
              className={`border border-2 cursor-pointer rounded-md transition-colors ${colorBorder(value.key)}`}
              onClick={() => selectColor(value.key)}
            >
              <div className={'p-6 rounded-sm'} style={{ background: value.background }}></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BackboardColor;
