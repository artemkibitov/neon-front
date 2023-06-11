import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import NeonLines from "@/components/Editor/RenderView/NeonLines/index";
import TextElements from "@/components/Editor/RenderView/NeonText/TextElement";

const NeonText = forwardRef(({ parentElement, isMobile }, ref) => {
  const { state } = useContext(EditorContext);
  const { SignModel, TextModel } = state;

  const defaultSize = isMobile ? 42 : 75
  const [neonFontSize, setNeonFontSize] = useState(defaultSize);
  const [key, setKey] = useState(0);
  const [lineHeight, setLineHeight] = useState(100);
  const [prevTextLength, setPrevTextLength] = useState(TextModel.value.length);
  const [textChanged, setTextChanged] = useState(false);

  const element = useRef();

  const handleResize = (entries) => {
    if (!parentElement?.current) {
      return;
    }

    const parentWidth = parentElement.current.getBoundingClientRect().width;
    const parentHeight = parentElement.current.getBoundingClientRect().height;
    const childWidth = entries[0]?.contentRect.width || 0;
    const childHeight = entries[0]?.contentRect.height || 0;
    const widthRatioPercent = (childWidth / parentWidth) * 100;
    const heightRatioPercent = (childHeight / parentHeight) * 100;

    if (textChanged && (widthRatioPercent >= 68 || heightRatioPercent >= 70) && neonFontSize > 10) {
      if (neonFontSize < 35 && lineHeight < 120) setLineHeight(120);
      const index = TextModel.chars % 2 === 0 ? 3 : 4
      setNeonFontSize(neonFontSize - index);
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    observer.observe(element.current);

    const currentTextLength = TextModel.value.length;

    if (currentTextLength !== prevTextLength) {
      setTextChanged(currentTextLength > prevTextLength);
      setPrevTextLength(currentTextLength);
    }

    // const selectedLightOption = SignModel.getSelectedLightOption();

    return () => {
      observer.disconnect();
    };
  }, [parentElement, TextModel.value, neonFontSize, textChanged, prevTextLength, lineHeight, TextModel.chars]);

  useEffect(() => {
    setKey(Math.random());
    console.log('yep');
  }, [SignModel.getSelectedLightOption()]);
  return (
    <div ref={element} className="neon-text text-white absolute top-12">
      <TextElements
        key={key}
        className='relative z-20'
        lines={TextModel.getOriginal().split('\n')}
        textLightShadow={SignModel.getSelectedLightOption()}
        styles={{
          text: {
            fontSize: neonFontSize,
            whiteSpace: 'pre-wrap',
            lineHeight: `${lineHeight}%`,
          },
          emptyLine: {
            whiteSpace: 'pre-wrap',
            lineHeight: '20%',
          },
        }}
      />
      <NeonLines className='relative z-0' neonTextRef={element} />
    </div>
  );
});

NeonText.displayName = 'NeonText';
export default NeonText;
