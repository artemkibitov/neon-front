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
    <div className={'flex flex-row justify-around items-center mt-4'}>
      <div>
        <p>Потужність блоку живлення</p>
      </div>
      <div className={'bg-gray-100 w-1/3 text-center py-1'}>
        <p>{selectedAdapter()}W</p>
      </div>
    </div>
  )
};

export default PowerAdapter;
