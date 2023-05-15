import React from "react";

const SizeBtn = ({ selected, name, price, length, height, onClick }) => {
  const bgClassName = selected ? 'border-pink-300 bg-white': 'border-gray-100 bg-gray-100';

  return (
    <div className={`w-full`} onClick={onClick}>
      <div className={"flex flex-col justify-around border p-2 rounded-lg transition-colors " + bgClassName} >
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
    </div>
  );
};

export default SizeBtn;
