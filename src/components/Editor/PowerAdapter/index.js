import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const PowerAdapter = () => {
  const { state } = useContext(EditorContext);
  const { SignModel } = state;

  const selectedAdapter = () => {
    const selectedKey = SignModel.getSelected();

    return SignModel.getPowerAdapter().get(selectedKey).adapter;
  }

  return (
    <div className={'flex flex-row justify-between items-center mt-4 mx-2'}>
      <div className={'text-sm font-bold'}>
        <p>Потужність блоку живлення</p>
      </div>
      <div className={'bg-gray-100 w-1/2 text-center py-1'}>
        <p>{selectedAdapter()}W</p>
      </div>
    </div>
  )
};

export default PowerAdapter;
