import React from 'react';
import useOrder from "@/components/OrderButton/hook/useOrder";
import EditorContext from "@/components/Editor/editorContext";

const OrderButton = () => {
  const { sendOrder } = useOrder(EditorContext)
}
