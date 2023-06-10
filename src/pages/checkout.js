import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import Checkout from "@/components/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <div className={'relative z-20'}>
        <div className={'bg-slate-800 w-full py-2 relative z-10'}>
          <h1 className={'text-white f-montse font-bold text-stone-50 text-4xl text-center'}>Neoner</h1>
        </div>
      </div>
      <div className={'container overflow-hidden mx-auto'}>
        <Checkout />
      </div>
    </>
  );
};

export default CheckoutPage;
