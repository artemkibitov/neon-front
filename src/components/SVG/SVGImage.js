import React from 'react';
import LineSvg from '../../../public/line.svg'
function SVGImage({ className, width, height, position, zIndex }) {

  return (
    <LineSvg width={width} className={className} height={height} style={{position, zIndex}} />
  )
}

export default SVGImage
