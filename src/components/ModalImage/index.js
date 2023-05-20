import React, {useState} from "react";

function ModalImage({ isOpen, onClose, src }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-white p-4 rounded-xl shadow-lg transform left-auto">
        <div
          className="bg-center bg-cover h-64 w-64"
          style={{ backgroundImage: `url(${src})` }}
        />
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Закрыть</button>
      </div>
    </div>
  );
}


export default ModalImage;
