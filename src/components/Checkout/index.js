import { useContext, useEffect, useRef } from "react";
import EditorContext from "@/components/Editor/editorContext";
import usePostApi from "@/components/hooks/usePostApi";
import Form from "@/components/Checkout/Form";

const Checkout = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();
  const sendImageRef = useRef(false); // замените useState на useRef

  const sendImageF = async () => {
    sendImageRef.current = true; // замените setSendImage на обновление current

    return await postApi.postData('/image/save', {
      image: state.OrderModel.getProductImage(),
      hash: state.OrderModel.getHash(),
    });
  }

  useEffect(() => {
    if (!sendImageRef.current) { // используйте sendImageRef.current вместо sendImage
      sendImageF();
    }
  }, []);

  return (
    <>
      <Form/>
      {state.OrderModel.getCustom() ?
        <div>
          <p>заповніть форму та отримайте консультацію в найближчі кілька хвилин, з обговоренням вашого особистого
            дизайну вивіски</p>
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
