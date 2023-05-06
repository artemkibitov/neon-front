'use strict';

class SizeFactory {
  createSize(key, name, length, height, space, heightSpace, cost, text = '', total) {
    text = text || '';
    const signLength = { height, length };

    return {
      [key]: { name, length, height, space, cost, heightSpace, total: total || cost, signLength }
    }
  }

  createDefaultValue(text = '') {
    return {
      ...this.createSize('s', 'компактний', 5, 7, 1, 2, 350, text),
      ...this.createSize('m', 'середній', 8, 15, 2, 2.5, 500, text),
      ...this.createSize('l', 'великий', 16, 27, 3, 3, 1000, text),
      ...this.createSize('xl', 'мега', 20, 32, 4, 3.5, 1400, text),
    }
  }
}

export default SizeFactory;
