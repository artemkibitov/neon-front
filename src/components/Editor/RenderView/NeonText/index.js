import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import NeonLines from "@/components/Editor/RenderView/NeonLines";

const NeonText = forwardRef(({ parentElement }, ref) => {
  const { state } = useContext(EditorContext);
  const element = useRef();
  const [neonFontSize, setNeonFontSize] = useState(65);
  const [prevTextLength, setPrevTextLength] = useState(state.TextActions.value.length);
  const [textChanged, setTextChanged] = useState(false);
  const whiteSpace = 'pre-wrap';

  const styles = {
    text: {
      fontSize: neonFontSize,
      whiteSpace,
      lineHeight: '95%',
    },
    emptyLine: {
      whiteSpace,
      lineHeight: '20%',
    },
  };

  const createTextElement = (key, line) => (
    <p key={key} style={styles.text}>{line}</p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={styles.emptyLine} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></p>
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
    const lines = state.TextActions.value.split('\n');

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
  }, [state.TextActions.value, neonFontSize]);

  const handleResize = (entries) => {
    const parentWidth = parentElement.current.getBoundingClientRect().width;
    const childWidth = entries[0]?.contentRect.width || 0;
    const widthRatioPercent = (childWidth / parentWidth) * 100;

    if (textChanged && widthRatioPercent >= 65 && neonFontSize > 10) {
      setNeonFontSize(neonFontSize - 5);
    } else if (!textChanged && widthRatioPercent < 65 && neonFontSize < 75) {
      setNeonFontSize(neonFontSize + 5);
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    observer.observe(element.current);

    const currentTextLength = state.TextActions.value.length;

    if (currentTextLength !== prevTextLength) {
      setTextChanged(currentTextLength > prevTextLength);
      setPrevTextLength(currentTextLength);
    }

    return () => {
      observer.disconnect();
    };
  }, [parentElement, state.TextActions.value, neonFontSize, textChanged, prevTextLength]);

  return (
    <div ref={element} className="neon-text absolute top-12">
      {formattedText}
      <NeonLines neonTextRef={element}/>
    </div>
  );
});

export default NeonText;
