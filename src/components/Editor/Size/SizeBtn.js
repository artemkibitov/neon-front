import React from "react";

const SizeBtn = ({ name, price, length, height }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-1">
        <p className="font-bold text-sm">{name.slice(0,1).toUpperCase() + name.slice(1)}</p>
        <p className={'w-1/2 justify-self-end flex text-sm text-gray-600'}>
          Length: <span className="text-right w-8">{length}</span>
        </p>
      </div>
      <div className="flex justify-between items-center pt-1">
        <p className="font-semibold">{price}</p>
        <p className={'w-1/2 justify-self-end flex text-sm text-gray-600'}>
          Height: <span className="text-right w-8">{height}</span>
        </p>
      </div>
    </div>
  );
};

export default SizeBtn;
