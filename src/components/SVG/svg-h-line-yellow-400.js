import React from "react";
import HLineYellow400 from '../../../public/h-line-yellow-400.svg'


const SvgHLineYellow400 = ({ width, height, position, top, left, right, zIndex = 1, rotate = 0 }) => {
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
    <HLineYellow400 style={styles} width={styles.width} height={styles.height}/>
  )
}

export default SvgHLineYellow400;
