import React, { useRef, useContext } from 'react';
import { VerticalLine, HorizontalLine } from './LineIndicators';
import EditorContext from "@/components/Editor/editorContext";
import useLineUpdate from "@/components/Editor/RenderView/NeonLines/util/updateLines";

const NeonLines = ({ neonTextRef }) => {
  const { state } = useContext(EditorContext);
  const bottomLineRef = useRef();
  const rightLineRef = useRef();

  const selectOption = state.SignModel.getSelectedSizeOption();
  const { width, height } = selectOption.totalSize;

  const averageVerticalPosition = useLineUpdate(neonTextRef, bottomLineRef, rightLineRef);

  return (
    <>
      <HorizontalLine ref={bottomLineRef} neonLength={width} width left={0} bottom={0} />
      <VerticalLine
        ref={rightLineRef}
        height={height}
        top={0}
        right={0}
        averageVerticalPosition={averageVerticalPosition}
        neonHeight={height}
      />
    </>
  );
};

export default NeonLines;
