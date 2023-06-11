'use strict';

import Actions from "@/reducer/Core/Actions/Actions";

class TextActions extends Actions {
  trimLeadingEmptyLines(value) {
    const lines = value.split(/\r\n|\r|\n/);
    while (lines.length > 0 && lines[0].trim() === '') {
      lines.shift();
    }
    return lines.join('\n');
  }

  setValue(value, hash = '') {
    const textModel = this.initialState();

    const trimmedValue = this.trimLeadingEmptyLines(value);
    const chars = trimmedValue.replace(/[\s\n\r]+/g, '').length;
    const lines = trimmedValue.length ? trimmedValue.split(/\r\n|\r|\n/).length : 0;
    const space = trimmedValue.split(' ').length - 1;
    const maxLineLength = Math.max(...trimmedValue.split(/\r\n|\r|\n/).map(line => line.length));
    const emptyLines = trimmedValue.split(/\r\n|\r|\n/).filter(line => line.trim() === '').length;
    const nonEmptyLines = lines - emptyLines;

    textModel.setOriginal(value)
      .setValue(trimmedValue)
      .setChars(chars)
      .setLines(lines)
      .setEmptyLines(emptyLines)
      .setNonEmptyLines(nonEmptyLines)
      .setSpaces(space)
      .setMaxLineLength(maxLineLength)

    return this.initialState();
  }

  firstInput(value = true) {
    this.initialState().setFirstInput(value);

    return this.initialState();
  }

  init(text = '') {
    this.setValue(text)

    return this.initialState();
  }

  setRef(ref) {
    this.initialState().setRef(ref);

    return this.initialState();
  }
}

export default TextActions;
