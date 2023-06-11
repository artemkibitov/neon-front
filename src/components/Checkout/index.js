import { useContext, useEffect, useRef, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import usePostApi from "@/components/hooks/usePostApi";
import Form from "@/components/Checkout/Form";
import OrderData from './OrderData';

const Checkout = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();
  const sendImageRef = useRef(false);

  const sendImageF = async () => {
    sendImageRef.current = true;

    return await postApi.postData('/image/save', {
      image: state.OrderModel.getProductImage(),
      hash: state.OrderModel.getHash(),
    });
  }

  useEffect(() => {
    if (!sendImageRef){
    sendImageF();
  }
  console.log('response:', postApi.response)

  }, [sendImageF, state.OrderModel, postApi.response]);

  return (
    <div className='flex flex-col lg:flex-row mt-2 bg-stone-100 py-4 px-2'>
      <div className='px-2 flex flex-col justify-center items-center lg:w-4/6'>
        <div className='w-full lg:w-4/6'>
          <p>
            Заповніть, будь ласка, форму, щоб ми знали як до вас звертатися і могли зв&apos;язатися з вами для уточнення
            деталей
          </p>
        </div>
        <Form />
      </div>
      <div className='md:w-4/6'>
        <OrderData />
      </div>
    </div>
  );
};

export default Checkout;
