import React, { useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";
import ButtonWrapper from "@/components/SelectButton";
import WaterProofBtn from "@/components/Editor/Waterproof/WaterProofBtn";
import usePrice from "@/components/Editor/Size/usePrice";

const Waterproof = () => {
  const { state, dispatch } = useContext(EditorContext);
  const { SignModel, TextModel } = state;

  const setWaterProof = (value = false) => dispatch({
    type: 'SignActions',
    method: 'selectWaterproof',
    payload: { value }
  });


  return (
    <section className={'flex flex-col'}>
      <div className={'mt-4 mx-2 flex flex-row'}>
        <ButtonWrapper
          className={'pr-2 w-full'}
          onClick={() => setWaterProof(false)}
          selected={!SignModel.getWaterproof()}>
          <WaterProofBtn
            text={'У приміщенні'}
          />
        </ButtonWrapper>
        <ButtonWrapper
          className={'pr-2 w-full'}
          onClick={() => setWaterProof(true)}
          selected={SignModel.getWaterproof()}>
          <WaterProofBtn
            text={'Водонепроникна технологія IP67*'}
          >
            <span className={'font-bold pt-1'}>
              + {SignModel.getWaterproofPrice()}
            </span>
          </WaterProofBtn>
        </ButtonWrapper>
      </div>
      <div className={'flex flex-row text-sm text-gray-600 px-2'}>
        <div className={state.SignModel.getWaterproof() ? 'hidden' : 'inline-block'}>
          <p>
            Внутрішні знаки не підходять для використання на вулиці або в місцях, де вони можуть намокнути. Неналежне
            використання призведе до анулювання гарантії.
          </p>
        </div>
        <div className={!state.SignModel.getWaterproof() ? 'hidden' : 'inline-block'}>
          <p>
            <span className={'pr-0.5'}>*</span>
            <span className={'text-indigo-600'}>Custom Neon®</span>
            пропонує широкий асортимент зовнішніх вивісок із захистом від води IP67. Вони можуть бути виконані
            в тій же кольоровій гамі, що і наші вивіски для приміщень, і є ідеальним рішенням для зовнішнього
            використання.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Waterproof;
