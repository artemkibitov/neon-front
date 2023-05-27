import { useContext, useEffect } from "react";
import EditorContext from "@/components/Editor/editorContext";
import usePostApi from "@/components/hooks/usePostApi";
import Form from "@/components/Checkout/Form";

const Checkout = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();

  useEffect(() => {
    postApi.postData('/image/get', { hash: state.OrderModel.getHash() })
  }, []);

  return (
    <>
      <Form/>
      <div className={'pt-2'}>
        {state.OrderModel.custom ? <div>Круто</div> :
            postApi.isLoading ? (
              <div>Loading...</div>
            ) : postApi.error ? (
              <div>Error: {postApi.error.message}</div>
            ) : postApi.response ? (
              <div className={'h-24'}>
                <div
                  className={'p-40 bg-no-repeat bg-contain bg-center'}
                  style={{ backgroundImage: `url(data:image/png;base64,${postApi.response})` }}
                />
              </div>
            ) : null
        }
      </div>
    </>
  );
};

export default Checkout;
