import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import Checkout from "@/components/Checkout";

const CheckoutPage = () => {

  return (
    <div className={'container'}>
      <section className={'mx-2'}>
        <h1 className={'text-4xl my-2 font-bold f-roboto text-center'}>Company Name</h1>
        <p>уже найближчим часом вивіска за вашим дизайном прикрашатиме ваш затишок або бізнес</p>
      </section>
      <Checkout/>
    </div>
  )
}

export default CheckoutPage;
