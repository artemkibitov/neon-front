import React, { useContext, useEffect, useState, useRef } from 'react';
import EditorContext from "@/components/Editor/editorContext";
import styles from "@/components/Editor/RenderView/NeonLines/styles";


const NeonLines = ({ neonTextRef }) => {
  const bottomLineRef = useRef();
  const rightLineRef = useRef();

  const updateLines = () => {
    const neonTextElement = neonTextRef.current;
    const bottomLineElement = bottomLineRef.current;
    const rightLineElement = rightLineRef.current;

    if (!neonTextElement) return;

    const paragraphs = neonTextElement.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    const longestParagraph = [...paragraphs].reduce((max, p) => (p.offsetWidth > max.offsetWidth ? p : max), paragraphs[0]);

    const bottomLineLeft = longestParagraph.offsetLeft;
    const bottomLineTop = lastParagraph.offsetTop + lastParagraph.offsetHeight + 10;
    const bottomLineWidth = longestParagraph.offsetWidth;
    const rightLineLeft = longestParagraph.offsetLeft + longestParagraph.offsetWidth + 10;
    const rightLineTop = longestParagraph.offsetTop;
    const rightLineHeight = neonTextElement.offsetHeight;

    bottomLineElement.style.left = `${bottomLineLeft}px`;
    bottomLineElement.style.top = `${bottomLineTop}px`;
    bottomLineElement.style.width = `${bottomLineWidth}px`;

    rightLineElement.style.left = `${rightLineLeft}px`;
    rightLineElement.style.top = `${rightLineTop}px`;
    rightLineElement.style.height = `${rightLineHeight}px`;
  };

  useEffect(() => {
    const neonTextElement = neonTextRef.current;

    if (!neonTextElement) return;

    const observer = new MutationObserver(updateLines);
    observer.observe(neonTextElement, { childList: true, subtree: true, attributes: true, characterData: true });

    return () => {
      observer.disconnect();
    };
  }, [neonTextRef]);

  return (
    <div className="line-container absolute">
      <div ref={bottomLineRef} className="line-bottom bg-gray-500 h-1" />
      <div ref={rightLineRef} className="line-right bg-gray-500 w-1" />
    </div>
  );
};

export default NeonLines;
