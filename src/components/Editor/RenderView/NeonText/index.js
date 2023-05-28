import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import NeonLines from "@/components/Editor/RenderView/NeonLines/index";
import TextElements from "@/components/Editor/RenderView/NeonText/TextElement";

const NeonText = forwardRef(({ parentElement, isMobile }, ref) => {
  const { state } = useContext(EditorContext);
  const { SignModel } = state;
  const defaultSize = isMobile ? 42 : 80
  const [neonFontSize, setNeonFontSize] = useState(defaultSize);
  const [lineHeight, setLineHeight] = useState(100);
  const [prevTextLength, setPrevTextLength] = useState(state.TextModel.value.length);
  const textLightShadow = SignModel.getSelectedLightOption();
  const [textChanged, setTextChanged] = useState(false);
  const element = useRef();
  const whiteSpace = 'pre-wrap';

  const styles = {
    text: {
      fontSize: neonFontSize,
      whiteSpace,
      lineHeight: lineHeight + '%',
    },
    emptyLine: {
      whiteSpace,
      lineHeight: '20%',
    },
  };
  const reset = () => {
    setNeonFontSize(defaultSize);
    setLineHeight(100);
  }
  useEffect(() => {
    const handleResize = (entries) => {
      if (!parentElement || !parentElement.current) {
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
        const index = state.TextModel.chars % 2 === 0 ? 3 : 4
        setNeonFontSize(neonFontSize - index);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(element.current);

    const currentTextLength = state.TextModel.value.length;

    if (currentTextLength !== prevTextLength) {
      setTextChanged(currentTextLength > prevTextLength);
      setPrevTextLength(currentTextLength);
    }

    return () => {
      observer.disconnect();
    };
  }, [parentElement, state.TextModel.value, neonFontSize, textChanged, prevTextLength]);

  const formattedText = useMemo(() => {
    const lines = state.TextModel.getOriginal().split('\n');
    return <TextElements lines={lines} textLightShadow={textLightShadow} styles={styles}/>;
  }, [state.TextModel.original, neonFontSize, textLightShadow, SignModel.getSelectedLightOption()]);

  return (
    <div ref={element} className="neon-text text-white absolute top-12">
      {formattedText}
      <NeonLines neonTextRef={element}/>
    </div>
  );
});

NeonText.displayName = 'NeonText';
export default NeonText;
