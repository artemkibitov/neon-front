import React, {useContext, useEffect, useRef, useState} from "react";
import EditorContext from "@/components/Editor/editorContext";

const NeonText = ({ parentElement }) => {
  const {state} = useContext(EditorContext);
  const element = useRef();
  const [neonFontSize, setNeonFontSize] = useState(75);
  const [cssClass, setCssClass] = useState([
    'neon-text',
    'absolute',
    'top-12'
  ]);

  const whiteSpace = 'pre-wrap';

  const createTextElement = (key, line, fontSize) => (
    <p key={key} style={{ fontSize, whiteSpace, lineHeight: '95%' }}>{line}</p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={{ whiteSpace, lineHeight: '25%' }}> </p>
  );

  const createElementsForEmptyLines = (lines, i) => {
    const nextNonEmptyLineIndex = lines.slice(i + 1).findIndex(line => line.length > 0);
    const additionalEmptyLinesCount = nextNonEmptyLineIndex === -1 ? 0 : nextNonEmptyLineIndex -1;

    if (additionalEmptyLinesCount > 0) {
      return Array(additionalEmptyLinesCount)
        .fill(null)
        .map((_, index) => createElementsForEmptyLines(`${i}-spacer-${index}`));
    } else {
      return [];
    }
  };

  const textFormat = (text, neonFontSize) => {
    const lines = text.split('\n');

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
  };

  useEffect(() => {
    const handleResize = (entries) => {
      const parentWidth = parentElement.current.getBoundingClientRect().width;
      const childWith = entries.at(0).contentRect.width;
      const widthRatioPercent = (childWith / parentWidth) * 100;

      if (widthRatioPercent >= 65) {
        const value = state.text.length % 2 === 0 ? 5 : 4;
        setNeonFontSize(neonFontSize - value);
      }

      console.log(widthRatioPercent);
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    }
  }, [state.text.value])

  return (
    <div ref={element} className={ cssClass.join(' ') }>
      {textFormat(state.text.value)}
    </div>
  );
};

export default NeonText;
