import {useState, useCallback, useEffect } from "react";

const useLineUpdate = (neonTextRef, bottomLineRef, rightLineRef) => {
  const [averageVerticalPosition, setAverageVerticalPosition] = useState(0);

  const updateLines = useCallback(() => {
    const neonTextElement = neonTextRef.current;
    const bottomLineElement = bottomLineRef.current;
    const rightLineElement = rightLineRef.current;

    if (!neonTextElement) return;

    const paragraphs = neonTextElement.querySelectorAll('p');

    if (paragraphs.length === 0) return;

    const longestParagraph = [...paragraphs].reduce((max, p) => (p.offsetWidth > max.offsetWidth ? p : max), paragraphs[0]);

    const bottomLineLeft = longestParagraph.offsetLeft;
    const bottomLineWidth = longestParagraph.offsetWidth;

    const rightLineLeft = longestParagraph.offsetLeft + longestParagraph.offsetWidth + 2;
    const rightLineTop = longestParagraph.offsetTop;
    const rightLineHeight = neonTextElement.offsetHeight;
    const avgVerticalPosition = rightLineTop + rightLineHeight / 2;

    setAverageVerticalPosition(avgVerticalPosition);

    bottomLineElement.style.left = `${bottomLineLeft}px`;
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

  return averageVerticalPosition;
};

export default useLineUpdate;
