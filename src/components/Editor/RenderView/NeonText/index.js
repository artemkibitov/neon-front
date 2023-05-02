import React, { useContext, useRef, useState, useEffect, useMemo } from 'react';
import EditorContext from "@/components/Editor/editorContext";

const NeonText = ({ parentElement }) => {
  const { state } = useContext(EditorContext);
  const element = useRef();
  const [neonFontSize, setNeonFontSize] = useState(75);

  const whiteSpace = 'pre-wrap';

  const createTextElement = (key, line, fontSize) => (
    <p key={key} style={{ fontSize, whiteSpace, lineHeight: '95%' }}>{line}</p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={{ whiteSpace, lineHeight: '25%' }}> </p>
  );

  const createElementsForEmptyLines = (lines, i) => {
    const nextNonEmptyLineIndex = lines.slice(i + 1).findIndex(line => line.length > 0);
    const additionalEmptyLinesCount = nextNonEmptyLineIndex === -1 ? 0 : nextNonEmptyLineIndex - 1;

    if (additionalEmptyLinesCount > 0) {
      return Array(additionalEmptyLinesCount)
        .fill(null)
        .map((_, index) => createEmptyLineElement(`${i}-spacer-${index}`)); // Используйте createEmptyLineElement вместо createElementsForEmptyLines
    } else {
      return [];
    }
  };

  const formattedText = useMemo(() => {
    const lines = state.text.value.split('\n');

    return lines.flatMap((line, i, arr) => {
      const hasText = line.length > 0;
      const elements = [];

      if (hasText) {
        elements.push(createTextElement(i, line, neonFontSize));
      } else {
        elements.push(createEmptyLineElement(`${i}-empty`));
        elements.push(...createElementsForEmptyLines(arr, i));
      }

      return elements;
    });
  }, [state.text.value, neonFontSize]);

  useEffect(() => {
    const handleResize = (entries) => {
      const parentWidth = parentElement.current.getBoundingClientRect().width;
      const childWidth = entries[0]?.contentRect.width || 0;
      const widthRatioPercent = (childWidth / parentWidth) * 100;

      if (widthRatioPercent >= 65) {
        const value = state.text.value.length % 2 === 0 ? 5 : 4;
        setNeonFontSize(neonFontSize - value);
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, [parentElement, state.text.value, neonFontSize]);

  return (
    <div ref={element} className="neon-text absolute top-12">
      {formattedText}
    </div>
  );
};

export default NeonText;
