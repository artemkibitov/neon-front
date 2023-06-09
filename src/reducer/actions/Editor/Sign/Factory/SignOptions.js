import OptionsFactory from "@/reducer/Core/Factory/OptionsFactory";

const allKeys = [
  'key',
  'name',
  'width',
  'height',
  'space',
  'lineSpace',
  'totalSize',
  'cost',
  'price',
  'adapter',
  'value',
  'title',
  'background',
  'textColor',
  'textShadow',
];

const SignOptions = OptionsFactory(allKeys);

export default SignOptions;
