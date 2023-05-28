import React from "react";
import SvgVLines from '../../../public/v-line.svg'

const SvgVLine = ({ width, height, position, top, left, right, zIndex = 1, rotate = 0 }) => {
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
    <SvgVLines style={styles} width={styles.width} height={styles.height}/>
  )
}

export default SvgVLine;
