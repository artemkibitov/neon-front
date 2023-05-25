import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import NeonLines from "@/components/Editor/RenderView/NeonLines/index";

const NeonText = forwardRef(({ parentElement, isMobile }, ref) => {
  const { state } = useContext(EditorContext);
  const { SignModel } = state;
  const element = useRef();
  const defaultSize = isMobile ?  45 : 65
  const [neonFontSize, setNeonFontSize] = useState(defaultSize);
  const [lineHeight, setLineHeight] = useState(100);
  const [prevTextLength, setPrevTextLength] = useState(state.TextModel.value.length);
  const textLightShadow = SignModel.getSelectedLightOption();
  const [textChanged, setTextChanged] = useState(false);
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


  const createTextElement = (key, line) => (
    <p key={key} style={{ textShadow: textLightShadow.value ,...styles.text }} className={'neon-sign'}>{line}</p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={styles.emptyLine} className={'neon-sign'} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></p>
  );

  const createElementsForEmptyLines = (lines, i) => {
    if (i === 0 || lines[i - 1].length > 0) {
      const nextNonEmptyLineIndex = lines.slice(i + 1).findIndex(line => line.length > 0);
      const additionalEmptyLinesCount = nextNonEmptyLineIndex === -1 ? 0 : nextNonEmptyLineIndex;

      return Array(additionalEmptyLinesCount)
        .fill(null)
        .map((_, index) => createEmptyLineElement(`${i}-spacer-${index}`));
    }
    return [];
  };

  const formattedText = useMemo(() => {
    const lines = state.TextModel.getOriginal().split('\n');

    return lines.flatMap((line, i, arr) => {
      const hasText = line.length > 0;
      const elements = [];

      if (hasText) {
        elements.push(createTextElement(i, line));
      } else {
        elements.push(createEmptyLineElement(`${i}-empty`));
        elements.push(...createElementsForEmptyLines(arr, i));
      }

      return elements;
    });
  }, [state.TextModel.original, neonFontSize, textLightShadow]);

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
    if (textChanged && (state.TextModel.chars < 20 && neonFontSize < 25)) setNeonFontSize(defaultSize);
  };

  useEffect(() => {
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

  return (
    <div ref={element} className="neon-text text-white absolute top-12 translate-x-16">
      {formattedText}
      <NeonLines neonTextRef={element} />
    </div>
  );
});

NeonText.displayName = 'NeonText';

const ForwardedNeonText = forwardRef((props, ref) => <NeonText {...props} ref={ref} />);
ForwardedNeonText.displayName = 'ForwardedNeonText';
export default ForwardedNeonText;
