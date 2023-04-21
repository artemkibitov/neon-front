'use strict';

const sizeFactory = (name, length, height, cost) => ({
  name, length, height, cost
});

const data = {
  small: sizeFactory('small', 25, 12, 132),
  medium: sizeFactory('medium', 30, 24, 149),
  large: sizeFactory('large', 38, 32, 189),
  xlarge: sizeFactory('x large', 48, 38, 201),
  xxlarge: sizeFactory('xx large', 64, 42, 236),
  supersized: sizeFactory('supersized', 85, 48, 315)
};

export default data;
