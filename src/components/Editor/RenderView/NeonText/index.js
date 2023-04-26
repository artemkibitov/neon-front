import React, {useEffect, useRef, useState, useContext} from "react";
import EditorContext from "@/components/Editor/editorContext";

const NeonText = ({parentRef}) => {
  const {state} = useContext(EditorContext);
  const textRef = useRef();
  const [neonFontSize, setNeonFontSize] = useState(75);
  const [cssClass, setCssClass] = useState([
    'neon-text',
    'absolute',
    'top-12'
  ]);

  const createTextElement = (line, fontSize) => (
    <p style={{ fontSize, whiteSpace: 'pre-wrap', lineHeight: '95%' }}>
      {line}
    </p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={{ whiteSpace: 'pre-wrap', lineHeight: '25%' }}> </p>
  );

  const createElementsForEmptyLines = (lines, i) => {
    const nextNonEmptyLineIndex = lines.slice(i + 1).findIndex((line) => line.length > 0);
    const additionalEmptyLinesCount = nextNonEmptyLineIndex === -1 ? 0 : nextNonEmptyLineIndex - 1;

    if (additionalEmptyLinesCount > 0) {
      return Array(additionalEmptyLinesCount).fill(null).map((_, index) => createEmptyLineElement(`${i}-spacer-${index}`));
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
        elements.push(createTextElement(line, neonFontSize));
      } else {
        elements.push(createEmptyLineElement(`${i}-empty`));
        elements.push(...createElementsForEmptyLines(arr, i));
      }

      return elements;
    });
  };

  // const textFormat = (text) => {
  //   const lines = text.split('\n');
  //
  //   return lines.flatMap((line, i, arr) => {
  //     const hasText = line.length > 0;
  //     const elements = [];
  //     const defaultStyle = { fontSize: neonFontSize, whiteSpace: 'pre-wrap'}
  //
  //     if (hasText) {
  //       elements.push(
  //         <p
  //           key={i}
  //           style={{ ...defaultStyle, lineHeight: '100%' }}
  //         >
  //           {line}
  //         </p>
  //       );
  //     } else {
  //       elements.push(<p key={`${i}-empty`} style={{ ...defaultStyle, lineHeight: '10px' }}> </p>);
  //
  //       const nextNonEmptyLineIndex = arr.slice(i + 1).findIndex(line => line.length > 0);
  //       const isNextLineEmpty = nextNonEmptyLineIndex === -1 ? false : arr[i + nextNonEmptyLineIndex + 1].length === 0;
  //
  //       if (isNextLineEmpty) {
  //         elements.push(<p key={`${i}-spacer`} style={{ lineHeight: '10px' }}></p>);
  //       }
  //     }
  //
  //     return elements;
  //   });
  // };
  // const textFormat = (text) => text.split('\n').map((line, i, arr) => (
  //   <React.Fragment key={i}>
  //     {line.length ? <p style={{fontSize: neonFontSize}}>{line}</p> : <p style={{lineHeight: "10px"}}></p>}
  //     {i !== arr.length - 1 && <p style={{lineHeight: '25px'}}><br/></p>}
  //   </React.Fragment>
  // ));

  useEffect(() => {
    const handleResize = (entries) => {
      const parentWidth = parentRef.current.getBoundingClientRect().width;
      const childWith = entries.at(0).contentRect.width;
      const widthRatioPercent = (childWith / parentWidth) * 100;

      if (widthRatioPercent >= 65) {
        const value = state.text.length % 2 === 0 ? 5 : 4;
        setNeonFontSize(neonFontSize - value);
      }
      // for (const enter of entries) {
      //   childWith = enter.contentRect.width;
      // }

      console.log(widthRatioPercent);
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    }
  }, [state.text.value])

  return (
    <div ref={textRef} className={cssClass.join(' ')}>
      {textFormat(state.text.value)}
    </div>
  );
};

export default NeonText;
