import React, { useRef, useState, useEffect } from "react";
import { priceFormat } from "@/components/Editor/Backboard/priceFormat";

const BackboardStyle = ({ BackboardModel, dispatch}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const toggleOpen = () => setIsOpen(!isOpen);
  const backboardStyles = BackboardModel.getStyles();
  const selectedStyle = BackboardModel.getSelectedStyle();
  const hidden = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible';

  const setSelectedStyle = (key) => {
    dispatch({
      type: 'BackboardActions',
      method: 'selectStyle',
      payload: { key }
    });

    dispatch({
      type: 'OrderActions',
      method: 'calculateTotal',
    })

    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <p className={'font-bold text-gray-700'}>ОБЕРИ ДОШКУ ДЛЯ НЕОНУ:</p>
      <div ref={dropdownRef} className={'relative'}>
        <div className={'flex flex-row items-center justify-center bg-gray-100 mx-2 rounded-lg'}>
          <div className={'flex flex-row items-center justify-center w-1/2'} onClick={toggleOpen}>
            <div className={'flex flex-col items-center bg-contain bg-no-repeat bg-center p-24'}
                 style={{ backgroundImage: `url(${selectedStyle.background})` }}>
              <span className={'absolute bottom-0'}>{priceFormat(selectedStyle.price)}</span>
            </div>
            <div className={'relative left-4 dropdown-icon'}/>
          </div>
        </div>
        <div
          className={`absolute p-2 border w-11/12 -left-1 drop-shadow-xl rounded-lg top-32 bg-gray-100 mx-6 
          transition-all duration-500 ease-in-out ${hidden}`}
        >
          {Array.from(backboardStyles).map(([index, { key, title, description, price }]) => (
              <div className={'flex flex-col p-2'} key={key} onClick={() => setSelectedStyle(key)}>
                <div className={'flex flex-row justify-between ' + (key === selectedStyle.key ? 'text-pink-400' : '')}>
                  <p>{title}</p>
                  <p>{priceFormat(price)}</p>
                </div>
                <p>{description}</p>
              </div>
            )
          )
          }
        </div>
      </div>
    </>
  );
};

export default BackboardStyle;
