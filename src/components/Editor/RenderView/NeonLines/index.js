import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { VerticalLine, HorizontalLine } from './LineIndicators';
import EditorContext from "@/components/Editor/editorContext";

const NeonLines = ({ neonTextRef }) => {
  const { state } = useContext(EditorContext);
  const selectOption = state.SizeModel.getSelectedOption();

  console.log(selectOption);
  return (
    <>
    <div>{selectOption.name}</div>
    </>
  )
  // const { height, length } = state.SizeActions.selected.signLength;
  // const bottomLineRef = useRef();
  // const rightLineRef = useRef();
  // const [averageVerticalPosition, setAverageVerticalPosition] = useState(0);
  //
  //
  // const updateLines = useCallback(() => {
  //   const neonTextElement = neonTextRef.current;
  //   const bottomLineElement = bottomLineRef.current;
  //   const rightLineElement = rightLineRef.current;
  //
  //   if (!neonTextElement) return;
  //
  //   const paragraphs = neonTextElement.querySelectorAll('p');
  //
  //   if (paragraphs.length === 0) return;
  //
  //   const lastParagraph = paragraphs[paragraphs.length - 1];
  //   const longestParagraph = [...paragraphs].reduce((max, p) => (p.offsetWidth > max.offsetWidth ? p : max), paragraphs[0]);
  //
  //   const lastParagraphRect = lastParagraph.getBoundingClientRect();
  //   const neonTextRect = neonTextElement.getBoundingClientRect();
  //   const lastParagraphOffsetTop = lastParagraphRect.top - neonTextRect.top;
  //   const bottomLineLeft = longestParagraph.offsetLeft;
  //   // const bottomLineTop = lastParagraphOffsetTop + lastParagraph.offsetHeight + 20;
  //   const bottomLineWidth = longestParagraph.offsetWidth;
  //
  //   const rightLineLeft = longestParagraph.offsetLeft + longestParagraph.offsetWidth + 25;
  //   const rightLineTop = longestParagraph.offsetTop;
  //   const rightLineHeight = neonTextElement.offsetHeight;
  //   const avgVerticalPosition = rightLineTop + rightLineHeight / 2;
  //
  //   setAverageVerticalPosition(avgVerticalPosition);
  //
  //   bottomLineElement.style.left = `${bottomLineLeft}px`;
  //   // bottomLineElement.style.top = `${bottomLineTop}px`;
  //   bottomLineElement.style.width = `${bottomLineWidth}px`;
  //
  //   rightLineElement.style.left = `${rightLineLeft}px`;
  //   rightLineElement.style.top = `${rightLineTop}px`;
  //   rightLineElement.style.height = `${rightLineHeight}px`;
  // }, [neonTextRef]);
  //
  // useEffect(() => {
  //   const neonTextElement = neonTextRef.current;
  //
  //   if (!neonTextElement) return;
  //
  //   const observer = new MutationObserver(updateLines);
  //   observer.observe(neonTextElement, {
  //     childList: true,
  //     subtree: true,
  //     characterData: true,
  //   });
  //
  //   updateLines();
  //
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [neonTextRef, updateLines]);
  //
  // return (
  //   <>
  //     <HorizontalLine ref={bottomLineRef} neonLength={state.SizeActions.selected.signLength.length} width={length} left={0} bottom={0} />
  //     <VerticalLine
  //       ref={rightLineRef}
  //       height={height}
  //       top={0}
  //       right={0}
  //       averageVerticalPosition={averageVerticalPosition}
  //       neonHeight={state.SizeActions.selected.signLength.height}
  //     />
  //   </>
  // );
};

export default NeonLines;

