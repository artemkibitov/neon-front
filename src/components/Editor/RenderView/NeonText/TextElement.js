import React from 'react';


// Make `TextElements` a functional component.
const TextElements = ({ lines, textLightShadow, styles }) => {
  const createTextElement = (key, line) => (
    <p key={key} style={{ textShadow: textLightShadow.value, ...styles.text }} className={'neon-sign'}>{line}</p>
  );

  const createEmptyLineElement = (key) => (
    <p key={key} style={styles.emptyLine} className={'neon-sign'} dangerouslySetInnerHTML={{ __html: '&nbsp;' }}></p>
  );

  const createElementsForEmptyLines = (lines, i) => {
    if (i === 0 || lines[i - 1].length > 0) {
      const nextNonEmptyLineIndex = lines.slice(i + 1).findIndex(line => line.length > 0);
      const additionalEmptyLinesCount = nextNonEmptyLineIndex === -1 ? 0 : nextNonEmptyLineIndex;

      return Array(additionalEmptyLinesCount)
        .fill(null)
        .map((_, index) => createEmptyLineElement(`${i}-spacer-${index}`));
    }
    return [];
  };

  return lines.flatMap((line, i, arr) => {
    const hasText = line.length > 0;
    const elements = [];

    if (hasText) {
      elements.push(createTextElement(i, line));
    } else {
      elements.push(createEmptyLineElement(`${i}-empty`));
      elements.push(...createElementsForEmptyLines(arr, i));
    }

    return elements;
  });
};

export default TextElements
