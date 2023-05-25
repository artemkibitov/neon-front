import { useEffect, useRef } from 'react';


function TextImageGenerator({ text, textAlign = 'center' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'black';
    context.font = '24px Exo2 italic';

    const lines = text.split('\n');
    const lineHeight = 24; // Set this to match your font size
    let y = 50; // Starting y coordinate

    for (let line of lines) {
      if(textAlign === 'right'){
        context.textAlign = 'end';
        context.fillText(line, canvas.width - 10, y);  // Add a 10px margin from the right edge
      } else if(textAlign === 'center'){
        context.textAlign = 'center';
        context.fillText(line, canvas.width / 2, y);
      } else {
        context.textAlign = 'start';
        context.fillText(line, 10, y);  // Add a 10px margin from the left edge
      }

      y += lineHeight; // Move y coordinate down for the next line
    }

  }, [text, textAlign]);

  return <canvas ref={canvasRef} width="160" height="160"/>;
}

export default TextImageGenerator;
