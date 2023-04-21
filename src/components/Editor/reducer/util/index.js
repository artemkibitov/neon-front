'use strict';

const priceFolding = (state) => Object.values(state)
  .filter(value => value && value.hasOwnProperty('cost'))
  .map(value => value.cost)
  .reduce((a, b) => a + b);

exports.priceFolding = priceFolding;
