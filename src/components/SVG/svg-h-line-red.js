import React from "react";
import HLineCyan300 from '../../../public/h-line-red.svg'

const SvgHLineRed = ({ width, height, position, top, left, right, zIndex = 1, rotate = 0 }) => {
  const styles = {
    width: `${width || 10}px`,
    height: `${height || 10}px`,
    position,
    top,
    left,
    right,
    rotate: rotate + 'deg',
    zIndex,
  }

  return (
    <HLineCyan300 style={styles} width={styles.width} height={styles.height}/>
  )
}

export default SvgHLineRed;
