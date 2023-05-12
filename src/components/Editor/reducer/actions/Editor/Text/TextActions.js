'use strict';

import Actions from "@/components/Editor/reducer/actions/Actions";

class TextActions extends Actions {

  setValue(value) {
    const textModel = this.initialState();

    const chars = value.replace(/[\s\n\r]+/g, '').length;
    const lines = value.split(/\r\n|\r|\n/).length;
    const space = value.split(' ').length - 1;
    const maxLineLength = Math.max(...value.split(/\r\n|\r|\n/).map(line => line.length));

    textModel.setValue(value)
      .setChars(chars)
      .setLines(lines)
      .setSpaces(space)
      .setMaxLineLength(maxLineLength);

    return textModel;
  }

}

export default TextActions;
