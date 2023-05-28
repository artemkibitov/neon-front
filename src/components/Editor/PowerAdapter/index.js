import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import SvgEllipse from "@/components/SVG/svg-ellips";

const PowerAdapter = () => {
  const { state } = useContext(EditorContext);
  const { SignModel } = state;

  const selectedAdapter = () => {
    const selectedKey = SignModel.getSelected();

    return SignModel.getPowerAdapter().get(selectedKey).adapter;
  }

  return (
    <div className={'mt-4 mx-2 relative'}>
      <div className={'relative flex flex-row justify-between font-bold items-center z-10'}>
        <div className={'text-sm text-slate-800'}>
          <p>Потужність блоку живлення</p>
        </div>
        <div className={'bg-slate-800 text-red-400 w-1/2 text-center py-1'}>
          <p>{selectedAdapter()}W</p>
        </div>
      </div>
      <SvgEllipse width={100} height={100} position={'absolute'} top={25} right={0} zIndex={1}/>
    </div>
  )
};

export default PowerAdapter;
