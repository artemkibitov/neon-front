import { allKeys } from "@/reducer/actions/Editor/Sign/Data/OptionsData";

const createOptionsFactory = (allKeys) => {
  return (optionsData) => {
    const optionsMap = new Map();

    for (const key in optionsData) {
      const option = {};

      for (const param of allKeys) {
        if (optionsData[key].hasOwnProperty(param)) {
          option[param] = optionsData[key][param];
        }
      }

      optionsMap.set(key, option);
    }

    return optionsMap;
  };
}

const OptionFactory = createOptionsFactory(allKeys);

export default OptionFactory;