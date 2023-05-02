'use strict';

class SizeFactory {
  createSize(key, name, length, height, space, cost, total, text = '') {
    const signLength = { height, length };

    if (text.length) {
      const lines = text.split('\n').length;
      const textLength = text.length;
      total = text.replace(/[\s\n]/g, "").length * cost;

      signLength.height = height * lines;
      signLength.length = length * textLength;
    }

    return {
      [key]: { name, length, height, space, cost, total: total || cost, signLength }
    }
  }

  createDefaultValue(text) {
    return {
      ...this.createSize('s', 'компактний', 5, 7, 1, 350, undefined, text),
      ...this.createSize('m', 'середній', 8, 15, 2, 500, undefined, text),
      ...this.createSize('l', 'великий', 16, 27, 3, 1000, undefined, text),
      ...this.createSize('xl', 'мега', 20, 32, 4, 1400, undefined, text),
    }
  }
}

export default SizeFactory;
