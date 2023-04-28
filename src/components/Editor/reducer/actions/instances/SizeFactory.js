'use strict';

class SizeFactory {
  static createSize(key, name, length, height, space, cost) {
    return {
      [key]: {name, length, height, space, cost}
    }
  }

  static createDefaultValue() {
    return {
      ...SizeFactory.createSize('s', 'компактний', 5, 7, 1, 350),
      ...SizeFactory.createSize('m', 'середній', 8, 15, 2, 500),
      ...SizeFactory.createSize('l', 'великий', 16, 27, 3, 1000),
      ...SizeFactory.createSize('xl', 'мега', 20, 32, 4, 1400),
    }
  }
}

export default SizeFactory;
