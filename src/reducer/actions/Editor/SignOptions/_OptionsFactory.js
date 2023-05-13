export default function createOptionsFactory(params) {
  return function (optionsData) {
    return {
      calculateSize: function (textModel) {
        const optionsMap = new Map();

        for (const key in optionsData) {
          const option = {};

          for (const param of params) {
            if (optionsData[key].hasOwnProperty(param)) {
              option[param] = optionsData[key][param];
            }
          }

          optionsMap.set(key, calculateOptionSize(option, textModel));
        }

        return optionsMap;
      },

      calculatePrice: function (textModel) {
        const optionsMap = new Map();

        for (const key in optionsData) {
          const option = {};

          for (const param of params) {
            if (optionsData[key].hasOwnProperty(param)) {
              option[param] = optionsData[key][param];
            }
          }

          optionsMap.set(key, calculateOptionPrice(option, textModel));
        }

        return optionsMap;
      },
    };
  };
}

export function calculateOptionSize(option, textModel) {
  const lines = textModel.getLines();
  const maxLineLength = textModel.getMaxLineLength();

  const { width, height, space, lineSpace } = option;

  option.totalSize = {
    width: Math.floor(maxLineLength * width + maxLineLength * space),
    height: Math.floor(lines * height + (lines - 1) * lineSpace),
  };

  return option;
}

function calculateOptionPrice(option, textModel) {
  const spaces = textModel.getSpaces();
  const lines = textModel.getLines();
  const chars = textModel.getChars();

  const { cost, space, lineSpace } = option;

  const spaceCost = Math.floor(spaces * (cost / space));
  const lineCost = Math.floor(lines * (cost / lineSpace));
  const charCost = Math.floor(chars * cost);

  option.total = spaceCost + lineCost + charCost;

  return option;
}
