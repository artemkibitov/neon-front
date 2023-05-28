import React from "react";
import SvgEllips from '../../../public/elips.svg'

const SvgEllipse = ({ width, height, position, top, left, right, zIndex = 1, rotate = 0 }) => {
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
    <SvgEllips style={styles} width={styles.width} height={styles.height}/>
  )
}

export default SvgEllipse;
