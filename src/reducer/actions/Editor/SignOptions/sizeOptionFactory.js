import createOptionsFactory, {
  calculateOptionSize
} from "@/reducer/Core/Factory/OptionsFactory";

const sizeOptionFactory = createOptionsFactory(
  ["key", "name", "width", "height", "space", "lineSpace", "totalSize"]
);

export default sizeOptionFactory;
