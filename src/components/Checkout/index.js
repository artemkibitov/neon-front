import React, { useContext, useEffect, useState } from "react";
import EditorContext from "@/components/Editor/editorContext";
import TextImageGenerator from "@/components/TextImageGenerator";
import html2canvas from "html2canvas";
import Form from "@/components/Checkout/Form";
import usePostApi from "@/components/hooks/usePostApi";

const Checkout = () => {
  const { state } = useContext(EditorContext);
  const [image, setImage] = useState(null);

  const { response, isLoading } = usePostApi(
    process.env.API_HOST + "/api/image/get",
    { hash: state.OrderModel.getHash() }
  );

  useEffect(() => {
    if (response) {
      setImage(response);
    }
    console.log(1);

  }, []);

  return (
    <>
      <Form/>
      <div className="w-full h-32">
        {image && (
          <div
            className="w-full h-full bg-contain bg-no-repeat bg-center p-40"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
    </>
  );
};

export default Checkout;
