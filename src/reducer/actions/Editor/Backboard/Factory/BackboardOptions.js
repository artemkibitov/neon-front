import OptionsFactory from "@/reducer/Core/Factory/OptionsFactory";

const allKey = [
  'key',
  'title',
  'description',
  'price',
  'background',
  'image'
];

const BackboardOption = OptionsFactory(allKey);

export default BackboardOption;
