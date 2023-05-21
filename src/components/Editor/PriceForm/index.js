import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const PriceForm = () => {
  const { state } = useContext(EditorContext);

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
        <p>Зробити замовлення</p>
      </div>
    </div>
  )
}

export default PriceForm;
