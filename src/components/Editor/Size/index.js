'use strict';
import React, { useContext } from 'react';
import SizeBtn from './SizeBtn';
import useSizeOptions from './useSizeOptions';
import usePrice from './usePrice';
import EditorContext from "@/components/Editor/editorContext";
import ButtonWrapper from "@/components/SelectButton";

const Size = () => {
  const { state, dispatch } = useContext(EditorContext);
  const { SignModel, TextModel } = state;

  const sizeOptions = useSizeOptions(SignModel);
  const getPrice = usePrice(SignModel, TextModel);

  const selectOption = (key) => {
    dispatch({
      type: 'SignActions',
      method: 'selectOption',
      payload: { key },
    });
  };

  return (
    <section className={'mt-4 px-2'}>
      <p className={'font-bold text-gray-700'}>
        Обери свій розмір
      </p>
      <div className="flex flex-wrap">
        {sizeOptions.map(([key, option], index) => (
          <ButtonWrapper
            key={key + index}
            className={`w-1/2 pr-2 pb-2`}
            selected={SignModel.getSelected() === key}
            onClick={() => selectOption(key)}
          >
            <SizeBtn
              name={option.name}
              price={getPrice(key)}
              length={option.totalSize.width}
              height={option.totalSize.height}
            />
          </ButtonWrapper>
        ))}
      </div>
      <div className={'flex flex-row text-sm text-gray-600'}>
        <span className={'pr-0.5'}>*</span>
        <p>
          Кожен знак виготовляється індивідуально, а зазначені розміри будуть точними в межах 2 або 5 сантиметрів.
        </p>
      </div>
    </section>
  );
};

export default Size;
