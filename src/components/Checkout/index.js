import { useContext, useEffect, useRef } from "react";
import EditorContext from "@/components/Editor/editorContext";
import usePostApi from "@/components/hooks/usePostApi";
import Form from "@/components/Checkout/Form";

const Checkout = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();
  const sendImageRef = useRef(false); // замените useState на useRef

  const sendImageF = async () => {
    sendImageRef.current = true;

    return await postApi.postData('/image/save', {
      image: state.OrderModel.getProductImage(),
      hash: state.OrderModel.getHash(),
    });
  }

  useEffect(() => {
    if (!sendImageRef.current && !state.OrderModel.getCustom()) {
      sendImageF();
    }
  }, [sendImageF, state.OrderModel]);

  return (
    <>
      <Form/>
      {state.OrderModel.getCustom() ?
        <div className={'mx-2'}>
          <p>заповніть, будь ласка, форму, щоб ми знали як до вас звертатися і могли зв&apos;язатися з вами для уточнення
            деталей</p>
        </div>
        :
        <div
          className={'p-40 bg-no-repeat bg-contain bg-center'}
          style={{ backgroundImage: `url(${state.OrderModel.getProductImage()})` }}
        />
      }
    </>
  );
};

export default Checkout;
