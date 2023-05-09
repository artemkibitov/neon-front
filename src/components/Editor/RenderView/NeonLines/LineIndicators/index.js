import React, { forwardRef } from 'react';

const HorizontalLine = forwardRef(({ neonLength }, ref) => {
  const bgColor = 'bg-slate-300';
  const vLineCss = `v-line h-1 w-full ${bgColor}`;
  const secondCss = `h-[10px] w-[2px] ${bgColor}`;

  return (
    <div
      ref={ref} className="bottom-handle size-indicator flex flex-row items-center pt-8 absolute">
      <div className="indicator-container flex items-center w-1/2 left">
        <div className={secondCss}></div>
        <span className={vLineCss}></span>
      </div>
      <div id="calculated-width" className={'text-base mx-2'}><p>{neonLength}</p></div>
      <div className="indicator-container flex items-center w-1/2 right">
        <span className={vLineCss}></span>
        <div className={secondCss}></div>
      </div>
    </div>
  );
});


const VerticalLine = forwardRef(({ averageVerticalPosition, neonHeight }, ref) => {
  const bgColor = 'bg-slate-300';
  const hLineCss = `h-line w-1 ${bgColor}`;
  const secondCss = `w-[10px] h-[2px] ${bgColor}`;

  return (
    <div
      ref={ref}
      className="right-handle size-indicator"
      style={{
        color: 'rgb(208, 205, 208)',
        position: 'absolute',
      }}
    >
      <div
        className="indicator-container top flex flex-col items-center">
        <div className={secondCss}></div>
        <div
          className={hLineCss}
          style={{
            height: `calc(${averageVerticalPosition}px)`,
          }}
        ></div>
      </div>
      <div className="calculated-height flex flex-col items-center justify-center text-base my-2">
        <p>{neonHeight}</p>
      </div>
      <div className="indicator-container flex flex-col items-center bottom">
        <div
          className={hLineCss}
          style={{
            height: `calc(${averageVerticalPosition}px)`,
          }}
        ></div>
        <div className={secondCss}></div>
      </div>
    </div>
  );
});

HorizontalLine.displayName = 'HorizontalLine';
VerticalLine.displayName = 'VerticalLine';

export { HorizontalLine, VerticalLine };
