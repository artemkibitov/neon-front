import React, { useContext, useEffect } from 'react';
import usePostApi from "@/components/hooks/usePostApi";
import EditorContext from "@/components/Editor/editorContext";

const MyButton = () => {
  const { state } = useContext(EditorContext);
  const postApi = usePostApi();

  const handleClick = async () => {
    postApi.postData('/image/get', { hash: state.OrderModel.getHash() });
  };

  // Используйте этот эффект для обработки ответа, когда он меняется
  useEffect(() => {
    if (postApi.response) {
      // обработайте ответ здесь
      console.log('Обработанный ответ:', postApi.response);
    }
  }, [postApi.response]);

  return (
    <div>
      <button onClick={handleClick}>Test Request</button>
      {postApi.isLoading ? (
        <div>Loading...</div>
      ) : postApi.error ? (
        <div>Error: {postApi.error.message}</div>
      ) : postApi.response ? (
        <div className={'h-24'}>
          <img src={`data:image/jpeg;base64,${postApi.response}`}/>
        </div>
      ) : null}
    </div>
  );
};

export default MyButton;
