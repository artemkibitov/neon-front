import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import styles from "@/components/Editor/RenderView/NeonLines/styles";


const NeonLines = ({ neonTextRef }) => {
  const bottomLineRef = useRef();
  const rightLineRef = useRef();

  const updateLines = useCallback(() => {
    const neonTextElement = neonTextRef.current;
    const bottomLineElement = bottomLineRef.current;
    const rightLineElement = rightLineRef.current;

    if (!neonTextElement) return;

    const paragraphs = neonTextElement.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    const longestParagraph = [...paragraphs].reduce((max, p) => (p.offsetWidth > max.offsetWidth ? p : max), paragraphs[0]);

    const bottomLineLeft = longestParagraph.offsetLeft;
    const bottomLineTop = lastParagraph.offsetTop + lastParagraph.offsetHeight + 25;
    const bottomLineWidth = longestParagraph.offsetWidth;
    const rightLineLeft = longestParagraph.offsetLeft + longestParagraph.offsetWidth + 25;
    const rightLineTop = longestParagraph.offsetTop;
    const rightLineHeight = neonTextElement.offsetHeight;

    bottomLineElement.style.left = `${bottomLineLeft}px`;
    bottomLineElement.style.top = `${bottomLineTop}px`;
    bottomLineElement.style.width = `${bottomLineWidth}px`;

    rightLineElement.style.left = `${rightLineLeft}px`;
    rightLineElement.style.top = `${rightLineTop}px`;
    rightLineElement.style.height = `${rightLineHeight}px`;
  }, [neonTextRef]);

  useEffect(() => {
    const neonTextElement = neonTextRef.current;

    if (!neonTextElement) return;

    const observer = new MutationObserver(updateLines);
    observer.observe(neonTextElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    updateLines();

    return () => {
      observer.disconnect();
    };
  }, [neonTextRef, updateLines]);

  return (
    <div>
      <div
        ref={bottomLineRef}
        style={{ position: 'absolute', backgroundColor: 'red', height: '2px' }}
      />
      <div
        ref={rightLineRef}
        style={{ position: 'absolute', backgroundColor: 'red', width: '2px' }}
      />
    </div>
  );
};

export default NeonLines;
