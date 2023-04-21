import React from "react";

export default function RenderView({lightText}) {
  const textFormat = (text) => text.split('\n').map((line, i, arr) => (
      <React.Fragment key={i}>
        {line.length ? <p>{line}</p> : null}
        {i !== arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div>
      {textFormat(lightText)}
    </div>
  )
}
