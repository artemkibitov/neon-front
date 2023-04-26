import React, { useEffect, useRef, useState, useContext } from "react";
import EditorContext from "@/components/Editor/editorContext";

const NeonText = ({ parentRef }) => {
  const { state } = useContext(EditorContext);
  const textRef = useRef();
  const [neonFontSize, setNeonFontSize] = useState(75);
  const [cssClass, setCssClass] = useState([
    'neon-text',
    'absolute',
    'top-12'
  ]);

  const textFormat = (text) => text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line.length ? <p style={{fontSize: neonFontSize}}>{line}</p> : null}
      {i !== arr.length - 1 && <p style={{lineHeight: '0'}}><br/></p>}
    </React.Fragment>
  ));

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
  }, [state.text])

  return (
    <div ref={textRef} className={cssClass.join(' ')}>
      {textFormat(state.text)}
    </div>
  );
};

export default NeonText;
